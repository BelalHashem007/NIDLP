import React from 'react'
import Image from 'next/image'
import GovernanceIntro from './components/GovernanceIntro'
import DoctorCard from './components/DoctorCard'
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";

function CouncilGovernance() {
  return (
    <div id='council-government' className='relative w-full'>
      <MotionWrapper animation={fadeIn("left")}>
      <Image src="/icons/top.svg" alt='line' width={500} height={50} className='absolute left-0 top-0 '/>
      </MotionWrapper>

      <Image src="/icons/left.svg" alt='line' width={50} height={50} className='absolute left-0 top-120 md:block hidden'/>
      <Image src="/icons/right.svg" alt='line' width={50} height={50} className='absolute right-0 top-230 md:block hidden'/>

      <div className='pt-40 md:w-[80%] mx-auto'>
      
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between '>
          <MotionWrapper animation={fadeIn("right", 0.2)}>
          <GovernanceIntro />
          </MotionWrapper>
          <MotionWrapper animation={fadeIn("left", 0.4)}>
          <DoctorCard />
          </MotionWrapper>
        </div> 

        
      </div>

      <div className='mt-10 pb-10 w-full'>
        <div className='w-fit m-auto'>
          <MotionWrapper animation={fadeIn("down", 0.6)}>
          <Image src="/icons/frame1.svg" alt='frame' width={250} height={250} className='mb-5'/>
          </MotionWrapper>
          <div className='h-45' dir='ltr'>
            <MotionWrapper animation={fadeIn("down", 0.6)}>
            <Image src="/icons/frame2.svg" alt='frame' width={250} height={250}/>
            <div className='flex flex-col translate-x-50 translate-y-[-300px]'>
              <Image src="/icons/sideframe2.svg" alt='frame' width={250} height={250} className='translate-x-25 mb-5 lg:block hidden'/>
              <Image src="/icons/sideframe1.svg" alt='frame' width={250} height={250} className='lg:block hidden'/>
            </div>
            </MotionWrapper>
          </div>
            <MotionWrapper animation={fadeIn("down", 0.6)}>
            <Image src="/icons/frame3.svg" alt='frame' width={250} height={250} className='mb-5'/>
            </MotionWrapper>

            <MotionWrapper animation={fadeIn("down", 0.6)}>
            <Image src="/icons/frame4.svg" alt='frame' width={250} height={250} className='mb-5'/>
            </MotionWrapper>
        </div>
            <MotionWrapper animation={fadeIn("down", 0.6)}>

        <Image src="/icons/frame5.svg" alt='frame' width={1050} height={250} className='mb-5 m-auto'/>
            </MotionWrapper>

      </div>
    </div>
  )
}

export default CouncilGovernance


