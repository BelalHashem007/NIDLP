"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { EllipsisVertical, LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Action, OrderRow } from "@/components/shared/table/table.types";

type ActionsCellProps = {
  row: OrderRow;
  iconMap: Record<string, LucideIcon>;
  onActionClick?: (action: Action, row: OrderRow) => void;
};

export function ActionsCell({
  row,
  iconMap,
  onActionClick,
}: ActionsCellProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer px-0 outline-none">
          <EllipsisVertical size={20} className="text-[#119DA9]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48 rounded-xl bg-white">
        {row.actions?.map((action) => {
          const Icon =
            iconMap[action.iconName.toLowerCase()] ?? LucideIcons.HelpCircle;

          if (action.type === "link") {
            return (
              <DropdownMenuItem key={action.id} asChild>
                <Link
                  href={action.href ?? "#"}
                  className="flex cursor-pointer items-center justify-end gap-2"
                >
                  <span>{action.label}</span>
                  <Icon size={16} />
                </Link>
              </DropdownMenuItem>
            );
          }

          return (
            <DropdownMenuItem
              key={action.id}
              onClick={() => onActionClick?.(action, row)}
              className="flex cursor-pointer items-center justify-end gap-2"
            >
              <span>{action.label}</span>
              <Icon size={16} />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
