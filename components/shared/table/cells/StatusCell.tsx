"use client";

import { StatusType } from "@/components/shared/table/table.types";

type StatusCellProps = {
  value?: StatusType;
};

export function StatusCell({ value }: StatusCellProps) {
  if (!value) {
    return null;
  }

  return (
    <span
      className="inline-block rounded-xl p-2 text-center text-sm text-wrap"
      style={{ backgroundColor: value.bgColor, color: value.color }}
    >
      {value.text}
    </span>
  );
}
