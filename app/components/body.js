"use client";

import AButton from "./a-button";
import Image from "next/image"; // Re-import Image
import Link from "next/link";
import BodySvg from "./body-svg";

export default function Body() {
  return (
    <section className="relative w-full py-16 md:py-10 bg-white overflow-hidden">
      <div className="absolute h-auto inset-0 flex items-center justify-center z-10">
        <div className="max-w-xl px-16 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            {/* Reduced margin-bottom */}
          </div>
          {/* Text Content */}
          <div className="flex flex-col pb-32 lg:pb-48 gap-4 text-center">
            {" "}
            {/* Reduced gap */}
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#171717] tracking-tight leading-[1.1]">
              {/* Reduced heading size */}
              Vehicle Administration <br />
              <span className="text-[#F48244]">Made Easy.</span>
            </h2>
            <p className="text-sm  lg:text-base text-gray-600 leading-relaxed ">
              In partnership with Government Agencies, we modernize vehicle
              administration through smart digital systems. Our technology cuts
              processing time, eliminates manual errors, and makes services
              faster and more secure.
            </p>
            {/* Single CTA Link */}
            <div className="flex justify-center">
              <AButton showArrow> Learn More</AButton>
            </div>
          </div>
          {/* Image under the text content */}
        </div>
      </div>
      <BodySvg />
    </section>
  );
}
