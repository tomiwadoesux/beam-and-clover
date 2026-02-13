"use client";

import AButton from "../components/a-button";
import CareerVisual from "../components/career-visual";
import Footer from "../components/footer";
import Navbar from "../components/navbar-temp";

// Job listings data - available for future use
const _JOBS = [
  {
    id: "ENG-001",
    title: "Senior Systems Architect",
    department: "Engineering",
    location: "San Francisco",
    type: "Full-time",
    posted: "2d ago",
  },
  {
    id: "DES-042",
    title: "Lead Product Designer",
    department: "Design",
    location: "New York",
    type: "Full-time",
    posted: "5d ago",
  },
  {
    id: "ENG-018",
    title: "Frontend Engineer (WebGL)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    posted: "1w ago",
  },
  {
    id: "PRO-007",
    title: "Technical Program Manager",
    department: "Product",
    location: "London",
    type: "Full-time",
    posted: "2w ago",
  },
];

const VALUES = [
  {
    id: "01",
    title: "Zero Bureaucracy",
    desc: "We hate red tape. If you have a good idea, you ship it. Autonomy is the default state. We trust you to make the right calls without needing a committee.",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    id: "02",
    title: "Async First",
    desc: "Work when you are most productive. We measure output, not hours in a chair. Deep work is respected and protected from constant interruptions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Radical Truth",
    desc: "Feedback is direct, kind, and immediate. We believe intellectual honesty is the fastest path to quality.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Global Default",
    desc: "We hire the top 1% of talent, regardless of their physical coordinates. Our HQ is the cloud, and our processes are designed for distributed excellence.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#F48244]/20">
      <Navbar />

      {/* Hero Section - Split Layout with Cropped Globe */}
      <section className="relative w-full pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl relative z-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#FEF3EC] text-[#F48244] border border-[#F48244]/20 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F48244] animate-pulse" />
                Careers at Beam & Clover
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[0.95]">
                Build the <br />
                <span className="text-[#F48244]">Infrastructure.</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-md leading-relaxed">
                Join the distributed team engineering the backbone of the next
                generation internet.
                <span className="block mt-2 text-foreground/80">
                  Global. Async. High-bandwidth.
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <AButton href="#roles" showArrow>
                  See Open Roles
                </AButton>
              </div>
            </div>

            <div className="absolute lg:relative right-[-20%] lg:right-[-5%] top-[20%] lg:top-0 w-[120%] lg:w-[130%] h-[600px] lg:h-[600px] pointer-events-none opacity-50 lg:opacity-100">
              {/* The visual is scaled up and offset to show "part of the globe" */}
              <div className="w-full h-full scale-125 origin-center lg:origin-left">
                <CareerVisual pointSize={0.025} />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Grid Background for Texture */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Values Section */}
      <section className="py-32 border-y border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Operating Protocol v2.0
              </h2>
              <p className="text-foreground/60 max-w-md">
                Immutable constants that guide our system.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <div
                key={value.id}
                className="group bg-background p-8 rounded-2xl border border-foreground/10 hover:border-[#F48244]/30 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs text-foreground/30">
                    0{i + 1}
                  </span>
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#F48244] transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="roles" className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Open Positions
            </h2>
          </div>

          {/* Currently Not Hiring Message */}
          <div className="border border-foreground/10 rounded-2xl p-12 text-center bg-foreground/[0.02]">
            <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-foreground/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              We are currently not hiring
            </h3>
            <p className="text-foreground/60 max-w-md mx-auto">
              Check back soon for new opportunities, or follow us on social
              media to be the first to know when positions open up.
            </p>
          </div>

          {/* Commented out job listings
          <div className="border-t border-foreground/10">
            <div className="hidden md:grid grid-cols-12 py-4 border-b border-foreground/10 text-xs font-mono text-foreground/40 uppercase tracking-wider">
              <div className="col-span-1">ID</div>
              <div className="col-span-5">Role</div>
              <div className="col-span-2">Department</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-2 text-right">Status</div>
            </div>

            {JOBS.map((job) => (
              <div
                key={job.id}
                className="group relative md:grid md:grid-cols-12 py-6 border-b border-foreground/10 items-center hover:bg-foreground/[0.02] transition-colors cursor-pointer -mx-6 px-6 md:mx-0 md:px-4"
              >
                <div className="hidden md:block col-span-1 font-mono text-xs text-foreground/40">
                  {job.id}
                </div>

                <div className="col-span-12 md:col-span-5 mb-2 md:mb-0">
                  <h3 className="text-lg md:text-xl font-semibold group-hover:text-[#F48244] transition-colors">
                    {job.title}
                  </h3>
                  <div className="md:hidden flex gap-3 text-sm text-foreground/60 font-mono mt-1">
                    <span>{job.department}</span> • <span>{job.location}</span>
                  </div>
                </div>

                <div className="hidden md:block col-span-2 text-sm text-foreground/60 font-mono">
                  {job.department}
                </div>
                <div className="hidden md:block col-span-2 text-sm text-foreground/60 font-mono">
                  {job.location}
                </div>

                <div className="col-span-12 md:col-span-2 flex justify-end items-center">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/5 text-[10px] font-mono uppercase tracking-wider group-hover:bg-[#F48244] group-hover:text-white transition-colors">
                    Apply
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
