"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { Project } from "../lib/projects";
import { EASE, fadeUp } from "../lib/motion";

export default function ProjectCard({ project: p }: { project: Project }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Poster drifts inside its frame as the card passes through the viewport.
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const posterY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="project-card"
    >
      <div
        ref={frameRef}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "2 / 3",
          overflow: "hidden",
          backgroundColor: "var(--color-bg-raise)",
        }}
      >
        {/* Oversized + drifting wrapper so edges never reveal during parallax */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-10% 0",
            y: reduce ? 0 : posterY,
          }}
        >
          <Image
            src={p.poster}
            alt={p.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
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
  );
}
