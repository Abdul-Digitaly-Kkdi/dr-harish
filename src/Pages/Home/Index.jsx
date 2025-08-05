import React from 'react'
import HeroSection from './Component/Hero'
import About from './Component/About'
import ServicesSection from './Component/Services'
import HowItWorks from './Component/HowIsIt'
import Appoinment from '../../Component/Appointment'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <ServicesSection />
            <Appoinment />
            <HowItWorks />
        </div>
    )
}

export default Home
