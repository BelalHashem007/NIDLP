"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ar } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  label: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  from?: Date;
};

function SingleDatePicker({ label, value, from, onChange }: Props) {
  return (
    <div className="flex gap-3 items-center max-w-75 w-full">
      <div className="text-[#6B7280] text-nowrap">{label}</div>
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={
              "flex flex-1 text-sm/tight justify-between rounded-md items-center text-right font-normal bg-white border border-[#E5E7EB] px-3.25 py-3 shadow-[0px_1px_2px_0px_#0000000D] text-[#9CA3AF]"
            }
          >
            {value
              ? format(value, "yyyy/MM/dd", { locale: ar })
              : "جميع الأيام"}

            <CalendarIcon className="mr-2 h-4 w-4 text-[#6B7280]" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0 bg-white border border-[#E5E7EB] ring-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            locale={ar}
            disabled={from ? { before: from } : undefined}
            classNames={{
              day: `
              w-10 h-10 rounded-md transition-colors duration-150
              hover:bg-[#119DA9]/80 hover:text-white
              data-[selected=true]:bg-[#119DA9]
              data-[selected=true]:text-white
            `,
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function DateRangePicker() {
  const [from, setFrom] = React.useState<Date | undefined>();
  const [to, setTo] = React.useState<Date | undefined>();

  return (
    <div className="flex gap-8">
      <SingleDatePicker
        label="من تاريخ"
        value={from}
        onChange={(date) => {
          setFrom(date);
          if (to && date && to < date) {
            setTo(undefined);
          }
        }}
      />
      <SingleDatePicker
        label="الى تاريخ"
        value={to}
        from={from}
        onChange={setTo}
      />
    </div>
  );
}
