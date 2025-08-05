import React from 'react'
import ServiceSection from './Components/Services'
import ServicesSection from '../Home/Component/Services'
import HowItWorks from '../Home/Component/HowIsIt'
import Appoinment from '../../Component/Appointment'

const ServicePage = () => {
    return (
        <div>
            <ServiceSection />
            <ServicesSection />
            <HowItWorks />
            <Appoinment />
        </div>
    )
}

export default ServicePage
