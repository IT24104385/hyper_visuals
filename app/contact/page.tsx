"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin, Mail, MessageCircle, Star, MapPin } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const socials = [
  { href: "mailto:hypervisuals.creative@gmail.com",               Icon: Mail,          label: "hypervisuals.creative@gmail.com" },
  { href: "https://wa.me/94704877689",                             Icon: MessageCircle, label: "+94 70 487 7689" },
  { href: "https://instagram.com/hyper_visuals.lk",               Icon: Instagram,     label: "@hyper_visuals.lk" },
  { href: "https://www.facebook.com/hypervisuals.lk",             Icon: Facebook,      label: "Facebook" },
  { href: "https://www.youtube.com/@HyperVisualslk",              Icon: Youtube,       label: "YouTube" },
  { href: "https://www.linkedin.com/company/hyper-visuals-lk/",   Icon: Linkedin,      label: "LinkedIn" },
  { href: "https://g.page/r/CR59x2wBtbxPEBE/review",              Icon: Star,          label: "Leave a Review" },
];

const inputCls = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #2a2a2a",
  padding: "12px 0",
  color: "#f0ede8",
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.3s",
};

export default function Contact() {
  return (
    <main style={{ background: "#050505", color: "#f0ede8", minHeight: "100vh" }}>
      <NavBar />

      <section className="pt-48 pb-40 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-24 md:gap-40">

          {/* ── Left: info ── */}
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <p className="font-mono text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: "#c9a96e" }}>Inquire</p>

            <div className="overflow-hidden mb-4">
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none" style={{ color: "#f0ede8" }}>
                LET&apos;S
              </h1>
            </div>
            <div className="overflow-hidden mb-16">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none italic"
                  style={{ color: "#c9a96e", fontFamily: "var(--font-serif)" }}>
                CREATE.
              </h1>
            </div>

            <p className="text-base font-light leading-relaxed mb-12 max-w-md" style={{ color: "#666" }}>
              We take on a limited number of weddings and events each year to ensure the highest quality of work and attention to detail.
            </p>

            <div className="space-y-4">
              {socials.map(({ href, Icon, label }) => (
                <a key={href} href={href} target={href.startsWith("mailto") || href.startsWith("https://wa") ? undefined : "_blank"}
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 text-sm font-light transition-colors hover:text-[#c9a96e]"
                   style={{ color: "#666" }}>
                  <Icon size={15} className="flex-shrink-0" style={{ color: "#c9a96e" }} />
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-start gap-3 mt-10 pt-10 text-sm font-light" style={{ color: "#555", borderTop: "1px solid #1c1c1c" }}>
              <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: "#c9a96e" }} />
              Negombo, Sri Lanka
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.15 }}>
            <form action="https://formsubmit.co/hypervisuals.creative@gmail.com" method="POST" className="space-y-10">
              <input type="hidden" name="_subject" value="New Inquiry — Hyper Visuals" />
              <input type="text" name="_honey" className="hidden" />

              {[
                { name: "name",    type: "text",  label: "Name",  placeholder: "John Doe"          },
                { name: "email",   type: "email", label: "Email", placeholder: "john@example.com"  },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block font-mono text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "#555" }}>{f.label}</label>
                  <input type={f.type} name={f.name} required placeholder={f.placeholder}
                         style={{ ...inputCls }}
                         onFocus={e => (e.target as HTMLInputElement).style.borderBottomColor = "#c9a96e"}
                         onBlur={e  => (e.target as HTMLInputElement).style.borderBottomColor = "#2a2a2a"} />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-8">
                {[
                  { name: "date",     type: "date", label: "Event Date", placeholder: "" },
                  { name: "location", type: "text", label: "Location",   placeholder: "City, Venue" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block font-mono text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "#555" }}>{f.label}</label>
                    <input type={f.type} name={f.name} placeholder={f.placeholder}
                           style={{ ...inputCls }}
                           onFocus={e => (e.target as HTMLInputElement).style.borderBottomColor = "#c9a96e"}
                           onBlur={e  => (e.target as HTMLInputElement).style.borderBottomColor = "#2a2a2a"} />
                  </div>
                ))}
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "#555" }}>Tell us your story</label>
                <textarea name="message" required placeholder="What are you envisioning?"
                          rows={5}
                          style={{ ...inputCls, resize: "none", height: "auto" }}
                          onFocus={e => (e.target as HTMLTextAreaElement).style.borderBottomColor = "#c9a96e"}
                          onBlur={e  => (e.target as HTMLTextAreaElement).style.borderBottomColor = "#2a2a2a"} />
              </div>

              <button type="submit"
                      className="group flex items-center gap-5 font-mono text-[11px] tracking-[0.3em] uppercase transition-colors hover:text-[#c9a96e]"
                      style={{ color: "#888", paddingTop: "1rem", borderTop: "1px solid #1c1c1c" }}>
                Send Inquiry
                <span className="inline-block h-px transition-all duration-500 group-hover:w-16"
                      style={{ width: "2.5rem", background: "currentColor" }} />
              </button>
            </form>

            {/* Map */}
            <div className="mt-16 overflow-hidden" style={{ height: "320px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932537065!2d79.78616389453124!3d6.922006700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.8)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Hyper Visuals Location"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
