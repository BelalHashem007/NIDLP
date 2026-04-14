import { VALUES } from "../councilVision.constants";
import ValueItem from "./ValueItem";

export default function ValuesBlock() {
  return (
    <div className="mt-10">
      <h2 className="md:mr-5 mb-6 md:mb-10 text-3xl text-white font-bold text-right">
        قيمنا
      </h2>

      <div className="bg-[#3A207B] md:bg-[#3A207B]/0 md:bg-gradient-to-l from-[#3A207B] to-[#190a3b4b] md:-mr-40 rounded-lg py-8 px-6 md:py-10 md:px-15 flex flex-wrap gap-6 justify-center md:justify-around">
        {VALUES.map((item) => (
          <ValueItem key={item.text} {...item} />
        ))}
      </div>
    </div>
  );
}