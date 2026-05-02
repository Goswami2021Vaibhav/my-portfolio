"use client";

import { motion } from "framer-motion";
import { fadeUp, inViewProps } from "./variants";
import { Reveal, SectionLabel, GlowOrb, CornerAccent } from "./Primitives";
import { MY_NAME, MY_ROLE, MY_INITIALS } from "./constants";

export function PersonalNote({ client }) {
  return (
    <section className="px-6 md:px-16">
      <Reveal>
        <SectionLabel>A note from {MY_NAME}</SectionLabel>
      </Reveal>

      <motion.div
        className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
        variants={fadeUp}
        custom={0.1}
        {...inViewProps}
        whileHover={{ borderColor: "rgba(245,158,11,0.2)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Background effects */}
        <GlowOrb className="-top-20 -right-20" size={300} opacity={0.05} />
        <CornerAccent position="top-right" />

        {/* Giant decorative quote */}
        <div
          className="absolute top-4 right-10 font-display leading-none select-none"
          style={{ fontSize: "10rem", color: "rgba(245,158,11,0.06)", lineHeight: 1 }}
        >
          "
        </div>

        {/* Note text */}
        <Reveal delay={0.1}>
          <p
            className="font-body text-lg md:text-xl leading-relaxed mb-10 max-w-3xl relative z-10"
            style={{ color: "var(--color-foreground)" }}
          >
            {client.personalNote}
          </p>
        </Reveal>

        {/* Signature row */}
        <Reveal delay={0.2}>
          <div className="flex md:flex-nowrap flex-wrap items-center gap-4 relative z-10">
            <motion.div
              className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
              style={{ background: "var(--color-accent)", color: "var(--color-background)" }}
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {MY_INITIALS}
            </motion.div>
            <div>
              <p className="font-body font-semibold text-sm" style={{ color: "var(--color-foreground)" }}>
                {MY_NAME}
              </p>
              <p className="font-body text-xs" style={{ color: "var(--color-muted)" }}>
                {MY_ROLE}
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-8 mx-2 md:block hidden" style={{ background: "var(--color-border)" }} />

            {/* Availability pill */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-body text-xs" style={{ color: "rgb(134,239,172)" }}>
                Available for new projects
              </span>
            </div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}