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

  return (
    <>
      <footer className="bg-[#14161A] text-white px-6 py-12 text-sm font-light relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Company
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-blue-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li
                className="cursor-pointer hover:underline hover:text-blue-400 transition-colors duration-200"
                onClick={() => setShowPrivacyModal(true)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setShowPrivacyModal(true);
                }}
              >
                Privacy Policy
              </li>
              <li
                className="cursor-pointer hover:underline hover:text-blue-400 transition-colors duration-200"
                onClick={() => setShowDisclaimerModal(true)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setShowDisclaimerModal(true);
                }}
              >
                Disclaimer
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:underline hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:underline hover:text-blue-400 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:underline hover:text-blue-400 transition-colors duration-200"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Contact Info
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 hover:text-green-500 transition-colors duration-200 cursor-pointer">
                <FaWhatsapp className="text-2xl" />
                <a
                  href="https://wa.me/917887711309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  +91 78877 11309
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <FaPhoneAlt className="text-2xl" />
                <a href="tel:+919307317516" className="underline">
                  +91 93073 17516
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                <FaEnvelope className="text-2xl" />
                <a href="mailto:hr@sevysis.com" className="underline">
                  hr@sevysis.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-2xl text-yellow-400 mt-1" />
                <address className="not-italic leading-relaxed">
                  Kharadi, Pune-Nagar highway,
                  <br />
                  Pune-411014 MH
                </address>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Follow Us
            </h2>
            <div className="flex space-x-6 mt-2">
              <a
                href="https://www.facebook.com/sevysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/sevysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200 text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/sevysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/sevysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Sevysis – Healthier Tomorrow, Smarter Today. Providing innovative
              solutions in healthcare, education, HRMS, and more.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400 border-t border-gray-700 pt-6 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Sevysis. All rights reserved.
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Your privacy is important to us. This privacy statement provides
              information about the personal information that Sevysis collects,
              and the ways in which Sevysis uses that personal information.
            </p>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-3 right-3 text-black text-3xl font-bold hover:text-red-600 transition-colors duration-200"
              aria-label="Close Privacy Policy"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-sm mb-4 leading-relaxed">
              All information on this website is published in good faith and for
              general information purposes only. Sevysis does not make any
              warranties about the completeness, reliability, and accuracy of
              this information.
            </p>
            <button
              onClick={() => setShowDisclaimerModal(false)}
              className="absolute top-3 right-3 text-black text-3xl font-bold hover:text-red-600 transition-colors duration-200"
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
