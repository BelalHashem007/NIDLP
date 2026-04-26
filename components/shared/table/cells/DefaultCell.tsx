"use client";

type DefaultCellProps = {
  value: string | number | undefined;
};

export function DefaultCell({ value }: DefaultCellProps) {
  return <span>{value ?? ""}</span>;
}
