"use client";

import { useState } from "react";
import Link from "next/link";
import CompaniesTable from "./CompainesTable";
import PublicData from "./PublicData";
import ContactData from "./ContactData";

const steps = [
  "اختر الشركة",
  "استرجاع معلومات الشركة",
  "املأ معلومات الاتصال بالشركة",
];

function AddNewCompanies() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className=" min-w-full  x-6 py-6 min-h-screen flex flex-col gap-8 items-center  ">

      <main className="bg-white w-full rounded-2xl shadow-xl p-8 relative">
        {" "}
        {/* Back */}
        <Link
          href="/companies"
          className="absolute top-6 right-6 text-[#119DA9] text-sm font-medium flex items-center gap-2 hover:opacity-80 transition"
        >
          <span className="text-lg">›</span>
          العودة إلى الشركات
        </Link>
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">
            إضافة شركة جديدة
          </h1>

        </div>
        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 relative">
          {steps.map((step, index) => {
            const isActive = currentStep === index;
            const isCompleted = currentStep > index;

            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-center relative"
              >
                {/* Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-4 right-0 w-full h-[2px] bg-gray-200 z-0">
                    <div
                      className={`h-full bg-[#119DA9] transition-all duration-500 ${
                        isCompleted ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}

                {/* Circle */}
                <div
                  className={`
                  w-9 h-9 flex items-center justify-center rounded-full z-10 text-sm font-bold transition-all
                  ${
                    isCompleted
                      ? "bg-[#119DA9] text-white"
                      : isActive
                        ? "border-2 border-[#119DA9] text-[#119DA9] bg-white"
                        : "bg-gray-200 text-gray-500"
                  }
                `}
                >
                  {isCompleted ? "✓" : index + 1}
                </div>

                {/* Label */}
                <p
                  className={`text-xs mt-3 text-center w-24 leading-tight ${
                    isActive ? "text-[#119DA9] font-semibold" : "text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
        {/* Content */}
        <div className="h-full max-w-full flex items-center justify-center  rounded-lg text-gray-400">
          {currentStep === 0 && <CompaniesTable />}
          {currentStep === 1 && <PublicData/>}
          {currentStep === 2 && <ContactData/>}
        </div>
        {/* Actions */}
        <div className="flex gap-3 mt-8">
          {/* Back Step */}
          {/* <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 0}
            className="w-1/3 py-2 rounded-md border text-gray-600 disabled:opacity-40"
          >
            السابق
          </button> */}

          {/* Next */}
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="w-2/3 bg-[#119DA9] text-white py-2 rounded-md hover:opacity-90 transition disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      </main>
    </div>
  );
}

export default AddNewCompanies;
