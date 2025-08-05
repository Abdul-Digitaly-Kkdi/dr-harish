import React from 'react'
import img from '../../../assets/About.png'
import doctorImage from '../../../assets/AboutMain.png'
import doctorImage1 from '../../../assets/Main/Hero.png'
import { FaAward } from 'react-icons/fa'

const Landing = () => {
    return (
        <div
            className="relative bg-black/10 bg-fixed bg-center bg-cover text-white"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className=' bg-background-color/90 py-5 md:py-15'>

                <div className=" max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center p-5">

                    {/* Image Section */}
                    <div className='relative flex'>
                        <img
                            src={doctorImage}
                            alt="Orthopaedic Surgeon"
                            className="w-full sm:w-[50%] h-auto rounded shadow-xl"
                        />
                        <img
                            src={doctorImage1}
                            alt="Orthopaedic Surgeon"
                            className="w-[50%] hidden sm:block h-auto rounded shadow-xl"
                        />
                        {/* <div className="absolute bottom-0 left-0 bg-accent-gold text-white px-6 py-2 rounded hover:bg-accent-red transition cursor-pointer flex items-center gap-3">
                            <FaAward className='text-3xl' /> 7 + Years of Experience
                        </div> */}
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 font-semibold text-justify md:text-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-gold text-start">ABOUT US</h2>

                        <p className="text-primary-color text-base md:text-lg">
                            I am a dedicated Orthopaedic Surgeon specializing in joint replacement, arthroscopy, and trauma surgeries. With nearly a decade of experience, I am passionate about restoring mobility through advanced surgical techniques and personalized care.
                        </p>

                        <p className="text-primary-color text-base md:text-lg">
                            I completed a fellowship in Arthroscopy and Sports Medicine, treating professional athletes with complex ligament injuries. My expertise extends to joint replacement surgeries, including complex knee and hip replacements.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            Committed to patient-centered care, I stay updated with the latest advancements in orthopaedics to provide the best possible treatments. My goal is to help patients regain function, mobility, and a pain-free, active lifestyle.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            I am dedicated to providing comprehensive, compassionate care to my patients, ensuring they receive the best treatment for both acute injuries and chronic musculoskeletal conditions. Having worked with a diverse range of patients, I take pride in offering personalized solutions that promote long-term health and mobility. Whether performing advanced joint replacements or minimally invasive arthroscopy, my goal is always to improve my patients’ quality of life and help them return to an active, pain-free lifestyle.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            Beyond my clinical practice, I stay up to date with the latest advancements in orthopaedics, continually refining my skills and knowledge to offer the most effective treatments. With a patient-centered approach, I am committed to providing the highest standard of care, utilizing the latest advancements in orthopaedic techniques to ensure the best possible outcomes.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <a href='tel:+919361205598' className="bg-accent-red px-6 py-2 rounded text-center font-semibold cursor-pointer hover:bg-accent-gold">
                                📞 +91-93612 05598
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-background-color p-6 rounded-xl shadow-md max-w-5xl mx-auto mt-10">
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div>
                            <h3 className="text-xl font-semibold text-primary-color mb-2 text-center md:text-start">Our Mission</h3>
                            <p className=" text-accent-red leading-relaxed text-justify">
                                To restore mobility and improve lives through advanced orthopaedic care and personalized treatment.
                                <br />
                                We are committed to delivering patient-centered services that empower recovery and enhance quality of life.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-primary-color mb-2 text-center md:text-start">Our Vision</h3>
                            <p className=" text-accent-red leading-relaxed text-justify">
                                To lead in orthopaedic excellence, restoring mobility and enhancing lives through innovation and compassionate care.
                                <br />
                                Our vision is to be recognized as a trusted center of excellence in the field of bone and joint health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Landing
