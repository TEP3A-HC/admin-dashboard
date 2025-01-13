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

const StackedBarChart = () => {
  const data = {
    labels: Array.from({ length: 90 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (90 - i));
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }),
    datasets: [
      {
        label: "Funded",
        data: Array.from(
          { length: 90 },
          () => Math.floor(Math.random() * 20) + 1
        ),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Declined",
        data: Array.from(
          { length: 90 },
          () => Math.floor(Math.random() * 20) + 1
        ),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Pending",
        data: Array.from(
          { length: 90 },
          () => Math.floor(Math.random() * 20) + 1
        ),
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
      <h2 className="text-lg font-medium mb-4 text-white">
        Daily number of transactions divided by status
      </h2>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </motion.div>
  );
};

export default StackedBarChart;
