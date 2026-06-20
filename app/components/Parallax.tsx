"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type Props = {
  children: ReactNode;
  amount?: number; // px of travel across the viewport pass
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
};

// Scroll-linked vertical drift. Content moves as the element travels through
// the viewport. Disabled under prefers-reduced-motion (ui-ux: parallax-subtle).
export default function Parallax({
  children,
  amount = 60,
  className,
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, y: reduce ? 0 : y }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
