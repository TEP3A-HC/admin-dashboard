import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartPercentage = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Funded",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Declined",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Pending",
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        color: "#ffffff",
      },
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        min: 0,
        max: 100,
        stacked: true,
        ticks: {
          color: "#ffffff",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Percentage of every transaction status per day
      </h2>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </motion.div>
  );
};

export default BarChartPercentage;
