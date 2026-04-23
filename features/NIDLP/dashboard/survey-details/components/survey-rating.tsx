"use client";

import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
  type TooltipItem,
} from "chart.js";
import { useMemo } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BAR_COLOR = "#119DA9";
const RATING_LABELS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export type SurveyRatingQuestion = {
  questionText: string;
  average?: number;
  /** Count of responses per rating, index 0 = rating 1 … index 9 = rating 10 */
  answers: number[];
};

export function SurveyRating({ question }: { question: SurveyRatingQuestion }) {
  const counts = useMemo(() => {
    const c = question.answers.slice(0, 10);
    while (c.length < 10) c.push(0);
    return c;
  }, [question.answers]);

  const total = counts.reduce((a, b) => a + b, 0);

  const data = {
    labels: RATING_LABELS,
    datasets: [
      {
        data: counts,
        backgroundColor: BAR_COLOR,
        borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
        barPercentage: 0.55,
        categoryPercentage: 0.65,
        maxBarThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    plugins: {
      legend: { display: false },
      tooltip: {
        rtl: true,
        callbacks: {
          title: () => "",
          label: (ctx: TooltipItem<"bar">) => {
            const n = Number(ctx.raw) || 0;
            return `${n} اختيار`;
          },
        },
      },
    },
    scales: {
      x: {
        border: { display: false },
        grid: { display: false },
        ticks: {
          font: { size: 12 },
          color: "#374151",
        },
      },
      y: {
        min: 0,
        border: { display: false },
        grid: {
          color: "#F3F4F6",
        },
        ticks: {
          font: { size: 11 },
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div dir="rtl">
      <ReusableCardComponent>
        <div className="p-8 flex flex-col gap-6 rounded-lg">
          <div className="flex flex-col gap-2.5 py-3">
            <h3 className="font-bold text-sm/[20px] text-[#111827] text-right">
              {question.questionText}
            </h3>
            <p className="text-xs/[16px] text-[#6B7280] text-right">
              أجاب {total} من الأشخاص على هذا السؤال
            </p>
          </div>

          <div className="relative h-72 w-full">
            <Bar data={data} options={options} />
          </div>
        </div>
      </ReusableCardComponent>
    </div>
  );
}
