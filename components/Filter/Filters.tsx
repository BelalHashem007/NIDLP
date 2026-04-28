"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FilterModal() {
  return (
    <Dialog>
      {/* TRIGGER */}
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:text-[#119DA9] hover:border-[#119DA9] border border-gray-200 px-5 py-2 rounded-xl shadow-sm transition">
          تصفية
        </Button>
      </DialogTrigger>

      {/* MODAL */}
      <DialogContent
        className="
          max-w-2xl p-0
          rounded-3xl overflow-hidden
          shadow-2xl border-0
          bg-white/95 backdrop-blur-xl
        "
        dir="rtl"
      >
        {/* CLOSE BUTTON */}
        <DialogClose asChild></DialogClose>

        {/* HEADER */}
        <DialogHeader className="px-6 py-5 border-b bg-gradient-to-b from-[#119DA9]/10 to-white">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold text-gray-800"></DialogTitle>

            <button className="text-sm text-red-500 hover:text-red-600 transition">
              مسح الكل
            </button>
          </div>
        </DialogHeader>

        {/* BODY */}
        <div className="max-h-[65vh] overflow-y-auto px-6 py-5 space-y-4 bg-gray-50/40">
          <Accordion type="multiple" className="space-y-3">
            {/* SECTION 1 */}
            <AccordionItem
              value="source"
              className="
                bg-white
                border border-gray-100
                rounded-2xl shadow-sm
                overflow-hidden
              "
            >
              <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:no-underline">
                مصدر الطلب
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 space-y-2">
                {Array(4)
                  .fill("الهيئة العامة للنقل")
                  .map((item, i) => (
                    <label
                      key={i}
                      className="
                        flex items-center gap-3 p-2
                        rounded-lg cursor-pointer
                        hover:bg-[#119DA9]/10
                        transition
                      "
                    >
                      <Checkbox
                        className="
                          h-4 w-4 rounded-sm border-gray-300
                          data-[state=checked]:bg-[#119DA9]
                          data-[state=checked]:border-[#119DA9]
                        "
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
              </AccordionContent>
            </AccordionItem>

            {/* SECTION 2 */}
            <AccordionItem
              value="sector"
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 text-sm font-medium">
                القطاع المسؤول
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 space-y-2">
                {[
                  "قطاع النقل البري",
                  "قطاع الشحن البحري",
                  "قطاع الشحن الجوي",
                  "قطاع اللوجستيات",
                  "قطاع التجارة الإلكترونية",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="
                      flex items-center gap-3 p-2
                      rounded-lg cursor-pointer
                      hover:bg-[#119DA9]/10
                      transition
                    "
                  >
                    <Checkbox
                      className="
                        h-4 w-4 border-gray-300
                        data-[state=checked]:bg-[#119DA9]
                        data-[state=checked]:border-[#119DA9]
                      "
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* SECTION 3 */}
            <AccordionItem
              value="field"
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 text-sm font-medium">
                مجال الطلب
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 space-y-2">
                {["تشريعي", "تقني", "استثماري", "حوكمة"].map((item, i) => (
                  <label
                    key={i}
                    className="
                      flex items-center gap-3 p-2
                      rounded-lg cursor-pointer
                      hover:bg-[#119DA9]/10
                      transition
                    "
                  >
                    <Checkbox
                      className="
                        h-4 w-4 border-gray-300
                        data-[state=checked]:bg-[#119DA9]
                        data-[state=checked]:border-[#119DA9]
                      "
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 bg-white border-t flex justify-center">
          <Button
            className="
              w-full
              rounded-xl
              bg-[#119DA9]
              hover:bg-[#0f8c95]
              text-white
              shadow-md
              transition
            "
          >
            تطبيق
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
