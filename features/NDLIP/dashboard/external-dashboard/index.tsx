"use client";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import DateRangePicker from "../internal-dashboard/components/DatePickerRange";
import { StatsOverView } from "../internal-dashboard/components/StatsOverView";
import MiniSparkline from "../internal-dashboard/components/MiniSparkline";
import { ArrowUp } from "lucide-react";
import { DoughnutChart } from "../internal-dashboard/components/DoughnutChart";
import { VerticalBarChart } from "../internal-dashboard/components/VerticalBarChart";
import { agenciesData, requestsData } from "../../data/internal-dashboard-data";
import { useMemo } from "react";
import { RequestsTable } from "../internal-dashboard/components/RequestsTable";

export default function ExternalDashboard() {
  const uniqueAgenciesData = useMemo(() => {
    const map = new Map();
    requestsData.forEach((r) => map.set(r.source.name, r.source.photo));
    return Array.from(map, ([name, photo]) => ({ name, photo }));
  }, []);
  return (
    <div className="mt-18 flex flex-col gap-8">
      <div>
        <DateRangePicker />
      </div>

      {/* first two tables */}
      <div className="grid grid-cols-1 2xl:grid-cols-[2fr_1fr] 2xl:gap-8 gap-4">
        <ReusableCardComponent>
          <div className="pr-5 py-8 pl-7 gap-7 2xl:pr-10 2xl:py-16 2xl:pl-14 flex flex-col xl:flex-row 2xl:gap-14.5 items-center justify-center">
            <div className="bg-[#F9FAFB] rounded-2xl md:p-5 xl:p-10 flex flex-col gap-2">
              <div className="font-bold text-[#111827] text-nowrap">
                اجمالي عدد الطلبات
              </div>
              <div className="text-[#119DA9] text-center font-bold md:text-4xl xl:text-7xl">
                {280}
              </div>
            </div>
            <StatsOverView type="external" />
          </div>
        </ReusableCardComponent>
        <ReusableCardComponent>
          <div className="2xl:py-8 2xl:px-6 px-3 xl:p-2 p-3">
            <p className="text-xl/[28px] font-bold text-[#111827]">
              متوسط الوقت المستغرق لإغلاق الطلبات من قبل الجهات
            </p>
            <div className="flex mt-10 relative">
              <div>
                <div className="flex flex-col">
                  <span className="text-[#119DA9] font-bold text-[64px]/[104px]">
                    3
                  </span>
                  <span className="font-bold text-[#111827]">ايام عمل</span>
                </div>
                <div className="flex gap-2 mt-6">
                  <span className="text-[#119DA9] flex items-center gap-0.5">
                    <ArrowUp className="size-5" />
                    60%
                  </span>
                  <span className="text-[#6B7280] text-sm">
                    مقارنة بالشهر الماضي
                  </span>
                </div>
              </div>
              <div className="w-37.5 h-15 absolute left-0 2xl:bottom-0  bottom-5">
                <MiniSparkline />
              </div>
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* donught chart */}
      <div>
        <ReusableCardComponent>
          <div className="pt-10 pr-8.25 pl-8 pb-22">
            <div className="flex justify-between flex-wrap">
              <p className="text-xl/[28px] font-bold text-[#111827]">
                عدد الطلبات حسب الحالة
              </p>
              <div>
                <div className="text-xl/[28px] font-bold text-[#4B5563] flex flex-wrap gap-4.5 items-center">
                  <div>
                    <span className="inline-block w-3 h-3 bg-[#1160A9] rounded-full"></span>
                    <span>تحت الإجراء</span>
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-[#DBB72A] rounded-full"></span>
                    <span>متأخر</span>
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-[#31B4D1] rounded-full"></span>
                    <span>تحديث مستمر</span>
                  </div>
                  <div>
                    <span className="inline-block w-3 h-3 bg-[#0E977E] rounded-full"></span>
                    <span>مكتمل</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center max-h-87.5 max-w-87.5 mx-auto mt-18">
              <DoughnutChart />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* requests charts*/}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ReusableCardComponent>
          <div className="flex flex-col lg:p-8 p-4">
            <p className="text-[#111827] font-bold text-lg/[28px] xl:mb-10 md:mb-5 mb-3">
              عدد الطلبات حسب القطاع
            </p>
            <div className="flex-1 w-full ">
              <VerticalBarChart
                labels={[
                  ["قطاع", "النقل", "بالسكك", "الحديدية"],
                  ["قطاع", "النقل", "البري"],
                  ["قطاع", "الشحن", "والخدمات", "البحرية"],
                  ["قطاع", "الشحن", "الجوي"],
                  ["قطاع", "المنصات", "اللوجستية", "والتخزين"],
                  ["قطاع", "التجارة", "عبر", "الحدود"],
                  ["قطاع", "التجارة", "الإلكترونية"],
                  ["قطاع", "الميل", "الأخير"],
                ]}
                dataValues={[120, 70, 70, 40, 100, 15, 15, 70]}
                tooltipLabel="عدد الطلبات حسب القطاع"
              />
            </div>
          </div>
        </ReusableCardComponent>
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              عدد الطلبات حسب المجال
            </p>
            <div className="flex-1 w-full">
              <VerticalBarChart
                labels={[
                  "تشريعي",
                  "اجرائي",
                  "بنية تحتية",
                  "تقني",
                  "استثماري",
                  "حكومة",
                  "اخري",
                ]}
                dataValues={[120, 70, 40, 100, 15, 15, 70]}
                tooltipLabel="عدد الطلبات حسب المجال"
              />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* two more barcharts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              عدد الطلبات حسب المحاور
            </p>
            <div className="flex-1 w-full">
              <VerticalBarChart
                labels={[
                  ["السائقين"],
                  ["القوانين", "والتشريعات"],
                  ["حجز الشاحنات", "ومناطق الايواء", "والتخزين"],
                  ["المنصات", "التقنية"],
                  ["التدريب", "والتأهيل"],
                  ["سلامة", "المنتجات"],
                  ["اخري"],
                ]}
                dataValues={[120, 70, 40, 100, 15, 15, 70]}
                tooltipLabel="عدد الطلبات حسب المحاور"
              />
            </div>
          </div>
        </ReusableCardComponent>
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              عدد الطلبات حسب التأثير
            </p>
            <div className="flex-1 w-full">
              <VerticalBarChart
                labels={[
                  ["مادي"],
                  ["الوقت"],
                  ["جودة الخدمة"],
                  ["حياة الانسان"],
                  ["الاهداف", "والمستهدفات", "حياة الانسان"],
                  ["اخري"],
                ]}
                dataValues={[120, 70, 40, 100, 15, 15]}
                tooltipLabel="عدد الطلبات حسب التأثير"
              />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* top 10 companies per requests*/}
      <div>
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              اعلى 10 شركات خاصة في رفع الطلبات{" "}
            </p>
            <div className="flex-1 w-full">
              <VerticalBarChart
                labels={[
                  ["سلة"],
                  ["زاجل"],
                  ["نون"],
                  ["المجدوعي"],
                  ["البحري"],
                  ["ارامكس"],
                  ["شنكر"],
                  ["ترككر"],
                  ["UPS"],
                  ["اراسكو"],
                ]}
                dataValues={[115, 90, 80, 60, 45, 38, 30, 20, 15, 8]}
                tooltipLabel="عدد الطلبات المرفوعة من كل شركة"
                imageUrls={[
                  "/company-13.png",
                  "/company-12.png",
                  "/company-11.png",
                  "/company-10.png",
                  "/company-9.png",
                  "/company-8.png",
                  "/company-7.png",
                  "/company-6.png",
                  "/company-5.png",
                  "/company-4.png",
                ]}
              />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* top 10 agencies per requests*/}
      <div>
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              اعلى 10 جهات حكومية مسند لها طلبات
            </p>
            <div className="flex-1 w-full">
              <VerticalBarChart
                labels={Array.from(
                  { length: 10 },
                  (_, i) => agenciesData[i % 4].agency_name,
                )}
                dataValues={[115, 90, 80, 60, 45, 38, 30, 20, 15, 8]}
                tooltipLabel="عدد الطلبات المرفوعة من كل شركة"
                imageUrls={Array.from(
                  { length: 10 },
                  (_, i) => uniqueAgenciesData[i % 4].photo,
                )}
              />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* requests table */}
      <div>
        <RequestsTable tap={""} selectedEmployee={""} selectedAgency={""} />
      </div>
    </div>
  );
}
