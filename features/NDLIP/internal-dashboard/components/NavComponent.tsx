import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, Users, Building2 } from "lucide-react";

export default function NavComponent() {
  return (
    <div className="w-full border-b border-[#E5E7EB] mt-15">
      <Tabs defaultValue="general" className="w-full" dir="rtl">
        <TabsList className="h-auto justify-start rounded-none border-0 border-transparent p-0">
          {/* General Dashboard */}
          <TabsTrigger
            value="general"
            className="h-full relative flex items-center gap-1.5 rounded-none border-b-2 border-transparent py-4 px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9]  data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
          >
            <LayoutGrid className="h-5 w-5" />
            <span className="text-lg font-medium">لوحة تحكم عامة</span>
          </TabsTrigger>

          {/* Employees Dashboard */}
          <TabsTrigger
            value="employees"
            className="h-full relative flex items-center gap-1.5 rounded-none border-b-2 border-transparent py-4 px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9] data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
          >
            <Users className="h-5 w-5" />
            <span className="text-lg font-medium">لوحة تحكم الموظفين</span>
          </TabsTrigger>

          {/* Government Entities Dashboard */}
          <TabsTrigger
            value="government"
            className="h-full relative flex items-center gap-1.5 rounded-none border-b-2 border-transparent py-4 px-6 text-[#6B7280] data-[state=active]:border-b-[#119DA9] data-[state=active]:bg-transparent data-[state=active]:text-[#119DA9] data-[state=active]:shadow-none"
          >
            <Building2 className="h-5 w-5" />
            <span className="text-lg font-medium">
              لوحة تحكم الجهات الحكومية
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
