import React from 'react'
import Image from 'next/image';
import GoalsList from './GoalsList';
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";

function CouncilGoals() {

  return (
    <section id="council-goals" className='min-h-full pt-20 md:pt-30 pb-20 bg-[#19093f] text-[#E5E7EB] text-center relative overflow-hidden'>
        <h1 className='text-3xl text-white font-bold pb-20'>اهداف المجلس</h1>


      {/* الخطوط الخلفية تظهر فقط في الشاشات الكبيرة */}
      <div className='hidden lg:block absolute z-0 -top-17 left-0'>
        <MotionWrapper animation={fadeIn("down", 0.6)}>     
        <Image src="/icons/BigVector.svg" alt='logo' width={800} height={800} className=''/>
        </MotionWrapper>

      </div>
      
      {/* Container الأساسي */}
      {/* في الموبايل: flex-col لترتيبهم تحت بعض. في الديسكتوب: h-[600px] لتوزيعهم دائرياً */}
      <div className="relative m-auto max-w-4xl h-auto md:h-150 flex flex-col md:block items-center gap-12 md:gap-0 px-6">
        
        {/* اللوجو المركزي يظهر فقط في الديسكتوب */}
        <div className="hidden md:flex absolute inset-0 m-auto h-40 items-center justify-center text-white text-center z-20">    
            <Image src="/icons/logo.svg" alt='logo' width={400} height={400} />
        </div>
        

        {/* قائمة الأهداف */}
        <GoalsList /> 
      </div>
    </section>
  )
}

export default CouncilGoals;