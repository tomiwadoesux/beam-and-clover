import Link from "next/link";
import ITVisual from "./it-visual";
import AButton from "./a-button";

const SERVICES = [
  {
    id: "AI-01",
    title: "AI Integration & Automation",
    tagline: "Intelligence at Scale",
    description:
      "Embed autonomous intelligence into your core operations. We build and deploy custom AI agents, fine-tune Large Language Models (LLMs) on your proprietary data, and architect self-optimizing workflows that reduce manual overhead by orders of magnitude.",
    capabilities: [
      "Custom LLM Fine-tuning & RAG",
      "Autonomous Agent Workflows",
      "Predictive Analytics Engines",
      "Natural Language Interfaces",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "INF-02",
    title: "Infrastructure Analysis",
    tagline: "Foundation Optimization",
    description:
      "A rigorous, deep-dive audit of your existing digital frameworks. We don&apos;t just identify bottlenecks; we architect a complete modernization roadmap that maximizes throughput, reduces latency, and prepares your stack for hyper-growth.",
    capabilities: [
      "Legacy System Modernization",
      "High-Throughput Architecture",
      "Cost-Benefit Analysis",
      "Disaster Recovery Planning",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "SEC-03",
    title: "Cybersecurity Protocols",
    tagline: "Zero-Trust Defense",
    description:
      "Security is not a feature; it&apos;s the foundation. We implement rigorous Zero-Trust architectures, end-to-end encryption standards, and real-time threat detection systems that safeguard your critical assets against evolving vector attacks.",
    capabilities: [
      "Zero-Trust Architecture",
      "Penetration Testing",
      "Identity & Access Management (IAM)",
      "Compliance Auditing (SOC2/ISO)",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    id: "CLD-04",
    title: "Cloud Architecture",
    tagline: "Serverless & Distributed",
    description:
      "Unlock the true potential of the cloud. Whether migrating legacy monoliths or building cloud-native microservices, we design scalable, serverless, and cost-effective environments on AWS, Azure, or GCP that handle unpredictable loads with ease.",
    capabilities: [
      "Cloud-Native Microservices",
      "Serverless Deployment",
      "Multi-Cloud Orchestration",
      "Containerization (Kubernetes)",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    id: "OPS-05",
    title: "24/7 Network Ops",
    tagline: "Continuous Reliability",
    description:
      "Downtime is obsolete. Our distributed network operations center (NOC) provides round-the-clock monitoring, automated incident response, and proactive maintenance to ensure your systems maintain 99.99% availability globally.",
    capabilities: [
      "Real-time Observability",
      "Automated Incident Response",
      "Global Latency Optimization",
      "SLA Management",
    ],
    icon: (
      <svg
        className="w-8 h-8"
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
];

export default function IT() {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-12 border-b border-foreground/10 overflow-hidden min-h-[60vh] flex flex-col">
      {/* Hero Section - UNTOUCHED */}
      <div className="max-w-[1400px] overflow-visible mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div
          className=" overflow-visible lg:hidden relative w-full"
          style={{ height: "150px" }}
        >
          <ITVisual />
        </div>
        <div>
          <div className="flex items-center gap-3 pb-5 lg:pb-8">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F48244]/10 text-[#F48244] text-xs font-mono  rounded border border-[#F48244]/20 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#F48244]/60 rounded-full animate-pulse" />
              IT Integration
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 font-semibold tracking-tighter leading-[0.9] pb-4 md:pb-8">
            Enterprise IT & Infrastructure
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-foreground/60 max-w-sm md:max-w-2xl leading-relaxed ">
            We design and implement intelligent systems that modernize your
            operations, enhance security, and accelerate growth. From custom
            software to cloud infrastructure, we deliver technology that works.
          </p>
          <div className="pt-4">
            <AButton href="/contact" filled showArrow>
              Get a Demo
            </AButton>
          </div>
        </div>
        <div
          className=" overflow-visible hidden lg:block -top-56 relative w-full"
          style={{ height: "200px" }}
        >
          <ITVisual />
        </div>
      </div>

      {/* Stats / Metrics Bar */}

      {/* Redesigned Services List - "Information Rich" & "Not Card-Like" */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="group grid md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-20 border-t border-foreground/10 transition-all hover:bg-foreground/[0.01]"
              >
                {/* Left Column: ID & Header */}
                <div className="md:col-span-5 flex flex-col justify-start">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-foreground/30 border border-foreground/10 px-2 py-1 rounded">
                      {service.id}
                    </span>
                    <div className="text-[#F48244] opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-[#F48244] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-xl font-medium text-foreground/40 font-mono uppercase tracking-wide">
                    {service.tagline}
                  </p>
                </div>

                {/* Right Column: Rich Description & Capabilities */}
                <div className="md:col-span-7">
                  <p className=" text-sm lg:text-xl text-foreground/80 leading-relaxed mb-10 font-light">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-1 h-1 bg-foreground/20 rounded-full group-hover/item:bg-[#F48244] transition-colors" />
                        <span className="text-sm font-mono text-foreground/60 group-hover/item:text-foreground transition-colors">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive / Terminal Section */}
      <section className="py-24 px-6 md:px-12 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Full-Stack Observability.
            </h2>
            <p className="text-foreground/60 text-lg mb-8">
              We don&apos;t just fix problems; we predict them. Our systems provide
              real-time insights into your network&apos;s health, traffic patterns,
              and security posture.
            </p>
            <ul className="space-y-4 font-mono text-sm text-foreground/80">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#F48244] rounded-full" />
                Real-time Log Aggregation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#F48244] rounded-full" />
                Automated Anomaly Detection
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#F48244] rounded-full" />
                Predictive Scaling Algorithms
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 font-medium text-sm"
              >
                Request Audit
              </Link>
            </div>
          </div>

          {/* Abstract Terminal / Code Block Visual */}
          <div className="flex-1 w-full bg-[#0c0c0c] rounded-lg p-6 border border-foreground/10 shadow-2xl font-mono text-xs md:text-sm text-gray-400 leading-relaxed overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-white/5 flex items-center gap-2 px-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="mt-6 space-y-2">
              <p>
                <span className="text-green-400">➜</span>{" "}
                <span className="text-blue-400">~</span> beam-clover
                system-check --full
              </p>
              <p className="text-gray-500">Initializing diagnostics...</p>
              <p>[OK] Network Latency: 12ms</p>
              <p>[OK] Encryption Layer: AES-256</p>
              <p>[OK] Load Balancer: Active</p>
              <p>[WARN] Legacy dependencies detected in /usr/local/bin</p>
              <p className="text-gray-500">Optimization sequence starting...</p>
              <p>
                <span className="text-green-400">➜</span>{" "}
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
