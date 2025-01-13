import Chart from "react-apexcharts";

const RadialBarChart = () => {
  const chartOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%", // Adjust the inner hollow size
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "28px",
            color: "#1E90FF",
            fontWeight: "bold",
          },
        },
      },
    },
    labels: ["Conversion Rate"], // Label for the radial bar
    colors: ["#1E90FF"], // Customize the color of the radial bar
  };

  const chartSeries = [70]; // The value of the radial bar (percentage)

  return (
    <div className="radial-bar-chart col-span-2">
      <h2 className="text-lg font-medium mb-4 text-white text-center">
        Conversion rate - TODAY (so far)
      </h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
        height={300} // Set the height of the chart
      />
    </div>
  );
};

export default RadialBarChart;
