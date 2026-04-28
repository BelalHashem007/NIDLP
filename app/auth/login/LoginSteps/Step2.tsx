"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const companies = [
  {
    id: 1,
    src: "/AmazonIcon.svg",
    name: "أمازون",
  },
  {
    id: 2,
    src: "/SallaIcon.svg",
    name: "سلة",
  },
];
export type FormData = {
  company: number;
  role: string;
};

function Step2() {
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      role: "",
      company: 0,
    },
  });

  const selectedCompany = watch("company");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-sm w-134 h-105 pt-8"
    >
      <div>
        <h1 className="text-[#111827] font-extrabold text-2xl text-center">
          الشركات المتاحة
        </h1>
        <p className="text-[#6B7280] text-center pt-3">
          يمكنك اضافة شركة اخرى اذا كنت تعمل لدى أكثر من شركة
        </p>
      </div>

      {/* Choose Company */}
      <section>
        <div className="pt-6 px-6 flex flex-col gap-4">
          {companies.map((item) => (
            <label
              key={item.id}
              className="flex items-center justify-between gap-4 pb-5 border-b-2 cursor-pointer"
            >
              {/* right side */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.src}
                  alt="company"
                  width={180}
                  height={60}
                  className="w-15 h-15"
                />

                <div className="flex flex-col text-right">
                  <h2>{item.name}</h2>
                  <p className="text-[#6B7280] text-sm">ممثل رئيسي</p>
                </div>
              </div>

              {/* radio */}
              <input
                type="radio"
                value={item.id}
                {...register("company", { required: true })}
                checked={selectedCompany == item.id}
                className="w-5 h-5 accent-[#119DA9]"
              />
            </label>
          ))}

          {/* Add new company */}
          <Link href="/addnewcompanies">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-15 h-15 rounded-full border-2 border-dashed border-[#68B7A5] flex items-center justify-center">
                <span className="text-[#68B7A5] text-xl font-bold">+</span>
              </div>

              <span className="text-[#68B7A5] font-medium">
                إضافة شركة جديدة
              </span>
            </div>
          </Link>
        </div>
      </section>


    </form>
  );
}

export default Step2;