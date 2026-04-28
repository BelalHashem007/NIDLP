"use client";

import { Check, LucideIcon } from "lucide-react";
import clsx from "clsx";
import { RadioGroup } from "@/components/ui/radio-group";
import { Building2, Briefcase } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { FormData, Step1Props } from "@/features/companies/types/Types";

type CardProps = {
  id: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  active: boolean;
  onClick: () => void;
};

function Card({ title, desc, Icon, active, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative flex-1 h-45 rounded-2xl p-0.5 transition-all duration-300",
        active
          ? "bg-linear-to-br from-[#4C86AA] to-[#68B7A5] scale-[1.02] shadow-lg"
          : "bg-gray-200 hover:shadow-md",
      )}
    >
      <div
        className={clsx(
          "relative h-full w-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition",
          active ? "bg-white" : "bg-[#F9FAFB]",
        )}
      >
        {/* glow */}
        {active && (
          <div className="absolute inset-0 bg-linear-to-br from-[#4C86AA]/10 to-[#68B7A5]/10 blur-xl" />
        )}

        {/* top */}
        <div className="relative flex justify-between items-start">
          <div
            className={clsx(
              "flex items-center justify-center w-14 h-14 rounded-xl transition",
              active
                ? "bg-linear-to-br from-[#4C86AA] to-[#68B7A5] shadow-md"
                : "bg-white shadow-sm",
            )}
          >
            <Icon
              size={24}
              className={active ? "text-white" : "text-[#4C86AA]"}
            />
          </div>

          {active && (
            <div className="w-5 h-5 rounded-full bg-[#4C86AA] flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
          )}
        </div>

        {/* bottom */}
        <div className="relative text-right">
          <h1 className="font-semibold text-gray-900 text-base">{title}</h1>
          <p className="text-xs text-[#6B7280] mt-1">{desc}</p>
        </div>
      </div>
    </button>
  );
}




export default function Step1({ onChangeRole }: Step1Props) {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      role: "",
    },
  });

  const onSubmit = (data: FormData) => {
    onChangeRole(data.role); 
  };

  return (
    <main className="min-h-[62vh] flex justify-center">
      <div className="w-full max-w-3xl p-10">
        <h1 className="text-center text-black font-extrabold text-2xl mb-3">
          تسجيل الدخول
        </h1>

        <p className="text-[#6B7280] text-center text-sm mb-12 leading-relaxed">
          هذه الخدمة خاصة فقط بالعاملين في{" "}
          <span className="text-[#6a6f7d] font-semibold">
            القطاع الخاص و القطاع الحكومي .{" "}
          </span>
          <br />
          اذا لم تكن من العاملين او غير مسجل في المركز <br /> السعودي للأ‘مال
          (SBC) فلن تتمكن من الاستفادة من الخدمة
        </p>

        {/* ✅ RHF Controller */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-6"
              >
                <Card
                  id="government"
                  title="الجهات الحكومية"
                  desc="ممثل لجهة حكومية"
                  Icon={Building2}
                  active={field.value === "government"}
                  onClick={() => field.onChange("government")}
                />

                <Card
                  id="company"
                  title="الشركات"
                  desc="ممثل لشركة خاصة"
                  Icon={Briefcase}
                  active={field.value === "company"}
                  onClick={() => field.onChange("company")}
                />
              </RadioGroup>
            )}
          />
        </form>
      </div>
    </main>
  );
}
