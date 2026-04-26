"use client";

import { useEffect, useMemo } from "react";

import { Table as UITable } from "@/components/ui/table";
import {
  Action,
  ColumnDef,
  OrderRow,
  TabsType,
} from "@/components/shared/table/table.types";

import { buildIconMap } from "./utils/buildIconMap";
import { TableTabs } from "./TableTabs";
import { TablePagination } from "./TablePagination";
import { useTableFilters } from "./hooks/useTableFilters";
import { usePagination } from "./hooks/usePagination";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

type TableProps = {
  tabsData?: TabsType<OrderRow>[];
  rows: OrderRow[];
  columns: ColumnDef[];
  onActionClick?: (action: Action, row: OrderRow) => void;
};

export function Table({
  tabsData,
  rows,
  columns,
  onActionClick,
}: TableProps) {
  const iconMap = useMemo(() => buildIconMap(rows), [rows]);
  const {
    columnFilters,
    currentTab,
    filteredRows,
    handleFilterChange,
    setCurrentTab,
  } = useTableFilters({
    rows,
    columns,
    tabsData,
  });
  const { currentPageData, page, setPage, totalPages } = usePagination({
    rows: filteredRows,
  });

  const hasTabs = Boolean(tabsData?.length);

  useEffect(() => {
    setPage(1);
  }, [columnFilters, currentTab, setPage]);

  return (
    <div className="p-0">
      {hasTabs && tabsData ? (
        <TableTabs
          tabsData={tabsData}
          value={currentTab}
          onChange={(value) => {
            setCurrentTab(value);
            setPage(1);
          }}
        />
      ) : null}

      <div className="mt-8 rounded-[8px] border border-[#D1D5DB]">
        <UITable>
          <TableHeader
            columns={columns}
            columnFilters={columnFilters}
            onFilterChange={(key, value) => {
              handleFilterChange(key, value);
              setPage(1);
            }}
          />
          <TableBody
            columns={columns}
            rows={currentPageData}
            iconMap={iconMap}
            onActionClick={onActionClick}
          />
        </UITable>
      </div>

      <TablePagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
