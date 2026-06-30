'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Database,
  ShoppingCart,
  Code2,
  Server,
  ArrowUpRight,
  Terminal
} from 'lucide-react'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Link from 'next/link'

const serviceCategories = [
  {
    title: "Full-Stack Web Development",
    description: "Building end-to-end web apps with React, Next.js, Node.js, and Express — clean architecture, reusable components, and maintainable codebases from day one.",
    icon: <Globe className="text-accent" size={28} />,
    tags: ["React.js", "Next.js", "Node.js", "Express.js"],
    size: "lg",
    color: "from-orange-500/5"
  },
  {
    title: "ERP & Business Systems",
    description: "Delivered 20+ module platforms covering HR, payroll, attendance, exams, transport, and RBAC for real organizations with 1,500+ active users.",
    icon: <Database className="text-accent" size={28} />,
    tags: ["MERN", "MySQL", "Redux", "Shadcn UI"],
    size: "md",
    color: "from-blue-500/5"
  },
  {
    title: "E-commerce Development",
    description: "Built scalable stores with product catalog, cart, order flow, payment integration, inventory management, and JWT-authenticated APIs.",
    icon: <ShoppingCart className="text-accent" size={28} />,
    tags: ["Next.js", "Node.js", "MongoDB"],
    size: "sm",
    color: "from-green-500/5"
  },
  {
    title: "REST API & Backend Engineering",
    description: "Designed and maintained 15+ production REST APIs with Express and Node.js. Optimized query performance with Redis caching — achieving ~25% faster response times.",
    icon: <Code2 className="text-accent" size={28} />,
    tags: ["Node.js", "Express.js", "Redis", "MongoDB"],
    size: "sm",
    color: "from-yellow-500/5"
  },
  {
    title: "Deployment & DevOps",
    description: "Self-managed Linux VPS infrastructure using Dokploy across 6+ projects. Maintained 99%+ uptime on production applications end-to-end.",
    icon: <Server className="text-accent" size={28} />,
    tags: ["Linux VPS", "Dokploy", "Git", "GitHub"],
    size: "md",
    color: "from-cyan-500/5"
  },
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
              <Terminal size={12} /> Web & Software Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 tracking-tighter"
            >
              My <span className="text-accent italic">Expertise.</span>
            </motion.h1>

            <p className="text-zinc-500 text-xl leading-relaxed border-l-2 border-zinc-800 pl-6 max-w-xl">
              I specialize in web and custom software development — building full-stack products, complex ERPs, and e-commerce platforms that work in production.
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
                  <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Open to Full-Time Roles</span>
                </div>
                <h4 className="text-xl font-bold text-foreground">Let's work together.</h4>
              </div>
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}  className="size-12 rounded-full bg-accent flex items-center justify-center text-background group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={24} strokeWidth={3} />
              </Link>
            </motion.div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800 text-center group hover:bg-zinc-900/40 transition-colors">
                <div className="text-3xl font-display font-black text-foreground group-hover:text-accent transition-colors">3+</div>
                <div className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Years Exp.</div>
              </div>
              <div className="p-6 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800 text-center group hover:bg-zinc-900/40 transition-colors">
                <div className="text-3xl font-display font-black text-foreground group-hover:text-accent transition-colors">20+</div>
                <div className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Projects</div>
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
            Looking for a <span className="text-accent italic">Developer?</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I'm open to full-time roles in web and software development. If you need someone who can own a product end-to-end, let's talk.
          </p>
          <a href={process.env.NEXT_PUBLIC_WHATSAPP_LINK} className="sm:px-10 px-8 sm:py-5 py-3 rounded-full bg-accent text-background font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform shadow-2xl shadow-accent/20">
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  )
}