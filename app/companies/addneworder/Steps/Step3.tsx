"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

function Step3() {
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    // 🔥 Fake progress (UI demo)
    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 150);
  };

  return (
    <div className="space-y-6">
      {/* ===== ROW 1 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Name */}
        <div className="space-y-2">
          <div className="text-right">
            <label className="text-sm font-medium text-gray-700">
              اسم الشخص المسؤول<span className="text-red-500">*</span>
            </label>
          </div>

          <Input
            className="h-10 text-sm placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#119DA9]"
            placeholder="الاسم الكامل"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <div className="text-right">
            <label className="text-sm font-medium text-gray-700">
              رقم الشخص المسؤول<span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex overflow-hidden border rounded-md focus-within:ring-2 focus-within:ring-[#119DA9]">
            <select className="h-10 bg-gray-50 px-2 text-sm outline-none border-r">
              <option>+971</option>
              <option>+966</option>
              <option>+20</option>
              <option>+49</option>
            </select>

            <Input
              className="h-10 border-0 text-sm placeholder:text-[#9CA3AF] focus-visible:ring-0"
              placeholder="5XXXXXXXX"
            />
          </div>
        </div>

        {/* Job */}
        <div className="space-y-2">
          <div className="text-right">
            <label className="text-sm font-medium text-gray-700">
              الدور الوظيفي للشخص المسؤول<span className="text-red-500">*</span>
            </label>
          </div>

          <Input
            className="h-10 text-sm placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#119DA9]"
            placeholder="المسمى الوظيفي او اسم المنصب"
          />
        </div>
      </div>

      {/* ===== UPLOAD ===== */}
      <div className="space-y-3">
        {/* Label */}
        <div className="text-right">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1 justify-end">
            تحميل ملف العمل
            <span className="text-gray-400 text-xs">ⓘ</span>
          </label>
        </div>

        {/* Upload Box */}
        <label className="border-2 border-dashed rounded-xl h-36 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#119DA9] transition bg-white">
          <input type="file" className="hidden" onChange={handleFileChange} />

          <span className="text-[#119DA9] text-2xl">⬆️</span>

          <p className="text-sm text-gray-600">
            <span className="text-[#119DA9] font-medium underline">
              اختر الملف
            </span>{" "}
            أو اسحب الملف هنا
          </p>

          <p className="text-xs text-gray-400 text-center">
            2MB كحد أقصى — حتى 3 ملفات • PDF / Word / Excel / Images
          </p>
        </label>

        {/* ===== FILE INFO ===== */}
        {fileName && (
          <div className="text-sm text-gray-600 text-right">📄 {fileName}</div>
        )}

        {/* ===== PROGRESS ===== */}
        {progress > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span>جاري الرفع...</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              {/* 🔥 Fancy gradient bar */}
              <div
                className="h-full bg-gradient-to-r from-[#119DA9] to-[#0d7f89] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Success */}
            {progress === 100 && (
              <p className="text-xs text-green-600 text-right">
                ✔ تم رفع الملف بنجاح
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Step3;
