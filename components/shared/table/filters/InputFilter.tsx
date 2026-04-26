"use client";

type InputFilterProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export function InputFilter({
  placeholder,
  value,
  onChange,
}: InputFilterProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="mt-3 w-full rounded bg-white px-1 py-0.5 text-sm font-normal outline-none"
    />
  );
}
