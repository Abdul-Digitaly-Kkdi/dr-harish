import React from "react";
import { IoLocateOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import bg from "../../../assets/About.png";

const Address = () => {
    const stats = [
        // {
        //     title: "Address",
        //     label: "Meyyappa Towers, No : 48, Sundar Nagar, K K Nagar, Tiruchirappalli, Tamil Nadu 620021",
        //     icon: <IoLocateOutline className="text-4xl text-sky-800 mb-3 mx-auto" />,
        //     action: () => window.open("https://www.google.com/maps?q=Meyyappa+Towers,+Sundar+Nagar,+KK+Nagar,+Tiruchirappalli", "_blank"),
        // },
        // {
        //     title: "Address",
        //     label: "No-1, Jail Corner, Highways Colony, Subramaniyapuram, Tiruchirappalli, Tamil Nadu 620020",
        //     icon: <IoLocateOutline className="text-4xl text-sky-800 mb-3 mx-auto" />,
        //     action: () => window.open("https://www.google.com/maps?q=Jail+Corner,+Subramaniyapuram,+Tiruchirappalli", "_blank"),
        // },
        {
            title: "Phone",
            label: "+91 93612 05598",
            icon: <LuPhoneCall className="text-4xl text-sky-800 mb-3 mx-auto" />,
            action: () => window.open("tel:+919361205598"),
        },
        {
            title: "Email",
            label: "support@rechiro.com",
            icon: <GoMail className="text-4xl text-sky-800 mb-3 mx-auto" />,
            action: () => window.open("mailto:support@rechiro.com"),
        },
    ];

    return (
        <div
            className="relative w-full h-auto bg-background-color/67 bg-center py-20 px-4"
        >
            {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" /> */}

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        onClick={item.action}
                        className="cursor-pointer bg-accent-gold/80 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center transition transform hover:-translate-y-1 hover:shadow-2xl duration-300"
                    >
                        {item.icon}
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-primary-color font-semibold mt-2">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Address;
