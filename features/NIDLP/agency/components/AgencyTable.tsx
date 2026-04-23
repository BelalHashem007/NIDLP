"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Building2,
  Eye,
  MoreVertical,
  Pencil,
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
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  AgencyOption,
  AgencyTableFilters,
} from "@/features/NIDLP/agency/components/AgencyTableFilters";

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

  const agencyFilterOptions: AgencyOption[] = useMemo(
    () =>
      uniqueAgencyOptions.map(({ key, row }) => ({
        key,
        entity_name: row.entity_name,
        email: row.email,
        logo_url: row.logo_url,
      })),
    [uniqueAgencyOptions],
  );

  const cityOptions = useMemo(
    () => [...new Set(agenciesDataState.map((a) => a.city))].sort(),
    [agenciesDataState],
  );

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
          <AgencyTableFilters
            agencyKeyFilter={agencyKeyFilter}
            setAgencyKeyFilter={setAgencyKeyFilter}
            selectedAgencyLabel={selectedAgencyLabel}
            agencyOptions={agencyFilterOptions}
            cityFilter={cityFilter}
            setCityFilter={setCityFilter}
            selectedCityLabel={selectedCityLabel}
            cityOptions={cityOptions}
            userCountQuery={userCountQuery}
            setUserCountQuery={setUserCountQuery}
            setPage={setPage}
          />
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
