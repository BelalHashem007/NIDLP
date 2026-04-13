"use client";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
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
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { requestsData } from "../../data/internal-dashboard-data";
import Image from "next/image";
import { useState } from "react";

export function RequestsTable() {
  const [page, setPage] = useState(1);

  const currentPageData = requestsData.slice((page - 1) * 9, page * 9);
  const totalPages = Math.ceil(requestsData.length / 9);
  return (
    <ReusableCardComponent>
      <div className="p-8">
        <div className="flex justify-between">
          <h3 className="text-[#111827] font-bold text-xl/[28px]">
            احدث الطلبات
          </h3>
          <button className="hover:cursor-pointer flex gap-2 font-bold rounded-[8px] border border-[#119DA9] py-3 px-4 text-[#119DA9] transition-all duration-500 hover:bg-[#119DA9] hover:text-[white]">
            عرض المزيد
          </button>
        </div>

        <div className="mt-8 border border-[#D1D5DB] rounded-[8px]">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-100/30 border-b-0! ">
                <TableHead className="py-3 px-4 font-bold">رقم الطلب</TableHead>
                <TableHead className="py-3 px-4 font-bold">
                  تاريخ تقديم الطلب
                </TableHead>
                <TableHead className="py-3 px-4 font-bold">نوع الطلب</TableHead>
                <TableHead className="py-3 px-4 font-bold">
                  الموظف المسند
                </TableHead>
                <TableHead className="py-3 px-4 font-bold">
                  تاريخ الاسناد الي الجهة
                </TableHead>
                <TableHead className="py-3 px-4 font-bold">اخر تحديث</TableHead>
                <TableHead className="py-3 px-4 font-bold">
                  مصدر الطلب
                </TableHead>
                <TableHead className="py-3 px-4 font-bold">
                  حالة الطلب
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageData.map((rd, i) => (
                <TableRow key={i} className="border-b-gray-200">
                  <TableCell className="py-4 px-4">{rd.order_number}</TableCell>
                  <TableCell className="py-4 px-4">
                    {rd.submission_date}
                  </TableCell>
                  <TableCell className="py-4 px-4">{rd.order_type}</TableCell>
                  <TableCell className="align-middle gap-2 py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={rd.assigned_employee.photo}
                        width={32}
                        height={32}
                        alt={rd.assigned_employee.name}
                        className="rounded-full size-8"
                      />
                      <span className="whitespace-nowrap">
                        {rd.assigned_employee.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    {rd.assignment_date}
                  </TableCell>
                  <TableCell className="py-4 px-4">{rd.last_update}</TableCell>
                  <TableCell className="align-middle gap-3 py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={rd.source.photo}
                        width={32}
                        height={32}
                        alt={rd.source.name}
                        className="rounded-full size-8"
                      />
                      <span className="whitespace-nowrap">
                        {rd.source.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-38 text-center py-4 px-4">
                    <span
                      className="py-1 px-2.5 rounded-[12px] max-w-max text-wrap inline-block text-sm"
                      style={{
                        backgroundColor: rd.status.bgColor,
                        color: rd.status.color,
                      }}
                    >
                      {rd.status.text}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination dir={"rtl"} className="mt-2">
          <PaginationContent className="w-full flex justify-between pt-3 pb-4">
            <PaginationItem>
              <PaginationPrevious
                className={`hover:text-[#119DA9] ${
                  page === 1
                    ? "pointer-events-none opacity-50 text-[#6B7280]"
                    : ""
                }`}
                text="السابق"
                aria-disabled={page === 1}
                onClick={() => {
                  if (page === 1) return;
                  setPage((p) => Math.max(p - 1, 1));
                }}
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
                aria-disabled={page === totalPages}
                onClick={() => {
                  if (page === totalPages) return;
                  setPage((p) => Math.min(p + 1, totalPages));
                }}
                className={`hover:text-[#119DA9] ${
                  page === totalPages
                    ? "pointer-events-none opacity-50 text-[#6B7280]"
                    : ""
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </ReusableCardComponent>
  );
}
