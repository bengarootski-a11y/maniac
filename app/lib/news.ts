// Real, sourced press only — newest first. No invented coverage.
export type NewsItem = {
  date: string; // display label
  source: string;
  title: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    date: "Oct 2025",
    source: "Variety",
    title: "‘The Rainmaker’ Renewed for Season 2 at USA Network",
    href: "https://variety.com/2025/tv/news/rainmaker-renewed-season-2-usa-network-1236559787/",
  },
  {
    date: "Aug 2025",
    source: "Variety",
    title: "‘Rainmaker’ Trailer: Rudy Baylor Goes on the Offensive in USA Network Legal Drama",
    href: "https://variety.com/2025/tv/news/rainmaker-trailer-usa-network-john-grisham-1236417853/",
  },
  {
    date: "Jan 2024",
    source: "Disney+",
    title: "‘Choir,’ the Detroit Youth Choir Docuseries, Premieres on Disney+",
    href: "https://www.disneyplus.com/browse/entity-ef5936aa-dd74-4ebc-8913-df28121c2b69",
  },
  {
    date: "May 2021",
    source: "Variety",
    title: "‘Battersea Poltergeist’ to Be Adapted by Blumhouse TV and Maniac Productions",
    href: "https://variety.com/2021/tv/news/battersea-poltergeist-series-blumhouse-tv-maniac-productions-1234981001/",
  },
  {
    date: "Jan 2021",
    source: "Deadline",
    title: "Michael Seitzman Inks First-Look TV Deal With Blumhouse",
    href: "https://deadline.com/2021/01/michael-seitzman-i-first-look-tv-deal-blumhouse-1234680624/",
  },
  {
    date: "Sep 2017",
    source: "Deadline",
    title: "Michael Seitzman Partners With Christina Davis To Launch Maniac Production Company",
    href: "https://deadline.com/2017/09/michael-seitzman-christina-davis-maniac-production-company-abc-studios-1202157242/",
  },
];
