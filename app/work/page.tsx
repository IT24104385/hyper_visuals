"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const works = [
  { src: "/gallery/gallery-1.jpg", title: "Riya & Arjun",  location: "Udaipur, India",  type: "Wedding",    year: "2026" },
  { src: "/gallery/gallery-2.jpg", title: "Neon Dreams",   location: "Colombo, SL",     type: "Festival",   year: "2026" },
  { src: "/gallery/gallery-3.jpg", title: "Tech Summit",   location: "Singapore",       type: "Corporate",  year: "2025" },
  { src: "/gallery/gallery-4.jpg", title: "Sarah & Tom",   location: "Bentota, SL",     type: "Elopement",  year: "2025" },
  { src: "/gallery/gallery-5.jpg", title: "Fashion Week",  location: "Dubai, UAE",      type: "Commercial", year: "2025" },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setRot({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 10 });
  };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={() => setRot({ x: 0, y: 0 })}
                animate={{ rotateX: rot.x, rotateY: rot.y }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Work() {
  return (
    <main style={{ background: "#050505", color: "#f0ede8", minHeight: "100vh" }}>
      <NavBar />

      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="overflow-hidden mb-4">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                     className="text-6xl md:text-9xl font-light tracking-tighter leading-none">
            ARCHIVE
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-mono text-[11px] tracking-[0.35em] uppercase" style={{ color: "#c9a96e" }}>
          Selected Works 2025 — 2026
        </motion.p>
      </section>

      {/* Grid */}
      <section className="pb-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
          {works.map((w, i) => (
            <motion.div key={i} initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay: (i % 2) * 0.12 }}>
              <TiltCard className={i % 2 !== 0 ? "md:mt-28" : ""}>
                <div className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: "3/4" }}>
                  <Image src={w.src} alt={w.title} fill
                         className="object-cover transition-transform duration-[2s] group-hover:scale-[1.07]"
                         style={{ transitionTimingFunction: "cubic-bezier(0.19,1,0.22,1)" }} />
                  <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                       style={{ background: "rgba(5,5,5,0.35)" }} />
                  <div className="absolute inset-0 flex flex-col justify-end p-8"
                       style={{ background: "linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 55%)" }}>
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: "#c9a96e" }}>{w.type}</p>
                    <h2 className="text-3xl font-light mb-1" style={{ color: "#f0ede8" }}>{w.title}</h2>
                    <p className="font-mono text-[11px]" style={{ color: "#666" }}>{w.location} — {w.year}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
