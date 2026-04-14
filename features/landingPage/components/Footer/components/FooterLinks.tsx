import {FOOTER_LINKS} from "../footer.constants";


export default function FooterLinks() {
  return (
    <div className='flex-1 flex pt-10 md:pt-16 lg:pt-30 pb-10 items-start lg:items-end 
                      lg:border-r-2 lg:border-l-2 border-gray-700'>
        <div className='flex flex-col w-full'>
            <p className='text-blue-600 w-full font-bold text-xl md:text-2xl p-4 md:p-5 border-b-2 border-gray-700'>
              القائمة
            </p>

            {FOOTER_LINKS.map((link) => ( 
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
  );
}