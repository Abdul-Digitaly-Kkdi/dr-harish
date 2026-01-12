import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Main/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";

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

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
    label: "Facebook",
    bg: "bg-[#1877F2]",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
    label: "Instagram",
    bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/",
    label: "Twitter",
    bg: "bg-black",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/",
    label: "YouTube",
    bg: "bg-[#FF0000]",
  }
];


/* ===========================
   Footer Component
=========================== */

const Footer = () => {
  const navigation = useNavigate();

  return (
    <footer className="bg-[#2f3034] text-white text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <div
            className="flex items-center gap-3 mb-4 cursor-pointer"
            onClick={() => navigation("/")}
          >
            <img
              src={logo}
              alt="Hospital Logo"
              className="w-16 h-auto object-contain  bg-background-color rounded-md p-2 shadow-md"
            />
            {/* <h2 className="text-lg font-bold tracking-wide">
              Sri Ramakrishna Specialty Hospital
            </h2> */}
          </div>

          <p className="leading-relaxed text-base text-justify mb-4">
            Expert Orthopaedic Care for a Pain-Free Life. We specialize in
            advanced arthroscopy, joint replacement, and sports injury
            treatments, providing personalized care for faster recovery and
            long-term wellness.
          </p>

          <div className="mt-4 space-y-2">
            {/* Phone */}
            <p className="flex items-center gap-2 text-white font-semibold">
              <FaPhoneAlt size={16} />
              <a
                href="tel:+919361205598"
                className="hover:underline"
              >
                (+91) 93612 05598
              </a>
            </p>

            {/* Email */}
            <p className="flex items-center gap-2 text-white font-semibold">
              <MdEmail size={18} />
              <a
                href="mailto:info@sriramakrishnahospitaltrichy.com"
                className="hover:underline break-all"
              >
                drharishortho@gmail.com
              </a>
            </p>
          </div>


          {/* Social Media */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-white
        ${social.bg}
        hover:scale-110 transition-all duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </div>

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

        {/* Services */}
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white text-center md:text-left gap-2">
          <p>Expert Orthopaedic Surgeon | Restoring Mobility</p>
          <p>Copyright © 2026 Dr Harish Ortho. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
