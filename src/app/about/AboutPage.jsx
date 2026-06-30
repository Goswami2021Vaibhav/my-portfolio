'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    User, Briefcase, GraduationCap, Trophy,
    Download, MapPin, Calendar, ArrowUpRight,
    Code2, Database, Server, Globe, Layers
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'

const experience = [
    {
        role: "Full Stack Developer",
        company: "Digicrowd Solution",
        period: "Jan 2023 – Mar 2025",
        type: "Full-time",
        color: "from-accent/10",
        points: [
            "Developed 4 business management systems (office, school, grocery, restaurant) using React.js, Next.js, Node.js, and MySQL.",
            "Built an e-commerce platform with Next.js and Node.js, including REST APIs for catalog, cart, and checkout.",
            "Reduced backend response times by ~25% through Redis caching and query optimization.",
            "Deployed applications on Linux VPS using Dokploy across 6+ client projects.",
        ]
    },
]

const skills = [
    {
        category: "Frontend",
        icon: <Globe size={16} />,
        items: ["React.js", "Next.js", "Redux", "Zustand", "JavaScript", "TypeScript", "Tailwind CSS", "Shadcn UI"]
    },
    {
        category: "Backend",
        icon: <Code2 size={16} />,
        items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
        category: "Database",
        icon: <Database size={16} />,
        items: ["MongoDB", "MySQL", "Redis"]
    },
    {
        category: "DevOps & Tools",
        icon: <Server size={16} />,
        items: ["Git", "GitHub", "Linux VPS", "Dokploy"]
    },
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* ── Header ── */}
                <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
                        >
                            <User size={12} /> About Me
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]"
                        >
                            Developer. <br />
                            <span className="text-accent italic">Problem Solver.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-500 text-xl leading-relaxed border-l-2 border-zinc-800 pl-6 max-w-2xl"
                        >
                            Full Stack MERN Developer with 3+ years of experience building scalable web applications, ERP systems, and e-commerce platforms from concept to deployment. I focus on delivering clean, maintainable, and high-performance software.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 mt-10"
                        >
                            <a
                                href="https://drive.google.com/file/d/1lekCtpoPtVu-nnDyKayHC3t2MvJttRcT/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-105"
                            >
                                <Download size={16} /> Download Resume
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-foreground font-medium text-sm px-7 py-3.5 rounded-full border border-border hover:bg-surface transition-all"
                            >
                                Get in Touch <ArrowUpRight size={16} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Quick Info Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-4 flex flex-col gap-4"
                    >
                        <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 flex flex-col gap-6">
                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-accent/30">
                                <Image src="/vaibhav-goswami.webp" alt="Vaibhav Goswami" fill className="object-cover scale-110" sizes="80px" />
                            </div>
                            <div>
                                <h2 className="font-display font-black text-2xl text-foreground">Vaibhav Goswami</h2>
                                <p className="text-accent text-sm font-bold uppercase tracking-widest mt-1">Full Stack Developer</p>
                            </div>
                            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
                                <div className="flex items-center gap-3 text-zinc-500 text-sm">
                                    <MapPin size={14} className="text-accent shrink-0" />
                                    Lucknow, Uttar Pradesh, India
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-green-500 text-[11px] font-black uppercase tracking-widest">Open to Full-Time Roles</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "3+", label: "Years Exp." },
                                { value: "20+", label: "Projects" },
                                { value: "10+", label: "Tech Stacks" },
                                { value: "8.3", label: "CGPA" },
                            ].map((stat, i) => (
                                <div key={i} className="p-5 rounded-[2rem] bg-zinc-900/20 border border-zinc-800 text-center hover:border-accent/30 transition-colors">
                                    <div className="text-2xl font-display font-black text-accent">{stat.value}</div>
                                    <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </header>

                {/* ── Experience ── */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <Briefcase size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-accent text-[10px] font-black uppercase tracking-widest">Career</p>
                            <h2 className="text-3xl font-display font-black text-foreground">Experience</h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${exp.color} to-transparent border border-zinc-800/50 hover:border-accent/30 transition-all duration-500`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl font-display font-black text-foreground">{exp.role}</h3>
                                        <p className="text-accent font-bold text-sm mt-1">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                                        <span className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
                                            <Calendar size={12} /> {exp.period}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest">
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-3">
                                    {exp.points.map((point, j) => (
                                        <li key={j} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                                            <div className="size-1.5 rounded-full bg-accent/60 mt-2 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Skills ── */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <Layers size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-accent text-[10px] font-black uppercase tracking-widest">Stack</p>
                            <h2 className="text-3xl font-display font-black text-foreground">Technical Skills</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 hover:border-accent/30 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-accent">
                                        {group.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{group.category}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item, j) => (
                                        <span key={j} className="px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs font-bold">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Education & Achievement ── */}
                <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 hover:border-accent/30 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                                <GraduationCap size={20} className="text-accent" />
                            </div>
                            <div>
                                <p className="text-accent text-[10px] font-black uppercase tracking-widest">Education</p>
                                <h2 className="text-2xl font-display font-black text-foreground">Degree</h2>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">B.Tech in Computer Science & Engineering</h3>
                        <p className="text-zinc-500 text-sm mb-4">Khwaja Moinuddin Chishti Language University, Lucknow</p>
                        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                            <span className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
                                <Calendar size={12} /> 2020 – 2024
                            </span>
                            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black">
                                CGPA 8.3
                            </span>
                        </div>
                    </motion.div>

                    {/* Achievement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-accent/5 to-transparent border border-zinc-800/50 hover:border-accent/30 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                                <Trophy size={20} className="text-accent" />
                            </div>
                            <div>
                                <p className="text-accent text-[10px] font-black uppercase tracking-widest">Achievement</p>
                                <h2 className="text-2xl font-display font-black text-foreground">Recognition</h2>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-5xl font-display font-black text-accent shrink-0">6×</div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-1">Best Employee of the Month</h3>
                                <p className="text-zinc-500 text-sm">Awarded 6 times at Digicrowd Solution for consistent delivery and impact.</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ── Why Work With Me ── */}
                <WhyWorkWithMe />

            </div>
        </main>
    )
}
