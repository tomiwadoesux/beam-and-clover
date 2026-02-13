"use client";

import Link from "next/link";

const RECENT_POSTS = [
  {
    id: 1,
    title: "The Evolution of Digital Infrastructure",
    date: "October 12, 2024",
    category: "Engineering",
    excerpt:
      "How we are rethinking the foundational layers of the modern web to support the next generation of applications.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Designing for High-Density Interfaces",
    date: "November 03, 2024",
    category: "Design",
    excerpt:
      "Lessons learned from building complex dashboards and data-heavy applications without sacrificing clarity.",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Scale and Sustainability",
    date: "November 15, 2024",
    category: "Sustainability",
    excerpt:
      "Why efficient code is the first step towards a greener cloud computing footprint.",
    readTime: "4 min read",
  },
];

export default function StayInformed() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#171717] mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Latest insights on technology, design, and digital transformation
              from our team.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-gray-900 group"
            >
              View all articles
              <svg
                className="w-4 h-4 ml-1.5 text-gray-400 group-hover:text-[#F48244] transition-colors group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RECENT_POSTS.map((post) => (
            <Link
              key={post.id}
              href="/blog"
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-grow p-6">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F48244]/10 text-[#F48244]">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#171717] mb-3 group-hover:text-[#F48244] transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center text-sm font-medium text-gray-900 mt-auto group-hover:translate-x-1 transition-transform duration-200">
                  Read more
                  <svg
                    className="w-3 h-3 ml-2"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-gray-900 group"
          >
            View all articles
            <svg
              className="w-4 h-4 ml-1.5 text-gray-400 group-hover:text-[#F48244] transition-colors group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
  );
}
