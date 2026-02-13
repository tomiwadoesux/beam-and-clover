"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import AButton from "./a-button";

const style = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;

export default function VehicleAdmin() {
  // Inject styles on client side
  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      !document.getElementById("vehicle-admin-styles")
    ) {
      const styleEl = document.createElement("style");
      styleEl.id = "vehicle-admin-styles";
      styleEl.textContent = style;
      document.head.appendChild(styleEl);
    }
  }, []);

  // Use state to manage which item is currently active
  const [activeItem, setActiveItem] = useState("Vehicle Registration");
  const [registrationPage, setRegistrationPage] = useState(0);
  const desktopItemRefs = useRef({});
  const mobileItemRefs = useRef({});
  const activeBackgroundRef = useRef(null);
  const mobileNavRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(0);

  const menuItems = [
    "Vehicle Registration",
    "License Plates",
    "Fleet management",
    "Vehicle Inspection",
    "Regulatory Support",
    "Traffic Studies",
  ];

  const renderContent = (item) => {
    switch (item) {
      case "Vehicle Registration": {
        const registrationPoints = [
          {
            title: "Online registration portals ",
            description:
              "Citizens can complete vehicle registration 24/7 from any device. Our user-friendly interface provides real-time validation and instant confirmation, with mobile apps offering offline capability for areas with limited connectivity.",
          },
          {
            title: "Document scanning and verification systems",
            description:
              "Advanced OCR technology instantly captures and validates ownership documents, licenses, and insurance papers. AI-powered verification cross-references multiple databases to detect fraud, reducing processing time from days to minutes.",
          },
          {
            title: "Ownership transfer and title management",
            description:
              "Secure digital transfers using blockchain technology ensure tamper-proof records. Automated workflows handle inheritance, fleet transfers, and financial liens, with real-time notifications to all parties throughout the process.",
          },
          {
            title: "Historical record digitization",
            description:
              "Transform decades of paper records into searchable digital archives. Our systematic approach includes data cleaning and deduplication, creating a comprehensive vehicle history database for informed decision-making.",
          },
          {
            title: "Integration with national databases",
            description:
              "Seamless API connections with law enforcement, tax, insurance, and customs systems enable real-time verification. This eliminates duplicate data entry, reduces fraud, and ensures consistent information across all stakeholders.",
          },
          {
            title: "Automated fee calculation and payment processing",
            description:
              "Dynamic fee calculation based on vehicle type, location, and taxes. Supports multiple payment methods including cards, mobile money, and bank transfers, with instant receipts and automated reconciliation.",
          },
        ];

        const itemsPerPage = 3;
        const totalPages = Math.ceil(
          registrationPoints.length / itemsPerPage,
        );
        const currentPageItems = registrationPoints.slice(
          registrationPage * itemsPerPage,
          (registrationPage + 1) * itemsPerPage,
        );

        const handlePrevPage = () => {
          setRegistrationPage((prev) =>
            prev > 0 ? prev - 1 : totalPages - 1,
          );
        };

        const handleNextPage = () => {
          setRegistrationPage((prev) =>
            prev < totalPages - 1 ? prev + 1 : 0,
          );
        };

        return (
          <div>
            <h2
              className="text-3xl text-center lg:hidden font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, #ff8f4c, #ffc680)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                letterSpacing: "-0.5px",
              }}
            >
              Vehicle Registration
            </h2>

            <div className="flex items-center justify-center gap-3 pb-6">
              <button
                onClick={handlePrevPage}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Previous"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === registrationPage ?
                        "w-8 bg-foreground" :
                        "w-2 bg-foreground/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextPage}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Next"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-8 overflow-hidden">
              <div className="flex flex-1 flex-col gap-8 transition-all duration-500">
                {currentPageItems.map((point, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 animate-fadeIn group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F48244] group-hover:scale-125 transition-transform"></div>
                      <h1 className="text-xl font-bold tracking-tight">
                        {point.title}
                      </h1>
                    </div>
                    <h4 className="text-sm text-foreground/60 leading-relaxed pl-5 border-l border-foreground/10">
                      {point.description}
                    </h4>
                  </div>
                ))}
              </div>

              <div className=" flex-1  h-auto w-full flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/registration.webp"
                  alt=""
                  width={1200}
                  height={600}
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      }
      case "License Plates": {
        return (
          <div>
            <h2
              className="text-3xl text-center lg:hidden font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, #ff8f4c, #ffc680)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                letterSpacing: "-0.5px",
              }}
            >
              License Plates
            </h2>
            <div className="flex flex-col-reverse lg:flex-row gap-8 overflow-hidden">
              <div className="flex flex-1 flex-col gap-6 pt-6 transition-all duration-500">
                {[
                  "High-security plate manufacturing systems",
                  "RFID and smart plate integration",
                  "Inventory management and distribution tracking",
                  "Personalized and specialty plate programs",
                  "Anti-counterfeit technologies",
                  "ANPR/ALPR-ready optimization",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 animate-fadeIn group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F48244]"></div>
                      <h4 className="text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {item}
                      </h4>
                    </div>
                    <div className="w-full h-px bg-foreground/5 ml-4 mt-2" />
                  </div>
                ))}
              </div>

              <div className=" flex-1   h-auto w-[100%] flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/number-plate.webp"
                  alt=""
                  width={1200}
                  height={600}
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      }
      case "Fleet management": {
        const fleetFeatures = [
          {
            title: "GPS tracking and route optimization",
            description: "Real-time positioning and AI-driven routing.",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            ),
          },
          {
            title: "Predictive maintenance",
            description:
              "IoT sensors to predict failures before they happen.",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            ),
          },
          {
            title: "Fuel consumption monitoring",
            description: "Granular tracking to identify inefficiencies.",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            ),
          },
          {
            title: "Driver behavior analytics",
            description: "Safety scoring and performance monitoring.",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            ),
          },
          {
            title: "Vehicle utilization reporting",
            description: "Right-sizing fleets based on usage data.",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ),
          },
          {
            title: "Cost analysis and budgeting tools",
            description: "TCO modeling and automated expense tracking.",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
          },
        ];

        return (
          <div>
            <h2
              className="text-3xl text-center lg:hidden font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, #ff8f4c, #ffc680)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                letterSpacing: "-0.5px",
              }}
            >
              Fleet Management{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {fleetFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-foreground/5 rounded-2xl p-8 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="text-4xl mb-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "Vehicle Inspection": {
        const inspectionPoints = [
          {
            title: "Intelligent Transport System",
            description:
              "Smart transport infrastructure powered by intelligent systems for real-time monitoring, traffic control, and operational efficiency.",
          },
          {
            title: "Emissions testing and environmental compliance",
            description:
              "Advanced exhaust analyzers and OBD-II diagnostics with real-time reporting to environmental agencies.",
          },
          {
            title: "Safety inspection protocols and equipment",
            description:
              "Calibrated tools including under-vehicle cameras and brake testers for thorough evaluation.",
          },
          {
            title: "Digital certificate generation",
            description:
              "Tamper-proof certificates with QR codes that integrate with registration systems for instant verification.",
          },
          {
            title: "Inspector training and certification programs",
            description:
              "Technical skills training and performance monitoring to maintain high standards.",
          },
          {
            title: "Mobile inspection unit deployment",
            description:
              "Fully equipped units that bring inspection services to remote areas or large fleet operators.",
          },
        ];

        const inspectionItemsPerPage = 3;
        const inspectionTotalPages = Math.ceil(
          inspectionPoints.length / inspectionItemsPerPage,
        );
        const inspectionCurrentPageItems = inspectionPoints.slice(
          registrationPage * inspectionItemsPerPage,
          (registrationPage + 1) * inspectionItemsPerPage,
        );

        const handleInspectionPrevPage = () => {
          setRegistrationPage((prev) =>
            prev > 0 ? prev - 1 : inspectionTotalPages - 1,
          );
        };

        const handleInspectionNextPage = () => {
          setRegistrationPage((prev) =>
            prev < inspectionTotalPages - 1 ? prev + 1 : 0,
          );
        };

        return (
          <div>
            <h2
              className="text-3xl text-center lg:hidden font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, #ff8f4c, #ffc680)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                letterSpacing: "-0.5px",
              }}
            >
              Vehicle Inspection
            </h2>

            <div className="flex items-center justify-center gap-3 pb-6">
              <button
                onClick={handleInspectionPrevPage}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Previous"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="flex gap-2">
                {Array.from({ length: inspectionTotalPages }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === registrationPage ?
                          "w-8 bg-foreground" :
                          "w-2 bg-foreground/20"
                      }`}
                    />
                  ),
                )}
              </div>
              <button
                onClick={handleInspectionNextPage}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Next"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-8 overflow-hidden">
              <div className="flex flex-1 flex-col gap-8 transition-all duration-500">
                {inspectionCurrentPageItems.map((point, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 animate-fadeIn group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform"></div>
                      <h1 className="text-xl font-bold tracking-tight">
                        {point.title}
                      </h1>
                    </div>
                    <h4 className="text-sm text-foreground/60 leading-relaxed pl-5 border-l border-foreground/10">
                      {point.description}
                    </h4>
                  </div>
                ))}
              </div>

              <div className=" flex-1   h-auto w-[100%] flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/v-inspection.webp"
                  alt=""
                  width={1200}
                  height={600}
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      }
      case "Regulatory Support": {
        return (
          <div className="animate-fadeIn">
            <h2
              className="text-3xl text-center lg:hidden font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, #ff8f4c, #ffc680)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                letterSpacing: "-0.5px",
              }}
            >
              Regulatory Support{" "}
            </h2>
            <div className="flex flex-col-reverse lg:flex-col gap-12 py-12">
              <div className="w-full flex-col gap-5 lg:gap-8 flex justify-center px-4 md:px-10 lg:px-12 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Expert Liaison & <br />
                  <span className="text-foreground/40">
                    Compliance Services
                  </span>
                </h2>
                <h4 className="self-center text-lg md:text-xl text-foreground/60 max-w-3xl leading-relaxed">
                  We navigate the complex regulatory landscape on your behalf.
                  From expediting approvals to monitoring legislative changes,
                  we eliminate regulatory headaches so you can focus on
                  operations.
                </h4>
                <div className="flex self-center pt-4">
                  <AButton href="/get-started" filled showArrow>
                    Start Consultation
                  </AButton>
                </div>
              </div>
              <div className=" flex-1   h-auto w-[100%] flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/liason.webp"
                  alt=""
                  width={1200}
                  height={600}
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      }
      case "Traffic Studies": {
        return (
          <div>
            <h2 className="text-3xl text-center lg:hidden font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Traffic Studies
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 overflow-hidden">
              <div className="flex flex-1 flex-col gap-6 pt-6 transition-all duration-500">
                {[
                  "Optimized traffic flow and reduced congestion",
                  "Identified accident hotspots with safety solutions",
                  "Infrastructure investment priorities based on ROI",
                  "Sustainable urban mobility strategies",
                  "Evidence-based policy recommendations",
                  "Environmental impact mitigation plans",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 animate-fadeIn group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <h4 className="text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {item}
                      </h4>
                    </div>
                    <div className="w-full h-px bg-foreground/5 ml-4 mt-2" />
                  </div>
                ))}
              </div>

              <div className=" flex-1   h-auto w-[100%] flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/traffic.webp"
                  alt=""
                  width={1200}
                  height={600}
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  // Animate the active background pill (Desktop only)
  useEffect(() => {
    const activeElement = desktopItemRefs.current[activeItem];
    if (
      activeElement &&
      activeBackgroundRef.current &&
      activeBackgroundRef.current.parentElement
    ) {
      gsap.to(activeBackgroundRef.current, {
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [activeItem]);

  // Handle drag/swipe for mobile navigation
  const handleMobileNavMouseDown = (e) => {
    dragStartX.current = e.clientX || e.touches?.[0]?.clientX;
    dragStartIndex.current = menuItems.indexOf(activeItem);
  };

  const handleMobileNavMouseUp = (e) => {
    const currentX = e.clientX || e.changedTouches?.[0]?.clientX;
    const diff = dragStartX.current - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && dragStartIndex.current < menuItems.length - 1) {
        // Swiped left, go to next item
        setActiveItem(menuItems[dragStartIndex.current + 1]);
      }
      else if (diff < 0 && dragStartIndex.current > 0) {
        // Swiped right, go to previous item
        setActiveItem(menuItems[dragStartIndex.current - 1]);
      }
    }
  };

  const handlePrevClick = () => {
    const currentIndex = menuItems.indexOf(activeItem);
    if (currentIndex > 0) {
      setActiveItem(menuItems[currentIndex - 1]);
    }
  };

  const handleNextClick = () => {
    const currentIndex = menuItems.indexOf(activeItem);
    if (currentIndex < menuItems.length - 1) {
      setActiveItem(menuItems[currentIndex + 1]);
    }
  };

  return (
    <section className="px-7 md:px-10  pt-20 lg:pt-24 lg:px-12 ">
      <div className="max-w-[1400px] overflow-visible mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-0">

        <div>
          <div className="flex items-center gap-3 pb-3 sm:pb-5 lg:pb-8">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F48244]/10 text-[#F48244] text-xs font-mono  rounded border border-[#F48244]/20 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#F48244]/60 rounded-full animate-pulse" />
              Vehicle Administration{" "}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 font-semibold tracking-tighter leading-[0.9] pb-3 sm:pb-4 md:pb-8">
            Smart Vehicle Administration & Licensing
          </h1>

          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-foreground/60 max-w-sm md:max-w-2xl leading-relaxed ">
            We streamline and digitalize vehicle administration processes
            while ensuring full regulatory compliance and customer
            satisfaction. Our specialized services cover everything from
            registration to traffic policy consulting.
          </p>
          <div className="pt-3 sm:pt-4">
            <AButton href="/contact" filled showArrow>
              Get a Demo
            </AButton>
          </div>
        </div>

      </div>

      {/* Desktop: Text-based Navigation */}
      <div className="hidden lg:flex justify-center items-center pt-24 relative z-50 p-10">
        <div className="flex items-center p-1.5 shadow-sm border border-foreground/10 bg-foreground/5 backdrop-blur-md rounded-full relative">
          {/* Animated background pill */}
          <div
            ref={activeBackgroundRef}
            className="absolute top-1.5 bottom-1.5 pointer-events-none rounded-full shadow-sm"
            style={{
              backgroundColor: "white",
              left: 0,
              width: 0,
            }}
          />

          {menuItems.map((item) => {
            return (
              <div
                key={item}
                ref={(el) => {
                  if (el)
                    desktopItemRefs.current[item] = el;
                }}
                onClick={() => setActiveItem(item)}
                className={`
              text-sm
              py-2
              px-6
              cursor-pointer
              transition-colors
              duration-200
              font-medium
              relative
              z-10
              rounded-full
              ${
              item === activeItem ?
                "text-foreground font-semibold" :
                "text-foreground/60 hover:text-foreground"
              }
            `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 mb-12 max-w-7xl mx-auto">
        <div className="border border-foreground/10 rounded-3xl p-8 md:p-12 bg-white shadow-sm animate-fadeIn">
          {renderContent(activeItem)}
        </div>
      </div>

      {/* Mobile & Tablet: Dot Navigation */}
      <div className="lg:hidden flex justify-center items-center gap-4 p-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrevClick}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Previous"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Dot Navigation Container */}
        <div
          ref={mobileNavRef}
          className="flex items-center gap-2 px-4 py-2.5  rounded-full select-none"
          style={{
            // backgroundColor: "#d3d3d3",
            cursor: "grab",
            userSelect: "none",
          }}
          onMouseDown={handleMobileNavMouseDown}
          onMouseUp={handleMobileNavMouseUp}
          onTouchStart={handleMobileNavMouseDown}
          onTouchEnd={handleMobileNavMouseUp}
        >
          {menuItems.map((item) => {
            const isActive = item === activeItem;
            return (
              <div
                key={item}
                ref={(el) => {
                  if (el)
                    mobileItemRefs.current[item] = el;
                }}
                onClick={() => setActiveItem(item)}
                className={`transition-all duration-300 cursor-pointer ${
                  isActive ? "w-8 h-3" : "w-3 h-3"
                } rounded-full`}
                style={{
                  backgroundColor: isActive ? "#F48244" : "#D6D6D6",
                }}
                title={item}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextClick}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Next"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
