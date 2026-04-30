'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, ArrowUpRight, MessageSquareCode } from 'lucide-react'
 
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Director, Educational Trust",
    content: "The School ERP Vaibhav developed completely transformed our fee management. The automated ledger system saved our staff hundreds of hours. Truly a high-performance solution.",
    project: "School ERP System",
    avatar: "/avatars/client1.webp",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Founder, TechMart B2B",
    content: "Building a complex marketplace is tough, but Vaibhav's mastery of the MERN stack made it look easy. The admin panel is intuitive and the speed is incredible.",
    project: "Traders Mart",
    avatar: "/avatars/client2.webp",
    rating: 5
  },
  {
    name: "Amit Singh",
    role: "E-commerce Manager",
    content: "The custom Shopify Liquid development for our store increased our conversion rate by 20%. His technical and SEO knowledge is top-tier.",
    project: "Shopify Growth",
    avatar: "/avatars/client3.webp",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "Business Owner",
    content: "Reliable, transparent, and technically sound. The deployment via Dokploy was seamless and the ongoing support is excellent.",
    project: "Business Automation",
    avatar: "/avatars/client4.webp",
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Header ── */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-accent text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <MessageSquareCode size={12} /> Client Feedback
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-black text-foreground mb-8"
            >
              Trusted by <span className="text-accent italic">Leaders.</span>
            </motion.h1>
            
            <p className="text-zinc-500 text-xl leading-relaxed border-l-2 border-zinc-800 pl-6 max-w-2xl">
              Don't just take my word for it. Here is how I've helped businesses scale through custom engineering and strategic design.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 text-center w-full">
               <div className="text-5xl font-display font-black text-accent mb-2">5.0</div>
               <div className="flex justify-center gap-1 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
               </div>
               <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Average Client Rating</div>
            </div>
          </div>
        </header>

        {/* ── Testimonials Masonry ── */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid relative p-10 rounded-[3rem] bg-zinc-900/10 border border-zinc-800/50 hover:border-accent/30 transition-all duration-500 group"
            >
              <Quote className="absolute top-8 right-10 text-zinc-800 group-hover:text-accent/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8 italic">
                "{item.content}"
              </p>

              <div className="flex items-center justify-between border-t border-zinc-800/50 pt-8">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-zinc-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-accent/20 flex items-center justify-center font-black text-accent">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-base leading-none mb-1">{item.name}</h4>
                    <span className="text-zinc-600 text-xs uppercase tracking-widest font-black">{item.role}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Project</span>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-accent">
                     {item.project} <ArrowUpRight size={10} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Section ── */}
        <section className="mt-32 text-center">
            <h2 className="text-4xl font-display font-black text-foreground mb-8">
              Become the next <span className="text-accent italic">Success Story.</span>
            </h2>
            <button className="px-10 py-5 rounded-full bg-accent text-background font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform shadow-2xl shadow-accent/20">
               Start Your Project
             </button>
        </section>
      </div>
    </main>
  )
}