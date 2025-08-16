import React from 'react'
import img from '../../../assets/About.png'
import doctorImage from '../../../assets/Doctor.jpg'
import { useNavigate } from 'react-router'

const About = () => {

    const nav = useNavigate()

    return (
        <div
            className="relative bg-black/10 bg-fixed bg-center bg-cover text-white"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className=' bg-background-color/90 py-5 md:py-15'>
                <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-5">

                    {/* Image Section */}
                    <div>
                        <img
                            src={doctorImage}
                            alt="Orthopaedic Surgeon"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 font-semibold text-justify md:text-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-gold text-start">ABOUT</h2>

                        <p className="text-primary-color text-base md:text-lg">
                            I am a dedicated Orthopaedic Surgeon specializing in joint replacement, arthroscopy, and trauma surgeries. With nearly a decade of experience, I am passionate about restoring mobility through advanced surgical techniques and personalized care.
                        </p>

                        <p className="text-primary-color text-base md:text-lg">
                            I completed a fellowship in Arthroscopy and Sports Medicine, treating professional athletes with complex ligament injuries. My expertise extends to joint replacement surgeries, including complex knee and hip replacements.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            Committed to patient-centered care, I stay updated with the latest advancements in orthopaedics to provide the best possible treatments. My goal is to help patients regain function, mobility, and a pain-free, active lifestyle.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <button className="bg-accent-gold text-white px-6 py-2 rounded hover:bg-accent-red transition cursor-pointer"
                                onClick={() => nav('/about')}
                            >
                                Learn More
                            </button>
                            <a href='tel:+919361205598' className="bg-accent-red px-6 py-2 rounded text-center font-semibold cursor-pointer hover:bg-accent-gold">
                                📞 +91-93612 05598
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
