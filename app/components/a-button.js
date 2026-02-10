"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AButton({
  children,
  filled = false,
  href = null,
  showArrow = false
}) {
  const containerRef = useRef(null);
  const arrowRef = useRef(null);

  const baseStyles = "text-sm font-medium rounded-md transition-colors";

  const outlinedStyles = "text-[#F48244] border border-[#F48244] hover:bg-[#FFF4F0]";
  const filledStyles = "bg-[#F48244]  border border-white/60 text-white hover:bg-[#F65A00]/60";

  const buttonStyles = filled ? filledStyles : outlinedStyles;
  const styles = `px-4 py-1.5 lg:py-2 ${baseStyles} ${buttonStyles}`;

  const DETECTION_RADIUS = 80; // Distance to detect cursor approach
  const MAGNETISM_STRENGTH = 0.25; // How much the arrow magnetizes (0.35 = 35%)

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!arrowRef.current) return;

      const arrowRect = arrowRef.current.getBoundingClientRect();
      const arrowCenterX = arrowRect.left + arrowRect.width / 2;
      const arrowCenterY = arrowRect.top + arrowRect.height / 2;

      // Distance from cursor to arrow center
      const distanceX = e.clientX - arrowCenterX;
      const distanceY = e.clientY - arrowCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // If cursor is within detection radius, apply magnetism
      if (distance < DETECTION_RADIUS && distance > 0) {
        const dx = distanceX * MAGNETISM_STRENGTH;
        const dy = distanceY * MAGNETISM_STRENGTH;
        arrowRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      } else if (distance >= DETECTION_RADIUS) {
        // Reset when cursor is far away
        arrowRef.current.style.transform = `translate(0px, 0px)`;
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Button with arrow icon
  if (showArrow) {
    const containerClass = "flex items-center gap-1 lg:gap-2 transition-none";

    if (href) {
      return (
        <Link
          ref={containerRef}
          href={href}
          className={containerClass}
        >
          <span className={styles}>
            {children}
          </span>
          <span
            ref={arrowRef}
            className={`w-8 lg:w-9 h-8 lg:h-9 flex items-center justify-center ${buttonStyles} rounded-md will-change-transform`}
            style={{
              transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 1H3M11 1V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      );
    }

    return (
      <button
        ref={containerRef}
        className={containerClass}
      >
        <span className={styles}>
          {children}
        </span>
        <span
          ref={arrowRef}
          className={`w-9 h-9 flex items-center justify-center ${buttonStyles} rounded-md will-change-transform`}
          style={{
            transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L11 1M11 1H3M11 1V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    );
  }

  // Regular button
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles}>
      {children}
    </button>
  );
}
