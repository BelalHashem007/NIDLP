"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreVertical, Eye, XCircle } from "lucide-react";

export default function TableButton() {
  return (
    <DropdownMenu>
      {/* TRIGGER */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="
            w-8 h-8
            p-0
            rounded-lg
            hover:bg-gray-100
            transition
            
          "
        >
          <MoreVertical className="w-4 h-4 text-blue-500" />
        </Button>
      </DropdownMenuTrigger>

      {/* CONTENT */}
      <DropdownMenuContent
        align="end"
        className="
          w-44
          p-2
          rounded-2xl
          shadow-xl
          border border-gray-100
          bg-white/95 backdrop-blur-xl
        "
      >
        {/* VIEW */}
        <DropdownMenuItem
          className="
            flex items-center gap-2
            px-3 py-2
            rounded-xl
            cursor-pointer
            hover:bg-[#119DA9]/10
            hover:text-[#119DA9]
            transition
          "
        >
          <Eye className="w-4 h-4" />
          عرض الطلب
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* CANCEL */}
        <DropdownMenuItem
          className="
            flex items-center gap-2
            px-3 py-2
            rounded-xl
            cursor-pointer
            text-red-500
            hover:bg-red-50
            transition
          "
        >
          <XCircle className="w-4 h-4" />
          إلغاء الطلب
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}