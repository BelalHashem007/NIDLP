"use client";

import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

import { OrderRow } from "@/features/NDLIP/data/table.types";

export const buildIconMap = (rows: OrderRow[]): Record<string, LucideIcon> => {
  const names = new Set(
    rows.flatMap((row) => row.actions?.map((action) => action.iconName) ?? []),
  );

  return Object.fromEntries(
    [...names].map((name) => {
      const pascalCase = name
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");

      return [
        name.toLowerCase(),
        (LucideIcons as unknown as Record<string, LucideIcon>)[pascalCase] ??
          LucideIcons.HelpCircle,
      ];
    }),
  );
};
