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

const principles = [
  "Character first",
  "Pressure reveals truth",
  "Every frame earns the next",
];

export default function StudioSection() {
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <motion.div variants={reveal}>
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            Founded by Michael Seitzman
          </span>
          <h2 className="heading" style={{ margin: "1.25rem 0 1.75rem" }}>
            Built for the moment before everything changes.
          </h2>
          <p className="body-copy">
            Maniac Productions develops film and television with a focus on
            tension, character, propulsion, and emotional consequence. The work
            moves between network drama, premium streaming, unscripted
            storytelling, and feature film.
          </p>
        </motion.div>

        {/* Right column — glass card */}
        <motion.div
          variants={reveal}
          className="glass-card"
          style={{
            padding: "clamp(2rem, 3vw, 2.75rem)",
          }}
        >
          <span className="label" style={{ marginBottom: "1.75rem" }}>
            Principles
          </span>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              marginTop: "1.5rem",
            }}
          >
            {principles.map((p, i) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.1rem 0",
                  borderTop:
                    i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-crimson)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                    color: "var(--color-text)",
                  }}
                >
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
