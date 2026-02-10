import Navbar from "../components/navbar-temp";
import Footer from "../components/footer";
import Link from "next/link";

// External curated articles about ITS, Traffic Data, and Smart Transportation
const EXTERNAL_ARTICLES = [
  {
    id: 1,
    title: "12 Real-World Examples of How the IoT Monitors Vehicle Traffic",
    source: "Digi International",
    excerpt:
      "Discover how IoT monitors traffic, powers smart traffic lights, reduces congestion, and transforms urban mobility with real-world smart city examples.",
    category: "IoT & Smart Cities",
    url: "https://www.digi.com/blog/post/iot-monitor-traffic",
  },
  {
    id: 2,
    title: "Intelligent Transport Systems: What You Need To Know",
    source: "KORE Wireless",
    excerpt:
      "A comprehensive introduction to ITS — how it works, why cities use it to monitor and manage traffic flows, and the technology behind modern transportation networks.",
    category: "Transportation",
    url: "https://www.korewireless.com/blog/intelligent-transportation-systems-what-to-know/",
  },
  {
    id: 3,
    title: "Intelligent Traffic Management: Challenges, Solutions & Future",
    source: "Medium",
    excerpt:
      "Breaking down intelligent traffic management concepts, including the use of sensors, AI for data processing, and how cities are solving congestion.",
    category: "Traffic Intelligence",
    url: "https://medium.com/@spavithra2/blog-intelligent-traffic-management-a-review-of-challenges-solutions-and-future-perspectives-56c45414eb65",
  },
  {
    id: 4,
    title: "How Smart Transportation Improves Traffic Management",
    source: "Seagate",
    excerpt:
      "Discover how smart transportation transforms urban living with real-time monitoring, predictive analytics, and intelligent traffic signal control.",
    category: "Smart Cities",
    url: "https://www.seagate.com/blog/how-smart-transportation-improves-traffic-management/",
  },
  {
    id: 5,
    title: "Intelligent Transportation and Its Expansion",
    source: "Multilink",
    excerpt:
      "What ITS is, what problems it solves, and its role in smart cities. Covers network convergence, data collection devices, and fiber optic infrastructure.",
    category: "Infrastructure",
    url: "https://www.gomultilink.com/blog/multilog/intelligent-transportation-and-expansion",
  },
  {
    id: 6,
    title: "How ITS Can Reduce Environmental Impact of Congestion",
    source: "Conduent",
    excerpt:
      "How intelligent transportation systems like dynamic tolling and optimized traffic flow can cut emissions and improve environmental quality.",
    category: "Sustainability",
    url: "https://insights.conduent.com/conduent-blog/how-intelligent-transportation-systems-can-reduce-the-environmental-impact-of-traffic-congestion",
  },
  {
    id: 7,
    title: "The Development of Traffic Data Collection Methods",
    source: "GoodVision",
    excerpt:
      "How traffic data collection evolved from manual counting to automated methods using video imaging, sensors, and AI.",
    category: "Data Collection",
    url: "https://blog.goodvisionlive.com/the-development-of-traffic-data-collection-methods",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 md:pb-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-xl mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#F48244] mb-4">
              Resources
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#171717] mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Curated reads on intelligent transportation, traffic data, and
              smart city infrastructure.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {EXTERNAL_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-[#F48244]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-grow p-7 flex flex-col">
                  {/* Top row: category + external icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F48244]/10 text-[#F48244]">
                      {article.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#F48244]/10 transition-colors">
                      <svg
                        className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#F48244] transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#171717] mb-3 group-hover:text-[#F48244] transition-colors duration-200 leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Source */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-400">
                      {article.source}
                    </span>
                    <span className="text-xs font-medium text-gray-900 group-hover:text-[#F48244] transition-colors flex items-center gap-1">
                      Read
                      <svg
                        className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
