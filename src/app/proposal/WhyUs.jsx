"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel } from "./Primitives";

const POINTS = [
  {
    icon: "⚡",
    label: "Technology-first",
    desc: "Every decision is performance and conversion driven — not trend-chasing.",
  },
  {
    icon: "✦",
    label: "No templates, ever",
    desc: "Everything is engineered for your specific business model and goals.",
  },
  {
    icon: "💬",
    label: "Direct communication",
    desc: "You talk to your developer directly. No middlemen, no lost context.",
  },
  {
    icon: "🔒",
    label: "Transparent pricing",
    desc: "Fixed-scope quotes. What you see is what you pay — guaranteed.",
  },
  {
    icon: "🚀",
    label: "Post-launch support",
    desc: "30 days of monitoring, bug fixes, and tweaks after every launch.",
  },
  {
    icon: "📐",
    label: "Delivery on time",
    desc: "98% of projects delivered on schedule. Your timeline is respected.",
  },
];

export function WhyUs() {
  return (
    <section className="px-6 md:px-16">
      <Reveal>
        <SectionLabel>Why work with us</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Built different.
          <br />
          <span style={{ color: "var(--color-accent)" }}>Delivered different.</span>
        </h2>
        <p className="font-body text-base mb-12 max-w-xl" style={{ color: "var(--color-muted)" }}>
          50+ stores built. Real results. Long-term partnerships.
        </p>
      </Reveal>

      {/* 6-card grid: col-2 on md, col-3 on lg — always even */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        {...inViewProps}
      >
        {POINTS.map((p, i) => (
          <motion.div
            key={i}
            className="group relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
            variants={staggerItem}
            whileHover={{
              y: -4,
              borderColor: "rgba(245,158,11,0.28)",
              backgroundColor: "rgba(245,158,11,0.02)",
            }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            {/* Icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.15)",
              }}
            >
              {p.icon}
            </div>

            <div>
              <p
                className="font-body font-semibold text-sm mb-1.5"
                style={{ color: "var(--color-foreground)" }}
              >
                {p.label}
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {p.desc}
              </p>
            </div>

            {/* Hover accent bottom border */}
            <motion.div
              className="absolute bottom-0 left-6 right-6 h-px rounded-full"
              style={{ background: "var(--color-accent)", scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}