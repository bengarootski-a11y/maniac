"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../lib/projects";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import ProjectCard from "./ProjectCard";

type Props = {
  limit?: number;
  heading?: string;
  showViewAll?: boolean;
  showHeader?: boolean;
};

export default function ProjectsSection({
  limit,
  heading = "A body of work across film and television.",
  showViewAll,
  showHeader = true,
}: Props) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section" id="selected-work">
      <div className="section__inner">
        {showHeader && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            <div>
              <span className="label">Selected Work</span>
              <h2 className="heading" style={{ marginTop: "1.25rem" }}>
                {heading}
              </h2>
            </div>
            {showViewAll && (
              <Link href="/work" className="text-link">
                View all work ↗
              </Link>
            )}
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        >
          {items.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
