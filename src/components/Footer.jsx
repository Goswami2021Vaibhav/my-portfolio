'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "My Work", href: "/work" },
        { name: "Services", href: "/services" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Blog", href: "/blog" },
      ]
    },
    {
      title: "Socials",
      links: [
        { name: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_LINK, icon: "/linkedin.svg" },
        { name: "WhatsApp", href: process.env.NEXT_PUBLIC_WHATSAPP_LINK, icon: "/whatsapp.svg" },
        { name: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_LINK, icon: "/instagram.svg" },
      ]
    }
  ]

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="group flex items-center gap-3 w-fit">
              <div className="relative size-14 rounded-full overflow-hidden border-2 border-accent/20">
                <Image
                  src="/vaibhav-goswami.webp"
                  alt="Vaibhav Goswami"
                  fill
                  className="object-cover"
                  sizes='56px'
                />
              </div>
              <div className="flex flex-col items-start justify-center text-left leading-[0.85]">
                <span className="font-display text-xl font-black tracking-wide text-accent uppercase">
                  Vaibhav
                </span>
                <span className="font-display text-xl font-black tracking-wide text-foreground uppercase -mt-1">
                  Goswami
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
              Specializing in high-performance MERN applications, Shopify Plus development, 
              and custom B2B solutions like School ERP systems. 
              Let's turn your vision into a digital masterpiece.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-zinc-500 hover:text-accent transition-colors text-sm flex items-center gap-2 group w-fit"
                      >
                        {link.icon && (
                          <img src={link.icon} alt={link.name} className="w-4 h-4 transition-all" />
                        )}
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Availability Badge */}
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Status
              </h4>
              <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl w-fit">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Available for Hire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-medium text-center">
            © {currentYear} Vaibhav Goswami. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-medium">
            <span>Built with</span>
            <Heart size={10} className="text-accent fill-accent animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}