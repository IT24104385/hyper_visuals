import React from "react";
import { Instagram, Facebook, Youtube, Linkedin, Mail, MapPin, Star } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-light tracking-tight mb-6">HYPER <span className="font-bold">VISUALS</span></h2>
                    <p className="text-gray-400 max-w-sm font-light leading-relaxed">
                        Crafting visual legacies for the bold and the timeless. Based in Sri Lanka, available worldwide.
                    </p>
                </div>
                <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-gray-500">Social</h3>
                    <div className="flex flex-col gap-4 text-sm text-gray-300">
                        <a href="https://instagram.com/hyper_visuals.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <Instagram size={16}/> Instagram
                        </a>
                        <a href="https://www.facebook.com/hypervisuals.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <Facebook size={16}/> Facebook
                        </a>
                        <a href="https://www.youtube.com/@HyperVisualslk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <Youtube size={16}/> YouTube
                        </a>
                        <a href="https://www.tiktok.com/@hyper.visuals.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> TikTok
                        </a>
                        <a href="https://www.linkedin.com/company/hyper-visuals-lk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <Linkedin size={16}/> LinkedIn
                        </a>
                        <a href="https://g.page/r/CR59x2wBtbxPEBE/review" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            <Star size={16}/> Google Review
                        </a>
                        <a href="mailto:hypervisuals.creative@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                            <Mail size={16}/> Email
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-gray-500">Office</h3>
                    <p className="text-sm text-gray-300 flex items-start gap-2">
                        <MapPin size={16} className="mt-1 shrink-0"/>
                        Negombo, Sri Lanka
                    </p>
                </div>
            </div>
            <div className="text-center text-xs font-mono tracking-widest uppercase text-gray-700 border-t border-gray-900 pt-8">
                &copy; {new Date().getFullYear()} Hyper Visuals. All Rights Reserved.
            </div>
        </footer>
    );
}