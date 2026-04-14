import React from 'react'
import { items } from './councilGoals.constants'
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";

function GoalsList() {
  return (
    <div>
      {items.map((item, index) => (
          <div 
            key={index} 
            // التعديل هنا: relative في الموبايل و absolute في الديسكتوب md:
            className={`relative md:absolute ${item.pos} flex flex-col items-center w-full md:w-64 text-center group z-10 mb-10 lg:mb-0`}
          > 
            <MotionWrapper animation={fadeIn(item.dir, 0.2)}>      
          
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform group-hover:scale-110 shrink-0">
              <span className="text-[#1a0b3b]">{item.icon}</span>
            </div>
            </MotionWrapper>
            
            
            <p className="text-white text-sm md:text-sm leading-relaxed font-medium px-2 max-w-[280px] md:max-w-none">
              {item.text}
            </p>
          </div>
        ))}
    </div>
  )
}

export default GoalsList
