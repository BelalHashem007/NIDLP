import React from 'react'
import Image from 'next/image'
import { Leaf, Circle } from 'lucide-react'

function CouncilGovernment() {
  return (
    <div id='council-government' className='relative w-full'>

      <Image src="/icons/top.svg" alt='line' width={500} height={50} className='absolute left-0 top-0 '/>
      <Image src="/icons/left.svg" alt='line' width={50} height={50} className='absolute left-0 top-120 md:block hidden'/>
      <Image src="/icons/right.svg" alt='line' width={50} height={50} className='absolute right-0 top-230 md:block hidden'/>

      <div className='pt-40 md:w-[80%] mx-auto'>
      
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between '>
          <div className='basis-[100%] text-gray-600  md:bg-[#F4F7FC] p-4  rounded-bl-3xl'>
            <h1 className='mb-10 text-3xl font-bold text-black'>حوكمة المجلس</h1>
            <p className='text-gray-800 mb-10'>تأسس مجلس الشراكة اللوجستي مع القطاع الخاص منبثقًا من لجنة الخدمات   اللوجستية التابعة لبرنامج تطوير الصناعة الوطنية والخدمات اللوجستية، , يتم تعيين رئيس المجلس من قبل رئيس لجنة الخدمات اللوجستية.</p>
            <div className='flex flex-col gap-5 border-r-4 border-gray-400 pr-10'>
                <p>مدة الدورة الواحدة للمجلس 3 سنوات، و يتكون أعضاء المجلس من: رئيس المجلس  - أمين المجلس  - ممثلي القطاعين العام والخاص</p>
                <p>أعضاء المجلس من القطاع الخاص: 
                اللجنة التنفيذية للجنة الوطنية اللوجستية في اتحاد الغرف السعودية
                متخصصين من القطاع الخاص في مجالات العمل اللوجستي</p>
            </div>
          </div>
          
          <div className='left-30  z-10'>
            <Image src="/assets/doctor1.jpg" alt='doctor' width={360} height={360}/>
            <Image src="/icons/doctor info.svg" alt='doctor' width={360} height={360}/>
          </div>
        </div> 

        
      </div>

      <div className='mt-10 pb-10 w-full'>
        <div className='w-fit m-auto'>
          <Image src="/icons/frame1.svg" alt='frame' width={250} height={250} className='mb-5'/>
          <div className='h-45' dir='ltr'>
            <Image src="/icons/frame2.svg" alt='frame' width={250} height={250}/>
            <div className='flex flex-col translate-x-50 translate-y-[-300px]'>
              <Image src="/icons/sideframe2.svg" alt='frame' width={250} height={250} className='translate-x-25 mb-5 lg:block hidden'/>
              <Image src="/icons/sideframe1.svg" alt='frame' width={250} height={250} className='lg:block hidden'/>
            </div>
          </div>
          <Image src="/icons/frame3.svg" alt='frame' width={250} height={250} className='mb-5'/>
          <Image src="/icons/frame4.svg" alt='frame' width={250} height={250} className='mb-5'/>
        </div>
        <Image src="/icons/frame5.svg" alt='frame' width={1050} height={250} className='mb-5 m-auto'/>
      </div>
    </div>
  )
}

export default CouncilGovernment


