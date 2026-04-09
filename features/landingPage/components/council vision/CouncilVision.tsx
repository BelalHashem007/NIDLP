import React from "react";
import Image from "next/image";

function CouncilVision() {
  return (
    <div
      id="council vision"
      className="text-[#E5E7EB] bg-[#19093f] h-full w-full relative px-30 py-15 flex gap-10 items-center border-2 border-gray-800"
    >
      {/* Container للصورة عشان نتحكم في الطبقات اللي فوقها */}
      <div className="relative h-fit w-fit">
        <Image
          src="/assets/tower2.jpg"
          alt="vision"
          width={520}
          height={520}
          className="rounded-lg block"
        />

        {/* الطبقة الشفافة (Gradient Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b0c42] via-[#3A207B]/40 to-transparent rounded-lg"></div>
      </div>

      <div>
        <div className="text-2xl">
          <h1 className="mb-10 text-3xl text-white font-bold h-fit z-10">
            رؤية المجلس
          </h1>
          <div className=" bg-gradient-to-l from-[#3A207B] to-[#190a3b4b] -mr-40 rounded-lg z-20 relative py-10 px-15">
            أن يكون المجلس منصة فعالة لتعزيز التكامل بين القطاعين العام والخاص{" "}
            <br /> لتحقيق مستهدفات 
            <span className="text-blue-400"> رؤية السعودية 2030</span>
          </div>
        </div>

        <div className="text-2xl mt-10">
          <h1 className="mb-10 text-3xl text-white font-bold h-fit z-10">
            قيمنا
          </h1>
          <div className=" bg-gradient-to-l from-[#3A207B] to-[#190a3b4b] -mr-40 rounded-lg z-20 relative py-10 px-15 flex justify-around">
            <div className="flex gap-5 items-center">
              <Image
                src="/icons/vector2.svg"
                alt="vector1"
                width={20}
                height={20}
              />
              <p>التكامل</p>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                src="/icons/vector2.svg"
                alt="vector1"
                width={20}
                height={20}
              />
              <p>الشفافية</p>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                src="/icons/vector2.svg"
                alt="vector1"
                width={20}
                height={20}
              />
              <p>المبادرة</p>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                src="/icons/vector1.svg"
                alt="vector2"
                width={20}
                height={20}
              />
              <p>التمكين</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/assets/half circle2.png"
        alt="circle"
        width={300}
        height={300}
        className="absolute top-0 left-0"
      />
    </div>
  );
}

export default CouncilVision;
