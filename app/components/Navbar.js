"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import AButton from "./a-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "./logo";
// Icons
const Icons = {
  Vehicle: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  IT: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  ),
  Logistics: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" x2="12" y1="22.08" y2="12" />
    </svg>
  ),
  Brand: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  ),
  Blog: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  Careers: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  ),
  FAQ: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#F48244]"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  ),
};

const servicesData = [
  {
    title: "Vehicle Administration",
    desc: "Manage your fleet efficiently",
    icon: <Icons.Vehicle />,
    href: "/vehicle-administration",
  },
  {
    title: "IT Services",
    desc: "Tech solutions for growth",
    icon: <Icons.IT />,
    href: "/IT-Services",
  },
  {
    title: "Logistics",
    desc: "Expert advice and strategy",
    icon: <Icons.Logistics />,
    href: "/logistics",
  },
];

const resourcesData = [
  {
    title: "Blog",
    desc: "Latest news & updates",
    icon: <Icons.Blog />,
    href: "/blog",
  },
  {
    title: "Careers",
    desc: "Join our team",
    icon: <Icons.Careers />,
    href: "/careers",
  },
  {
    title: "FAQ",
    desc: "Common questions answered",
    icon: <Icons.FAQ />,
    href: "/faq",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const resourcesTimeoutRef = useRef(null);

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 150);
  };

  const handleResourcesMouseEnter = () => {
    clearTimeout(resourcesTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };

  // Animation for Mobile Menu
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -10, opacity: 0, display: "none" },
        {
          y: 0,
          opacity: 1,
          display: "flex",
          duration: 0.3,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        ".mobile-nav-link",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -10,
        opacity: 0,
        display: "none",
        duration: 0.2,
        ease: "power3.in",
      });
    }
  }, [isMobileMenuOpen]);

  // Animation for Desktop Services Dropdown
  useGSAP(() => {
    if (servicesDropdownOpen) {
      gsap.fromTo(
        servicesDropdownRef.current,
        { opacity: 0, scale: 0.95, y: -8, display: "none" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          display: "flex",
          duration: 0.2,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(servicesDropdownRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -8,
        display: "none",
        duration: 0.15,
        ease: "power2.in",
      });
    }
  }, [servicesDropdownOpen]);

  // Animation for Desktop Resources Dropdown
  useGSAP(() => {
    if (resourcesDropdownOpen) {
      gsap.fromTo(
        resourcesDropdownRef.current,
        { opacity: 0, scale: 0.95, y: -8, display: "none" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          display: "flex",
          duration: 0.2,
          ease: "power2.out",
        },
      );
    } else {
      gsap.to(resourcesDropdownRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -8,
        display: "none",
        duration: 0.15,
        ease: "power2.in",
      });
    }
  }, [resourcesDropdownOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-black/5 z-50"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
          <span className="font-bold text-lg tracking-tighter text-gray-900 group-hover:text-black transition-colors">
            Beam & Clover
          </span>
        </Link>

        {/* Navigation Links (Desktop only) */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-tight text-gray-600">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button className="hover:text-black flex items-center gap-1.5 py-6 focus:outline-none transition-colors group-hover:text-black">
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gray-400 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Services Mega Menu */}
            <div
              id="services-dropdown"
              ref={servicesDropdownRef}
              className="absolute top-full -left-4 bg-white border border-black/5 rounded-xl shadow-xl shadow-black/5 ring-1 ring-black/5 z-50 overflow-hidden hidden"
            >
              <div className="flex p-2">
                <div className="flex-1 p-2 grid gap-1">
                  {servicesData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="dropdown-item flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-all group/link"
                    >
                      <div className="mt-1 p-2 bg-[#F48244]/5 rounded-md group-hover/link:bg-[#F48244]/10 transition-colors text-[#F48244] group-hover/link:scale-105 duration-200">
                        {item.icon}
                      </div>
                      <div className="flex flex-col gap-0.5 group-hover/link:translate-x-1 transition-transform duration-200">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover/link:text-black transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 text-nowrap font-normal leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-item w-56 bg-gray-50/50 p-4 rounded-lg flex flex-col justify-between ml-2 border border-black/5">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-medium mb-2">
                      Enterprise
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Scale your fleet operations with our enterprise solutions.
                    </p>
                  </div>
                  <div className="mt-4">
                    <AButton
                      href="/contact"
                      filled
                      className="w-full text-xs justify-center"
                    >
                      Book Demo
                    </AButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="hover:text-black transition-colors py-6"
          >
            Company
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            <button className="hover:text-black flex items-center gap-1.5 py-6 focus:outline-none transition-colors group-hover:text-black">
              Resources
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gray-400 transition-transform duration-300 ${resourcesDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Resources Mega Menu */}
            <div
              id="resources-dropdown"
              ref={resourcesDropdownRef}
              className="absolute top-full -left-4 w-[300px] bg-white border border-black/5 rounded-xl shadow-xl shadow-black/5 ring-1 ring-black/5 z-50 overflow-hidden hidden"
            >
              <div className="flex p-2">
                <div className="flex-1 p-2 grid grid-cols-1 gap-1">
                  <div className="dropdown-item px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 font-medium">
                    Discover
                  </div>
                  {resourcesData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="dropdown-item flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-all group/link"
                    >
                      <div className="p-2 bg-[#F48244]/5 rounded-md group-hover/link:bg-[#F48244]/10 transition-colors text-[#F48244] group-hover/link:scale-105 duration-200">
                        {item.icon}
                      </div>
                      <div className="flex flex-col group-hover/link:translate-x-1 transition-transform duration-200">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover/link:text-black transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 text-nowrap  font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="hover:text-black transition-colors py-6"
          >
            Contact
          </Link>
        </div>

        {/* CTA Buttons (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-[13px] font-medium text-black hover:text-[#F48244] transition-colors"
          >
            Learn More
          </Link>
          <AButton href="/contact" filled showArrow>
            Get Started
          </AButton>
        </div>

        <button
          className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile & Tablet Menu Dropdown */}
      <div
        ref={mobileMenuRef}
        className="hidden absolute top-[64px] left-0 right-0 bg-white border-b border-black/5 shadow-xl lg:hidden z-50 flex-col"
      >
        <div className="flex flex-col p-4">
          <div className="mobile-nav-link">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="w-full text-left text-gray-900 py-4 px-4 border-b border-gray-100 font-semibold flex items-center justify-between"
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${servicesDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="bg-gray-50 px-4 py-2">
                {servicesData.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#F48244] py-3 transition-colors text-sm font-medium"
                  >
                    <div className="w-5 h-5">{item.icon}</div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="mobile-nav-link block text-gray-900 py-4 px-4 border-b border-gray-100 font-semibold hover:text-[#F48244]"
          >
            Company
          </Link>

          <div className="mobile-nav-link">
            <button
              onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
              className="w-full text-left text-gray-900 py-4 px-4 border-b border-gray-100 font-semibold flex items-center justify-between"
            >
              Resources
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${resourcesDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${resourcesDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="bg-gray-50 px-4 py-2">
                {resourcesData.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#F48244] py-3 transition-colors text-sm font-medium"
                  >
                    <div className="w-5 h-5">{item.icon}</div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mobile-nav-link block text-gray-900 py-4 px-4 border-b border-gray-100 font-semibold hover:text-[#F48244]"
          >
            Contact
          </Link>

          <div className="p-4 mt-2 mobile-nav-link">
            <AButton
              href="/contact"
              filled
              showArrow
              className="w-full justify-center py-3"
            >
              Get Started
            </AButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
