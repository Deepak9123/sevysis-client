import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const FindUs = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-50 shadow-inner">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-2">
            Get In Touch
          </h3>
          <ul className="flex justify-center space-x-2 text-blue-600 font-medium">
            <li>
              <a href="/" className="hover:underline">
                Sevysis
              </a>
            </li>
            <li className="text-gray-500 select-none">/</li>
            <li>
              <a href="/find-us" className="hover:underline">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.774120508875!2d73.92537305673889!3d18.552758068801957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3288ba495%3A0x38e833613a63004a!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711096316048!2m1!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sevysis Location"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Contact Us */}
            <div className="bg-blue-50 p-8 shadow-lg rounded-xl hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2 mb-4">
                <Phone className="text-blue-600" /> Contact Us
              </h2>
              <p className="text-blue-700 font-medium">+91 93073 17516</p>
              <p className="text-blue-700 mb-3">+91 78877 11309</p>
              <a
                href="mailto:hr@sevysis.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
              >
                <Mail className="inline mr-1" size={16} />
                hr@sevysis.com
              </a>
            </div>

            {/* Office Info */}
            <div className="bg-blue-50 p-8 shadow-lg rounded-xl hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2 mb-4">
                <MapPin className="text-blue-600" /> Visit Us
              </h2>
              <p className="text-blue-700 font-medium">
                Kharadi, Pune-Nagar Highway MH
              </p>
              <p className="text-blue-700 mb-3">Pune - 411014</p>
              <a
                href="https://maps.app.goo.gl/aVY6DS8bYnfovdqh6"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-blue-50 p-8 shadow-lg rounded-xl hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2 mb-4">
                <Linkedin className="text-blue-600" /> Be Social
              </h2>
              <p className="text-blue-700">
                <Youtube className="inline mr-2 text-red-600" size={18} />
                YouTube: <span className="font-medium">Sevysis</span>
              </p>
              <p className="text-blue-700 mb-3">
                <Instagram className="inline mr-2 text-pink-500" size={18} />
                Instagram: <span className="font-medium">sevysis</span>
              </p>
              <a
                href="https://www.linkedin.com/company/sevysis/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindUs;
