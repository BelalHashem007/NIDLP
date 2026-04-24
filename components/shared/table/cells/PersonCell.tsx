"use client";

import Image from "next/image";

import { PersonType } from "@/features/NDLIP/data/table.types";

type PersonCellProps = {
  value?: PersonType;
};

export function PersonCell({ value }: PersonCellProps) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 px-4">
      <Image
        src={value.photo}
        width={32}
        height={32}
        alt={value.name}
        className="size-8 rounded-full"
      />
      <span className="whitespace-nowrap">{value.name}</span>
    </div>
  );
}
