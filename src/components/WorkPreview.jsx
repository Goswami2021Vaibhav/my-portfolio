'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import projects from '@/data/projects.json'
import ProjectModal from './ProjectModal'
import Link from 'next/link'

const ProjectCard = ({ project, setSelectedProject }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['4deg', '-4deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-4deg', '4deg'])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1000px' }}
            className={`relative group flex flex-col rounded-[32px] border border-border bg-surface/20 overflow-hidden transition-all duration-500 hover:border-accent/30 hover:bg-surface/40 ${project.large ? 'md:col-span-2 md:row-span-2 md:h-[650px] h-[350px]' : 'h-[350px] md:h-[325px]'
                }`}
        >
            {/* 1. Thumbnail Section */}
            <div className={`relative w-full overflow-hidden bg-muted/5 ${project.large ? 'h-[68%]' : 'h-[55%]'
                }`}>
                <div className="absolute inset-0 p-4 pb-0">
                    <div className="relative w-full h-full overflow-hidden rounded-t-2xl border-x border-t border-border/50 shadow-2xl">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                        />

                        {/* Action Button: Absolute Centered on Hover */}
                        <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/10 backdrop-blur-[2px]">
                            <button
                                type='button'
                                className="flex cursor-pointer items-center gap-2 bg-accent text-background font-black text-[11px] uppercase tracking-widest px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
                                onClick={() => setSelectedProject(project)}
                            >
                                View Details <ArrowUpRight size={14} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Content Section */}
            <div
                className="flex-1 p-5 md:p-7 flex flex-col justify-center relative z-10"
                style={{ transform: 'translateZ(30px)' }}
            >
                {/* Tags back above the title */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[9px] font-bold text-accent uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="text-[9px] font-bold text-muted/50 uppercase self-center">
                            +{project.techStack.length - 3}
                        </span>
                    )}
                </div>

                <h3 className={`font-display font-black text-foreground group-hover:text-accent transition-colors leading-tight ${project.large ? 'text-xl md:text-4xl mb-2' : 'text-xl mb-1'
                    }`}>
                    {project.title}
                </h3>

                <p className={`font-body text-muted leading-relaxed line-clamp-2 ${project.large ? 'text-base max-w-xl' : 'text-[12px]'
                    }`}>
                    {project.summary}
                </p>
            </div>
        </motion.div>
    )
}
export default function WorkPreview() {
    const [selectedProject, setSelectedProject] = useState(null)
    const featuredProjects = projects.filter(project => project.featured).slice(0, 3) // Get top 6 featured projects
    const newFeaturedProjects = featuredProjects.map((project, i) => ({
        ...project,
        large: i === 0 // Make the first project larger for visual hierarchy
    }))

    return (
        <section id="work" className="pt-28 md:px-0 px-5 bg-background relative overflow-hidden">
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:mb-20 mb-10">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-accent font-body font-bold text-xs uppercase block tracking-wider"
                        >
                            Recent Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-display font-black text-4xl md:text-6xl text-foreground"
                        >
                            Work Preview<span className="text-accent">.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-muted text-lg max-w-sm border-l-2 border-border pl-6"
                    >
                        Crafting digital experiences with modern stacks including <span className="text-foreground">MERN</span>, <span className="text-foreground">Next.js</span>, <span className="text-foreground">Laravel</span> and <span className="text-foreground">Shopify</span>.
                    </motion.p>
                </header>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {newFeaturedProjects.map((project, i) => (
                        <ProjectCard key={i} project={project} setSelectedProject={setSelectedProject} />
                    ))}
                </div>


                {/* Call to action */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:mt-24 mt-10 flex justify-center"
                >
                    <Link
                        href="/work"
                        className="group relative flex items-center gap-4 px-8 py-4 rounded-full bg-surface/40 backdrop-blur-md border border-border hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-accent/10"
                    >
                        {/* Subtle inner glow for depth */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <span className="relative z-10 font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                            View all projects
                        </span>

                        <span className="relative z-10 w-11 h-11 rounded-full bg-surface-2 border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all duration-300 group-hover:rotate-45">
                            <ArrowUpRight size={22} />
                        </span>
                    </Link>
                </motion.div>
            </div>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        </section>
    )
}