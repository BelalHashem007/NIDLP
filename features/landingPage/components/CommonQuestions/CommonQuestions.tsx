import React from 'react'
import QuestionsList from './QuestionsList'

function CommonQuestions() {
  return (
    <div id='common-questions' className='px-10 lg:p-30 py-20'>
      <h1 className='text-center text-3xl font-bold mb-20'>الأسئلة الشائعة</h1>
      {/* قائمة الأسئلة */}
      <QuestionsList />
    </div>
  )
}

export default CommonQuestions
