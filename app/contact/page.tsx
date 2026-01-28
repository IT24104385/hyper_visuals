"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-24">
                    <div>
                        <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">Inquire</span>
                        <h1 className="text-6xl md:text-8xl font-light mt-6 mb-12 leading-none">
                            LET'S <br /> <span className="font-bold">CREATE.</span>
                        </h1>
                        <div className="space-y-8 text-lg font-light text-gray-600">
                            <p>
                                We take on a limited number of weddings and events each year to ensure
                                the highest quality of work and attention to detail.
                            </p>

                            <div className="pt-8 space-y-4">
                                <a href="mailto:hypervisuals.creative@gmail.com" className="flex items-center gap-4 text-black hover:text-gray-500 transition-colors">
                                    <Mail className="w-5 h-5" /> hypervisuals.creative@gmail.com
                                </a>
                                <a href="https://wa.me/94767618727" className="flex items-center gap-4 text-black hover:text-gray-500 transition-colors">
                                    <MessageCircle className="w-5 h-5" /> +94 76 761 8727
                                </a>
                                <a href="https://instagram.com/hyper_visuals.lk" className="flex items-center gap-4 text-black hover:text-gray-500 transition-colors">
                                    <Instagram className="w-5 h-5" /> @hyper_visuals.lk
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-12">
                        <form action="https://formsubmit.co/hypervisuals.creative@gmail.com" method="POST" className="space-y-12">
                            <input type="hidden" name="_subject" value="New Inquiry - Hyper Visuals" />
                            <input type="text" name="_honey" className="hidden" />

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-500">Name</label>
                                <input type="text" name="name" required className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-500">Email</label>
                                <input type="email" name="email" required className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-gray-500">Event Date</label>
                                    <input type="date" name="date" className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase text-gray-500">Location</label>
                                    <input type="text" name="location" className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-500">Tell us your story</label>
                                <textarea name="message" required className="w-full bg-transparent border-b border-gray-300 py-3 h-32 text-black resize-none focus:outline-none focus:border-black transition-colors"></textarea>
                            </div>

                            <button type="submit" className="group flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:opacity-60 transition-opacity pt-4">
                                Send Inquiry <span className="w-12 h-px bg-black group-hover:w-20 transition-all"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}