"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { projects, flatTitle } from "./project";

// Every category used across all galleries, plus a few fixed ones we always
// want to offer, so the archive can be filtered the same way a gallery can.
const EXTRA_CATEGORIES = ["Corporate"];
const allCategories = Array.from(
    new Set([...projects.flatMap((p) => p.categories), ...EXTRA_CATEGORIES])
).sort();

export default function Work() {
    const [activeCategory, setActiveCategory] = React.useState<string>("All");

    const visibleProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.categories.includes(activeCategory));

    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="mb-12">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-black">ARCHIVE</h1>
                </div>

                <div className="flex flex-wrap gap-6 mb-20 border-b border-gray-200 pb-6">
                    {["All", ...allCategories].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-xs font-bold tracking-widest uppercase pb-1 border-b-2 transition-colors ${
                                activeCategory === cat
                                    ? "text-black border-black"
                                    : "text-gray-400 border-transparent hover:text-black"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {visibleProjects.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
                        >
                            <div className="group block text-center">
                                <Link href={`/work/${project.slug}`} className="block cursor-pointer">
                                    {/* Uniform 3:2 cover for every event */}
                                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-200 shadow-sm">
                                        <Image
                                            src={project.cover}
                                            alt={flatTitle(project.title)}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                                        />
                                        {/* Dark overlay + "view gallery" affordance on hover, Pixieset-style */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 px-8 py-3 border border-white text-white text-xs font-bold tracking-[0.2em] uppercase">
                                                View Gallery
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <Link href={`/work/${project.slug}`} className="block cursor-pointer mt-6">
                                    <h2 className="whitespace-pre-line text-sm font-bold tracking-[0.2em] uppercase text-black group-hover:opacity-60 transition-opacity">
                                        {project.title}
                                    </h2>
                                    <p className="font-mono text-[11px] text-gray-500 mt-2 uppercase tracking-widest">
                                        {project.date}
                                    </p>
                                </Link>

                                <div className="flex flex-wrap gap-2 justify-center mt-3">
                                    {project.categories.map((cat) => (
                                        <Link
                                            key={cat}
                                            href={`/work/${project.slug}`}
                                            className="text-[10px] font-bold tracking-widest uppercase text-gray-500 border border-gray-300 px-2 py-1 hover:border-black hover:text-black transition-colors"
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
