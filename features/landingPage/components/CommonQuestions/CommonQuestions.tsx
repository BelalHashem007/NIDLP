import React from 'react'

const questions = [
  {
    question: 'هل يمكن لاي احد التسجيل في البرناج؟',
  },
   {
    question: 'كيف يعزز المجلس التعاون بين القطاعين العام والخاص؟',
  },
   {    question: ' هل يمكن لاي احد التسجيل في البرناج؟',
   },
   {
    question: 'كيف يمكن للشركات والمؤسسات الاستفادة من المجلس؟',
   }
]    


function CommonQuestions() {
  return (
    <div id='common-questions' className='px-10 lg:p-30 py-20'>
      <h1 className='text-center text-3xl font-bold mb-20'>الأسئلة الشائعة</h1>
            {questions.map((item, index) => (
                <div key={index} className='flex gap-10 items-center border-b-2 p-5 border-gray-200 hover:translate-x-[-20px] transition-transform duration-200'>
                    <span className='text-xl font-bold px-2 text-blue-600 bg-blue-100'>+</span>
                    <p className='text-lg font-bold'>{item.question}</p>
                </div>
            ))}
    </div>
  )
}

export default CommonQuestions
