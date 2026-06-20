"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

// Real range, grouped by format and proven with verified titles only.
const rows: { format: string; work: string }[] = [
  { format: "Network Drama", work: "Quantico (ABC) · Code Black, Intelligence (CBS)" },
  { format: "Premium & Cable", work: "The Rainmaker (USA Network)" },
  { format: "Documentary", work: "Choir (Disney+)" },
  { format: "Feature Film", work: "North Country · Here on Earth · Incarnate" },
];

export default function RangeSection() {
  return (
    <section className="section">
      <div className="section__inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span className="label">Range</span>
          <h2 className="heading" style={{ marginTop: "1.25rem" }}>
            Across every format.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {rows.map((r) => (
            <motion.div key={r.format} variants={fadeUp} className="editorial-row">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                  color: "var(--color-text)",
                  fontWeight: 400,
                }}
              >
                {r.format}
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
                {r.work}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
