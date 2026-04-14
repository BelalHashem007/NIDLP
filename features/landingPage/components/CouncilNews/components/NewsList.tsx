
import { NewsItem } from "../news.types";
import NewsCard from "./NewsCard";

export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10 p-6">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}