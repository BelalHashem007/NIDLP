"use client";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import { SemiCircleChart } from "../internal-dashboard/components/SemiCircleChart";
import { Filter } from "../components/Filter";
import { MOCK_SURVEYS } from "../../data/surveys-dashboard-data";
import { useMemo, useState } from "react";
import { SurveyCard } from "./components/SurveyCard";

export default function SuverysDashboard() {
  const [surveyId, setSurveyId] = useState("معرف الاستبيان");
  const [surveyName, setSurveyName] = useState("اسم الاستبيان");
  const [surveyVersion, setSurveyVersion] = useState("نسخة الاستبيان");

  const surveyIdData = useMemo(() => {
    return Array.from(new Set(MOCK_SURVEYS.map((m) => m.id))).map((m) => ({
      name: m,
    }));
  }, []);

  const surveyNameData = useMemo(() => {
    return Array.from(new Set(MOCK_SURVEYS.map((m) => m.title))).map((m) => ({
      name: m,
    }));
  }, []);

  const surveyVersionData = useMemo(() => {
    return Array.from(new Set(MOCK_SURVEYS.map((m) => m.version))).map((m) => ({
      name: m,
    }));
  }, []);

  const filteredData = useMemo(() => {
    return MOCK_SURVEYS.filter(
      (s) =>
        s.id === (surveyId === "معرف الاستبيان" ? s.id : surveyId) &&
        s.title === (surveyName === "اسم الاستبيان" ? s.title : surveyName) &&
        s.version ===
          (surveyVersion === "نسخة الاستبيان" ? s.version : surveyVersion),
    );
  }, [surveyId, surveyName, surveyVersion]);

  return (
    <div className="mt-18 flex flex-col gap-8">
      <ReusableCardComponent>
        <div className="grid grid-cols-[0.6fr_1fr_1fr] items-center">
          <div className="pr-5 py-8 pl-7 gap-7 2xl:pr-10 2xl:py-16 2xl:pl-14 flex flex-col xl:flex-row 2xl:gap-14.5 items-center justify-center">
            <div className="bg-[#F9FAFB] rounded-2xl md:p-5 xl:p-10 flex flex-col gap-2">
              <div className="font-bold text-[#111827] text-nowrap">
                عدد الاستبانات
              </div>
              <div className="text-[#119DA9] text-center font-bold md:text-4xl xl:text-7xl">
                {7}
              </div>
            </div>
          </div>
          <div className="max-w-115.25">
            <SemiCircleChart
              title={"حسب حالة الاستبيان"}
              activeValue={6}
              inactiveValue={1}
              type="suverysDashboard"
              toplabels={["منشور", "غير منشور"]}
            />
          </div>

          <div className="max-w-115.25">
            <SemiCircleChart
              title={"حسب نوع الاستبيان"}
              activeValue={1}
              inactiveValue={6}
              type="suverysDashboard"
              colors={["#632F84", "#119DA9"]}
              toplabels={[
                "استبيان قياس مستوي رضا القطاع الخاص",
                "استبيان استطلاع عن خدمة او تحدي",
              ]}
              topLabelsPositions={[45, 20]}
            />
          </div>
        </div>
      </ReusableCardComponent>

      <div className="flex gap-8">
        <div className="flex gap-3 items-center flex-1 max-w-96.75">
          <span className="text-[#6B7280] text-sm whitespace-nowrap">
            معرف الاستبيان
          </span>
          <Filter
            value={surveyId}
            setValue={setSurveyId}
            isImage={false}
            defaultSelect="معرف الاستبيان"
            data={surveyIdData}
          />
        </div>
        <div className="flex gap-3 items-center flex-1 max-w-96.75">
          <span className="text-[#6B7280] text-sm whitespace-nowrap">
            اسم الاستبيان
          </span>
          <Filter
            value={surveyName}
            setValue={setSurveyName}
            isImage={false}
            defaultSelect="اسم الاستبيان"
            data={surveyNameData}
          />
        </div>
        <div className="flex gap-3 items-center flex-1 max-w-96.75">
          <span className="text-[#6B7280] text-sm whitespace-nowrap">
            نسخة الاستبيان
          </span>
          <Filter
            value={surveyVersion}
            setValue={setSurveyVersion}
            isImage={false}
            defaultSelect="نسخة الاستبيان"
            data={surveyVersionData}
          />
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-2 gap-8">
        {filteredData.map((m) => (
          <SurveyCard key={m.id} card={m} />
        ))}
      </div>
    </div>
  );
}
