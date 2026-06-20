"use client";

// Future upgrade: convert hero video into a frame sequence and scrub on scroll with canvas.

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { EASE } from "../lib/motion";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  // The logo plays ONCE as a cinematic reveal, then steps aside (no infinite loop).
  const [introDone, setIntroDone] = useState(false);

  // Fallback: if the video can't fire `onEnded` (autoplay blocked, etc.),
  // dismiss the intro after a safe timeout so the page is never stuck.
  useEffect(() => {
    if (reduceMotion) {
      setIntroDone(true);
      return;
    }
    const t = setTimeout(() => setIntroDone(true), 6500);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  // Scroll-driven: hero text drifts and fades as the section leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* One-time logo intro overlay */}
      <AnimatePresence>
        {!introDone && !reduceMotion && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 5,
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              onEnded={() => setIntroDone(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/video/logo-hero-4k.mp4" type="video/mp4" />
            </video>
            {/* gentle vignette over the logo */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Crimson signal glow (scroll-reactive) */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          y: reduceMotion ? 0 : glowY,
          background:
            "radial-gradient(ellipse 55% 45% at 28% 55%, rgba(193,18,31,0.20) 0%, transparent 70%)",
        }}
      />

      {/* faint film-frame guides for production-slate texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={introDone ? "show" : "hidden"}
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
        <motion.span variants={item} className="label">
          Film &amp; Television · Los Angeles
        </motion.span>

        <motion.h1
          variants={item}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 6.5vw, 6rem)",
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            maxWidth: "16ch",
            color: "var(--color-text)",
            margin: "1.5rem 0",
          }}
        >
          Maniac
          <br />
          Productions
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "var(--color-body)",
            fontSize: "clamp(1.02rem, 1.4vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "2.5rem",
          }}
        >
          The film and television company founded by Michael Seitzman — network
          drama, documentary, and feature film.
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
        animate={{ opacity: introDone && !reduceMotion ? [0.2, 0.7, 0.2] : 0 }}
        transition={{ duration: 2.4, repeat: Infinity }}
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
