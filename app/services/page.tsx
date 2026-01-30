"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const packages = [
    {
        title: "The Starter Snap",
        subtitle: "Budget",
        price: "LKR 20,000",
        description: "Best for: Birthday parties, small gatherings, or clients who only need photos.",
        details: {
            crew: "1 Photographer",
            preProduction: ["Phone consultation to discuss key moments."],
            production: ["Coverage: Up to 5 Hours."],
            postProduction: ["150+ Color-corrected high-res images.", "Delivered via Google Drive/Cloud Link within 7 days."]
        },
        addOn: "Add Drone for +LKR 8,000"
    },
    {
        title: "The Duo Coverage",
        subtitle: "Standard",
        price: "LKR 35,000",
        description: "Best for: Engagement parties, homecomings, or simple Events.",
        details: {
            crew: "1 Photographer + 1 Videographer",
            preProduction: ["Shot list creation.", "Coordination with event agenda."],
            production: ["Coverage: Up to 6 Hours.", "Full HD (1080p) Video recording."],
            postProduction: ["150+ Edited Photos.", "3-minute Cinematic Highlight Video.", "Raw footage provided on request."]
        },
        addOn: "Add Drone for +LKR 8,000"
    },
    {
        title: "The Pro Storyteller",
        subtitle: "Premium",
        price: "LKR 50,000",
        description: "Best for: Live Music Events or Corporate Events where you need to capture guests and the key people simultaneously.",
        details: {
            crew: "2 Photographers + 1 Videographer",
            note: "(Note: Having a 2nd photographer allows one to focus on the couple/VIPs and the other on candid guest reactions).",
            preProduction: ["Site visit.", "Mood board planning."],
            production: ["Coverage: Up to 6 Hours.", "4K Video Setup (Sony Mirrorless)."],
            postProduction: ["350+ Signature Edited Photos.", "5-minute Highlight Film + Reels."]
        },
        addOn: "Add Drone for +LKR 8,000"
    },
    {
        title: "The \"Hyper\" Cinema",
        subtitle: "Elite - RED Combo Pack",
        price: "LKR 180,000",
        description: "Best for: High-end Events, Music Videos, or Luxury Commercial Events. This is your flagship package.",
        isElite: true,
        details: {
            crew: "3 Photographers + 1 Videographer (Cinematographer) + 1 Drone Operator",
            preProduction: ["Cinematic Storyboarding.", "Detailed lighting plan."],
            production: ["Coverage: Full Day.", "Main Camera: RED Komodo (Cinema Grade 6K Quality).", "Aerial: Professional Drone Pilot included (4K Aerials)."],
            postProduction: ["600+ Edited Retouched Photos + 50 \"Fine Art\" retouched portraits.", "Movie-grade Color Grading (Davinci Resolve).", "1-minute Teaser (Instagram Ready) + 10-15 minute Cinematic Short Film."]
        }
    }
];

const addOns = [
    { item: "Aerial (Drone) Coverage", price: "LKR 10,000", details: "Adds 20-30 mins of flight time for establishing shots. (Included in Elite Package)." },
    { item: "360 Video Booth", price: "LKR 30,000", details: "Includes slow-motion capture, instant sharing station, and props. Great for guest interaction." }
];

export default function Services() {
    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <NavBar />

            <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="mb-24 text-center md:text-left">
                    <h1 className="text-6xl md:text-8xl font-normal tracking-tighter text-black">PACKAGES</h1>
                    <p className="font-mono text-sm tracking-widest text-gray-700 mt-4 uppercase max-w-2xl font-medium">
                        Curated experiences tailored for every scale. Competitive entry-level pricing for premium production value.
                    </p>
                </div>

                {/* PACKAGES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-32">
                    {packages.map((pkg, i) => (
                        <div key={i} className={`relative flex flex-col justify-between p-8 border ${pkg.isElite ? 'bg-black text-white border-black shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 border-gray-300'} transition-all hover:shadow-xl`}>
                            <div>
                                <div className="mb-6 border-b border-opacity-20 pb-6" style={{ borderColor: pkg.isElite ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }}>
                                    <h3 className="text-2xl font-medium mb-1">{pkg.title}</h3>
                                    <span className={`text-xs font-bold font-mono tracking-widest uppercase ${pkg.isElite ? 'text-gray-300' : 'text-gray-600'}`}>{pkg.subtitle}</span>
                                    <p className="text-3xl font-bold mt-4">{pkg.price}</p>
                                </div>

                                <p className={`text-sm mb-8 leading-relaxed font-medium ${pkg.isElite ? 'text-gray-200' : 'text-gray-800'}`}>{pkg.description}</p>

                                <div className="space-y-6 text-sm">
                                    <div>
                                        <p className="font-bold mb-2 text-xs uppercase tracking-wide opacity-100">Crew</p>
                                        <p className="font-medium">{pkg.details.crew}</p>
                                        {pkg.details.note && <p className="text-xs mt-1 opacity-80 italic">{pkg.details.note}</p>}
                                    </div>

                                    <div>
                                        <p className="font-bold mb-2 text-xs uppercase tracking-wide opacity-100">Pre-Production</p>
                                        <ul className="list-disc list-inside space-y-1 opacity-100 font-medium">
                                            {pkg.details.preProduction.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold mb-2 text-xs uppercase tracking-wide opacity-100">Production</p>
                                        <ul className="list-disc list-inside space-y-1 opacity-100 font-medium">
                                            {pkg.details.production.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-bold mb-2 text-xs uppercase tracking-wide opacity-100">Post-Production</p>
                                        <ul className="list-disc list-inside space-y-1 opacity-100 font-medium">
                                            {pkg.details.postProduction.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {pkg.addOn && (
                                <div className={`mt-8 pt-6 border-t ${pkg.isElite ? 'border-white/30' : 'border-black/20'}`}>
                                    <p className="text-xs font-bold font-mono uppercase tracking-widest opacity-80 mb-2">Optional Add-On</p>
                                    <p className="font-bold">{pkg.addOn}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ADD ONS TABLE */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-normal mb-12 text-center tracking-tight text-black">OPTIONAL ADD-ONS</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="border-b-2 border-black">
                                <th className="py-4 font-bold font-mono text-xs uppercase tracking-widest text-black w-1/3">Item</th>
                                <th className="py-4 font-bold font-mono text-xs uppercase tracking-widest text-black w-1/6">Price</th>
                                <th className="py-4 font-bold font-mono text-xs uppercase tracking-widest text-black">Details</th>
                            </tr>
                            </thead>
                            <tbody>
                            {addOns.map((addon, index) => (
                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition-colors">
                                    <td className="py-6 pr-8 font-bold text-black">{addon.item}</td>
                                    <td className="py-6 pr-8 font-mono text-sm font-bold whitespace-nowrap text-black">{addon.price}</td>
                                    <td className="py-6 text-sm text-gray-900 font-medium leading-relaxed">{addon.details}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
