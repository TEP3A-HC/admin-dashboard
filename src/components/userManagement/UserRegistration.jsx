import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  Title,
  Text,
  Grid,
  TextInput,
  Select,
  SelectItem,
  Button,
} from "@tremor/react";
import Cookies from "js-cookie"; // Import js-cookie for cookie management
//import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions
//import { app } from "../../firebaseConfig"; // Import initialized Firebase app

const UserRegistration = () => {
  // State to track form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    role: "admin", // Default role
    status: "active", // Default status
  });

  // Firestore reference
  //const db = getFirestore(app);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const token = Cookies.get("auth_token");

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData), // Send user data to backend
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      alert("User successfully added!");
      setFormData({
        fullName: "",
        username: "",
        password: "",
        email: "",
        role: "admin",
        status: "active",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add user.");
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title>User Management</Title>
          <Text className="mb-2">
            Fill out the form below to add a new user:
          </Text>
          <div className="p-2">
            <Card>
              <form onSubmit={handleSubmit}>
                <Grid numItemsMd={2} numItemsLg={2} className="gap-6">
                  <div className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong col-span-2 ">
                    <Text>Full Name</Text>
                    <TextInput
                      placeholder="Enter full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      type="text"
                      className="mt-2"
                    />
                  </div>
                  <div className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    <Text>Username</Text>
                    <TextInput
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                  <div className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    <Text>Password</Text>
                    <TextInput
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="mt-2"
                      type="password"
                    />
                  </div>
                  <div className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong col-span-2">
                    <Text>Email Address</Text>
                    <TextInput
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      className="mt-2"
                    />
                  </div>
                  <div className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    <Text>Role</Text>
                    <Select
                      name="role"
                      value={formData.role}
                      onChange={(value) =>
                        handleInputChange({
                          target: { name: "role", value }, // Correctly capturing the selected value
                        })
                      }
                      className="mt-2"
                    >
                      <SelectItem value="super_admin">SUPER_ADMIN</SelectItem>
                      <SelectItem value="admin">ADMIN</SelectItem>
                      <SelectItem value="viewer">VIEWER</SelectItem>
                    </Select>
                  </div>
                  <div className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    <Text>Status</Text>
                    <Select
                      name="status"
                      value={formData.status}
                      onChange={(e) =>
                        handleInputChange({
                          target: { name: "status", value: e },
                        })
                      }
                      className="mt-2"
                    >
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </Select>
                  </div>
                </Grid>
                <Button type="submit" className="mt-6">
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserRegistration;
