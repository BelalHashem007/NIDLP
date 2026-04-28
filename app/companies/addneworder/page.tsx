"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step1 from "./Steps/Step1";
import { Save } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AddNewOrders() {
  const [step, setStep] = useState(1);

  const [submitOpen, setSubmitOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);

  const steps = [
    "البيانات الرئيسية",
    "الحلول والمقترحات",
    "المستندات الداعمة",
  ];

  const nextStep = () => setStep((p) => Math.min(p + 1, 3));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const handleSubmit = () => {
    setSubmitOpen(true);
  };

  const handleSave = () => {
    setSaveOpen(true);

    // optional auto close
    setTimeout(() => {
      setSaveOpen(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm" dir="rtl">

      {/* ===== STEPPER ===== */}
<div className="flex items-center justify-between w-full px-2">

  {steps.map((label, index) => {
    const stepNumber = index + 1;
    const isActive = step === stepNumber;
    const isDone = step > stepNumber;

    return (
      <div key={index} className="flex items-center flex-1 relative mb-6">

        {/* CONNECTOR */}
        {index !== 0 && (
          <div className="absolute left-1/2 top-1/2 w-full h-[2px] -translate-y-1/2 -z-10">
            <div
              className={`h-full transition-all duration-300 ${
                isDone ? "bg-[#119DA9]" : "bg-gray-200"
              }`}
            />
          </div>
        )}

        {/* STEP ITEM */}
        <div className="flex flex-col items-center w-full">

          {/* CIRCLE */}
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold
              transition-all duration-300
              shadow-sm
              ${
                isDone
                  ? "bg-[#119DA9] text-white"
                  : isActive
                  ? "border-2 border-[#119DA9] text-[#119DA9] bg-white scale-110"
                  : "bg-gray-100 text-gray-400"
              }
            `}
          >
            {isDone ? "✓" : stepNumber}
          </div>

          {/* LABEL */}
          <p
            className={`
              mt-2 text-[11px] text-center transition
              ${
                isActive
                  ? "text-[#119DA9] font-semibold"
                  : "text-gray-400"
              }
            `}
          >
            {label}
          </p>

        </div>

      </div>
    );
  })}

</div>

      {/* ===== STEPS ===== */}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      {/* ===== FOOTER ===== */}
      <div className="flex justify-between items-center pt-4 border-t">

        {/* BACK */}
        <Button
          variant="outline"
          disabled={step === 1}
          onClick={prevStep}
          className="h-11 px-5 border-gray-200 text-gray-600 hover:bg-gray-50"
        >
          ← رجوع
        </Button>

        {/* ACTIONS */}
        <div className="flex gap-4">

          {/* SAVE */}
          <Button
            onClick={handleSave}
            variant="outline"
            className="h-11 px-5 border-gray-200 text-black hover:bg-gray-50 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            حفظ كمسودة
          </Button>

          {/* NEXT / SUBMIT */}
          {step < 3 ? (
            <Button
              onClick={nextStep}
              className="h-11 px-6 text-white bg-gradient-to-r from-[#66B4A5] via-[#5291A9] to-[#634AAE] hover:opacity-90 flex items-center gap-2"
            >
              التالي ←
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="h-11 px-6 text-white bg-gradient-to-r from-[#119DA9] to-[#0d7f89] hover:opacity-90 flex items-center gap-2"
            >
              ارسال الطلب 🚀
            </Button>
          )}

        </div>
      </div>

      {/* ===== SUBMIT DIALOG ===== */}
      <Dialog open={submitOpen} onOpenChange={setSubmitOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl p-6 text-center">

          <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
            <img src="/X.svg" className="w-7 h-7" />
          </div>

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900 text-center">
              تم تقديم الطلب بنجاح
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            تم تقديم طلبك بنجاح وسيتم إعلامك بأي تحديث لاحقاً.
          </p>

          <Button
            onClick={() => setSubmitOpen(false)}
            className="mt-5 w-full h-11 bg-[#119DA9] hover:bg-[#0f8a92] text-white"
          >
            إغلاق
          </Button>
        </DialogContent>
      </Dialog>

      {/* ===== SAVE DRAFT DIALOG ===== */}
      <Dialog open={saveOpen} onOpenChange={setSaveOpen}>
        <DialogContent className="sm:max-w-sm rounded-2xl p-6 text-center">

          <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Save className="w-6 h-6 text-blue-600" />
          </div>

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900 text-center">
              تم الحفظ كمسودة
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-gray-500 mt-2">
            يمكنك العودة لإكمال الطلب في أي وقت
          </p>

          <Button
            onClick={() => setSaveOpen(false)}
            className="mt-5 w-full h-11 bg-gray-900 hover:bg-black text-white"
          >
            حسناً
          </Button>

        </DialogContent>
      </Dialog>

    </div>
  );
}