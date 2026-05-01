'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Aman Gupta",
    role: "E-commerce Founder",
    content: "Vaibhav transformed our Shopify store. His understanding of Liquid and performance optimization is unmatched. Our conversion rate jumped by 40%!",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Tech Startup CEO",
    content: "The Custom ERP solution Vaibhav built for us has automated 70% of our manual tasks. A true MERN stack expert who understands business logic.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Marketing Director",
    content: "Working with a developer who actually understands SEO and Ads is a rare find. The landing pages he builds are lightning fast and look stunning.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Clean code, modern UI, and great communication. The App Development process was smooth, and the result exceeded our expectations.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content: "He didn't just code my website; he helped design the entire brand identity. Highly recommend for anyone looking for a full-stack partner.",
    rating: 5
  }
]

export default function TestimonialMarquee() {
  // We double the array to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="pt-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
          Social Proof
        </motion.span>
        <h2 className="text-3xl md:text-6xl font-display font-bold text-foreground">
          What My <span className="text-accent">Clients</span> Say
        </h2>
      </div>

      <div className="flex relative">
        {/* Gradient Overlays for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

        <motion.div 
          className="flex gap-6 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed here (higher = slower)
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div 
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-accent/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                  <Quote size={20} />
                </div>
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-700 flex items-center justify-center font-bold text-accent">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-sm uppercase tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}