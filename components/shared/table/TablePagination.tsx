"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type TablePaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function TablePagination({
  page,
  totalPages,
  onPageChange,
}: TablePaginationProps) {
  return (
    <Pagination dir="rtl" className="mt-2">
      <PaginationContent className="flex w-full justify-between pt-3 pb-4">
        <PaginationItem>
          <PaginationPrevious
            text="السابق"
            onClick={() => {
              if (page > 1) {
                onPageChange(page - 1);
              }
            }}
            className={`hover:text-[#119DA9] ${
              page === 1 ? "pointer-events-none text-[#6B7280] opacity-50" : ""
            }`}
            aria-disabled={page === 1}
          />
        </PaginationItem>

        <div className="flex gap-0.5">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (currentPage) => (
              <PaginationItem key={currentPage}>
                <button
                  onClick={() => onPageChange(currentPage)}
                  className={`h-10 w-10 ${
                    page === currentPage
                      ? "bg-[#DFE6F0] text-[#111827]"
                      : "text-[#6B7280] transition-colors duration-300 hover:bg-[#DFE6F0]/50 hover:text-[#111827]"
                  }`}
                >
                  {currentPage}
                </button>
              </PaginationItem>
            ),
          )}
        </div>

        <PaginationItem>
          <PaginationNext
            text="التالي"
            onClick={() => {
              if (page < totalPages) {
                onPageChange(page + 1);
              }
            }}
            className={`hover:text-[#119DA9] ${
              page === totalPages
                ? "pointer-events-none text-[#6B7280] opacity-50"
                : ""
            }`}
            aria-disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
