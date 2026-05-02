"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel, GlowOrb } from "./Primitives";

export function Timeline({ client }) {
  const steps = client.timeline?.steps || [];

  return (
    <section className="px-6 md:px-16">
      <Reveal>
        <SectionLabel>Project timeline</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Ready for launch in{" "}
          <span style={{ color: "var(--color-accent)" }}>3–4 weeks.</span>
        </h2>
        <p className="font-body text-base mb-16 max-w-xl" style={{ color: "var(--color-muted)" }}>
          Here's exactly how we get from kickoff to live.
        </p>
      </Reveal>

      <div className="relative">
        {/* Animated vertical track */}
        <motion.div
          className="absolute left-5 md:left-6 top-0 bottom-0 w-px"
          style={{ background: "var(--color-border)", originY: 0 }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Animated amber fill on scroll */}
        <motion.div
          className="absolute left-5 md:left-6 top-0 w-px"
          style={{ background: "var(--color-accent)", originY: 0 }}
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />

        <motion.div
          className="flex flex-col gap-0"
          variants={staggerContainer}
          {...inViewProps}
        >
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={i}
                className="relative flex gap-8 md:gap-12 pb-12"
                variants={staggerItem}
              >
                {/* Node */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: isLast
                      ? "var(--color-accent)"
                      : "var(--color-surface)",
                    border: `1px solid ${isLast ? "var(--color-accent)" : "var(--color-border)"}`,
                  }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {isLast ? (
                    <span className="text-base">🚀</span>
                  ) : (
                    <span
                      className="font-display font-bold text-sm"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}

                  {/* Pulse ring on last step */}
                  {isLast && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: "1px solid var(--color-accent)" }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="flex-1 relative rounded-2xl p-5 md:p-6 mb-2"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                  whileHover={{
                    borderColor: "rgba(245,158,11,0.25)",
                    backgroundColor: "rgba(245,158,11,0.02)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full font-body text-xs flex-shrink-0"
                      style={{
                        background: isLast
                          ? "rgba(245,158,11,0.12)"
                          : "var(--color-surface-2)",
                        color: isLast ? "var(--color-accent)" : "var(--color-muted)",
                        border: `1px solid ${isLast ? "rgba(245,158,11,0.25)" : "var(--color-border)"}`,
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}