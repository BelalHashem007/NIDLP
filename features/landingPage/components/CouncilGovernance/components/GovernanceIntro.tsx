// import { GOVERNMENT_CONTENT } from "./councilGovernment.constants";
import { GOVERNMENT_CONTENT } from "../councilGovernance.constants";

export default function GovernanceIntro() {
  return (
    <div className="text-gray-600 bg-[#F4F7FC] p-6 py-10 basis-[100%]">
      <h2 className="mb-6 text-3xl font-bold text-black">
        {GOVERNMENT_CONTENT.title}
      </h2>

      <p className="text-gray-800 mb-6">
        {GOVERNMENT_CONTENT.description}
      </p>

      <div className="flex flex-col gap-4 border-r-4 border-gray-400 pr-6">
        {GOVERNMENT_CONTENT.points.map((point, i) => (
          <p key={i}>{point}</p>
        ))}
      </div>
    </div>
  );
}