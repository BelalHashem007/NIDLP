"use client";

import { CameraIcon } from "lucide-react";
import Image from "next/image";

function Step4() {
  return (
    <main className="w-134 h-146 ">
      <div className=" flex flex-col gap-3 items-center pt-8 border-b-3 border-gray-200 pb-6 mx-6">
        <h1 className="text-2xl font-bold text-gray-900 ">المعلومات الشخصية</h1>

        <div>
          {" "}
          <p className="text-[#6B7280]">
            برجاء مراجعة المعلومات التالية المسترجعة من نفاذ <br />{" "}
          </p>
          <p className="text-center text-[#6B7280] ">
            و اضافة رقم الجوال الخاص بك
          </p>
        </div>
      </div>

      {/* Avatar... */}
      <section>
        <div className="flex flex-col gap-6 justify-center items-center">
          <Image
            src="/Avatar.svg"
            width={30}
            height={30}
            alt="avatar"
            className="w-30 h-30 pt-8"
          />

          <button className="text-[#119DA9] w-59 h-11 border-2 border-[#119DA9] flex gap-2 rounded-sm text-sm text-center p-2">
            <CameraIcon className="w-5 h-5" /> تحميل صورة الملف الشخصي
          </button>
        </div>
      </section>
      <div>
        <form action="" className="py-10 px-4">
          <label htmlFor="call"></label>
          <input type="text" name="caller" id="call" />
        </form>
      </div>
    </main>
  );
}

export default Step4;
