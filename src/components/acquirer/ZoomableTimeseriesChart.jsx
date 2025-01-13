import Chart from "react-apexcharts";
import { motion } from "framer-motion";

const ZoomableTimeseriesChart = () => {
  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: true,
        type: "x", // Zoom along the x-axis
        autoScaleYaxis: true, // Adjust y-axis dynamically during zoom
      },
      toolbar: {
        show: true,
        style: {
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          background: "#ffffff", // Background color of the toolbar
          color: "#000000", // Font color for the options
        }, // Default zoom tool enabled
      },
    },
    stroke: {
      curve: "smooth", // Smooth line curves
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    xaxis: {
      type: "datetime", // Time-series x-axis
      labels: {
        style: {
          colors: "#8e8e8e", // Change x-axis label color
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0, // Set minimum value for the Y-axis
      max: 12000, // Set maximum value for the Y-axis
      labels: {
        style: {
          colors: "#8e8e8e", // Change y-axis label color
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      theme: "dark", // Use "dark", "light", or "custom"
    },

    colors: ["#008FFB"], // Line color
  };

  const series = [
    {
      name: "Sales",
      data: [
        { x: "2024-09-16", y: 7396 },
        { x: "2024-09-17", y: 7959 },
        { x: "2024-09-18", y: 7420 },
        { x: "2024-09-19", y: 8792 },
        { x: "2024-09-20", y: 8830 },
        { x: "2024-09-21", y: 7982 },
        { x: "2024-09-22", y: 8874 },
        { x: "2024-09-23", y: 7885 },
        { x: "2024-09-24", y: 8198 },
        { x: "2024-09-25", y: 8188 },
        { x: "2024-09-26", y: 7784 },
        { x: "2024-09-27", y: 7938 },
        { x: "2024-09-28", y: 8952 },
        { x: "2024-09-29", y: 8101 },
        { x: "2024-09-30", y: 8155 },
        { x: "2024-10-01", y: 8759 },
        { x: "2024-10-02", y: 8913 },
        { x: "2024-10-03", y: 8511 },
        { x: "2024-10-04", y: 8037 },
        { x: "2024-10-05", y: 8043 },
        { x: "2024-10-06", y: 8481 },
        { x: "2024-10-07", y: 7075 },
        { x: "2024-10-08", y: 7753 },
        { x: "2024-10-09", y: 8994 },
        { x: "2024-10-10", y: 8048 },
        { x: "2024-10-11", y: 7526 },
        { x: "2024-10-12", y: 8591 },
        { x: "2024-10-13", y: 8796 },
        { x: "2024-10-14", y: 8204 },
        { x: "2024-10-15", y: 8440 },
        { x: "2024-10-16", y: 7304 },
        { x: "2024-10-17", y: 7727 },
        { x: "2024-10-18", y: 7171 },
        { x: "2024-10-19", y: 7318 },
        { x: "2024-10-20", y: 7272 },
        { x: "2024-10-21", y: 8403 },
        { x: "2024-10-22", y: 7554 },
        { x: "2024-10-23", y: 7100 },
        { x: "2024-10-24", y: 7752 },
        { x: "2024-10-25", y: 7620 },
        { x: "2024-10-26", y: 8387 },
        { x: "2024-10-27", y: 8252 },
        { x: "2024-10-28", y: 8887 },
        { x: "2024-10-29", y: 8488 },
        { x: "2024-10-30", y: 8224 },
        { x: "2024-10-31", y: 7925 },
        { x: "2024-11-01", y: 7040 },
        { x: "2024-11-02", y: 7061 },
        { x: "2024-11-03", y: 8269 },
        { x: "2024-11-04", y: 7860 },
        { x: "2024-11-05", y: 8130 },
        { x: "2024-11-06", y: 8711 },
        { x: "2024-11-07", y: 8882 },
        { x: "2024-11-08", y: 8918 },
        { x: "2024-11-09", y: 7083 },
        { x: "2024-11-10", y: 8939 },
        { x: "2024-11-11", y: 8392 },
        { x: "2024-11-12", y: 7980 },
        { x: "2024-11-13", y: 8084 },
        { x: "2024-11-14", y: 8083 },
        { x: "2024-11-15", y: 8904 },
        { x: "2024-11-16", y: 8605 },
        { x: "2024-11-17", y: 7654 },
        { x: "2024-11-18", y: 7578 },
        { x: "2024-11-19", y: 7535 },
        { x: "2024-11-20", y: 8960 },
        { x: "2024-11-21", y: 7368 },
        { x: "2024-11-22", y: 7231 },
        { x: "2024-11-23", y: 8292 },
        { x: "2024-11-24", y: 8725 },
        { x: "2024-11-25", y: 8279 },
        { x: "2024-11-26", y: 7715 },
        { x: "2024-11-27", y: 7016 },
        { x: "2024-11-28", y: 8300 },
        { x: "2024-11-29", y: 8054 },
        { x: "2024-11-30", y: 8217 },
        { x: "2024-12-01", y: 8562 },
        { x: "2024-12-02", y: 8738 },
        { x: "2024-12-03", y: 8289 },
        { x: "2024-12-04", y: 8296 },
        { x: "2024-12-05", y: 8343 },
        { x: "2024-12-06", y: 7545 },
        { x: "2024-12-07", y: 8340 },
        { x: "2024-12-08", y: 7643 },
        { x: "2024-12-09", y: 7264 },
        { x: "2024-12-10", y: 8818 },
        { x: "2024-12-11", y: 7001 },
        { x: "2024-12-12", y: 7520 },
        { x: "2024-12-13", y: 7129 },
        { x: "2024-12-14", y: 7916 },
        { x: "2024-12-15", y: 8218 },
      ],
    },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <style>
          {`
          .apexcharts-menu-item {
            color: black !important;
            background-color: white !important;
          }
        `}
        </style>
        <h2 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Total number of initiated transactions per day
        </h2>
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </motion.div>
  );
};

export default ZoomableTimeseriesChart;
