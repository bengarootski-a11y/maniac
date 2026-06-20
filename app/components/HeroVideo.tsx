"use client";

// Future upgrade: convert hero video into a frame sequence and scrub on scroll with canvas.

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll-driven: the hero fades / drifts / scales as it leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0, 0, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Fullscreen background video (decorative) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          scale: reduceMotion ? 1 : videoScale,
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/video/logo-hero-4k.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Subtle crimson radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(193,18,31,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "0 var(--section-padding-x)",
          y: reduceMotion ? 0 : contentY,
          opacity: reduceMotion ? 1 : contentOpacity,
        }}
      >
        <motion.span
          variants={item}
          className="label"
          style={{ marginBottom: "1.5rem" }}
        >
          Maniac Productions · Los Angeles
        </motion.span>

        <motion.h1
          variants={item}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: "900px",
            color: "var(--color-text)",
            margin: "1.5rem 0",
          }}
        >
          Stories with a pulse.
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "var(--color-body)",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            lineHeight: 1.65,
            maxWidth: "540px",
            marginBottom: "2.5rem",
          }}
        >
          Film and television from Michael Seitzman — built for tension,
          character, and the moment everything turns.
        </motion.p>

        <motion.div variants={item}>
          <a href="#selected-work" className="button button--primary">
            View Selected Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduceMotion ? 0 : [0.2, 0.7, 0.2] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--color-dim)",
        }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
