'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { MessageCircle, ArrowRight, Zap, Globe } from 'lucide-react'

const stats = [
    { value: '4+', label: 'Years Exp.' },
    { value: '80+', label: 'Projects' },
    { value: '50+', label: 'Happy Clients' },
    { value: '99%', label: 'Satisfaction' },
]

// Tech stack reorganized: Modern tech first, WordPress added
const techStack = [
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'Shopify', icon: 'shopify' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'PHP', icon: 'php' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">

            {/* Background grid texture */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)' }} />

            <div className="relative z-10 w-full max-w-7xl mx-auto  md:px-0 px-5 pt-28 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* ── Left Column ── */}
                    <div className="flex flex-col">
                        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
                            className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-6 w-fit">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-muted text-xs font-body tracking-wide uppercase">Available for new projects</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp} initial="hidden" animate="show" custom={1}
                            className="font-display font-extrabold leading-[1.1] tracking-tight text-foreground mb-5"
                            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
                        >
                            Full Stack Developer <br />
                            {/* Prevents shifting by using fixed height and nowrap */}
                            <span className="text-accent inline-block h-[1.2em] whitespace-nowrap overflow-hidden">
                                <Typewriter
                                    options={{
                                        strings: [
                                            '& MERN Stack Dev',
                                            '& Next.js Specialist',
                                            '& Shopify Expert',
                                            '& WordPress Developer',
                                            '& Laravel Architect',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        deleteSpeed: 30,
                                    }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
                            className="font-body text-muted text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
                            I build high-performance digital solutions—specializing in
                            <span className="text-foreground"> modern web apps</span> and
                            <span className="text-foreground"> scalable e-commerce</span> platforms that drive growth.
                        </motion.p>

                        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap gap-4 mb-12">
                            <Link href="/work" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background font-body font-bold text-sm md:px-8 md:py-4 px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
                                View My Work <ArrowRight size={18} />
                            </Link>
                            <a href={process.env.NEXT_PUBLIC_WHATSAPP_LINK} className="inline-flex items-center gap-2 text-foreground font-body font-medium text-sm md:px-8 md:py-4 px-6 py-3 rounded-full border border-border hover:bg-surface transition-all active:scale-95">
                                <MessageCircle size={18} /> Let's Talk
                            </a>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
                            className="grid md:grid-cols-4 grid-cols-2 pt-8 border-t border-border gap-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <div className="font-display font-black text-3xl text-accent">{stat.value}</div>
                                    <div className="font-body text-muted text-[10px] uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right Column — Profile Card ── */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            {/* Card - 350x400 */}
                            <div className="relative w-[350px] h-[400px] rounded-[48px] bg-surface/40 backdrop-blur-md border border-border/50 overflow-hidden flex flex-col items-center justify-center p-10 transition-all group-hover:border-accent/40 shadow-2xl">

                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-[100px]" />
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/5 rounded-tr-[80px]" />

                                {/* Main Avatar */}
                                <div className="relative w-40 h-40 mb-8">
                                    <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-20 scale-110" />
                                    <div className="relative w-full h-full rounded-full border-4 border-accent overflow-hidden bg-background shadow-inner">
                                        <Image
                                            src="/vaibhav-goswami.webp"
                                            alt="Vaibhav Goswami"
                                            width={160}
                                            height={160}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <h2 className="font-display font-black text-2xl text-foreground tracking-wide">
                                        Vaibhav Goswami
                                    </h2>
                                    <p className="font-body text-accent text-sm font-semibold tracking-wide mt-1 uppercase tracking-widest">
                                        Full Stack Developer
                                    </p>
                                </div>

                                {/* Happy Clients Section with Real Avatars */}
                                <div className="flex items-center gap-3 bg-background/60 border border-border/50 rounded-2xl px-5 py-2.5 backdrop-blur-sm">
                                    <div className="flex -space-x-3">
                                        {[
                                            "https://i.pravatar.cc/150?u=1",
                                            "https://i.pravatar.cc/150?u=2",
                                            "https://i.pravatar.cc/150?u=5"
                                        ].map((src, i) => (
                                            <div key={i} className="relative w-8 h-8 rounded-full border-2 border-surface overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                <Image
                                                    src={src}
                                                    alt="Client"
                                                    fill
                                                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                                                    sizes="32px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="font-body text-muted text-xs font-medium">50+ happy clients</span>
                                </div>
                            </div>

                            {/* Floating "Open to Work" */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute md:-bottom-4 md:-left-12 md:translate-x-0 -bottom-5 left-1/2 -translate-x-1/2 bg-accent text-background font-body text-xs font-black px-6 py-3 rounded-full flex items-center gap-2 shadow-xl shadow-accent/30"
                            >
                                <Zap size={14} fill="currentColor" /> OPEN TO WORK
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Tech Strip */}
            <div className="relative z-10 border-t border-border/50 bg-surface/60 backdrop-blur-xl py-6 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80 whitespace-nowrap">
                        Core Stack
                    </span>

                    {/* Mobile: Infinite Marquee | Desktop: Static Row */}
                    <div className="relative w-full overflow-hidden">
                        <div className="flex w-max md:w-full items-center gap-8 md:justify-between animate-marquee md:animate-none">
                            {/* We render the list twice on mobile to create 
                                     the seamless infinite loop effect 
                           */}
                            {[...techStack, { name: 'Meta Ads', icon: 'meta', isLucide: true }, ...techStack, { name: 'Meta Ads', icon: 'meta', isLucide: true }].map((tech, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-2.5 group cursor-default transition-opacity ${i >= techStack.length + 1 ? 'md:hidden' : 'flex'}`}
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
                                    <span className="font-body text-muted text-[11px] font-bold group-hover:text-foreground transition-colors uppercase tracking-widest">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Gradient Fades for Mobile (shades the edges of the scroll) */}
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background/80 to-transparent z-10 md:hidden" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background/80 to-transparent z-10 md:hidden" />
                    </div>
                </div>
            </div>
        </section>
    )
}