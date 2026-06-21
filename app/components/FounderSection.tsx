"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import SocialLinks from "./SocialLinks";
import RichText from "./RichText";
import founder from "../../content/founder/index.json";

const creditStrip = founder.creditStrip.map((c) => c.text);

export default function FounderSection() {
  return (
    <section className="section" id="founder">
      <motion.div
        className="section__inner founder-grid"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
      >
        {/* Portrait — 4:5 frame crops the wide background left/right */}
        <motion.div variants={fadeUp} className="founder-portrait">
          <Image
            src="/headshot.jpg"
            alt="Portrait of Michael Seitzman, founder of Maniac Productions."
            fill
            sizes="(max-width: 860px) 100vw, 420px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>

        {/* Bio */}
        <div>
          <motion.span variants={fadeUp} className="label">
            {founder.label}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="heading"
            style={{ margin: "1.25rem 0 1.75rem", maxWidth: "none" }}
          >
            {founder.name}
          </motion.h2>

          <motion.div variants={fadeUp}>
            <RichText content={founder.bioHome} />
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: "2rem" }}>
            <SocialLinks />
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2.25rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.6rem 1.1rem",
            }}
          >
            {creditStrip.map((credit, i) => (
              <span
                key={credit}
                style={{ display: "inline-flex", alignItems: "center", gap: "1.1rem" }}
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
        </div>
      </motion.div>
    </section>
  );
}
