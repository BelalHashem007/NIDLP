import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import DateRangePicker from "./components/DatePickerRange";
import { FileText, User, Building2, ArrowUp } from "lucide-react";
import MiniSparkline from "./components/MiniSparkline";
import { DoughnutChart } from "./components/DoughnutChart";
import { VerticalBarChart } from "./components/VerticalBarChart";
import { RequestsTable } from "./components/RequestsTable";

export default function InternalDashboardIndex() {
  return (
    <div className="mt-6 flex flex-col gap-8">
      <DateRangePicker />

      {/* first two tables */}
      <div className="grid grid-cols-1 2xl:grid-cols-[2fr_1fr] 2xl:gap-8 gap-4">
        <ReusableCardComponent>
          <div className="pr-5 py-8 pl-7 gap-7 2xl:pr-10 2xl:py-16 2xl:pl-14 flex flex-col xl:flex-row  2xl:gap-14.5 items-center justify-center">
            <div className="bg-[#F9FAFB] rounded-2xl md:p-5 xl:p-10 flex flex-col gap-2">
              <div className="font-bold text-[#111827] text-nowrap">
                اجمالي عدد الطلبات
              </div>
              <div className="text-[#119DA9] text-center font-bold md:text-4xl xl:text-7xl">
                280
              </div>
            </div>
            <div className="flex-1 max-w-4xl grid grid-cols-[60px_1fr_60px] lg:grid-cols-[120px_1fr_120px] items-center gap-y-10 gap-x-6">
              {/* Row 1 */}
              <div className="text-left">
                <span className="font-bold text-base lg:text-xl/[28px] block">
                  180
                </span>
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
                    className="h-full bg-[#119DA9]"
                  ></div>
                  <div
                    style={{ width: `${(100 / 280) * 100}%` }}
                    className="h-full bg-[#632F84]"
                  ></div>
                </div>
              </div>

              <div>
                <span className="font-bold text-base lg:text-xl/[28px] block">
                  100
                </span>
                <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
                  طلب اقتراح
                </div>
              </div>

              {/* Row 2 */}
              <div className="text-left">
                <span className="font-bold text-base lg:text-xl/[28px] block">
                  240
                </span>
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
                <span className="font-bold text-base lg:text-xl/[28px] block">
                  40
                </span>
                <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
                  الطلبات الغير مسندة
                </div>
              </div>

              {/* Row 3 */}
              <div className="text-left">
                <span className="font-bold text-base lg:text-xl/[28px] block">
                  160
                </span>
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
                <span className="font-bold text-base lg:text-xl/[28px] block">
                  120
                </span>
                <div className="text-[#6B7280] text-sm text-wrap lg:text-nowrap">
                  الطلبات الغير مسندة
                </div>
              </div>
            </div>
          </div>
        </ReusableCardComponent>
        <ReusableCardComponent>
          <div className="2xl:py-8 2xl:px-6 px-3 xl:p-2 p-3">
            <p className="text-xl/[28px] font-bold text-[#111827]">
              متوسط الوقت المستغرق لإغلاق الطلبات
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
              <div className="w-[150px] h-[60px] absolute left-0 2xl:bottom-0  bottom-5">
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

      {/* first two barchart */}
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

      {/* second two barchart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              عدد الطلبات حسب المحاور
            </p>
            <div className="flex-1 w-full">
              <VerticalBarChart
                labels={[
                  ["اخري"],
                  ["سلامة", "المنتجات"],
                  ["التدريب", "والتأهيل"],
                  ["المنصات", "التقنية"],
                  ["حجز الشاحنات", "ومناطق الايواء", "والتخزين"],
                  ["القوانين", "والتشريعات"],
                  ["السائقين"],
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
                  ["اخري"],
                  ["الاهداف", "والمستهدفات", "حياة الانسان"],
                  ["حياة الانسان"],
                  ["جودة الخدمة"],
                  ["الوقت"],
                  ["مادي"],
                ]}
                dataValues={[120, 70, 40, 100, 15, 15]}
                tooltipLabel="عدد الطلبات حسب التأثير"
              />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* barchart for companies */}
      <div>
        <ReusableCardComponent>
          <div className="flex flex-col p-8">
            <p className="text-[#111827] font-bold text-lg/[28px] mb-10">
              عدد الطلبات المرفوعة من كل شركة
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
                  ["نوبكو"],
                  ["سابتكو"],
                  ["امازون"],
                ]}
                dataValues={[
                  120, 80, 100, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30,
                ]}
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
                  "/company-3.png",
                  "/company-2.png",
                  "/company-1.png",
                ]}
              />
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* requests table */}
      <div>
        <RequestsTable />
      </div>
    </div>
  );
}
