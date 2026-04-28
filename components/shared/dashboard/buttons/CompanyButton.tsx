"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";

export default function CompanyButton() {
  const [activeCompany, setActiveCompany] = useState<string>("Amazon Company");

  const companies = [
    {
      name: "amazon Company",
      logo: "/amazoncompany.svg",
    },
    {
      name: "Salla Company",
      logo: "/sallacompany.svg",
    },
  ];
  //          <div className="w-49 h-12 rounded-3xl border-1 border-white ">
  //
  //   </div>

  return (
    <DropdownMenu dir="rtl">
      {/* TRIGGER (IMPORTANT FIX) */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-49 h-12 rounded-3xl border-1 border-white bg-[#2E1866] hover:bg-[#3a1f80] flex justify-between "
        >
          <img src="/Amazon.svg" className="py-2 pr-3 " alt="amazon" />
        </Button>
      </DropdownMenuTrigger>

      {/* CONTENT */}
      <DropdownMenuContent
        align="start"
        className="
          w-72
          rounded-2xl
          p-2
          shadow-2xl
         bg-linear-to-r from-[#2E1866]/20 to-[#2E1866]/5
        "
      >
        <DropdownMenuSeparator />

        {companies.map((company) => (
          <DropdownMenuItem
            key={company.name}
            onClick={() => setActiveCompany(company.name)}
            className="
      flex items-center justify-between
      px-3 py-2
      rounded-xl
      cursor-pointer
      hover:bg-[#119DA9]/10
      transition
    "
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-3">
              {/* LOGO */}
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* NAME */}
              <span className="text-sm text-gray-700 font-medium">
                {company.name}
              </span>
            </div>

            {/* SELECTED ICON */}
            {activeCompany === company.name && (
              <Check className="w-4 h-4 text-[#119DA9]" />
            )}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* ADD */}
        <DropdownMenuItem
          className="
            flex items-center justify-center gap-2
            text-[#119DA9]
            hover:bg-[#119DA9]/10
            rounded-xl
            cursor-pointer
          "
        >
          <Plus className="w-4 h-4" />
          إضافة شركة جديدة
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
