"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dynamic text color based on scroll state and current page
    const textColor = isHome && !scrolled ? "text-white" : "text-black";
    const navBg = scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent";

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${navBg} py-6`}>
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className={`text-2xl font-light tracking-tighter mix-blend-difference ${textColor}`}>
                    HYPER <span className="font-bold">VISUALS</span>
                </Link>

                <div className={`hidden md:flex gap-12 text-xs font-medium tracking-[0.2em] uppercase mix-blend-difference z-50 ${textColor}`}>
                    {["About", "Work", "Services", "Team", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="hover:opacity-60 transition-opacity relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <Link
                    href="/contact"
                    className={`hidden md:block px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
                        isHome && !scrolled
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                    Inquire
                </Link>
            </div>
        </nav>
    );
}