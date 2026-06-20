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
      {/* Radial glow behind the button */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "0",
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
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "820px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.span
          variants={reveal}
          className="label"
          style={{ marginBottom: "1.75rem" }}
        >
          Enter the slate
        </motion.span>

        <motion.h2
          variants={reveal}
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
          The story starts in the dark.
          <br />
          <span
            style={{ fontStyle: "italic", color: "var(--color-body)" }}
          >
            Then it cuts through.
          </span>
        </motion.h2>

        <motion.p
          variants={reveal}
          className="body-copy"
          style={{
            margin: "1rem auto 2.75rem",
            textAlign: "center",
            maxWidth: "48ch",
          }}
        >
          Maniac Productions builds film and television for the charged space
          between control and chaos.
        </motion.p>

        <motion.div variants={reveal}>
          {/* TODO: swap href="#" for a mailto: contact address once one exists. */}
          <motion.a
            href="#"
            className="button button--outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
          >
            Contact Maniac Productions
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
