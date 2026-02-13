import Image from "next/image";

import AButton from "./a-button";
import DeliveryRoute from "./delivery-route";

// Generate random circles once at module load
function generateRandomCircles() {
  return [...Array.from({ length: 200 })].map(() => ({
    cx: Math.random() * 1000,
    cy: Math.random() * 500,
    r: Math.random() * 2,
  }));
}

const RANDOM_CIRCLES = generateRandomCircles();

const MODULES = [
  {
    id: "01",
    code: "SC-OPT",
    title: "Supply Chain Optimization",
    subtitle: "End-to-end efficiency",
    desc: "We streamline your entire supply chain with data analytics and process automation. From supplier relationships to demand forecasting, we identify bottlenecks and implement solutions that cut costs while improving reliability. Our predictive models analyze historical data to forecast demand with 98% accuracy, ensuring you are never overstocked or underprepared.",
    icon: (
      <Image
        src="/images/supply-chain2.webp"
        alt=""
        width={1200}
        height={600}
        priority
        className="rounded-xl"
      />
    ),
  },
  {
    id: "02",
    code: "WH-SOL",
    title: "Warehouse Solutions",
    subtitle: "Smarter storage systems",
    desc: "Maximize warehouse efficiency with intelligent inventory systems and automated workflows. Our solutions include layout optimization, RFID tracking, and real-time inventory management that eliminate waste and accelerate fulfillment. We deploy autonomous guided vehicles (AGVs) and smart shelving units that reduce picking time by up to 40%.",
    icon: (
      <Image
        src="/images/warehouse2.webp"
        alt=""
        width={1900}
        height={600}
        priority
        className="rounded-xl"
      />
    ),
  },
  {
    id: "03",
    code: "TR-PLN",
    title: "Transport Planning",
    subtitle: "Optimized routing",
    desc: "Reduce fuel costs and delivery times with intelligent routing and fleet optimization. We implement dynamic scheduling systems that adapt to traffic, weather, and delivery priorities in real-time. Our algorithms consider over 50 variables to calculate the most efficient path, reducing carbon footprint and operational expenses simultaneously.",
    icon: (
      <Image
        src="/images/transport-planing.webp"
        alt=""
        width={1900}
        height={600}
        priority
        className="rounded-xl"
      />
    ),
  },
  {
    id: "04",
    code: "DL-MGT",
    title: "Delivery Management",
    subtitle: "Last-mile excellence",
    desc: "Give customers visibility while optimizing your last-mile operations. Our tracking platforms, proof-of-delivery systems, and failed delivery management ensure customer satisfaction at every touchpoint. We provide a white-labeled tracking interface that integrates seamlessly into your existing customer portal.",
    icon: (
      <Image
        src="/images/delivery-management.webp"
        alt=""
        width={1900}
        height={600}
        priority
        className="rounded-xl"
      />
    ),
  },
  {
    id: "05",
    code: "TC-ADV",
    title: "Technology Advisory",
    subtitle: "Digital transformation",
    desc: "Navigate the complex landscape of logistics technology with expert consulting. We help select, implement, and integrate the right systems for your operations, ensuring maximum ROI on your technology investments. From ERP migration to IoT sensor deployment, we guide you through every step of the digital evolution.",
    icon: (
      <Image
        src="/images/tech-advisory.webp"
        alt=""
        width={1900}
        height={600}
        priority
        className="rounded-xl scale-100 lg:scale-85"

      />
    ),
  },
];

export default function Logistics() {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-12 border-b border-foreground/10 overflow-hidden min-h-[60vh] flex flex-col">
      <div className="relative pb-16 overflow-hidden min-h-[60vh] flex flex-col">
        <div className="max-w-[1400px]  overflow-visible mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div
            className=" overflow-visible lg:hidden relative w-full"
            style={{ height: "150px" }}
          >
            <DeliveryRoute />
          </div>
          <div>
            <div className="flex items-center gap-3 pb-5 lg:pb-8">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F48244]/10 text-[#F48244] text-xs font-mono  rounded border border-[#F48244]/20 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#F48244]/60 rounded-full animate-pulse" />
                Logistics{" "}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] pb-4 md:pb-8  bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              End-to-end supply chain optimization
            </h1>

            <p className="text-sm md:text-lg lg:text-xl text-foreground/60 max-w-sm md:max-w-2xl leading-relaxed ">
              Orchestrate your global supply chain from a single source of
              truth. Real-time visibility, predictive analytics, and automated
              execution.
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
            <DeliveryRoute />
          </div>
        </div>
      </div>

      <section className="px-6 lg:px-12 py-12 lg:py-20 relative">
        {/* Central Process Line (Desktop Only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-foreground/10 -translate-x-1/2 z-0" />

        <div className="max-w-[1400px] mx-auto space-y-32 relative z-10">
          {MODULES.map((module, i) => (
            <div
              key={module.id}
              className={`flex flex-col lg:flex-row items-center gap-7 md:gap-16 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {module.title}
                </h3>
                <p className="text-[#F48244] font-medium mb-6 text-sm uppercase tracking-wide">
                  {module.subtitle}
                </p>

                <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                  {module.desc}
                </p>
              </div>

              {/* Visual Schematic */}
              <div className="flex-1 w-full">
                <div className="aspect-square md:aspect-[4/3] w-full  border border-foreground/10 rounded-2xl relative overflow-hidden  hover:border-[#F48244]/30 transition-all duration-500 p-1 md:p-12 flex items-center justify-center">
                  {/* Central Icon */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to optimize?
          </h2>
          <p className="text-foreground/60 mb-10 text-lg">
            Initiate a full system audit. We identify inefficiencies and propose
            architectural upgrades within 48 hours.
          </p>
          <div className="flex overflow-visible justify-center">
            <AButton href="/contact" filled showArrow>
              Start Protocol
            </AButton>
          </div>
        </div>
      </section> */}
    </section>
  );
}
