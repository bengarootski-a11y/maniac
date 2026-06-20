"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export default function ClosingCTA() {
  return (
    <section
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBottom: "clamp(7rem, 16vh, 12rem)",
      }}
    >
      {/* Crimson signal glow behind the CTA */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          width: "min(900px, 120vw)",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(193,18,31,0.16) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        className="section__inner"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "820px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.span variants={fadeUp} className="label">
          Contact
        </motion.span>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "var(--color-text)",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "1.25rem 0",
          }}
        >
          Maniac Productions
          <br />
          <span style={{ fontStyle: "italic", color: "var(--color-body)" }}>
            Los Angeles
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="body-copy"
          style={{ margin: "1rem auto 2.75rem", textAlign: "center", maxWidth: "46ch" }}
        >
          For inquiries regarding film and television projects. Maniac
          Productions and Michael Seitzman are represented by WME.
        </motion.p>

        <motion.div variants={fadeUp}>
          {/* TODO: swap href="#" for a real mailto: / agency contact when available. */}
          <motion.a
            href="#"
            className="button button--outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Contact Maniac Productions
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
