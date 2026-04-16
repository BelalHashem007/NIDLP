import { Building2, FileText, User } from "lucide-react";

export function StatsOverView({ type }: { type: "internal" | "external" }) {
  return (
    <div className="flex-1 max-w-4xl grid grid-cols-[60px_1fr_60px] lg:grid-cols-[120px_1fr_120px] items-center gap-y-10 gap-x-6">
      {/* Row 1 */}
      <div className="text-left">
        <span className="font-bold text-base lg:text-xl/[28px] block">180</span>
        <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
          طلب تحدي
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center justify-center text-[#6B7280] text-sm">
          <FileText className="w-4 h-3.5" />
          حسب حالة نوع الطلب
        </div>
        <div className="rounded-sm h-4 w-full flex overflow-hidden bg-gray-100">
          <div
            style={{ width: `${(180 / 280) * 100}%` }}
            className={`h-full bg-[#119DA9]`}
          ></div>
          <div
            style={{ width: `${(100 / 280) * 100}%` }}
            className={`h-full ${type === "internal" ? "bg-[#632F84]" : "bg-[#A5E9EF]"}`}
          ></div>
        </div>
      </div>

      <div>
        <span className="font-bold text-base lg:text-xl/[28px] block">100</span>
        <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
          طلب اقتراح
        </div>
      </div>

      {/* Row 2 */}
      <div className="text-left">
        <span className="font-bold text-base lg:text-xl/[28px] block">240</span>
        <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
          الطلبات المسندة
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center justify-center text-[#6B7280] text-sm">
          <User className="w-4 h-3.5" />
          حسب حالة الاسناد لموظف
        </div>
        <div className="rounded-sm h-4 w-full flex overflow-hidden bg-gray-100">
          <div
            style={{ width: `${(240 / 280) * 100}%` }}
            className="h-full bg-[#119DA9]"
          ></div>
          <div
            style={{ width: `${(40 / 280) * 100}%` }}
            className="h-full bg-[#F3F4F6]"
          ></div>
        </div>
      </div>

      <div>
        <span className="font-bold text-base lg:text-xl/[28px] block">40</span>
        <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
          الطلبات الغير مسندة
        </div>
      </div>

      {/* Row 3 */}
      <div className="text-left">
        <span className="font-bold text-base lg:text-xl/[28px] block">160</span>
        <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
          الطلبات المسندة
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center justify-center text-[#6B7280] text-sm">
          <Building2 className="w-4 h-3.5" />
          حسب حالة الإسناد لجهة حكومية{" "}
        </div>
        <div className="rounded-sm h-4 w-full flex overflow-hidden bg-gray-100">
          <div
            style={{ width: `${(160 / 280) * 100}%` }}
            className="h-full bg-[#119DA9]"
          ></div>
          <div
            style={{ width: `${(120 / 280) * 100}%` }}
            className="h-full bg-[#F3F4F6]"
          ></div>
        </div>
      </div>

      <div>
        <span className="font-bold text-base lg:text-xl/[28px] block">120</span>
        <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
          الطلبات الغير مسندة
        </div>
      </div>
    </div>
  );
}
