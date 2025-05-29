import React, { useState, useEffect } from "react";
import styles from "./DesignDevelopment.module.css";
import development1 from "../assets/development1.jpg";
import development2 from "../assets/development2.jpg";
import development3 from "../assets/development3.jpg";
import development4 from "../assets/development5.jpg";

const images = [development1, development2, development3, development4];

const slides = [
  {
    heading: "Website Design & Development",
    image: development1,
    description: (
      <>
        Sevysis's methodology is comprehensive, integrating, top-notch
        technologies for application, website and web portal development with
        solid strength...
      </>
    ),
    focusedOn: [
      "Quality Requirement gathering",
      "Agile Development",
      "Bug free Delivery",
    ],
  },
  {
    heading: "Mobile App Design & Development",
    image: development2,
    description: (
      <>
        Sevysis uses top-notch technologies for mobile apps. Collaboration
        during the design process is crucial...
      </>
    ),
    focusedOn: [
      "Quality Requirement gathering",
      "Agile Development",
      "Bug free Delivery",
    ],
  },
  {
    heading: "Custom Design Development",
    image: development3,
    description: (
      <>Sevysis helps startups create custom mobile/web-based apps...</>
    ),
  },
  {
    heading: "Redesign and Development",
    image: development4,
    description: (
      <>Enhancing existing products through redesign and collaboration...</>
    ),
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
    <div className={styles["slider-container"]}>
      {/* Controls */}
      <button
        className={styles["slider-control-left"]}
        onClick={prevSlide}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className={styles["slider-control-right"]}
        onClick={nextSlide}
        aria-label="Next"
      >
        ›
      </button>

      {/* Slides */}
      <div className={styles.slider}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${
              i === activeIndex ? styles.active : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2>{slide.heading}</h2>
              <p>{slide.description}</p>
              {slide.focusedOn && (
                <ul>
                  {slide.focusedOn.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === activeIndex ? styles.activeDot : ""
            }`}
            onClick={() => setActiveIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DesignDevelopment;
