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
      max: 300, // Set maximum value for the Y-axis
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
        { x: "2024-09-16", y: 165 },
        { x: "2024-09-17", y: 112 },
        { x: "2024-09-18", y: 140 },
        { x: "2024-09-19", y: 176 },
        { x: "2024-09-20", y: 133 },
        { x: "2024-09-21", y: 150 },
        { x: "2024-09-22", y: 180 },
        { x: "2024-09-23", y: 119 },
        { x: "2024-09-24", y: 138 },
        { x: "2024-09-25", y: 127 },
        { x: "2024-09-26", y: 148 },
        { x: "2024-09-27", y: 134 },
        { x: "2024-09-28", y: 173 },
        { x: "2024-09-29", y: 129 },
        { x: "2024-09-30", y: 144 },
        { x: "2024-10-01", y: 167 },
        { x: "2024-10-02", y: 139 },
        { x: "2024-10-03", y: 155 },
        { x: "2024-10-04", y: 128 },
        { x: "2024-10-05", y: 143 },
        { x: "2024-10-06", y: 120 },
        { x: "2024-10-07", y: 172 },
        { x: "2024-10-08", y: 131 },
        { x: "2024-10-09", y: 164 },
        { x: "2024-10-10", y: 159 },
        { x: "2024-10-11", y: 140 },
        { x: "2024-10-12", y: 169 },
        { x: "2024-10-13", y: 137 },
        { x: "2024-10-14", y: 153 },
        { x: "2024-10-15", y: 116 },
        { x: "2024-10-16", y: 177 },
        { x: "2024-10-17", y: 145 },
        { x: "2024-10-18", y: 122 },
        { x: "2024-10-19", y: 138 },
        { x: "2024-10-20", y: 173 },
        { x: "2024-10-21", y: 161 },
        { x: "2024-10-22", y: 118 },
        { x: "2024-10-23", y: 146 },
        { x: "2024-10-24", y: 176 },
        { x: "2024-10-25", y: 115 },
        { x: "2024-10-26", y: 149 },
        { x: "2024-10-27", y: 170 },
        { x: "2024-10-28", y: 112 },
        { x: "2024-10-29", y: 178 },
        { x: "2024-10-30", y: 119 },
        { x: "2024-10-31", y: 156 },
        { x: "2024-11-01", y: 180 },
        { x: "2024-11-02", y: 142 },
        { x: "2024-11-03", y: 121 },
        { x: "2024-11-04", y: 151 },
        { x: "2024-11-05", y: 139 },
        { x: "2024-11-06", y: 171 },
        { x: "2024-11-07", y: 123 },
        { x: "2024-11-08", y: 158 },
        { x: "2024-11-09", y: 177 },
        { x: "2024-11-10", y: 115 },
        { x: "2024-11-11", y: 175 },
        { x: "2024-11-12", y: 136 },
        { x: "2024-11-13", y: 130 },
        { x: "2024-11-14", y: 180 },
        { x: "2024-11-15", y: 121 },
        { x: "2024-11-16", y: 141 },
        { x: "2024-11-17", y: 113 },
        { x: "2024-11-18", y: 162 },
        { x: "2024-11-19", y: 128 },
        { x: "2024-11-20", y: 155 },
        { x: "2024-11-21", y: 144 },
        { x: "2024-11-22", y: 125 },
        { x: "2024-11-23", y: 170 },
        { x: "2024-11-24", y: 135 },
        { x: "2024-11-25", y: 126 },
        { x: "2024-11-26", y: 154 },
        { x: "2024-11-27", y: 167 },
        { x: "2024-11-28", y: 118 },
        { x: "2024-11-29", y: 147 },
        { x: "2024-11-30", y: 174 },
        { x: "2024-12-01", y: 114 },
        { x: "2024-12-02", y: 163 },
        { x: "2024-12-03", y: 178 },
        { x: "2024-12-04", y: 131 },
        { x: "2024-12-05", y: 143 },
        { x: "2024-12-06", y: 116 },
        { x: "2024-12-07", y: 157 },
        { x: "2024-12-08", y: 138 },
        { x: "2024-12-09", y: 177 },
        { x: "2024-12-10", y: 148 },
        { x: "2024-12-11", y: 125 },
        { x: "2024-12-12", y: 129 },
        { x: "2024-12-13", y: 169 },
        { x: "2024-12-14", y: 112 },
        { x: "2024-12-15", y: 160 },
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
