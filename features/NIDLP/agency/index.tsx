import Link from "next/link";
import { AgencyTable } from "./components/AgencyTable";

export function AgencyView() {
  return (
    <div className="relative pt-14" dir="rtl">
      <Link
        href={"/nidlp/agency/add"}
        className="absolute top-0 left-0 py-3 px-4 rounded-lg text-white flex gap-2 cursor-pointer"
        style={{
          background:
            "linear-gradient(269.45deg, #66B4A5 -85.5%, #5291A9 17.09%, #634AAE 161.85%)",
        }}
      >
        <span>+</span>
        اضافة جهة حكومية
      </Link>
      <AgencyTable />
    </div>
  );
}
