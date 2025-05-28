import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  return (
    <>
      <footer className="bg-[#14161A] text-white px-6 py-12 text-sm font-light relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li className="mb-2 cursor-pointer hover:underline" onClick={() => setShowPrivacyModal(true)}>Privacy Policy</li>
              <li className="cursor-pointer hover:underline" onClick={() => setShowDisclaimerModal(true)}>Disclaimer</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
              <li className="mb-2"><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <ul>
              <li className="mb-2 flex items-center gap-2"><FaWhatsapp className="text-green-500" /> +91 91231 63568</li>
              <li className="mb-2 flex items-center gap-2"><FaPhoneAlt className="text-blue-400" /> +91 93073 17516</li>
              <li className="mb-2 flex items-center gap-2"><FaEnvelope className="text-red-400" /> hr@sevysis.com</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-400" /> Kharadi, Pune-Nagar highway,<br />Pune-411014 MH</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Sevysis. All rights reserved.
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm mb-4">
              Your privacy is important to us. This privacy statement provides information about the personal information that Sevysis collects, and the ways in which Sevysis uses that personal information.
            </p>
            <button onClick={() => setShowPrivacyModal(false)} className="absolute top-2 right-3 text-black text-lg font-bold">&times;</button>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
            <p className="text-sm mb-4">
              All information on this website is published in good faith and for general information purposes only. Sevysis does not make any warranties about the completeness, reliability, and accuracy of this information.
            </p>
            <button onClick={() => setShowDisclaimerModal(false)} className="absolute top-2 right-3 text-black text-lg font-bold">&times;</button>
          </div>
        </div>
      )}
    </>
  );
}
