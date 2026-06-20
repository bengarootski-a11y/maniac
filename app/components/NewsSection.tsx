"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { news } from "../lib/news";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Props = {
  limit?: number;
  showViewAll?: boolean;
};

export default function NewsSection({ limit, showViewAll }: Props) {
  const items = limit ? news.slice(0, limit) : news;

  return (
    <section className="section" id="news">
      <div className="section__inner">
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
            <span className="label">News &amp; Press</span>
            <h2 className="heading" style={{ marginTop: "1.25rem" }}>
              In the press.
            </h2>
          </div>
          {showViewAll && (
            <Link href="/news" className="text-link">
              All news ↗
            </Link>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {items.map((n) => (
            <motion.a
              key={n.href + n.title}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="news-row"
              aria-label={`${n.title} — ${n.source}, ${n.date} (opens in a new tab)`}
            >
              <span className="news-row__meta">
                <span style={{ color: "var(--color-crimson-text)" }}>
                  {n.source}
                </span>
                <span style={{ color: "var(--color-dim)" }}>{n.date}</span>
              </span>
              <span className="news-row__title">{n.title}</span>
              <span aria-hidden="true" className="news-row__arrow">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
