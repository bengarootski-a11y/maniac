"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT_HREF } from "../lib/links";

const links = [
  { href: "/work", label: "Work" },
  { href: "/founder", label: "Staff" },
  { href: "/news", label: "News" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        backgroundColor: scrolled ? "rgba(0,0,0,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "0 var(--section-padding-x)",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link
          href="/"
          aria-label="Maniac Productions — home"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--color-text)",
            whiteSpace: "nowrap",
          }}
        >
          Maniac<span style={{ color: "var(--color-crimson-text)" }}>.</span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(1rem, 3vw, 2.25rem)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--color-body)",
                padding: "0.5rem 0",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--color-crimson-text)",
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
