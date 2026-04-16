"use client";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import DateRangePicker from "./components/DatePickerRange";
import { ArrowUp } from "lucide-react";
import MiniSparkline from "./components/MiniSparkline";
import { DoughnutChart } from "./components/DoughnutChart";
import { VerticalBarChart } from "./components/VerticalBarChart";
import { RequestsTable } from "./components/RequestsTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  agenciesData,
  employeesData,
  requestsData,
} from "../../data/internal-dashboard-data";
import Image from "next/image";
import { SemiCircleChart } from "./components/SemiCircleChart";
import { useMemo, useState } from "react";
import { EmployeeInfoComponent } from "./components/EmployeeInfoComponent";
import { AgencyInfoComponent } from "./components/AgencyInfoComponent";
import { StatsOverView } from "./components/StatsOverView";

export default function InternalDashboardIndex({
  tap,
}: {
  tap: string | string[];
}) {
  const activeTap = Array.isArray(tap) ? tap[0] : tap;
  const isEmployees = activeTap === "employees";
  const isAgencies = activeTap === "agencies";
  const [selectedEmployee, setSelectedEmployee] =
    useState<string>("جميع الموظفين");
  const [selectedAgency, setSelectedAgency] = useState<string>(
    "جميع الجهات الحكومية",
  );

  const uniqueEmployeesData = useMemo(() => {
    const map = new Map();
    requestsData.forEach((r) =>
      map.set(r.assigned_employee.name, r.assigned_employee.photo),
    );
    return Array.from(map, ([name, photo]) => ({ name, photo }));
  }, []);
  const uniqueAgenciesData = useMemo(() => {
    const map = new Map();
    requestsData.forEach((r) => map.set(r.source.name, r.source.photo));
    return Array.from(map, ([name, photo]) => ({ name, photo }));
  }, []);

  return (
    <div className="mt-6 flex flex-col gap-8">
      <div className="flex gap-8 lg:items-center flex-col lg:flex-row">
        {(isEmployees || isAgencies) && (
          <div className="flex flex-1 items-center gap-3 max-w-100">
            {/* The Label on the right */}
            <span className="text-[#6B7280] text-sm whitespace-nowrap">
              {isEmployees ? "الموظف المسند" : "الجهة الحكومية "}
            </span>

            <Select
              value={isEmployees ? selectedEmployee : selectedAgency}
              onValueChange={
                isEmployees ? setSelectedEmployee : setSelectedAgency
              }
            >
              <SelectTrigger className="flex-1 w-full px-3.25 py-5.25 rounded-md bg-white border border-[#E5E7EB] text-[#9CA3AF] shadow-[0px_1px_2px_0px_#0000000D] flex-row-reverse focus:ring-0 focus:ring-offset-0">
                <div className="flex items-center justify-between w-full flex-row-reverse gap-2">
                  <div className="flex items-center gap-2">
                    {/* 1. Logic for Employees */}
                    {isEmployees && selectedEmployee !== "جميع الموظفين" && (
                      <>
                        <span>{selectedEmployee}</span>
                        <Image
                          src={
                            uniqueEmployeesData.find(
                              (e) => e.name === selectedEmployee,
                            )?.photo || ""
                          }
                          width={24}
                          height={24}
                          alt=""
                          className="rounded-full"
                        />
                      </>
                    )}

                    {/* 2. Logic for Agencies */}
                    {isAgencies &&
                      selectedAgency !== "جميع الجهات الحكومية" && (
                        <>
                          <span>{selectedAgency}</span>
                          <Image
                            src={
                              uniqueAgenciesData.find(
                                (a) => a.name === selectedAgency,
                              )?.photo || ""
                            }
                            width={24}
                            height={24}
                            alt=""
                            className="rounded-full"
                          />
                        </>
                      )}

                    {/* 3. Logic for Default/All state */}
                    {((isEmployees && selectedEmployee === "جميع الموظفين") ||
                      (isAgencies &&
                        selectedAgency === "جميع الجهات الحكومية")) && (
                      <SelectValue
                        placeholder={
                          isEmployees ? "جميع الموظفين" : "جميع الجهات الحكومية"
                        }
                      />
                    )}
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent
                className="bg-white border border-[#E5E7EB] rounded-xl shadow-lg p-2 ring-0"
                position="popper"
              >
                <SelectGroup>
                  <SelectItem
                    value={
                      isEmployees ? "جميع الموظفين" : "جميع الجهات الحكومية"
                    }
                    className="flex justify-end cursor-pointer focus:bg-[#F3F4F6] transition-colors px-4 py-3 mb-1 rounded-lg"
                  >
                    {isEmployees ? "جميع الموظفين" : "جميع الجهات الحكومية"}
                  </SelectItem>
                  {isEmployees
                    ? uniqueEmployeesData.map((r, i) => (
                        <SelectItem
                          key={i}
                          value={r.name}
                          className="flex justify-end items-center px-4 py-3 mb-1 rounded-lg text-right cursor-pointer focus:bg-[#F3F4F6] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{r.name}</span>
                            <Image
                              src={r.photo}
                              width={24}
                              height={24}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                        </SelectItem>
                      ))
                    : uniqueAgenciesData.map((r, i) => (
                        <SelectItem
                          key={i}
                          value={r.name}
                          className="flex justify-end items-center px-4 py-3 mb-1 rounded-lg text-right cursor-pointer focus:bg-[#F3F4F6] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{r.name}</span>
                            <Image
                              src={r.photo}
                              width={24}
                              height={24}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                        </SelectItem>
                      ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="flex-1 flex">
          <DateRangePicker />
        </div>
      </div>

      {/* first two tables */}
      <div className="grid grid-cols-1 2xl:grid-cols-[2fr_1fr] 2xl:gap-8 gap-4">
        {tap === "employees" && selectedEmployee !== "جميع الموظفين" ? (
          <EmployeeInfoComponent
            employee={{
              ...employeesData.find((r) => r.name === selectedEmployee)!,
              photo: "/placeholder.png",
            }}
          />
        ) : tap === "agencies" && selectedAgency !== "جميع الجهات الحكومية" ? (
          <AgencyInfoComponent
            agency={{
              ...agenciesData.find((r) => r.agency_name === selectedAgency)!,
              photo: "/placeholder_agency.png",
            }}
          />
        ) : (
          <ReusableCardComponent>
            <div className="pr-5 py-8 pl-7 gap-7 2xl:pr-10 2xl:py-16 2xl:pl-14 flex flex-col xl:flex-row 2xl:gap-14.5 items-center justify-center">
              <div className="bg-[#F9FAFB] rounded-2xl md:p-5 xl:p-10 flex flex-col gap-2">
                <div className="font-bold text-[#111827] text-nowrap">
                  {tap === "employees"
                    ? "اجمالي عدد الموظفين"
                    : tap === "agencies"
                      ? "اجمالي عدد الجهات"
                      : "اجمالي عدد الطلبات"}
                </div>
                <div className="text-[#119DA9] text-center font-bold md:text-4xl xl:text-7xl">
                  {tap === "employees" ? 180 : tap === "agencies" ? 24 : 280}
                </div>
              </div>
              {isEmployees ? (
                <SemiCircleChart
                  title={"اجمالي عدد الموظفين"}
                  activeValue={120}
                  inactiveValue={20}
                  type="employees"
                />
              ) : isAgencies ? (
                <SemiCircleChart
                  title={"نسبة معالجة الطلبات"}
                  activeValue={160}
                  inactiveValue={4}
                  type="agencies"
                />
              ) : (
                <StatsOverView type="internal" />
              )}
            </div>
          </ReusableCardComponent>
        )}
        <ReusableCardComponent>
          <div className="2xl:py-8 2xl:px-6 px-3 xl:p-2 p-3">
            <p className="text-xl/[28px] font-bold text-[#111827]">
              {isAgencies && selectedAgency === "جميع الجهات الحكومية"
                ? "  متوسط الوقت المستغرق لاغلاق الطلبات من قبل الجهة الحكومية"
                : "متوسط الوقت المستغرق لإغلاق الطلبات"}
            </p>
            <div className="flex mt-10 relative">
              <div>
                <div className="flex flex-col">
                  <span className="text-[#119DA9] font-bold text-[64px]/[104px]">
                    {isEmployees && selectedEmployee !== "جميع الموظفين"
                      ? employeesData.find((r) => r.name === selectedEmployee)!
                          .average_closure_time
                      : isAgencies && selectedAgency !== "جميع الجهات الحكومية"
                        ? agenciesData.find(
                            (r) => r.agency_name === selectedAgency,
                          )!.average_closure_time
                        : 3}
                  </span>
                  <span className="font-bold text-[#111827]">ايام عمل</span>
                </div>
                {!(
                  (tap === "employees" &&
                    selectedEmployee !== "جميع الموظفين") ||
                  (isAgencies && selectedAgency !== "جميع الجهات الحكومية")
                ) && (
                  <div className="flex gap-2 mt-6">
                    <span className="text-[#119DA9] flex items-center gap-0.5">
                      <ArrowUp className="size-5" />
                      60%
                    </span>
                    <span className="text-[#6B7280] text-sm">
                      مقارنة بالشهر الماضي
                    </span>
                  </div>
                )}
              </div>
              {!(
                (tap === "employees" && selectedEmployee !== "جميع الموظفين") ||
                (isAgencies && selectedAgency !== "جميع الجهات الحكومية")
              ) && (
                <div className="w-37.5 h-15 absolute left-0 2xl:bottom-0  bottom-5">
                  <MiniSparkline />
                </div>
              )}
            </div>
          </div>
        </ReusableCardComponent>
      </div>

      {/* first two barchart for employees*/}
      {tap === "employees" && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ReusableCardComponent>
            <div className="flex flex-col lg:p-8 p-4">
              <div className="xl:mb-10 md:mb-5 mb-3 flex flex-col gap-2">
                <p className="text-[#111827] font-bold text-lg/[28px] ">
                  اجمالي عدد الطلبات المسندة{" "}
                </p>
                <p className="text-[#6B7280] text-sm">الموظفين الأكثر نشاطا</p>
              </div>
              <div className="flex-1 w-full ">
                <VerticalBarChart
                  labels={
                    selectedEmployee === "جميع الموظفين"
                      ? uniqueEmployeesData.map((r) => r.name.split(" "))
                      : [selectedEmployee]
                  }
                  dataValues={
                    selectedEmployee === "جميع الموظفين"
                      ? [150, 110, 100, 70, 50, 38, 30, 25]
                      : [110]
                  }
                  tooltipLabel="عدد الطلبات حسب الموظف"
                  imageUrls={
                    selectedEmployee === "جميع الموظفين"
                      ? uniqueEmployeesData.map((r) => r.photo)
                      : [
                          uniqueEmployeesData.find(
                            (r) => r.name === selectedEmployee,
                          )?.photo || "",
                        ]
                  }
                />
              </div>
            </div>
          </ReusableCardComponent>
          <ReusableCardComponent>
            <div className="flex flex-col p-8">
              <div className="xl:mb-10 md:mb-5 mb-3 flex flex-col gap-2">
                <p className="text-[#111827] font-bold text-lg/[28px] ">
                  اجمالي عدد الطلبات المكتملة
                </p>
                <p className="text-[#6B7280] text-sm">الموظفين الأكثر نشاطا</p>
              </div>
              <div className="flex-1 w-full">
                <VerticalBarChart
                  labels={
                    selectedEmployee === "جميع الموظفين"
                      ? uniqueEmployeesData.map((r) => r.name.split(" "))
                      : [selectedEmployee]
                  }
                  dataValues={
                    selectedEmployee === "جميع الموظفين"
                      ? [150, 110, 100, 70, 50, 38, 30, 25]
                      : [110]
                  }
                  tooltipLabel="عدد الطلبات حسب الموظف"
                  imageUrls={
                    selectedEmployee === "جميع الموظفين"
                      ? uniqueEmployeesData.map((r) => r.photo)
                      : [
                          uniqueEmployeesData.find(
                            (r) => r.name === selectedEmployee,
                          )?.photo || "",
                        ]
                  }
                />
              </div>
            </div>
          </ReusableCardComponent>
        </div>
      )}

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

      {tap === "general" && (
        <>
          {/* first two barchart for general*/}
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
        </>
      )}

      {/* requests table */}
      <div>
        <RequestsTable
          tap={tap as string}
          selectedEmployee={selectedEmployee}
          selectedAgency={selectedAgency}
        />
      </div>
    </div>
  );
}
