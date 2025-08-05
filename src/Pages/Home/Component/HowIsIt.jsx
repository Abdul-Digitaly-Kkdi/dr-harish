import React from "react";
import { FaRegFileAlt, FaUserMd, FaUserFriends } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";

const steps = [
    {
        icon: <FaRegFileAlt className="text-3xl text-blue-900" />,
        title: "Make an Appointment",
        description:
            "Scheduling your consultation is easy. Simply book an appointment online or call us, and our team will assist you in selecting a convenient time.",
    },
    {
        icon: <FaUserMd className="text-3xl text-blue-900" />,
        title: "Get a Consultation",
        description:
            "Meet with our experienced orthopaedic specialists to discuss your concerns. We conduct a thorough evaluation to understand your condition and recommend the best treatment options.",
    },
    {
        icon: <FaUserFriends className="text-3xl text-blue-900" />,
        title: "Meet Our Therapist",
        description:
            "Our dedicated physiotherapists and specialists will guide you through personalized rehabilitation and recovery programs, ensuring you get the best care for long-term health.",
    },
    {
        icon: <MdOutlineSelfImprovement className="text-3xl text-blue-900" />,
        title: "Hands–On Therapy",
        description:
            "We provide advanced treatments, including physiotherapy, pain management, and minimally invasive procedures, designed to help you recover faster and stronger.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-background-color py-16 px-4 text-center relative overflow-hidden -z-20">
            <div className="max-w-5xl mx-auto">
                <p className="text-3xl md:text-4xl text-yellow-600 font-semibold tracking-widest mb-2">HOW IT WORK</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-color mb-10 leading-snug">
                    A Patient-Centered Approach for Effective, <br /> Long-Lasting Results
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 z-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-md transition ${index % 2 == 1 ? 'md:mt-10 ' : 'md:mb-10'}`}
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[-80px] left-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 -z-10"></div>
            <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 -z-10"></div>
        </section>
    );
};

export default HowItWorks;
