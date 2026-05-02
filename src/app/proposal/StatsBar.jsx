"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { GlowOrb, LineGrid } from "./Primitives";

const DEFAULT_STATS = [
  { value: "50+", label: "Stores launched" },
  { value: "3–4 wks", label: "Avg. delivery" },
  { value: "100%", label: "Custom code" },
  { value: "30 days", label: "Post-launch support" },
  { value: "98%", label: "On-time delivery" },
  { value: "5★", label: "Client satisfaction" },
];

export function StatsBar({ client }) {
  // Use client stats if provided, else fall back to defaults
  // Always ensure even count for col-2/col-3 grid alignment
  const raw = client.stats?.length ? client.stats : DEFAULT_STATS;
  // Pad to next multiple of 6 if needed (works for col-2 and col-3)
  const stats = raw.length % 6 === 0 ? raw : [...raw, ...DEFAULT_STATS].slice(0, Math.ceil(raw.length / 6) * 6);

  return (
    <section className="px-6 md:px-16">
      <motion.div
        className="relative rounded-3xl overflow-hidden p-8 md:p-10"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <LineGrid />
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={600} opacity={0.04} />

        <motion.div
          className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "var(--color-border)" }}
          variants={staggerContainer}
          {...inViewProps}
        >
          {stats.slice(0, 6).map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center text-center py-8 px-4"
              style={{ background: "var(--color-surface)" }}
              variants={staggerItem}
              whileHover={{ backgroundColor: "rgba(245,158,11,0.03)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="font-display font-bold mb-1 leading-none"
                style={{
                  color: "var(--color-foreground)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {stat.value}
              </motion.span>
              <span
                className="font-body text-xs tracking-wide"
                style={{ color: "var(--color-muted)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}