"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel } from "./Primitives";

export function Deliverables({ client }) {
  return (
    <section className="px-6 md:px-16">
      <Reveal>
        <SectionLabel>What we'll build together</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Built specifically for{" "}
          <span style={{ color: "var(--color-accent)" }}>{client.companyName}.</span>
        </h2>
      </Reveal>

      {/* Even 2-col grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={staggerContainer}
        {...inViewProps}
      >
        {client.deliverables.map((d, i) => (
          <motion.div
            key={i}
            className="group relative p-7 rounded-2xl overflow-hidden"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            variants={staggerItem}
            whileHover={{
              y: -5,
              borderColor: "rgba(245,158,11,0.3)",
              boxShadow: "0 16px 48px rgba(245,158,11,0.07)",
            }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            {/* Number watermark */}
            <div
              className="absolute top-4 right-5 font-display font-bold leading-none select-none transition-all duration-300 group-hover:text-[rgba(245,158,11,0.15)]"
              style={{ fontSize: "5rem", color: "rgba(255,255,255,0.03)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Accent top border on hover */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{ background: "var(--color-accent)", originX: 0 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg mb-5 font-body font-bold text-xs"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                {d}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}