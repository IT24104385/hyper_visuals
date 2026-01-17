"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";

// --- Components ---

const NavBar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight text-black">
                <span className="text-hyper-blue">Hyper</span>Visuals
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                <a href="#about" className="hover:text-hyper-blue transition-colors">About</a>
                <a href="#work" className="hover:text-hyper-blue transition-colors">Our Work</a>
                <a href="#services" className="hover:text-hyper-blue transition-colors">Services</a>
                <a href="#team" className="hover:text-hyper-blue transition-colors">The Team</a>
                <a href="#reviews" className="hover:text-hyper-blue transition-colors">Reviews</a>
                <a href="#contact" className="hover:text-hyper-blue transition-colors">Contact</a>
            </div>
            <a
                href="#contact"
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-hyper-blue hover:shadow-lg hover:scale-105 transition-all duration-300"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90 z-10" />
            <div className="absolute inset-0 z-0">
                {/* Replace with your actual showreel video background */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center animate-slow-zoom"></div>
            </div>

            <div className="relative z-20 text-center max-w-4xl px-6">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 drop-shadow-2xl"
                >
                    CAPTURE THE <span className="text-hyper-blue">HYPE.</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-100 mb-8 font-light drop-shadow-md"
                >
                    Premium Event Videography & Photography
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#work"
                        className="flex items-center justify-center gap-2 bg-hyper-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-hyper-blue hover:scale-105 transition-all shadow-lg hover:shadow-hyper-blue/50"
                    >
                        View Gallery <ArrowRight size={20} />
                    </a>
                    <a
                        href="#services"
                        className="flex items-center justify-center gap-2 border border-white/60 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-hyper-blue transition-all"
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
        <section id="about" className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/50"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Hyper Visuals</h2>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Hyper Visuals is a full-stack event media production company delivering high-impact
                        photography, videography, and cinematic storytelling. We specialize in capturing live
                        events at scale—concerts, festivals, corporate activations, and private showcases—
                        transforming moments into premium visual assets that drive brand value and audience
                        engagement.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Our workflow is production-grade from pre-event planning to post-production delivery. We
                        operate with professional cinema cameras, dynamic lighting control, multi-angle coverage,
                        and narrative-driven editing to ensure every frame aligns with the client's brand
                        positioning. The output is clean, intentional, and optimized for digital distribution,
                        social media, and long-term archival use.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Hyper Visuals doesn't just document events—we package experiences. We focus on
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
        <section id="work" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 bg-white/60 backdrop-blur-sm inline-block p-6 rounded-2xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Selected Works</h2>
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
                            className={`group ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
                        >
                            {/* Fixed Corners: 
                                Applied rounded-2xl and overflow-hidden to the inner container directly.
                                Added isolation and transform fixes to keep corners crisp during hover.
                            */}
                            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 isolate transform-gpu">
                                <Image
                                    src={src}
                                    alt="Event photography"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <p className="font-bold text-2xl mb-1">Event Title {index + 1}</p>
                                    <p className="text-sm text-gray-200 font-medium tracking-wide">PHOTOGRAPHY</p>
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
    const teamMembers = [
        {
            name: "Rayon Senuka",
            role: "Creative Director",
            description: "Overseeing creative vision and ensuring brand consistency.",
            imageSrc: "/team/team-1.jpg"
        },
        {
            name: "Senuka Rosa",
            role: "Lead Photographer",
            description: "Capturing candid moments and stunning visual narratives.",
            imageSrc: "/team/team-2.jpg"
        },
        {
            name: "Minusha Chalindu",
            role: "Lead Videographer",
            description: "Specializing in cinematic edits and high-energy event coverage.",
            imageSrc: "/team/team-3.jpg"
        },
        {
            name: "Kanishka Lanza",
            role: "Drone Operator",
            description: "Providing breathtaking aerial shots and dynamic perspectives.",
            imageSrc: "/team/team-4.jpg"
        },
        {
            name: "Shenal Nethmina",
            role: "Photographer",
            description: "Focused on capturing the details and emotions that tell a story.",
            imageSrc: "/team/team-5.jpg"
        },
    ];

    return (
        <section id="team" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 bg-white/50 backdrop-blur-sm py-8 rounded-3xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">The Creatives</h2>
                    <p className="text-gray-800 max-w-2xl mx-auto text-lg">
                        We are a team of passionate storytellers obsessed with light, composition, and emotion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((teamMember, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-full h-72 bg-gray-200 rounded-2xl mb-6 relative overflow-hidden shadow-inner">
                                <Image
                                    src={teamMember.imageSrc}
                                    alt={teamMember.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{teamMember.name}</h3>
                            <p className="text-hyper-blue font-bold mb-3 text-sm">{teamMember.role.toUpperCase()}</p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {teamMember.description}
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
        <section id="reviews" className="py-24 bg-hyper-dark text-white relative overflow-hidden">
            {/* Subtle Texture/Pattern for dark section */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-5xl font-bold mb-6">Don't take our word for it.</h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        We've captured over 500+ events across the country. Here is what our clients have to say about the Hyper experience.
                    </p>
                    <div className="flex gap-2 text-hyper-blue mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                    </div>
                    <p className="font-bold text-3xl">5.0 Star Rating</p>
                </div>

                <div className="space-y-6">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
                        >
                            <p className="text-xl italic mb-6 text-gray-100">
                                "Hyper Visuals completely transformed how we see our corporate events. The highlight reel was cinematic quality."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hyper-blue to-purple-600 shadow-lg" />
                                <div>
                                    <p className="font-bold text-lg">Sarah Jenkins</p>
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
        <section id="services" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center bg-white/50 backdrop-blur-sm py-8 rounded-3xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
                    <p className="text-gray-800 max-w-2xl mx-auto text-lg">
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
                            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/50 hover:border-hyper-blue/50 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-hyper-blue transition-colors">{service.title}</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                            <ul className="space-y-3 text-sm text-gray-600">
                                {service.details.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-hyper-blue" />
                                        {item}
                                    </li>
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
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center bg-white/50 backdrop-blur-sm py-8 rounded-3xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Packages</h2>
                    <p className="text-gray-800 max-w-2xl mx-auto text-lg">
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
                            className={`rounded-3xl p-8 border backdrop-blur-md transition-all duration-300 hover:shadow-2xl ${
                                index === 1
                                    ? "bg-black/95 text-white border-hyper-blue shadow-2xl scale-105 md:scale-110 z-10"
                                    : "bg-white/90 text-gray-900 border-white/50"
                            }`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                            <p className="text-hyper-blue font-bold text-xl mb-4">{pkg.price}</p>
                            <p className={`text-sm mb-6 ${index === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                                {pkg.description}
                            </p>
                            <ul className="space-y-3 text-sm mb-8">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-hyper-blue shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`inline-flex items-center justify-center w-full rounded-full px-4 py-3 text-sm font-bold transition-all shadow-lg ${
                                    index === 1
                                        ? "bg-hyper-blue text-white hover:bg-white hover:text-hyper-blue"
                                        : "bg-black text-white hover:bg-hyper-blue hover:scale-105"
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
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to capture your event?</h2>
                    <p className="text-gray-800 mb-8 text-lg">
                        Tell us a bit about your event and we'll get back to you within 24 hours with
                        availability and next steps.
                    </p>
                    <div className="space-y-4 text-gray-800">
                        <p className="flex items-center gap-3">
                            <Mail className="text-hyper-blue" /> 
                            <span className="font-medium">hello@hypervisuals.studio</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin className="text-hyper-blue" />
                            <span className="font-medium">Based in: Your City, available worldwide</span>
                        </p>
                    </div>
                </div>

                <form className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 space-y-5 shadow-2xl border border-white/50">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue focus:bg-white transition-all"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue focus:bg-white transition-all"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Event Type</label>
                        <input
                            type="text"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue focus:bg-white transition-all"
                            placeholder="Wedding, festival, corporate, etc."
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Date</label>
                            <input
                                type="date"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue focus:bg-white transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Location</label>
                            <input
                                type="text"
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue focus:bg-white transition-all"
                                placeholder="City, venue"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Tell us about your event</label>
                        <textarea
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-hyper-blue focus:bg-white transition-all"
                            placeholder="Number of guests, schedule, what kind of content you need..."
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-black text-white py-4 rounded-full text-sm font-bold hover:bg-hyper-blue hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                        Send enquiry (mock)
                    </button>
                    <p className="text-xs text-center text-gray-400">
                        This form is for demo purposes only.
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
                <a 
                    href="https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_CID" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Google Business page"
                    className="hover:text-hyper-blue cursor-pointer transition-colors transform hover:scale-110"
                >
                    <MapPin size={24} />
                </a>
                <a 
                    href="mailto:info@hypervisuals.com" 
                    aria-label="Send us an email"
                    className="hover:text-hyper-blue cursor-pointer transition-colors transform hover:scale-110"
                >
                    <Mail size={24} />
                </a>
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
                © 2024 Hyper Visuals. All rights reserved.
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="min-h-screen">
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
