"use client";

type DateFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export function DateFilter({ value, onChange }: DateFilterProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="mt-3 w-full rounded bg-white px-1 py-0.5 text-sm font-normal text-gray-500 outline-none"
    />
  );
}
