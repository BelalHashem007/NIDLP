"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Building2, ChevronDown, Search, UsersRound } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TableHead, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const ALL = "all";

export type CompanyOption = {
  key: string;
  company_name: string;
  owner_email: string;
  company_logo: string;
};

export type OwnerOption = {
  key: string;
  owner_name: string;
  owner_email: string;
};

type Props = {
  companyKeyFilter: string;
  setCompanyKeyFilter: (value: string) => void;
  selectedCompanyLabel: string;
  companyOptions: CompanyOption[];

  ownerKeyFilter: string;
  setOwnerKeyFilter: (value: string) => void;
  selectedOwnerLabel: string;
  ownerOptions: OwnerOption[];

  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  selectedCategoryLabel: string;
  categoryOptions: string[];

  setPage: (page: number) => void;
};

export function CompanyTableFilters({
  companyKeyFilter,
  setCompanyKeyFilter,
  selectedCompanyLabel,
  companyOptions,

  ownerKeyFilter,
  setOwnerKeyFilter,
  selectedOwnerLabel,
  ownerOptions,

  categoryFilter,
  setCategoryFilter,
  selectedCategoryLabel,
  categoryOptions,

  setPage,
}: Props) {
  const [companyPopoverOpen, setCompanyPopoverOpen] = useState(false);
  const [ownerPopoverOpen, setOwnerPopoverOpen] = useState(false);
  const [categoryPopoverOpen, setCategoryPopoverOpen] = useState(false);
  const [companyListSearch, setCompanyListSearch] = useState("");
  const [ownerListSearch, setOwnerListSearch] = useState("");
  const [categoryListSearch, setCategoryListSearch] = useState("");

  const filteredCompanyOptions = useMemo(() => {
    const q = companyListSearch.trim().toLowerCase();
    if (!q) return companyOptions;
    return companyOptions.filter(
      (row) =>
        row.company_name.toLowerCase().includes(q) ||
        row.owner_email.toLowerCase().includes(q),
    );
  }, [companyOptions, companyListSearch]);

  const filteredOwnerOptions = useMemo(() => {
    const q = ownerListSearch.trim().toLowerCase();
    if (!q) return ownerOptions;
    return ownerOptions.filter(
      (row) =>
        row.owner_name.toLowerCase().includes(q) ||
        row.owner_email.toLowerCase().includes(q),
    );
  }, [ownerOptions, ownerListSearch]);

  const filteredCategoryOptions = useMemo(() => {
    const q = categoryListSearch.trim();
    if (!q) return categoryOptions;
    return categoryOptions.filter((c) => c.includes(q));
  }, [categoryOptions, categoryListSearch]);

  return (
    <TableRow className="border-0">
      <TableHead className="py-2 px-4 font-normal align-top">
        <Popover
          open={companyPopoverOpen}
          onOpenChange={(o) => {
            setCompanyPopoverOpen(o);
            if (!o) setCompanyListSearch("");
          }}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-9 w-full items-center justify-between gap-2 rounded-md border border-[#D1D5DB] bg-white px-3 text-start text-sm text-[#111827]"
            >
              <span className="min-w-0 truncate">{selectedCompanyLabel}</span>
              <ChevronDown className="size-4 shrink-0 text-[#6B7280]" />
            </button>
          </PopoverTrigger>

          <PopoverContent
            className="w-[min(100vw-2rem,22rem)] ring-0 gap-0 rounded-sm p-2 shadow-[0px_10px_15px_-3px_#0000001A] bg-white"
            align="start"
          >
            <div className="relative mb-2">
              <Search
                className={`${companyListSearch.length > 0 && "hidden"} pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]`}
              />
              <input
                type="search"
                value={companyListSearch}
                onChange={(e) => setCompanyListSearch(e.target.value)}
                className="h-9 w-full rounded-md border border-[#D1D5DB] bg-white py-1 pe-2 ps-9 text-sm outline-none focus-visible:border-[#119DA9] focus-visible:ring-2 focus-visible:ring-[#119DA9]/25"
                placeholder="بحث"
                aria-label="بحث في أسماء الشركات"
              />
            </div>
            <div
              className="max-h-60 overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              <button
                type="button"
                onClick={() => {
                  setCompanyKeyFilter(ALL);
                  setPage(1);
                  setCompanyPopoverOpen(false);
                }}
                className={cn(
                  "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                  companyKeyFilter === ALL && "bg-[#F3F4F6]",
                )}
              >
                الكل
              </button>
              {filteredCompanyOptions.map(
                ({ key, company_name, owner_email, company_logo }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setCompanyKeyFilter(key);
                      setPage(1);
                      setCompanyPopoverOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-start gap-2 rounded-md px-2 py-2 text-start hover:bg-[#F3F4F6]",
                      companyKeyFilter === key && "bg-[#F3F4F6]",
                    )}
                  >
                    {company_logo ? (
                      <Image
                        src={company_logo}
                        width={32}
                        height={32}
                        alt=""
                        className="size-8 shrink-0 rounded-full object-contain"
                      />
                    ) : (
                      <div className="size-8 shrink-0 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#D1D5DB] border border-neutral-200">
                        <Building2 className="size-4" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-[#111827]">
                        {company_name}
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        {owner_email}
                      </div>
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
          open={ownerPopoverOpen}
          onOpenChange={(o) => {
            setOwnerPopoverOpen(o);
            if (!o) setOwnerListSearch("");
          }}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-9 w-full items-center justify-between gap-2 rounded-md border border-[#D1D5DB] bg-white px-3 text-start text-sm text-[#111827]"
            >
              <span className="min-w-0 truncate">{selectedOwnerLabel}</span>
              <span className="flex items-center gap-2">
                <ChevronDown className="size-4 shrink-0 text-[#6B7280]" />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[min(100vw-2rem,22rem)] ring-0 gap-0 rounded-sm p-2 shadow-[0px_10px_15px_-3px_#0000001A] bg-white"
            align="start"
          >
            <div className="relative mb-2">
              <Search
                className={`${ownerListSearch.length > 0 && "hidden"} pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]`}
              />
              <input
                type="search"
                value={ownerListSearch}
                onChange={(e) => setOwnerListSearch(e.target.value)}
                className="h-9 w-full rounded-md border border-[#D1D5DB] bg-white py-1 pe-2 ps-9 text-sm outline-none focus-visible:border-[#119DA9] focus-visible:ring-2 focus-visible:ring-[#119DA9]/25"
                placeholder="بحث"
                aria-label="بحث في أسماء الملاك"
              />
            </div>
            <div
              className="max-h-60 overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              <button
                type="button"
                onClick={() => {
                  setOwnerKeyFilter(ALL);
                  setPage(1);
                  setOwnerPopoverOpen(false);
                }}
                className={cn(
                  "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                  ownerKeyFilter === ALL && "bg-[#F3F4F6]",
                )}
              >
                الكل
              </button>
              {filteredOwnerOptions.map(({ key, owner_name, owner_email }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setOwnerKeyFilter(key);
                    setPage(1);
                    setOwnerPopoverOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-start gap-2 rounded-md px-2 py-2 text-start hover:bg-[#F3F4F6]",
                    ownerKeyFilter === key && "bg-[#F3F4F6]",
                  )}
                >
                  <div className="size-8 shrink-0 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#D1D5DB] border border-neutral-200">
                    <UsersRound className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-[#111827]">{owner_name}</div>
                    <div className="text-xs text-[#6B7280]">{owner_email}</div>
                  </div>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </TableHead>

      <TableHead className="py-2 px-4 font-normal align-top">
        <Popover
          open={categoryPopoverOpen}
          onOpenChange={(o) => {
            setCategoryPopoverOpen(o);
            if (!o) setCategoryListSearch("");
          }}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex h-9 w-full items-center justify-between gap-2 rounded-md border border-[#D1D5DB] bg-white px-3 text-start text-sm text-[#111827]"
            >
              <span className="min-w-0 truncate">{selectedCategoryLabel}</span>
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
                className={`${categoryListSearch.length > 0 && "hidden"} pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]`}
              />
              <input
                type="search"
                value={categoryListSearch}
                onChange={(e) => setCategoryListSearch(e.target.value)}
                className="h-9 w-full rounded-md border border-[#D1D5DB] bg-white py-1 pe-2 ps-9 text-sm outline-none focus-visible:border-[#119DA9] focus-visible:ring-2 focus-visible:ring-[#119DA9]/25"
                placeholder="بحث"
                aria-label="بحث في القطاعات"
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  setCategoryFilter(ALL);
                  setPage(1);
                  setCategoryPopoverOpen(false);
                }}
                className={cn(
                  "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                  categoryFilter === ALL && "bg-[#F3F4F6]",
                )}
              >
                الكل
              </button>
              {filteredCategoryOptions.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setCategoryFilter(category);
                    setPage(1);
                    setCategoryPopoverOpen(false);
                  }}
                  className={cn(
                    "flex w-full rounded-md px-2 py-2 text-start text-sm hover:bg-[#F3F4F6]",
                    categoryFilter === category && "bg-[#F3F4F6]",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </TableHead>

      <TableHead className="w-14 py-2 px-2" />
    </TableRow>
  );
}
