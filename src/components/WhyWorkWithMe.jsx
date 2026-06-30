'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Zap, MessageSquare, Code2, Rocket, LayoutGrid, Globe } from 'lucide-react'

const advantages = [
  {
    title: "Production MERN Experience",
    description: "3+ years shipping real products with React, Next.js, Node.js, Express, and MongoDB. Currently maintaining 15+ REST APIs serving a marketplace with 4,000+ buyers and 2,000+ suppliers.",
    icon: <LayoutGrid size={24} />,
    tag: "MERN Stack"
  },
  {
    title: "Complex System Builder",
    description: "Delivered ERP and business management platforms with 15–20+ modules—HR, payroll, attendance, exams, transport, role-based access—for real users at scale, not toy projects.",
    icon: <Cpu size={24} />,
    tag: "Systems"
  },
  {
    title: "Performance-Driven",
    description: "Reduced backend response times by ~25% through Redis caching and query optimization. Maintained 99%+ uptime on self-managed Linux VPS across multiple production deployments.",
    icon: <Zap size={24} />,
    tag: "Efficiency"
  },
  {
    title: "Full-Cycle Ownership",
    description: "I take work from API design to production deployment using Dokploy on Linux VPS. I don't hand off—I own the delivery and monitor what I ship.",
    icon: <Rocket size={24} />,
    tag: "DevOps"
  }
]

export default function WhyWorkWithMe() {
  return (
    <section className="pt-28 bg-background relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block"
          >
            Why Hire Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-foreground"
          >
            What I Bring to <span className="text-accent italic">Your Team.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-zinc-900/10 border border-zinc-800/40 hover:border-accent/30 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-xl">
                {item.icon}
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                    {item.tag}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 rounded-[3rem] bg-zinc-900/20 border border-zinc-800/40 flex flex-wrap justify-around items-center gap-8 text-center"
        >
          {[
            { icon: <ShieldCheck size={20} />, label: "JWT & RBAC Auth" },
            { icon: <Rocket size={20} />, label: "VPS Deployment" },
            { icon: <Globe size={20} />, label: "REST API Design" }
          ].map((feature, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <div className="text-accent mb-2">{feature.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{feature.label}</span>
              </div>
              {i < 2 && <div className="h-8 w-px bg-zinc-800 hidden md:block" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}