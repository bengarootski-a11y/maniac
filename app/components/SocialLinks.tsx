import { SOCIAL } from "../lib/links";

type Props = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

// SVG icons only (ui-ux: no emoji as icons).
export default function SocialLinks({ size = 20, className, style }: Props) {
  const items = [
    {
      label: "Michael Seitzman on Instagram",
      href: SOCIAL.instagram,
      icon: (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Michael Seitzman on X (Twitter)",
      href: SOCIAL.twitter,
      icon: (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={className}
      style={{ display: "inline-flex", gap: "1rem", ...style }}
    >
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${it.label} (opens in a new tab)`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: 999,
            border: "1px solid var(--border-subtle)",
            color: "var(--color-body)",
            transition: "color 0.25s ease, border-color 0.25s ease",
          }}
          className="social-link"
        >
          {it.icon}
        </a>
      ))}
    </div>
  );
}
