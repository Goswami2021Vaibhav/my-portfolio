"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, fadeIn } from "./variants";
import { DotGrid, GlowOrb } from "./Primitives";

export function Hero({ client }) {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 500], [0, 120]);
  const glowOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="relative flex flex-col justify-center px-6 md:px-16 md:pt-32 pt-24 overflow-hidden">
      <DotGrid />
      <GlowOrb className="-top-20 left-1/2 -translate-x-1/2" size={700} opacity={0.1} />

      {/* Parallax glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(245,158,11,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          y: glowY,
          opacity: glowOpacity,
        }}
      />


      <motion.div style={{ y: contentY }} className="relative z-10">
        {/* Badge */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center w-fit gap-2 sm:gap-0 mb-10"
          variants={fadeIn}
          custom={0.1}
          initial="hidden"
          animate="visible"
        >
          {/* Label pill */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border w-fit"
            style={{ borderColor: "rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.05)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "var(--color-accent)" }} />
            <span className="font-body text-xs tracking-widest uppercase whitespace-nowrap" style={{ color: "var(--color-accent)" }}>
              Private Proposal
            </span>
          </div>

          {/* Separator — visible only on sm+ */}
          <span
            className="hidden sm:block w-px h-4 mx-3"
            style={{ background: "rgba(245,158,11,0.25)" }}
          />

          {/* Company name */}
          <span className="font-body text-xs pl-1 sm:pl-0 whitespace-nowrap" style={{ color: "var(--color-muted)" }}>
            Prepared for{" "}
            <span style={{ color: "var(--color-foreground)" }}>{client.companyName}</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold leading-[0.95] mb-8"
          style={{ fontSize: "clamp(2rem, 9vw, 5rem)" }}
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          animate="visible"
        >
          Your{" "}
          <span className="relative inline-block">
            <span style={{ color: "var(--color-accent)" }}>{client.industry}</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 rounded-full"
              style={{ background: "var(--color-accent)", width: "100%" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
          <br />
          system, engineered
          <br />
          <span style={{ color: "var(--color-muted)", fontStyle: "italic" }}>to scale.</span>
        </motion.h1>

        {/* Pain point */}
        <motion.p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl mb-12"
          style={{ color: "var(--color-muted)" }}
          variants={fadeIn}
          custom={0.5}
          initial="hidden"
          animate="visible"
        >
          {client.painPoint}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-4 flex-wrap"
          variants={fadeIn}
          custom={0.65}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#investment"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-body font-semibold text-sm"
            style={{ background: "var(--color-accent)", color: "var(--color-background)" }}
            whileHover={{ scale: 1.04, backgroundColor: "var(--color-accent-hover)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            View investment
            <motion.svg
              width="14" height="14" viewBox="0 0 16 16" fill="none"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.a>

        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-background), transparent)" }}
      />
    </section>
  );
}