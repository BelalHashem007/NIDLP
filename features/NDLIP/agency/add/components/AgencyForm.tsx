"use client";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { FormInput } from "./FormInput";
import { AgencyCitySelect } from "./AgencyCitySelect";
import { agenciesData } from "@/features/NDLIP/data/agency-data";
import { Save } from "lucide-react";

export type Inputs = {
  agencyName: string;
  agencyCity: string;
  agency: string;
  phone: string;
  fax: string;
  email: string;
  postal: string;
  mail: string;
};

type Props = {
  onSubmit: SubmitHandler<Inputs>;
  variant?: "add" | "edit";
  agencyToEdit?: (typeof agenciesData)[0];
};

export function AgencyForm({ onSubmit, variant = "add", agencyToEdit }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      agency: agencyToEdit?.agency || "",
      agencyCity: agencyToEdit?.city,
      agencyName: agencyToEdit?.entity_name,
      email: agencyToEdit?.email,
      fax: agencyToEdit?.fax,
      mail: agencyToEdit?.mail,
      phone: agencyToEdit?.phone,
      postal: agencyToEdit?.postal,
    },
  });

  const [agencyCity, agencyName] = watch(["agencyCity", "agencyName"]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-8 mx-8 relative mb-27 border-b border-[#E5E7EB]"
    >
      <div className="flex flex-col gap-2 mb-8">
        <label
          htmlFor="agencyName"
          className="font-bold text-[#111827] text-sm"
        >
          اسم الجهة الحكومية<span className="text-red-500">*</span>
        </label>
        <FormInput
          {...register("agencyName", {
            required: "اسم الجهة الحكومية مطلوب!",
          })}
          placeholder="اسم الجهة الحكومية"
          type="text"
        />
        {errors.agencyName && (
          <p className="text-red-500">{errors.agencyName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 min-[1120px]:grid-cols-2 min-[1420px]:grid-cols-3 gap-8">
        <div className="flex flex-1 flex-col gap-2">
          <label
            htmlFor="agencyCity"
            className="font-bold text-[#111827] text-sm"
          >
            موقع الجهة الحكومية<span className="text-red-500">*</span>
          </label>
          <Controller
            name="agencyCity"
            control={control}
            rules={{ required: "موقع الجهة الحكومية مطلوب!" }}
            render={({ field }) => (
              <AgencyCitySelect
                id={"agencyCity"}
                onValueChange={field.onChange}
                {...field}
              />
            )}
          />
          {errors.agencyCity && (
            <p className="text-red-500">{errors.agencyCity.message}</p>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="agency" className="font-bold text-[#111827] text-sm">
            الوكالة
          </label>
          <FormInput
            {...register("agency")}
            placeholder="الوكالة"
            type="text"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="phone" className="font-bold text-[#111827] text-sm">
            رقم الهاتف
          </label>
          <FormInput
            {...register("phone")}
            placeholder="xxxxxxxxxx"
            type="tel"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="fax" className="font-bold text-[#111827] text-sm">
            الفاكس
          </label>
          <FormInput
            {...register("fax")}
            placeholder="الفاكس"
            type="tel"
            autoComplete="fax"
            className="text-right"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="email" className="font-bold text-[#111827] text-sm">
            البريد الإلكتروني للجهة
          </label>
          <FormInput
            {...register("email")}
            placeholder="البريد الإلكتروني للجهة"
            type="email"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="postal" className="font-bold text-[#111827] text-sm">
            الرمز البريدي
          </label>
          <FormInput
            {...register("postal")}
            placeholder="الرمز البريدي"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="mail" className="font-bold text-[#111827] text-sm">
            صندوق البريد
          </label>
          <FormInput
            {...register("mail")}
            placeholder="صندوق البريد"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
          />
        </div>
      </div>
      {variant === "edit" ? (
        <button
          className="absolute cursor-pointer -bottom-20 left-0 text-[#119DA9] flex gap-2 items-center font-bold text-base/[24px] disabled:text-[#9CA3AF]"
          disabled={!agencyName || !agencyCity}
          type="submit"
        >
          <Save className="size-5" />
          حفظ التعديل
        </button>
      ) : (
        <button
          className="absolute -bottom-20 left-0 py-3 px-4 rounded-lg text-white flex gap-2 cursor-pointer disabled:text-[#9CA3AF] not-disabled:bg-[linear-gradient(269.45deg,#66B4A5_-85.5%,#5291A9_17.09%,#634AAE_161.85%)] disabled:bg-[#E5E7EB]"
          disabled={!agencyName || !agencyCity}
          type="submit"
        >
          {" "}
          <span>+</span>
          اضافة جهة حكومية
        </button>
      )}
    </form>
  );
}
