import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo-design_removed_1.ico";

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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 shadow-md p-4 md:p-4 py-2 md:py-4">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => navigate("/")}
        >
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Sevysis Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-cyan-100 tracking-wide underline decoration-white/50 underline-offset-4 group-hover:text-white transition-colors duration-200">
              Sevysis
            </span>
          </div>

          {/* Marquee tagline with left margin and smaller top margin on mobile */}
          <div className="overflow-hidden max-w-[150px] md:max-w-[256px] ml-4 mt-0 md:mt-1">
            <div className="whitespace-nowrap animate-marquee">
              <span className="text-xs md:text-sm text-blue-500 font-semibold tracking-wide">
                🌟 Healthier Tomorrow, Smarter Today 🌟
              </span>
            </div>
          </div>
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
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          <Link
            to="/"
            onClick={() => setServicesOpen(false)}
            className="text-white hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm font-medium rounded transition duration-150"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setServicesOpen(false)}
            className="text-white hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm font-medium rounded transition duration-150"
          >
            About
          </Link>

          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={toggleServices}
              className="text-white hover:bg-cyan-700 hover:text-white font-medium flex items-center gap-1 px-3 py-2 rounded transition duration-150"
            >
              Services
              <svg
                className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-3 w-60 bg-white border border-gray-200 shadow-lg rounded-lg z-20 py-2 transition-all duration-200 origin-top ${
                servicesOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible"
              }`}
            >
              {[
                {
                  to: "/services/education-management",
                  label: "🎓 Education Management",
                },
                {
                  to: "/services/hospital-pathlab",
                  label: "🏥 Hospital & Pathlab Solution",
                },
                {
                  to: "/services/design-development",
                  label: "💻 Design & Development",
                },
                { to: "/services/hrms-solution", label: "🧑‍💼 HRMS Solution" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setServicesOpen(false)}
                  className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/find-us"
            onClick={() => setServicesOpen(false)}
            className="text-white hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm font-medium rounded transition duration-150"
          >
            Find Us
          </Link>

          <button
            onClick={() => {
              setServicesOpen(false);
              onEnquiryClick();
            }}
            className="text-white hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm font-medium rounded transition duration-150"
          >
            Enquiry
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            About
          </Link>

          <div ref={dropdownRef}>
            <button
              onClick={toggleServices}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium flex items-center justify-between"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 border-l pl-4 space-y-2">
                {[
                  {
                    to: "/services/education-management",
                    label: "🎓 Education Management",
                  },
                  {
                    to: "/services/hospital-pathlab",
                    label: "🏥 Hospital & Pathlab Solution",
                  },
                  {
                    to: "/services/design-development",
                    label: "💻 Design & Development",
                  },
                  { to: "/services/hrms-solution", label: "🧑‍💼 HRMS Solution" },
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

          <Link
            to="/find-us"
            onClick={toggleMobileMenu}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Find Us
          </Link>
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
