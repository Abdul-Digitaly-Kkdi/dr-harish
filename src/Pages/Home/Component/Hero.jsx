import React from "react";
import hero from '../../../assets/Main/Hero.png'
import { FaMap, FaUserDoctor } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";
import SEO from "../../../Component/Seo";

const HeroSection = () => {

    const data = [
        {
            number: "8+",
            title: "Professional Staff",
            icon: <FaUserDoctor />
        },
        {
            number: "2",
            title: "Branch Clinics",
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
    // Scroll handler
    const scrollToAppointment = () => {
        const section = document.getElementById("appoinment"); // <-- id from Appointment.jsx
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <SEO
                title="Best Orthopaedic Doctor in Trichy | Dr Harish Ortho"
                description="Looking for the best orthopaedic doctor in Trichy? Dr Harish offers expert treatment for knee pain, joint issues, fractures & sports injuries."
            />

            <section className="bg-background-color/60 relative overflow-hidden py-12 px-4 ">
                <div className="mx-auto max-w-6xl">
                    {/* Decorative Circles */}
                    <div className="absolute top-[-80px] left-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 z-0"></div>
                    <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 z-0"></div>

                    <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                        {/* Left Text */}
                        <div className="text-center lg:text-left max-w-xl">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-color mb-6">
                                Expert Orthopaedic Care, for a Pain-Free Life Ahead
                            </h1>
                            <p className="text-gray-600 mb-6 text-justify md:text-base">
                                Start your journey to a pain-free life by stepping into a practice that puts its patients first. At Dr. Harish's place, you'll get personalised orthopaedic care that's all about achieving long-term results, and doing it with precision and a focus on safety. With a whopping 20+ years worth of experience under his belt, Dr. Harish has built a reputation as one of the very best, - a top-notch orthopaedic doc in Trichy that people trust with joint pain, sports injuries and tricky bone and muscle problems.
                            </p>
                            <p className="text-gray-600 mb-6 text-justify md:text-base">
                                Located at Orthopaedics Trichy Cantonment, Dr. Harish tailors every treatment plan to each patient and their needs - lifestyle, recovery goals and all!. You won't find any cookie-cutter solutions here, just solid evidence-based care that aims to get you moving again and pain-free.
                            </p>
                            <p className="text-gray-600 mb-6 text-justify md:text-base">
                                If you're an athlete recovering from a nasty sports injury, or just dealing with chronic knee, shoulder, or hip pain that just won't quit, Dr. Harish is your guy. With the latest minimally invasive techniques and modern joint replacement methods, you can look forward to faster healing times, improved mobility and getting back to your life ASAP.
                            </p>
                            <p className="text-gray-600 mb-6 text-justify md:text-base">
                                With a practice that puts patients first, and a clear commitment to doing the best job possible, Dr. Harish is raising the bar in orthopaedic care and that's why people keep coming back to him for reliable, long-term relief from musculoskeletal pain in Trichy.
                            </p>
                            <button onClick={scrollToAppointment} className="bg-accent-red hover:bg-accent-gold text-white font-medium px-6 py-3 cursor-pointer rounded-md transition duration-300">
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
                        {data.map((data) => (
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
        </>
    );
};

export default HeroSection;
