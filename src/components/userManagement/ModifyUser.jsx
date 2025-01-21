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
import { db } from "../../firebaseConfig"; // Import your Firebase configuration
import { collection, getDocs, orderBy, query } from "firebase/firestore"; // Firebase Firestore methods

export default function WorkspaceTable({ isActive }) {
  const [data, setData] = useState([]); // State to store the data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch users from Firestore when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Create a query to order by 'fullName' (you can adjust the field name as needed)
        const usersQuery = query(
          collection(db, "users"),
          orderBy("fullName") // This will sort the users by 'fullName' in ascending order
        );
        const querySnapshot = await getDocs(usersQuery); // Firestore collection name
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push(doc.data()); // Assuming you're storing user data in Firestore
        });
        setData(usersData); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchUsers(); // Call the fetch function
  }, [isActive]); // Only fetch data when the tab is active

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
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
                    Password
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
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {item.fullName}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {item.username}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {item.password}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {item.email}
                    </TableCell>
                    <TableCell className="font-medium text-dark-tremor-content-strong">
                      {item.role}
                    </TableCell>
                    <TableCell className="text-right font-medium text-dark-tremor-content-strong">
                      {item.status}
                    </TableCell>
                    <TableCell className="text-right">{item.Action}</TableCell>
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
