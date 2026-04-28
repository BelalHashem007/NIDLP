"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

function Step2() {
  const [values, setValues] = useState({
    solutions: "",
    support: "",
    international: "",
  });

  const maxWords = 500;

  const countWords = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleChange = (key: string, value: string) => {
    const words = countWords(value);
    if (words <= maxWords) {
      setValues((prev) => ({ ...prev, [key]: value }));
    }
  };

  const renderField = (label: string, key: keyof typeof values, placeholder: string) => (
    <div className="space-y-2 p-4 border rounded-xl bg-white hover:shadow-sm transition">
      
      {/* Label */}
      <div className="text-right">
        <label className="text-sm font-medium text-gray-700">
          {label} <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Textarea */}
      <Textarea
        rows={6}
        className="min-h-[150px] resize-none focus:ring-2 focus:ring-[#119DA9]"
        placeholder={placeholder}
        value={values[key]}
        onChange={(e) => handleChange(key, e.target.value)}
      />

      {/* Counter */}
      <div className="flex justify-end text-xs text-gray-500">
        {countWords(values[key])} / {maxWords} كلمة
      </div>
    </div>
  );

  return (
    <div className="space-y-6">

      {renderField(
        "الحلول المقترحة",
        "solutions",
        "اذا كان لديك حل للتحدي فلا تتردد في تضمينه هنا...."
      )}

      {renderField(
        "الدعم المطلوب",
        "support",
        "اذكر اي موارد أو مساعدة محددة تحتاجها..."
      )}

      {renderField(
        "التجارب الدولية",
        "international",
        "شارك بأي خبرات دولية ذات صلة..."
      )}

    </div>
  );
}

export default Step2;