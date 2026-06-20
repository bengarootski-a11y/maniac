"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  type: string;
  copy: string;
  poster: string;
  alt: string;
};

const projects: Project[] = [
  {
    title: "The Rainmaker",
    type: "Current Series",
    copy: "A John Grisham adaptation centered on law, power, and the fight inside the system.",
    poster: "/posters/rainmaker.jpg",
    alt: "Key art for The Rainmaker, a current series adapted from John Grisham.",
  },
  {
    title: "Quantico",
    type: "Television",
    copy: "A high-velocity thriller built around secrets, suspicion, and shifting allegiances.",
    poster: "/posters/quantico.jpg",
    alt: "Key art for the television thriller Quantico.",
  },
  {
    title: "Code Black",
    type: "Television",
    copy: "A medical drama driven by crisis, speed, and the human stakes inside emergency medicine.",
    poster: "/posters/code-black.jpg",
    alt: "Key art for the medical drama Code Black.",
  },
  {
    title: "Intelligence",
    type: "Television",
    copy: "An action drama where technology, power, and national security collide.",
    poster: "/posters/intelligence.jpg",
    alt: "Key art for the action drama Intelligence.",
  },
  {
    title: "Choir",
    type: "Unscripted",
    copy: "An unscripted series about voice, discipline, and collective transformation.",
    poster: "/posters/choir.jpg",
    alt: "Key art for the unscripted series Choir.",
  },
  {
    title: "North Country",
    type: "Feature Film",
    copy: "A feature film shaped by workplace conflict, courage, and consequence.",
    poster: "/posters/north-country.jpg",
    alt: "Key art for the feature film North Country.",
  },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] as const },
  },
};

export default function ProjectsSection() {
  return (
    <section className="section" id="selected-work">
      <div className="section__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={card}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span className="label" style={{ marginBottom: "1.25rem" }}>
            Selected Work
          </span>
          <h2 className="heading" style={{ marginTop: "1.25rem" }}>
            A body of work across film and television.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
              className="project-card"
            >
              {/* Poster */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "2 / 3",
                  overflow: "hidden",
                  backgroundColor: "#0a0a0a",
                }}
              >
                <Image
                  src={p.poster}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "1.5rem 1.5rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-crimson)",
                    fontWeight: 500,
                  }}
                >
                  {p.type}
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
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    color: "var(--color-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p.copy}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
