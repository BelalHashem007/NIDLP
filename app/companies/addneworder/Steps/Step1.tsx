"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectViewport } from "@radix-ui/react-select";
import { useState } from "react";

function Step1() {
      const [impact, setImpact] = useState("");

  return (
    <div>
      <div className="space-y-6 pt-12">
        <div className="grid grid-cols-3 gap-8 pb-8">
          <div className="col-span-3 space-y-1 rounded-sm h-11">
            <label className="text-sm ">
              اسم الطلب <span className="text-red-500">*</span>
            </label>
            <Input
              className=" placeholder:text-[#9CA3AF] pt-2"
              placeholder="قم بوصف طلبك بعنوان واضح وموجز"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">
              نوع الطلب <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="w-80  h-11 flex-row-reverse justify-between text-right rtl focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue
                  className="text-red-600 "
                  placeholder="اختر نوع الطلب (تحدي / اقتراح)"
                />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="1" className="text-right">
                  اقتراح
                </SelectItem>
                <SelectItem value="2" className="text-right">
                  تحدي
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 w-80">
            <label className="text-sm text-gray-700 font-medium">
              مصدر الطلب (الجهة) <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right rtl border-gray-200 focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="الجهة أو الحكومة المسؤولة عن معالجة الطلب" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="transport_authority" className="text-right">
                  الهيئة العامة للنقل
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-700 font-medium">
              القطاع المسؤول <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="w-80 h-11 flex-row-reverse justify-between text-right focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="القطاع الذي يندرج تحنه هذا الطلب" />
              </SelectTrigger>

              <SelectContent className="w-80">
                <SelectViewport className="p-1">
                  <SelectItem
                    value="land_transport"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع النقل البري
                  </SelectItem>

                  <SelectItem
                    value="rail_transport"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع النقل بالسكك الحديدية
                  </SelectItem>

                  <SelectItem
                    value="sea_cargo"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع الشحن والخدمات البحرية
                  </SelectItem>

                  <SelectItem
                    value="air_cargo"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع الشحن الجوي
                  </SelectItem>

                  <SelectItem
                    value="logistics"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع المنصات اللوجستية والتخزين
                  </SelectItem>

                  <SelectItem
                    value="ecommerce"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع التجارة الإلكترونية
                  </SelectItem>
                  <SelectItem
                    value="last_mile"
                    className="flex justify-center text-center w-full"
                  >
                    قطاع الميل الأخير
                  </SelectItem>
                </SelectViewport>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 w-80">
            <label className="text-sm text-gray-700 font-medium">
              مجال الطلب <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right rtl border-gray-200 focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="المنطقة أو الفئة التي يندرج تحتها هذا الطلب" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="legislative" className="text-right">
                  تشريعي
                </SelectItem>

                <SelectItem value="procedural" className="text-right">
                  إجرائي
                </SelectItem>

                <SelectItem value="infrastructure" className="text-right">
                  بنية تحتية
                </SelectItem>

                <SelectItem value="technical" className="text-right">
                  تقني
                </SelectItem>

                <SelectItem value="investment" className="text-right">
                  استثماري
                </SelectItem>

                <SelectItem value="governance" className="text-right">
                  حوكمة
                </SelectItem>

                <SelectItem value="other" className="text-right">
                  أخرى
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 w-80">
            <label className="text-sm text-gray-700 font-medium">
              محور الطلب <span className="text-red-500">*</span>
            </label>

            <Select value={impact} onValueChange={setImpact}>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right rtl border-gray-200 focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="المحور أو التصنيف الذي يندرج تحته هذا الطلب" />
              </SelectTrigger>
              <SelectContent className="text-right">
                <SelectItem value="drivers" className="text-right">
                  السائقين
                </SelectItem>
                <SelectItem value="laws" className="text-right">
                  القوانين والتشريعات
                </SelectItem>
                <SelectItem value="logistics" className="text-right">
                  حجز الشاحنات ومناطق الإيواء والتخزين
                </SelectItem>
                <SelectItem value="platforms" className="text-right">
                  المنصات التقنية
                </SelectItem>
                <SelectItem value="training" className="text-right">
                  التدريب والتأهيل
                </SelectItem>
                <SelectItem value="safety" className="text-right">
                  سلامة المنتجات
                </SelectItem>
                <SelectItem value="other" className="text-right">
                  أخرى
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 w-80">
            <label className="text-sm text-gray-700 font-medium">
              تأثير الطلب <span className="text-red-500">*</span>
            </label>

            <Select value={impact} onValueChange={setImpact}>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right rtl border-gray-200 focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="النتيجة المتوقعة أو التأثير الناتج عن تلبية الطلب" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="height" className="text-right">
                  مرتفع
                </SelectItem>

                <SelectItem value="time" className="text-right">
                  الوقت
                </SelectItem>

                <SelectItem value="quality" className="text-right">
                  جودة الخدمة
                </SelectItem>

                <SelectItem value="life" className="text-right">
                  حياة الإنسان
                </SelectItem>

                <SelectItem value="strategy" className="text-right">
                  الأهداف والمستهدفات الاستراتيجية
                </SelectItem>

                <SelectItem value="other" className="text-right">
                  أخرى
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

 {impact === "other" && (
        <div className="space-y-1 w-full col-span-3">
          <label className="text-sm">
            اضافة تأثير آخر <span className="text-red-500">*</span>
          </label>

          <Textarea
            className="h-20 placeholder:text-[#9CA3AF]"
            placeholder="اشرح التأثير الآخر..."
          />
        </div>
      )}
          <div className="col-span-3 space-y-1  ">
            <label className="text-sm">
              شرح الطلب<span className="text-red-500">*</span>
            </label>
            <Textarea
              className="h-40"
              rows={4}
              placeholder="اشرح اقتراحات لتحسين التحدي الذي تواجه..."
            />
          </div>

          <div className="col-span-3 space-y-1 ">
            <label className="text-sm">سبب الطلب *</label>
            <Textarea
              className="h-40"
              rows={4}
              placeholder="اشرح لماذا سيكون اقتراحاتك مفيدة..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
