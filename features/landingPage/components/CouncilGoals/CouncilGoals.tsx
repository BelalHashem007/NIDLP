import React from 'react'
import { Lightbulb, Handshake, Target, Settings, Users } from 'lucide-react';
import Image from 'next/image';

function CouncilGoals() {
  const items = [
    { 
      icon: <Lightbulb size={24} />, 
      text: "ابداء المرئيات والمقترحات حول الاستراتيجيات والسياسات ذات العلاقة بالقطاع اللوجستي", 
      // التعديل: نستخدم md للوضعية الدائرية، وفي الموبايل الوضع افتراضي
      pos: "md:top-0 md:left-1/2 md:-translate-x-1/2" 
    },
    { 
      icon: <Users size={24} />, 
      text: "تمكين التعاون بين القطاعين العام والخاص لتنفيذ المبادرات الطموحة لتحقيق رؤية 2030", 
      pos: "md:top-[40%] md:right-0 md:translate-x-[35%]" 
    },
    { 
      icon: <Settings size={24} />, 
      text: "حصر ومعالجة التحديات التي تواجه القطاع الخاص بالتعاون مع الجهات التنفيذية", 
      pos: "md:bottom-5 md:right-[15%]" 
    },
    { 
      icon: <Target size={24} />, 
      text: "المساهمة في رفع تصنيف المملكة في مؤشر أداء الخدمات اللوجستية", 
      pos: "md:bottom-10 md:left-[15%]" 
    },
    { 
      icon: <Handshake size={24} />, 
      text: "المساهمة في تمكين ودعم الفرص الإستثمارية من خلال معالجة التحديات اللوجستية", 
      pos: "md:top-[40%] md:left-0 md:-translate-x-[35%]" 
    },
  ];

  return (
    <div id="council-goals" className='min-h-full pt-20 md:pt-30 pb-20 bg-[#19093f] text-[#E5E7EB] text-center relative overflow-hidden'>
      <h1 className='text-3xl text-white font-bold pb-20'>اهداف المجلس</h1>

      {/* الخطوط الخلفية تظهر فقط في الشاشات الكبيرة */}
      <div className='hidden lg:block'>
        <Image src="/icons/BigVector.svg" alt='logo' width={800} height={800} className='absolute z-0 -top-17 left-0'/>
      </div>
      
      {/* Container الأساسي */}
      {/* في الموبايل: flex-col لترتيبهم تحت بعض. في الديسكتوب: h-[600px] لتوزيعهم دائرياً */}
      <div className="relative m-auto max-w-4xl h-auto md:h-[600px] flex flex-col md:block items-center gap-12 md:gap-0 px-6">
        
        {/* اللوجو المركزي يظهر فقط في الديسكتوب */}
        <div className="hidden md:flex absolute inset-0 m-auto h-40 items-center justify-center text-white text-center z-20">
            <Image src="/assets/logo8.png" alt='logo' width={400} height={400} />
        </div>

        {items.map((item, index) => (
          <div 
            key={index} 
            // التعديل هنا: relative في الموبايل و absolute في الديسكتوب md:
            className={`relative md:absolute ${item.pos} flex flex-col items-center w-full md:w-64 text-center group z-10`}
          > 
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform group-hover:scale-110 shrink-0">
              <span className="text-[#1a0b3b]">{item.icon}</span>
            </div>
            
            <p className="text-white text-sm md:text-sm leading-relaxed font-medium px-2 max-w-[280px] md:max-w-none">
              {item.text}
            </p>
          </div>
        ))}      
      </div>
    </div>
  )
}

export default CouncilGoals;