import Chart from "react-apexcharts";

const BarChartWithZoom = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      zoom: {
        enabled: true, // Enable zooming
        type: "x", // Zoom type: x-axis, y-axis, or both (xy)
        autoScaleYaxis: true, // Auto-scale y-axis when zooming
      },
      toolbar: {
        show: true, // Display zoom toolbar
        tools: {
          zoom: true,
          zoomin: true,
          zoomout: true,
          reset: true, // Reset zoom button
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%", // Adjust bar width
        endingShape: "rounded", // Rounded bar edges
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#FFFFFF", // Set color for x-axis labels
          fontSize: "12px", // Adjust font size
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      title: {
        text: "Values",
        style: {
          color: "#FFFFFF", // Set color for y-axis title
          fontSize: "12px",
        }, // Y-axis label
      },
      labels: {
        style: {
          colors: "#FFFFFF", // Set color for y-axis labels
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1, // Full bar opacity
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      labels: {
        colors: "#FFFFFF", // Set legend label colors
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [44, 55, 41, 67, 22, 43, 21, 49, 72, 31, 48, 56],
    },
    {
      name: "Series 2",
      data: [53, 32, 33, 52, 13, 44, 32, 37, 63, 21, 46, 33],
    },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl text-white mb-4">Bar Chart with Zoom</h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChartWithZoom;
