import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  Legend,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  orange,
  orangeLight,
  purple,
  purpleLight,
} from "../../constants/color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  ArcElement,
  CategoryScale,
  Filler,
  LinearScale,
  Legend,
  PointElement,
  LineElement,
  Tooltip
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChatOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: value,
        backgroundColor: [purple, orange],
        hoverBackgroundColor: [purpleLight, orangeLight],
        borderColor: [purple, orange],
        offset: 40,
      },
    ],
  };
  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChatOptions}
    />
  );
};

export { LineChart, DoughnutChart };
