import Image from "next/image";
import { Calendar } from "lucide-react";
import { NewsItem } from "../news.types";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="flex hover:-translate-y-3 transition duration-200 flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xl">
      <div className="relative w-full h-60 bg-gray-900">
        <Image src={item.img} alt={item.title} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-2 p-4 flex-1">
        <span className="text-md text-blue-600 font-bold">أخبار</span>

        <h3 className="text-[16px] font-semibold text-gray-900">
          {item.title}
        </h3>

        <p className="text-gray-500 line-clamp-3 mb-10">
          {item.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600 mt-auto">
          <Calendar size={20} className="text-blue-600" />
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}