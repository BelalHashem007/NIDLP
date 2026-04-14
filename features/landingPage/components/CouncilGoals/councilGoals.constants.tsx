import { dir } from 'console';
import { Lightbulb, Handshake, Target, Settings, Users } from 'lucide-react'
import React from 'react';


type Props = {
  icon: React.ReactNode;
  text: string;
  pos: string; // موقع العنصر في الديسكتوب (مثلاً: "top-0 left-0")
  dir: "left" | "right" | "up" | "down"; // اتجاه الحركة عند الظهور
}


export const items : Props[] = [
    { 
      icon: <Lightbulb size={24} />, 
      text: "ابداء المرئيات والمقترحات حول الاستراتيجيات والسياسات ذات العلاقة بالقطاع اللوجستي", 
      // التعديل: نستخدم md للوضعية الدائرية، وفي الموبايل الوضع افتراضي
      pos: "md:top-0 md:left-1/2 md:-translate-x-1/2",
      dir: "down" 
    },
    { 
      icon: <Users size={24} />, 
      text: "تمكين التعاون بين القطاعين العام والخاص لتنفيذ المبادرات الطموحة لتحقيق رؤية 2030", 
      pos: "md:top-[40%] md:right-0 md:translate-x-[35%]",
      dir: "right" 

    },
    { 
      icon: <Settings size={24} />, 
      text: "حصر ومعالجة التحديات التي تواجه القطاع الخاص بالتعاون مع الجهات التنفيذية", 
      pos: "md:bottom-10 md:right-[15%]",
      dir: "up" 
    },
    { 
      icon: <Target size={24} />, 
      text: "المساهمة في رفع تصنيف المملكة في مؤشر أداء الخدمات اللوجستية", 
      pos: "md:bottom-10 md:left-[15%]",
      dir: "up" 
    },
    { 
      icon: <Handshake size={24} />, 
      text: "المساهمة في تمكين ودعم الفرص الإستثمارية من خلال معالجة التحديات اللوجستية", 
      pos: "md:top-[40%] md:left-0 md:-translate-x-[35%]",
      dir: "left" 
    },
  ];