"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MagneticButton from "../components/MagneticButton";

const pillars = [
  { n: "01", title: "Intentional Capture",    body: "Every frame is built with purpose. We analyse the light, the space, the emotion before we press the shutter." },
  { n: "02", title: "Discipline in Editing",  body: "Post-production is where stories breathe. We apply cinema-grade colour science to every project." },
  { n: "03", title: "Consistent Delivery",    body: "Timelines are promises. We structure every project so nothing is left to chance." },
];

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <main style={{ background: "#050505", color: "#f0ede8", minHeight: "100vh" }}>
      <NavBar />

      {/* ── HERO ── */}
      <section className="pt-48 pb-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                  className="font-mono text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: "#c9a96e" }}>
          The Philosophy
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }}
                     transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                     className="font-light tracking-tighter leading-none"
                     style={{ fontSize: "clamp(3rem,9vw,10rem)", color: "#f0ede8" }}>
            MORE THAN
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }}
                     transition={{ duration: 1.1, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
                     className="font-bold tracking-tighter leading-none italic"
                     style={{ fontSize: "clamp(3rem,9vw,10rem)", color: "#c9a96e", fontFamily: "var(--font-serif)" }}>
            CAMERAS.
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }}
                  className="max-w-2xl text-lg font-light leading-relaxed" style={{ color: "#888" }}>
          Hyper Visuals operates with a simple principle: visuals should serve a purpose. Technology and creativity are tools, not the goal.
        </motion.p>
      </section>

      {/* ── PARALLAX IMAGE ── */}
      <div ref={imgRef} className="relative overflow-hidden mx-6 md:mx-12 mb-40" style={{ height: "70vh" }}>
        <motion.div style={{ y }} className="absolute inset-[-60px]">
          <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
                 alt="Philosophy" fill className="object-cover" style={{ opacity: 0.7 }} />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3), rgba(5,5,5,0.1))" }} />
      </div>

      {/* ── PILLARS ── */}
      <section className="pb-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-3 gap-16" style={{ borderTop: "1px solid #1c1c1c", paddingTop: "5rem" }}>
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.1 }}>
              <span className="font-mono text-[10px] block mb-5" style={{ color: "#444" }}>{p.n}</span>
              <h3 className="text-2xl font-light tracking-tight mb-5" style={{ color: "#f0ede8" }}>{p.title}</h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: "#666" }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LONG FORM COPY ── */}
      <section className="pb-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="max-w-3xl mx-auto space-y-8 text-lg font-light leading-relaxed" style={{ color: "#888" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            We focus on precision in capture, discipline in post-production, and consistency in delivery. Every frame is built to communicate clearly, represent brands accurately, and perform across platforms.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
            From corporate events to commercial productions, our work is structured, intentional, and aligned with client objectives. No noise. No guesswork. Just visuals that work.
          </motion.p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-40 px-6 md:px-12 text-center" style={{ borderTop: "1px solid #1a1a1a", paddingTop: "5rem" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="font-mono text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: "#444" }}>Meet the team</p>
          <MagneticButton>
            <Link href="/team"
                  className="inline-flex items-center gap-4 px-12 py-5 font-mono text-[11px] tracking-[0.3em] uppercase transition-all duration-300 border"
                  style={{ borderColor: "#c9a96e", color: "#c9a96e" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#c9a96e"; el.style.color="#050505"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="transparent"; el.style.color="#c9a96e"; }}>
              The Artists
            </Link>
          </MagneticButton>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
