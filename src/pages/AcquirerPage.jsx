import { motion } from "framer-motion";
import { useState } from "react";

import Header from "../components/common/Header";
import ComboboxComponent from "../components/acquirer/Combobox";
import LineCurvesChart from "../components/acquirer/LineCurvesChart";
import KpiCard from "../components/acquirer/KpiCard";
import ZoomableTimeseriesChart from "../components/acquirer/ZoomableTimeseriesChart";
import KpiCardConversionRate from "../components/acquirer/KpiCardConversionRate";
import RadialBarChart from "../components/acquirer/RadialBarChart";
import TabsExample from "../components/TabsExample";

const AcquirerPage = () => {
  const [selectedAcquirer, setSelectedAcquirer] = useState(null);

  const handleAcquirerChange = (acquirer) => {
    setSelectedAcquirer(acquirer);
    console.log("Selected acquirer:", acquirer);
    // Optionally fetch data or update charts based on the selected acquirer here
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Acquirer" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0 ">
        <div className="p-4 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Acquirer Selection */}
            <ComboboxComponent onSelectAcquirer={handleAcquirerChange} />
            {/* Conditional rendering based on selected acquirer */}
          </motion.div>
          {selectedAcquirer && (
            <>
              <motion.div
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-1 mb-8 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <KpiCard acquirerId={selectedAcquirer} />
                <RadialBarChart acquirerId={selectedAcquirer} />
                <KpiCardConversionRate acquirerId={selectedAcquirer} />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ZoomableTimeseriesChart acquirerId={selectedAcquirer} />
                <TabsExample acquirerId={selectedAcquirer} />
                <LineCurvesChart acquirerId={selectedAcquirer} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AcquirerPage;
