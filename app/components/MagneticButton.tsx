"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({ children, className = "", strength = 0.35 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left - r.width  / 2) * strength,
      y: (e.clientY - r.top  - r.height / 2) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      animate={pos}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.5 }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
