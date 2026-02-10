"use client";

import { useState, useEffect, useRef } from "react";

export default function ProgressBar({ label = "[01]" }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      const windowTop = window.scrollY;
      const windowBottom = windowTop + window.innerHeight;

      // Calculate how much of the section is visible
      const visibleTop = Math.max(windowTop, sectionTop);
      const visibleBottom = Math.min(windowBottom, sectionBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Progress based on section visibility
      const progress = sectionHeight > 0 ? (visibleHeight / sectionHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressWidth = (scrollProgress / 100) * 1280;

  return (
    <div ref={sectionRef} className="w-full">
      <div className="py-7 w-full flex flex-col items-center">
        <svg
          width="100%"
          height="8"
          viewBox="0 0 1280 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-4xl"
        >
          {/* Background line */}
          <rect width="1280" height="3" rx="4" fill="#ffffff" opacity="0.2" />
          {/* Progress line - updates on scroll */}
          <rect
            width={progressWidth}
            height="3"
            rx="4"
            fill="#F48244"
            style={{ transition: "width 0.1s ease-out" }}
          />
        </svg>
        <h4 className="text-white/40 text-sm mt-2">{label}</h4>
      </div>
    </div>
  );
}
