"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

function UserButton() {
  const [isArabic, setIsArabic] = useState(true);

  return (
    <DropdownMenu dir="">
      {/* TRIGGER */}
      <DropdownMenuTrigger asChild>
        <Button
          className="
                bg-[#2E1866]
                h-12 px-3
                rounded-4xl
                flex items-center gap-3
                border border-white
                hover:bg-[#3a1f80]
                transition
                shadow-lg
              "
        >
          {/* Avatar */}
          <div className="relative w-8 h-8">
            <img
              src="/Man 6.svg"
              className="w-8 h-8 rounded-full object-cover"
            />

            {/* online dot */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#2E1866] rounded-full" />
          </div>

          <Menu className="w-5 h-5 text-white/90" />
        </Button>
      </DropdownMenuTrigger>

      {/* CONTENT */}
      <DropdownMenuContent
        align="end"
        className="
              w-80
              p-0
              rounded-3xl
              shadow-2xl
              border border-gray-100
              bg-white/80 backdrop-blur-2xl
              overflow-hidden
            "
      >
        {/* HEADER */}
        <div className="bg-gradient-to-b from-[#119DA9]/10 to-transparent p-5 text-center">
          <div className="relative w-16 h-16 mx-auto">
            <img
              src="/Man 6.svg"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>

          <h2 className="text-sm font-semibold mt-3 text-gray-800">
            عبدالله فهد العتيبي
          </h2>

          <p className="text-xs text-gray-500">aotaibi@gov.sa</p>
        </div>

        <DropdownMenuSeparator />

        {/* LANGUAGE (SEGMENT STYLE) */}
        <div className="p-3">
          <div className="flex items-center bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setIsArabic(false)}
              className={`
            flex-1 text-xs py-2 rounded-4xl transition
            ${!isArabic ? "bg-[#119DA9] shadow text-white" : "text-gray-500"}
          `}
            >
              EN
            </button>

            <button
              onClick={() => setIsArabic(true)}
              className={`
            flex-1 text-xs py-2 rounded-4xl transition
            ${isArabic ? "bg-[#119DA9] shadow text-white" : "text-gray-500"}
          `}
            >
              AR
            </button>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* ACTIONS */}
        <div className="p-2 space-y-1 ">
          {/* SETTINGS */}
          <button
            className="
                  w-full
                  flex items-center justify-end gap-2
                  px-3 py-2
                  rounded-xl
                  hover:bg-[#119DA9]/10
                  hover:text-[#119DA9]
                  transition
                  text-sm text-gray-700
                "
          >
            الإعدادات
            <Settings className="w-4 h-4" />
          </button>

          {/* LOGOUT */}
          <button
            className="
                  w-full
                  flex items-center justify-end gap-2
                  px-3 py-2
                  rounded-xl
                  hover:bg-red-50
                  hover:text-red-600
                  transition
                  text-sm text-gray-700
                "
          >
            تسجيل الخروج
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
