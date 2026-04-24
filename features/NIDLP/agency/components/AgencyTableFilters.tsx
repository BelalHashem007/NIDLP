"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableHead, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const ALL = "all";

export type AgencyOption = {
  key: string;
  entity_name: string;
  email: string;
  logo_url: string;
};

type Props = {
  agencyKeyFilter: string;
  setAgencyKeyFilter: (value: string) => void;
  selectedAgencyLabel: string;
  agencyOptions: AgencyOption[];

  cityFilter: string;
  setCityFilter: (value: string) => void;
  selectedCityLabel: string;
  cityOptions: string[];

  userCountQuery: string;
  setUserCountQuery: (value: string) => void;

  setPage: (page: number) => void;
};

export function AgencyTableFilters({
  agencyKeyFilter,
  setAgencyKeyFilter,
  selectedAgencyLabel,
  agencyOptions,

  cityFilter,
  setCityFilter,
  selectedCityLabel,
  cityOptions,

  userCountQuery,
  setUserCountQuery,

  setPage,
}: Props) {
  const [agencyPopoverOpen, setAgencyPopoverOpen] = useState(false);
  const [cityPopoverOpen, setCityPopoverOpen] = useState(false);
  const [agencyListSearch, setAgencyListSearch] = useState("");
  const [cityListSearch, setCityListSearch] = useState("");

  const filteredAgencyOptions = useMemo(() => {
    const q = agencyListSearch.trim().toLowerCase();
    if (!q) return agencyOptions;
    return agencyOptions.filter(
      (row) =>
        row.entity_name.toLowerCase().includes(q) ||
        row.email.toLowerCase().includes(q),
    );
  }, [agencyOptions, agencyListSearch]);

  const filteredCityOptions = useMemo(() => {
    const q = cityListSearch.trim();
    if (!q) return cityOptions;
    return cityOptions.filter((c) => c.includes(q));
  }, [cityOptions, cityListSearch]);

  return (
    <TableRow className="border-0">
      <TableHead className="py-2 px-4 font-normal align-top">
        <Popover
          open={agencyPopoverOpen}
          onOpenChange={(o) => {
            setAgencyPopoverOpen(o);
            if (!o) setAgencyListSearch("");
          }}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-9 w-full items-center justify-between gap-2 rounded-md border border-[#D1D5DB] bg-white px-3 text-start text-sm text-[#111827]"
            >
              <span className="min-w-0 truncate">{selectedAgencyLabel}</span>
              <ChevronDown className="size-4 shrink-0 text-[#6B7280]" />
            </button>
          </PopoverTrigger>

          <PopoverContent
            className="w-[min(100vw-2rem,22rem)] ring-0 gap-0 rounded-sm p-2 shadow-[0px_10px_15px_-3px_#0000001A] bg-white"
            align="start"
          >
            <div className="relative mb-2">
              <Search
                className={`${agencyListSearch.length > 0 && "hidden"} pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]`}
              />
              <input
                type="search"
                value={agencyListSearch}
                onChange={(e) => setAgencyListSearch(e.target.value)}
                className="h-9 w-full rounded-md border border-[#D1D5DB] bg-white py-1 pe-2 ps-9 text-sm outline-none focus-visible:border-[#119DA9] focus-visible:ring-2 focus-visible:ring-[#119DA9]/25"
                placeholder="بحث"
                aria-label="بحث في أسماء الجهات"
              />
            </div>
            <div
              className="max-h-60 overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              <button
                type="button"
                onClick={() => {
                  setAgencyKeyFilter(ALL);
                  setPage(1);
                  setAgencyPopoverOpen(false);
                }}
                className={cn(
                  "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                  agencyKeyFilter === ALL && "bg-[#F3F4F6]",
                )}
              >
                الكل
              </button>
              {filteredAgencyOptions.map(
                ({ key, entity_name, email, logo_url }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setAgencyKeyFilter(key);
                      setPage(1);
                      setAgencyPopoverOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-start gap-2 rounded-md px-2 py-2 text-start hover:bg-[#F3F4F6]",
                      agencyKeyFilter === key && "bg-[#F3F4F6]",
                    )}
                  >
                    <Image
                      src={logo_url}
                      width={32}
                      height={32}
                      alt=""
                      className="size-8 shrink-0 rounded-full object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-[#111827]">
                        {entity_name}
                      </div>
                      <div className="text-xs text-[#6B7280]">{email}</div>
                    </div>
                  </button>
                ),
              )}
            </div>
          </PopoverContent>
        </Popover>
      </TableHead>

      <TableHead className="py-2 px-4 font-normal align-top">
        <Popover
          open={cityPopoverOpen}
          onOpenChange={(o) => {
            setCityPopoverOpen(o);
            if (!o) setCityListSearch("");
          }}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-9 w-full items-center justify-between gap-2 rounded-md border border-[#D1D5DB] bg-white px-3 text-start text-sm text-[#111827]"
            >
              <span className="min-w-0 truncate">{selectedCityLabel}</span>
              <ChevronDown className="size-4 shrink-0 text-[#6B7280]" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[min(100vw-2rem,16rem)] gap-0 ring-0 bg-white rounded-sm p-2 shadow-[0px_10px_15px_-3px_#0000001A]"
            align="start"
            dir="rtl"
          >
            <div className="relative mb-2">
              <Search
                className={`${cityListSearch.length > 0 && "hidden"}  pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]`}
              />
              <input
                type="search"
                value={cityListSearch}
                onChange={(e) => setCityListSearch(e.target.value)}
                className="h-9 w-full rounded-md border border-[#D1D5DB] bg-white py-1 pe-2 ps-9 text-sm outline-none focus-visible:border-[#119DA9] focus-visible:ring-2 focus-visible:ring-[#119DA9]/25"
                placeholder="بحث"
                aria-label="بحث في المدن"
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  setCityFilter(ALL);
                  setPage(1);
                  setCityPopoverOpen(false);
                }}
                className={cn(
                  "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                  cityFilter === ALL && "bg-[#F3F4F6]",
                )}
              >
                الكل
              </button>
              {filteredCityOptions.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setCityFilter(city);
                    setPage(1);
                    setCityPopoverOpen(false);
                  }}
                  className={cn(
                    "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                    cityFilter === city && "bg-[#F3F4F6]",
                  )}
                >
                  {city}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </TableHead>

      <TableHead className="py-2 px-4 font-normal align-top">
        <div className="relative">
          <Search className="pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            inputMode="numeric"
            value={userCountQuery}
            onChange={(e) => {
              setUserCountQuery(e.target.value);
              setPage(1);
            }}
            className="h-9 w-full rounded-md border border-[#D1D5DB] bg-white py-1 px-2 text-sm outline-none focus-visible:border-[#119DA9] focus-visible:ring-2 focus-visible:ring-[#119DA9]/25"
            placeholder="ابحث برقم"
            aria-label="ابحث بعدد المستخدمين"
          />
        </div>
      </TableHead>

      <TableHead className="w-14 py-2 px-2" />
    </TableRow>
  );
}
