"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-24">
                    <div>
                        <span className="font-mono text-xs font-bold tracking-widest text-gray-600 uppercase">Inquire</span>
                        <h1 className="text-6xl md:text-8xl font-normal mt-6 mb-12 leading-none text-black">
                            LET'S <br /> <span className="font-bold">CREATE.</span>
                        </h1>
                        <div className="space-y-8 text-lg font-medium text-gray-800">
                            <p>
                                We take on a limited number of weddings and events each year to ensure
                                the highest quality of work and attention to detail.
                            </p>

                            <div className="pt-8 space-y-4">
                                <a href="mailto:hypervisuals.creative@gmail.com" className="flex items-center gap-4 text-black hover:text-gray-600 transition-colors font-bold">
                                    <Mail className="w-5 h-5" /> hypervisuals.creative@gmail.com
                                </a>
                                <a href="https://wa.me/94704877689" className="flex items-center gap-4 text-black hover:text-gray-600 transition-colors font-bold">
                                    <MessageCircle className="w-5 h-5" /> +94 70 487 7689
                                </a>
                                <a href="https://instagram.com/hyper_visuals.lk" className="flex items-center gap-4 text-black hover:text-gray-600 transition-colors font-bold">
                                    <Instagram className="w-5 h-5" /> @hyper_visuals.lk
                                </a>
                            </div>

                            {/* --- GOOGLE MAP SECTION --- */}
                            <div className="mt-12 h-64 w-full bg-gray-200 rounded-xl overflow-hidden relative shadow-sm group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.5863874366!2d79.8211858971408!3d6.921833446006509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1706680000000!5m2!1sen!2slk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-700 group-hover:filter-none"
                                />
                                <a
                                    href="https://share.google/pxbETJCy0f1gitS8o"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 left-4 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-black hover:text-white transition-colors text-black flex items-center gap-2 rounded-lg"
                                >
                                    <MapPin size={14} /> Get Directions
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="bg-gray-100 p-12 rounded-xl">
                        <form action="https://formsubmit.co/hypervisuals.creative@gmail.com" method="POST" className="space-y-12">
                            <input type="hidden" name="_subject" value="New Inquiry - Hyper Visuals" />
                            <input type="text" name="_honey" className="hidden" />

                            <div className="space-y-2">
                                <label className="text-xs font-bold font-mono uppercase text-gray-700">Name</label>
                                <input type="text" name="name" required className="w-full bg-transparent border-b-2 border-gray-400 py-3 text-black font-medium focus:outline-none focus:border-black transition-colors placeholder-gray-500" placeholder="John Doe" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold font-mono uppercase text-gray-700">Email</label>
                                <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-gray-400 py-3 text-black font-medium focus:outline-none focus:border-black transition-colors placeholder-gray-500" placeholder="john@example.com" />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold font-mono uppercase text-gray-700">Event Date</label>
                                    <input type="date" name="date" className="w-full bg-transparent border-b-2 border-gray-400 py-3 text-black font-medium focus:outline-none focus:border-black transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold font-mono uppercase text-gray-700">Location</label>
                                    <input type="text" name="location" className="w-full bg-transparent border-b-2 border-gray-400 py-3 text-black font-medium focus:outline-none focus:border-black transition-colors placeholder-gray-500" placeholder="City, Venue" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold font-mono uppercase text-gray-700">Tell us your story</label>
                                <textarea name="message" required className="w-full bg-transparent border-b-2 border-gray-400 py-3 h-32 text-black font-medium resize-none focus:outline-none focus:border-black transition-colors placeholder-gray-500" placeholder="What are you envisioning?"></textarea>
                            </div>

                            <button type="submit" className="group flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:opacity-70 transition-opacity pt-4 text-black">
                                Send Inquiry <span className="w-12 h-0.5 bg-black group-hover:w-20 transition-all"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}