import React from 'react'
import Landing from './Components/Landing'
import HeroWithStats from './Components/Stats'
import CoreValues from './Components/CoreValues'
import Appoinment from '../../Component/Appointment'

const AboutPage = () => {
    return (
        <div>
            <Landing />
            <HeroWithStats />
            <CoreValues />
            <Appoinment />
        </div>
    )
}

export default AboutPage
