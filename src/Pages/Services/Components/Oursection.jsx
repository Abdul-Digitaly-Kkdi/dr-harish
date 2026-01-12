import React from "react";

const Oursection = () => {
  return (
    <section className="bg-background-color py-16 md:py-20 px-4 relative overflow-visible select-text cursor-text">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-yellow-600 font-semibold tracking-widest leading-snug">
          Advanced Technology, Rehabilitation & Patient-Focused Recovery
        </h1>

        {/* Paragraphs */}
        <p className="text-primary-color leading-relaxed text-base md:text-lg">
          Our orthopaedic care goes beyond surgery. At our ortho care hospital, we combine advanced diagnostic technology, modern surgical equipment, and structured rehabilitation programs to ensure complete recovery. Every patient is guided through a clear treatment journey from accurate diagnosis and procedure planning to post-treatment physiotherapy and long-term joint care.
        </p>

        <p className="text-primary-color leading-relaxed text-base md:text-lg">
          Under the supervision of the Best Orthopaedic Doctors in Trichy, recovery plans are customised based on age, activity level, and medical condition. Whether you have undergone joint replacement surgery, Knee Arthroscopy in Trichy, Shoulder Arthroscopy, or any other minimally invasive procedure, our focus remains on safe healing, improved strength, and restored mobility.
        </p>

        <p className="text-primary-color leading-relaxed text-base md:text-lg">
          As one of the trusted centres led by Top Orthopedic Surgeons in Trichy, we emphasise patient education, pain management, and preventive care. This holistic approach helps patients return to daily activities, work, and sports with confidence—while reducing the risk of future joint problems.
        </p>

      </div>

      {/* Decorative Circle */}
      <div className="absolute top-[-80px] left-[-80px] w-60 h-60 border-[30px] border-accent-gold rounded-full opacity-50 -z-10"></div>
    </section>
  );
};

export default Oursection;
