import React from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react';

const footerlinks = [
  { href: '#about-council', label: 'عن المجلس' },
  { href: '#council-goals', label: 'أهداف المجلس' },
  { href: '#council-government', label: 'حوكمة المجلس' },
  { href: '#council-news', label: 'أخبار المجلس' },
  { href: '#common-questions', label: 'الأسئلة الشائعة' },
]

function Footer() {
  return (
   <div className='pt-5 pb-20 lg:pl-20 px-10 lg:px-0 flex flex-col lg:flex-row bg-[#19043A] text-white'>
    
    {/* القسم الأول */}
    <div className='flex-1 text-center lg:text-center pr-10 lg:pr-20 pt-10 md:pt-16 lg:pt-20'>
        <div className='border-b-2 border-gray-700 mb-5 pb-5'>
            <Image 
              src='/icons/footerLogo.svg' 
              alt='footer logo' 
              width={300} 
              height={100} 
              className='mx-auto mb-10'
            />
            <p className='text-blue-600 underline text-sm md:text-base'>
              الشروط والأحكام | سياسة الخصوصية
            </p>
        </div>

        <p className='text-gray-400 px-2 md:px-5 text-sm md:text-base'>
          جميع الحقوق محفوظة | © 2024 مجلس الشراكة اللوجستي مع القطاع الخاص
        </p>
    </div>

    {/* القسم التاني */}
    <div className='flex-1 flex pt-10 md:pt-16 lg:pt-30 pb-10 items-start lg:items-end 
                      lg:border-r-2 lg:border-l-2 border-gray-700'>
        <div className='flex flex-col w-full'>
            <p className='text-blue-600 w-full font-bold text-xl md:text-2xl p-4 md:p-5 border-b-2 border-gray-700'>
              القائمة
            </p>

            {footerlinks.map((link) => ( 
                <a 
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-400 w-full block transition duration-300 text-sm md:text-base p-4 md:p-5 border-b-2 border-gray-700"
                >
                    {link.label}
                </a>
            ))}
        </div>
    </div>

    {/* القسم الثالث */}
    <div className='flex-1 mt-10 md:mt-16 lg:mt-50'>
        <div className='mb-10'>
            <h2 className='text-xl md:text-2xl text-blue-600 p-4 md:p-5'>
              تواصل معنا
            </h2>

            <p className='flex items-center gap-3 md:gap-5 p-4 md:p-5 border-2 border-gray-700 text-sm md:text-base'>
                <Mail size={18} className='text-blue-600'/>
                <span>nidlp@gov.sa</span>
            </p>

            <div className='flex items-center gap-4 md:gap-5 p-4 md:p-5'>
                <Image src='/icons/twitter.svg' alt='twitter' width={25} height={25} className='hover:scale-110 transition duration-300 cursor-pointer'/>
                <Image src='/icons/linkedin.svg' alt='linkedin' width={25} height={25} className='hover:scale-110 transition duration-300 cursor-pointer'/>
            </div>
        </div>

        <Image 
          src='/icons/footerLogo2.svg' 
          alt='footer logo' 
          width={200} 
          height={30} 
          className='pr-0 lg:pr-5 lg:block hidden' 
        />
    </div>

</div>
    
  )
}

export default Footer
