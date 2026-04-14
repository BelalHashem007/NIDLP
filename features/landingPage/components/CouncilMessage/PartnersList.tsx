import Image from "next/image";
import { PARTNERS } from "./councilMessage.constants";

export default function PartnersList() {
  return (
      <div className='py-10 flex justify-around items-center gap-4 md:gap-8 bg-white px-4'>
        {PARTNERS.map((img, index) => (
          <Image 
            key={index}
            src={img.src} 
            alt='panner' 
            width={img.mw} 
            height={img.mw} 
          />
        ))}
      </div>
  );
}