"use client";

import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrderRow, TabsType } from "@/features/NDLIP/data/table.types";

type TableTabsProps = {
  tabsData: TabsType<OrderRow>[];
  value: string;
  onChange: (value: string) => void;
};

export function TableTabs({ tabsData, value, onChange }: TableTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={onChange}
      className="w-full border-b-2 border-gray-300"
      dir="rtl"
    >
      <TabsList className="h-auto justify-start rounded-none p-0">
        {tabsData.map((tab) => {
          const Icon =
            (LucideIcons as unknown as Record<string, LucideIcon>)[tab.icon] ??
            LucideIcons.HelpCircle;

          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative h-full rounded-none border-b-2 border-transparent px-3 py-4 text-[#6B7280] data-[state=active]:border-b-2 data-[state=active]:border-b-[#119DA9] data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none lg:px-6"
            >
              <span className="flex items-center gap-1.5 text-lg font-medium">
                <Icon className="h-6 w-6" />
                {tab.label}
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
