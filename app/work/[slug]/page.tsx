"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { getProject, flatTitle } from "../project";

export default function ProjectGallery() {
    const params = useParams<{ slug: string }>();
    const router = useRouter();
    const project = getProject(params.slug);

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Redirect back to the archive if the slug doesn't match a project.
    useEffect(() => {
        if (!project) {
            router.replace("/work");
        }
    }, [project, router]);

    const photos = project ? project.photos : [];

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const showPrev = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    }, [photos.length]);
    const showNext = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
    }, [photos.length]);

    // Keyboard navigation for the lightbox
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "unset";
        };
    }, [lightboxIndex, closeLightbox, showPrev, showNext]);

    if (!project) return null;

    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            {/* HERO */}
            <section className="relative h-screen w-full overflow-hidden bg-black">
                <Image
                    src={project.cover}
                    alt={flatTitle(project.title)}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Scrim: overall darken + stronger vignette toward the centre so
                    the title stays legible over busy photos */}
                <div className="absolute inset-0 bg-black/45 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.45)_100%)]" />

                <Link
                    href="/work"
                    className="absolute top-28 left-6 md:left-12 z-20 flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase hover:opacity-70 transition-opacity [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
                >
                    <ArrowLeft size={16} /> Archive
                </Link>

                {/* Centered title / date / CTA, Pixieset-style */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <h1 className="max-w-5xl whitespace-pre-line text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-[0.06em] uppercase text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.7),0_1px_4px_rgba(0,0,0,0.6)]">
                        {project.title}
                    </h1>
                    <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-white/90 mt-6 uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
                        {project.date}
                    </p>
                    <a
                        href="#gallery"
                        className="mt-10 px-10 py-3 border border-white/80 bg-black/20 backdrop-blur-[2px] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300 pointer-events-auto"
                    >
                        View Gallery
                    </a>
                </div>
            </section>

            {/* CATEGORY FILTER + MASONRY GRID */}
            <section id="gallery" className="pt-20 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                {project.categories.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-14 border-b border-gray-200 pb-6">
                        {project.categories.map((cat) => (
                            <span
                                key={cat}
                                className="text-xs font-bold tracking-widest uppercase text-gray-500 border border-gray-300 px-3 py-1"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                )}

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                    {photos.map((photo, i) => (
                        <motion.button
                            key={photo.src}
                            onClick={() => setLightboxIndex(i)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
                            className="group relative block w-full mb-6 overflow-hidden bg-gray-100 break-inside-avoid"
                        >
                            <Image
                                src={photo.src}
                                alt={`${flatTitle(project.title)} — photo ${i + 1}`}
                                width={photo.width}
                                height={photo.height}
                                className="w-full h-auto object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {lightboxIndex !== null && photos[lightboxIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity"
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                            className="absolute left-4 md:left-8 text-white hover:opacity-60 transition-opacity"
                        >
                            <ChevronLeft size={40} strokeWidth={1.5} />
                        </button>

                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl max-h-[85vh] w-full"
                        >
                            <Image
                                src={photos[lightboxIndex].src}
                                alt={`${flatTitle(project.title)} — photo ${lightboxIndex + 1}`}
                                width={photos[lightboxIndex].width}
                                height={photos[lightboxIndex].height}
                                className="w-full h-full max-h-[85vh] object-contain"
                            />
                        </motion.div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            className="absolute right-4 md:right-8 text-white hover:opacity-60 transition-opacity"
                        >
                            <ChevronRight size={40} strokeWidth={1.5} />
                        </button>

                        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-mono tracking-widest">
                            {lightboxIndex + 1} / {photos.length}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
