import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { COPYRIGHT, FOOTER_TAGLINE } from "../lib/links";

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
            {FOOTER_TAGLINE}
          </p>
        </div>

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
          {COPYRIGHT}
        </p>
      </div>
    </footer>
  );
}
