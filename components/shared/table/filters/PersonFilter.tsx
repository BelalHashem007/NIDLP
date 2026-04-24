"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PersonOption } from "@/components/shared/table/table.types";

type PersonFilterProps = {
  options: PersonOption[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export function PersonFilter({
  options,
  placeholder,
  value,
  onChange,
}: PersonFilterProps) {
  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? placeholder;

  return (
    <div className="mt-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex w-full items-center justify-between rounded border-none bg-white px-2 py-1 text-sm font-normal outline-none">
            <span className="truncate text-gray-500">{selectedLabel}</span>
            <ChevronDown size={14} className="opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="z-50 min-h-60 rounded-lg border border-gray-100 bg-white"
        >
          <DropdownMenuItem
            dir="rtl"
            onClick={() => onChange("all")}
            className="cursor-pointer px-2 py-2 text-gray-600 outline-none hover:bg-gray-50 focus:bg-gray-50"
          >
            <span className="text-sm whitespace-nowrap">{placeholder}</span>
          </DropdownMenuItem>
          {options.map((option) =>
            option.value === "all" ? null : (
              <DropdownMenuItem
                key={option.value}
                dir="rtl"
                onClick={() => onChange(option.value)}
                className="flex cursor-pointer items-center gap-2 px-2 py-2 text-gray-600 outline-none hover:bg-gray-50 focus:bg-gray-50"
              >
                {option.photo ? (
                  <Image
                    src={option.photo}
                    alt={option.label}
                    width={20}
                    height={20}
                    className="size-5 rounded-full object-cover"
                  />
                ) : null}
                <span className="text-sm whitespace-nowrap">{option.label}</span>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
