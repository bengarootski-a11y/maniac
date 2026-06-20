import type { Metadata } from "next";
import NewsSection from "../components/NewsSection";

export const metadata: Metadata = {
  title: "News & Press",
  description:
    "Press and announcements about Maniac Productions and Michael Seitzman, including coverage from Deadline, Variety, and USA Network.",
};

export default function NewsPage() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      <header className="page-header">
        <div className="section__inner">
          <span className="label">News &amp; Press</span>
          <h1
            className="heading"
            style={{ marginTop: "1.25rem", fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            In the press.
          </h1>
          <p className="body-copy" style={{ marginTop: "1.5rem" }}>
            Selected coverage of Maniac Productions and Michael Seitzman. Each
            headline links to the original article.
          </p>
        </div>
      </header>
      <NewsSection />
    </main>
  );
}
