"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel, GlowOrb } from "./Primitives";

export function DemoProjects({ client }) {
  if (!client.projects?.length) return null;

  return (
    <section className="px-6 md:px-16">
      <Reveal>
        <SectionLabel>Past work</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Proof, not{" "}
          <span style={{ color: "var(--color-accent)" }}>promises.</span>
        </h2>
        <p className="font-body text-base mb-12 max-w-xl" style={{ color: "var(--color-muted)" }}>
          A few projects relevant to what we're building for you.
        </p>
      </Reveal>

      {/* Even 2-col grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={staggerContainer}
        {...inViewProps}
      >
        {client.projects.map((project, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl overflow-hidden"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            variants={staggerItem}
            whileHover={{
              borderColor: "rgba(245,158,11,0.3)",
              boxShadow: "0 16px 48px rgba(245,158,11,0.07)",
            }}
            transition={{ duration: 0.25 }}
          >
            {/* Top label bar */}
            <div
              className="px-6 pt-6 pb-4 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--color-accent)" }}
                    />
                    <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--color-muted)" }}>
                      Project {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl" style={{ color: "var(--color-foreground)" }}>
                    {project.name}
                  </h3>
                </div>

                {/* External link icon */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    color: "var(--color-accent)",
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(245,158,11,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6.5M11.5 2.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Summary */}
            <div className="px-6 py-5">
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                {project.summary}
              </p>

              {/* View project CTA */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs font-medium"
                style={{ color: "var(--color-accent)" }}
                whileHover={{ gap: "10px" }}
                transition={{ duration: 0.2 }}
              >
                View live project
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>

            {/* Hover glow */}
            <GlowOrb className="-bottom-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={200} opacity={0.08} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}