import React from "react";
import hero from '../../../assets/Main/Hero.png'
import { FaMap, FaUserDoctor } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";

const HeroSection = () => {

    const data = [
        {
            number: "8+",
            title: "Professional Staff",
            icon: <FaUserDoctor />
        },
        {
            number: "2",
            title: "Branch Clinic",
            icon: <FaClinicMedical />
        },
        {
            number: "7,375+",
            title: "Satisfied Clients",
            icon: <ImUserCheck />
        },
    ]

    const consultations = [
        "Trp Poly clinic, Thillainagar Trichy",
        "Srinidhi Hospital, Sundar Nagar, Trichy",
        "Harshamitra Hospital, Nagamangalam, Trichy",
        "Velan Speciality, Subramaniyapuram, Trichy"
    ];

    return (
        <section className="bg-background-color/60 relative overflow-hidden py-12 px-4 ">
            <div className="mx-auto max-w-6xl">
                {/* Decorative Circles */}
                <div className="absolute top-[-80px] left-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 z-0"></div>
                <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 z-0"></div>

                <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                    {/* Left Text */}
                    <div className="text-center lg:text-left max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-color mb-6">
                            Expert Orthopaedic Care for Pain Relief & Restored Mobility
                        </h1>
                        <p className="text-gray-600 mb-6 text-justify md:text-start">
                            Begin your journey to a pain-free life with care that’s personal and precise. With over 20 years of experience, Dr. Harish is a trusted orthopaedic specialist known for treating joint pain, sports injuries, and complex bone conditions. Every treatment plan is uniquely tailored — no shortcuts, just expert care. Whether you're an athlete recovering from an injury or dealing with chronic knee or shoulder pain, Dr. Harish uses minimally invasive techniques and advanced joint replacement solutions to help you heal faster, move better, and live pain-free.
                        </p>
                        <button className="bg-accent-red hover:bg-accent-gold text-white font-medium px-6 py-3 cursor-pointer rounded-md transition duration-300">
                            Book an appointment
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="bg-blue-300 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-xl md:rounded-[60px] overflow-hidden shadow-lg">
                                <img
                                    src={hero}
                                    alt="Dentist treating patient"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-background-color flex flex-col sm:flex-row gap-5 mt-5 py-5 z-10">
                    {data.map((data, i) => (
                        <div className="flex flex-col justify-center gap-3 items-center w-full ">
                            <p className="text-3xl text-accent-gold">{data.icon}</p>
                            <p className="text-lg font-semibold">{data.number}</p>
                            <p className="text-primary-color text-xl font-semibold">{data.title}</p>
                        </div>
                    ))
                    }
                </div>
                {/* <div className="bg-accent-gold group relative transform rounded-b-2xl shadow-md p-6 md:p-10 max-w-6xl mx-auto">
                    <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-8 items-start z-10">
                 
                        <div className="flex items-start gap-4">
                            <div className="bg-background-color p-4 rounded-lg">
                                <FaMap className="w-8 h-8 text-accent-red" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">Our Location</h2>
                                <p className="text-primary-color font-semibold leading-relaxed">
                                    No-1, Jail Corner, Highways Colony, Subramaniyapuram,<br />
                                    Tiruchirappalli, Tamil Nadu - 620020
                                </p>
                            </div>
                        </div>

                       
                        <div className="flex items-start gap-4">
                            <div className="bg-background-color  p-4 rounded-lg">
                                <FaMap className="w-8 h-8 text-accent-red" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">My Consultations</h2>
                                <ol className="list-decimal list-inside text-primary-color font-semibold space-y-1">
                                    {consultations.map((place, index) => (
                                        <li key={index}>{place}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;
