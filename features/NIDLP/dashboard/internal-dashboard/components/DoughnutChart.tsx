"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [120, 24, 60, 75],
      backgroundColor: ["#1565AD", "#D8B22D", "#35B0D1", "#149B7E"],
      borderColor: ["#1565AD", "#D8B22D", "#35B0D1", "#149B7E"],
      borderWidth: 1,
      cutout: "85%",
    },
  ],
};
const BREAKDOWN_BULLETS = {
  in_progress: ["#1565AD", "#2E7BC4", "#35B0D1", "#64B5F6", "#A8D4F0"],
  late: ["#D8B22D"],
  update: ["#32C5E4", "#59D8F1", "#91E9FF"],
  compelete: ["#009688", "#26A69A", "#4DB6AC", "#80CBC4", "#B2EBF2"],
};

const ROWS = {
  in_progress: [
    { value: 20, label: "جديد" },
    { value: 60, label: "جاري العمل عليه" },
    { value: 10, label: "بانتظار تحديث البيانات" },
    { value: 10, label: "بانتظار مراجعة التحديث" },
    { value: 20, label: "بانتظار اسناد الطلب لجهة حكومية" },
  ],
  late: [{ value: 24, label: "متأخر" }],
  update: [
    { value: 20, label: "جاري العمل عليه" },
    { value: 20, label: "بانتظار تحديث البيانات" },
    { value: 20, label: "بالنتظار مراجعة التحديث" },
  ],
  compelete: [
    { value: 20, label: "تم تسليم الحل" },
    { value: 15, label: "ملغي" },
    { value: 15, label: "مرفوض" },
    { value: 15, label: "مغلق" },
    { value: 10, label: "تم اكتمال الحل" },
  ],
};

const getOrCreateTooltip = (chart: Chart) => {
  const parent = chart.canvas.parentNode as HTMLElement | null;
  if (!parent) throw new Error("Chart canvas has no parent");

  if (
    parent.style.position !== "relative" &&
    parent.style.position !== "absolute"
  ) {
    parent.style.position = "relative";
  }

  let tooltipEl = parent.querySelector(
    "div.custom-tooltip",
  ) as HTMLDivElement | null;

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.classList.add("custom-tooltip");
    Object.assign(tooltipEl.style, {
      background: "transparent",
      boxShadow: "none",
      border: "none",
      padding: "0",
      pointerEvents: "none",
      position: "absolute",
      transition: "opacity .1s ease",
      zIndex: "10",
    });
    parent.appendChild(tooltipEl);
  }

  return tooltipEl;
};

function buildInProgressTooltip(
  segmentColor: string,
  key: "in_progress" | "late" | "update" | "compelete",
  label: string,
) {
  console.log(ROWS[key]);
  const rows = ROWS[key]
    .map((row, i) => {
      const color = BREAKDOWN_BULLETS[key][i] ?? segmentColor;
      return `
      <li style="display:flex; text-wrap:nowrap; align-items:center; gap:8px; margin:0 0 6px 0; padding:0; list-style:none; font-size:13px; color:#374151; line-height:1.4;">
        <span style="flex-shrink:0; width:8px; height:8px; border-radius:50%; background:${color};"></span>
        <span>${row.value} ${row.label}</span>
      </li>`;
    })
    .join("");

  return `
    <div style="display:flex; align-items:flex-start; direction:${key === "compelete" || key === "update" ? "rtl;" : "ltr;"}  ${key === "late" && "margin-top:70px;"} ${key === "update" && "margin-right:300px;"}">
      <div style="display:flex; position:relative; align-items:center; flex-shrink:0; margin-top:10px;">
        <div style="width:40px; height:2px; background:${segmentColor};"></div>
        <div style="width:8px; height:8px; border-radius:50%; background:${segmentColor}; flex-shrink:0;"></div>
      </div>
      <div dir="rtl" style="flex:1; min-width:0;">
        <div style="font-weight:700; font-size:16px; color:${segmentColor}; margin-bottom:10px; line-height:1.3;">
          ${label}
        </div>
        <ul style="margin:0; padding:0;">
          ${rows}
        </ul>
      </div>
    </div>`;
}

const externalTooltipHandler = (context: {
  chart: Chart;
  tooltip?: Chart["tooltip"];
}) => {
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  if (!tooltip || tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  const ds = chart.data.datasets[0];
  const colors = (ds.backgroundColor as string[]) ?? [];
  const segmentLabels = [
    "طلب تحت الإجراء",
    "طلب متأخر",
    "طلب تحديث مستمر",
    "طلب مكتمل",
  ];

  if (tooltip.dataPoints?.length) {
    const dataIndex = tooltip.dataPoints[0].dataIndex;
    const color = colors[dataIndex] ?? "#1565AD";

    if (dataIndex === 0) {
      tooltipEl.innerHTML = buildInProgressTooltip(
        color,
        "in_progress",
        segmentLabels[0],
      );
    } else if (dataIndex === 1) {
      tooltipEl.innerHTML = buildInProgressTooltip(
        color,
        "late",
        segmentLabels[1],
      );
    } else if (dataIndex === 2) {
      tooltipEl.innerHTML = buildInProgressTooltip(
        color,
        "update",
        segmentLabels[2],
      );
    } else {
      tooltipEl.innerHTML = buildInProgressTooltip(
        color,
        "compelete",
        segmentLabels[3],
      );
    }
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  tooltipEl.style.opacity = "1";

  const dataIndex = tooltip.dataPoints[0].dataIndex;

  if (dataIndex === 2) {
    tooltipEl.style.left = `${positionX + tooltip.caretX - 270}px`;
  } else if (dataIndex === 3) {
    tooltipEl.style.left = `${positionX + tooltip.caretX - 200}px`;
  } else {
    tooltipEl.style.left = `${positionX + tooltip.caretX + 14}px`;
  }

  if (dataIndex === 3) {
    tooltipEl.style.top = `${positionY + tooltip.caretY + 40}px`;
  } else {
    tooltipEl.style.top = `${positionY + tooltip.caretY}px`;
  }
  tooltipEl.style.transform = "translateY(-50%)";
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: Chart) => {
    const { ctx, width, height } = chart;
    ctx.restore();

    ctx.font = "16px/24px sans-serif";
    ctx.fillStyle = "#6B7280";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    const text1 = "اجمالي عدد الطلبات";
    ctx.fillText(text1, width / 2, height / 2 - 20);

    ctx.font = "bold 40px/56px sans-serif";
    ctx.fillStyle = "#1D212F";
    const text2 = "280";
    ctx.fillText(text2, width / 2, height / 2 + 15);

    ctx.save();
  },
};

export function DoughnutChart() {
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
      },
    },
  };
  return (
    <div className="flex-1 max-w-full">
      <Doughnut data={data} plugins={[centerTextPlugin]} options={options} />
    </div>
  );
}
