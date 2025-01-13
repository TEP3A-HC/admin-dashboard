import { motion } from "framer-motion";

import Header from "../components/common/Header";
import TabsExample from "../components/TabsExample";
import KpiCard from "../components/dpmax/KpiCard";
import ZoomableTimeseriesChart from "../components/dpmax/ZoomableTimeseriesChart";
import KpiCardConversionRate from "../components/dpmax/KpiCardConversionRate";
import RadialBarChart from "../components/dpmax/RadialBarChart";
import ChartComponent from "../components/dpmax/ChartComponent";

const DPMaxPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="DPMax" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-1 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <KpiCard />
          <RadialBarChart />
          <KpiCardConversionRate />
        </motion.div>
        <div>
          <ZoomableTimeseriesChart />
          <div className="mt-6">
            <TabsExample />
          </div>
          <ChartComponent />
        </div>
      </main>
    </div>
  );
};

export default DPMaxPage;
