import React, { useState } from "react";
import { FaPlus, FaTooth } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from '../assets/Main/Logo.png'
import { useNavigate } from "react-router";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { menu: 'Home', link: '/' },
        { menu: 'About us', link: 'about' },
        { menu: 'Services', link: 'services' },
        { menu: 'Contact', link: 'contact' },
    ];


    return (
        <nav className="bg-background-color shadow-sm sticky top-0 z-50">

            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 xl:px-0">
                {/* Logo */}
                <div className="flex items-center w-16 cursor-pointer" onClick={() => navigation('/')}>
                    <img src={logo} alt='Logo' />
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.link}
                            className={`text-primary-color font-semibold text-base lg:text-lg hover:text-accent-gold px-2 py-1 `}
                        >
                            {link.menu}
                        </a>
                    ))}
                    <button className="bg-accent-red px-4 py-2 rounded-md text-white hover:bg-accent-gold transition flex items-center gap-2 cursor-pointer"
                        onClick={() => navigation('#appoinment')}
                    >
                        <FaPlus /> Make an Appointment
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 pb-4">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.link}
                            className="block px-3 py-2 rounded hover:bg-gray-100"
                        >
                            {link.menu}
                        </a>
                    ))}
                    <button className="w-[50%] ml-3 bg-accent-gold text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
                        Make a Appointment
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Header;
