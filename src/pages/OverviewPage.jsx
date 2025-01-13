import { motion } from "framer-motion";

import Header from "../components/common/Header";
import LineCurvesChart from "../components/settings/LineCurvesChart";
import KpiCard from "../components/settings/KpiCard";
import ZoomableTimeseriesChart from "../components/settings/ZoomableTimeseriesChart";
import KpiCardConversionRate from "../components/settings/KpiCardConversionRate";
import RadialBarChart from "../components/settings/RadialBarChart";
import TabsExample from "../components/TabsExample";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Transactions Overview" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ZoomableTimeseriesChart />
          <TabsExample />
          <LineCurvesChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
