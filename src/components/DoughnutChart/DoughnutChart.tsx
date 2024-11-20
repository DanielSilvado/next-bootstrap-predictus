"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface DoughnutChartProps {
  data: { label: string; value: number; color: string }[];
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
        onClick: () => {},
      },
      datalabels: {
        formatter: (value: number) => {
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: "#212121",
        font: {
          weight: "bold" as const,
          size: 12,
        },
        anchor: "end" as const,
        align: "end" as const,
        offset: 5,
      },
    },
    cutout: "65%",
  };

  return <Doughnut data={chartData} options={options} />;
};
