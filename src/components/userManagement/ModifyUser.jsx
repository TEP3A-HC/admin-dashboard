import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { motion } from "framer-motion";
import Cookies from "js-cookie"; // To get the authentication token
import { Trash2 } from "lucide-react"; // Import Trash Icon from lucide-react

export default function WorkspaceTable({ isActive }) {
  const [data, setData] = useState([]); // State to store the data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State for errors

  // Fetch users from the API when the component mounts
  useEffect(() => {
    fetchUsers();
  }, [isActive]);

  const fetchUsers = async () => {
    try {
      const authToken = Cookies.get("auth_token"); // Get the correct token
      console.log("Fetched auth_token from cookies:", authToken);

      if (!authToken) {
        console.error("No auth_token found in cookies.");
        setError("Authorization token is missing.");
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/all-users`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`, // Send the correct token
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response status:", response.status); // Log response

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.error || "Failed to fetch users.");
      }

      const data = await response.json();
      console.log("Fetched user data:", data);
      setData(data.users); // Store users in state
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err.message || "An error occurred while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const authToken = Cookies.get("auth_token");
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/delete-user/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete user.");
      }

      alert("User deleted successfully!");
      fetchUsers(); // Refresh users after deletion
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if any
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-8">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
              <h3 className="font-semibold text-dark-tremor-content-strong">
                Registered users
              </h3>
              <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Overview of all registered users within your organization.
              </p>
            </div>
            <Table className="mt-8 border border-gray-700 rounded-lg p-2">
              <TableHead>
                <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border ">
                  <TableHeaderCell className="text-dark-tremor-content-strong">
                    Full Name
                  </TableHeaderCell>
                  <TableHeaderCell className="text-dark-tremor-content-strong">
                    Username
                  </TableHeaderCell>
                  <TableHeaderCell className="text-dark-tremor-content-strong">
                    Email
                  </TableHeaderCell>
                  <TableHeaderCell className="text-dark-tremor-content-strong">
                    Role
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-dark-tremor-content-strong">
                    Status
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-dark-tremor-content-strong">
                    Action
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {user.fullName}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {user.username}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {user.email}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {user.role}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong text-right">
                      {user.status}
                    </TableCell>
                    <TableCell className="text-right">
                      {/* Trash Can Button */}
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="p-1 text-red-500 hover:text-red-700"
                        title="Delete User"
                      >
                        <Trash2 size={18} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
