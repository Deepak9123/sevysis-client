import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = ({ onEnquiryClick }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Sevysis Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">Sevysis</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          <Link to="/" onClick={() => setServicesOpen(false)} className="hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" onClick={() => setServicesOpen(false)} className="hover:text-blue-600 font-medium">About</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServices}
              className="hover:text-blue-600 font-medium flex items-center focus:outline-none"
            >
              Services
              <svg
                className={`ml-1 w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <ul className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg z-20 py-2">
                {[
                  { to: "/services/education-management", label: "🎓 Education Management" },
                  { to: "/services/hospital-pathlab", label: "🏥 Hospital & Pathlab Solution" },
                  { to: "/services/design-development", label: "💻 Design & Development" },
                  { to: "/services/hrms-solution", label: "🧑‍💼 HRMS Solution" }
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/find-us" className="hover:text-blue-600 font-medium">Find Us</Link>
          <button
            onClick={onEnquiryClick}
            className="hover:text-blue-600 font-medium focus:outline-none"
          >
            Enquiry
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/about" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">About</Link>

          <div ref={dropdownRef}>
            <button
              onClick={toggleServices}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium flex items-center justify-between"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 border-l pl-4 space-y-2">
                {[
                  { to: "/services/education-management", label: "🎓 Education Management" },
                  { to: "/services/hospital-pathlab", label: "🏥 Hospital & Pathlab Solution" },
                  { to: "/services/design-development", label: "💻 Design & Development" },
                  { to: "/services/hrms-solution", label: "🧑‍💼 HRMS Solution" }
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/find-us" onClick={toggleMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Find Us</Link>
          <button
            onClick={() => {
              toggleMobileMenu();
              onEnquiryClick();
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Enquiry
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
