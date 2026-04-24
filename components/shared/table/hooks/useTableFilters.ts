"use client";

import { useMemo, useState } from "react";

import {
  ColumnDef,
  OrderRow,
  TabsType,
} from "@/components/shared/table/table.types";

type UseTableFiltersParams = {
  rows: OrderRow[];
  columns: ColumnDef[];
  tabsData?: TabsType<OrderRow>[];
};

export const useTableFilters = ({
  rows,
  columns,
  tabsData,
}: UseTableFiltersParams) => {
  const [currentTab, setCurrentTab] = useState(
    tabsData && tabsData.length > 0 ? tabsData[0].value : "",
  );
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});

  const activeTab = tabsData?.find((tab) => tab.value === currentTab);

  const filteredRows = useMemo(() => {
    let data = rows;

    if (tabsData && tabsData.length > 0 && activeTab) {
      data = data.filter((row) => activeTab.filterFn(row));
    }

    return data.filter((row) =>
      Object.entries(columnFilters).every(([key, filterValue]) => {
        if (!filterValue || filterValue === "all") {
          return true;
        }

        const column = columns.find((item) => item.accessorKey === key);

        if (!column?.filter?.filterFn) {
          return true;
        }

        return column.filter.filterFn(row, filterValue);
      }),
    );
  }, [activeTab, columnFilters, columns, rows, tabsData]);

  const handleFilterChange = (key: string, value: string) => {
    setColumnFilters((prev) => ({ ...prev, [key]: value }));
  };

  return {
    columnFilters,
    currentTab,
    filteredRows,
    handleFilterChange,
    setCurrentTab,
  };
};
