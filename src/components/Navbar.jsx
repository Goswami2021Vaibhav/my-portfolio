'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'My Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
  // { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'py-3 bg-background/60 backdrop-blur-xl border-b border-white/10 saturate-150'
          : 'py-5 bg-transparent border-white/10'
          }`}
      >
        <nav className="max-w-7xl mx-auto md:px-0 px-5 flex items-center justify-between">
          {/* Stacked Logo Section: Left Aligned Text */}
          <Link href="/" className="group flex items-center gap-3 transition-transform active:scale-95">
            <div className="relative size-10 md:size-14 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
              <Image
                src="/vaibhav-goswami.webp"
                alt="Vaibhav Goswami"
                fill
                priority
                className="object-cover"
                sizes='56px'
              />
            </div>
            <div className="flex flex-col items-start justify-center text-left leading-[0.85]">
              <span className="font-display text-base md:text-xl font-black tracking-wide text-accent uppercase">
                Vaibhav
              </span>
              {/* Added -mt-1 to pull the second line up slightly */}
              <span className="font-display text-base md:text-xl font-black tracking-wide text-foreground uppercase -mt-1 md:-mt-1.5">
                Goswami
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 bg-surface/20 border border-white/5 p-1 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors relative z-10 ${isActive ? 'text-background' : 'text-muted hover:text-foreground'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-accent rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-hover text-background font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              <MessageCircle size={15} />
              Let's Talk
            </a>
            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 24 24" fill="currentColor"><path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col py-5 px-5"
          >
            <div>
              <Link href="/" className="group flex items-center gap-3 transition-transform active:scale-95">
                <div className="relative size-10 md:size-14 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
                  <Image
                    src="/vaibhav-goswami.webp"
                    alt="Vaibhav Goswami"
                    fill
                    priority
                    className="object-cover"
                    sizes='56px'
                  />
                </div>
                <div className="flex flex-col items-start justify-center text-left leading-[0.85]">
                  <span className="font-display text-base md:text-xl font-black tracking-wide text-accent uppercase">
                    Vaibhav
                  </span>
                  {/* Added -mt-1 to pull the second line up slightly */}
                  <span className="font-display text-base md:text-xl font-black tracking-wide text-foreground uppercase -mt-1 md:-mt-1.5">
                    Goswami
                  </span>
                </div>
              </Link>
            </div>
            {/* Close button top right */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-foreground"
            >
              <X size={20} />
            </button>

            {/* Nav Links */}
            <ul className="space-y-6 mt-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-3xl font-black uppercase font-display transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-muted text-xs mb-4 uppercase tracking-widest font-body">
                Available for projects
              </p>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-bold text-accent underline underline-offset-8 font-display uppercase tracking-tighter"
              >
                Start a Conversation →
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence >
    </>
  )
}