"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Active Licenses Chart',
      color: 'white',
    },
  },
  scales: {
    y: {
      ticks: {
        color: 'white',
      },
    },
    x: {
      ticks: {
        color: 'white',
      },
    },
  },
  datasets: {
    bar: {
      categoryPercentage: 0.5,
      barPercentage: 0.6
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Generate random data
const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 100));
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomData(),
      backgroundColor: 'white',
      color: 'white',
    },
    {
      label: 'Dataset 2',
      data: generateRandomData(),
      backgroundColor: 'blue',
      color: 'white',
    },
  ],
};

export function ActiveChart() {
  return <Bar options={options} data={data} />;
}
