import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='py-5 flex items-center justify-around'>
      <Image src="/assets/logo.jpg" alt="logo" width={180} height={50} />

      <div className='flex gap-5 items-center border-b-2 border-gray-700 px-7 py-5 '>
        <a className='hover:text-blue-400 transition duration-300' href="#about council">عن المجلس</a>
        <a className='hover:text-blue-400 transition duration-300' href="#council goals">أهداف المجلس</a>
        <a className='hover:text-blue-400 transition duration-300' href="#council government">حوكمة المجلس</a>
        <a className='hover:text-blue-400 transition duration-300' href="#council priorities">أولويات المجلس</a>
        <a className='hover:text-blue-400 transition duration-300' href="#council news">أخبار المجلس</a>
        <a className='hover:text-blue-400 transition duration-300' href="#common questions">الأسئلة الشائعة</a>
      </div>

      <div className='flex gap-5'>
        <button className='cursor-pointer hover:text-blue-400 transition duration-300'>En</button>
        <button className='cursor-pointer bg-transparent border-2 border-[#E5E7EB] rounded-lg px-7 py-2'>تسجيل الدخول</button>
      </div>
    </div>
  )
}

export default Header
