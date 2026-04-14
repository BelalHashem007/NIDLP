import Image from "next/image";

export default function FooterBrand() {
  return (
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
  );
}