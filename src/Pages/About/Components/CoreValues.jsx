import React from "react";
import core from '../../../assets/Corevalues.jpg'

const coreValues = [
    {
        number: "01",
        title: "Personalized Treatment Plans",
        text: "Every patient’s condition and recovery journey is unique. We create customised treatment plans based on accurate diagnosis, lifestyle needs, and recovery goals to ensure the best possible outcomes and long-term joint health.",
    },
    {
        number: "02",
        title: "Experienced Professionals",
        text: "Our team of highly skilled orthopaedic specialists brings years of experience in treating joint disorders, bone conditions, and sports injuries. Using advanced techniques and evidence-based practices, we ensure precise diagnosis and effective treatment.",
    },
    {
        number: "03",
        title: "Comprehensive Services",
        text: "From minimally invasive arthroscopy and advanced joint replacement procedures to sports injury management and rehabilitation, we offer a complete range of orthopaedic services under one roof for seamless and coordinated care.",
    },
    {
        number: "04",
        title: "Holistic Approach to Healing",
        text: "We focus on treating the root cause, not just the symptoms. Our holistic approach combines minimally invasive treatments, physiotherapy, pain management, lifestyle guidance, and long-term wellness strategies to support complete recovery and sustained mobility.",
    },
];

const CoreValues = () => {
    return (
        <div className="bg-gray-50 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Side: Values List */}
                <div className="space-y-8 order-1">
                    {coreValues.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-3xl font-bold text-sky-800 min-w-[50px]">
                                {item.number}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Heading + Image */}
                <div className="space-y-6">
                    <div>
                        <p className="text-yellow-600 font-medium uppercase tracking-wide text-base">
                            Our Value
                        </p>
                        <h2 className="text-3xl md:text-[32px] font-bold text-primary-color mt-2">
                            Our Core Values: Guiding Principles of Quality Care
                        </h2>
                    </div>
                    <div>
                        <img
                            src={core} // replace with actual image
                            alt="Physiotherapy session"
                            className="rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
