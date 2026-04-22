"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Building2,
  ChevronDown,
  Eye,
  MoreVertical,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { agenciesData } from "../../data/agency-data";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PAGE_SIZE = 10;

const ALL = "all";

type AgencyRow = (typeof agenciesData)[number];

function agencyKey(a: AgencyRow) {
  return `${a.entity_name}|${a.email}`;
}

export function AgencyTable() {
  const [page, setPage] = useState(1);
  const [agenciesDataState, setAgenciesDataState] = useState(agenciesData);
  const [agencyKeyFilter, setAgencyKeyFilter] = useState<string>(ALL);
  const [cityFilter, setCityFilter] = useState<string>(ALL);
  const [userCountQuery, setUserCountQuery] = useState("");
  const [actionMenuForId, setActionMenuForId] = useState<number | null>(null);

  const [agencyPopoverOpen, setAgencyPopoverOpen] = useState(false);
  const [cityPopoverOpen, setCityPopoverOpen] = useState(false);
  const [agencyListSearch, setAgencyListSearch] = useState("");
  const [cityListSearch, setCityListSearch] = useState("");

  const searchParams = useSearchParams();
  const agencyAddedOrEdited =
    searchParams.get("add") || searchParams.get("edit");

  const uniqueAgencyOptions = useMemo(() => {
    const seen = new Set<string>();
    const out: { key: string; row: AgencyRow }[] = [];
    for (const row of agenciesDataState) {
      const k = agencyKey(row);
      if (seen.has(k)) continue;
      seen.add(k);
      out.push({ key: k, row });
    }
    return out;
  }, [agenciesDataState]);

  const cityOptions = useMemo(
    () => [...new Set(agenciesDataState.map((a) => a.city))].sort(),
    [agenciesDataState],
  );

  const filteredAgencyOptions = useMemo(() => {
    const q = agencyListSearch.trim().toLowerCase();
    if (!q) return uniqueAgencyOptions;
    return uniqueAgencyOptions.filter(
      ({ row }) =>
        row.entity_name.toLowerCase().includes(q) ||
        row.email.toLowerCase().includes(q),
    );
  }, [uniqueAgencyOptions, agencyListSearch]);

  const filteredCityOptions = useMemo(() => {
    const q = cityListSearch.trim();
    if (!q) return cityOptions;
    return cityOptions.filter((c) => c.includes(q));
  }, [cityOptions, cityListSearch]);

  const filteredData = useMemo(() => {
    return agenciesDataState.filter((a) => {
      if (agencyKeyFilter !== ALL && agencyKey(a) !== agencyKeyFilter) {
        return false;
      }
      if (cityFilter !== ALL && a.city !== cityFilter) return false;
      const nq = userCountQuery.trim();
      if (nq && !String(a.user_count).includes(nq)) return false;
      return true;
    });
  }, [agencyKeyFilter, cityFilter, userCountQuery, agenciesDataState]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const activePage = Math.min(page, totalPages);
  const currentPageData = useMemo(() => {
    const start = (activePage - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, activePage]);

  const selectedAgencyLabel = useMemo(() => {
    if (agencyKeyFilter === ALL) return "الكل";
    const found = uniqueAgencyOptions.find((o) => o.key === agencyKeyFilter);
    return found?.row.entity_name ?? "الكل";
  }, [agencyKeyFilter, uniqueAgencyOptions]);

  const selectedCityLabel = cityFilter === ALL ? "الكل" : cityFilter;

  return (
    <div className="mt-8 w-full border border-[#D1D5DB] rounded-lg overflow-hidden">
      <Table className="">
        <TableHeader className="[&_tr]:border-0 bg-blue-100/30">
          <TableRow className="border-0">
            <TableHead className="py-3 px-4 w-[50%] font-bold text-[#111827]">
              اسم الجهة الحكومية
            </TableHead>
            <TableHead className="py-3 px-4 w-[30%] font-bold text-[#111827]">
              مدينة الجهة الحكومية
            </TableHead>
            <TableHead className="py-3 px-4 w-[20%] font-bold text-[#111827]">
              عدد المستخدمين
            </TableHead>
            <TableHead className="w-14 py-3 px-2" />
          </TableRow>
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
                    <span className="min-w-0 truncate">
                      {selectedAgencyLabel}
                    </span>
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
                    {filteredAgencyOptions.map(({ key, row }) => (
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
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-[#111827]">
                            {row.entity_name}
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            {row.email}
                          </div>
                        </div>
                        <Image
                          src={row.logo_url}
                          width={32}
                          height={32}
                          alt=""
                          className="size-8 shrink-0 rounded-full object-contain"
                        />
                      </button>
                    ))}
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
                    <span className="min-w-0 truncate">
                      {selectedCityLabel}
                    </span>
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
        </TableHeader>
        <TableBody>
          {currentPageData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="py-10 text-center text-[#6B7280]"
              >
                لا توجد نتائج مطابقة
              </TableCell>
            </TableRow>
          ) : (
            currentPageData.map((agency) => (
              <TableRow
                key={agency.id}
                className={`border-b border-[#E5E7EB] last:border-0 ${agencyAddedOrEdited && Number(agencyAddedOrEdited) === agency.id && "border-b-0 shadow-[inset_0_0_0_2px_#4590BF]"}`}
              >
                <TableCell className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    {agency.logo_url ? (
                      <Image
                        src={agency.logo_url}
                        width={40}
                        height={40}
                        alt=""
                        className="size-10 shrink-0 rounded-full object-contain"
                      />
                    ) : (
                      <div className="size-10 rounded-full bg-[#F3F4F6] flex justify-center items-center text-[#D1D5DB] border border-neutral-200">
                        <Building2 className="size-5" />
                      </div>
                    )}
                    <div className="min-w-0 text-start">
                      <div className="font-bold text-[#111827]">
                        {agency.entity_name}
                      </div>
                      <div className="text-xs text-[#4B5563]">
                        {agency.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-4 text-[#4B5563]">
                  {agency.city}
                </TableCell>
                <TableCell className="py-4 px-4 text-[#111827]">
                  {agency.user_count}
                </TableCell>
                <TableCell className="py-4 px-2 text-center">
                  <Popover
                    open={actionMenuForId === agency.id}
                    onOpenChange={(open) =>
                      setActionMenuForId(open ? agency.id : null)
                    }
                  >
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex size-9 items-center justify-center rounded-md text-[#119DA9] hover:bg-muted hover:text-[#0d8a94]"
                        aria-label="إجراءات الجهة"
                      >
                        <MoreVertical className="size-5" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-56 gap-0 rounded-xl border border-[#E5E7EB] bg-white ring-0 p-0 shadow-lg"
                      align="end"
                      sideOffset={4}
                    >
                      <div className="py-2">
                        <Link
                          href={`/nidlp/agency/show?agency=${agency.id}`}
                          className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-[#111827] hover:bg-[#F3F4F6]"
                        >
                          <Eye className="size-4 shrink-0 text-[#374151]" />
                          <span>عرض الجهة</span>
                        </Link>
                        <Link
                          href={`/nidlp/agency/edit?agency=${agency.id}`}
                          className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-[#111827] hover:bg-[#F3F4F6]"
                        >
                          <Pencil className="size-4 shrink-0 text-[#374151]" />
                          <span>تعديل الجهة</span>
                        </Link>
                        <button
                          type="button"
                          className="flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-sm text-[#111827] hover:bg-[#F3F4F6]"
                          onClick={() => {
                            setAgenciesDataState((prev) =>
                              prev.filter((a) => a.id !== agency.id),
                            );
                            setActionMenuForId(null);
                          }}
                        >
                          <Trash2 className="size-4 shrink-0 text-[#374151]" />
                          <span>حذف الجهة</span>
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Pagination dir="rtl" className="border-t border-[#E5E7EB]">
        <PaginationContent className="w-full flex justify-between px-4 pt-3 pb-4">
          <PaginationItem>
            <PaginationPrevious
              className={`hover:text-[#119DA9] ${
                activePage === 1
                  ? "pointer-events-none opacity-50 text-[#6B7280]"
                  : ""
              }`}
              text="السابق"
              aria-disabled={activePage === 1}
              onClick={() => {
                if (activePage === 1) return;
                setPage(activePage - 1);
              }}
            />
          </PaginationItem>

          <div className="flex gap-0.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <button
                  type="button"
                  onClick={() => setPage(p)}
                  className={`flex size-10 items-center justify-center rounded-md text-sm transition-colors duration-300 ${
                    activePage === p
                      ? "bg-[#DFE6F0] text-[#111827]"
                      : "text-[#6B7280] hover:bg-[#DFE6F0]/50 hover:text-[#111827]"
                  }`}
                >
                  {p}
                </button>
              </PaginationItem>
            ))}
          </div>

          <PaginationItem>
            <PaginationNext
              text="التالي"
              aria-disabled={activePage === totalPages}
              onClick={() => {
                if (activePage === totalPages) return;
                setPage(activePage + 1);
              }}
              className={`hover:text-[#119DA9] ${
                activePage === totalPages
                  ? "pointer-events-none opacity-50 text-[#6B7280]"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
