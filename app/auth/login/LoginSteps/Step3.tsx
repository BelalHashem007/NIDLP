"use client";

import { pesrsonalData } from "@/data/loginData/LoginData";



function Step3() {
  return (
    <main className="w-134 h-146 ">
      <div className=" flex flex-col gap-3 items-center pt-8 border-b-3 border-gray-200 pb-6 mx-6">
        <h1 className="text-2xl font-bold text-gray-900 ">المعلومات الشخصية</h1>

        <p className="text-[#6B7280]">
          برجاء مراجعة المعلومات التالية المسترجعة من نفاذ
        </p>
      </div>
          <section className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm pt-6 pb-10 px-6" >
            {pesrsonalData.map((item) => (
              <div key={item.name}>
                <p className="text-[#6B7280] pb-2"> {item.name}</p>
                <p className="text-[15px] text-black  leading-5 font-medium text-right">
                  {item.Value}
                </p>
              </div>
            ))}
          </section>

    </main>
  );
}

export default Step3;
