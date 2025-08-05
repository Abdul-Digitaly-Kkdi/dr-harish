import React from "react";
import doctor from "../../../assets/ServicePage.jpg";
import { useNavigate } from "react-router";

const ServiceSection = () => {

    const nav = useNavigate()

    return (
        <section className="bg-background-color/70 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <p className="text-accent-gold uppercase tracking-widest font-semibold text-xl animate-fade-in">
                        Our Services
                    </p>
                    <h2 className="text-4xl font-bold text-primary-color leading-tight animate-fade-in delay-200">
                        Cutting-edge Physiotherapy Services for Optimal Recovery
                    </h2>
                    <p className="text-gray-700 text-lg animate-fade-in delay-300 text-justify">
                        HOMC is more than just a clinic—it's a place where your health and comfort are prioritized. Our expert chiropractors and physiotherapists are dedicated to providing treatment plans that are tailored to your individual needs.
                    </p>
                    <button className="cursor-pointer mt-4 inline-block px-6 py-3 bg-accent-red text-white font-semibold rounded-lg shadow-md hover:bg-accent-gold"
                        onClick={() => nav('/contact')}
                    >
                        Contact Now
                    </button>
                </div>

                {/* Image */}
                <div className="relative w-full h-full animate-fade-in delay-700">
                    <img
                        src={doctor}
                        alt="Doctor performing surgery"
                        className="w-full h-auto rounded-3xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
