import React from "react";
import { Instagram, Mail, MapPin } from "lucide-react";

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
                        <a href="https://instagram.com/hyper_visuals.lk" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                            <Instagram size={16}/> Instagram
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