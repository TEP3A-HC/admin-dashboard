import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@tremor/react";
import { db } from "../firebaseConfig"; // Import Firebase configuration
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      // Fetch all users from the Firestore "users" collection
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);

      // Convert Firestore data to an array of user objects
      const users = [];
      usersSnapshot.forEach((doc) => {
        users.push(doc.data());
      });

      // Check if the entered username and password match any user in the database
      const matchedUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (matchedUser) {
        // Successful login
        alert("Login successful!");
        navigate("/overview"); // Redirect to the overview page
      } else {
        // Failed login
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error fetching users from the database:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-4 py-10 lg:px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Log in to your account
        </h3>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="username"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Username
            </label>
            <TextInput
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Username"
              className="mt-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Password
            </label>
            <TextInput
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              placeholder="Password"
              className="mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mt-2">
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
