"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            {/* HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <Image
                        src="/background/theme.jpg"
                        alt="Cinematic Background"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-gray-300"
                    >
                        Est. 2018 — Sri Lanka & Worldwide
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-6xl md:text-9xl font-light tracking-tighter leading-none"
                    >
                        TIMELESS <br /> <span className="font-bold">EUPHORIA</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-12"
                    >
                        <Link href="/work" className="inline-flex flex-col items-center gap-2 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
                            View Selected Works
                            <ArrowRight className="font-light" size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* INTRO SNIPPET */}
            <section className="py-32 px-6 md:px-12 bg-white text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-5xl font-light leading-tight text-gray-900">
                        "We are wanderers, explorers of light, driven by a desire to capture fleeting moments and stitch them into a visual legacy."
                    </h2>
                    <Link href="/about" className="inline-block text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 transition-colors">
                        Read Our Story
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}