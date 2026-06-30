'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const techStack = [
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Redis', icon: 'redis' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
]

export default function TechMarquee() {
    return (
        <section className="relative z-10 border-y rounded-2xl border-border/50 bg-surface/60 backdrop-blur-xl py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-6 md:gap-12">
                
                {/* Section Title - Matching Hero Style */}
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80 whitespace-nowrap">
                    Core Stack
                </span>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Fades for a premium look */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/90 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/90 to-transparent z-10" />

                    <motion.div 
                        className="flex w-max items-center gap-12"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25,
                        }}
                    >
                        {/* Rendering twice for the seamless infinite loop */}
                        {[...techStack, ...techStack].map((tech, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 group cursor-default"
                            >
                                {tech.isLucide ? (
                                    <Globe
                                        size={18}
                                        className="text-muted group-hover:text-accent transition-all duration-300"
                                    />
                                ) : (
                                    <img
                                        src={`https://cdn.simpleicons.org/${tech.icon}/71717A`}
                                        alt={tech.name}
                                        className="w-5 h-5 transition-all duration-300 
                                        group-hover:[filter:invert(65%)_sepia(97%)_saturate(448%)_hue-rotate(357deg)_brightness(103%)_contrast(103%)]"
                                    />
                                )}
                                <span className="font-body text-muted text-[11px] font-bold group-hover:text-foreground transition-colors uppercase tracking-widest whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}