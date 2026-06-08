"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";
import MagneticButton from "./components/MagneticButton";

/* ── SplitText: character-by-character reveal ── */
function SplitText({
  text, delay = 0, className = "", style = {},
}: {
  text: string; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  return (
    <span className={className} style={style} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: delay + i * 0.045, ease: [0.76, 0, 0.24, 1] }}
            style={{ display: "inline-block" }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Animated counter (IntersectionObserver) ── */
function useCounter(target: number) {
  const [val, setVal]     = useState(0);
  const [fired, setFired] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !fired) {
          setFired(true);
          const start = performance.now();
          const dur   = 1800;
          const step  = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(e * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, [target, fired]);

  return { val, ref };
}

/* ── 3D Tilt Card ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setRot({
      x: ((e.clientY - r.top)  / r.height - 0.5) * -12,
      y: ((e.clientX - r.left) / r.width  - 0.5) *  12,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      animate={{ rotateX: rot.x, rotateY: rot.y }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Service row ── */
const services = [
  { n: "01", title: "WEDDING & CELEBRATIONS", note: "Full coverage of your most precious day" },
  { n: "02", title: "CORPORATE EVENTS",        note: "Professional documentation for brands"  },
  { n: "03", title: "DRONE CINEMATOGRAPHY",    note: "Breathtaking aerial perspectives"       },
  { n: "04", title: "COMMERCIAL PRODUCTION",   note: "Campaign visuals that drive results"    },
];

const marquee = [
  "WEDDING PHOTOGRAPHY", "CINEMATOGRAPHY", "DRONE AERIALS",
  "CORPORATE EVENTS", "FASHION EDITORIALS", "FINE ART PORTRAITS",
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY       = useTransform(scrollY, [0, 700], [0, -140]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const c1 = useCounter(120);
  const c2 = useCounter(5);
  const c3 = useCounter(2000);

  return (
    <main style={{ background: "#050505", color: "#f0ede8" }}>
      <NavBar />

      {/* ══ HERO ══ */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/background/theme.jpg" alt="Cinematic background" fill
                 className="object-cover" style={{ opacity: 0.25 }} priority />
          <div className="absolute inset-0"
               style={{ background: "linear-gradient(to bottom, #050505 0%, transparent 25%, transparent 70%, #050505 100%)" }} />
        </div>

        <ParticleCanvas />

        <motion.div style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-mono text-[11px] tracking-[0.45em] uppercase mb-8"
            style={{ color: "#c9a96e" }}
          >
            Est. 2026 — Sri Lanka &amp; Worldwide
          </motion.p>

          <h1 className="leading-none select-none"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(4rem,15vw,18rem)", fontWeight: 300 }}>
            <div><SplitText text="TIMELESS" delay={0.7} style={{ color: "#f0ede8", letterSpacing: "-0.03em" }} /></div>
            <div>
              <SplitText
                text="EUPHORIA"
                delay={1.1}
                style={{
                  fontStyle: "italic", fontWeight: 700,
                  color: "transparent",
                  WebkitTextStroke: "clamp(1px,0.12vw,2px) #f0ede8",
                  letterSpacing: "-0.02em",
                }}
              />
            </div>
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1 }}
                      className="mt-14 flex justify-center">
            <Link href="/work"
                  className="flex items-center gap-3 font-mono text-[11px] tracking-[0.35em] uppercase transition-colors hover:text-[#c9a96e]"
                  style={{ color: "#888" }}>
              View Selected Works <span className="inline-block w-8 h-px bg-current" />
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <motion.div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a96e]"
                      animate={{ scaleY: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: "top" }} />
          <span className="font-mono text-[9px] tracking-[0.5em] uppercase" style={{ color: "#444" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="overflow-hidden py-5" style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-8 font-mono text-[11px] tracking-[0.3em] uppercase whitespace-nowrap" style={{ color: "#3a3a3a" }}>
              {item} <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9a96e" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ══ FEATURED WORKS ══ */}
      <section className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="font-mono text-[11px] tracking-[0.35em] uppercase mb-4" style={{ color: "#c9a96e" }}>
              Selected Portfolio
            </motion.p>
            <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                       transition={{ duration: 0.9 }}
                       className="text-6xl md:text-8xl font-light tracking-tighter" style={{ color: "#f0ede8" }}>
              ARCHIVE
            </motion.h2>
          </div>
          <Link href="/work" className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase transition-colors hover:text-[#c9a96e]" style={{ color: "#555" }}>
            View All <span className="inline-block w-12 h-px bg-current" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            { src: "/gallery/gallery-1.jpg", title: "Riya & Arjun",   type: "Wedding",  location: "Udaipur, India" },
            { src: "/gallery/gallery-2.jpg", title: "Neon Dreams",    type: "Festival", location: "Colombo, SL"   },
          ].map((w, i) => (
            <motion.div key={i} initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15 }}>
              <TiltCard className={i === 1 ? "md:mt-24" : ""}>
                <div className="group relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image src={w.src} alt={w.title} fill className="object-cover transition-transform duration-[2s]"
                         style={{ transitionTimingFunction: "cubic-bezier(0.19,1,0.22,1)" }}
                         onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)"}
                         onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.75) 0%, transparent 50%)" }} />
                  <div className="absolute bottom-0 left-0 p-8 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: "#c9a96e" }}>{w.type}</p>
                    <h3 className="text-3xl font-light" style={{ color: "#f0ede8" }}>{w.title}</h3>
                    <p className="font-mono text-[11px] mt-1" style={{ color: "#666" }}>{w.location}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="py-32 px-6 md:px-12" style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1800px] mx-auto grid grid-cols-3 gap-8">
          {[
            { ...c1, suffix: "+", label: "Events Captured" },
            { ...c2, suffix: "+", label: "Years of Craft"  },
            { ...c3, suffix: "+", label: "Photographs"     },
          ].map((s, i) => (
            <div key={i} ref={s.ref} className="text-center">
              <div className="font-light tracking-tighter" style={{ fontSize: "clamp(2.5rem,7vw,6rem)", color: "#f0ede8" }}>
                {s.val}{s.suffix}
              </div>
              <p className="font-mono text-[10px] tracking-[0.35em] uppercase mt-3" style={{ color: "#555" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES PREVIEW ══ */}
      <section className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-mono text-[11px] tracking-[0.35em] uppercase mb-16" style={{ color: "#c9a96e" }}>
          What We Do
        </motion.p>
        <div style={{ borderTop: "1px solid #1c1c1c" }}>
          {services.map((svc, i) => (
            <ServiceRow key={i} svc={svc} i={i} />
          ))}
        </div>
        <div className="mt-16 flex justify-end">
          <MagneticButton>
            <Link href="/services" className="flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] uppercase transition-colors hover:text-[#c9a96e]" style={{ color: "#555" }}>
              View All Packages <span className="inline-block w-10 h-px bg-current" />
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* ══ ABOUT TEASER ══ */}
      <section className="py-40 px-6 md:px-12" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-20 md:gap-32 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }} transition={{ duration: 1 }}>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase mb-8" style={{ color: "#c9a96e" }}>
              The Philosophy
            </p>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12" style={{ color: "#f0ede8" }}>
              &ldquo;We are wanderers, explorers of light, driven by a desire to capture fleeting moments and stitch them into a visual legacy.&rdquo;
            </blockquote>
            <MagneticButton>
              <Link href="/about" className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] uppercase pb-2 transition-colors hover:text-[#c9a96e]"
                    style={{ color: "#888", borderBottom: "1px solid #2a2a2a" }}>
                Our Story <span className="inline-block w-8 h-px bg-current" />
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }} transition={{ duration: 1.2 }}
                      className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
                   alt="Philosophy" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,5,5,0.4) 0%, transparent 60%)" }} />
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-48 px-6 text-center" style={{ borderTop: "1px solid #1a1a1a" }}>
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="font-mono text-[11px] tracking-[0.4em] uppercase mb-10" style={{ color: "#444" }}>Ready to Begin?</p>
          <h2 className="font-light tracking-tighter leading-none mb-3"
              style={{ fontSize: "clamp(3rem,10vw,11rem)", color: "#f0ede8", fontFamily: "var(--font-sans)" }}>
            LET&apos;S CREATE
          </h2>
          <h2 className="font-bold tracking-tighter leading-none mb-20 italic"
              style={{ fontSize: "clamp(3rem,10vw,11rem)", color: "#c9a96e", fontFamily: "var(--font-serif)" }}>
            SOMETHING.
          </h2>
          <MagneticButton>
            <Link href="/contact"
                  className="inline-flex items-center gap-4 px-12 py-5 font-mono text-[11px] tracking-[0.3em] uppercase transition-all duration-300 border"
                  style={{ borderColor: "#c9a96e", color: "#c9a96e" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#c9a96e"; el.style.color="#050505"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="transparent"; el.style.color="#c9a96e"; }}>
              Inquire Now
            </Link>
          </MagneticButton>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceRow({ svc, i }: { svc: (typeof services)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                className="flex items-center justify-between py-7 cursor-default transition-colors"
                style={{ borderBottom: "1px solid #1c1c1c" }}>
      <div className="flex items-center gap-6 md:gap-10">
        <span className="font-mono text-[10px]" style={{ color: "#444" }}>{svc.n}</span>
        <span className="text-2xl md:text-5xl font-light tracking-tight transition-colors duration-300"
              style={{ color: hovered ? "#c9a96e" : "#f0ede8" }}>
          {svc.title}
        </span>
      </div>
      <span className="hidden md:block font-mono text-sm transition-all duration-300 pr-2"
            style={{ color: "#555", opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(10px)" }}>
        {svc.note}
      </span>
    </motion.div>
  );
}
