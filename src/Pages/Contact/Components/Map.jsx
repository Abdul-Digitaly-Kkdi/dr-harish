import React from "react";

const locations = [
    {
        name: "Trp Poly clinic, Thillainagar Trichy",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.230922222273!2d78.69618557583265!3d10.815389158709752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf51d1ad2db31%3A0x6dfbd2680b9f3d4b!2sTRP%20Poly%20Clinic!5e0!3m2!1sen!2sin!4v1722243032115!5m2!1sen!2sin"
    },
    {
        name: "Srinidhi Hospital, Sundar Nagar, Trichy",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.012293960699!2d78.67794767583172!3d10.77790565902759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf4e92b7c452f%3A0x7a5fc7f51ec660d3!2sSrinidhi%20Hospital!5e0!3m2!1sen!2sin!4v1722243053646!5m2!1sen!2sin"
    },
    {
        name: "Harshamitra Hospital, Nagamangalam, Trichy",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.457729167416!2d78.67354437583119!3d10.755967159189005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf4ab760fc60b%3A0x808e3a3686f7b418!2sHarshamitra%20Super%20Speciality%20Cancer%20Centre%20%26%20Research%20Institute!5e0!3m2!1sen!2sin!4v1722243080470!5m2!1sen!2sin"
    },
    {
        name: "Velan Speciality, Subramaniyapuram, Trichy",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4575397521426!2d78.6826620758324!3d10.80398435878151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf52e5a8f34d7%3A0x9fa0e5052b3fcd5!2sVelan%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1722243099104!5m2!1sen!2sin"
    }
];

const MapSection = () => {
    return (
        <section className="bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-center text-accent-gold mb-8">OUR LOCATIONS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((loc, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <iframe
                                src={loc.mapUrl}
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={loc.name}
                            ></iframe>
                            <div className="p-4 text-center font-medium text-sm">{loc.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MapSection;
