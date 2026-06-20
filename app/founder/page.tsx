import type { Metadata } from "next";
import FounderProfile from "../components/FounderProfile";

export const metadata: Metadata = {
  title: "Michael Seitzman",
  description:
    "Michael Seitzman is a writer, producer, director, and the founder of Maniac Productions — creator and showrunner of The Rainmaker and writer of North Country.",
};

export default function FounderPage() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      <header className="page-header">
        <div className="section__inner" style={{ maxWidth: "820px" }}>
          <span className="label">Founder</span>
          <h1
            className="heading"
            style={{ marginTop: "1.25rem", fontSize: "clamp(2.6rem, 6.5vw, 5rem)" }}
          >
            Michael Seitzman
          </h1>
        </div>
      </header>
      <FounderProfile />
    </main>
  );
}
