import Image from "next/image";
import Flag from "@/public/assets/flag.png";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
};

export function FormInput({
  name,
  type,
  placeholder,
  className,
  ...props
}: Props) {
  return (
    <div className="flex items-center relative">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`py-3 flex-1 px-3.25 ${name === "phone" && "pl-25"} border border-[#E5E7EB] rounded-md placeholder:text-[#9CA3AF] shadow-[0px_1px_2px_0px_#0000000D] ${className}`}
        {...props}
      />
      {name === "phone" && (
        <div className="flex items-center gap-1 absolute top-4 left-5 border-r border-[#D1D5DB] pr-1.5">
          <span className="text-[#6B7280] font-bold text-sm/[20px]">966+</span>
          <Image src={Flag} alt="علم السعودية" className="h-3 w-4.5" />
        </div>
      )}
    </div>
  );
}
