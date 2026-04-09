import React from 'react'
import { Quote } from 'lucide-react';
import Image from 'next/image';

function CouncilMessage() {
  return (
    <div id='council message' className='text-[rgb(229,231,235)] bg-[#19093f] h-full relative text-center pt-15 '>
        <div className='pb-25'>
            <Quote size={40} fill='#119DA9' className='text-[#119DA9] block mx-auto'/>
            <h1 className='text-white text-3xl font-bold mt-5'>رسالة المجلس</h1>
            <p className='text-xl leading-8 mt-5'>رفع جودة وكفاءة الخدمات اللوجستية ومعالجة التحديات في <br /> القطاع اللوجستي</p>
        </div>
        <Image src="/icons/vector3.svg" alt='vector' width={100} height={100} className='absolute top-25 right-0'/>
        <Image src="/icons/vector2.svg" alt='vector' width={100} height={100} className='absolute top-25 left-0'/>
        <Image
          src="/assets/council.jpg"
          alt="council"
          width={1920}
          height={600}
          className="w-full object-cover"
        />
        <div className='py-5 flex justify-center items-center gap-8 bg-white'>
          <Image src="/assets/panner10.jpg" alt='vector' width={200} height={200} className=''/>
          <Image src="/assets/panner1.png" alt='vector' width={150} height={150} className=''/>
          <Image src="/assets/panner2.jpg" alt='vector' width={150} height={150} className=''/>
          <Image src="/assets/panner3.jpg" alt='vector' width={100} height={100} className=''/>
          <Image src="/assets/panner4.jpg" alt='vector' width={150} height={150} className=''/>
          <Image src="/assets/panner5.jpg" alt='vector' width={150} height={150} className=''/>
          <Image src="/assets/panner6.jpg" alt='vector' width={100} height={100} className=''/>
          <Image src="/assets/panner7.jpg" alt='vector' width={150} height={150} className=''/>
          <Image src="/assets/panner8.jpg" alt='vector' width={50} height={50} className=''/>
          <Image src="/assets/panner9.jpg" alt='vector' width={180} height={180} className=''/>
        </div>

    </div>
  )
}

export default CouncilMessage
