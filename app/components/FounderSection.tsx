"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0, 0, 1] as const },
  },
};

const creditStrip = [
  "Writer / Producer",
  "Founder, Maniac Productions",
  "Film & Television",
  "Los Angeles",
];

export default function FounderSection() {
  return (
    <section className="section">
      <motion.div
        className="section__inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        style={{
          maxWidth: "760px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.span
          variants={reveal}
          className="label"
          style={{ marginBottom: "1.5rem" }}
        >
          Founder
        </motion.span>

        <motion.h2
          variants={reveal}
          className="heading"
          style={{ margin: "1.25rem 0 1.75rem", maxWidth: "none" }}
        >
          Michael Seitzman
        </motion.h2>

        <motion.p
          variants={reveal}
          className="body-copy"
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          Michael Seitzman is a writer, producer, and founder of Maniac
          Productions. His work spans network television, unscripted series, and
          feature film, with credits across drama, thriller, medical, legal, and
          character-driven storytelling.
        </motion.p>

        {/* Credit strip */}
        <motion.div
          variants={reveal}
          style={{
            marginTop: "clamp(2.5rem, 4vw, 3.5rem)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem 1.25rem",
          }}
        >
          {creditStrip.map((credit, i) => (
            <span
              key={credit}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-silver)",
                  fontWeight: 400,
                }}
              >
                {credit}
              </span>
              {i < creditStrip.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{ color: "var(--color-crimson)", fontSize: "0.7rem" }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
