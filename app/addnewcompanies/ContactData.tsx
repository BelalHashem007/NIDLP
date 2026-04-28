"use client";

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  phone: string;
  landline: string;
};

export default function ContactData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <main className="w-full  mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 pb-8">معلومات عامة </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-6  pt-8"
        dir="rtl"
      >
        {/* البريد الإلكتروني */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-right text-[#111827]">
            البريد الإلكتروني الرئيسي للشركة{" "}
            <span className="text-red-600">*</span>
          </label>

          <input
            type="email"
            placeholder="info@example.com"
            {...register("email", { required: true })}
            className="w-full border rounded-md px-3 py-2 text-right outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#9CA3AF]"
          />
        </div>

        {/* رقم الجوال */}
        <div className="flex flex-col gap-2 ">
          <label className="text-sm font-medium text-right text-[#111827]">
            رقم الجوال الرئيسي للشركة <span className="text-red-600">*</span>
          </label>

          <div className="flex items-center border rounded-md overflow-hidden">
            {/* country code */}
            <div className="flex items-center gap-2 px-3 bg-gray-50 border-l">
              <span className="text-sm">+966 </span>
            </div>

            <input
              type="tel"
              placeholder="رقم الهاتف"
              {...register("phone", { required: true })}
              className="w-full px-3 py-2 outline-none text-right placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>

        {/* رقم الهاتف الثابت */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-right text-[#111827]">
            رقم الهاتف الرئيسي للشركةالثابت{" "}
            <span className="text-red-600">*</span>
          </label>

          <input
            type="tel"
            placeholder='رقم الهاتف "الثابت" للشركة'
            {...register("landline", { required: true })}
            className="w-full border rounded-md px-3 py-2 text-right outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#9CA3AF]"
          />
        </div>
      </form>
    </main>
  );
}
