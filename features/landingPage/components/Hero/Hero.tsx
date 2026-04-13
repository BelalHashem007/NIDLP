import Header from "./header";
import Image from "next/image";

function Hero() {
  return (
    <div id="about-council" className="relative min-h-full w-full ">
      <Image
        src="/assets/bg.jpg"
        alt="background"
        fill
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#19043A] to-[#2E1866]/70"></div>

      <div className="relative z-10 text-[#E5E7EB]">
        <Header />

        <div className="w-[80%] md:w-[40%] m-auto text-center">
          <h1 className="text-[30px] md:text-[50px] text-white mb-10 mt-30">
            مجلس الشراكة{" "}
            <span className="text-[30px] md:text-[50px] text-blue-400">اللوجستي</span> مع
            <br /> القطاع الخاص
          </h1>
          <p>
             تأسس مجلس الشراكة اللوجستي مع القطاع الخاص في يناير 2020 م، منبثقًا
            من لجنة الخدمات اللوجستية التابعة لبرنامج تطوير الصناعة الوطنية
            والخدمات اللوجستية، بهدف تعزيز مشاركة القطاع الخاص وحل التحديات التي
            تواجهه وتزويد اللجنة بالمرئيات والمقترحات التي تسهم في رفع كفاءة
            القطاع اللوجستي
          </p>
          <button className="px-7 py-3 rounded-lg text-white font-semibold mt-10 mb-30 bg-gradient-to-r from-[#66B4A5] to-[#5291A9] ">
            رفع تحدي او مقترح جديد
          </button>
          <a
            href="#council-vision"
            className="block text-center cursor-pointer w-full "
          >
            <Image
              src="/icons/Scroll-down.svg"
              alt="arrow"
              width={70}
              height={50}
              className="mx-auto animate-bounce"
            />
            <p className="-mt-6 pb-5">التمرير للأسفل</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
