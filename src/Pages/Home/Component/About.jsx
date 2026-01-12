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
                            I am a dedicated Orthopaedic Surgeon with a decade plus of hands-on experience that has taught me a thing or two about joint replacement, arthroscopy & trauma related surgeries. I've developed a knack for getting people moving again & taking away the pain through a combination of the latest surgical techniques and one on one patient care that's tailored to each person's unique needs. In my line of work, I live by the standards that the top Orthopedic Surgeons set, putting precision, safety and long-term outcomes first in every case.
                        </p>

                        <p className="text-primary-color text-base md:text-lg">
                            I also just happened to do a fellowship in Arthroscopy and Sports Medicine that I spent working with pro athletes that had some of the most complex ligament and sports related injuries around. That experience really helped me develop a solid understanding of minimally invasive procedures as well as get really good at getting people back on their feet faster. I do a lot of work with joint replacement surgeries, with a real focus on those harder knee and hip replacement cases.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            As a go to Orthopaedic Specialist in Trichy you can bet I'm all about putting my patients first, & I stay on top of the latest in orthopaedics by making it a point to stay up to date on the latest developments in the field. Every treatment plan is made to order for the individual, taking into account their particular situation, lifestyle and what their goals are & how best to get them there. My goal is all about helping people get their lives back by getting them moving again, feeling normal again & living pain free the way they should be.
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
