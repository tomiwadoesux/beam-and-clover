import Footer from "../components/footer";
import Navbar from "../components/navbar-temp";

const CASE_STUDIES = [
  {
    id: 1,
    client: "Nebula Finance",
    title: "Redefining High-Frequency Trading Interfaces",
    category: "Fintech",
    description: "We built a sub-millisecond latency dashboard that allows traders to visualize complex market data without performance bottlenecks.",
    stat: "40% faster execution",
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["React", "WebSockets", "Rust"],
  },
  {
    id: 2,
    client: "Apex Logistics",
    title: "Global Fleet Orchestration System",
    category: "Logistics",
    description: "A unified command center for tracking 5,000+ vehicles in real-time across three continents.",
    stat: "$2M saved annually",
    color: "from-emerald-500/20 to-green-500/20",
    tags: ["Next.js", "Mapbox", "Python"],
  },
  {
    id: 3,
    client: "Pulse Health",
    title: "Patient Data Interoperability Layer",
    category: "Healthcare",
    description: "Connecting legacy hospital systems with modern patient portals securely and efficiently.",
    stat: "0 data breaches",
    color: "from-purple-500/20 to-pink-500/20",
    tags: ["GraphQL", "Node.js", "Security"],
  },
  {
    id: 4,
    client: "Vanguard Space",
    title: "Mission Control Telemetry",
    category: "Aerospace",
    description: "Visualizing launch data for the next generation of commercial spaceflight.",
    stat: "Real-time sync",
    color: "from-orange-500/20 to-red-500/20",
    tags: ["WebGL", "Three.js", "Go"],
  },
];

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Our best work is <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/40">
              mission critical.
            </span>
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            We partner with companies that aren&apos;t afraid to push boundaries. From fintech to aerospace, we solve the problems that others can&apos;t.
          </p>
        </div>

        {/* Filter Chips (Visual) */}
        <div className="flex flex-wrap gap-2 mt-12">
          {["All Work", "Fintech", "Logistics", "Healthcare", "Aerospace"].map((filter, index) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 ?
                  "bg-foreground text-background" :
                  "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies List */}
      <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20">
          {CASE_STUDIES.map((study, index) => (
            <div
              key={study.id}
              className={`group grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Visual Side */}
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-30 group-hover:opacity-50 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" /> {/* Placeholder for grid pattern if available, otherwise transparent */}

                {/* Abstract UI Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-background/50 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700 flex flex-col p-6">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-1/3 bg-foreground/10 rounded animate-pulse" />
                      <div className="h-32 w-full bg-foreground/5 rounded border border-foreground/5" />
                      <div className="flex gap-4">
                        <div className="h-20 w-1/2 bg-foreground/5 rounded" />
                        <div className="h-20 w-1/2 bg-foreground/5 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-foreground/40" />
                  <span className="text-sm font-mono uppercase tracking-widest text-foreground/60">{study.client}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                  {study.title}
                </h2>

                <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="border-l-2 border-foreground/10 pl-6">
                    <span className="block text-3xl font-bold mb-1">{study.stat}</span>
                    <span className="text-sm text-foreground/40 uppercase tracking-wide">Key Outcome</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono bg-foreground/5 rounded border border-foreground/10 text-foreground/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/10 flex items-center text-sm font-medium cursor-pointer group/link">
                  View Case Study
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to build something exceptional?</h2>
          <p className="text-foreground/60 text-lg mb-8 max-w-2xl mx-auto">
            We take on a limited number of clients per quarter to ensure the highest quality of work.
          </p>
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            Start a Project
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
