"use client";

import { motion } from "framer-motion";

const steps: { label: string; description: string }[] = [
  { label: "Development", description: "Finding the engine inside the idea." },
  { label: "World", description: "Building rules, pressure, and atmosphere." },
  {
    label: "Character",
    description: "Designing people who break, adapt, and reveal themselves.",
  },
  { label: "Pilot", description: "Turning premise into propulsion." },
  { label: "Room", description: "Pressure-testing story across season arcs." },
  {
    label: "Production",
    description: "Translating tension into images, rhythm, and performance.",
  },
  { label: "Post", description: "Cutting for pace, silence, impact, and release." },
  { label: "Launch", description: "Delivering the work with identity and intent." },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] as const },
  },
};

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="section__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span className="label" style={{ marginBottom: "1.25rem" }}>
            Development to Delivery
          </span>
          <h2 className="heading" style={{ marginTop: "1.25rem" }}>
            The architecture of a story.
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          style={{ listStyle: "none" }}
        >
          {steps.map((s) => (
            <motion.li
              key={s.label}
              variants={reveal}
              className="process-row"
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)",
                  color: "var(--color-crimson)",
                  fontWeight: 400,
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  color: "var(--color-body)",
                  fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                  lineHeight: 1.6,
                }}
              >
                {s.description}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
