import React from "react";
import doctor from "../../../assets/ServicePage.jpg";
import { useNavigate } from "react-router";
import SEO from "../../../Component/Seo";

const ServiceSection = () => {

    const nav = useNavigate()

    return (
        <>
            <SEO
                title="Orthopaedic Treatments in Trichy | Dr Harish Ortho Services"
                description="Dr Harish provides complete orthopaedic treatments in Trichy including knee pain care, joint replacement, fracture treatment and sports injuries."
            />

            <section className="bg-background-color/70 py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-accent-gold uppercase tracking-widest font-semibold text-[32px] animate-fade-in">
                            Our Services
                        </p>
                        <h2 className="text-3xl font-bold text-primary-color leading-tight animate-fade-in delay-200">
                            Comprehensive Orthopaedic Care: Pain Relief & Restored Mobility - Our Strength
                        </h2>
                        <p className="text-gray-700 text-lg animate-fade-in delay-300 text-justify">
                            At our state-of-the-art ortho care hospital in Trichy, we give our patients a complete and bespoke bone and joint solution under one roof. We're led by some of the very best orthopaedic doctors in the region, and our team - made up of the top orthopedic surgeons - have a reputation for delivering accurate diagnoses, using cutting edge treatments, and sorting out long-term recovery plans that really work.
                        </p>
                        <p className="text-gray-700 text-lg animate-fade-in delay-300 text-justify">
                            Our team in Trichy combines the latest medical technology with a genuine patient-centric approach - to help folk get back on their feet (literally!), reduce pain, and get active again with the minimum of hassle.
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
        </>
    );
};

export default ServiceSection;
