import React, { useState, useEffect } from "react";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Dot,
  CircleDot,
} from "lucide-react";

import development1 from "../assets/development1.jpg";
import development2 from "../assets/development2.jpg";
import development3 from "../assets/development3.jpg";
import development4 from "../assets/development5.jpg";

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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-4 md:px-10">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl bg-white">
        {/* Slide */}
        <div className="relative transition-all duration-700 ease-in-out">
          <img
            src={slides[activeIndex].image}
            alt={slides[activeIndex].heading}
            className="w-full h-72 object-cover rounded-t-xl"
          />
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {slides[activeIndex].heading}
            </h2>
            <p className="text-gray-600 mb-4">
              {slides[activeIndex].description}
            </p>
            {slides[activeIndex].focusedOn && (
              <ul className="list-disc pl-5 text-blue-600 font-medium space-y-1">
                {slides[activeIndex].focusedOn.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <ChevronLeftCircle size={36} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <ChevronRightCircle size={36} />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 py-4">
          {slides.map((_, index) =>
            index === activeIndex ? (
              <CircleDot
                key={index}
                className="text-blue-700"
                size={20}
              />
            ) : (
              <Dot
                key={index}
                className="text-gray-400 cursor-pointer"
                size={20}
                onClick={() => setActiveIndex(index)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignDevelopment;
