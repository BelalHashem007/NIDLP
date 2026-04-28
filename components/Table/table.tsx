"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {  MoreVertical } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import TableButton from "./TableButton";
const getStatusStyle = (status: string) => {
  switch (status) {
    case "مرفوض":
      return "bg-red-50 text-red-600 ring-red-200";
    case "مكتمل":
      return "bg-green-50 text-green-600 ring-green-200";
    case "ملغي":
      return "bg-purple-50 text-purple-600 ring-purple-200";
    case "جديد":
      return "bg-green-50 text-green-600 ring-green-200";
    case "تحت الاجراء":
      return "bg-blue-50 text-blue-600 ring-blue-200";

    case "بانتظار تحديث البيانات":
      return "bg-yellow-50 text-yellow-700 ring-yellow-200";
    case "مسودة":
      return "bg-violet-50 text-violet-600 ring-violet-200";
    default:
      return "bg-gray-100 text-gray-600 ring-gray-200";
  }
};

const statusOptions = [
  { value: "all", label: "الكل" },
  { value: "مكتمل", label: "مكتمل" },
  { value: "مرفوض", label: "مرفوض" },
  { value: "ملغي", label: "ملغي" },
  { value: "مغلق", label: "مغلق" },
  { value: "جديد", label: "جديد" },
  { value: "تحت الاجراء", label: "تحت الاجراء" },
  { value: "بانتظار تحديث البيانات", label: "بانتظار تحديث البيانات" },
];
export default function OrdersTable({ Data }: { Data: any[] }) {
  const [filters, setFilters] = useState({
    id: "",
    title: "",
    type: "",
    submitDate: "",
    name: "",
    assignDate: "",
    updateDate: "",
    status: "",
  });
  const [date, setDate] = useState<Date | undefined>();

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    setCurrentPage(1); // مهم: يرجع لأول صفحة عند الفلترة
  }

  // filters
  const filteredData = Data.filter((item) => {
    return (
      (filters.id === "" || item.id.includes(filters.id)) &&
      (filters.title === "" ||
        item.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.type === "" || item.type === filters.type) &&
      (filters.submitDate === "" ||
        item.submitDate.includes(filters.submitDate)) &&
      (filters.name === "" ||
        item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.assignDate === "" ||
        item.assignDate.includes(filters.assignDate)) &&
      (filters.updateDate === "" ||
        item.updateDate.includes(filters.updateDate)) &&
      (filters.status === "" || item.status === filters.status)
    );
  });

  // pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="bg-white rounded-2xl shadow-md border p-4" dir="rtl">
      {paginatedData.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <img src="/notexsist.svg" alt="" />
        </div>
      ) : (
        <>
          <Table className="border-separate border-spacing-y-2">
            {/* HEADER */}
            <TableHeader>
              <TableRow className="bg-transparent">
                {[
                  "رقم الطلب",
                  "اسم الطلب",
                  "نوع الطلب",
                  "تاريخ التقديم",
                  "الموظف",
                  "تاريخ الإسناد",
                  "آخر تحديث",
                  "الحالة",
                  "",
                ].map((head) => (
                  <TableHead
                    key={head}
                    className="text-right text-xs font-semibold text-gray-500 px-4"
                  >
                    {head}
                  </TableHead>
                ))}
              </TableRow>

              {/* FILTERS */}
              <TableRow className="bg-white">
                <TableHead className="p-2">
                  <input
                    name="id"
                    value={filters.id}
                    onChange={handleChange}
                    placeholder="رقم"
                    className="w-full bg-white text-gray-600 border rounded-md px-2 py-1 text-xs"
                  />
                </TableHead>

                <TableHead className="p-2">
                  <input
                    name="title"
                    value={filters.title}
                    onChange={handleChange}
                    placeholder="عنوان"
                    className="w-full bg-white text-gray-600 border rounded-md px-2 py-1 text-xs"
                  />
                </TableHead>

                <TableHead className="p-2">
                  <Select
                    value={filters.type || "all"}
                    onValueChange={(value) =>
                      setFilters((prev: any) => ({
                        ...prev,
                        type: value === "all" ? "" : value,
                      }))
                    }
                  >
                    {/* TRIGGER */}
                    <SelectTrigger
                      className="
          w-full
          bg-white
          border border-gray-200
          rounded-xl
          px-3 py-2
          text-xs text-gray-700

          hover:border-[#119DA9]
          hover:shadow-sm
          transition

          focus:ring-2 focus:ring-[#119DA9]/30
          focus:border-[#119DA9]
        "
                    >
                      <SelectValue placeholder="الكل" />
                    </SelectTrigger>

                    {/* CONTENT */}
                    <SelectContent
                      className="
          rounded-xl
          border border-gray-100
          shadow-2xl
          bg-white/95
          backdrop-blur-xl
          overflow-hidden
        "
                    >
                      <div className="p-1">
                        <SelectItem
                          value="all"
                          className="
              text-xs rounded-lg px-3 py-2
              hover:bg-[#119DA9]/10 hover:text-[#119DA9]
              data-[state=checked]:bg-[#119DA9]
              data-[state=checked]:text-white
            "
                        >
                          الكل
                        </SelectItem>

                        <SelectItem
                          value="اقتراح"
                          className="
              text-xs rounded-lg px-3 py-2
              hover:bg-[#119DA9]/10 hover:text-[#119DA9]
              data-[state=checked]:bg-[#119DA9]
              data-[state=checked]:text-white
            "
                        >
                          اقتراح
                        </SelectItem>

                        <SelectItem
                          value="تحدي"
                          className="
              text-xs rounded-lg px-3 py-2
              hover:bg-[#119DA9]/10 hover:text-[#119DA9]
              data-[state=checked]:bg-[#119DA9]
              data-[state=checked]:text-white
            "
                        >
                          تحدي
                        </SelectItem>
                      </div>
                    </SelectContent>
                  </Select>
                </TableHead>

                <TableHead className="p-2">
                  <Popover>
                    {/* TRIGGER */}
                    <PopoverTrigger asChild>
                      <button
                        className="
            w-full flex items-center justify-between
            bg-white border border-gray-200
            rounded-xl px-4 py-2.5
            text-sm text-gray-500
            hover:border-[#119DA9]
            hover:text-[#119DA9]
            hover:shadow-sm
            transition
            focus:outline-none focus:ring-2 focus:ring-[#119DA9]
          "
                      >
                        <span>
                          {date ? format(date, "yyyy/MM/dd") : "حدد التاريخ"}
                        </span>
                      </button>
                    </PopoverTrigger>

                    {/* CONTENT (CENTERED MODAL STYLE) */}
                    <PopoverContent
                      align="center"
                      sideOffset={10}
                      className="
          fixed left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2

          w-[360px]
          p-0
          rounded-2xl
          overflow-hidden

          border border-gray-100
          shadow-2xl
          bg-white/95 backdrop-blur-xl
        "
                    >
                      {/* HEADER */}
                      <div className="bg-gradient-to-b from-[#119DA9]/10 to-white px-5 py-4 border-b">
                        <p className="text-xs text-gray-500 mb-1">
                          Selected Date
                        </p>

                        <p className="text-lg font-semibold text-gray-800">
                          {date
                            ? format(date, "EEEE d MMMM yyyy", { locale: ar })
                            : "Choose a date"}
                        </p>
                      </div>

                      {/* CALENDAR */}
                      <div className="p-4">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ar}
                          className="w-full p-3"
                          classNames={{
                            caption:
                              "flex justify-between items-center px-2 mb-3 ",

                            caption_label:
                              "text-sm font-semibold text-gray-700",

                            nav_button:
                              "h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition",

                            table: "w-full border-collapse",

                            head_cell:
                              "text-[11px] text-gray-400 w-9 text-center",

                            cell: "w-9 h-9",

                            day: `
                w-9 h-9 flex items-center justify-center
                text-sm rounded-lg
                transition
                hover:bg-[#119DA9]/10
                hover:text-[#119DA9]
              `,

                            day_selected: `
                bg-[#119DA9] text-white
                hover:bg-[#119DA9]
                shadow-md
              `,

                            day_today: `
                border border-[#119DA9]/40
                text-[#119DA9]
                font-semibold
              `,
                          }}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead className="p-2">
                  <input
                    name="name"
                    value={filters.name}
                    onChange={handleChange}
                    placeholder="الموظف"
                    className="w-full bg-white text-gray-600 border rounded-md px-2 py-1 text-xs"
                  />
                </TableHead>
                {/* Date............. */}
                <TableHead className="p-2">
                  <Popover>
                    {/* TRIGGER */}
                    <PopoverTrigger asChild>
                      <button
                        className="
            w-full flex items-center justify-between
            bg-white border border-gray-200
            rounded-xl px-4 py-2.5
            text-sm text-gray-500
            hover:border-[#119DA9]
            hover:text-[#119DA9]
            hover:shadow-sm
            transition
            focus:outline-none focus:ring-2 focus:ring-[#119DA9]
          "
                      >
                        <span>
                          {date ? format(date, "yyyy/MM/dd") : "حدد التاريخ"}
                        </span>
                      </button>
                    </PopoverTrigger>

                    {/* CONTENT (CENTERED MODAL STYLE) */}
                    <PopoverContent
                      align="center"
                      sideOffset={10}
                      className="
          fixed left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
                           
          w-[360px]
          p-0
          rounded-2xl
          overflow-hidden

          border border-gray-100
          shadow-2xl
          bg-white/95 backdrop-blur-xl
        "
                    >
                      {/* HEADER */}
                      <div className="bg-gradient-to-b from-[#119DA9]/10 to-white px-5 py-4 border-b">
                        <p className="text-xs text-gray-500 mb-1">
                          حدد التاريخ
                        </p>

                        <p className="text-lg font-semibold text-gray-800">
                          {date
                            ? format(date, "EEEE d MMMM yyyy", { locale: ar })
                            : "Choose a date"}
                        </p>
                      </div>

                      {/* CALENDAR */}
                      <div className="p-4">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ar}
                          className="w-full p-3"
                          classNames={{
                            caption:
                              "flex justify-between items-center px-2 mb-3 ",

                            caption_label:
                              "text-sm font-semibold text-gray-700",

                            nav_button:
                              "h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition",

                            table: "w-full border-collapse",

                            head_cell:
                              "text-[11px] text-gray-400 w-9 text-center",

                            cell: "w-9 h-9",

                            day: `
                w-9 h-9 flex items-center justify-center
                text-sm rounded-lg
                transition
                hover:bg-[#119DA9]/10
                hover:text-[#119DA9]
              `,

                            day_selected: `
                bg-[#119DA9] text-white
                hover:bg-[#119DA9]
                shadow-md
              `,

                            day_today: `
                border border-[#119DA9]/40
                text-[#119DA9]
                font-semibold
              `,
                          }}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead className="p-2">
                  <Popover>
                    {/* TRIGGER */}
                    <PopoverTrigger asChild>
                      <button
                        className="
            w-full flex items-center justify-between
            bg-white border border-gray-200
            rounded-xl px-4 py-2.5
            text-sm text-gray-500
            hover:border-[#119DA9]
            hover:text-[#119DA9]
            hover:shadow-sm
            transition
            focus:outline-none focus:ring-2 focus:ring-[#119DA9]
          "
                      >
                        <span>
                          {date ? format(date, "yyyy/MM/dd") : "حدد التاريخ"}
                        </span>
                      </button>
                    </PopoverTrigger>

                    {/* CONTENT (CENTERED MODAL STYLE) */}
                    <PopoverContent
                      align="center"
                      sideOffset={10}
                      className="
          fixed left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2

          w-[360px]
          p-0
          rounded-2xl
          overflow-hidden

          border border-gray-100
          shadow-2xl
          bg-white/95 backdrop-blur-xl
        "
                    >
                      {/* HEADER */}
                      <div className="bg-gradient-to-b from-[#119DA9]/10 to-white px-5 py-4 border-b">
                        <p className="text-xs text-gray-500 mb-1">
                          Selected Date
                        </p>

                        <p className="text-lg font-semibold text-gray-800">
                          {date
                            ? format(date, "EEEE d MMMM yyyy", { locale: ar })
                            : "Choose a date"}
                        </p>
                      </div>

                      {/* CALENDAR */}
                      <div className="p-4">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ar}
                          className="w-full p-3"
                          classNames={{
                            caption:
                              "flex justify-between items-center px-2 mb-3 ",

                            caption_label:
                              "text-sm font-semibold text-gray-700",

                            nav_button:
                              "h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition",

                            table: "w-full border-collapse",

                            head_cell:
                              "text-[11px] text-gray-400 w-9 text-center",

                            cell: "w-9 h-9",

                            day: `
                w-9 h-9 flex items-center justify-center
                text-sm rounded-lg
                transition
                hover:bg-[#119DA9]/10
                hover:text-[#119DA9]
              `,

                            day_selected: `
                bg-[#119DA9] text-white
                hover:bg-[#119DA9]
                shadow-md
              `,

                            day_today: `
                border border-[#119DA9]/40
                text-[#119DA9]
                font-semibold
              `,
                          }}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead className="p-2">
                  <Select
                    value={filters.status}
                    onValueChange={(value) =>
                      setFilters((prev: any) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger
                      className="
          w-full
          bg-white
          border border-gray-200
          rounded-xl
          px-3 py-2
          text-sm text-gray-700

          hover:border-[#119DA9]
          hover:shadow-sm
          transition

          focus:ring-2 focus:ring-[#119DA9]/30
          focus:border-[#119DA9]
        "
                    >
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>

                    <SelectContent
                      className="
          rounded-xl
          border border-gray-100
          shadow-2xl
          bg-white/95
          backdrop-blur-xl
          overflow-hidden
        "
                    >
                      <div className="max-h-60 overflow-y-auto p-1">
                        {statusOptions.map((item) => (
                          <SelectItem
                            key={item.value}
                            value={item.value}
                            className="
                text-sm
                rounded-lg
                px-3 py-2
                cursor-pointer

                hover:bg-[#119DA9]/10
                hover:text-[#119DA9]

                focus:bg-[#119DA9]/10
                focus:text-[#119DA9]

                data-[state=checked]:bg-[#119DA9]
                data-[state=checked]:text-white
              "
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </div>
                    </SelectContent>
                  </Select>
                </TableHead>

                <TableHead />
              </TableRow>
            </TableHeader>

            {/* BODY */}
            <TableBody>
              {paginatedData.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white shadow-sm rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <TableCell className="px-4 py-3 font-medium text-gray-800">
                    {item.id}
                  </TableCell>

                  <TableCell className="px-4 py-3 max-w-[220px]">
                    <div className="line-clamp-2 text-gray-700">
                      {item.title}
                    </div>
                  </TableCell>

                  <TableCell className="px-4 py-3">
                    <span className="px-2 py-1 text-xs text-blue-600 rounded-md">
                      {item.type}
                    </span>
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-sm">
                    {item.submitDate}
                  </TableCell>

                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.icon}
                        className="w-7 h-7 rounded-full border"
                      />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-sm">
                    {item.assignDate}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-sm">
                    {item.updateDate}
                  </TableCell>

                  <TableCell className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ring-1 ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current" />
                      {item.status}
                    </span>
                  </TableCell>

                  <TableCell className="px-4 py-3">
          <TableButton/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* PAGINATION */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              السابق
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? "bg-gray-300 text-black" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        </>
      )}
    </div>
  );
}
