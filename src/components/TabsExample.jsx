// src/components/TabsExample.jsx

import { useState } from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import BarChartPercentage from "../components/settings/BarChartPercentage";
import StackedBarChart from "../components/settings/StackedBarChart";

const TabsExample = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabGroup
      className="col-span-2"
      onChange={(index) => setSelectedTab(index)}
    >
      {/* Tab List */}
      <TabList>
        <Tab>Total Number</Tab>
        <Tab>Percentage Share</Tab>
      </TabList>

      {/* Tab Panels */}
      <TabPanels>
        <TabPanel>
          {/* Content for the Overview tab */}
          <div className="p-4 ">
            <StackedBarChart />
          </div>
        </TabPanel>

        <TabPanel>
          {/* Content for the Details tab */}
          <div className="p-4">
            <BarChartPercentage />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default TabsExample;
