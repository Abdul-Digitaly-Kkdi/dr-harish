import React from "react";
import core from '../../../assets/Corevalues.jpg'

const coreValues = [
    {
        number: "01",
        title: "Personalized Treatment Plans",
        text: "Every patient is unique, and so is their treatment. We provide customized care plans tailored to your specific condition and recovery goals, ensuring the best possible outcome.",
    },
    {
        number: "02",
        title: "Experienced Professionals",
        text: "Our team of highly skilled orthopaedic specialists has years of experience treating joint, bone, and sports injuries with advanced techniques, ensuring expert diagnosis and treatment.",
    },
    {
        number: "03",
        title: "Comprehensive Services",
        text: "From arthroscopy and joint replacements to sports injury rehabilitation, we offer a full spectrum of orthopaedic solutions under one roof, ensuring seamless and efficient care.",
    },
    {
        number: "04",
        title: "Holistic Approach to Healing",
        text: "We treat the root cause, not just symptoms. Our approach includes minimally invasive treatments, physiotherapy, lifestyle changes, and long-term wellness strategies.",
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
                        <p className="text-yellow-600 font-medium uppercase tracking-wide text-xl">
                            Our Value
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-color mt-2">
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
