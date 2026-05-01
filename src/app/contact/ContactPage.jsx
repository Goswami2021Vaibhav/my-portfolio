'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowUpRight, Globe, Terminal, MessageCircle } from 'lucide-react'

// Custom SVGs for Brands (since Lucide doesn't provide them)
const BrandIcons = {
    LinkedIn: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    ),
    Instagram: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
    ),
    WhatsApp: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.284 1.389 5.083 1.391 5.446.002 9.879-4.429 9.882-9.875.001-2.639-1.027-5.122-2.895-6.991-1.868-1.868-4.353-2.896-6.991-2.897-5.447 0-9.88 4.43-9.883 9.876-.001 1.839.511 3.634 1.48 5.188l-1.004 3.667 3.756-.985zm11.387-5.464c-.31-.156-1.832-.905-2.112-1.006-.28-.101-.484-.151-.688.156-.204.307-.79.997-.969 1.201-.178.204-.357.229-.668.073-.31-.156-1.31-.483-2.495-1.539-.922-.821-1.544-1.835-1.724-2.145-.18-.31-.019-.477.136-.632.14-.139.31-.361.466-.541.156-.18.208-.307.311-.512.103-.204.052-.385-.026-.541-.078-.156-.688-1.658-.943-2.273-.248-.599-.5-.518-.688-.527-.178-.008-.382-.01-.585-.01s-.535.076-.816.383c-.28.307-1.071 1.047-1.071 2.553s1.097 2.96 1.25 3.164c.153.204 2.16 3.298 5.23 4.627.731.316 1.302.504 1.746.645.734.234 1.402.201 1.93.122.589-.088 1.832-.748 2.088-1.472.256-.723.256-1.343.18-1.471-.076-.128-.28-.204-.591-.359z" /></svg>
    )
}

const contactChannels = [
    {
        title: "Email Me",
        value: "contact@vaibhavgoswami.com",
        icon: <Mail className="text-accent" size={28} />,
        href: "mailto:contact@vaibhavgoswami.com",
        tag: "Primary"
    },
    {
        title: "Phone / WhatsApp",
        value: "+91 75189 25559",
        icon: <Phone className="text-accent" size={28} />,
        href: "https://wa.me/917518925559",
        tag: "Direct"
    }
]

const socials = [
    { name: "LinkedIn", icon: <BrandIcons.LinkedIn />, href: process.env.NEXT_PUBLIC_LINKEDIN_LINK, color: "hover:text-blue-500" },
    { name: "WhatsApp", icon: <BrandIcons.WhatsApp />, href: process.env.NEXT_PUBLIC_WHATSAPP_LINK, color: "hover:text-green-500" },
    { name: "Instagram", icon: <BrandIcons.Instagram />, href: process.env.NEXT_PUBLIC_INSTAGRAM_LINK, color: "hover:text-pink-500" }
]

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* ── Header ── */}
                <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 relative">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
                        >
                            <Globe size={12} /> Worldwide Availability
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-display font-black text-foreground mb-8"
                        >
                            Let's Start a <br />
                            <span className="text-accent italic">Conversation.</span>
                        </motion.h1>

                        <p className="text-zinc-500 text-xl leading-relaxed border-l-2 border-zinc-800 pl-6 max-w-2xl">
                            Whether you're looking for a MERN stack specialist, a Shopify developer, or a strategic tech partner—I'm ready to help you scale.
                        </p>

                    </div>
 
                    <div className="hidden lg:flex lg:col-span-4 justify-end items-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative p-1 bg-zinc-900/50 rounded-[2.5rem] border border-zinc-800 backdrop-blur-sm group hover:border-accent/30 transition-colors duration-500"
                        >
                            <div className="p-8 flex flex-col items-center text-center gap-4">
                                {/* Dynamic Status Indicator */}
                                <div className="relative size-20">
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-800 animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <MessageCircle className="text-accent group-hover:scale-110 transition-transform" size={32} />
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Response Time</div>
                                    <div className="text-2xl font-display font-black text-foreground tracking-tighter">
                                        &lt; 12 <span className="text-accent">Hours</span>
                                    </div>
                                </div>

                                <div className="h-px w-12 bg-zinc-800" />

                                <div className="space-y-1">
                                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Current Status</div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-bold text-emerald-500 uppercase">Available for Projects</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Background Glow */}
                        <div className="absolute -z-10 size-64 bg-accent/5 blur-[100px] rounded-full" />
                    </div>
                </header>

                {/* ── Contact Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {contactChannels.map((channel, idx) => (
                        <motion.a
                            key={idx}
                            href={channel.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group sm:p-10 p-5 sm:rounded-[3rem] rounded-3xl bg-zinc-900/20 border border-zinc-800/50 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between sm:h-[250px] h-[200px]"
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 group-hover:border-accent/20 transition-all">
                                    {channel.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-accent/10 text-accent border border-accent/20">
                                    {channel.tag}
                                </span>
                            </div>

                            <div>
                                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-2 block">{channel.title}</span>
                                <div className="flex items-center justify-between">
                                    <h3 className="sm:text-2xl text-xl md:text-3xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
                                        {channel.value}
                                    </h3>
                                    <ArrowUpRight className="text-zinc-800 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* ── Socials & Footer ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 md:text-start text-center">Social Connections</h4>
                        <div className="flex md:justify-start justify-center gap-6">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5 }}
                                    className={`text-zinc-600 ${social.color} transition-all duration-300`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="p-12 rounded-[3.5rem] bg-zinc-900/30 border border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                            <div className="flex items-center gap-4">
                                <div className="size-3 rounded-full bg-accent animate-pulse" />
                                <span className="text-foreground font-black uppercase tracking-widest text-xs">Currently in Lucknow, UP, India</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-[0.1em]">
                                <Terminal size={14} className="text-accent" /> Professional Tech Partnership
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}