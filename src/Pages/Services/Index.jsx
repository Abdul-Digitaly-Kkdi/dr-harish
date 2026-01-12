import React from 'react'
import ServiceSection from './Components/Services'
import Appoinment from '../../Component/Appointment'
import Ourservices from './Components/Ourservices'
import Oursection from './Components/Oursection'

const ServicePage = () => {
    return (
        <div>
            <ServiceSection />
            <Ourservices />
            <Oursection />
            <Appoinment />
        </div>
    )
}

export default ServicePage
