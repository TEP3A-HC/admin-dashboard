import { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const countries = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech-republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
];

const subData = {
  Austria: ["Austria_SubBar1", "Austria_SubBar2", "Austria_SubBar3"],
  Spain: ["Spain_SubBar1", "Spain_SubBar2", "Spain_SubBar3"],
};

const baseOptions = {
  plugins: {
    title: { display: true, color: "#ffffff" },
    legend: { labels: { color: "#ffffff" } },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { ticks: { color: "#ffffff" } },
    y: { ticks: { color: "#ffffff" }, beginAtZero: true },
  },
};

const generateRandomData = (length, min = 1, max = 50) =>
  Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );

const ChartCard = ({ title, data, options, onBarClick }) => (
  <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h2 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
      {title}
    </h2>
    <div className="h-80">
      <Bar
        data={data}
        options={{
          ...options,
          onClick: (event, elements) => {
            if (elements.length > 0) {
              const barIndex = elements[0].index;
              onBarClick(barIndex);
            }
          },
        }}
      />
    </div>
  </motion.div>
);

const TestChartComponent = () => {
  const [isSubLevel, setIsSubLevel] = useState(false); // Track if we are on a sub-level
  const initialChartConfigs = [
    {
      title: "Number of transactions for selected period",
      data: {
        labels: countries,
        datasets: [
          {
            label: "Transactions",
            data: generateRandomData(countries.length),
            backgroundColor: "rgb(229, 35, 28)",
          },
        ],
      },
      options: baseOptions,
    },
    {
      title: "Number of transactions per acquirer for selected period",
      data: {
        labels: countries,
        datasets: [
          {
            label: "Yapily",
            data: generateRandomData(countries.length),
            backgroundColor: "rgb(255, 213, 0)",
          },
          {
            label: "SaltEdge",
            data: generateRandomData(countries.length),
            backgroundColor: "rgb(28, 229, 48)",
          },
        ],
      },
      options: baseOptions,
    },
  ];

  const [chartConfigs, setChartConfigs] = useState(initialChartConfigs);

  const handleBarClick = (barIndex) => {
    if (isSubLevel) return; // Prevent further clicks if already on a sub-level

    const country = countries[barIndex];

    if (subData[country]) {
      const updatedConfigs = chartConfigs.map((config) => ({
        ...config,
        data: {
          labels: subData[country],
          datasets: config.data.datasets.map((dataset) => ({
            ...dataset,
            data: generateRandomData(subData[country].length),
          })),
        },
      }));

      setChartConfigs(updatedConfigs);
      setIsSubLevel(true); // Mark as sub-level
    }
  };

  const handleReset = () => {
    setChartConfigs(initialChartConfigs);
    setIsSubLevel(false); // Reset to main level
  };

  return (
    <div>
      {/* Reset Button */}
      <div className="mb-6">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Reset Charts
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {chartConfigs.map((config, index) => (
          <ChartCard
            key={index}
            {...config}
            onBarClick={(barIndex) => handleBarClick(barIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestChartComponent;
