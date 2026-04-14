import { Mail } from "lucide-react";
import Image from "next/image";

export default function FooterContact() {
  return (
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
  );
}