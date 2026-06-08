"use client";

import { useEffect, useRef } from "react";

interface P { x:number; y:number; vx:number; vy:number; r:number; a:number; life:number; max:number }

export default function ParticleCanvas() {
  const cvs  = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const parts = useRef<P[]>([]);
  const raf   = useRef<number>(0);

  useEffect(() => {
    const canvas = cvs.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    const mk = (): P => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height + canvas.height * 0.2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      r:  Math.random() * 1.8 + 0.4,
      a:  Math.random() * 0.4 + 0.1,
      life: 0,
      max:  Math.random() * 280 + 180,
    });

    parts.current = Array.from({ length: 70 }, mk);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps  = parts.current;
      const mx  = mouse.current.x;
      const my  = mouse.current.y;

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.life++;

        if (p.y < -10 || p.life > p.max) {
          ps[i] = { ...mk(), y: canvas.height + 10 };
          continue;
        }

        const dx = p.x - mx, dy = p.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          const f = (100 - d) / 100;
          p.vx += (dx / d) * f * 0.4;
          p.vy += (dy / d) * f * 0.4;
        }
        p.vx *= 0.97; p.vy *= 0.97;
        p.x  += p.vx; p.y  += p.vy;

        const lr = p.life / p.max;
        const alpha = lr < 0.15 ? (lr / 0.15) * p.a : lr > 0.75 ? ((1 - lr) / 0.25) * p.a : p.a;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${alpha})`;
        ctx.fill();
      }

      // connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(201,169,110,${(1 - d / 90) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={cvs}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
