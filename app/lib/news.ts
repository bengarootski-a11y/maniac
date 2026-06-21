// News is managed by TinaCMS in content/news/index.json.
import data from "../../content/news/index.json";

export type NewsItem = {
  date: string;
  source: string;
  title: string;
  href: string;
};

export const news: NewsItem[] = data.items as NewsItem[];
