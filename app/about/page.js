"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar-temp";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  const teamMembers = [
    {
      name: "Akinbiyi Oluwole David",
      role: "Systems Designer",
      initials: "AO",
      location: "Nigeria",
    },
    {
      name: "Nathaniel Nneji",
      role: "AI Engineer",
      initials: "NN",
      location: "US",
    },
    {
      name: "Gabriel Olusola",
      role: "Manager (Operations)",
      initials: "GO",
      location: "Nigeria",
    },
    {
      name: "Akinyeye Samuel",
      role: "Software Engineer",
      initials: "AS",
      location: "Nigeria",
    },
    {
      name: "Abas Lukeman",
      role: "Logistic Manager",
      initials: "AL",
      location: "Nigeria",
    },
    {
      name: "Adeleke Esther",
      role: "Accountant",
      initials: "AE",
      location: "Nigeria",
    },
    {
      name: "Ayotomiwa Wale-Durojaye",
      role: "Asst Systems Engineer",
      initials: "AW",
      location: "US",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".animate-fade",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      );

      // Scroll-triggered sections
      gsap.utils.toArray(".scroll-reveal").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-[#F48244] selection:text-white"
    >
      <Navbar />

      {/* Hero - Enhanced */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="animate-fade inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#FEF3EC] text-[#F48244] border border-[#F48244]/20 text-xs font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F48244]" />
              About Us
            </div>
            <h1 className="animate-fade text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 leading-[1.1]">
              Building infrastructure for{" "}
              <span className="text-[#F48244]">Africa&apos;s</span> growth.
            </h1>
            <p className="animate-fade text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl">
              A technology-driven solutions provider at the intersection of
              mobility systems, technology infrastructure, and logistics
              optimization.
            </p>
          </div>
          <div className="lg:col-span-4 animate-fade">
            <div className="flex flex-col gap-4 text-sm text-foreground/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-foreground/20" />
                <span>Est. 2020</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-foreground/20" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="animate-fade text-xs font-semibold uppercase tracking-wider text-[#F48244] mb-4">
              About Beam & Clover
            </div>
            <div className="animate-fade w-12 h-px bg-foreground/20" />
          </div>
          <div className="lg:col-span-8">
            <p className="animate-fade text-xl md:text-2xl font-heading font-medium leading-relaxed text-foreground tracking-tight mb-8">
              We specialize in digital vehicle administration, traffic and
              transport data collection, enterprise IT integration, and
              logistics consulting.
            </p>
            <p className="animate-fade text-foreground/60 leading-relaxed">
              Beam & Clover empowers governments, large enterprises, and private
              organizations to operate smarter, faster, and more securely
              through innovative, compliant, and scalable digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 border-y border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "3+", label: "State Governments" },
              { value: "4", label: "Core Services" },
              { value: "100%", label: "Compliance" },
              { value: "24/7", label: "Operations" },
            ].map((stat, i) => (
              <div key={i} className="scroll-reveal text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/50 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Enhanced */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="scroll-reveal text-xs font-semibold uppercase tracking-wider text-[#F48244] mb-4">
            Our Purpose
          </div>
          <h2 className="scroll-reveal text-2xl md:text-4xl font-heading font-bold tracking-tight">
            What drives us forward
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Vision */}
          <div className="scroll-reveal group relative p-8 md:p-10 rounded-2xl border border-foreground/10 bg-background overflow-hidden hover:border-[#F48244]/30 transition-colors">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F48244]/5 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F48244]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#F48244]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F48244]">
                  Vision
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold tracking-tight mb-4 group-hover:text-[#F48244] transition-colors">
                Redefining digital administration
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                To redefine how public institutions and large enterprises
                administer complex operational workflows by integrating
                cutting-edge digital systems that elevate performance,
                compliance, and user experience.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="scroll-reveal group relative p-8 md:p-10 rounded-2xl bg-foreground text-background overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F48244]/20 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F48244]/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#F48244]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F48244]">
                  Mission
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold tracking-tight mb-4">
                Delivering advanced solutions
              </h3>
              <p className="text-background/60 leading-relaxed">
                To deliver advanced, secure, and scalable digital solutions that
                transform data collection, vehicle administration, IT
                operations, and logistics management — enabling organisations to
                function smarter, faster, and more securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="scroll-reveal flex flex-wrap gap-3 justify-center">
          {[
            "Vehicle Administration",
            "Traffic Intelligence",
            "IT Integration",
            "Digital Infrastructure",
          ].map((service, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-foreground/10 text-sm text-foreground/70"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="scroll-reveal text-xs font-semibold uppercase tracking-wider text-[#F48244] mb-4">
            Who We Serve
          </div>
          <h2 className="scroll-reveal text-2xl md:text-4xl font-heading font-bold tracking-tight">
            Industries & Sectors
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Government Agencies",
              desc: "Vehicle registration, licensing, traffic data collection, and compliance frameworks.",
            },
            {
              title: "Large Enterprises",
              desc: "IT systems integration, automation adoption, and infrastructure modernisation.",
            },
            {
              title: "Private Organizations",
              desc: "Logistics optimization, secure digital solutions, and operational scale enhancement.",
            },
          ].map((sector, i) => (
            <div
              key={i}
              className="scroll-reveal p-6 md:p-8 rounded-2xl border border-foreground/10 hover:border-[#F48244]/30 transition-colors"
            >
              <h3 className="text-lg font-heading font-bold mb-3">
                {sector.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <div className="lg:col-span-5">
              <div className="scroll-reveal text-xs font-semibold uppercase tracking-wider text-[#F48244] mb-4">
                Our People
              </div>
              <h2 className="scroll-reveal text-2xl md:text-4xl font-heading font-bold tracking-tight">
                The team behind the platform.
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="scroll-reveal text-foreground/60 leading-relaxed">
                A company of dynamic and energetic professionals with passion in
                transportation, motor vehicle administration, and city
                management. Our people are carefully chosen to deliver the
                quality you deserve.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="scroll-reveal p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-[#F48244]/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-sm font-bold text-foreground/70 mb-4 group-hover:bg-[#F48244]/10 group-hover:text-[#F48244] group-hover:border-[#F48244]/20 group-hover:scale-110 transition-all duration-300">
                  {member.initials}
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-foreground/50 mb-3">{member.role}</p>
                <div className="text-xs text-foreground/40">
                  {member.location}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-[#F48244] transition-colors"
            >
              Join our team
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
