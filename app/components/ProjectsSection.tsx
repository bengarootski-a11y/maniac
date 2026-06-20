"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE, fadeUp, stagger, viewportOnce } from "../lib/motion";

type Project = {
  title: string;
  meta: string; // network · year
  role: string; // Seitzman's verified role
  copy: string;
  poster: string;
  alt: string;
  href?: string; // official watch page or trailer
  cta?: string; // "Watch" | "Trailer"
};

// All facts verified: Wikipedia, USA Network, Deadline, Disney+ press.
const projects: Project[] = [
  {
    title: "The Rainmaker",
    meta: "USA Network · 2025",
    role: "Creator · Showrunner · Executive Producer",
    copy: "An idealistic young lawyer takes on a corrupt system — and a feared opposing counsel — in this adaptation of John Grisham's legal thriller.",
    poster: "/posters/rainmaker.jpg",
    alt: "Key art for The Rainmaker, the USA Network adaptation of John Grisham's legal thriller.",
    href: "https://www.usanetwork.com/series/the-rainmaker-1755512388051",
    cta: "Watch",
  },
  {
    title: "Choir",
    meta: "Disney+ · 2024",
    role: "Executive Producer",
    copy: "A documentary series following the Detroit Youth Choir as they prepare for the performance of a lifetime at Carnegie Hall.",
    poster: "/posters/choir.jpg",
    alt: "Key art for Choir, the Disney+ docuseries about the Detroit Youth Choir.",
    href: "https://www.disneyplus.com/browse/entity-ef5936aa-dd74-4ebc-8913-df28121c2b69",
    cta: "Watch",
  },
  {
    title: "Quantico",
    meta: "ABC · 2015–2018",
    role: "Showrunner · Executive Producer",
    copy: "A thriller set among a class of FBI recruits, where one trainee is suspected of orchestrating an attack on home soil.",
    poster: "/posters/quantico.jpg",
    alt: "Key art for the ABC thriller series Quantico.",
    href: "https://www.youtube.com/watch?v=BrzHmjg7Ruo",
    cta: "Trailer",
  },
  {
    title: "Code Black",
    meta: "CBS · 2015–2018",
    role: "Showrunner · Executive Producer",
    copy: "A medical drama set in the overwhelmed emergency room of a Los Angeles hospital, where doctors are pushed past their limits.",
    poster: "/posters/code-black.jpg",
    alt: "Key art for the CBS medical drama Code Black.",
    href: "https://www.primevideo.com/detail/0U827KCP4Z7ETN79BHY0QXGL3H",
    cta: "Watch",
  },
  {
    title: "Incarnate",
    meta: "Feature Film · 2016",
    role: "Producer",
    copy: "A supernatural thriller from Blumhouse about a scientist who enters the minds of the possessed to fight what lives inside them.",
    poster: "/posters/incarnate.jpeg",
    alt: "Theatrical key art for the 2016 Blumhouse supernatural thriller Incarnate.",
    href: "https://www.youtube.com/watch?v=g10LD3Xsh2Q",
    cta: "Trailer",
  },
  {
    title: "Intelligence",
    meta: "CBS · 2014",
    role: "Writer · Executive Producer",
    copy: "An action drama about an operative enhanced with a microchip that links him directly to the global information grid.",
    poster: "/posters/intelligence.jpg",
    alt: "Key art for the CBS action drama Intelligence.",
  },
  {
    title: "North Country",
    meta: "Feature Film · 2005",
    role: "Writer",
    copy: "A drama inspired by a landmark workplace-harassment case. The film earned two Academy Award nominations.",
    poster: "/posters/north-country.jpg",
    alt: "Theatrical key art for the 2005 feature film North Country.",
    href: "https://www.youtube.com/watch?v=OVEVkGvG7sI",
    cta: "Trailer",
  },
  {
    title: "Here on Earth",
    meta: "Feature Film · 2000",
    role: "Writer",
    copy: "A romantic drama set in a small New England town, caught between privilege, roots, and first love.",
    poster: "/posters/here-on-earth.jpeg",
    alt: "Theatrical key art for the 2000 feature film Here on Earth.",
    href: "https://www.youtube.com/watch?v=4t8WI3bW8NA",
    cta: "Trailer",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section" id="selected-work">
      <div className="section__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span className="label">Selected Work</span>
          <h2 className="heading" style={{ marginTop: "1.25rem" }}>
            A body of work across film and television.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="project-card"
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "2 / 3",
                  overflow: "hidden",
                  backgroundColor: "var(--color-bg-raise)",
                }}
              >
                <Image
                  src={p.poster}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  padding: "1.5rem 1.5rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-crimson-text)",
                    fontWeight: 500,
                  }}
                >
                  {p.meta}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.35rem, 2vw, 1.7rem)",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.04em",
                    color: "var(--color-silver)",
                    fontWeight: 400,
                  }}
                >
                  {p.role}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    color: "var(--color-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginTop: "0.25rem",
                  }}
                >
                  {p.copy}
                </p>

                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.cta} ${p.title} (opens in a new tab)`}
                    style={{
                      marginTop: "0.6rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "var(--color-crimson-text)",
                    }}
                  >
                    {p.cta}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
