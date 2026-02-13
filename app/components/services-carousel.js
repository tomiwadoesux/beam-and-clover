"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react"; // changed useLayoutEffect to useEffect

import AButton from "./a-button";

// Register explicitly outside component
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: "IT Integration",
    description:
      "Driving digital transformation with intelligent, integrated systems that bridge the gap between strategy and execution. We deliver cutting-edge technology solutions specifically designed to boost business efficiency, enhance security, and support sustainable growth for complex operations.",
    label: "01",
    image: "/images/integration-land.webp",
    features: [
      "Software Development & Deployment",
      "AI Automation & Optimization",
      "Cloud Computing & Data Services",
      "IT Consulting & Advisory",
      "Network Infrastructure",
    ],
    href: "/IT-Services",
  },
  {
    id: 2,
    title: "Vehicle Administration",
    description:
      "In partnership with Government Agencies, we modernize vehicle administration through smart digital systems. Our technology cuts processing time, eliminates manual errors, and makes services faster and more secure for a comfortable experience.",
    label: "02",
    image: "/images/Vadmin-lnd.webp",
    features: [
      "License Management & Renewal",
      "Vehicle Registration & Docs",
      "Digital Compliance & Verification",
      "Smart Tracking & Monitoring",
    ],
    href: "/vehicle-administration",
  },
  {
    id: 3,
    title: "Traffic Survey & Transportation Studies",
    description:
      "We provide professional traffic survey services using automatic traffic data collection equipment and manual survey methods. Deploying sensors, counters, and video-based systems alongside trained field personnel, we capture accurate data to support effective transport planning, traffic management, road safety analysis, and evidence-based policy decisions.",
    label: "03",
    image: "/images/0005.webp",
    features: [
      "Traffic Volume Analysis",
      "Vehicle Classification",
      "Speed & Movement Patterns",
      "Ridership (Origin-Destination)",
    ],
    href: "/vehicle-administration",
  },
  {
    id: 4,
    title: "Digital Infrastructure",
    description:
      "Building resilient and scalable digital infrastructure that supports your business growth. Our comprehensive solutions ensure reliability, security, and optimal performance across all your digital operations.",
    label: "04",
    image: "/images/digital-infra.webp",
    features: [
      "Data Centers & Hosting",
      "Cybersecurity & Protection",
      "System Integration",
      "Disaster Recovery",
    ],
    href: "/IT-Services",
  },
];

export default function ServicesCarousel() {
  const container = useRef(null);
  const progressBarRef = useRef(null);
  const slidesRef = useRef([]);
  const isMountedRef = useRef(false);

  useEffect(() => {
    // Mark as mounted and initialize GSAP context
    isMountedRef.current = true;

    const ctx = gsap.context(() => {
      const slides = slidesRef.current;
      const totalSlides = servicesData.length;

      // Initial setup:
      // Slide 1 (index 0) stays at natural position (or 0,0 since absolute).
      // Slides 2 & 3 start shifted down by 100% and invisible.
      slides.forEach((slide, i) => {
        if (i !== 0) {
          gsap.set(slide, { yPercent: 100, opacity: 0 });
        }
      });

      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${totalSlides * 80}%`, // Reduced from 250% to 80% for quicker transitions
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, { scaleY: self.progress });
            }
          },
        },
      });

      // Build the animation sequence
      servicesData.forEach((_, i) => {
        if (i === 0)
          return; // Skip first slide

        const currentSlide = slides[i];
        const prevSlide = slides[i - 1];

        // Animate current slide UP and IN
        tl.to(currentSlide, {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.inOut",
        });

        // Animate previous slide OUT (depth effect)
        tl.to(
          prevSlide,
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.75,
          },
          "<",
        );
      });
    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={container}
      className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden"
    >
      {/* <div className="flex justify-left px-6 md:px-8 lg:px-12 ">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F48244]/5 border border-[#F48244]/20 text-[#F48244] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" />
          </svg>
          Our Expertise
        </div>
      </div> */}
      {/* Slides Container - Absolute Stacking */}
      {servicesData.map((service, i) => (
        <div
          key={service.id}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{ zIndex: i + 1 }}
        >
          <div className="w-full h-full flex items-center">
            {/* Content Grid */}
            <div className="grid grid-cols-1 px-4 sm:px-6 md:px-8 lg:px-12 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12 lg:gap-20 items-center w-full">
              {/* Service Image - Mobile: Top, Desktop: Right */}
              <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
                <div className="relative w-full aspect-video lg:aspect-square max-h-[30vh] sm:max-h-[35vh] lg:max-h-none rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 ring-1 ring-black/5 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 z-10 pointer-events-none" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Text Content - Mobile: Bottom, Desktop: Left */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1">
                {/* Label */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-[#F48244] bg-[#F48244]/10 ring-1 ring-[#F48244]/20">
                    {service.label}
                  </span>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#F48244]/40 to-transparent"></div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-[#171717]">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-lg text-gray-600 leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wide uppercase text-gray-600 bg-white border border-gray-200/60 rounded-full shadow-sm"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-1 sm:mt-2 md:mt-4">
                  <AButton href={service.href} showArrow>
                    Learn More
                  </AButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
