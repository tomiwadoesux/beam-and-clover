"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

import AButton from "../components/a-button";
import Footer from "../components/footer";
import Navbar from "../components/navbar-temp";

// --- 3D Component: Morphing Nodes ---
function _MorphingNodes() {
  const ref = useRef();
  const [_currentShapeIndex, _setCurrentShapeIndex] = useState(0);

  // Configuration
  const count = 2000; // Number of nodes
  const radius = 2; // Base radius
  const transitionDuration = 2.5; // Seconds per shape
  const pauseDuration = 1; // Seconds to hold shape

  // Generate target positions for 4 shapes
  const shapes = useMemo(() => {
    // Pre-generate all random values to avoid impure function calls during render
    const randomValues = {
      sphere: Array.from({ length: count }, () => ({
        u: Math.random(),
        v: Math.random(),
      })),
      cube: Array.from({ length: count }, () => ({
        axis: Math.floor(Math.random() * 3),
        dir: Math.random() > 0.5 ? 1 : -1,
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
      })),
      torus: Array.from({ length: count }, () => ({
        u: Math.random(),
        v: Math.random(),
      })),
      icosahedron: Array.from({ length: count }, () => ({
        h: Math.random(),
        angle: Math.random(),
      })),
    };

    let sphereIndex = 0;
    let cubeIndex = 0;
    let torusIndex = 0;
    let icoIndex = 0;

    const getSpherePoint = () => {
      const { u, v } = randomValues.sphere[sphereIndex++ % count];
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      );
    };

    const getCubePoint = () => {
      const { axis, dir, x, y, z } = randomValues.cube[cubeIndex++ % count];
      const point = new THREE.Vector3(
        (x - 0.5) * 2 * radius,
        (y - 0.5) * 2 * radius,
        (z - 0.5) * 2 * radius,
      );
      if (axis === 0)
        point.x = dir * radius;
      if (axis === 1)
        point.y = dir * radius;
      if (axis === 2)
        point.z = dir * radius;
      // Scale down slightly to match visual weight
      return point.multiplyScalar(0.7);
    };

    const getTorusPoint = () => {
      const { u, v } = randomValues.torus[torusIndex++ % count];
      const uAngle = u * Math.PI * 2;
      const vAngle = v * Math.PI * 2;
      const tubeRadius = 0.6;
      const ringRadius = 1.4;
      return new THREE.Vector3(
        (ringRadius + tubeRadius * Math.cos(vAngle)) * Math.cos(uAngle),
        (ringRadius + tubeRadius * Math.cos(vAngle)) * Math.sin(uAngle),
        tubeRadius * Math.sin(vAngle),
      );
    };

    const getIcosahedronPoint = () => {
      // Approximate points on an Icosahedron (simplified to a double pyramid for visual distinction)
      // Or simpler: a Tetrahedron or Pyramid
      // Let's do a double cone / diamond shape
      const { h: hRandom, angle: angleRandom } = randomValues.icosahedron[icoIndex++ % count];
      const h = (hRandom - 0.5) * 2 * radius;
      const r = (radius - Math.abs(h)) * 0.8; // Taper out then in
      const angle = angleRandom * Math.PI * 2;
      return new THREE.Vector3(r * Math.cos(angle), h, r * Math.sin(angle));
    };

    const generators = [
      getSpherePoint,
      getCubePoint,
      getTorusPoint,
      getIcosahedronPoint,
    ];

    return generators.map((gen) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const p = gen();
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      }
      return positions;
    });
  }, []);

  const [initialPositions] = useState(() => new Float32Array(count * 3));
  const positionsRef = useRef(initialPositions);

  useFrame((state) => {
    if (!ref.current)
      return;

    const time = state.clock.elapsedTime;
    // Calculate cycle
    const totalDuration = transitionDuration + pauseDuration;
    const cycleTime = time % (totalDuration * 4); // 4 shapes
    const shapeIndex = Math.floor(cycleTime / totalDuration);
    const progressInCycle = (cycleTime % totalDuration) / transitionDuration;

    // Clamp progress to 1 (handle pause)
    const t = Math.min(progressInCycle, 1);
    // Smooth easing
    const smoothT = t * t * (3 - 2 * t);

    const currentPositions = shapes[shapeIndex];
    const nextPositions = shapes[(shapeIndex + 1) % 4];
    const positions = positionsRef.current;

    // Interpolate positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const cx = currentPositions[i3];
      const cy = currentPositions[i3 + 1];
      const cz = currentPositions[i3 + 2];

      const nx = nextPositions[i3];
      const ny = nextPositions[i3 + 1];
      const nz = nextPositions[i3 + 2];

      positions[i3] = cx + (nx - cx) * smoothT;
      positions[i3 + 1] = cy + (ny - cy) * smoothT;
      positions[i3 + 2] = cz + (nz - cz) * smoothT;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    // Rotate the whole cloud
    ref.current.rotation.y = time * 0.2;
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={initialPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="transparent"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

const CATEGORIES = [
  "All",
  "General",
  "Engagement",
  "Billing",
  "Technical",
  "Support",
];

const FAQS = [
  {
    id: "001",
    category: "General",
    question: "What defines the Beam & Clover architecture?",
    answer:
      "We build on a foundation of 'radical simplicity'. By minimizing dependencies and optimizing for edge computing, we ensure your infrastructure is not just fast, but instant. We prefer static generation, serverless functions, and immutable deployments.",
  },
  {
    id: "002",
    category: "Engagement",
    question: "How do we collaborate on a daily basis?",
    answer:
      "We integrate directly into your Slack/Teams channels. No email chains. You get a dedicated linear board for tracking, and we ship previews with every pull request. Transparency is absolute.",
  },
  {
    id: "003",
    category: "Billing",
    question: "What is the cost structure?",
    answer:
      "We operate on fixed-cost sprints or monthly retainers. This aligns our incentives: we don&apos;t profit from hours worked, but from value delivered. We scope, we agree, we ship. No surprise overages.",
  },
  {
    id: "004",
    category: "Technical",
    question: "Do you handle legacy migrations?",
    answer:
      "Yes, but we don&apos;t just &apos;lift and shift&apos;. We strangle the monolith. We systematically carve out services from your legacy stack and rebuild them in a modern environment, ensuring zero downtime during the transition.",
  },
  {
    id: "005",
    category: "Support",
    question: "What happens after launch?",
    answer:
      "Code rots if left unattended. We offer ongoing 'Maintenance & Evolution' packages. We monitor performance metrics, update security patches, and optimize database queries proactively.",
  },
  {
    id: "006",
    category: "Scale",
    question: "Can you handle enterprise-grade traffic?",
    answer:
      "Our systems are designed to auto-scale from zero to millions of requests per second. We utilize global CDNs and edge caching strategies used by giants like Vercel and Cloudflare.",
  },
  {
    id: "007",
    category: "Technical",
    question: "What is your SLA for critical incidents?",
    answer:
      "For enterprise tiers, we offer a 1-hour response time SLA for critical severity issues (SEV-1). Our distributed team ensures 24/7 coverage for production-halting bugs.",
  },
  {
    id: "008",
    category: "Billing",
    question: "Do you offer equity-based compensation?",
    answer:
      "We are open to hybrid models (cash + equity) for high-potential startups that pass our due diligence process. This requires a minimum 12-month engagement commitment.",
  },
];

// FAQ Schema for rich snippets in Google Search
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background text-foreground selection:bg-[#F48244]/20">
        <Navbar />

        <div className="pt-32 pb-20 px-6 md:px-12 border-b border-foreground/10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="max-w-4xl w-full md:w-1/2 relative z-10">
                <div className="flex ">
                  <div className="  bg-[#F48244]/15 border-[#F48244]/30 border-2 rounded-lg px-2 py-1.5">
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_232_104)">
                          <path
                            d="M2.77545 8.00924L1.52942 9.89472L2.34523 10.7081L4.18806 9.48601C4.49846 9.67983 4.83686 9.84922 5.19642 9.95322L5.64533 12.1882H6.79551L7.23345 10.0073C7.59951 9.9228 7.94688 9.78302 8.26743 9.60633L10.1529 10.8535L10.9663 10.0382L9.7442 8.19575C9.93802 7.88535 10.0721 7.54695 10.1761 7.18739L12.3756 6.73844V5.5883L10.2301 5.15032C10.1456 4.78426 10.0233 4.43689 9.84698 4.11676L11.1032 2.23123L10.2922 1.41788L8.45186 2.63995C8.14146 2.44613 7.80425 2.30805 7.44469 2.20362L6.99659 0H5.84646L5.40847 2.14958C5.04241 2.23408 4.69505 2.35839 4.37453 2.53514L2.48901 1.28014L1.67565 2.0915L2.89772 3.9319C2.7039 4.24269 2.53043 4.57952 2.42642 4.93908L0.1875 5.38717V6.53731L2.37242 6.9753C2.45693 7.34132 2.5987 7.68868 2.77545 8.00924ZM6.32098 4.32885C7.27857 4.32885 8.05492 5.1052 8.05492 6.06279C8.05492 7.02038 7.27853 7.79676 6.32098 7.79676C5.36339 7.79676 4.587 7.02038 4.587 6.06279C4.587 5.1052 5.36339 4.32885 6.32098 4.32885Z"
                            fill="#F48244"
                          />
                          <path
                            d="M11.21 8.59737L11.6021 10.7721C11.2933 10.9858 11.0191 11.2369 10.7863 11.5193L8.57255 11.0521L8.11672 12.108L9.93197 13.3691C9.86616 13.7294 9.84789 14.0999 9.88405 14.4725L7.98633 15.7084L8.41047 16.7773L10.5844 16.3856C10.7981 16.6944 11.0488 16.969 11.3311 17.2014L10.8635 19.4152L11.9194 19.871L13.1805 18.0558C13.5409 18.1216 13.9106 18.1386 14.2835 18.1029L15.519 19.9998L16.5879 19.5757L16.1966 17.4025C16.5054 17.1888 16.78 16.9385 17.0128 16.6562L19.227 17.1238L19.6829 16.0679L17.8677 14.8072C17.9335 14.4469 17.9517 14.0768 17.916 13.7038L19.8137 12.4679L19.3896 11.399L17.2156 11.7907C17.0019 11.4819 16.7512 11.2073 16.4689 10.9749L16.9365 8.76111L15.8806 8.30528L14.6195 10.1205C14.2592 10.0547 13.8886 10.0356 13.5157 10.0714L12.2794 8.17285L11.21 8.59737ZM13.2601 12.4769C14.1502 12.1234 15.1582 12.559 15.5116 13.4491C15.8651 14.3393 15.4296 15.3472 14.5394 15.7007C13.6493 16.0541 12.6413 15.6186 12.2879 14.7284C11.9348 13.8379 12.3699 12.8299 13.2601 12.4769Z"
                            fill="#F48244"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_232_104">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="text-xs font-normal">
                        System Knowlege Base
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter pt-4 md:pt-5  mb-8 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60">
                  Protocol <br /> FAQ.
                </h1>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mb-8">
                  Find answers to common questions about our services{" "}
                </p>

                {/* Search Bar - Linear Style */}
                <div className="relative max-w-xl group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-foreground/30 group-focus-within:text-[#F48244] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search protocol database..."
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:ring-1 focus:ring-[#F48244]/50 focus:border-[#F48244]/50 transition-all placeholder:text-foreground/30 font-mono text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <span className="text-xs font-mono text-foreground/30 border border-foreground/10 px-1.5 py-0.5 rounded">
                      ⌘K
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent z-10 md:hidden" />
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <MorphingNodes />
              </Canvas>
            </div> */}
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            {/* Sidebar - Category Filter */}
            <aside className="md:w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-1">
                <h3 className="font-mono text-xs uppercase text-foreground/40 mb-4 px-3 tracking-widest">
                  Filters
                </h3>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 font-medium flex justify-between items-center group
                    ${
                  activeCategory === cat
                    ? "bg-[#F48244]/10 text-[#F48244]"
                    : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F48244]" />
                    )}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content - FAQ List */}
            <div className="flex-1 min-h-[500px]">
              {filteredFaqs.length === 0 ?
                  (
                    <div className="flex flex-col items-center justify-center h-64 text-foreground/40 border border-dashed border-foreground/10 rounded-xl">
                      <p className="font-mono">
                        No protocols found matching query.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All");
                        }}
                        className="mt-4 text-sm text-[#F48244] hover:underline"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) :
                  (
                    <div className="space-y-4">
                      {filteredFaqs.map(faq => (
                        <div
                          key={faq.id}
                          className={`group border rounded-xl overflow-hidden transition-all duration-300 ease-out
                                ${
                                  expandedId === faq.id
                                    ? "grid-rows-[1fr] opacity-100 mt-4"
                                    : "grid-rows-[0fr] opacity-0 mt-0"
                                }`}
                        >
                          <button
                            onClick={() =>
                              setExpandedId(expandedId === faq.id ? null : faq.id)}
                            className="w-full flex items-start gap-6 p-6 text-left focus:outline-none"
                          >
                            <span
                              className={`font-mono text-xs mt-1 transition-colors duration-300 ${
                                expandedId === faq.id
                                  ? "text-[#F48244]"
                                  : "text-foreground/30"
                              }`}
                            >
                              {faq.id}
                            </span>

                            <div className="flex-1">
                              <h3
                                className={`text-lg font-medium pr-8 transition-colors duration-300 ${
                                  expandedId === faq.id
                                    ? "text-foreground"
                                    : "text-foreground/80"
                                }`}
                              >
                                {faq.question}
                              </h3>

                              <div
                                className={`grid transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
                                  expandedId === faq.id ?
                                    "grid-rows-[1fr] opacity-100 mt-4" :
                                    "grid-rows-[0fr] opacity-0 mt-0"
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <p className="text-foreground/60 leading-relaxed text-base max-w-2xl">
                                    {faq.answer}
                                  </p>

                                  {/* Tag Pill */}
                                  <div className="mt-6 flex items-center gap-2">
                                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-foreground/5 text-foreground/50 border border-foreground/5">
                                      {faq.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Expand Icon */}
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center transition-colors duration-300 ${
                                expandedId === faq.id
                                  ? "bg-[#F48244] border-[#F48244] text-white"
                                  : "bg-transparent text-foreground/40 group-hover:border-foreground/30"
                              }`}
                            >
                              <svg
                                className={`w-3 h-3 transition-transform duration-300 ${
                                  expandedId === faq.id ? "rotate-180" : "rotate-0"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
          </div>
        </div>

        {/* Bottom CTA - System Error Style */}
        <section className="py-12 md:py-24 px-6 md:px-12 border-t border-foreground/10 bg-foreground/[0.02]">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#F48244]/10 rounded-full flex items-center justify-center text-[#F48244] mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Unresolved Exception?
            </h2>
            <p className="text-foreground/60 max-w-md mb-8">
              If your query falls outside standard parameters, initiate a direct
              handshake with our engineering team.
            </p>
            <AButton href="/contact" showArrow>
              Contact Support
            </AButton>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
