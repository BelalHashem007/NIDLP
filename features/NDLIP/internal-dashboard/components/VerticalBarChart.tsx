"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  Scale,
  Chart,
} from "chart.js";
import { useCallback, useId, useMemo } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

/** 32×32 assets; tick padding reserves space so labels render below the icons */
const IMAGE_SIZE = 32;
const IMAGE_TOP_INSET = 4;
const IMAGE_LABEL_GAP = 8;
const EXTRA_TICK_PADDING = IMAGE_SIZE + IMAGE_LABEL_GAP;

const imageCache = new Map<string, HTMLImageElement>();

function getImage(url: string): HTMLImageElement {
  let img = imageCache.get(url);
  if (!img) {
    img = new Image();
    img.src = url;
    imageCache.set(url, img);
  }
  return img;
}

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
  const pluginId = useId().replace(/:/g, "");

  const hasAnyImage = Boolean(
    imageUrls?.length &&
    (imageUrls.length === 1
      ? typeof imageUrls[0] === "string" && imageUrls[0].length > 0
      : imageUrls.some((u) => typeof u === "string" && u.length > 0)),
  );

  const resolveImageUrl = useCallback(
    (index: number): string | undefined => {
      if (!imageUrls?.length) return undefined;
      const at = imageUrls[index];
      if (typeof at === "string" && at.length > 0) return at;
      if (
        imageUrls.length === 1 &&
        typeof imageUrls[0] === "string" &&
        imageUrls[0].length > 0
      ) {
        return imageUrls[0];
      }
      return undefined;
    },
    [imageUrls],
  );

  const imagePlugin = useMemo(() => {
    if (!hasAnyImage || !imageUrls?.length) {
      return null;
    }

    const stateKey = `__barLabelImagesState_${pluginId}`;
    type PluginState = { rafId?: number | null; abort?: AbortController };

    const getState = (chart: Chart): PluginState | undefined => {
      const store = chart as unknown as Record<string, unknown>;
      const value = store[stateKey];
      if (!value || typeof value !== "object") return undefined;
      return value as PluginState;
    };

    const setState = (chart: Chart, state: PluginState) => {
      const store = chart as unknown as Record<string, unknown>;
      store[stateKey] = state;
    };

    const clearState = (chart: Chart) => {
      const store = chart as unknown as Record<string, unknown>;
      delete store[stateKey];
    };

    return {
      id: `barLabelImages-${pluginId}`,
      beforeDestroy: (chart: Chart) => {
        const state = getState(chart);
        if (!state) return;

        if (typeof state.rafId === "number") {
          cancelAnimationFrame(state.rafId);
        }
        state.abort?.abort();
        clearState(chart);
      },
      afterDraw: (chart: Chart) => {
        const x = chart.scales.x as Scale | undefined;
        if (!x) return;

        const { ctx } = chart;
        const labelCount = chart.data.labels?.length ?? 0;

        const state = getState(chart) ?? {};
        if (!state.abort) state.abort = new AbortController();
        setState(chart, state);

        const scheduleRedraw = () => {
          if (typeof state.rafId === "number") {
            cancelAnimationFrame(state.rafId);
          }

          state.rafId = requestAnimationFrame(() => {
            // Chart can be destroyed/unmounted before async image events fire.
            const maybeDestroyed = chart as unknown as { _destroyed?: boolean };
            const isDestroyed = Boolean(maybeDestroyed._destroyed);
            if (isDestroyed || !chart.canvas || !chart.ctx) return;
            if ("isConnected" in chart.canvas && !chart.canvas.isConnected) return;

            chart.update("none");
          });
        };

        for (let index = 0; index < labelCount; index++) {
          const targetUrl = resolveImageUrl(index);
          if (!targetUrl) continue;

          const img = getImage(targetUrl);

          if (!img.complete) {
            img.addEventListener("load", scheduleRedraw, {
              once: true,
              signal: state.abort.signal,
            });
            img.addEventListener("error", scheduleRedraw, {
              once: true,
              signal: state.abort.signal,
            });
          }

          if (!img.complete || img.naturalWidth === 0) continue;

          const xPos = x.getPixelForTick(index);
          const yPos = x.top + IMAGE_TOP_INSET;

          ctx.save();
          ctx.drawImage(
            img,
            xPos - IMAGE_SIZE / 2,
            yPos,
            IMAGE_SIZE,
            IMAGE_SIZE,
          );
          ctx.restore();
        }
      },
    };
  }, [hasAnyImage, imageUrls, pluginId, resolveImageUrl]);

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

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context: TooltipItem<"bar">) =>
              `${tooltipLabel}: ${context.raw}`,
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          afterFit: (axis: Scale) => {
            const base = 80;
            axis.height = hasAnyImage ? base + EXTRA_TICK_PADDING : base;
          },
          ticks: {
            padding: hasAnyImage ? EXTRA_TICK_PADDING : 0,
            color: "#4B5563",
            font: {
              size: 14,
              weight: 500,
            },
            maxRotation: 0,
            autoSkip: false,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    }),
    [hasAnyImage, tooltipLabel],
  );

  const plugins = imagePlugin ? [imagePlugin] : [];

  return <Bar data={data} options={options} plugins={plugins} />;
}
