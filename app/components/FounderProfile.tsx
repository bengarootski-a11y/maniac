"use client";

import { motion } from "framer-motion";
import { projects } from "../lib/projects";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import SocialLinks from "./SocialLinks";

export default function FounderProfile() {
  return (
    <section className="section" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)" }}>
      <div className="section__inner" style={{ maxWidth: "820px" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="body-copy">
            Michael Seitzman is a writer, producer, and director. He founded
            Maniac Productions in 2017 with former CBS drama head Christina
            Davis, originally under an overall deal at ABC Studios, and now runs
            the company in an overall deal at Blumhouse Television.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="body-copy"
            style={{ marginTop: "1.25rem" }}
          >
            He wrote the feature film <em>North Country</em>, which earned two
            Academy Award nominations, and went on to run network drama as
            showrunner of <em>Quantico</em>, <em>Code Black</em>, and{" "}
            <em>Intelligence</em>. He is the creator, showrunner, and executive
            producer of <em>The Rainmaker</em>, USA Network&apos;s adaptation of
            the John Grisham novel, which was renewed for a second season in 2025.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="body-copy"
            style={{ marginTop: "1.25rem" }}
          >
            His work also extends to documentary and feature film, from the
            Disney+ series <em>Choir</em> to the Blumhouse thriller{" "}
            <em>Incarnate</em>. Maniac Productions and Michael Seitzman are
            represented by WME.
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: "2rem" }}>
            <SocialLinks />
          </motion.div>
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
