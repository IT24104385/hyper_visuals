"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Star, ArrowRight, Instagram, Mail } from "lucide-react";
import Image from "next/image";

// --- Components ---

const NavBar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight text-black">
                <span className="text-hyper-blue">Hyper</span>Visuals
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <a href="#about" className="hover:text-hyper-blue transition-colors">About</a>
                <a href="#work" className="hover:text-hyper-blue transition-colors">Our Work</a>
                <a href="#services" className="hover:text-hyper-blue transition-colors">Services</a>
                <a href="#team" className="hover:text-hyper-blue transition-colors">The Team</a>
                <a href="#reviews" className="hover:text-hyper-blue transition-colors">Reviews</a>
                <a href="#contact" className="hover:text-hyper-blue transition-colors">Contact</a>
            </div>
            <a
                href="#contact"
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-hyper-blue transition-colors"
            >
                Book Now
            </a>
        </div>
    </nav>
);

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-hyper-dark text-white">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10" />
            <div className="absolute inset-0 z-0">
                {/* Replace with your actual showreel video background */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center animate-slow-zoom"></div>
            </div>

            <div className="relative z-20 text-center max-w-4xl px-6">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
                >
                    CAPTURE THE <span className="text-hyper-blue">HYPE.</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
                >
                    Premium Event Videography & Photography
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 justify-center"
                >
                    <a
                        href="#work"
                        className="flex items-center gap-2 bg-hyper-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-hyper-blue transition-all"
                    >
                        View Gallery <ArrowRight size={20} />
                    </a>
                    <a
                        href="#services"
                        className="flex items-center gap-2 border border-white/40 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-hyper-blue transition-all"
                    >
                        Our Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-bold mb-4">About Hyper Visuals</h2>
                    <p className="text-gray-700 text-lg">
                        Hyper Visuals is a full-stack event media production company delivering high-impact
                        photography, videography, and cinematic storytelling. We specialize in capturing live
                        events at scale—concerts, festivals, corporate activations, and private showcases—
                        transforming moments into premium visual assets that drive brand value and audience
                        engagement.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Our workflow is production-grade from pre-event planning to post-production delivery. We
                        operate with professional cinema cameras, dynamic lighting control, multi-angle coverage,
                        and narrative-driven editing to ensure every frame aligns with the client&apos;s brand
                        positioning. The output is clean, intentional, and optimized for digital distribution,
                        social media, and long-term archival use.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Hyper Visuals doesn&apos;t just document events—we package experiences. We focus on
                        clarity, emotion, and momentum, delivering visuals that cut through noise, scale across
                        platforms, and leave a lasting impression. In short: we execute, elevate, and deliver
                        visuals that perform.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const GallerySection = () => {
    const images = [
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800", // Wedding
        "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800", // Concert
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800", // Corporate
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800", // Party
    ];

    return (
        <section id="work" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                    <div className="w-20 h-1 bg-hyper-blue"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-2xl group ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
                        >
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src={src}
                                    alt="Event photography"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="font-bold text-xl">Event Title {index + 1}</p>
                                    <p className="text-sm text-gray-200">Photography</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamSection = () => {
    return (
        <section id="team" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">The Creatives</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are a team of passionate storytellers obsessed with light, composition, and emotion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <div className="w-full h-64 bg-gray-200 rounded-xl mb-6 relative overflow-hidden">
                                {/* Placeholder for team photo */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <Users size={48} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">Creative Name</h3>
                            <p className="text-hyper-blue font-medium mb-4">Lead Videographer</p>
                            <p className="text-gray-500 text-sm">
                                Specializing in cinematic edits and high-energy event coverage.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    return (
        <section id="reviews" className="py-24 bg-hyper-dark text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Don't take our word for it.</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        We've captured over 500+ events across the country. Here is what our clients have to say about the Hyper experience.
                    </p>
                    <div className="flex gap-2 text-hyper-blue mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
                    </div>
                    <p className="font-bold text-2xl">5.0 Star Rating</p>
                </div>

                <div className="space-y-6">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                        >
                            <p className="text-lg italic mb-4">
                                "Hyper Visuals completely transformed how we see our corporate events. The highlight reel was cinematic quality."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-500" />
                                <div>
                                    <p className="font-bold">Sarah Jenkins</p>
                                    <p className="text-sm text-gray-400">Event Manager, Tech Corp</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => {
    const services = [
        {
            title: "Wedding Films",
            description: "Cinematic storytelling that captures every emotion from your big day.",
            details: ["Full-day coverage", "Highlight film", "Social media cuts"],
        },
        {
            title: "Corporate Events",
            description: "Clean, on-brand visuals for conferences, launches and company culture.",
            details: ["Multi-camera setup", "Same-day edits", "Brand-safe delivery"],
        },
        {
            title: "Nightlife & Festivals",
            description: "High-energy edits designed to keep the hype going long after the lights go down.",
            details: ["Aftermovies", "Artist recaps", "Sponsor-focused content"],
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4">What We Do</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From intimate weddings to arena-scale festivals, we design coverage that fits your story,
                        your audience, and your brand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-hyper-blue/40 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <ul className="space-y-1 text-sm text-gray-500">
                                {service.details.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PackagesSection = () => {
    const packages = [
        {
            name: "Essential",
            price: "Starting at $1,200",
            description: "Perfect for intimate events and half-day coverage.",
            features: ["1 filmmaker", "Up to 5 hours coverage", "Highlight reel (2–3 min)"],
        },
        {
            name: "Signature",
            price: "Starting at $2,400",
            description: "Our most popular package for full-day events.",
            features: ["2 filmmakers", "Full-day coverage", "Highlight + full documentary edit"],
        },
        {
            name: "Hyper Experience",
            price: "Custom Quote",
            description: "For festivals, multi-day events and brand campaigns.",
            features: ["Creative strategy call", "Multi-day coverage", "Social-first content bundle"],
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4">Packages</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Every event is different, but these starting points make it easy to understand what
                        working with us looks like.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl p-8 border ${
                                index === 1
                                    ? "bg-black text-white border-hyper-blue shadow-xl scale-105 md:scale-100 md:-mt-4"
                                    : "bg-white border-gray-100"
                            }`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                            <p className="text-hyper-blue font-semibold mb-4">{pkg.price}</p>
                            <p className="text-sm mb-6 text-gray-400 md:text-gray-500">
                                {pkg.description}
                            </p>
                            <ul className="space-y-2 text-sm mb-8">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-hyper-blue" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`inline-flex items-center justify-center w-full rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                                    index === 1
                                        ? "bg-hyper-blue text-white hover:bg-white hover:text-hyper-blue"
                                        : "bg-black text-white hover:bg-hyper-blue"
                                }`}
                            >
                                Enquire about this package
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Ready to capture your event?</h2>
                    <p className="text-gray-600 mb-6">
                        Tell us a bit about your event and we&apos;ll get back to you within 24 hours with
                        availability and next steps.
                    </p>
                    <div className="space-y-2 text-gray-600">
                        <p><span className="font-semibold">Email:</span> hello@hypervisuals.studio</p>
                        <p><span className="font-semibold">Based in:</span> Your City, available worldwide</p>
                    </div>
                </div>

                <form className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Event Type</label>
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue"
                            placeholder="Wedding, festival, corporate, etc."
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Date</label>
                            <input
                                type="date"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Location</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue"
                                placeholder="City, venue"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Tell us about your event</label>
                        <textarea
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-hyper-blue"
                            placeholder="Number of guests, schedule, what kind of content you need..."
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-black text-white py-3 rounded-full text-sm font-semibold hover:bg-hyper-blue transition-colors"
                    >
                        Send enquiry (mock)
                    </button>
                    <p className="text-[11px] text-gray-400">
                        This form is for demo purposes only. Hook it up to your favourite form provider or email
                        service.
                    </p>
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
                <span className="text-hyper-blue">Hyper</span>Visuals
            </div>
            <div className="flex gap-6">
                <Instagram className="hover:text-hyper-blue cursor-pointer transition-colors" />
                <Mail className="hover:text-hyper-blue cursor-pointer transition-colors" />
            </div>
            <div className="text-gray-500 text-sm mt-4 md:mt-0">
                © 2024 Hyper Visuals. All rights reserved.
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <Hero />
            <AboutSection />
            <GallerySection />
            <ServicesSection />
            <PackagesSection />
            <TeamSection />
            <Testimonials />
            <ContactSection />
            <Footer />
        </main>
    );
}