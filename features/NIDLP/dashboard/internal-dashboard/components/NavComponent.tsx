"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Users, Building2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavComponent() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tap") || "general";
  return (
    <div className="w-full border-b border-[#E5E7EB] mt-15">
      <Tabs value={currentTab} className="w-full" dir="rtl">
        <TabsList className="h-auto justify-start rounded-none border-0 border-transparent p-0">
          {/* General Dashboard */}
          <TabsTrigger
            value="general"
            className="h-full relative rounded-none border-b-2 border-transparent py-4 px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9]  data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
          >
            <Link
              className="text-lg font-medium flex items-center gap-1.5"
              href={"/nidlp/dashboard/internal-dashboard"}
            >
              {" "}
              <LayoutGrid className="h-5 w-5" /> لوحة تحكم عامة
            </Link>
          </TabsTrigger>

          {/* Employees Dashboard */}
          <TabsTrigger
            value="employees"
            className="h-full relative rounded-none border-b-2 border-transparent py-4 px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9] data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
          >
            <Link
              className="text-lg font-medium flex items-center gap-1.5"
              href={"/nidlp/dashboard/internal-dashboard?tap=employees"}
            >
              {" "}
              <Users className="h-5 w-5" /> لوحة تحكم الموظفين
            </Link>
          </TabsTrigger>

          {/* Government Entities Dashboard */}
          <TabsTrigger
            value="agencies"
            className="h-full relative rounded-none border-b-2 border-transparent py-4 px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9] data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
          >
            <Link
              className="text-lg font-medium flex items-center gap-1.5"
              href={"/nidlp/dashboard/internal-dashboard?tap=agencies"}
            >
              <Building2 className="h-5 w-5" />
              لوحة تحكم الجهات الحكومية
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
