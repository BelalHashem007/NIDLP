import Image from "next/image";
import { HERO_CONTENT } from "../hero.constants";


export default function HeroContent() {
  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      <h1 className="text-3xl md:text-5xl text-white mb-10 mt-32 leading-tight">
        {HERO_CONTENT.title}{" "}
        <span className="text-blue-400">{HERO_CONTENT.highlight}</span>{" "}
        {HERO_CONTENT.subtitle}
      </h1>

      <p className="text-base md:text-lg leading-relaxed">
        {HERO_CONTENT.description}
      </p>

      <button className="px-7 py-3 rounded-lg text-white font-semibold mt-10 mb-20 bg-gradient-to-r from-[#66B4A5] to-[#5291A9]">
        {HERO_CONTENT.cta}
      </button>

      <a href="#council-vision" className="block text-center w-full">
        <Image
          src="/icons/Scroll-down.svg"
          alt="scroll"
          width={70}
          height={50}
          className="mx-auto animate-bounce"
        />
        <p className="-mt-6 pb-5">التمرير للأسفل</p>
      </a>
    </div>
  );
}