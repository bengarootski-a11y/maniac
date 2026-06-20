"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

// Verified facts: founded 2017 (Deadline), overall deal at Blumhouse Television
// (maniacprods.com/about), develops for broadcast/cable/streaming (Deadline),
// represented by WME (maniacprods.com/about).
const facts: { k: string; v: string }[] = [
  { k: "Founded", v: "2017, Los Angeles" },
  { k: "Overall deal", v: "Blumhouse Television" },
  { k: "Develops for", v: "Broadcast · Cable · Streaming" },
  { k: "Disciplines", v: "Scripted & Unscripted · Feature Film" },
  { k: "Representation", v: "WME" },
];

export default function StudioSection() {
  return (
    <section className="section">
      <motion.div
        className="section__inner"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <motion.div variants={fadeUp}>
          <span className="label">The Studio</span>
          <h2 className="heading" style={{ margin: "1.25rem 0 1.75rem" }}>
            A film and television company built on character-driven drama.
          </h2>
          <p className="body-copy">
            Maniac Productions was founded in 2017 by writer-producer Michael
            Seitzman. The company develops and produces scripted and unscripted
            series for broadcast, cable, and streaming, alongside feature film —
            from network medical and legal drama to documentary and supernatural
            thriller.
          </p>
          <p className="body-copy" style={{ marginTop: "1.25rem" }}>
            Today the company works under an overall deal at Blumhouse
            Television, with current work including USA Network&apos;s adaptation
            of John Grisham&apos;s <em>The Rainmaker</em>.
          </p>
        </motion.div>

        {/* Right — fact card */}
        <motion.div
          variants={fadeUp}
          className="glass-card"
          style={{ padding: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          <span className="label" style={{ marginBottom: "0.5rem" }}>
            At a glance
          </span>
          <div style={{ marginTop: "1.25rem" }}>
            {facts.map((f) => (
              <div key={f.k} className="fact-row">
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-dim)",
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {f.k}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--color-text)",
                    textAlign: "right",
                  }}
                >
                  {f.v}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
