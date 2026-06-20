import Link from "next/link";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/founder", label: "Founder" },
  { href: "/news", label: "News" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "clamp(3rem, 6vw, 4.5rem) var(--section-padding-x)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "var(--color-text)",
            }}
          >
            Maniac Productions
          </Link>
          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.8rem",
              color: "var(--color-dim)",
              letterSpacing: "0.04em",
            }}
          >
            Film &amp; Television · Los Angeles
          </p>
        </div>

        <nav
          aria-label="Footer"
          style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}
        >
          {navLinks.map((l) => (
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
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <SocialLinks />
      </div>

      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "2.5rem auto 0",
          paddingTop: "1.75rem",
          borderTop: "1px solid var(--border-faint)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--color-dim)" }}>
          Copyright © 2026 Maniac Productions — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
