"use client";

import Link from "next/link";
import AButton from "./AButton";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const logoSets = [
  // Nigerian Government Agencies logos
  [
    <svg
      key="gov1"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="20" r="12" fill="#F48244" opacity="0.8" />
      <path d="M30 12 L35 25 L25 25 Z" fill="#F48244" opacity="0.9" />
    </svg>,
    <svg
      key="gov2"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="12" width="10" height="16" fill="#F48244" opacity="0.7" />
      <rect
        x="28"
        y="10"
        width="10"
        height="20"
        fill="#F48244"
        opacity="0.85"
      />
      <rect
        x="41"
        y="14"
        width="10"
        height="12"
        fill="#F48244"
        opacity="0.75"
      />
    </svg>,
    <svg
      key="gov3"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="20"
        r="10"
        fill="none"
        stroke="#F48244"
        strokeWidth="2"
        opacity="0.8"
      />
      <circle cx="30" cy="20" r="5" fill="#F48244" opacity="0.6" />
    </svg>,
    <svg
      key="gov4"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 30 L30 10 L40 28 L50 12"
        stroke="#F48244"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>,
    <svg
      key="gov5"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="10" width="8" height="20" fill="#F48244" opacity="0.7" />
      <rect x="23" y="8" width="8" height="24" fill="#F48244" opacity="0.85" />
      <rect x="34" y="12" width="8" height="16" fill="#F48244" opacity="0.7" />
      <rect x="45" y="15" width="8" height="10" fill="#F48244" opacity="0.6" />
    </svg>,
    <svg
      key="gov6"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="30,12 40,28 20,28" fill="#F48244" opacity="0.8" />
      <circle cx="60" cy="20" r="8" fill="#F48244" opacity="0.7" />
      <rect
        x="80"
        y="14"
        width="12"
        height="12"
        fill="#F48244"
        opacity="0.75"
      />
    </svg>,
  ],
  // Large Enterprises logos
  [
    <svg
      key="ent1"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="8"
        width="24"
        height="24"
        rx="2"
        fill="#F48244"
        opacity="0.8"
      />
      <circle cx="35" cy="20" r="10" fill="#F48244" opacity="0.7" />
    </svg>,
    <svg
      key="ent2"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 28 L25 10 L35 20 L45 8 L55 25"
        stroke="#F48244"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>,
    <svg
      key="ent3"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="8" fill="#F48244" opacity="0.6" />
      <circle cx="40" cy="20" r="12" fill="#F48244" opacity="0.8" />
      <circle cx="65" cy="20" r="7" fill="#F48244" opacity="0.7" />
    </svg>,
    <svg
      key="ent4"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="14" y="12" width="6" height="16" fill="#F48244" opacity="0.7" />
      <rect x="23" y="10" width="6" height="20" fill="#F48244" opacity="0.85" />
      <rect x="32" y="14" width="6" height="12" fill="#F48244" opacity="0.75" />
      <rect x="41" y="16" width="6" height="8" fill="#F48244" opacity="0.6" />
      <rect x="50" y="11" width="6" height="18" fill="#F48244" opacity="0.8" />
    </svg>,
    <svg
      key="ent5"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 20 Q30 10 45 20 T75 20"
        stroke="#F48244"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="30" cy="20" r="3" fill="#F48244" opacity="0.8" />
      <circle cx="60" cy="20" r="3" fill="#F48244" opacity="0.8" />
    </svg>,
    <svg
      key="ent6"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="18"
        height="20"
        rx="2"
        fill="#F48244"
        opacity="0.7"
      />
      <rect
        x="32"
        y="12"
        width="16"
        height="16"
        rx="2"
        fill="#F48244"
        opacity="0.8"
      />
      <rect
        x="52"
        y="14"
        width="14"
        height="12"
        rx="2"
        fill="#F48244"
        opacity="0.75"
      />
    </svg>,
  ],
  // Private Sector Organizations logos
  [
    <svg
      key="priv1"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="14" width="8" height="12" fill="#F48244" opacity="0.8" />
      <rect x="27" y="12" width="8" height="14" fill="#F48244" opacity="0.75" />
      <rect x="39" y="16" width="8" height="10" fill="#F48244" opacity="0.7" />
      <rect x="51" y="10" width="8" height="16" fill="#F48244" opacity="0.85" />
    </svg>,
    <svg
      key="priv2"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 25 L30 12 L40 20 L50 10 L60 22 L70 14"
        stroke="#F48244"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>,
    <svg
      key="priv3"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="20" r="7" fill="#F48244" opacity="0.75" />
      <circle cx="50" cy="20" r="9" fill="#F48244" opacity="0.8" />
      <circle cx="75" cy="20" r="6" fill="#F48244" opacity="0.7" />
    </svg>,
    <svg
      key="priv4"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18 L20 14 L25 18 L30 12 L35 20 L40 15 L45 22 L50 16 L55 24"
        stroke="#F48244"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>,
    <svg
      key="priv5"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="14" width="5" height="12" fill="#F48244" opacity="0.7" />
      <rect x="20" y="10" width="5" height="16" fill="#F48244" opacity="0.8" />
      <rect x="28" y="16" width="5" height="8" fill="#F48244" opacity="0.65" />
      <rect x="36" y="12" width="5" height="14" fill="#F48244" opacity="0.75" />
      <rect x="44" y="18" width="5" height="6" fill="#F48244" opacity="0.6" />
      <rect x="52" y="11" width="5" height="18" fill="#F48244" opacity="0.85" />
    </svg>,
    <svg
      key="priv6"
      className="h-10 w-28"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="30,12 40,28 20,28" fill="#F48244" opacity="0.8" />
      <rect
        x="50"
        y="14"
        width="10"
        height="12"
        fill="#F48244"
        opacity="0.75"
      />
      <path
        d="M75 28 Q80 18 85 28"
        stroke="#F48244"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
    </svg>,
  ],
];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(0);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Gear 1 rotates clockwise
    gsap.to("#gear1", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    // Gear 2 rotates counter-clockwise
    gsap.to("#gear2", {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    // Text fill animation only on desktop (lg screen and above)
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const timeline = gsap.timeline({ repeat: -1 });
      const categories = ["#category-0", "#category-1", "#category-2"];

      categories.forEach((category, index) => {
        // Set active category at start of animation
        timeline.call(() => setActiveCategory(index), null, index * 4.2);

        // Animate the fill width from 0% to 100%
        timeline.to(
          category,
          {
            "--fill-width": "100%",
            duration: 4,
            ease: "power1.inOut",
          },
          index * 4.2
        );
      });
    }

    // Marquee animation for mobile/tablet logos
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: -marqueeRef.current.scrollWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className=" pt-20 lg:pt-24 w-full" data-name="Hero Section">
      {/* Search Bar */}
      <div className="flex justify-center px-6">
        <div className="flex flex-col">
          <div className=" w-fit self-center  bg-[#FEECE4]  md:hidden border-[#F48244]/30 border-[1.5] top-0.5 relative border-b-0 rounded-t-lg px-2 py-1.5">
            <div className="flex flex-col md:flex-row items-center gap-1">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                                  <g
                                    id="two-gears-svgrepo-com 1"
                                    clipPath="url(#clip0_232_104)"
                                  >
                  <g id="Group">
                    <g id="iconos_2_">
                      <path
                        id="gear2"
                        d="M2.77545 8.00924L1.52942 9.89472L2.34523 10.7081L4.18806 9.486C4.49846 9.67983 4.83686 9.84922 5.19642 9.95322L5.64533 12.1882H6.79551L7.23345 10.0073C7.59951 9.9228 7.94688 9.78302 8.26743 9.60633L10.1529 10.8535L10.9663 10.0382L9.7442 8.19575C9.93802 7.88535 10.0721 7.54695 10.1761 7.18739L12.3756 6.73844V5.5883L10.2301 5.15032C10.1456 4.78426 10.0233 4.43689 9.84698 4.11676L11.1032 2.23123L10.2922 1.41788L8.45186 2.63995C8.14146 2.44613 7.80425 2.30805 7.44469 2.20362L6.99659 0H5.84646L5.40847 2.14958C5.04241 2.23408 4.69505 2.35839 4.37453 2.53514L2.48901 1.28014L1.67566 2.0915L2.89772 3.9319C2.7039 4.24269 2.53043 4.57952 2.42642 4.93907L0.1875 5.38717V6.53731L2.37242 6.9753C2.45693 7.34132 2.5987 7.68868 2.77545 8.00924ZM6.32098 4.32885C7.27857 4.32885 8.05492 5.1052 8.05492 6.06279C8.05492 7.02038 7.27853 7.79676 6.32098 7.79676C5.36339 7.79676 4.587 7.02038 4.587 6.06279C4.587 5.1052 5.36339 4.32885 6.32098 4.32885Z"
                        fill="#F48244"
                      />
                      <path
                        id="gear1"
                        d="M12.21 9.59737L12.6021 11.7721C12.2933 11.9858 12.0191 12.2369 11.7863 12.5193L9.57255 12.0521L9.11672 13.108L10.932 14.3691C10.8662 14.7294 10.8479 15.0999 10.884 15.4725L8.98633 16.7084L9.41047 17.7773L11.5844 17.3856C11.7981 17.6944 12.0488 17.969 12.3311 18.2014L11.8635 20.4152L12.9194 20.871L14.1805 19.0558C14.5409 19.1216 14.9106 19.1386 15.2835 19.1029L16.519 20.9998L17.5879 20.5757L17.1966 18.4025C17.5054 18.1888 17.78 17.9385 18.0128 17.6562L20.227 18.1238L20.6829 17.0679L18.8677 15.8072C18.9335 15.4469 18.9517 15.0768 18.916 14.7038L20.8137 13.4679L20.3896 12.399L18.2156 12.7907C18.0019 12.4819 17.7512 12.2073 17.4689 11.9749L17.9365 9.76111L16.8806 9.30528L15.6195 11.1205C15.2592 11.0547 14.8886 11.0356 14.5157 11.0714L13.2794 9.17285L12.21 9.59737ZM14.2601 13.4769C15.1502 13.1234 16.1582 13.559 16.5116 14.4491C16.8651 15.3393 16.4296 16.3472 15.5394 16.7007C14.6493 17.0541 13.6413 16.6186 13.2879 15.7284C12.9348 14.8379 13.3699 13.8299 14.2601 13.4769Z"
                        fill="#F48244"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_232_104">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className=" bg-[#FEECE4]  md:hidden  border-[#F48244]/30 border-[1.5] rounded-lg px-2 py-1.5">
            <p className="text-xs text-center font-normal">
              Enabling Governments and Organizations to Function
            </p>{" "}
          </div>
          <div className=" bg-[#FEECE4] -top-0.5 relative w-fit self-center border-t-0  md:hidden border-[#F48244]/30 border-[1.5] rounded-b-lg px-2 py-1.5">
            <p className="text-xs text-center font-normal">
              Smarter, Faster & More Securely.
            </p>{" "}
          </div>
        </div>

        <div className="  bg-[#F48244]/15 hidden md:block border-[#F48244]/30 border-[1.5] rounded-lg px-2 py-1.5">
          <div className="flex flex-col md:flex-row items-center gap-1">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="two-gears-svgrepo-com 1" clipPath="url(#clip0_232_104)">
                <g id="Group">
                  <g id="iconos_2_">
                    <path
                      id="gear2"
                      d="M2.77545 8.00924L1.52942 9.89472L2.34523 10.7081L4.18806 9.486C4.49846 9.67983 4.83686 9.84922 5.19642 9.95322L5.64533 12.1882H6.79551L7.23345 10.0073C7.59951 9.9228 7.94688 9.78302 8.26743 9.60633L10.1529 10.8535L10.9663 10.0382L9.7442 8.19575C9.93802 7.88535 10.0721 7.54695 10.1761 7.18739L12.3756 6.73844V5.5883L10.2301 5.15032C10.1456 4.78426 10.0233 4.43689 9.84698 4.11676L11.1032 2.23123L10.2922 1.41788L8.45186 2.63995C8.14146 2.44613 7.80425 2.30805 7.44469 2.20362L6.99659 0H5.84646L5.40847 2.14958C5.04241 2.23408 4.69505 2.35839 4.37453 2.53514L2.48901 1.28014L1.67566 2.0915L2.89772 3.9319C2.7039 4.24269 2.53043 4.57952 2.42642 4.93907L0.1875 5.38717V6.53731L2.37242 6.9753C2.45693 7.34132 2.5987 7.68868 2.77545 8.00924ZM6.32098 4.32885C7.27857 4.32885 8.05492 5.1052 8.05492 6.06279C8.05492 7.02038 7.27853 7.79676 6.32098 7.79676C5.36339 7.79676 4.587 7.02038 4.587 6.06279C4.587 5.1052 5.36339 4.32885 6.32098 4.32885Z"
                      fill="#F48244"
                    />
                    <path
                      id="gear1"
                      d="M12.21 9.59737L12.6021 11.7721C12.2933 11.9858 12.0191 12.2369 11.7863 12.5193L9.57255 12.0521L9.11672 13.108L10.932 14.3691C10.8662 14.7294 10.8479 15.0999 10.884 15.4725L8.98633 16.7084L9.41047 17.7773L11.5844 17.3856C11.7981 17.6944 12.0488 17.969 12.3311 18.2014L11.8635 20.4152L12.9194 20.871L14.1805 19.0558C14.5409 19.1216 14.9106 19.1386 15.2835 19.1029L16.519 20.9998L17.5879 20.5757L17.1966 18.4025C17.5054 18.1888 17.78 17.9385 18.0128 17.6562L20.227 18.1238L20.6829 17.0679L18.8677 15.8072C18.9335 15.4469 18.9517 15.0768 18.916 14.7038L20.8137 13.4679L20.3896 12.399L18.2156 12.7907C18.0019 12.4819 17.7512 12.2073 17.4689 11.9749L17.9365 9.76111L16.8806 9.30528L15.6195 11.1205C15.2592 11.0547 14.8886 11.0356 14.5157 11.0714L13.2794 9.17285L12.21 9.59737ZM14.2601 13.4769C15.1502 13.1234 16.1582 13.559 16.5116 14.4491C16.8651 15.3393 16.4296 16.3472 15.5394 16.7007C14.6493 17.0541 13.6413 16.6186 13.2879 15.7284C12.9348 14.8379 13.3699 13.8299 14.2601 13.4769Z"
                      fill="#F48244"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_232_104">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-xs text-center font-normal">
              Enabling Governments and Organizations to Function Smarter, Faster
              & More Securely.
            </p>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="w-full flex  flex-col items-center pt-6 px-4 md:px-7 lg:px-12">
        {/* Headline */}
        <h1 className="font-heading tracking-tight font-semibold leading-tight text-2xl  md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 md:px-5 lg:px-14 text-center  pb-4 lg:pb-6 ">
          Empowering Businesses Through Technology, Mobility, and Logistics
          Innovation
        </h1>

        {/* Description */}
        <p className="text-sm lg:text-base text-black text-center px-1 md:px-25 lg:px-40 pb-6 lg:pb-8 ">
          Integrating Technology, Mobility, and Logistics expertise to deliver
          compliant, efficient, and secure end-to-end solutions for enterprise
          and government operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6 items-center justify-center mb-12">
          {/* Get Started Button */}
          <AButton href="/get-started" showArrow filled>
            Get Started
          </AButton>

          {/* Learn More Button */}
          <AButton href="/get-started" showArrow>
            Learn More
          </AButton>
        </div>
      </div>


      <div className="h-96 bg-red-600 "></div>

      {/* Trusted By Section */}
      <div className="w-full py-12 ">
        <div className="flex flex-col items-center gap-8">
          {/* Heading with animated text fill */}
          <h4 className="text-sm text-center text-black font-normal flex flex-wrap justify-center gap-1">
            <span>We are Trusted by</span>
            <span
              id="category-0"
              className="relative inline-block text-gray-400"
              style={{
                "--fill-width": "0%",
                backgroundImage:
                  "linear-gradient(90deg, #F48244 var(--fill-width, 0%), #9CA3AF var(--fill-width, 0%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nigerian Government Agencies
            </span>
            <span className="text-gray-400">,</span>
            <span
              id="category-1"
              className="relative inline-block text-gray-400"
              style={{
                "--fill-width": "0%",
                backgroundImage:
                  "linear-gradient(90deg, #F48244 var(--fill-width, 0%), #9CA3AF var(--fill-width, 0%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Large Enterprises
            </span>
            <span className="text-gray-400">&</span>
            <span
              id="category-2"
              className="relative inline-block text-gray-400"
              style={{
                "--fill-width": "0%",
                backgroundImage:
                  "linear-gradient(90deg, #F48244 var(--fill-width, 0%), #9CA3AF var(--fill-width, 0%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Private Sector Organizations
            </span>
          </h4>

          {/* Logo Grid - Shows active category logos */}
          {/* Desktop: wrap layout */}
          <div className="hidden lg:flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {logoSets[activeCategory].map((logo) => logo)}
          </div>

          {/* Mobile & Tablet: horizontal scroll with marquee animation */}
          <div className="lg:hidden overflow-hidden w-full">
            <div
              ref={marqueeRef}
              className="flex gap-8 justify-start px-6 pb-2 min-w-min"
            >
              {logoSets[activeCategory].map((logo) => logo)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
