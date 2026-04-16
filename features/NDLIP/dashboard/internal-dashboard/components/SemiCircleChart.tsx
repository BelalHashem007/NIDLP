"use client";
import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const data = {
  datasets: [
    {
      data: [20, 120],
      backgroundColor: ["#f0f2f5", "#14a0a6"],
      borderWidth: 0,
    },
  ],
};

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

const createCenterTextPlugin = ({
  title,
  activePercent,
  inactivePercent,
}: {
  title: string;
  activePercent: number;
  inactivePercent: number;
}) => ({
  id: "centerText",
  afterDraw: (chart: Chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = chartArea.bottom - 100;

    ctx.save();

    // Title
    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#6b7280";
    ctx.textAlign = "center";
    ctx.fillText(title, centerX, centerY + 60);

    // inactive
    ctx.beginPath();
    ctx.arc(centerX - 65, centerY + 82, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#D1D5DB";
    ctx.fill();

    ctx.fillStyle = "#111827";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(`%${inactivePercent}`, centerX - 40, centerY + 85);

    // active
    ctx.beginPath();
    ctx.arc(centerX + 15, centerY + 82, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#119DA9";
    ctx.fill();

    ctx.fillStyle = "#111827";
    ctx.fillText(`%${activePercent}`, centerX + 40, centerY + 85);

    ctx.restore();
  },
});

const createTopLabelsPlugin = ({
  activeLabel,
  activeValue,
  inactiveLabel,
  inactiveValue,
}: {
  activeLabel: string;
  activeValue: number;
  inactiveLabel: string;
  inactiveValue: number;
}) => ({
  id: "topLabels",
  afterDraw(chart: Chart) {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    ctx.save();
    ctx.font = "bold 14px sans-serif";

    // Right (active)
    ctx.textAlign = "right";
    ctx.fillStyle = "#6B7280";
    ctx.fillText(activeLabel, chartArea.right, chartArea.top + 90);

    ctx.fillStyle = "#111827";
    ctx.fillText(String(activeValue), chartArea.right, chartArea.top + 110);

    // Left (inactive)
    ctx.textAlign = "left";
    ctx.fillStyle = "#6B7280";
    ctx.fillText(inactiveLabel, chartArea.left, chartArea.top + 120);

    ctx.fillStyle = "#1D212F";
    ctx.fillText(String(inactiveValue), chartArea.left, chartArea.top + 140);

    ctx.restore();
  },
});

export function SemiCircleChart({
  title,
  activeValue,
  inactiveValue,
  type,
}: {
  title: string;
  activeValue: number;
  inactiveValue: number;
  type: "employees" | "agencies";
}) {
  const total = activeValue + inactiveValue;

  const activePercent = Math.round((activeValue / total) * 100);
  const inactivePercent = Math.round((inactiveValue / total) * 100);

  const data = {
    datasets: [
      {
        data: [inactiveValue, activeValue],
        backgroundColor: ["#f0f2f5", "#14a0a6"],
        borderWidth: 0,
      },
    ],
  };

  const centerTextPlugin = createCenterTextPlugin({
    title,
    activePercent,
    inactivePercent,
  });

  const topLabelsPlugin = createTopLabelsPlugin({
    activeLabel: "نشط",
    activeValue,
    inactiveLabel: "معطل",
    inactiveValue,
  });

  return (
    <div className="">
      <Doughnut
        key={type}
        data={data}
        options={options}
        plugins={[centerTextPlugin, topLabelsPlugin]}
        width={410}
        height={176}
      />
    </div>
  );
}
