'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FinalCTA() {
    const socials = [
        {
            name: 'LinkedIn',
            href: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
            icon: '/linkedin.svg'
        },
        {
            name: 'WhatsApp',
            href: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
            icon: '/whatsapp.svg'
        },
        {
            name: 'Instagram',
            href: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
            icon: '/instagram.svg'
        }

    ]

    return (
        <section className="py-24 md:px-0 px-5 max-w-7xl mx-auto">
            <div className="relative rounded-[3rem] bg-zinc-900 border border-zinc-800 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 px-8 py-20 md:p-24 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-8 p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 w-fit"
                    >
                        <MessageSquare className="text-accent w-8 h-8" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-7xl font-display font-bold text-foreground mb-8 tracking-tight"
                    >
                        Let's build something <br />
                        <span className="text-accent italic text-glow">great together.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
                    >
                        I'm looking to join a team where I can contribute across the full stack—from <b className='text-foreground'>architecting
                            scalable backends</b> to shipping polished, performant frontends. I write code that lasts and
                        collaborates well.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
                    >
                        <Link href='/contact' className="px-10 py-5 bg-accent text-background font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-accent/90 transition-all hover:scale-105 group">
                            Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href='/work' className="px-10 py-5 bg-zinc-800 text-foreground font-bold rounded-2xl border border-zinc-700 hover:bg-zinc-700 transition-all">
                            View My Work
                        </Link>
                    </motion.div>

                    {/* Social Links / Footer Lite */}
                    <div className="mt-20 pt-12 border-t border-white/5 w-full flex flex-col md:row items-center justify-between gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            <span className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">
                                Open to full-time opportunities
                            </span>
                        </div>

                        <div className="flex items-center gap-6">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="block p-2 hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={56}
                                        height={56}
                                        className="size-14 object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}