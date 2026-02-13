import Link from "next/link";

import AButton from "./a-button";

export default function Footer() {
  return (
    <footer className="">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="w-full flex justify-center px-7 md:px-10 lg:px-12 pt-10 lg:pt-11">
          <svg
            width="100%"
            height="2"
            viewBox="0 0 1280 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-4xl"
          >
            <defs>
              <linearGradient
                id="gradientLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#F48244" stopOpacity="0" />
                <stop offset="50%" stopColor="#F48244" stopOpacity="1" />
                <stop offset="100%" stopColor="#F48244" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="1280" height="2" fill="url(#gradientLine)" />
          </svg>
        </div>

        <div className="w-full flex flex-col items-center pt-8 lg:pt-24 px-4 md:px-7 lg:px-64 text-center">
          <h4 className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-500 pb-4">
            Building the systems that power your success.
          </h4>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-snug md:px-5 lg:px-20 text-[#0c0c0c] pb-8 lg:pb-10">
            We deliver intelligent IT solutions, modern vehicle administration,
            and streamlined logistics
          </h2>

          {/* CTA Buttons */}
          <div className="flex gap-6 items-center justify-center mb-16 lg:mb-24">
            {/* Get Started Button */}
            <AButton href="/get-started" showArrow filled>
              Get Started
            </AButton>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mx-7 md:mx-10 lg:mx-12">
        <div className="flex flex-col md:flex-row justify-between py-8 gap-6 items-center text-sm text-gray-600">
          <div className="flex-1 text-center md:text-left order-3 md:order-1">
            <h4 className="font-medium">
              © 2025 Beam & Clover.
            </h4>
          </div>

          <nav className="flex-1 flex  justify-center gap-6 md:gap-8 font-semibold text-[#0c0c0c] order-1 md:order-2">
            <Link href="/company" className="hover:opacity-70 transition-opacity">Company</Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
            <Link href="/why-us" className="hover:opacity-70 text-nowrap transition-opacity">Why Us</Link>
            <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
          </nav>

          <div className="flex-1 flex justify-center md:justify-end items-center gap-2 order-2 md:order-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#F48244" }}
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a href="mailto:contact@beamandclover.com" className="font-semibold hover:text-[#F48244] transition-colors">
              contact@beamandclover.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
