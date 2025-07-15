import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import axios from "axios";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ type: "", message: "" });

  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [mapRef, isMapVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email format";
    if (!formData.phone.match(/^\d{10,}$/))
      newErrors.phone = "Phone must be at least 10 digits";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://sevysis.com/api/enquiry/send", formData);
      setPopup({ type: "success", message: "Email sent successfully!" });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setPopup({ type: "error", message: "Failed to send enquiry. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 pt-32 pb-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className={`py-24 bg-white transition-opacity duration-1000 ${isContactVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="text-slate-700">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 leading-relaxed">
                Have a project in mind or just want to say hello? Fill out the form or use our details below. We'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">Our Office</h3>
                    <p>Akola, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <a href="mailto:hr@sevysis.com" className="hover:text-purple-600">hr@sevysis.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <a href="tel:+919307317516" className="hover:text-purple-600">+91-93073 17516</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "phone", "subject"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-slate-700 mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border ${
                        errors[field] ? "border-red-500" : "border-slate-300"
                      } rounded-md focus:ring-purple-500 focus:border-purple-500 transition`}
                    />
                    {errors[field] && (
                      <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className={`transition-opacity duration-1000 ${isMapVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119364.29729868725!2d76.9458022437699!3d20.69577935749455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67753380d%3A0x743c3589a8c64454!2sAkola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720888888888!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Akola, Maharashtra"
        ></iframe>
      </section>

      {/* Popups */}
      {popup.type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 shadow-md text-center w-80">
            <h3 className="text-lg font-semibold mb-4">{popup.message}</h3>
            {popup.type === "success" ? (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => setPopup({ type: "", message: "" })}
              >
                OK
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Send Again
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
                  onClick={() => setPopup({ type: "", message: "" })}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
    </div>
  );
}
