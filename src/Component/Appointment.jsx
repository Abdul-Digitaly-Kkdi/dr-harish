import React, { useState, useMemo } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import appoinment from "../assets/About.png";
import emailjs from "emailjs-com";

function Appoinment() {
  const SERVICE_ID = "service_jgstobf";
  const TEMPLATE_ID = "template_5sw9fvk";
  const PUBLIC_KEY = "Zr5o9Z93wf4aMsUnF";

  // Helper: yyyy-mm-dd in LOCAL time (avoids UTC shift issues)
  const todayStr = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);

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

  // Robust email validation:
  // - exactly one @
  // - local part: ASCII only, no leading/trailing/consecutive dots, allowed RFC chars
  // - domain: ASCII only, at least one dot, no trailing dot, labels [a-z0-9-], no leading/trailing hyphen
  // - TLD at least 2 letters
  const isValidEmail = (emailRaw) => {
    const email = emailRaw.trim();

    // ASCII-only (blocks emojis and other unicode)
    for (const ch of email) {
      if (ch.charCodeAt(0) > 127) return false;
    }

    const parts = email.split("@");
    if (parts.length !== 2) return false;

    const [local, domain] = parts;

    // Local part rules
    if (!local) return false;
    if (local.startsWith(".") || local.endsWith(".")) return false;
    if (local.includes("..")) return false;
    // Allowed chars in local: a-z0-9 and these specials !#$%&'*+/=?^_`{|}~ and dot (already checked placement)
    if (!/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.]+$/.test(local)) return false;

    // Domain rules
    if (!domain) return false;
    if (domain.endsWith(".")) return false; // trailing dot not allowed
    if (domain.includes("..")) return false;
    if (!domain.includes(".")) return false; // require at least one dot (e.g., example.com)

    const labels = domain.split(".");
    for (const label of labels) {
      // label: 1–63 chars, alnum or hyphen, no leading/trailing hyphen
      if (!/^[A-Za-z0-9-]{1,63}$/.test(label)) return false;
      if (label.startsWith("-") || label.endsWith("-")) return false;
    }

    // TLD check (last label is at least 2 letters)
    const tld = labels[labels.length - 1];
    if (!/^[A-Za-z]{2,}$/.test(tld)) return false;

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "phone") {
        // Digits only, max 10
        const digits = value.replace(/\D/g, "").slice(0, 10);
        return { ...prev, phone: digits };
      }

      if (name === "name") {
        // Letters and spaces only (NO dots)
        const cleaned = value.replace(/[^A-Za-z ]+/g, "");
        return { ...prev, name: cleaned };
      }

      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    const newErrors = {};

    // NAME
    const name = formData.name.trim();
    if (!name) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      newErrors.name = "Name can contain only letters and spaces";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (name.length > 30) {
      newErrors.name = "Name cannot exceed 30 characters";
    }

    // EMAIL
    const email = formData.email.trim();
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // PHONE
    const phone = formData.phone.trim();
    if (!phone) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Mobile number must contain digits only";
    } else if (phone.length < 10) {
      newErrors.phone = "Mobile number must be exactly 10 digits";
    } else if (!/^[6-9]/.test(phone)) {
      newErrors.phone = "Mobile number must start with 6, 7, 8, or 9";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // DATE
    if (!formData.date) {
      newErrors.date = "Select a date";
    } else {
      const picked = new Date(formData.date + "T00:00:00"); // treat as local date
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (picked < today) {
        newErrors.date = "Past dates are not allowed";
      }
    }

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
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
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
        setFormData({ name: "", email: "", phone: "", date: "" });
      } catch (error) {
        console.error("FAILED...", error);
        setSubmissionError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
        // Clear transient banners after a moment
        setTimeout(() => {
          setSuccess(false);
          setSubmissionError("");
        }, 3000);
      }
    }
  };

  return (
    <div
      className="relative bg-black/10 bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${appoinment})` }}
      id="appoinment"
    >
      <div className="bg-primary-color/90 py-5 md:py-15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row p-5 z-10">
          <div className="w-full lg:w-6/12 shadow-lg px-5 bg-white z-10 relative rounded-lg">
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <h2 className="text-2xl md:text-3xl text-accent-red font-semibold mb-6 py-3">
                Book Your Appointment
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={30}
                    minLength={3}
                    className="bg-gray-100 text-black p-3 rounded-md outline-0 w-full text-[12px]
                      focus:border-accent-gold focus:border-2 focus:ring-0 cursor-text transition-all duration-200"
                    autoComplete="name"
                  />
                  <div className="min-h-[18px] mt-1">
                    {errors.name && (
                      <p className="text-red-500 text-xs text-right">{errors.name}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={254}
                    className="bg-gray-100 text-black p-3 rounded-md outline-0 w-full text-[12px]
                      focus:border-accent-gold focus:border-2 focus:ring-0 cursor-text transition-all duration-200"
                    autoComplete="email"
                    inputMode="email"
                  />
                  <div className="min-h-[18px] mt-1">
                    {errors.email && (
                      <p className="text-red-500 text-xs text-right">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="bg-gray-100 text-black p-3 rounded-md outline-0 w-full text-[12px]
                      focus:border-accent-gold focus:border-2 focus:ring-0 cursor-text transition-all duration-200"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                  <div className="min-h-[18px] mt-1">
                    {errors.phone && (
                      <p className="text-red-500 text-xs text-right">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Date (past dates disabled) */}
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="Select Date"
                    value={formData.date}
                    onChange={handleChange}
                    min={todayStr} // disables all past dates in the picker
                    className="bg-gray-100 text-black p-3 rounded-md outline-0 w-full text-[12px]
                      focus:border-accent-gold focus:border-2 focus:ring-0 cursor-text transition-all duration-200"
                  />
                  <div className="min-h-[18px] mt-1">
                    {errors.date && (
                      <p className="text-red-500 text-xs text-right">{errors.date}</p>
                    )}
                  </div>
                </div>
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
                  className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full transition
                    ${loading
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-accent-gold text-white hover:bg-accent-red cursor-pointer"
                    }`}
                >
                  {loading ? "Submitting..." : "Book an Appointment"} <FiArrowUpRight />
                </button>
              </div>
            </form>
          </div>

          <div className="p-6 w-full lg:w-6/12 text-center lg:text-left">
            <p className="text-3xl md:text-[32px] text-yellow-600 font-semibold tracking-widest mb-2">
              APPOINTMENT
            </p>
            <h2 className="text-3xl md:text-[32px] font-bold mb-4">
              Book an Appointment with Our Experts Today
            </h2>
            <p className="text-base md:text-lg text-white leading-relaxed">
              Schedule your appointment now and experience the difference of compassionate, expert care designed around you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
