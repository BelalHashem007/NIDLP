import React from "react";
import Image from "next/image";

function CouncilVision() {
  return (
    <div
      id="council-vision"
      // في الموبايل h-[100dvh] لتغطية الشاشة، وفي الكبير h-auto
      className="text-[#E5E7EB] bg-[#19093f] w-full relative min-h-[100dvh] md:min-h-0 md:h-auto flex flex-col md:flex-row-reverse items-center justify-center md:justify-start overflow-hidden px-6 md:px-30 py-10 md:py-15"
      dir="ltr"
    >
      {/* حاوية الصورة */}
      <div className="absolute inset-0 md:relative md:inset-auto w-full h-full md:w-[520px] md:h-[720px] z-0 md:z-10">
        <Image
          src="/assets/tower2.jpg"
          alt="vision"
          fill
          className="object-cover object-top md:rounded-lg md:static"
          priority
        />
        
        {/* الـ Overlay - غامق في الموبايل وخفيف في الديسكتوب */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#19093f] via-[#19093f]/70 md:via-[#3A207B]/40 to-transparent md:rounded-lg"></div>
      </div>

      {/* المحتوى النصي */}
      {/* justify-center يضمن توسيط الكلام في الشاشة الصغيرة */}
      <div 
        className="relative z-20 w-full md:w-auto flex flex-col justify-center h-full mt-20 md:mt-0 text-right" 
        dir="rtl"
      >
        <div className="text-xl md:text-2xl">
          <h1 className="md:mr-5 mb-6 md:mb-10 text-3xl text-white font-bold text-right">
            رؤية المجلس
          </h1>
          <div className="bg-[#3A207B] md:bg-[#3A207B]/0 md:bg-gradient-to-l from-[#3A207B] to-[#190a3b0c] md:-mr-40 rounded-lg py-8 px-6 md:py-10 md:px-15 backdrop-blur-md md:backdrop-blur-none shadow-2xl">
            أن يكون المجلس منصة فعالة لتعزيز التكامل بين القطاعين العام والخاص{" "}
            <br className="hidden md:block" /> لتحقيق مستهدفات 
            <span className="text-blue-400"> رؤية السعودية 2030</span>
          </div>
        </div>

        <div className="text-xl md:text-2xl mt-10">
          <h1 className="md:mr-5 mb-6 md:mb-10 text-3xl text-white font-bold text-right">
            قيمنا
          </h1>
          <div className="bg-[#3A207B] md:bg-[#3A207B]/0 md:bg-gradient-to-l from-[#3A207B] to-[#190a3b4b] md:-mr-40 rounded-lg py-8 px-6 md:py-10 md:px-15 flex flex-wrap gap-6 justify-center md:justify-around ">
            <ValueItem icon="/icons/vector2.svg" text="التكامل" />
            <ValueItem icon="/icons/vector2.svg" text="الشفافية" />
            <ValueItem icon="/icons/vector2.svg" text="المبادرة" />
            <ValueItem icon="/icons/vector1.svg" text="التمكين" />
          </div>
        </div>
      </div>

      {/* الدائرة الديكورية */}
      <Image
        src="/icons/half circle1.svg"
        alt="circle"
        width={300}
        height={300}
        className="hidden xl:block absolute top-0 left-0 z-80"
      />
    </div>
  );
}

const ValueItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex gap-3 md:gap-5 items-center w-[45%] md:w-auto justify-center md:justify-start">
    <Image src={icon} alt={text} width={20} height={20} />
    <p>{text}</p>
  </div>
);

export default CouncilVision;