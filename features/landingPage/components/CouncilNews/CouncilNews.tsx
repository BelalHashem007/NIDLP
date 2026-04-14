"use client";

import { useState } from "react";
import NewsList from "./components/NewsList";
import { useNews } from "./useNews";
import Image from "next/image";
import MotionWrapper from "../../animations/MotionWrapper";
import { fadeIn } from "../../animations/animations";


export default function CouncilNews() {
  const { news, loading, error } = useNews();
  const [showAll, setShowAll] = useState(false);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-20">{error}</p>;
  }

  const visibleNews = showAll ? news : news.slice(0, 3);

  return (
    <section id="council-news" className="relative border-t border-gray-300 py-20 pt-30 px-5 lg:px-20 2xl:px-40">
      <h1 className="text-3xl font-bold mb-20 text-center">
        أخبار المجلس
      </h1>

      <MotionWrapper animation={fadeIn("right", 0.2)}>
      <NewsList news={visibleNews} />
      </MotionWrapper>

      {news.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="block mx-auto text-blue-600 py-3 px-10 border-2 border-blue-600 rounded-xl hover:text-white hover:bg-blue-600 transition cursor-pointer mt-10"
        >
          {showAll ? "عرض أقل" : "عرض جميع الاخبار"}
        </button>
      )}

      <Image
        src="/icons/top.svg"
        alt="decor"
        width={500}
        height={300}
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}