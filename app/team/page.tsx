"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const team = [
  { name: "Senuka Rosa",          role: "Lead Photographer", img: "/team/team-2.jpg", ig: "https://www.instagram.com/senuka.rosa/" },
  { name: "Rayon Fernando",       role: "Creative Director", img: "/team/team-1.jpg", ig: "https://www.instagram.com/rayon_senuka/" },
  { name: "Thevindu Gunathilake", role: "Editor",            img: "/team/team-6.jpg", ig: "https://www.instagram.com/thev1____/" },
  { name: "Minusha Balasooriya",  role: "Videographer",      img: "/team/team-3.jpg", ig: "https://www.instagram.com/minu.ex/" },
  { name: "Kanishka Lanza",       role: "Drone Pilot",       img: "/team/team-4.jpg", ig: "https://www.instagram.com/kanishka_lanza/" },
  { name: "Nadeesha Fernando",    role: "Photographer",      img: "/team/team-7.jpg", ig: "https://www.instagram.com/broccoliheadeddude/" },
];

function MemberCard({ m, i }: { m: (typeof team)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: (i % 3) * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "3/4" }}>
        <Image src={m.img} alt={m.name} fill className="object-cover transition-all duration-700"
               style={{
                 filter:    hovered ? "grayscale(0) brightness(1.05)" : "grayscale(1) brightness(0.7)",
                 transform: hovered ? "scale(1.05)" : "scale(1)",
                 transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
               }} />
        <div className="absolute inset-0 transition-opacity duration-500"
             style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)", opacity: hovered ? 1 : 0.5 }} />
        {m.ig && (
          <a href={m.ig} target="_blank" rel="noopener noreferrer"
             className="absolute bottom-5 right-5 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
             style={{
               background: hovered ? "#c9a96e" : "rgba(255,255,255,0.05)",
               border:     "1px solid",
               borderColor: hovered ? "#c9a96e" : "rgba(255,255,255,0.15)",
               color: hovered ? "#050505" : "#f0ede8",
               opacity: hovered ? 1 : 0,
               transform: hovered ? "translateY(0)" : "translateY(10px)",
             }}>
            <Instagram size={15} />
          </a>
        )}
      </div>
      <h3 className="text-lg font-light transition-colors duration-300"
          style={{ color: hovered ? "#c9a96e" : "#f0ede8" }}>
        {m.name}
      </h3>
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: "#555" }}>{m.role}</p>
    </motion.div>
  );
}

export default function Team() {
  return (
    <main style={{ background: "#050505", color: "#f0ede8", minHeight: "100vh" }}>
      <NavBar />

      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="overflow-hidden mb-4">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                     className="text-6xl md:text-9xl font-light tracking-tighter leading-none">
            THE ARTISTS
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-mono text-[11px] tracking-[0.35em] uppercase mt-6" style={{ color: "#c9a96e" }}>
          The people behind the lens
        </motion.p>
      </section>

      {/* Grid */}
      <section className="pb-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {team.map((m, i) => <MemberCard key={i} m={m} i={i} />)}
        </div>
      </section>

      <Footer />
    </main>
  );
}
