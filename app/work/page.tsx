"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const works = [
    { src: "/gallery/gallery-1.jpg", title: "Riya & Arjun", location: "Udaipur, India", type: "Wedding" },
    { src: "/gallery/gallery-2.jpg", title: "Neon Dreams", location: "Colombo, SL", type: "Festival" },
    { src: "/gallery/gallery-3.jpg", title: "Tech Summit", location: "Singapore", type: "Corporate" },
    { src: "/gallery/gallery-4.jpg", title: "Sarah & Tom", location: "Bentota, SL", type: "Elopement" },
    { src: "/gallery/gallery-5.jpg", title: "Fashion Week", location: "Dubai, UAE", type: "Commercial" },
];

export default function Work() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-black">ARCHIVE</h1>
                    <p className="font-mono text-xs font-bold tracking-widest text-gray-700 mt-4 uppercase">Selected works 2020 — 2024</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {works.map((work, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`group cursor-pointer ${i % 2 !== 0 ? "md:pt-32" : ""}`}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-6 shadow-sm">
                                <Image
                                    src={work.src}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}