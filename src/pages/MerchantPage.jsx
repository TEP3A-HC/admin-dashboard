import { motion } from "framer-motion";
import { useState } from "react";

import Header from "../components/common/Header";
import ComboboxComponent from "../components/merchant/Combobox";
import LineCurvesChart from "../components/merchant/LineCurvesChart";
import KpiCard from "../components/merchant/KpiCard";
import ZoomableTimeseriesChart from "../components/merchant/ZoomableTimeseriesChart";
import KpiCardConversionRate from "../components/merchant/KpiCardConversionRate";
import RadialBarChart from "../components/merchant/RadialBarChart";
import TabsExample from "../components/TabsExample";

const MerchantPage = () => {
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  const handleMerchantChange = (merchant) => {
    setSelectedMerchant(merchant);
    console.log("Selected merchant:", merchant);
    // Optionally fetch data or update charts based on the selected merchant here
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Merchant" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0 ">
        <div className="p-4 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Merchant Selection */}
            <ComboboxComponent onSelectMerchant={handleMerchantChange} />
            {/* Conditional rendering based on selected merchant */}
          </motion.div>
          {selectedMerchant && (
            <>
              <motion.div
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-1 mb-8 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <KpiCard merchantId={selectedMerchant} />
                <RadialBarChart merchantId={selectedMerchant} />
                <KpiCardConversionRate merchantId={selectedMerchant} />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ZoomableTimeseriesChart merchantId={selectedMerchant} />
                <TabsExample merchantId={selectedMerchant} />
                <LineCurvesChart merchantId={selectedMerchant} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default MerchantPage;
