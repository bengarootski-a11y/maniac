"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../lib/projects";
import { EASE, fadeUp, stagger, viewportOnce } from "../lib/motion";

type Props = {
  limit?: number;
  heading?: string;
  showViewAll?: boolean;
  showHeader?: boolean;
};

export default function ProjectsSection({
  limit,
  heading = "A body of work across film and television.",
  showViewAll,
  showHeader = true,
}: Props) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section" id="selected-work">
      <div className="section__inner">
        {showHeader && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            <div>
              <span className="label">Selected Work</span>
              <h2 className="heading" style={{ marginTop: "1.25rem" }}>
                {heading}
              </h2>
            </div>
            {showViewAll && (
              <Link href="/work" className="text-link">
                View all work ↗
              </Link>
            )}
          </motion.div>
        )}

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
          {items.map((p) => (
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
