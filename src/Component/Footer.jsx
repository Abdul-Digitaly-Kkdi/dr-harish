import React from "react";

const quickLinks = [
    { menu: 'Home', link: '/' },
    { menu: 'About us', link: 'about' },
    { menu: 'Services', link: 'services' },
    { menu: 'Contact', link: 'contact' },
    { menu: 'Appoinment', link: '#appoinment' },
];

const services = [
    { service: "Joint Replacement", link: "/services" },
    { service: "Hip Arthroscopy", link: "/services" },
    { service: "Wrist Arthroscopy", link: "/services" },
    { service: "Knee Arthroscopy", link: "/services" },
    { service: "Ankle Arthroscopy", link: "/services" },
    { service: "Elbow Arthroscopy", link: "/services" },
    { service: "Shoulder Arthroscopy", link: "/services" },
    { service: "Wrist and Hand Arthroscopy", link: "/services" },
];

const Footer = () => {
    return (
        <footer className="bg-[#2f3034] text-white text-sm bg-cover bg-center">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Section */}
                <div>
                    <p className="mb-4 leading-relaxed text-base text-justify">
                        Expert Orthopaedic Care for a Pain–Free Life
                        We specialize in advanced arthroscopy, joint replacement, and sports
                        injury treatments, providing personalized care for faster recovery
                        and long–term wellness
                    </p>
                    <p className="text-white font-semibold mt-4">
                        (+91) 93612 05598
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
                    <ul className="space-y-1 list-inside list-none text-base">
                        {quickLinks.map((link, index) => (
                            <li key={index} className="hover:underline transform duration-500">
                                <a href={link.link}>{link.menu}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Our Services</h4>
                    <div className="space-y-1 list-none list-inside text-base flex flex-col">
                        {services.map((service, index) => (
                            <a key={index} href={service.link}>{service.service}</a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-white/30 mt-4">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white">
                    <p>Expert Orthopaedic Surgeon | Restoring Mobility</p>
                    <p>Copyright © 2025. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
