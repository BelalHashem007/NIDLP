import { VISION_CONTENT } from "../councilVision.constants";

export default function VisionBlock() {
  return (
    <div>
      <h2 className="md:mr-5 mb-6 md:mb-10 text-3xl text-white font-bold text-right">
        {VISION_CONTENT.title}
      </h2>

      <div className="bg-[#3A207B] md:bg-[#3A207B]/0 md:bg-gradient-to-l from-[#3A207B] to-[#190a3b0c] md:-mr-40 rounded-lg py-8 px-6 md:py-10 md:px-15 backdrop-blur-md md:backdrop-blur-none shadow-2xl">
        {VISION_CONTENT.description}{" "}
        <span className="text-blue-400">
          {VISION_CONTENT.highlight}
        </span>
      </div>
    </div>
  );
}