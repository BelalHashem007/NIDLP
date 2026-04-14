import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import PartnersList from './PartnersList';
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";

function CouncilMessage() {
  return (
    <div id='council-message' className='text-[rgb(229,231,235)] bg-[#19093f] h-full relative text-center pt-15 overflow-hidden'>
      <MotionWrapper animation={fadeIn("down")}>
        <div className='pb-20 md:pb-25 px-6'>
          <Quote size={40} fill='#119DA9' className='text-[#119DA9] block mx-auto' />
          <h1 className='text-white text-2xl md:text-3xl font-bold mt-5'>رسالة المجلس</h1>
          <p className='text-lg md:text-xl leading-8 mt-5'>
            رفع جودة وكفاءة الخدمات اللوجستية ومعالجة التحديات في 
            <br className='hidden md:block' /> القطاع اللوجستي
          </p>
        </div>
      </MotionWrapper>
      

      {/* Vectors: صغرنا الحجم في الموبايل وزودناه في الشاشات الأكبر */}
      <div className='absolute top-20 md:top-25 right-0 w-[50px] md:w-[100px]'>
        <MotionWrapper animation={fadeIn("right", 0.2)}>
          <Image src="/icons/vector3.svg" alt='vector' width={100} height={100} layout="responsive" />
        </MotionWrapper>
      </div>

      <div className='absolute top-20 md:top-25 left-0 w-[50px] md:w-[100px]'>
        <MotionWrapper animation={fadeIn("left", 0.2)}>
          <Image src="/icons/vector2.svg" alt='vector' width={100} height={100} layout="responsive" />
        </MotionWrapper>
      </div>


      {/* Council Image: في الموبايل حددنا ارتفاع ثابت عشان تظهر كبيرة وتتقص من الجوانب */}
      <div className="w-full h-[300px] md:h-auto overflow-hidden">
        <Image
          src="/assets/council.jpg"
          alt="council"
          width={1920}
          height={600}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Partners List */}
        <PartnersList />
    </div>
  );
}

export default CouncilMessage;