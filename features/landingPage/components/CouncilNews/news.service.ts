import axios from "axios";
import { NewsItem } from "./news.types";

export async function getNews(): Promise<NewsItem[]> {
  try {
    const response = await axios.get("/data/news.json");
    return response.data;
  } catch {
    throw new Error("FAILED_TO_FETCH_NEWS");
  }
}