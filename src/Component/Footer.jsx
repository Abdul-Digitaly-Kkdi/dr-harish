import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Main/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";

const quickLinks = [
  { menu: "Home", link: "/" },
  { menu: "About us", link: "/about" },
  { menu: "Services", link: "/services" },
  { menu: "Contact", link: "/contact" },
  { menu: "Appointment", link: "#appointment" },
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
  const navigation = useNavigate();

  return (
    <footer className="bg-[#2f3034] text-white text-sm bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section with Logo */}
        <div>
          <div
            className="flex items-center gap-3 mb-4 cursor-pointer"
            onClick={() => navigation("/")}
          >
            <img src={logo} alt="Logo" className="w-16 h-auto object-contain" />
            <h2 className="text-lg font-bold tracking-wide">
              {/* Add a site title here if needed */}
            </h2>
          </div>
          <p className="leading-relaxed text-base text-justify mb-4">
            Expert Orthopaedic Care for a Pain-Free Life. We specialize in
            advanced arthroscopy, joint replacement, and sports injury
            treatments, providing personalized care for faster recovery and
            long-term wellness.
          </p>
          <p className="flex items-center gap-2 text-white font-semibold mt-4">
            <FaPhoneAlt size={18} />
            (+91) 93612 05598
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3 border-b border-white/30 pb-1">
            Quick Links
          </h4>
          <ul className="space-y-2 text-base">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  className="hover:underline transition-all duration-300"
                >
                  {link.menu}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold text-lg mb-3 border-b border-white/30 pb-1">
            Our Services
          </h4>
          <ul className="space-y-2 text-base">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.link}
                  className="hover:underline transition-all duration-300"
                >
                  {service.service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white text-center md:text-left">
          <p>Expert Orthopaedic Surgeon | Restoring Mobility</p>
          <p>Copyright © 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
