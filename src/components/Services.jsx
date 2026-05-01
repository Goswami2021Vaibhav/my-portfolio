'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { 
  Globe, ShoppingCart, Zap, Smartphone, 
  Search, LineChart, Palette, Database 
} from 'lucide-react'

const services = [
  {
    title: "Custom Web Solutions",
    description: "High-performance, scalable web apps built with MERN & Next.js for seamless user experiences.",
    icon: <Globe className="w-8 h-8" />,
    className: "md:col-span-6",
    tech: "MERN / Next.js / Laravel / WordPress",
  },
  {
    title: "Custom ERP & Business Automation",
    description: "Tailored internal systems to streamline operations and automate complex workflows.",
    icon: <Database className="w-8 h-8" />,
    className: "md:col-span-6",
    tech: "MERN / Next.js / Laravel",
  },
  {
    title: "Custom Ecommerce",
    description: "Bespoke online stores designed to handle high traffic and complex sales logic.",
    icon: <ShoppingCart className="w-8 h-8" />,
    className: "md:col-span-4",
    tech: "Next.js / Shopify / WooCommerce",
  },
  {
    title: "Shopify Growth",
    description: "Data-driven optimization and custom Liquid development to scale your Shopify store.",
    icon: <Zap className="w-8 h-8" />,
    className: "md:col-span-4",
    tech: "Liquid / Shopify / Custom Themes",
  },
  {
    title: "App Development",
    description: "Lightweight, native-feel mobile applications for both iOS and Android.",
    icon: <Smartphone className="w-8 h-8" />,
    className: "md:col-span-4",
    tech: "React Native / Flutter",
  },
  {
    title: "Brand Identity & UI/UX",
    description: "Strategic design systems that bridge the gap between beauty and usability.",
    icon: <Palette className="w-8 h-8" />,
    className: "md:col-span-4",
    tech: "Figma / Adobe XD / Branding",
  },
  {
    title: "Search Engine Optimization",
    description: "Technical and on-page optimization strategies to dominate organic search rankings.",
    icon: <Search className="w-8 h-8" />,
    className: "md:col-span-4",
    tech: "SEO / Content Strategy / Analytics",
  },
  {
    title: "Performance Marketing",
    description: "ROI-focused campaigns designed to scale your presence and drive conversions.",
    icon: <LineChart className="w-8 h-8" />,
    className: "md:col-span-4",
    tech: "Meta / Google Ads",
  },
]

function TiltCard({ children, className }) {
  const cardRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 })
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const shineX = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"])
  const shineY = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xVal = (e.clientX - rect.left) / rect.width - 0.5
    const yVal = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xVal)
    y.set(yVal)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full relative"
      >
        {/* Shine overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.07) 0%, transparent 70%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}

export default function ServicesBento() {
  return (
    <section className="pt-28 md:px-0 px-5 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.span className="text-accent font-display font-bold tracking-widest uppercase text-xs mb-4">
          My Services
        </motion.span>
        <h2 className="text-3xl md:text-6xl font-display font-bold text-foreground max-w-3xl">
          Complete Digital <span className="text-accent">Solution</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {services.map((service, index) => (
          <TiltCard key={index} className={`group ${service.className}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between overflow-hidden h-full"
            >
              {/* Background Glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

              <div className="relative z-10">
                <div className="text-accent mb-6 transform group-hover:scale-125 w-fit transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-8 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  {service.tech}
                </span>
                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                  <Zap size={12} className="fill-current" />
                </div>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}