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
                            className="w-full sm:w-[50%] h-auto  shadow-xl"
                        />
                        <img
                            src={doctorImage1}
                            alt="Orthopaedic Surgeon"
                            className="w-[50%] hidden sm:block h-auto  shadow-xl"
                        />
                        {/* <div className="absolute bottom-0 left-0 bg-accent-gold text-white px-6 py-2 rounded hover:bg-accent-red transition cursor-pointer flex items-center gap-3">
                            <FaAward className='text-3xl' /> 7 + Years of Experience
                        </div> */}
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 font-semibold text-justify md:text-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-gold text-start">ABOUT US</h2>

                        <p className="text-primary-color text-base md:text-lg">
                            I am a dedicated Orthopaedic Surgeon with a passion for joint replacement, arthroscopy, and trauma surgery. With almost 10 years of clinical experience under my belt, you can be guaranteed a deep commitment to getting you moving again & taking the pain away. My approach to surgery has to match up to the very highest standards expected of the top Orthopaedic Doctors in Trichy - and it does. Safety, precision and long-term outcomes take centre stage every time I operate.
                        </p>

                        <p className="text-primary-color text-base md:text-lg">
                            I did a fellowship in Arthroscopy and Sports Medicine too - that's where I learned how to fix injuries that can stop top sports pros from competing. This extra training has given me a real edge in all sorts of minimally invasive procedures and in getting patients back out doing what they love.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            My speciality also covers advanced joint replacement surgery - which I only do for the most tricky knee and hip replacement cases. As an Orthopaedic specialist based in Trichy, my patients get a warm, caring approach that puts them at the heart of everything I do - whether it's a tricky injury or a long-standing musculoskeletal complaint. I believe that every patient is unique & deserves a bespoke treatment plan that takes their unique situation, lifestyle and goals into consideration.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                            The upshot is that I pride myself on being a comprehensive, compassionate & truly caring Orthopaedic specialist. I like to think that I can offer my patients solutions that really work in the long-term - whether I'm doing a joint replacement or an arthroscopy. My one big aim is to make life better for my patients, so that they can get back to a full, active life free from pain.
                        </p>
                        <p className="text-primary-color text-base md:text-lg">
                           Outside of the clinic, I make a point of keeping up to speed with all the latest breakthroughs in Orthopaedics - so that I'm always the best I can be. My approach to practice is built on a foundation of ethics, transparency and patient education - and I always try to deliver the absolute highest level of care at every stage of treatment.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <a href='tel:+919361205598' className="bg-accent-red px-6 py-2 rounded text-center font-semibold cursor-pointer hover:bg-accent-gold">
                                📞 +91-93612 05598
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-background-color p-6 rounded-xl shadow-md max-w-5xl mx-auto mt-10">
                    <div className="grid md:grid-cols-2 gap-6 text-left ">
                        <div className='px-5'>
                            <h3 className="text-xl font-semibold text-primary-color mb-2 text-center md:text-start">Our Mission</h3>
                            <p className=" text-accent-red leading-relaxed text-justify">
                                It's our mission at my clinic to help patients recover, regain their strength and get back to living life to the full.
                                <br />
                               We have a real commitment to delivering patient-centred treatment, because we believe that that's what really makes a difference.
                            </p>
                        </div>
                        <div className='px-5'>
                            <h3 className="text-xl font-semibold text-primary-color mb-2 text-center md:text-start">Our Vision</h3>
                            <p className=" text-accent-red leading-relaxed text-justify">
                                Our aim is to be the best in Orthopaedics by combining our expertise in this field with the latest advances in care and an unwavering commitment to what really matters - our patients.
                                <br />
                                We want to be the go-to place for bone and joint care, a place where people can trust that they'll get the best possible treatment - and the results that go with it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Landing
