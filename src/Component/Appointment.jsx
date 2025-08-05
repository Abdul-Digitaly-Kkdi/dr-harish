import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import appoinment from "../assets/About.png";
import emailjs from "emailjs-com";

function Appoinment() {
    const SERVICE_ID = "service_jgstobf";
    const TEMPLATE_ID = "template_5sw9fvk";
    const PUBLIC_KEY = "Zr5o9Z93wf4aMsUnF";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submissionError, setSubmissionError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z. ]+$/.test(formData.name)) {
            newErrors.name = "Name can contain only letters, spaces, and dots";
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        } else if (formData.name.length > 30) {
            newErrors.name = "Name cannot exceed 30 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Mobile Number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit mobile number";
        }

        if (!formData.date) newErrors.date = "Select a date";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);
        setSuccess(false);

        if (Object.keys(formErrors).length === 0) {
            setLoading(true);

            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                date: formData.date,
            };

            try {
                const result = await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    templateParams,
                    PUBLIC_KEY
                );

                console.log("SUCCESS!", result.text);
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
                setFormData({ name: "", email: "", phone: "", date: "" });
            } catch (error) {
                console.error("FAILED...", error);
                setSubmissionError("Something went wrong.");
                setTimeout(() => setSubmissionError(""), 3000);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div
            className="relative bg-black/10 bg-fixed bg-center bg-cover text-white"
            style={{
                backgroundImage: `url(${appoinment})`,
            }}
            id="appoinment"
        >
            <div className=' bg-primary-color/90 py-5 md:py-15'>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row p-5 z-10">
                    <div className="w-full lg:w-6/12 shadow-lg px-5 bg-white z-10 relative rounded-lg">
                        <form onSubmit={handleSubmit} noValidate className="space-y-2">
                            <h2 className="text-2xl md:text-3xl text-accent-red font-semibold mb-6 py-3">
                                Book Your Appointment
                            </h2>
                            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3">

                                {[
                                    { name: "name", type: "text", placeholder: "Name" },
                                    { name: "email", type: "text", placeholder: "Email" },
                                    { name: "phone", type: "tel", placeholder: "Mobile Number" },
                                    { name: "date", type: "date", placeholder: "Select Date" },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            maxLength={field.name === "phone" ? 10 : 60}
                                            minLength={field.name === "name" ? 3 : undefined}
                                            className="bg-gray-100 text-black p-3 rounded-md outline-0 w-full text-[12px]"
                                        />
                                        <div className="min-h-[18px] mt-1">
                                            {errors[field.name] && (
                                                <p className="text-red-500 text-xs text-right">
                                                    {errors[field.name]}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="py-5">
                                <div className="min-h-[18px] mt-1">
                                    {success && (
                                        <p className="text-green-600 text-sm font-medium mb-2">
                                            Your message has been successfully sent!
                                        </p>
                                    )}
                                    {submissionError && (
                                        <p className="text-red-600 text-sm font-medium mb-2">
                                            {submissionError}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full cursor-pointer transition
                    ${loading
                                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                            : "bg-accent-gold  text-white hover:bg-accent-red"
                                        }`}
                                >
                                    {loading ? "Submitting..." : "Book an Appointment"} <FiArrowUpRight />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="p-6 w-full lg:w-6/12 text-center lg:text-left">
                        <p className="text-3xl md:text-4xl text-yellow-600 font-semibold tracking-widest mb-2">APPOINTMENT</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Book an Appointment with Our Experts Today</h2>
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            Schedule your appointment now and experience the difference of compassionate, expert care designed around you!
                        </p>
                        {/* You can add images or icons here too */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appoinment;