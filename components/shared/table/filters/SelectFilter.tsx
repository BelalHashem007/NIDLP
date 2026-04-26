"use client";

type SelectFilterProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

export function SelectFilter({
  options,
  value,
  onChange,
}: SelectFilterProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="mt-3 w-full rounded bg-white px-1 py-0.5 text-sm font-normal text-gray-500 outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
