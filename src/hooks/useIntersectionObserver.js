// src/hooks/useIntersectionObserver.js
import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Observe only once
      }
    }, options);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};