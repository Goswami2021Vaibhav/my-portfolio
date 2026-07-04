'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Lock, Terminal } from 'lucide-react'
import Image from 'next/image'
import TechMarquee from '@/components/TechMarquee'
import projects from '@/data/projects.json'
import ProjectModal from '@/components/ProjectModal'

const stats = [
  { label: "Years Exp.", value: "3+" },
  { label: "Projects", value: "20+" },
  { label: "Tech Stacks", value: "10+" },
  { label: "Domains", value: "5" },
]

export const metadata = {
  title: 'Work & Projects | Vaibhav Goswami',
  description: 'Explore my portfolio — ecommerce platforms, School ERPs, and B2B marketplaces built with MERN and Next.js.',
}

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <Terminal size={14} className="text-accent" /> Engineering Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-display font-black text-foreground mb-8 leading-[0.9]"
            >
              Things I've <span className="text-accent italic">Built.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-accent/30 pl-6"
            >
              Real projects shipped in production — ERPs, marketplaces, e-commerce platforms, and developer tools built with{' '}
              <span className="text-zinc-200">MERN</span> and{' '}
              <span className="text-zinc-200">Next.js</span>.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col justify-center items-center text-center group hover:border-accent/30 transition-all hover:bg-zinc-900/40"
              >
                <span className="text-4xl font-display font-black text-accent group-hover:scale-110 transition-transform">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </header>

        {/* ── Marquee ── */}
        <div className="mb-24">
          <TechMarquee />
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative md:rounded-[3.5rem] rounded-[1.5rem] bg-zinc-900/10 border border-zinc-800/30 overflow-hidden hover:border-accent/40 transition-all duration-700 shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative md:h-[400px] h-[300px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-600 font-display font-black text-6xl tracking-tighter select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute md:top-10 md:left-10 top-5 left-5 z-20">
                  <span className="px-5 py-2 rounded-full bg-black/80 backdrop-blur-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-accent shadow-2xl">
                    {project.type}
                  </span>
                </div>


              </div>

              {/* Content */}
              <div className="md:p-12 p-5 relative z-20 -mt-20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="sm:text-4xl text-2xl font-display font-bold text-foreground tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-base leading-relaxed max-w-sm line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Link Button — conditional on link.type */}
                  {project?.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="md:size-14 size-10 rounded-full bg-accent flex items-center justify-center text-background hover:scale-110 transition-all shadow-lg shadow-accent/20 flex-shrink-0"
                    >
                      <ExternalLink size={20} strokeWidth={3} />
                    </a>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full bg-zinc-900/60 text-zinc-400 border border-zinc-800/50 group-hover:border-accent/20 transition-colors"
                    >
                      <div className="size-1.5 rounded-full bg-accent/60" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}