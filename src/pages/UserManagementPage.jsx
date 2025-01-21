// src/components/TabsExample.jsx

import { useState } from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import UserRegistration from "../components/userManagement/UserRegistration";
import ModifyUser from "../components/userManagement/ModifyUser";
import Header from "../components/common/Header";

const TabsExample = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="User Management" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0">
        <TabGroup
          selectedIndex={activeTab}
          onChange={setActiveTab}
          className="col-span-2"
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
                <ModifyUser isActive={activeTab === 1} />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </div>
  );
};

export default TabsExample;
