'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

// Sample projects based on your current work history
const projects = [
    {
        title: 'School ERP System',
        description: 'A comprehensive management suite for schools featuring automated fee management, student ledgers, and printable reports.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
        image: '/erp-preview.webp',
        link: '#',
        large: true
    },
    {
        title: 'Traders Mart',
        description: 'B2B marketplace platform designed for high-performance commerce and streamlined vendor management.',
        tech: ['Laravel', 'PHP', 'MySQL'],
        image: '/traders-mart.webp',
        link: '#',
        large: false
    },
    {
        title: 'Gesture-UI Graphics',
        description: 'Interactive 3D particle systems using Three.js and MediaPipe for hand-gesture controlled interfaces.',
        tech: ['Three.js', 'React', 'MediaPipe'],
        image: '/gesture-ui.webp',
        link: '#',
        large: false
    }
]

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth springs for the 3D tilt effect
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    // Transform mouse position into rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg'])

    // Spotlight position state
    const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Set spotlight coordinates
        setSpotlightPos({ x: mouseX, y: mouseY })

        // Set motion values for tilt
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
            className={`relative group rounded-[32px] border border-border bg-surface/30 overflow-hidden transition-colors duration-500 hover:border-accent/30 ${project.large ? 'md:col-span-2 md:row-span-2 min-h-[450px]' : 'min-h-[300px]'
                }`}
        >
            {/* Background Media Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background/80 z-10 group-hover:bg-background/60 transition-colors duration-500" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Mouse Spotlight */}
                <div
                    className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(245, 158, 11, 0.1), transparent 80%)`
                    }}
                />
            </div>

            {/* Content Layer */}
            <div
                className="relative z-30 h-full p-8 md:p-10 flex flex-col justify-end"
                style={{ transform: 'translateZ(40px)' }} // Push content forward in 3D space
            >
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-surface-2/80 border border-border text-[10px] font-bold text-accent uppercase">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="font-display font-black text-3xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                <p className="font-body text-muted text-sm md:text-base max-w-md leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href={project.link}
                        className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-background font-body font-bold text-xs px-5 py-3 rounded-xl transition-all hover:scale-105"
                    >
                        Live Demo <ExternalLink size={14} />
                    </a>

                </div>
            </div>
        </motion.div>
    )
}

export default function WorkPreview() {
    return (
        <section id="work" className="pt-28 md:px-0 px-5 bg-background relative overflow-hidden">
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
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
                            className="font-display font-black text-5xl md:text-6xl text-foreground"
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>

                {/* Call to action */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 flex justify-center"
                >
                    <a
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
                    </a>
                </motion.div>
            </div>
        </section>
    )
}