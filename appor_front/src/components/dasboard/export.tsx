"use client"
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Import Filler plugin
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);

export const options = {
  responsive: true,
  tension: 0.3 // 2. Set the tension (curvature) of the line to your liking.  (You may want to lower this a smidge.)
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// Generate random data
const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 100));
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: generateRandomData(),
      borderColor: "rgb(21, 150, 74)",
      backgroundColor: "gray",
      fill: {
        target: "origin", // Set the fill options
        above: "rgba(128, 128, 128, 0.307)"
      }
    },
    {
      label: "Dataset 2",
      data: generateRandomData(),
      borderColor: "rgb(25, 220, 74)",
      backgroundColor: "rgba(49, 114, 49, 0.389)",
      fill: "origin" // Set the fill options
    }
  ]
};

export function ExportChart() {
  return <Line options={options} data={data} />;
}
