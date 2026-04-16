import { FileOutput } from "lucide-react";

export function ExportDataButton() {
  return (
    <div className="absolute xl:top-28 lg:left-8 top-20 min-[700px]:left-0 -left-80">
      <button className="hover:cursor-pointer flex gap-2 font-bold rounded-[8px] border border-[#119DA9] py-3 px-4 text-[#119DA9] transition-all duration-500 hover:bg-[#119DA9] hover:text-[white]">
        <FileOutput />
        تصدير البيانات
      </button>
    </div>
  );
}
