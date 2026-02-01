"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Explicit colors for better visibility
    const textColor = isHome && !scrolled && !isOpen ? "text-white drop-shadow-md" : "text-black";
    const navBg = scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent";

    const navLinks = ["About", "Work", "Services", "Team", "Contact"];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg} py-6`}>
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* LOGO */}
                    <Link href="/" className={`text-2xl font-normal tracking-tighter ${textColor} transition-colors duration-500 relative z-50`}>
                        HYPER <span className="font-bold">VISUALS</span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className={`hidden md:flex gap-12 text-xs font-bold tracking-[0.2em] uppercase z-50 ${textColor} transition-colors duration-500`}>
                        {navLinks.map((item) => (
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

                    {/* ACTIONS (Desktop Inquire + Mobile Menu Toggle) */}
                    <div className="flex items-center gap-4 z-50">
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

                        {/* HAMBURGER BUTTON (Visible on Mobile/Tablet) */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`md:hidden p-2 ${textColor} transition-colors duration-500 hover:opacity-70`}
                        >
                            <Menu size={28} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* SIDEBAR MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl flex flex-col justify-between p-8 sm:p-12"
                        >
                            {/* Header: Close Button */}
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X size={32} strokeWidth={1} className="text-black" />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <div className="flex flex-col gap-8 mt-8">
                                <span className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase mb-4">Menu</span>
                                {navLinks.map((item, i) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl sm:text-5xl font-light tracking-tight text-black hover:pl-4 hover:text-gray-600 transition-all duration-300"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>

                            {/* Footer: Contact Info */}
                            <div className="space-y-6">
                                <div className="w-full h-px bg-gray-200" />
                                <div className="space-y-4">
                                    <h3 className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase">Contact</h3>
                                    <a href="mailto:hypervisuals.creative@gmail.com" className="flex items-center gap-3 text-sm font-medium text-gray-800 hover:text-black">
                                        <Mail size={16} /> hypervisuals.creative@gmail.com
                                    </a>
                                    <p className="flex items-center gap-3 text-sm font-medium text-gray-800">
                                        <MapPin size={16} /> Negombo, Sri Lanka
                                    </p>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href="https://instagram.com/hyper_visuals.lk" target="_blank" className="text-black hover:scale-110 transition-transform">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
