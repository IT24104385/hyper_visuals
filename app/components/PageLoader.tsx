"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [show, setShow]       = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("hv-loaded")) return;

    setShow(true);
    let p = 0;

    const tick = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("hv-loaded", "1");
        }, 400);
      }
      setProgress(p);
    }, 100);

    return () => clearInterval(tick);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: "#050505" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-5"
               style={{ color: "#666" }}>
              Est. 2026
            </p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter"
                style={{ color: "#f0ede8", fontFamily: "var(--font-sans)" }}>
              HYPER <span className="font-bold">VISUALS</span>
            </h1>
          </motion.div>

          <div className="absolute bottom-12 left-12 right-12">
            <div className="relative h-px" style={{ background: "#1a1a1a" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "#c9a96e" }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            <p className="mt-3 font-mono text-[10px]" style={{ color: "#444" }}>
              {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
