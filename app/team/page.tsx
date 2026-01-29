"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Instagram } from "lucide-react";

const team = [
    { name: "Rayon Fernando", role: "Creative Director", img: "/team/team-1.jpg" },
    { name: "Senuka Rosa", role: "Lead Photographer", img: "/team/team-2.jpg", link: "https://www.instagram.com/senuka.rosa/" },
    { name: "Minusha Chalindu", role: "Lead Videographer", img: "/team/team-3.jpg" },
    { name: "Kanishka Lanza", role: "Drone Pilot", img: "/team/team-4.jpg" },
    { name: "Shenal Nethmina", role: "Editor", img: "/team/team-5.jpg" },
    { name: "Thevindu Gunathilake", role: "Editor", img: "/team/team-6.jpg" },
];

export default function Team() {
    return (
        <main className="min-h-screen bg-white">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-24 text-center md:text-left text-black">THE ARTISTS</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {team.map((member, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[3/4] relative overflow-hidden bg-gray-200 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-sm">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-xl font-bold text-black">{member.name}</h3>
                                    <p className="text-xs font-mono font-bold tracking-widest uppercase text-gray-600 mt-1">{member.role}</p>
                                </div>
                                {member.link && (
                                    <a href={member.link} target="_blank" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors text-black">
                                        <Instagram size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
