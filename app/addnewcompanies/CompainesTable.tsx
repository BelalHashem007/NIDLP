"use client";

import { useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { companies } from "@/data/companies/companies";

type FormData = {
  companyId: number;
};

export default function CompaniesTable() {
  const { register, watch, setValue } = useForm<FormData>();
  const selected = watch("companyId");

  return (
    <div className="w-full bg-white border rounded-2xl shadow-sm overflow-hidden">
      <div className="max-h-[500px] overflow-y-auto">
        <Table>
          {/* Header */}
          <TableHeader className="bg-gray-50 sticky top-0 z-10 border-b">
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead className="text-right font-semibold text-gray-700">
                الشركة
              </TableHead>
              <TableHead className="text-right">السجل التجاري</TableHead>
              <TableHead className="text-right">الرقم الموحد</TableHead>
              <TableHead className="text-right">رقم السجل</TableHead>
              <TableHead className="text-right">النوع</TableHead>
              <TableHead className="text-right">العلاقة</TableHead>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody>
            {companies.map((company) => {
              const isSelected = selected === company.id;

              return (
                <TableRow
                  key={company.id}
                  onClick={() => setValue("companyId", company.id)}
                  className={`
                    cursor-pointer transition-all duration-200
                    ${isSelected ? "bg-[#119DA910]" : ""}
                    hover:bg-gray-50
                  `}
                >
                  {/* Radio */}
                  <TableCell>
                    <input
                      type="radio"
                      value={company.id}
                      {...register("companyId", { valueAsNumber: true })}
                      checked={isSelected}
                      className="w-5 h-5 accent-[#119DA9] cursor-pointer"
                    />
                  </TableCell>

                  {/* Company */}
                  <TableCell>
                    <div className="flex items-center gap-3 py-2">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image
                          src={company.path}
                          alt={company.name}
                          width={28}
                          height={28}
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {company.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          شركة مسجلة
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  {/* CR Name */}
                  <TableCell className="text-gray-600">
                    {company.crName}
                  </TableCell>

                  {/* Unified */}
                  <TableCell className="font-mono text-gray-700 text-sm">
                    {company.unifiedNumber}
                  </TableCell>

                  {/* CR Number */}
                  <TableCell className="font-mono text-gray-700 text-sm">
                    {company.crNumber}
                  </TableCell>

                  {/* Type */}
                  <TableCell>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                      {company.crType}
                    </span>
                  </TableCell>

                  {/* Relation */}
                  <TableCell>
                    <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 border border-green-100">
                      {company.relation}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}