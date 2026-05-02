"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel, GlowOrb } from "./Primitives";

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div variants={staggerItem}>
      {/* Divider above each item */}
      <div className="w-full h-px" style={{ background: "var(--color-border)" }} />

      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
      >
        {/* Number + Question */}
        <div className="flex items-start gap-5 flex-1 min-w-0">
          <span
            className="font-display font-bold text-xs mt-1 flex-shrink-0 tabular-nums"
            style={{ color: isOpen ? "var(--color-accent)" : "var(--color-muted)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-display font-semibold text-lg md:text-xl leading-snug transition-colors duration-200"
            style={{ color: isOpen ? "var(--color-foreground)" : "var(--color-foreground)" }}
          >
            {item.question}
          </span>
        </div>

        {/* Toggle icon */}
        <motion.div
          className="flex-shrink-0 mt-1"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{
              background: isOpen ? "var(--color-accent)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${isOpen ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 1.5v8M1.5 5.5h8"
                stroke={isOpen ? "var(--color-background)" : "var(--color-muted)"}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-7 pl-9">
              {/* Accent left bar */}
              <div className="flex gap-5">
                <div
                  className="w-0.5 rounded-full flex-shrink-0 self-stretch"
                  style={{ background: "var(--color-accent)", opacity: 0.4 }}
                />
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ client }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = client.faq || [];

  if (!faqs.length) return null;

  const handleToggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="px-6 md:px-16 relative">
      <GlowOrb className="-bottom-20 right-0" size={400} opacity={0.04} />

      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Questions{" "}
            <span style={{ color: "var(--color-accent)" }}>answered.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-body text-sm md:text-right max-w-xs" style={{ color: "var(--color-muted)" }}>
            Can't find your answer?{" "}
            <a
              href="#cta"
              className="font-medium underline underline-offset-2 transition-colors duration-150"
              style={{ color: "var(--color-accent)" }}
            >
              Message me directly
            </a>
          </p>
        </Reveal>
      </div>

      {/* Accordion — full width, borderless */}
      <motion.div
        variants={staggerContainer}
        {...inViewProps}
      >
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={handleToggle}
          />
        ))}
        {/* Bottom divider */}
        <div className="w-full h-px" style={{ background: "var(--color-border)" }} />
      </motion.div>
    </section>
  );
}