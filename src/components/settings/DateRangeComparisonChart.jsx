import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const DateRangeComparisonChart = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const today = new Date();
    const lastMonthEnd = new Date(today.setDate(today.getDate() - 1));
    const lastMonthStart = new Date(lastMonthEnd);
    lastMonthStart.setMonth(lastMonthStart.getMonth() - 1);

    setDateRange([lastMonthStart, lastMonthEnd]);

    const calculateDynamicPart = (start, end) => {
      if (!start || !end) return "";

      const startDate = new Date(start);
      const endDate = new Date(end);
      const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

      const previousPeriodEnd = new Date(startDate);
      previousPeriodEnd.setDate(startDate.getDate() - 1);
      const previousPeriodStart = new Date(previousPeriodEnd);
      previousPeriodStart.setDate(previousPeriodEnd.getDate() - daysDiff + 1);

      const lastYearStart = new Date(startDate);
      const lastYearEnd = new Date(endDate);
      lastYearStart.setFullYear(startDate.getFullYear() - 1);
      lastYearEnd.setFullYear(endDate.getFullYear() - 1);

      return [
        {
          value: "previous_period",
          label: `Previous Period - ${previousPeriodStart.toLocaleDateString(
            "en-US"
          )} - ${previousPeriodEnd.toLocaleDateString("en-US")}`,
        },
        {
          value: "last_year",
          label: `Last Year - ${lastYearStart.toLocaleDateString(
            "en-US"
          )} - ${lastYearEnd.toLocaleDateString("en-US")}`,
        },
      ];
    };

    setOptions(calculateDynamicPart(lastMonthStart, lastMonthEnd));
  }, []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#111827",
      color: "#ffffff",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#111827",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#6B7280" : "#6B7280",
      color: state.isFocused ? "#ffffff" : "#111827",
    }),
  };

  const chartData = {
    labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Transactions (Selected Period)",
        data: [10, 20, 15, 25, 30, 35, 40, 38, 45, 50],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Transactions (Comparison Period)",
        data: [12, 18, 14, 22, 28, 32, 37, 35, 42, 47],
        borderColor: "green",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-6 bg-gray-800 rounded shadow-md col-span-2">
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-blue-600">
            Date Range (MM/DD/YYYY)
          </label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            isClearable
            className="border rounded p-2 w-60 bg-gray-900 border-white"
          />
        </div>

        <span className="text-lg font-medium">compared to</span>

        <div className="flex-1">
          <label className="block text-sm font-medium text-green-600">
            Comparison Period
          </label>
          <Select options={options} styles={customStyles} />
        </div>
      </div>

      <div className="h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DateRangeComparisonChart;
