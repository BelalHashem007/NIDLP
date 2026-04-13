"use client";
import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useState } from "react";
const news = [
  {
    id: 1,
    img: "/assets/news1.png",
    title: "عقد مجلس الشراكة اللوجستي، اجتماعه الـ 23",
    description:
      "برئاسة معالي نائب وزير النقل والخدمات اللوجستية د. رميح الرميح، وبحضور معالي رئيس جامعة جدة د. عدنان الحميدان، عقد مجلس الشراكة اللوجستي، اجتماعه الـ 23، في مقر الجامعة، بمشاركة ممثلي القطاعين العام والخاص، لمناقشة عدد من المواضيع المتعلقة بالقطاع اللوجستي.",
    date: "15 ابريل 2026",
  },
  {
    id: 2,
    img: "/assets/news2.png",
    title: "حفل افتتاح هاكثون تطبيقات الثورة الصناعية الرابعة",
    description:
      "جانب من مشاركة الرئيس التنفيذي لبرنامج #ندلب في هاكثون تطبيقات الثورة الصناعية الرابعة إحدى مبادرات برنامج تطوير الصناعة الوطنية والخدمات اللوجستية بالتعاون مع وزارة الاتصالات وتقنية المعلومات لتطوير حلول تقنية تسهم في نجاح وتنمية قطاعات البرنامج.",
    date: "15 ابريل 2026",
  },
  {
    id: 3,
    img: "/assets/news3.png",
    title: "برنامج ألف ميل",
    description:
      "يسعى برنامج #ندلب عبر مبادرة ألف ميل إلى تشجيع ريادة الأعمال بقطاعي الصناعة والخدمات اللوجستية؛ لخلق قصص نجاح ملهمة تحقق مستهدفات #رؤية_السعودية_2030 في تحويل المملكة إلى قوة صناعية رائدة ومنصة لوجستية عالمية.",
    date: "15 ابريل 2026",
  },
  {
    id: 4,
    img: "/assets/news1.png",
    title: "عقد مجلس الشراكة اللوجستي، اجتماعه الـ 23",
    description:
      "برئاسة معالي نائب وزير النقل والخدمات اللوجستية د. رميح الرميح، وبحضور معالي رئيس جامعة جدة د. عدنان الحميدان، عقد مجلس الشراكة اللوجستي، اجتماعه الـ 23، في مقر الجامعة، بمشاركة ممثلي القطاعين العام والخاص، لمناقشة عدد من المواضيع المتعلقة بالقطاع اللوجستي.",
    date: "15 ابريل 2026",
  },
  {
    id: 5,
    img: "/assets/news2.png",
    title: "عقد مجلس الشراكة اللوجستي، اجتماعه الـ 23",
    description:
      "برئاسة معالي نائب وزير النقل والخدمات اللوجستية د. رميح الرميح، وبحضور معالي رئيس جامعة جدة د. عدنان الحميدان، عقد مجلس الشراكة اللوجستي، اجتماعه الـ 23، في مقر الجامعة، بمشاركة ممثلي القطاعين العام والخاص، لمناقشة عدد من المواضيع المتعلقة بالقطاع اللوجستي.",
    date: "15 ابريل 2026",
  },
];


function CouncilNews() {
  const [showAll, setShowAll] = useState(false);

  const visibleNews = showAll ? news : news.slice(0, 3);

  return (
    <div id="council-news" className="relative border-t-2 border-gray-300 min-h-[600px] py-30 px-5 lg:px-20 2xl:px-40 ">
      <h1 className="text-3xl font-bold mb-10 text-center">أخبار المجلس</h1>

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10 p-6">
        {visibleNews.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="relative w-full h-80 md:60 bg-gray-900">
              <img src={item.img} alt="..." className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col gap-2 p-4 flex-1">
              <span className="text-md text-blue-600 font-bold tracking-wide">أخبار</span>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">{item.title}</h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-10 line-clamp-3 ">{item.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={20} className="text-blue-600" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {news.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="block mx-auto text-blue-600 py-3 px-10 border-2 border-blue-600 rounded-xl cursor-pointer hover:text-white hover:bg-blue-600 transition duration-200 mt-10"
        >
          {showAll ? "عرض أقل" : "عرض جميع الاخبار"}
        </button>
      )}

      <Image src="/icons/top.svg" alt="news" width={500} height={300} className="absolute bottom-0 left-0" />
    </div>
  );
}

export default CouncilNews;
