import Header from "../components/common/Header";
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

const UserManagementPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="About" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="p-6">
          <Card>
            <Title>User Management</Title>
            <Text className="mb-6">
              Fill out the form below to manage users:
            </Text>
            <form>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6">
                <div>
                  <Text>First Name</Text>
                  <TextInput placeholder="Enter first name" />
                </div>
                <div>
                  <Text>Last Name</Text>
                  <TextInput placeholder="Enter last name" />
                </div>
                <div>
                  <Text>Email Address</Text>
                  <TextInput placeholder="Enter email" type="email" />
                </div>
                <div>
                  <Text>Role</Text>
                  <Select>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </Select>
                </div>
                <div>
                  <Text>Status</Text>
                  <Select>
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
    </div>
  );
};

export default UserManagementPage;
