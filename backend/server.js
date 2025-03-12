import express from "express"; // Import express as an ES module
import cors from "cors"; // Import CORS
import admin from "firebase-admin"; // Import Firebase Admin SDK
import { readFileSync } from "fs"; // Import to read the service account key
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import JWT for token generation

const app = express();
const port = 4000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(
  readFileSync("./firebase-admin-key.json", "utf8")
);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore reference
const db = admin.firestore();

/**
/**
 * Middleware to verify Firebase Authentication token
 */
// Middleware to authenticate users using Firebase ID token
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <TOKEN>"
  console.log("Extracted token from request:", token);

  if (!token) {
    console.log("No token provided.");
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verify JWT token
    const decodedToken = jwt.verify(token, JWT_SECRET);
    console.log("Decoded Token:", decodedToken);
    req.user = decodedToken; // Attach user info to request
    next(); // Continue to the next middleware
  } catch (error) {
    console.error("JWT Authentication error:", error.message);
    return res.status(403).json({ error: "Unauthorized: Invalid token" });
  }
};

/**
 * Register a new user with hashed password
 */
app.post("/register", authenticateUser, async (req, res) => {
  const { fullName, username, password, email, role, status } = req.body;

  if (req.user.role !== "admin" && req.user.role !== "super_admin") {
    return res
      .status(403)
      .json({ error: "Forbidden: Only admins can register users" });
  }

  try {
    // 🔹 Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds = 10

    // 🔹 Create user in Firebase Authentication (only for email login)
    let userRecord;
    try {
      userRecord = await admin.auth().createUser({
        email,
        password, // Stored securely in Firebase Auth
        displayName: fullName,
      });
    } catch (error) {
      console.error("Error creating Firebase Auth user:", error.message);
      return res
        .status(500)
        .json({ error: "Failed to create user in Firebase Authentication" });
    }

    // 🔹 Store user in Firestore (store hashed password)
    await db.collection("users").doc(userRecord.uid).set({
      fullName,
      username,
      email,
      password: hashedPassword, // Store hashed password
      role,
      status,
      firebaseUid: userRecord.uid, // Store Firebase UID for reference
    });

    res
      .status(201)
      .json({ message: "User registered successfully!", uid: userRecord.uid });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * Login route with bcrypt password verification
 */

const JWT_SECRET =
  "906741d6d1df6d27705bc9b52b199865b560116acebdfcdf06c194b2a5db8b5123380195feea6f6ba6803f51400a0266c13ff80632e2d22da804fcf30640054b";

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:", { username, password });

  try {
    // 🔹 Fetch user by username from Firestore
    const userRef = db.collection("users");
    const snapshot = await userRef.where("username", "==", username).get();

    if (snapshot.empty) {
      console.log("No user found with username:", username);
      return res.status(401).json({ error: "Invalid username or password" });
    }

    let user = null;
    snapshot.forEach((doc) => {
      user = { ...doc.data(), id: doc.id };
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // 🔹 Check if user status is "inactive"
    if (user.status !== "active") {
      console.log(`User ${username} is inactive. Login denied.`);
      return res
        .status(403)
        .json({ error: "Your account is inactive. Contact an administrator." });
    }

    // 🔹 Compare hashed password from Firestore
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    console.log("Successful login for user:", username);

    // 🔹 Create a JWT token (instead of Firebase custom token)
    const token = jwt.sign(
      { uid: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" } // Set token expiration
    );

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    console.error("Error during login:", err.message, err.stack);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/all-users", authenticateUser, async (req, res) => {
  console.log("Fetching all users. User role:", req.user.role);

  if (req.user.role !== "admin" && req.user.role !== "super_admin") {
    console.log("Unauthorized access attempt. User role:", req.user.role);
    return res.status(403).json({ error: "Forbidden: Admins only" });
  }

  try {
    // ✅ Pass `db` to Firestore functions properly
    const usersRef = db.collection("users"); // Correct reference
    const usersSnapshot = await usersRef.orderBy("fullName").get(); // Fetch ordered users

    if (usersSnapshot.empty) {
      console.log("No users found in Firestore.");
      return res.status(404).json({ error: "No users found" });
    }

    let usersList = [];
    usersSnapshot.forEach((doc) => {
      usersList.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched users:", usersList);
    res.status(200).json({ users: usersList });
  } catch (error) {
    console.error("Error fetching users from Firestore:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/delete-user/:id", authenticateUser, async (req, res) => {
  console.log("Attempting to delete user. User role:", req.user.role); // Log the role

  // 🔹 Check if user has admin permissions (Same as /all-users)
  if (req.user.role !== "admin" && req.user.role !== "super_admin") {
    console.log("Unauthorized delete attempt. User role:", req.user.role);
    return res.status(403).json({ error: "Forbidden: Admins only" });
  }

  try {
    const { id } = req.params;
    const userRef = db.collection("users").doc(id);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
      console.log("User not found:", id);
      return res.status(404).json({ error: "User not found" });
    }

    await userRef.delete();
    console.log("User deleted successfully:", id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * 🔹 Secure Firestore API (Requires Authentication)
 * Fetch user details (Only accessible with valid token)
 
app.get("/user-details", authenticateUser, async (req, res) => {
  try {
    const userRef = db
      .collection("users")
      .where("username", "==", req.user.uid);
    const snapshot = await userRef.get();
    if (snapshot.empty) {
      return res.status(404).json({ error: "User not found" });
    }
    let userData = null;
    snapshot.forEach((doc) => {
      userData = doc.data();
    });
    res.status(200).json({ user: userData });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
*/
/**
 * 🔹 Secure Firestore API (Requires Admin Role)
 * Fetch all users (Only Admins can access)
 */
