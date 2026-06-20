import type { Variants } from "framer-motion";

// Shared motion tokens — one rhythm across the whole site
// (ui-ux: motion-consistency, duration 150–300ms micro / ≤600ms reveals, ease-out enter)
export const EASE = [0.22, 1, 0.36, 1] as const; // expressive ease-out
export const DUR = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
} as const;

// Standard scroll reveal: fade up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE },
  },
};

// Container that staggers its children (ui-ux: stagger 30–50ms)
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

// Default viewport config for whileInView
export const viewportOnce = { once: true, margin: "-80px" } as const;
