"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin, Mail } from "lucide-react";

const links = [
  { num: "01", label: "About",    href: "/about"    },
  { num: "02", label: "Work",     href: "/work"     },
  { num: "03", label: "Services", href: "/services" },
  { num: "04", label: "Team",     href: "/team"     },
  { num: "05", label: "Contact",  href: "/contact"  },
];

export default function NavBar() {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Fixed Header ── */}
      <header
        className="fixed top-0 w-full z-50 transition-all duration-700"
        style={{
          background: scrolled ? "rgba(5,5,5,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1c1c1c" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link href="/" className="font-sans text-xl font-light tracking-tighter" style={{ color: "#f0ede8" }}>
            HYPER <span className="font-bold">VISUALS</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-line font-mono text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
                style={{ color: pathname === l.href ? "#c9a96e" : "#888" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-7 py-3 font-mono text-[11px] tracking-[0.25em] uppercase transition-all duration-300 border"
              style={{ borderColor: "#c9a96e", color: "#c9a96e" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#c9a96e";
                (e.currentTarget as HTMLElement).style.color = "#050505";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#c9a96e";
              }}
            >
              Inquire
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col justify-center items-end gap-[5px] w-8 h-8 p-1"
              aria-label="Open menu"
            >
              <span className="block h-px w-6 bg-[#f0ede8] transition-all" />
              <span className="block h-px w-4 bg-[#c9a96e] transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen Overlay Menu ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 right-0 h-full z-[70] flex flex-col"
              style={{ width: "min(520px, 100vw)", background: "#060606", borderLeft: "1px solid #1c1c1c" }}
            >
              {/* close */}
              <div className="flex justify-between items-center px-10 h-20 border-b border-[#1c1c1c]">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: "#444" }}>Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center border border-[#2a2a2a] rounded-full transition-colors hover:border-[#c9a96e]"
                  aria-label="Close menu"
                >
                  <span className="font-mono text-sm" style={{ color: "#f0ede8" }}>✕</span>
                </button>
              </div>

              {/* nav items */}
              <nav className="flex-1 flex flex-col justify-center px-10 gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      href={l.href}
                      className="group flex items-baseline gap-5 py-4 border-b border-[#111] transition-colors"
                    >
                      <span className="font-mono text-[10px] transition-colors duration-300 group-hover:text-[#c9a96e]"
                            style={{ color: "#444" }}>
                        {l.num}
                      </span>
                      <span
                        className="text-5xl md:text-6xl font-light tracking-tighter transition-colors duration-300 group-hover:text-[#c9a96e]"
                        style={{ color: "#f0ede8", fontFamily: "var(--font-sans)" }}
                      >
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="px-10 pb-10 pt-6 border-t border-[#1c1c1c] space-y-5"
              >
                <a href="mailto:hypervisuals.creative@gmail.com"
                   className="flex items-center gap-3 font-mono text-xs transition-colors hover:text-[#c9a96e]"
                   style={{ color: "#555" }}>
                  <Mail size={14} /> hypervisuals.creative@gmail.com
                </a>
                <div className="flex gap-5 pt-1">
                  {[
                    { href: "https://instagram.com/hyper_visuals.lk", Icon: Instagram },
                    { href: "https://www.facebook.com/hypervisuals.lk", Icon: Facebook },
                    { href: "https://www.youtube.com/@HyperVisualslk", Icon: Youtube },
                    { href: "https://www.linkedin.com/company/hyper-visuals-lk/", Icon: Linkedin },
                  ].map(({ href, Icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                       className="transition-colors hover:text-[#c9a96e]"
                       style={{ color: "#444" }}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
