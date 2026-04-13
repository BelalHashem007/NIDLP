import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

function CouncilMessage() {
  return (
    <div id='council-message' className='text-[rgb(229,231,235)] bg-[#19093f] h-full relative text-center pt-15 overflow-hidden'>
      <div className='pb-20 md:pb-25 px-6'>
        <Quote size={40} fill='#119DA9' className='text-[#119DA9] block mx-auto' />
        <h1 className='text-white text-2xl md:text-3xl font-bold mt-5'>رسالة المجلس</h1>
        <p className='text-lg md:text-xl leading-8 mt-5'>
          رفع جودة وكفاءة الخدمات اللوجستية ومعالجة التحديات في 
          <br className='hidden md:block' /> القطاع اللوجستي
        </p>
      </div>

      {/* Vectors: صغرنا الحجم في الموبايل وزودناه في الشاشات الأكبر */}
      <div className='absolute top-20 md:top-25 right-0 w-[50px] md:w-[100px]'>
        <Image src="/icons/vector3.svg" alt='vector' width={100} height={100} layout="responsive" />
      </div>
      <div className='absolute top-20 md:top-25 left-0 w-[50px] md:w-[100px]'>
        <Image src="/icons/vector2.svg" alt='vector' width={100} height={100} layout="responsive" />
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

      {/* Banners: أضفت flex-wrap عشان اللوجوهات تنزل تحت بعض في الموبايل بدل ما تخرج برا الشاشة */}
      <div className='py-5 flex justify-center items-center gap-4 md:gap-8 bg-white px-4'>
        {[
          { src: "/assets/panner10.jpg", w: 120, mw: 200 },
          { src: "/assets/panner1.png", w: 100, mw: 150 },
          { src: "/assets/panner2.jpg", w: 100, mw: 150 },
          { src: "/assets/panner3.jpg", w: 70, mw: 100 },
          { src: "/assets/panner4.jpg", w: 100, mw: 150 },
          { src: "/assets/panner5.jpg", w: 100, mw: 150 },
          { src: "/assets/panner6.jpg", w: 70, mw: 100 },
          { src: "/assets/panner7.jpg", w: 100, mw: 150 },
          { src: "/assets/panner8.jpg", w: 40, mw: 50 },
          { src: "/assets/panner9.jpg", w: 110, mw: 180 },
        ].map((img, index) => (
          <Image 
            key={index}
            src={img.src} 
            alt='partner' 
            width={img.mw} 
            height={img.mw} 
            className={`h-auto object-contain w-[${img.w}px] md:w-[${img.mw}px]`}
            style={{ width: 'auto', maxHeight: '60px' }} // لضمان تناسق الارتفاع في الموبايل
          />
        ))}
      </div>
    </div>
  );
}

export default CouncilMessage;