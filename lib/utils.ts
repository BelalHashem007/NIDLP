import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIso(iso: string) {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("ar-EG", {
    timeStyle: "short",
    dateStyle: "long",
  }).format(date);
}

/**
 * Makes a fake url in the browser memory, downloads that url and then cleans up.
 * @param data json object
 * @param fileName filename as a string
 */
export function downloadJSON(data: object, fileName: string = "data.json") {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
