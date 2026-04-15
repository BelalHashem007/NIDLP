import React from 'react'
import { questions } from './CommonQuestions.constants'

function QuestionsList() {
  return (
    <div>
      {questions.map((item) => (
                <div key={item.id} className='flex gap-10 items-center border-b-2 p-5 border-gray-200 hover:-translate-x-5 transition-transform duration-200'>
                    <span className='text-xl font-bold px-2 text-blue-600 bg-blue-100'>+</span>
                    <p className='text-lg font-bold'>{item.question}</p>
                </div>
        ))}
    </div>
  )
}

export default QuestionsList
