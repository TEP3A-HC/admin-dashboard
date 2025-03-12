import admin from "firebase-admin"; // Import Firebase Admin SDK
import { readFileSync } from "fs";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(
  readFileSync("./firebase-admin-key.json", "utf8")
);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore reference
const db = admin.firestore();

const migratePasswords = async () => {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      console.log("No users found in Firestore.");
      return;
    }

    const batch = db.batch(); // Batch updates for efficiency

    for (const doc of snapshot.docs) {
      const userData = doc.data();

      if (userData.password && !userData.password.startsWith("$2b$")) {
        // Hash the existing plaintext password
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Update the user document with the hashed password
        batch.update(doc.ref, { password: hashedPassword });

        console.log(`Updated password for user: ${userData.username}`);
      } else {
        console.log(`User ${userData.username} already has a hashed password.`);
      }
    }

    // Commit all updates
    await batch.commit();
    console.log("Password migration completed successfully.");
  } catch (error) {
    console.error("Error during password migration:", error);
  }
};

// Run the migration
migratePasswords();
