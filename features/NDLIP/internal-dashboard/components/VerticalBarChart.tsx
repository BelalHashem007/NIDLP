"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Chart,
  TooltipItem,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function VerticalBarChart({
  labels,
  dataValues,
  tooltipLabel,
  imageUrls,
}: {
  labels: (string | string[])[];
  dataValues: number[];
  tooltipLabel: string;
  imageUrls?: (string | null | undefined)[];
}) {
  const chartRef = useRef<Chart<"bar"> | null>(null);
  const [positions, setPositions] = useState<number[]>([]);

  // 🎯 Calculate avatar positions after render
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const xScale = chart.scales.x;
    if (!xScale) return;

    const newPositions = labels.map((_, i) => xScale.getPixelForTick(i));

    setPositions(newPositions);
  }, [labels, dataValues]);

  useEffect(() => {
    const handleResize = () => {
      const chart = chartRef.current;
      if (!chart) return;

      const xScale = chart.scales.x;
      if (!xScale) return;

      setPositions(labels.map((_, i) => xScale.getPixelForTick(i)));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [labels]);

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: "#119DA9",
        barThickness: 20,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar">) => `${tooltipLabel}: ${ctx.raw}`,
        },
      },
    },
    scales: {
      x: {
        border: { display: false },
        ticks: { display: imageUrls ? false : true },
      },
      y: {
        border: { display: false },
        grid: {
          color: "#CDCDCD",
        },
      },
    },
    layout: {
      padding: {
        bottom: imageUrls ? 60 : 0,
      },
    },
  };

  return (
    <div className="relative w-full">
      <Bar ref={chartRef} data={data} options={options} />

      {/* ✅ HTML avatars layer */}
      {positions.map((x, i) => {
        const url = imageUrls?.[i];
        if (!url) return null;

        return (
          <Fragment key={i}>
            <Image
              key={i}
              src={url}
              alt=""
              className="absolute rounded-full object-cover border border-white shadow"
              width={32}
              height={32}
              style={{
                left: x,
                bottom: 24,
                transform: "translateX(-50%)",
              }}
            />
            <div
              className="absolute text-xs text-gray-500 text-center text-wrap max-w-20 h-[32px]"
              style={{
                bottom: -10,
                left: x,
                transform: "translateX(-50%)",
              }}
            >
              {Array.isArray(labels[i]) ? labels[i].join(" ") : labels[i]}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
