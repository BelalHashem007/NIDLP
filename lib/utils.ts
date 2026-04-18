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
