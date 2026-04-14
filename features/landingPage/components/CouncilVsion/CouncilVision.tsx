import React from "react";
import Image from "next/image";
import ValuesBlock from "./components/ValuesBlock";
import VisionBlock from "./components/VisionBlock";
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";

function CouncilVision() {
  return (
    <section
      id="council-vision"
      // في الموبايل h-[100dvh] لتغطية الشاشة، وفي الكبير h-auto
      className="text-[#E5E7EB] bg-[#19093f] w-full relative min-h-[100dvh] md:min-h-0 md:h-auto flex flex-col md:flex-row-reverse items-center justify-center md:justify-start overflow-hidden px-6 md:px-30 py-10 md:py-15"
      dir="ltr"
    >
      {/* حاوية الصورة */}
      <MotionWrapper animation={fadeIn("right")}>
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
      </MotionWrapper>
      

      {/* المحتوى النصي */}
        <div 
          className="relative z-20 w-full md:w-auto flex flex-col justify-center h-full mt-20 md:mt-0 text-right" 
          dir="rtl"
        >
        <MotionWrapper animation={fadeIn("left", 0.2)}>
          <VisionBlock />
          <ValuesBlock />
        </MotionWrapper>
        </div>


      {/* الدائرة الديكورية */}
      <div className="hidden xl:block absolute top-0 left-0 z-80">
        <MotionWrapper animation={fadeIn("down",0.4)}>
        <Image
          src="/icons/half circle1.svg"
          alt="circle"
          width={300}
          height={300}
        />
        </MotionWrapper>
      </div>
      
    </section>
  );
}

export default CouncilVision;