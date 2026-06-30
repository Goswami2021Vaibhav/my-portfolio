'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    X,
    ExternalLink,
    Lock,
    ChevronLeft,
    ChevronRight,
    Store,
    Maximize2,
} from 'lucide-react'
import Image from 'next/image'

// ─────────────────────────────────────────
// Fullscreen Lightbox
// ─────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
    const [current, setCurrent] = useState(startIndex)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    const prev = useCallback(() => {
        setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
    }, [images.length])

    const next = useCallback(() => {
        setCurrent(i => (i === images.length - 1 ? 0 : i + 1))
    }, [images.length])

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose, prev, next])

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[200] flex flex-col"
                style={{ background: '#000000' }}
            >
                {/* Top Bar */}
                <div
                    className="flex items-center justify-between px-6 py-4 flex-shrink-0"
                    style={{ borderBottom: '1px solid #1A1A1A' }}
                >
                    <span
                        className="text-sm font-black uppercase tracking-widest"
                        style={{ color: '#A1A1AA' }}
                    >
                        {current + 1} / {images.length}
                    </span>
                    <button
                        onClick={onClose}
                        className="size-10 rounded-full flex items-center justify-center transition-all hover:bg-zinc-900"
                        style={{ border: '1px solid #222222' }}
                    >
                        <X size={16} className="text-zinc-400" />
                    </button>
                </div>

                {/* Main Image — object-contain so nothing is cropped */}
                <div className="relative flex-1 flex items-center justify-center px-16">
                    <div className="relative w-full h-full">
                        <Image
                            src={images[current]}
                            alt={`Image ${current + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Prev */}
                    {images.length > 1 && (
                        <button
                            onClick={prev}
                            className="absolute left-4 size-12 rounded-full flex items-center justify-center transition-all hover:bg-zinc-900"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #222222' }}
                        >
                            <ChevronLeft size={20} className="text-white" />
                        </button>
                    )}

                    {/* Next */}
                    {images.length > 1 && (
                        <button
                            onClick={next}
                            className="absolute right-4 size-12 rounded-full flex items-center justify-center transition-all hover:bg-zinc-900"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #222222' }}
                        >
                            <ChevronRight size={20} className="text-white" />
                        </button>
                    )}
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div
                        className="flex items-center justify-center gap-3 px-6 py-4 flex-shrink-0 overflow-x-auto scrollbar-hide"
                        style={{ borderTop: '1px solid #1A1A1A' }}
                    >
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className="relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden transition-all"
                                style={{
                                    border: i === current ? '2px solid #F59E0B' : '2px solid #222222',
                                    opacity: i === current ? 1 : 0.45,
                                }}
                            >
                                <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>,
        document.body
    )
}

// ─────────────────────────────────────────
// Project Modal
// ─────────────────────────────────────────
export default function ProjectModal({ project, onClose }) {
    const [activeImage, setActiveImage] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    // Reset on project change
    useEffect(() => {
        setActiveImage(0)
        setLightboxOpen(false)
    }, [project?.id])

    // Escape closes modal only if lightbox is not open
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape' && !lightboxOpen) onClose()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose, lightboxOpen])

    // Arrow keys for modal slider — disabled when lightbox is open
    useEffect(() => {
        if (!project || lightboxOpen) return
        const handler = (e) => {
            if (e.key === 'ArrowRight') {
                setActiveImage(i => (i === project.images.length - 1 ? 0 : i + 1))
            }
            if (e.key === 'ArrowLeft') {
                setActiveImage(i => (i === 0 ? project.images.length - 1 : i - 1))
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [project, lightboxOpen])

    // Lock body scroll
    useEffect(() => {
        if (project) document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [project])

    const prev = () => {
        if (!project) return
        setActiveImage(i => (i === 0 ? project.images.length - 1 : i - 1))
    }

    const next = () => {
        if (!project) return
        setActiveImage(i => (i === project.images.length - 1 ? 0 : i + 1))
    }

    if (!mounted) return null

    const modalContent = (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: 50, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-4xl max-h-[90vh] rounded-[2rem] pointer-events-auto overflow-hidden"
                            style={{ background: '#111111', border: '1px solid #222222' }}
                        >
                            {/* Inner scroll container */}
                            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
                                {/* Type Badge */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span
                                        className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest"
                                        style={{
                                            background: 'rgba(0,0,0,0.75)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: '#F59E0B',
                                        }}
                                    >
                                        {project.type}
                                    </span>
                                </div>

                                {/* Top-right: Fullscreen + Close */}
                                <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
                                    {project.images.length > 0 &&
                                        <button
                                            onClick={() => setLightboxOpen(true)}
                                            className="size-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                                            style={{
                                                background: 'rgba(0,0,0,0.6)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                            }}
                                            title="View fullscreen"
                                        >
                                            <Maximize2 size={15} className="text-white" />
                                        </button>
                                    }

                                    <button
                                        onClick={onClose}
                                        className="size-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                                        style={{
                                            background: 'rgba(0,0,0,0.6)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                        }}
                                    >
                                        <X size={15} className="text-white" />
                                    </button>
                                </div>
                                {/* ── Image Slider ── */}
                                {project.images.length > 0 && (
                                    <>
                                        <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden">
                                            <Image
                                                src={project.images[activeImage]}
                                                alt={`${project.title} screenshot ${activeImage + 1}`}
                                                fill
                                                className="object-cover transition-all duration-500"
                                                sizes="(max-width: 768px) 100vw, 896px"
                                                priority
                                            />

                                            {/* Bottom gradient */}
                                            <div
                                                className="absolute inset-0 pointer-events-none"
                                                style={{ background: 'linear-gradient(to top, #111111 0%, transparent 55%)' }}
                                            />





                                            {/* Prev / Next */}
                                            {project.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prev}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                                                        style={{
                                                            background: 'rgba(0,0,0,0.6)',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                        }}
                                                    >
                                                        <ChevronLeft size={18} className="text-white" />
                                                    </button>
                                                    <button
                                                        onClick={next}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                                                        style={{
                                                            background: 'rgba(0,0,0,0.6)',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                        }}
                                                    >
                                                        <ChevronRight size={18} className="text-white" />
                                                    </button>
                                                </>
                                            )}

                                            {/* Image Counter */}
                                            {project.images.length > 1 && (
                                                <div className="absolute bottom-6 right-6 z-10">
                                                    <span
                                                        className="px-3 py-1 rounded-full text-[10px] font-black"
                                                        style={{ background: 'rgba(0,0,0,0.6)', color: '#A1A1AA' }}
                                                    >
                                                        {activeImage + 1} / {project.images.length}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Thumbnail Strip */}
                                        {project.images.length > 1 && (
                                            <div className="flex gap-3 px-8 pt-5 overflow-x-auto scrollbar-hide">
                                                {project.images.map((img, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setActiveImage(i)}
                                                        className="relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden transition-all"
                                                        style={{
                                                            border: i === activeImage ? '2px solid #F59E0B' : '2px solid #222222',
                                                            opacity: i === activeImage ? 1 : 0.45,
                                                        }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Thumbnail ${i + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}


                                {/* ── Content ── */}
                                <div className="p-4 md:p-10">
                                    {/* Show Primary Thumnail if no images, else show slider */}
                                    {project.images.length === 0 && (
                                        <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-8">
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 896px"
                                            />
                                        </div>
                                    )}
                                    {/* Title + Link */}
                                    <div className="flex sm:flex-nowrap flex-wrap items-start justify-between gap-6 mb-6">
                                        <h2
                                            className="font-display font-black text-2xl md:text-4xl leading-tight"
                                            style={{ color: '#F5F5F5' }}
                                        >
                                            {project.title}
                                        </h2>

                                        {project?.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold flex-shrink-0 transition-all hover:opacity-90"
                                                style={{ background: '#F59E0B', color: '#0A0A0A' }}
                                            >
                                                <ExternalLink size={15} />
                                                View Project
                                            </a>
                                        )}

                                    </div>

                                    {/* Meta Row */}

                                    {/* Divider */}
                                    <div className="mb-8" style={{ borderTop: '1px solid #222222' }} />

                                    {/* Description */}
                                    <p
                                        className="text-base leading-relaxed mb-10"
                                        style={{ color: '#A1A1AA' }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Results — only if not empty */}
                                    {project.results && project.results.length > 0 && (
                                        <div className="mb-10">
                                            <h4
                                                className="text-[10px] font-black uppercase tracking-widest mb-4"
                                                style={{ color: '#F59E0B' }}
                                            >
                                                Results
                                            </h4>
                                            <ul className="flex flex-col gap-3">
                                                {project.results.map((result, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div
                                                            className="size-1.5 rounded-full mt-2 flex-shrink-0"
                                                            style={{ background: '#F59E0B' }}
                                                        />
                                                        <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                                                            {result}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div>
                                        <h4
                                            className="text-[10px] font-black uppercase tracking-widest mb-4"
                                            style={{ color: '#F59E0B' }}
                                        >
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full"
                                                    style={{
                                                        background: '#1A1A1A',
                                                        border: '1px solid #222222',
                                                        color: '#A1A1AA',
                                                    }}
                                                >
                                                    <div
                                                        className="size-1.5 rounded-full"
                                                        style={{ background: 'rgba(245,158,11,0.6)' }}
                                                    />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )

    return (
        <>
            {createPortal(modalContent, document.body)}
            {lightboxOpen && project && (
                <Lightbox
                    images={project.images}
                    startIndex={activeImage}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    )
}