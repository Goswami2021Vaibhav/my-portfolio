"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, inViewProps } from "./variants";
import { Reveal, SectionLabel, GlowOrb, LineGrid } from "./Primitives";

export function Investment({ client }) {
  return (
    <section className="px-6 md:px-16" id="investment">
      <Reveal>
        <SectionLabel>Your investment</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Transparent pricing.{" "}
          <span style={{ color: "var(--color-accent)" }}>No surprises.</span>
        </h2>
      </Reveal>

      {/* Main pricing card */}
      <motion.div
        className="relative rounded-3xl overflow-hidden mb-5"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        variants={fadeUp}
        custom={0.1}
        {...inViewProps}
      >
        <LineGrid />
        <GlowOrb className="-top-20 -right-20" size={400} opacity={0.06} />

        <div className="relative z-10 p-8 md:p-12">
          {/* Price + payment row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div>
              <p className="font-body text-sm mb-3" style={{ color: "var(--color-muted)" }}>
                {client.recommendedPackage} Package — {client.companyName}
              </p>
              <motion.p
                className="font-display font-bold leading-none"
                style={{ color: "var(--color-foreground)", fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                {client.quotedPrice}
              </motion.p>
            </div>

            {/* Payment structure pill */}
            <motion.div
              className="inline-flex flex-col gap-1 px-6 py-4 rounded-2xl"
              style={{
                background: "rgba(245,158,11,0.07)",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
              whileHover={{ borderColor: "rgba(245,158,11,0.4)" }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-body text-xs" style={{ color: "var(--color-muted)" }}>
                Payment structure
              </p>
              <p className="font-body text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                {client.paymentStructure}
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-8" style={{ background: "var(--color-border)" }} />

          {/* What happens next */}
          <div>
            <p
              className="font-body text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--color-muted)" }}
            >
              What happens after you say yes
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  step: "01",
                  text: "Simple contract & invoice sent — 5 minutes to sign.",
                },
                {
                  step: "02",
                  text: "Kickoff call scheduled within 48 hours of first payment.",
                },
                {
                  step: "03",
                  text: "First design review delivered within 7 days.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                  }}
                  variants={staggerItem}
                >
                  <span
                    className="font-display font-bold text-sm flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.step}
                  </span>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Expiry notice */}
      {client.proposalExpiry && (
        <Reveal delay={0.2}>
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{
              background: "rgba(245,158,11,0.05)",
              border: "1px solid rgba(245,158,11,0.15)",
            }}
            whileHover={{ borderColor: "rgba(245,158,11,0.35)" }}
            transition={{ duration: 0.2 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#F59E0B" strokeWidth="1.2" />
              <path d="M7 4v3l2 2" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="font-body text-sm" style={{ color: "var(--color-accent)" }}>
              Pricing valid until {client.proposalExpiry}
            </p>
          </motion.div>
        </Reveal>
      )}
    </section>
  );
}