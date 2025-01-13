import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  CategoryScale,
} from "chart.js";

// Register required components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  CategoryScale
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true, // Show the legend
      position: "top",
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove gridlines for x-axis
      },
      title: {
        display: true,
        text: "Time of day (hour)",
      },
    },
    y: {
      min: 0,
      grid: {
        display: true,
        color: "rgba(200, 200, 200, 0.2)", // Light gray gridlines
      },
      title: {
        display: true,
        text: "Number of transactions",
      },
    },
  },
};

const data = {
  labels: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ],
  datasets: [
    {
      label: "Number of transcations - today",
      data: [10, 20, 15, 25, 30, 20, 40, 10, 20, 15, 25, 30, 20, 40, 10, 20],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under the curve
      fill: true, // Enables filling under the line
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      pointBorderWidth: 0,
    },
    {
      label: "Number of transactions - Yesterday",
      data: [
        8, 18, 14, 23, 29, 21, 42, 13, 21, 15, 23, 29, 19, 37, 9, 23, 18, 27,
        31, 20, 43, 14, 21, 16,
      ],
      borderColor: "rgba(84, 7, 179, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.0)", // No fill
      fill: false, // No filling under the line
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(84, 7, 179, 1)", // Point color
      pointBorderWidth: 0,
      hidden: true,
    },
    {
      label: "Average (Last 7 days)",
      data: [
        15, 25, 10, 35, 20, 25, 30, 15, 25, 10, 35, 20, 25, 30, 15, 25, 10, 35,
        20, 25, 30, 15, 25, 10,
      ],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.0)", // No fill
      fill: false, // No filling under the line
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(255, 99, 132, 1)", // Point color
      pointBorderWidth: 0,
    },
    {
      label: "Average (Last month)",
      data: [
        12, 22, 11, 29, 28, 26, 27, 12, 22, 11, 29, 28, 26, 27, 12, 22, 11, 29,
        28, 26, 27, 12, 22, 11,
      ],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.0)", // No fill
      fill: false, // No filling under the line
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(54, 162, 235, 1)", // Point color
      pointBorderWidth: 0,
      hidden: true,
    },
    {
      label: "Average (Last 3 months)",
      data: [
        16, 27, 14, 30, 23, 25, 29, 16, 27, 14, 30, 23, 25, 29, 16, 27, 14, 30,
        23, 25, 29, 16, 27, 14,
      ],
      borderColor: "rgba(255, 187, 0, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.0)", // No fill
      fill: false, // No filling under the line
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(255, 187, 0, 1)", // Point color
      pointBorderWidth: 0,
      hidden: true,
    },
  ],
};

const LineCurvesChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-lg font-medium mb-4 text-white">
          Transactions per hour
        </h2>
        <Line data={data} options={options} height={80} />
      </div>
    </motion.div>
  );
};

export default LineCurvesChart;
