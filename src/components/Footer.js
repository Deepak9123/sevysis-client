import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#111316] text-white px-6 py-14 font-light text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Company
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/about" className="hover:text-blue-400 transition">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">Contact Us</a>
              </li>
              <li
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => setShowPrivacyModal(true)}
              >
                Privacy Policy
              </li>
              <li
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => setShowDisclaimerModal(true)}
              >
                Disclaimer
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/" className="hover:text-blue-400 transition">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-400 transition">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-blue-400 transition">Dashboard</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-xl" />
                <a href="https://wa.me/917887711309" target="_blank" rel="noreferrer" className="hover:underline">
                  +91 78877 11309
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400 text-xl" />
                <a href="tel:+919307317516" className="hover:underline">
                  +91 93073 17516
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-400 text-xl" />
                <a href="mailto:hr@sevysis.com" className="hover:underline">
                  hr@sevysis.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 text-xl mt-1" />
                <address className="not-italic leading-relaxed">
                  Kharadi, Pune-Nagar highway,<br /> Pune-411014 MH
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Follow Us
            </h3>
            <div className="flex items-center space-x-5 mt-2">
              <a href="https://www.facebook.com/sevysis" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/sevysis" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 text-2xl">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/sevysis" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/sevysis" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-600 text-2xl">
                <FaYoutube />
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Sevysis – Healthier Tomorrow, Smarter Today. Providing innovative solutions in healthcare, education, HRMS, and more.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6 text-xs sm:text-sm text-gray-500">
          &copy; {year} <span className="text-white">Sevysis</span>. All rights reserved.
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm leading-relaxed mb-6">
              Your privacy is important to us. This privacy statement provides information about the personal information that Sevysis collects, and the ways in which Sevysis uses that personal information.
            </p>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-3 right-3 text-black text-3xl font-bold hover:text-red-600"
              aria-label="Close Privacy Policy"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-sm leading-relaxed mb-6">
              All information on this website is published in good faith and for general information purposes only. Sevysis does not make any warranties about the completeness, reliability, and accuracy of this information.
            </p>
            <button
              onClick={() => setShowDisclaimerModal(false)}
              className="absolute top-3 right-3 text-black text-3xl font-bold hover:text-red-600"
              aria-label="Close Disclaimer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
