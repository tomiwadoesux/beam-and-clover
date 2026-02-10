import React from "react";

export default function WhyUs() {
  const cards = [
    {
      title: "Proven Expertise",
      description:
        "Demonstrated excellence in digital transformation and enterprise-scale systems, with years of successful implementations across public and private sectors.",
      icon: <IntegrationIcon />,
    },
    {
      title: "Secure & Compliant",
      description:
        "Committed to secure, compliant, and efficient outcomes. Our solutions meet regulatory standards while protecting your data and operations.",
      icon: <SecurityIcon />,
    },
    {
      title: "Tailored Solutions",
      description:
        "Custom solutions designed to fit your organizational strategy and scale. We understand that every client's needs are unique.",
      icon: <AnalyticsIcon />,
    },
    {
      title: "Comprehensive Service",
      description:
        "A complete service model covering technology, administration, and logistics. From planning to deployment, we handle it all.",
      icon: <GlobalIcon />,
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous maintenance and evolution packages ensure your systems grow with your business and stay up-to-date.",
      icon: <AutomationIcon />,
    },
    {
      title: "Local Expertise",
      description:
        "Deep understanding of Nigerian and African markets, regulations, and business practices, ensuring solutions that work in your context.",
      icon: <SupportIcon />,
    },
  ];

  return (
    <section className="relative px-6 md:px-8 py-24 md:py-32 max-w-[1400px] mx-auto overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply" />

      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-sm font-bold tracking-widest text-[#F48244] uppercase mb-3">
          Why Choose Us
        </h2>
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-6">
          Why Organizations Choose <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F48244] to-[#f5a362]">
            Beam & Clover
          </span>
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
          In our years of existence, organizations choose Beam & Clover for our
          proven expertise, commitment to excellence, and comprehensive
          solutions that ensure clients not only launch modern systems but
          sustain them.
        </p>
      </div>

      {/* Symmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            description={card.description}
            icon={card.icon}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ title, description, icon }) {
  return (
    <div className="group bg-background p-8 rounded-2xl border border-foreground/10 hover:border-[#F48244]/30 transition-colors shadow-sm hover:shadow-md">
      <div className="w-14 h-14 rounded-xl bg-[#F48244]/10 text-[#F48244] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-[#F48244] transition-colors">
        {title}
      </h3>

      <p className="text-foreground/60 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

// --- Crisp Icons ---

function IntegrationIcon() {
  return (
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );
}

function AnalyticsIcon() {
  return (
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
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  );
}

function SecurityIcon() {
  return (
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

function GlobalIcon() {
  return (
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
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function AutomationIcon() {
  return (
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
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}

function SupportIcon() {
  return (
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}
