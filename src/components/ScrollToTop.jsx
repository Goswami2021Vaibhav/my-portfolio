'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  // Calculate scroll progress and toggle visibility
  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      
      if (scrollHeight > 0) {
        setProgress((scrolled / scrollHeight) * 100)
      }

      // Show button after scrolling down 400px
      setIsVisible(scrolled > 400)
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center size-14 rounded-full bg-zinc-900 border border-zinc-800 shadow-2xl group transition-transform active:scale-90"
          aria-label="Scroll to top"
        >
          {/* Progress Ring (SVG) */}
          <svg className="absolute size-full -rotate-90 pointer-events-none">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-zinc-800"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="150.796" // 2 * PI * r (24)
              initial={{ strokeDashoffset: 150.796 }}
              animate={{ strokeDashoffset: 150.796 - (150.796 * progress) / 100 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="text-accent"
            />
          </svg>

          {/* Icon */}
          <ArrowUp 
            size={20} 
            className="text-zinc-400 group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}