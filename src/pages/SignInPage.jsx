import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@tremor/react";
import Cookies from "js-cookie"; // Import js-cookie for cookie management

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Raw response:", await response.clone().text());

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Invalid username or password.");
      }

      const data = await response.json();
      console.log("Received JWT token:", data.token);

      // ✅ Store the token and roles in secure cookies
      Cookies.set("auth_token", data.token, {
        secure: true, // Only accessible over HTTPS
        sameSite: "Strict",
        expires: 1, // Expires in 1 day
      });

      Cookies.set("user_role", data.role || "", {
        secure: true,
        sameSite: "Strict",
        expires: 1,
      });
      console.log("Role set in cookie:", Cookies.get("user_role"));

      alert("Login successful!");
      console.log("Navigating to /overview");
      navigate("/overview");
    } catch (err) {
      console.error("Error during login:", err.message);
      setError(err.message || "An error occurred. Please try again.");
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
