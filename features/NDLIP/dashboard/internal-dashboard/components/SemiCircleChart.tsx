"use client";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

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
  topLabelsPositions,
}: {
  activeLabel: string;
  activeValue: number;
  inactiveLabel: string;
  inactiveValue: number;
  topLabelsPositions?: number[];
}) => ({
  id: "topLabels",
  afterDraw(chart: Chart) {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    ctx.save();
    ctx.font = "bold 14px sans-serif";
    const lineHeight = 18;

    // Helper function to handle wrapping
    const wrapText = (text: string, x: number, y: number, maxWidth: number) => {
      const words = text.split(" ");
      let line = "";
      let currentY = y;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + " ";
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
      return currentY; // Return last Y position for the value/number below
    };

    // Right (active)
    ctx.textAlign = "right";
    ctx.fillStyle = "#6B7280";
    const activeLabelY = wrapText(
      activeLabel,
      chartArea.right,
      chartArea.top + (topLabelsPositions ? topLabelsPositions[0] : 90),
      100,
    );

    ctx.fillStyle = "#111827";
    ctx.fillText(
      String(activeValue),
      chartArea.right,
      activeLabelY + lineHeight,
    );

    // Left (inactive)
    ctx.textAlign = "left";
    ctx.fillStyle = "#6B7280";
    const inactiveLabelY = wrapText(
      inactiveLabel,
      chartArea.left,
      chartArea.top + (topLabelsPositions ? topLabelsPositions[1] : 90),
      100,
    );

    ctx.fillStyle = "#1D212F";
    ctx.fillText(
      String(inactiveValue),
      chartArea.left,
      inactiveLabelY + lineHeight,
    );

    ctx.restore();
  },
});

export function SemiCircleChart({
  title,
  activeValue,
  inactiveValue,
  type,
  colors,
  toplabels,
  topLabelsPositions,
}: {
  title: string;
  activeValue: number;
  inactiveValue: number;
  type: "employees" | "agencies" | "suverysDashboard";
  colors?: string[];
  toplabels?: string[];
  topLabelsPositions?: number[];
}) {
  const total = activeValue + inactiveValue;

  const activePercent = Math.round((activeValue / total) * 100);
  const inactivePercent = Math.round((inactiveValue / total) * 100);

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

  const centerTextPlugin = createCenterTextPlugin({
    title,
    activePercent,
    inactivePercent,
  });

  const topLabelsPlugin = createTopLabelsPlugin({
    activeLabel:
      type === "suverysDashboard" && toplabels ? toplabels[0] : "نشط",
    activeValue,
    inactiveLabel:
      type === "suverysDashboard" && toplabels ? toplabels[1] : "معطل",
    inactiveValue,
    topLabelsPositions,
  });

  return (
    <div>
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
