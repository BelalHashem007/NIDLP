"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Building2, Eye, MoreVertical } from "lucide-react";
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
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { companiesData } from "@/features/NIDLP/data/company-data";
import { cn } from "@/lib/utils";
import {
  CompanyOption,
  CompanyTableFilters,
  OwnerOption,
} from "@/features/NIDLP/company/components/CompanyTableFilters";

const PAGE_SIZE = 10;
const ALL = "all";

type CompanyRow = (typeof companiesData)[number];

function companyKey(c: CompanyRow) {
  return `${c.company_name}|${c.owner_email}`;
}

function ownerKey(c: CompanyRow) {
  return `${c.owner_name}|${c.owner_email}`;
}

export function CompanyTable() {
  const [page, setPage] = useState(1);
  const [companiesDataState, setCompaniesDataState] = useState(companiesData);

  const [companyKeyFilter, setCompanyKeyFilter] = useState<string>(ALL);
  const [ownerKeyFilter, setOwnerKeyFilter] = useState<string>(ALL);
  const [categoryFilter, setCategoryFilter] = useState<string>(ALL);

  const [actionMenuForId, setActionMenuForId] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const companyAddedOrEdited =
    searchParams.get("add") || searchParams.get("edit");

  const companyOptions: CompanyOption[] = useMemo(() => {
    const seen = new Set<string>();
    const out: CompanyOption[] = [];
    for (const row of companiesDataState) {
      const k = companyKey(row);
      if (seen.has(k)) continue;
      seen.add(k);
      out.push({
        key: k,
        company_name: row.company_name,
        owner_email: row.owner_email,
        company_logo: row.company_logo,
      });
    }
    return out;
  }, [companiesDataState]);

  const ownerOptions: OwnerOption[] = useMemo(() => {
    const seen = new Set<string>();
    const out: OwnerOption[] = [];
    for (const row of companiesDataState) {
      const k = ownerKey(row);
      if (seen.has(k)) continue;
      seen.add(k);
      out.push({
        key: k,
        owner_name: row.owner_name,
        owner_email: row.owner_email,
      });
    }
    return out;
  }, [companiesDataState]);

  const categoryOptions = useMemo(
    () => [...new Set(companiesDataState.map((c) => c.category_name))].sort(),
    [companiesDataState],
  );

  const selectedCompanyLabel = useMemo(() => {
    if (companyKeyFilter === ALL) return "الكل";
    const found = companyOptions.find((o) => o.key === companyKeyFilter);
    return found?.company_name ?? "الكل";
  }, [companyKeyFilter, companyOptions]);

  const selectedOwnerLabel = useMemo(() => {
    if (ownerKeyFilter === ALL) return "الكل";
    const found = ownerOptions.find((o) => o.key === ownerKeyFilter);
    return found?.owner_name ?? "الكل";
  }, [ownerKeyFilter, ownerOptions]);

  const selectedCategoryLabel =
    categoryFilter === ALL ? "الكل" : categoryFilter;

  const filteredData = useMemo(() => {
    return companiesDataState.filter((c) => {
      if (companyKeyFilter !== ALL && companyKey(c) !== companyKeyFilter) {
        return false;
      }
      if (ownerKeyFilter !== ALL && ownerKey(c) !== ownerKeyFilter) {
        return false;
      }
      if (categoryFilter !== ALL && c.category_name !== categoryFilter) {
        return false;
      }
      return true;
    });
  }, [companyKeyFilter, ownerKeyFilter, categoryFilter, companiesDataState]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const activePage = Math.min(page, totalPages);
  const currentPageData = useMemo(() => {
    const start = (activePage - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, activePage]);

  return (
    <div className="mt-8 w-full border border-[#D1D5DB] rounded-lg overflow-hidden">
      <Table className="">
        <TableHeader className="[&_tr]:border-0 bg-blue-100/30">
          <TableRow className="border-0">
            <TableHead className="py-3 px-4 w-[40%] font-bold text-[#111827]">
              اسم الشركة
            </TableHead>
            <TableHead className="py-3 px-4 w-[35%] font-bold text-[#111827]">
              اسم مالك الشركة
            </TableHead>
            <TableHead className="py-3 px-4 w-[25%] font-bold text-[#111827]">
              قطاع الشركة
            </TableHead>
            <TableHead className="w-14 py-3 px-2" />
          </TableRow>

          <CompanyTableFilters
            companyKeyFilter={companyKeyFilter}
            setCompanyKeyFilter={setCompanyKeyFilter}
            selectedCompanyLabel={selectedCompanyLabel}
            companyOptions={companyOptions}
            ownerKeyFilter={ownerKeyFilter}
            setOwnerKeyFilter={setOwnerKeyFilter}
            selectedOwnerLabel={selectedOwnerLabel}
            ownerOptions={ownerOptions}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            selectedCategoryLabel={selectedCategoryLabel}
            categoryOptions={categoryOptions}
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
            currentPageData.map((company) => (
              <TableRow
                key={company.id}
                className={`border-b border-[#E5E7EB] last:border-0 ${companyAddedOrEdited && Number(companyAddedOrEdited) === company.id && "border-b-0 shadow-[inset_0_0_0_2px_#4590BF]"}`}
              >
                <TableCell className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    {company.company_logo ? (
                      <Image
                        src={company.company_logo}
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
                        {company.company_name}
                      </div>
                      <div className="text-xs text-[#4B5563]">
                        {company.owner_email}
                      </div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-4 px-4 text-start">
                  <div className="font-bold text-[#111827]">
                    {company.owner_name}
                  </div>
                  <div className="text-xs text-[#4B5563]">
                    {company.owner_email}
                  </div>
                </TableCell>

                <TableCell className="py-4 px-4 text-[#4B5563]">
                  {company.category_name}
                </TableCell>

                <TableCell className="py-4 pr-2 pl-6 text-center">
                  <Link href={`/nidlp/company/show?company=${company.id}`}>
                    <Eye className="size-5 shrink-0 text-[#119DA9]" />
                  </Link>
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
              className={cn(
                "hover:text-[#119DA9]",
                activePage === 1 &&
                  "pointer-events-none opacity-50 text-[#6B7280]",
              )}
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
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md text-sm transition-colors duration-300",
                    activePage === p
                      ? "bg-[#DFE6F0] text-[#111827]"
                      : "text-[#6B7280] hover:bg-[#DFE6F0]/50 hover:text-[#111827]",
                  )}
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
              className={cn(
                "hover:text-[#119DA9]",
                activePage === totalPages &&
                  "pointer-events-none opacity-50 text-[#6B7280]",
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
