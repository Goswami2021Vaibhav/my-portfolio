"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  User,
  Mail,
  MessageCircle,
  X,
  ArrowRight,
} from "lucide-react";
const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "My Work", href: "/work", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
    icon: "/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    icon: "/whatsapp.svg",
  },
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
    icon: "/instagram.svg",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/60 backdrop-blur-xl border-b border-white/10 saturate-150"
            : "py-5 bg-transparent border-white/10"
        }`}
      >
        <nav className="max-w-7xl mx-auto md:px-0 px-5 flex items-center justify-between">
          {/* Stacked Logo Section: Left Aligned Text */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform active:scale-95"
          >
            <div className="relative size-10 md:size-14 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
              <Image
                src="/vaibhav-goswami.jpg"
                alt="Vaibhav Goswami"
                fill
                priority
                className="object-cover scale-110"
                sizes="56px"
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
          <ul className="hidden lg:flex items-center gap-1 bg-surface/20 border border-white/5 p-1.5 rounded-full backdrop-blur-md shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all relative z-10 flex items-center gap-2 ${
                      isActive
                        ? "text-background"
                        : "text-zinc-400 hover:text-foreground"
                    }`}
                  >
                    <Icon size={14} strokeWidth={isActive ? 3 : 2} />
                    <span>{link.label}</span>

                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-accent rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
              </svg>
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
              <Link
                href="/"
                className="group flex items-center gap-3 transition-transform active:scale-95"
              >
                <div className="relative size-10 md:size-14 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
                  <Image
                    src="/vaibhav-goswami.jpg"
                    alt="Vaibhav Goswami"
                    fill
                    priority
                    className="object-cover"
                    sizes="56px"
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

            <ul className="space-y-4 mt-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-3xl font-black uppercase font-display flex items-center gap-4 transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-foreground hover:text-accent"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl border ${
                          isActive
                            ? "bg-accent/10 border-accent/20"
                            : "bg-surface border-white/5"
                        }`}
                      >
                        <Icon size={25} />
                      </div>
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-8 border-t border-white/5"
            >
              <p className="text-zinc-500 text-[10px] mb-6 uppercase tracking-[0.3em] font-black">
                Connect & Collaborate
              </p>

              <div className="flex items-center gap-8 mb-10">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={32}
                      height={32}
                      className="size-8 object-contain transition-all"
                    />
                  </motion.a>
                ))}
              </div>

              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between w-full px-6 py-2 bg-accent rounded-[2rem] text-background transition-transform active:scale-95"
              >
                <span className="text-xl font-black uppercase font-display tracking-tight">
                  Get in Touch
                </span>
                <div className="bg-background/20 p-2 rounded-full">
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
