"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MagneticButton from "../components/MagneticButton";

const packages = [
  {
    title: "Starter Snap", tier: "Budget",      price: "25,000",
    crew: "1 Photographer",
    pre:  ["Phone consultation on key moments"],
    prod: ["Coverage: Up to 5 Hours"],
    post: ["150+ colour-corrected high-res images", "Delivered within 7 days via cloud link"],
    addon: "Add Drone +LKR 10,000",
  },
  {
    title: "Duo Coverage", tier: "Standard",    price: "45,000",
    crew: "1 Photographer + 1 Videographer",
    pre:  ["Shot list creation", "Coordination with event agenda"],
    prod: ["Coverage: Up to 6 Hours", "Full HD 1080p video"],
    post: ["150+ Edited Photos", "3-min Cinematic Highlight Video", "Raw footage on request"],
    addon: "Add Drone +LKR 10,000",
  },
  {
    title: "Pro Storyteller", tier: "Premium", price: "65,000",
    crew: "2 Photographers + 1 Videographer",
    pre:  ["Site visit", "Mood board planning"],
    prod: ["Coverage: Up to 6 Hours", "4K Video Setup (Sony Mirrorless)"],
    post: ["300+ Signature Edited Photos", "5-min Highlight Film + Reels"],
    addon: "Add Drone +LKR 10,000",
  },
  {
    title: "Ultimate Coverage", tier: "Premium Plus", price: "125,000",
    crew: "3 Photographers + 1 Videographer + 1 Drone Operator",
    pre:  ["Site visit", "Full event plan"],
    prod: ["Full event coverage", "Sony Fx3 Rig Cinema Grade 4K", "Professional Drone (4K Aerials)"],
    post: ["400–500 Edited Retouched Photos", "4 Artist Reels (9:16) + 5–10 min After Movie"],
  },
  {
    title: "Hyper Cinema",   tier: "Elite — RED Combo", price: "260,000",
    crew: "3 Photographers + 3 Videographers + 2 Drone Operators (Steady + FPV)",
    pre:  ["Cinematic storyboarding", "Detailed lighting & event plan"],
    prod: ["Full Day Coverage", "RED Komodo 6K Cinema", "4K Aerial + FPV Drone"],
    post: ["600+ Edited Photos + 50 Fine Art Portraits", "Davinci Resolve Movie-grade Grade", "1-min Teaser + 10–15 min Cinematic Short Film"],
    elite: true,
  },
];

const addOns = [
  { item: "Aerial (Drone) Coverage", price: "LKR 25,000", note: "20–30 min flight, establishing shots. Included in Premium Plus & Elite." },
  { item: "360 Video Booth",         price: "LKR 30,000", note: "Slow-motion capture, instant sharing station & props." },
];

export default function Services() {
  return (
    <main style={{ background: "#050505", color: "#f0ede8", minHeight: "100vh" }}>
      <NavBar />

      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="overflow-hidden mb-4">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                     className="text-6xl md:text-9xl font-light tracking-tighter leading-none">
            PACKAGES
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="font-mono text-[11px] tracking-[0.35em] uppercase max-w-xl mt-6" style={{ color: "#888" }}>
          Curated experiences tailored for every scale. Competitive entry-level pricing for premium production value.
        </motion.p>
      </section>

      {/* Cards */}
      <section className="pb-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} i={i} />
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="pb-40 px-6 md:px-12 max-w-[1800px] mx-auto" style={{ borderTop: "1px solid #1c1c1c", paddingTop: "5rem" }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="text-3xl font-light tracking-tighter mb-14" style={{ color: "#f0ede8" }}>
          Optional Add-Ons
        </motion.h2>
        <div className="space-y-0" style={{ borderTop: "1px solid #1c1c1c" }}>
          {addOns.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
                        style={{ borderBottom: "1px solid #1c1c1c" }}>
              <span className="text-lg font-light" style={{ color: "#f0ede8" }}>{a.item}</span>
              <span className="font-mono text-sm font-bold" style={{ color: "#c9a96e" }}>{a.price}</span>
              <span className="text-sm font-light" style={{ color: "#666" }}>{a.note}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-40 px-6 md:px-12 text-center" style={{ borderTop: "1px solid #1a1a1a", paddingTop: "5rem" }}>
        <p className="font-mono text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: "#444" }}>Custom requirements?</p>
        <MagneticButton>
          <Link href="/contact"
                className="inline-flex items-center gap-4 px-12 py-5 font-mono text-[11px] tracking-[0.3em] uppercase transition-all duration-300 border"
                style={{ borderColor: "#c9a96e", color: "#c9a96e" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#c9a96e"; el.style.color="#050505"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="transparent"; el.style.color="#c9a96e"; }}>
            Let&apos;s Discuss
          </Link>
        </MagneticButton>
      </section>

      <Footer />
    </main>
  );
}

function PackageCard({ pkg, i }: { pkg: (typeof packages)[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const elite = pkg.elite;

  return (
    <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.07 }}
                className="relative flex flex-col p-8 transition-all duration-300"
                style={{
                  background: elite ? "#0e0c09" : "#0a0a0a",
                  border: elite ? "1px solid #c9a96e" : "1px solid #1c1c1c",
                  transform: elite ? "scale(1.02)" : "scale(1)",
                }}>
      {elite && (
        <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1"
              style={{ background: "#c9a96e", color: "#050505" }}>
          Elite
        </span>
      )}

      <div className="mb-8 pb-6" style={{ borderBottom: "1px solid #1c1c1c" }}>
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: elite ? "#c9a96e" : "#555" }}>
          {pkg.tier}
        </p>
        <h3 className="text-2xl font-light tracking-tight mb-4" style={{ color: "#f0ede8" }}>{pkg.title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-xs" style={{ color: "#555" }}>LKR</span>
          <span className="text-4xl font-light tracking-tighter" style={{ color: elite ? "#c9a96e" : "#f0ede8" }}>
            {pkg.price}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-5 text-sm">
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#555" }}>Crew</p>
          <p className="font-light" style={{ color: "#aaa" }}>{pkg.crew}</p>
        </div>

        {open && (
          <>
            {[["Pre-Production", pkg.pre], ["Production", pkg.prod], ["Post-Production", pkg.post]].map(
              ([label, items]) => (
                <div key={label as string}>
                  <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#555" }}>{label}</p>
                  <ul className="space-y-1">
                    {(items as string[]).map((it, j) => (
                      <li key={j} className="flex items-start gap-2 font-light" style={{ color: "#888" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9a96e" }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
            {pkg.addon && (
              <p className="font-mono text-[10px] tracking-wide pt-3" style={{ color: "#c9a96e", borderTop: "1px solid #1c1c1c" }}>
                {pkg.addon}
              </p>
            )}
          </>
        )}
      </div>

      <button onClick={() => setOpen(!open)}
              className="mt-8 pt-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors hover:text-[#c9a96e]"
              style={{ borderTop: "1px solid #1c1c1c", color: "#555" }}>
        {open ? "Show Less" : "View Details"}
        <span className="inline-block transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </button>
    </motion.div>
  );
}
