"use client";

import { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import type { Chart, ChartData } from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

const MiniSparkline = () => {
  const chartRef = useRef<Chart<"line"> | null>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    // Create the gradient for the area fill
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 80);
    gradient.addColorStop(0, "rgba(0, 169, 181, 0.2)"); // Teal semi-transparent
    gradient.addColorStop(1, "rgba(0, 169, 181, 0)"); // Fully transparent

    setChartData({
      labels: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      datasets: [
        {
          fill: true,
          label: "Requests",
          data: [15, 8, 10, 11, 11], // Sample data matching your trend
          borderColor: "#00A9B5", // Teal color from your image
          backgroundColor: gradient,
          tension: 0.4, // This makes the line smooth/curved
          borderWidth: 2,
          pointRadius: [0, 6, 0, 6, 0], // Only show dots for specific points
          pointBackgroundColor: "#fff",
          pointBorderColor: "#00A9B5",
          pointBorderWidth: 2,
          pointHoverRadius: 7,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: false }, // Hide X axis
      y: {
        display: false, // Hide Y axis
        min: 0, // Adjust based on your data
      },
    },
    elements: {
      point: {
        hitRadius: 10,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line ref={chartRef} data={chartData} options={options} />

      <div>
        <span className="absolute -bottom-5 left-0 text-sm text-[#6B7280]">
          الشهر الماضي
        </span>
        <span className="absolute -top-5 right-0 text-sm text-[#6B7280]">
          الشهر الحالي
        </span>
      </div>
    </div>
  );
};

export default MiniSparkline;
