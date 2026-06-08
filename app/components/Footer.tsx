import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#040404", borderTop: "1px solid #1c1c1c" }}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-24 pb-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20 pb-20 border-b border-[#1c1c1c]">
          <div className="max-w-sm">
            <h2 className="text-4xl font-light tracking-tighter mb-5" style={{ color: "#f0ede8" }}>
              HYPER <span className="font-bold">VISUALS</span>
            </h2>
            <p className="font-light leading-relaxed text-sm" style={{ color: "#555" }}>
              Crafting visual legacies for the bold and the timeless. Based in Sri Lanka, available worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-24 gap-y-3">
            {["About", "Work", "Services", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="link-line font-mono text-[11px] tracking-[0.25em] uppercase transition-colors hover:text-[#c9a96e]"
                style={{ color: "#555" }}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="space-y-5">
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: "#444" }}>Social</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "https://instagram.com/hyper_visuals.lk",               Icon: Instagram, label: "Instagram"  },
                { href: "https://www.facebook.com/hypervisuals.lk",              Icon: Facebook,  label: "Facebook"   },
                { href: "https://www.youtube.com/@HyperVisualslk",               Icon: Youtube,   label: "YouTube"    },
                { href: "https://www.linkedin.com/company/hyper-visuals-lk/",    Icon: Linkedin,  label: "LinkedIn"   },
                { href: "mailto:hypervisuals.creative@gmail.com",                 Icon: Mail,      label: "Email"      },
              ].map(({ href, Icon, label }) => (
                <a key={href} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 font-mono text-[11px] tracking-wide transition-colors hover:text-[#c9a96e]"
                   style={{ color: "#555" }}>
                  <Icon size={14} /> {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: "#444" }}>Location</p>
            <p className="flex items-start gap-2 text-sm font-light" style={{ color: "#555" }}>
              <MapPin size={14} className="mt-1 shrink-0 text-[#c9a96e]" />
              Negombo, Sri Lanka
            </p>
            <a href="https://wa.me/94704877689" target="_blank" rel="noopener noreferrer"
               className="block mt-4 font-mono text-[11px] tracking-wide transition-colors hover:text-[#c9a96e]"
               style={{ color: "#555" }}>
              +94 70 487 7689
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#333" }}>
            &copy; {new Date().getFullYear()} Hyper Visuals. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.25em]" style={{ color: "#2a2a2a" }}>
            Sri Lanka &amp; Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
