"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs, TabsList, TabsTrigger,
} from "@/components/ui/tabs";
import {
  Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination";
import { Action, ColumnDef, OrderRow, PersonType, StatusType, TabsType } from "../../../data/table.types";
import * as LucideIcons from "lucide-react";
import { EllipsisVertical, LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

const ROWS_PER_PAGE = 9;

const buildIconMap = (rows: OrderRow[]): Record<string, LucideIcon> => {
  const names = new Set(rows.flatMap(row => row.actions?.map(a => a.iconName) ?? []));
  return Object.fromEntries(
    [...names].map(name => {
      const pascalCase = name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
      return [name.toLowerCase(), (LucideIcons as unknown as Record<string, LucideIcon>)[pascalCase] ?? LucideIcons.HelpCircle];
    })
  );
};

type Props = {
  tabsData?: TabsType<OrderRow>[]; // optional كمان
  rows: OrderRow[];
  columns: ColumnDef[];
  onActionClick?: (action: Action, row: OrderRow) => void;
};

export function TableAllOrders({ tabsData, rows, columns, onActionClick }: Props) {
  const iconMap = useMemo(() => buildIconMap(rows), [rows]);

  const [currentTab, setCurrentTab] = useState(
    tabsData && tabsData.length > 0 ? tabsData[0].value : ""
  );
  const [page, setPage] = useState(1);
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});

  const activeTab = tabsData?.find(t => t.value === currentTab);

  const handleFilterChange = (key: string, value: string) => {
    setColumnFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const filteredRows = useMemo(() => {
    let data = rows;

    // 1) Tab filter
    if (tabsData && tabsData.length > 0 && activeTab) {
      data = data.filter(row => activeTab.filterFn(row));
    }

    // 2) Column filters — using filterFn from config
    data = data.filter(row => {
      return Object.entries(columnFilters).every(([key, filterValue]) => {
        if (!filterValue || filterValue === "all") return true;
        const colDef = columns.find(c => c.accessorKey === key);
        if (!colDef?.filter?.filterFn) return true;
        return colDef.filter.filterFn(row, filterValue);
      });
    });

    return data;
  }, [rows, activeTab, tabsData, columnFilters, columns]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / ROWS_PER_PAGE));

  const currentPageData = filteredRows.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );
  const hasTabs = tabsData && tabsData.length > 0;

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    setPage(1);
  };

  return (
    <div className="p-0">
      { hasTabs && 
      (<Tabs value={currentTab} onValueChange={handleTabChange} className="w-full border-b-2 border-gray-300" dir="rtl">
        <TabsList className="h-auto justify-start rounded-none p-0">
          {tabsData.map((tab) => {
            const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[tab.icon] ?? LucideIcons.HelpCircle;
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="h-full relative rounded-none border-b-2 border-transparent py-4 px-3 lg:px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9] data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
              >
                <span className="text-lg font-medium flex items-center gap-1.5">
                  <Icon className="h-6 w-6" />
                  {tab.label}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>)

      }

      <div className="mt-8 border border-[#D1D5DB] rounded-[8px]">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-100/30 border-b-0!">
              {columns.map((col) => (
                <TableHead key={col.key} className="py-3 px-1 font-bold">
                  <p>{col.label}</p>

                  {col.filter?.type === "input" && (
                    <input
                      type="text"
                      placeholder={col.filter.placeholder}
                      value={columnFilters[col.accessorKey] ?? ""}
                      onChange={e => handleFilterChange(col.accessorKey as string, e.target.value)}
                      className="mt-3 w-full bg-white rounded px-1 py-0.5 text-sm font-normal outline-none"
                    />
                  )}

                  {col.filter?.type === "select" && (
                    <select
                      value={columnFilters[col.accessorKey] ?? "all"}
                      onChange={e => handleFilterChange(col.accessorKey as string, e.target.value)}
                      className="mt-3 w-full bg-white rounded px-1 text-gray-500 py-0.5 text-sm font-normal outline-none"
                    >
                      {col.filter.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  )}

                  {col.filter?.type === "person-select" && (
                    <div className="mt-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="w-full bg-white rounded px-2 py-1 text-sm font-normal flex items-center justify-between border-none outline-none">
                            <span className="truncate text-gray-500">
                              {columnFilters[col.accessorKey]
                                ? col.filter.options?.find(o => o.value === columnFilters[col.accessorKey])?.label ?? col.filter.placeholder
                                : col.filter.placeholder}
                            </span>
                            <LucideIcons.ChevronDown size={14} className="opacity-50" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="bg-white rounded-lg border border-gray-100 min-h-60 z-50">
                          <DropdownMenuItem
                            className="flex items-center gap-2 px-2 py-2 cursor-pointer text-gray-600 hover:bg-gray-50 focus:bg-gray-50 outline-none"
                            dir="rtl"
                            onClick={() => handleFilterChange(col.accessorKey as string, "all")}
                          >
                            <span className="text-sm whitespace-nowrap">{col.filter.placeholder}</span>
                          </DropdownMenuItem>
                          {col.filter.options?.map((opt) => (
                            opt.value === "all" ? null : (
                              <DropdownMenuItem
                                key={opt.value}
                                className="flex items-center gap-2 px-2 py-2 cursor-pointer text-gray-600 hover:bg-gray-50 focus:bg-gray-50 outline-none"
                                dir="rtl"
                                onClick={() => handleFilterChange(col.accessorKey as string, opt.value)}
                              >
                                {opt.photo && (
                                  <Image src={opt.photo} alt={opt.label} width={20} height={20} className="rounded-full object-cover size-5" />
                                )}
                                <span className="text-sm whitespace-nowrap">{opt.label}</span>
                              </DropdownMenuItem>
                            )
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}

                  {col.filter?.type === "date" && (
                    <input
                      type="date"
                      value={columnFilters[col.accessorKey] ?? ""}
                      onChange={e => handleFilterChange(col.accessorKey as string, e.target.value)}
                      className="mt-3 text-gray-500 w-full bg-white rounded px-1 py-0.5 text-sm font-normal outline-none"
                    />
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white">
            {currentPageData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="py-12 text-center text-gray-400">
                  لا توجد نتائج
                </TableCell>
              </TableRow>
            ) : (
              currentPageData.map((row, i) => (
                <TableRow key={i} className="border-b-gray-200">
                  {columns.map((col) => {
                    const value = row[col.accessorKey];
                    return (
                      <TableCell key={col.key} className="py-4 text-center">
                        {(col.accessorKey === "assigned_employee" || col.accessorKey === "applicant") && value ? (
                          <div className="flex items-center px-4 gap-2">
                            <Image src={(value as PersonType).photo} width={32} height={32} alt={(value as PersonType).name} className="rounded-full size-8" />
                            <span className="whitespace-nowrap">{(value as PersonType).name}</span>
                          </div>
                        ) : col.accessorKey === "status" && value ? (
                          <span
                            className="p-2 rounded-xl text-sm text-center text-wrap inline-block"
                            style={{ backgroundColor: (value as StatusType).bgColor, color: (value as StatusType).color }}
                          >
                            {(value as StatusType).text}
                          </span>
                        ) : col.accessorKey === "actions" ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="outline-none px-0 cursor-pointer">
                                <EllipsisVertical size={20} className="text-[#119DA9]" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48 bg-white rounded-xl">
                              {row.actions?.map((action) => {
                                const Icon = iconMap[action.iconName?.toLowerCase()] || LucideIcons.HelpCircle;
                                if (action.type === "link") {
                                  return (
                                    <DropdownMenuItem key={action.id} asChild>
                                      <Link href={action.href!} className="flex cursor-pointer justify-end items-center gap-2">
                                        <span>{action.label}</span>
                                        <Icon size={16} />
                                      </Link>
                                    </DropdownMenuItem>
                                  );
                                }
                                return (
                                  <DropdownMenuItem
                                    key={action.id}
                                    onClick={() => onActionClick?.(action, row)}
                                    className="flex justify-end items-center gap-2 cursor-pointer"
                                  >
                                    <span>{action.label}</span>
                                    <Icon size={16} />
                                  </DropdownMenuItem>
                                );
                              })}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <span>{value as string}</span>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination dir="rtl" className="mt-2">
        <PaginationContent className="w-full flex justify-between pt-3 pb-4">
          <PaginationItem>
            <PaginationPrevious
              text="السابق"
              onClick={() => { if (page > 1) setPage(p => p - 1); }}
              className={`hover:text-[#119DA9] ${page === 1 ? "pointer-events-none opacity-50 text-[#6B7280]" : ""}`}
              aria-disabled={page === 1}
            />
          </PaginationItem>

          <div className="flex gap-0.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <button
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 ${page === p ? "bg-[#DFE6F0] text-[#111827]" : "text-[#6B7280] hover:text-[#111827] hover:bg-[#DFE6F0]/50 transition-colors duration-300"}`}
                >
                  {p}
                </button>
              </PaginationItem>
            ))}
          </div>

          <PaginationItem>
            <PaginationNext
              text="التالي"
              onClick={() => { if (page < totalPages) setPage(p => p + 1); }}
              className={`hover:text-[#119DA9] ${page === totalPages ? "pointer-events-none opacity-50 text-[#6B7280]" : ""}`}
              aria-disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}