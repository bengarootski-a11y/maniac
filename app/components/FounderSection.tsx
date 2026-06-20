"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

// Verified: Wikipedia + Deadline. Roles stated factually, no invented detail.
const creditStrip = [
  "Writer · Producer · Director",
  "Founder, Maniac Productions",
  "Showrunner, The Rainmaker",
  "Los Angeles",
];

export default function FounderSection() {
  return (
    <section className="section">
      <motion.div
        className="section__inner"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.span variants={fadeUp} className="label">
          Founder
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="heading"
          style={{
            margin: "1.25rem 0 1.75rem",
            maxWidth: "none",
            textAlign: "center",
          }}
        >
          Michael Seitzman
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="body-copy"
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          Michael Seitzman is a writer, producer, and director, and the founder
          of Maniac Productions. He is best known for writing the feature film{" "}
          <em>North Country</em>, which earned two Academy Award nominations, and
          serves as creator, showrunner, and executive producer of{" "}
          <em>The Rainmaker</em>, USA Network&apos;s adaptation of the John
          Grisham novel.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="body-copy"
          style={{ margin: "1.25rem auto 0", textAlign: "center" }}
        >
          His television work also includes <em>Quantico</em>,{" "}
          <em>Code Black</em>, and <em>Intelligence</em>, alongside feature and
          documentary projects spanning drama, thriller, legal, and medical
          storytelling.
        </motion.p>

        <motion.div
          variants={fadeUp}
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
              style={{ display: "inline-flex", alignItems: "center", gap: "1.25rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-silver)",
                  fontWeight: 400,
                }}
              >
                {credit}
              </span>
              {i < creditStrip.length - 1 && (
                <span aria-hidden="true" style={{ color: "var(--color-crimson-text)" }}>
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
