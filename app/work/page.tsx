import type { Metadata } from "next";
import ProjectsSection from "../components/ProjectsSection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected film and television from Maniac Productions and Michael Seitzman — including The Rainmaker, Quantico, Code Black, Intelligence, Choir, and North Country.",
};

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      <header className="page-header">
        <div className="section__inner">
          <span className="label">Selected Work</span>
          <h1
            className="heading"
            style={{ marginTop: "1.25rem", fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Film &amp; television.
          </h1>
          <p className="body-copy" style={{ marginTop: "1.5rem" }}>
            A selection of work created, run, produced, and written by Michael
            Seitzman across two decades — from network drama to documentary and
            feature film.
          </p>
        </div>
      </header>
      <ProjectsSection heading="The full slate." />
    </main>
  );
}
