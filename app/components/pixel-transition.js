"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PixelTransition({
  images,
  rotationDuration = 3,
  gridSize = { rows: 8, cols: 18 },
  className = "",
  imageProps = {},
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Derive nextIndex from currentIndex instead of storing it in state
  const nextIndex = (currentIndex + 1) % images.length;
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const isAnimating = useRef(false);

  // Initialize GSAP context
  useGSAP(() => {
    // Ensure grid is visible initially
    if (gridRef.current) {
        gsap.set(gridRef.current.children, { opacity: 1, scale: 1 });
    }
  }, { scope: containerRef });

  useEffect(() => {
    if (!isAnimating.current && gridRef.current) {
      // Reset grid visibility after the transition is fully complete
      // and the DOM has updated with the new background image.
      // Doing this in useEffect (post-paint) prevents flickering.
      gsap.set(gridRef.current.children, { opacity: 1, scale: 1 });
    }
  }, [currentIndex]);

  const triggerTransition = useCallback(() => {
    if (!gridRef.current) return;
    isAnimating.current = true;

    const cells = gridRef.current.children;

    // Randomize stagger slightly for a more organic "scramble" feel
    gsap.to(cells, {
      opacity: 0,
      scale: 0,
      duration: 1.2,
      stagger: {
        amount: 1.6,
        grid: [gridSize.rows, gridSize.cols],
        from: "random",
      },
      ease: "power3.inOut",
      onComplete: () => {
        // Update the current index to match the one we just revealed
        setCurrentIndex(nextIndex);
        isAnimating.current = false;
        
        // We do NOT reset the grid here. 
        // We wait for the state update to trigger the useGSAP hook above.
        // This ensures the DOM has updated with the new background image 
        // before we make the grid visible again.
      },
    });
  }, [nextIndex, gridSize.rows, gridSize.cols]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating.current) return;
      triggerTransition();
    }, rotationDuration * 1000);

    return () => clearInterval(interval);
  }, [rotationDuration, triggerTransition]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Underlay Image - The image we are transitioning TO */}
      {/* This image holds the relative space for the container */}
      <Image
        src={images[nextIndex]}
        alt="Hero background"
        {...imageProps}
        className={`block w-full h-auto object-cover ${imageProps.className || ""}`}
      />

      {/* Grid Overlay - The image we are transitioning FROM */}
      {/* This covers the underlay until animation reveals it */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid w-full h-full z-10"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {[...Array(gridSize.rows * gridSize.cols)].map((_, i) => {
          const row = Math.floor(i / gridSize.cols);
          const col = i % gridSize.cols;
          return (
            <div
              key={i}
              className="w-full h-full bg-no-repeat"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: `${gridSize.cols * 100}% ${gridSize.rows * 100}%`,
                backgroundPosition: `${
                  (col / (gridSize.cols - 1)) * 100
                }% ${(row / (gridSize.rows - 1)) * 100}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
