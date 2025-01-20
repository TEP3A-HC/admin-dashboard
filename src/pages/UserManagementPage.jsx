// src/components/TabsExample.jsx

import { useState } from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import UserRegistration from "../components/userManagement/UserRegistration";
import ModifyUser from "../components/userManagement/ModifyUser";
import Header from "../components/common/Header";

const TabsExample = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="User Management" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0">
        <TabGroup
          className="col-span-2"
          onChange={(index) => setSelectedTab(index)}
        >
          {/* Tab List */}
          <TabList>
            <Tab>Register User</Tab>
            <Tab>Modify</Tab>
          </TabList>

          {/* Tab Panels */}
          <TabPanels>
            <TabPanel>
              {/* Content for the Overview tab */}
              <div className="p-4 ">
                <UserRegistration />
              </div>
            </TabPanel>

            <TabPanel>
              {/* Content for the Details tab */}
              <div className="p-4">
                <ModifyUser />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </div>
  );
};

export default TabsExample;
