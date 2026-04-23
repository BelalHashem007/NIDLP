"use client";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const CHART_WIDTH = 410;
const CHART_HEIGHT = 176;

const options = {
  rotation: -90,
  circumference: 180,
  cutout: "85%",
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  maintainAspectRatio: false,
};

export function SemiCircleChart({
  title,
  activeValue,
  inactiveValue,
  type,
  colors,
  toplabels,
  topLabelsPositions,
  rightLabelPositions,
}: {
  title: string;
  activeValue: number;
  inactiveValue: number;
  type: "employees" | "agencies" | "suverysDashboard";
  colors?: string[];
  toplabels?: string[];
  topLabelsPositions?: number[];
  rightLabelPositions?: number[];
}) {
  const total = activeValue + inactiveValue;

  const activePercent = total > 0 ? Math.round((activeValue / total) * 100) : 0;
  const inactivePercent =
    total > 0 ? Math.round((inactiveValue / total) * 100) : 0;

  const data = {
    datasets: [
      {
        data: [inactiveValue, activeValue],
        backgroundColor: colors
          ? [colors[0], colors[1]]
          : ["#f0f2f5", "#14a0a6"],
        borderWidth: 0,
      },
    ],
  };

  const activeLabel =
    type === "suverysDashboard" && toplabels ? toplabels[0] : "نشط";
  const inactiveLabel =
    type === "suverysDashboard" && toplabels ? toplabels[1] : "معطل";

  const activeTop = topLabelsPositions?.[0] ?? 30;
  const inactiveTop = topLabelsPositions?.[1] ?? 110;

  const activeRight = rightLabelPositions?.[0] ?? 0;

  return (
    <div
      className="relative shrink-0"
      dir="ltr"
      style={{ width: CHART_WIDTH, height: CHART_HEIGHT }}
    >
      <Doughnut
        key={type}
        data={data}
        options={options}
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col">
        {/* Top: inactive (left) & active (right) */}
        <div
          className="absolute -left-10 flex max-w-25 flex-col gap-0 text-left text-sm font-bold leading-4.5"
          style={{ top: inactiveTop }}
        >
          <span className="text-[#6B7280]">{inactiveLabel}</span>
          <span className="text-[#1D212F] text-center">{inactiveValue}</span>
        </div>
        <div
          className="absolute flex max-w-25 flex-col gap-0 text-right text-sm font-bold leading-4.5"
          style={{ top: activeTop, right: activeRight }}
        >
          <span className="text-[#6B7280]">{activeLabel}</span>
          <span className="text-[#111827] text-center">{activeValue}</span>
        </div>

        {/* Bottom center: title + legend percents */}
        <div className="mt-auto flex flex-col items-center pb-1">
          <p className="text-center text-lg font-bold text-[#6b7280]">
            {title}
          </p>
          <div className="mt-1 flex items-center gap-6 text-sm font-bold text-[#111827]">
            <span className="flex items-center gap-2">
              <span
                className="size-2 shrink-0 rounded-full bg-[#D1D5DB]"
                aria-hidden
              />
              %{inactivePercent}
            </span>
            <span className="flex items-center gap-2">
              <span
                className="size-2 shrink-0 rounded-full bg-[#119DA9]"
                aria-hidden
              />
              %{activePercent}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
