import React from "react";
import { FaAward } from "react-icons/fa6";
import { useNavigate } from "react-router";

const HeroWithStats = () => {

    const nav = useNavigate()

    return (
        <div className="relative bg-background-color text-white overflow-hidden z-0 py-5">

            <div className="hidden md:absolute top-[-80px] left-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 z-0"></div>
            <div className="hidden md:absolute bottom-[-80px] right-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 z-0"></div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6  lg:flex lg:items-center lg:justify-between">
                <div className="sm:w-3/4 lg:mb-0">
                    <h4 className="text-accent-red uppercase tracking-wide text-xl font-semibold mb-4">
                        Committed to Excellence
                    </h4>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-accent-gold">
                        Individually Tailored Treatment: Your Path to Wellness
                    </h1>
                    <button className="bg-accent-red text-white font-semibold px-6 py-2 rounded-md hover:bg-accent-gold transition cursor-pointer"
                        onClick={() => nav('/contact')}
                    >
                        Contact Now
                    </button>
                </div>
            </div>

            {/* Stats section */}
            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-10 max-w-6xl mx-auto">
                {[
                    { count: "8+", label: "Professional Staff" },
                    { count: "2+", label: "Branch Clinic" },
                    { count: "5,300+", label: "Satisfied Client" },
                    { count: "5,800+", label: "Treatment Complete" },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl text-center shadow p-6">
                        <h3 className="text-3xl font-bold text-sky-900">{item.count}</h3>
                        <p className="text-gray-700 text-sm mt-2">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="hidden absolute right-15 top-10 bg-accent-gold text-white px-6 py-2 aspect-square md:flex flex-col text-center gap-2 items-center justify-center hover:bg-accent-red transition cursor-pointer rounded-full font-semibold">
                <FaAward className='text-4xl text-center' /> 7 + Years <br /> of Experience
            </div>

        </div>
    );
};

export default HeroWithStats;
