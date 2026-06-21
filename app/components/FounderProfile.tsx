"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../lib/projects";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import SocialLinks from "./SocialLinks";
import RichText from "./RichText";
import founder from "../../content/founder/index.json";

export default function FounderProfile() {
  return (
    <section className="section" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)" }}>
      <div className="section__inner">
        <motion.div
          className="founder-grid"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          style={{ alignItems: "start" }}
        >
          {/* Portrait — 4:5 frame crops the wide background left/right */}
          <motion.div variants={fadeUp} className="founder-portrait founder-portrait--sticky">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Michael Seitzman, founder of Maniac Productions."
              fill
              sizes="(max-width: 860px) 100vw, 420px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </motion.div>

          <div>
            <motion.div variants={fadeUp}>
              <RichText content={founder.bioPage} />
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: "2rem" }}>
              <SocialLinks />
            </motion.div>
          </div>
        </motion.div>

        {/* Selected credits */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}
        >
          <motion.span variants={fadeUp} className="label">
            Selected Credits
          </motion.span>
          <div style={{ marginTop: "1.5rem" }}>
            {projects.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="editorial-row">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                    color: "var(--color-text)",
                  }}
                >
                  {p.title}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    color: "var(--color-body)",
                    fontSize: "0.95rem",
                  }}
                >
                  {p.role}
                  <span style={{ color: "var(--color-dim)" }}> · {p.meta}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
