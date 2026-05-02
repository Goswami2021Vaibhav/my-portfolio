"use client";

import { motion } from "framer-motion";
import { fadeUp, inViewProps } from "./variants";

// ── Reveal wrapper ────────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      {...inViewProps}
    >
      {children}
    </motion.div>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="w-1 h-4 rounded-full"
        style={{ background: "var(--color-accent)" }}
      />
      <p className="font-body text-xs tracking-[0.22em] uppercase"
         style={{ color: "var(--color-accent)" }}>
        {children}
      </p>
    </div>
  );
}

// ── Animated divider ──────────────────────────────────────────────────────────
export function Divider() {
  return (
    <motion.div
      className="w-full h-px my-10 md:my-20"
      style={{ background: "var(--color-border)", originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

// ── Dot grid background ───────────────────────────────────────────────────────
export function DotGrid({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(245,158,11,0.12) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}

// ── Subtle line grid background ───────────────────────────────────────────────
export function LineGrid({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

// ── Glow orb ──────────────────────────────────────────────────────────────────
export function GlowOrb({ className = "", size = 500, opacity = 0.07 }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(245,158,11,${opacity}) 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
    />
  );
}

// ── Ambient corner accent ─────────────────────────────────────────────────────
export function CornerAccent({ position = "top-right" }) {
  const posMap = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };
  return (
    <svg
      className={`absolute ${posMap[position]} pointer-events-none opacity-20`}
      width="200" height="200" viewBox="0 0 200 200" fill="none"
    >
      <circle cx={position.includes("right") ? 200 : 0} cy={position.includes("bottom") ? 200 : 0}
        r="160" stroke="#F59E0B" strokeWidth="0.5" />
      <circle cx={position.includes("right") ? 200 : 0} cy={position.includes("bottom") ? 200 : 0}
        r="100" stroke="#F59E0B" strokeWidth="0.5" />
      <circle cx={position.includes("right") ? 200 : 0} cy={position.includes("bottom") ? 200 : 0}
        r="50" stroke="#F59E0B" strokeWidth="0.5" />
    </svg>
  );
}