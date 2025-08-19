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
      href: "tel:+919361205598",
    },
    {
      title: "Email",
      label: "support@rechiro.com",
      icon: <GoMail className="text-4xl text-sky-800 mb-3 mx-auto" />,
      href: "https://mail.google.com/mail/?view=cm&to=support@rechiro.com"

    },
  ];


    return (
 <div className="relative w-full h-auto bg-background-color/67 bg-center py-20 px-4">
      {/* Grid container with centered items */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
       {stats.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-accent-gold/80 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center transition transform hover:-translate-y-1 hover:shadow-2xl duration-300 w-full sm:w-80 no-underline"
          >
            {item.icon}
            <h3 className="text-lg sm:text-xl md:text-lg font-semibold text-white mt-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base md:text-sm text-primary-color font-semibold mt-1 break-words">
              {item.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Address;
