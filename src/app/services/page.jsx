'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Database,
  ShoppingCart,
  Zap,
  Smartphone,
  Palette,
  Search,
  TrendingUp,
  ArrowUpRight,
  Terminal
} from 'lucide-react'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Link from 'next/link'

const serviceCategories = [
  {
    title: "Custom Web Solutions",
    description: "High-performance, scalable web apps built with MERN & Next.js for seamless user experiences.",
    icon: <Globe className="text-accent" size={28} />,
    tags: ["MERN", "Next.js", "Laravel", "WordPress"],
    size: "lg",
    color: "from-orange-500/5"
  },
  {
    title: "Custom ERP & Business Automation",
    description: "Tailored internal systems to streamline operations and automate complex workflows.",
    icon: <Database className="text-accent" size={28} />,
    tags: ["MERN", "Next.js", "Laravel"],
    size: "md",
    color: "from-blue-500/5"
  },
  {
    title: "Custom Ecommerce",
    description: "Bespoke online stores designed to handle high traffic and complex sales logic.",
    icon: <ShoppingCart className="text-accent" size={28} />,
    tags: ["Next.js", "Shopify", "WooCommerce"],
    size: "sm",
    color: "from-green-500/5"
  },
  {
    title: "Shopify Growth",
    description: "Data-driven optimization and custom Liquid development to scale your Shopify store.",
    icon: <Zap className="text-accent" size={28} />,
    tags: ["Liquid", "Shopify", "Custom Themes"],
    size: "sm",
    color: "from-yellow-500/5"
  },
  {
    title: "App Development",
    description: "Lightweight, native-feel mobile applications for both iOS and Android.",
    icon: <Smartphone className="text-accent" size={28} />,
    tags: ["React Native", "Flutter"],
    size: "sm",
    color: "from-purple-500/5"
  },
  {
    title: "Brand Identity & UI/UX",
    description: "Strategic design systems that bridge the gap between beauty and usability.",
    icon: <Palette className="text-accent" size={28} />,
    tags: ["Figma", "Adobe XD", "Branding"],
    size: "md",
    color: "from-pink-500/5"
  },
  {
    title: "Search Engine Optimization",
    description: "Technical and on-page optimization strategies to dominate organic search rankings.",
    icon: <Search className="text-accent" size={28} />,
    tags: ["SEO", "Content Strategy", "Analytics"],
    size: "sm",
    color: "from-cyan-500/5"
  },
  {
    title: "Performance Marketing",
    description: "ROI-focused campaigns designed to scale your presence and drive conversions.",
    icon: <TrendingUp className="text-accent" size={28} />,
    tags: ["Meta", "Google Ads"],
    size: "sm",
    color: "from-red-500/5"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        {/* ── Header ── */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center sm:mb-24 mb-10">

          {/* Left Side: Branding & Context */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <Terminal size={12} /> Expert Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 tracking-tighter"
            >
              My <span className="text-accent italic">Services.</span>
            </motion.h1>

            <p className="text-zinc-500 text-xl leading-relaxed border-l-2 border-zinc-800 pl-6 max-w-xl">
              I offer a suite of creative and technical services grounded in clarity, crafted to express your unique business purpose.
            </p>
          </div>

          {/* Right Side: Trust & Availability Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-[3rem] bg-zinc-900/40 border border-zinc-800 flex items-center justify-between group hover:border-accent/30 transition-all shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Available for Projects</span>
                </div>
                <h4 className="text-xl font-bold text-foreground">Let's build something.</h4>
              </div>
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}  className="size-12 rounded-full bg-accent flex items-center justify-center text-background group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={24} strokeWidth={3} />
              </Link>
            </motion.div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800 text-center group hover:bg-zinc-900/40 transition-colors">
                <div className="text-3xl font-display font-black text-foreground group-hover:text-accent transition-colors">99%</div>
                <div className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Satisfaction</div>
              </div>
              <div className="p-6 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800 text-center group hover:bg-zinc-900/40 transition-colors">
                <div className="text-3xl font-display font-black text-foreground group-hover:text-accent transition-colors">50+</div>
                <div className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Happy Clients</div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Dynamic Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`
                group relative p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 
                hover:border-accent/40 transition-all duration-500 overflow-hidden flex flex-col
                ${service.size === 'lg' ? 'lg:col-span-2' : ''}
              `}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 group-hover:border-accent/20 transition-all duration-500 shadow-xl">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="text-zinc-700 group-hover:text-accent transition-colors" size={24} />
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-black/40 border border-zinc-800/50 text-zinc-400 group-hover:border-zinc-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <WhyWorkWithMe />

        {/* ── CTA Section ── */}
        <section className="mt-28 rounded-[3.5rem] bg-zinc-900/30 border border-zinc-800/50 sm:p-12 p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6">
            Ready to Grow your <span className="text-accent italic">Business?</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let's collaborate to transform your digital infrastructure into a high-converting, user-friendly powerhouse.
          </p>
          <a href={process.env.NEXT_PUBLIC_WHATSAPP_LINK} className="sm:px-10 px-8 sm:py-5 py-3 rounded-full bg-accent text-background font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform shadow-2xl shadow-accent/20">
            Get Started Today
          </a>
        </section>
      </div>
    </main>
  )
}