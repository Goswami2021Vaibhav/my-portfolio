'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react'

const blogs = [
  {
    title: "Building a Scalable School ERP with MERN Stack",
    excerpt: "A deep dive into the architecture, fee management logic, and parent-student profile synchronization...",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Optimizing Shopify Plus for 40% Better Conversions",
    excerpt: "How custom Liquid development and headless commerce can transform your e-commerce growth...",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Automating B2B Marketplaces with Node.js",
    excerpt: "Lessons learned from building Traders Mart: handling high-volume transactions and seller panels...",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
]

export default function BlogSection() {
  return (
    <section className="pt-28 md:px-0 px-5 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
            Insights
          </motion.span>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-foreground">
            Latest from the <span className="text-accent">Dev Log</span>
          </h2>
        </div>
        <button className="flex items-center gap-2 text-zinc-400 hover:text-accent transition-colors font-bold text-sm uppercase tracking-widest group">
          View All Posts <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800 mb-6">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-accent">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><BookOpen size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              <div className="pt-4 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read Full Story <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}