import { motion } from "framer-motion";
import { useState } from "react";

import Header from "../components/common/Header";
import ComboboxComponent from "../components/paymentOption/Combobox";
import LineCurvesChart from "../components/paymentOption/LineCurvesChart";
import KpiCard from "../components/paymentOption/KpiCard";
import ZoomableTimeseriesChart from "../components/paymentOption/ZoomableTimeseriesChart";
import KpiCardConversionRate from "../components/paymentOption/KpiCardConversionRate";
import RadialBarChart from "../components/paymentOption/RadialBarChart";
import TabsExample from "../components/TabsExample";

const PaymentOptionPage = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  const handlePaymentOptionChange = (paymentOption) => {
    setSelectedPaymentOption(paymentOption);
    console.log("Selected payment Option:", paymentOption);
    // Optionally fetch data or update charts based on the selected payment Option here
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Payment Option" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-0 ">
        <div className="p-4 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Payment Option Selection */}
            <ComboboxComponent
              onSelectPaymentOption={handlePaymentOptionChange}
            />
            {/* Conditional rendering based on selected Payment Option */}
          </motion.div>
          {selectedPaymentOption && (
            <>
              <motion.div
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-1 mb-8 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <KpiCard paymentOptionId={selectedPaymentOption} />
                <RadialBarChart paymentOptionId={selectedPaymentOption} />
                <KpiCardConversionRate
                  paymentOptionId={selectedPaymentOption}
                />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ZoomableTimeseriesChart
                  paymentOptionId={selectedPaymentOption}
                />
                <TabsExample paymentOptionId={selectedPaymentOption} />
                <LineCurvesChart paymentOptionId={selectedPaymentOption} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PaymentOptionPage;
