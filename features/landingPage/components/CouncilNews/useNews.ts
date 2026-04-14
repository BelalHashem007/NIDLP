import { useEffect, useState } from "react";
import { NewsItem } from "./news.types";
import { getNews } from "./news.service";

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNews()
      .then(setNews)
      .catch((err) => {
        if (err.message === "FAILED_TO_FETCH_NEWS") {
          setError("فشل تحميل الأخبار");
        } else {
          setError("حدث خطأ غير متوقع");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { news, loading, error };
}