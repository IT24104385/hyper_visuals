"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <div className="space-y-8">
                        <span className="font-mono text-xs font-bold tracking-widest uppercase text-gray-600">The Philosophy</span>
                        <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-none text-black">
                            MORE THAN <br/><span className="font-bold">CAMERAS.</span>
                        </h1>
                        <div className="space-y-6 text-lg font-normal leading-relaxed text-gray-800 max-w-xl">
                            <p>
                                Hyper Visuals is where technical precision meets creative chaos. We don't just record events; we amplify the energy within them.
                            </p>
                            <p>
                                Whether it's the bass drop at a festival or the silence before a CEO's keynote, we capture the texture of the moment. Our edits are sharp, our colors are true, and our delivery is seamless.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
                            alt="Philosophy"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}