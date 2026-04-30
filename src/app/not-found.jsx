'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background px-6 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center">
        {/* Error Code with a "Glitch" feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-accent text-xs font-bold uppercase tracking-widest mb-8">
            <Terminal size={14} /> Error 404
          </span>
          
          <h1 className="text-[12rem] md:text-[18rem] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-transparent select-none opacity-20">
            404
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="-mt-16 md:-mt-24"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Project <span className="text-accent italic">Not Found</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-md mx-auto mb-12 leading-relaxed">
            The page you're looking for was moved, renamed, or perhaps never existed in the repository.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full md:w-auto px-8 py-4 bg-accent text-background font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all hover:scale-105 active:scale-95"
            >
              <Home size={18} /> Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full md:w-auto px-8 py-4 bg-zinc-900 text-foreground font-bold rounded-2xl border border-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Code Snippets (Optional "Dev" Vibe) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 font-mono text-[10px] text-zinc-600 p-10 hidden md:block">
        <div className="absolute top-1/4 left-10 animate-pulse">
          const status = "LOST"; <br />
          if (page === null) throw Error();
        </div>
        <div className="absolute bottom-1/4 right-10 animate-pulse delay-700">
          fetch("/api/route") <br />
          .then(res =&gt; res.notFound())
        </div>
      </div>
    </div>
  )
}