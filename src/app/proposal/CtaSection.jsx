"use client";

import { motion } from "framer-motion";

import { WHATSAPP_LINK } from "./constants";
import { DotGrid, GlowOrb } from "./Primitives";
import { fadeUp, inViewProps } from "./variants";

export function CtaSection({ client }) {
  return (
    <section className="px-6 md:px-16 pb-32" id="cta">
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{ background: "var(--color-accent)" }}
        variants={fadeUp}
        custom={0}
        {...inViewProps}
      >
        {/* Background texture */}
        <DotGrid className="opacity-10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 85%, rgba(0,0,0,0.15) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />

        {/* Decorative ring */}
        <div
          className="absolute -right-24 -top-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(0,0,0,0.08)" }}
        />
        <div
          className="absolute -right-12 -top-12 w-52 h-52 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(0,0,0,0.06)" }}
        />

        <div className="relative z-10 px-8 md:px-16 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Text */}
            <div className="max-w-xl">
              <motion.p
                className="font-body text-xs tracking-widest uppercase mb-4"
                style={{ color: "rgba(10,10,10,0.55)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Ready when you are
              </motion.p>
              <motion.h2
                className="font-display font-bold leading-[1.0] mb-4"
                style={{
                  color: "var(--color-background)",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Let's build this,
                <br />
                {client.clientName}.
              </motion.h2>
              <motion.p
                className="font-body text-base"
                style={{ color: "rgba(10,10,10,0.6)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                Skip the back-and-forth. Message me on WhatsApp and let's discuss
                your project in plain language.
              </motion.p>
            </div>

            {/* CTA button */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-semibold text-sm"
                style={{
                  background: "var(--color-background)",
                  color: "var(--color-foreground)",
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}