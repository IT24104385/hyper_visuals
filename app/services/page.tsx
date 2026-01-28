"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Services() {
    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-24">OFFERINGS</h1>

                <div className="space-y-16">
                    {[
                        {
                            title: "Cinematography",
                            desc: "We craft narrative-driven films using 4K Cinema Line cameras. Our focus is on storytelling, audio design, and color grading that evokes emotion.",
                            features: ["Highlight Films", "Documentary Edits", "Drone / Aerial"]
                        },
                        {
                            title: "Photography",
                            desc: "Editorial-style imagery that captures candid moments and intricate details. High-resolution delivery optimized for both print and digital.",
                            features: ["Full Day Coverage", "Editorial Portraits", "Fine Art Editing"]
                        },
                        {
                            title: "Production",
                            desc: "End-to-end media production for corporate events and large-scale festivals.",
                            features: ["Live Streaming", "Same Day Edits", "Social Media Content"]
                        }
                    ].map((s, i) => (
                        <div key={i} className="group border-t border-gray-300 pt-12 hover:border-black transition-colors duration-500">
                            <div className="grid md:grid-cols-3 gap-12">
                                <h3 className="text-3xl md:text-4xl font-light">{s.title}</h3>
                                <div className="md:col-span-2">
                                    <p className="text-gray-600 text-lg font-light leading-relaxed mb-8 max-w-xl">{s.desc}</p>
                                    <ul className="grid grid-cols-2 gap-4">
                                        {s.features.map((f, index) => (
                                            <li key={index} className="text-xs font-mono tracking-widest uppercase text-gray-500 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-black rounded-full" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}