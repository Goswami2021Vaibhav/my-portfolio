"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel, LineGrid } from "./Primitives";

export function Recommendation({ client }) {
  return (
    <section className="px-6 md:px-16">
      <Reveal>
        <SectionLabel>Our recommendation</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          We recommend the{" "}
          <span style={{ color: "var(--color-accent)" }}>{client.recommendedPackage}</span>{" "}
          package.
        </h2>
        <p className="font-body text-base max-w-2xl mb-8" style={{ color: "var(--color-muted)" }}>
          {client.whyThisPackage}
        </p>
      </Reveal>

      {/* Tech stack badges */}
      {client.techStack?.length > 0 && (
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {client.techStack.map((tech, i) => (
              <motion.span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs font-medium"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  borderColor: "rgba(245,158,11,0.5)",
                  color: "var(--color-accent)",
                  scale: 1.05,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
                {tech}
              </motion.span>
            ))}
          </div>
        </Reveal>
      )}

      {/* Features grid — 2 cols always for even layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10"
        variants={staggerContainer}
        {...inViewProps}
      >
        {client.features.map((f, i) => (
          <motion.div
            key={i}
            className="relative flex items-start gap-4 p-5 rounded-2xl overflow-hidden"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            variants={staggerItem}
            whileHover={{
              borderColor: "rgba(245,158,11,0.35)",
              backgroundColor: "rgba(245,158,11,0.03)",
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Check icon */}
            <div
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245,158,11,0.15)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 2.5" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-foreground)" }}>
              {f}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Excluded box */}
      <Reveal>
        <div
          className="relative rounded-2xl p-6 overflow-hidden"
          style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
        >
          <LineGrid />
          <p className="font-body text-xs tracking-widest uppercase mb-4 relative z-10" style={{ color: "var(--color-muted)" }}>
            Intentionally not included — and why
          </p>
          <div className="flex flex-col gap-3 relative z-10">
            {client.excluded.map((ex, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(161,161,170,0.1)", border: "1px solid rgba(161,161,170,0.2)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 4h4" stroke="#A1A1AA" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{ex}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}