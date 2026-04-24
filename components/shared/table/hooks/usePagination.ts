"use client";

import { useMemo, useState } from "react";

import { OrderRow } from "@/components/shared/table/table.types";

type UsePaginationParams = {
  rows: OrderRow[];
  rowsPerPage?: number;
};

export const usePagination = ({
  rows,
  rowsPerPage = 9,
}: UsePaginationParams) => {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(rows.length / rowsPerPage)),
    [rows.length, rowsPerPage],
  );

  const currentPage = Math.min(page, totalPages);

  const currentPageData = useMemo(
    () =>
      rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage),
    [currentPage, rows, rowsPerPage],
  );

  return {
    currentPageData,
    page: currentPage,
    setPage,
    totalPages,
  };
};
