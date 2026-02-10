"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/navbar-temp";
import Footer from "../components/footer";
import AButton from "../components/a-button";

export default function Contact() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".animate-fade",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      );
    },
    { scope: containerRef },
  );

  return (
    <main
      className="min-h-screen bg-background text-foreground selection:bg-[#F48244] selection:text-white"
      ref={containerRef}
    >
      <Navbar />

      {/* Ambient Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#F48244]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="animate-fade text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Contact
          </h1>
          <p className="animate-fade text-xl text-foreground/60 leading-relaxed font-light">
            We’ll help you find the right person. Choose a topic below or send
            us a general inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Routing Options */}
          <div className="lg:col-span-5 space-y-4">
            {/* Sales Card */}
            <a
              href="#"
              className="animate-fade group block p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#F48244]/10 text-[#F48244]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground/40">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Talk to Sales</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Interested in our enterprise solutions? Get in touch with our
                sales team.
              </p>
            </a>

            {/* Support Card */}
            <a
              href="#"
              className="animate-fade group block p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground/40">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Product Support</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Need help with the platform? Check our docs or contact support.
              </p>
            </a>

            {/* Offices Mini Grid */}
            <div className="animate-fade grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-3">
                  NG
                </div>
                <div className="font-medium text-sm">
                  Suite DC10, Apo Spark-light Mall
                  <br />
                  <span className="text-foreground/60">Abuja</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-3">
                  USA
                </div>
                <div className="font-medium text-sm">
                  7 Bell Yard
                  <br />
                  <span className="text-foreground/60">DX Texas</span>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="animate-fade group p-6 mt-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-foreground/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#F48244]/10 text-[#F48244]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
              <div className="space-y-2">
                <a
                  href="tel:+2347034218092"
                  className="flex items-center gap-2 text-sm text-foreground/60 hover:text-[#F48244] transition-colors"
                >
                  <span className="font-medium text-foreground">
                    +234 703 421 8092
                  </span>
                </a>
                <a
                  href="mailto:beamandclovertech@gmail.com"
                  className="flex items-center gap-2 text-sm text-foreground/60 hover:text-[#F48244] transition-colors"
                >
                  <span className="font-medium text-foreground">
                    beamandclovertech@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-7 animate-fade">
            <div className="h-full rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-[#F48244]/10 to-transparent blur-[60px] pointer-events-none opacity-50" />

              <div className="relative">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    Let&apos;s start a conversation
                  </h2>
                  <p className="text-sm text-foreground/60">
                    Tell us about your project or inquiry. We typically respond
                    within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Name Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/60 ml-1">
                        What&apos;s your name?
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/60 ml-1">
                        Your work email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all"
                        placeholder="you@organization.com"
                      />
                    </div>
                  </div>

                  {/* Organization & Type Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/60 ml-1">
                        Organization name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all"
                        placeholder="Your company or agency"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/60 ml-1">
                        Type of organization
                      </label>
                      <select className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all appearance-none cursor-pointer">
                        <option value="">Select one...</option>
                        <option value="government">Government Agency</option>
                        <option value="enterprise">Large Enterprise</option>
                        <option value="private">Private Organization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Interest Area */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground/60 ml-1">
                      What are you interested in?
                    </label>
                    <select className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      <option value="vehicle-admin">
                        Vehicle Administration Systems
                      </option>
                      <option value="traffic">
                        Traffic Survey & Transportation Studies
                      </option>
                      <option value="it-integration">
                        IT Systems Integration
                      </option>
                      <option value="digital-infra">
                        Digital Infrastructure
                      </option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground/60 ml-1">
                      Tell us more about your needs
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#F48244]/50 focus:ring-1 focus:ring-[#F48244]/50 transition-all resize-none"
                      placeholder="Describe your project, challenges, or questions. The more detail you provide, the better we can help."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-xs text-foreground/40 max-w-xs">
                      By submitting, you agree to our privacy policy and terms
                      of service.
                    </p>
                    <button type="submit" className="">
                      <AButton href="/contact" showArrow>
                        Send Message
                      </AButton>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
