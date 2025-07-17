import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import development1 from "../assets/development1.jpg";
import development2 from "../assets/development2.jpg";
import development3 from "../assets/development3.jpg";
import development4 from "../assets/development5.jpg";

// Your slide data remains the same
const slides = [
  {
    heading: "Website Design & Development",
    image: development1,
    description: `Sevysis's methodology is comprehensive, integrating top-notch technologies for application, website, and web portal development with solid strength...`,
    focusedOn: [
      "Quality Requirement Gathering",
      "Agile Development",
      "Bug-Free Delivery",
    ],
  },
  {
    heading: "Mobile App Design & Development",
    image: development2,
    description: `Sevysis uses top-notch technologies for mobile apps. Collaboration during the design process is crucial...`,
    focusedOn: [
      "Quality Requirement Gathering",
      "Agile Development",
      "Bug-Free Delivery",
    ],
  },
  {
    heading: "Custom Design Development",
    image: development3,
    description: `Sevysis helps startups create custom mobile/web-based apps...`,
  },
  {
    heading: "Redesign and Development",
    image: development4,
    description: `Enhancing existing products through redesign and collaboration...`,
  },
];

const DesignDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // changes slide every 5 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="bg-slate-50 w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto rounded-2xl shadow-2xl bg-white overflow-hidden">
          {/* Main content with responsive layout and animation */}
          <div
            key={activeIndex} // ✨ Key prop to re-trigger animation on change
            className="grid md:grid-cols-2 animate-fadeIn" // ✨ Responsive grid and animation
          >
            {/* Image Column */}
            <div className="relative h-64 md:h-auto">
              <img
                src={currentSlide.image}
                alt={currentSlide.heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Text Content Column */}
            <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {currentSlide.heading}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentSlide.description}
              </p>
              {currentSlide.focusedOn && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Focused On:
                  </h3>
                  <ul className="space-y-2">
                    {currentSlide.focusedOn.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 rounded-full bg-black/5 backdrop-blur-md text-white opacity-40 hover:opacity-100 hover:bg-white/10 transition-all duration-300 shadow-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 rounded-full bg-black/5 backdrop-blur-md text-white opacity-40 hover:opacity-100 hover:bg-white/10 transition-all duration-300 shadow-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDevelopment;
