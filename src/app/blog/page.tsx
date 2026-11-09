"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/content";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Financial Strategy", "Cash Flow & Forecasting", "Executive Advisory"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Blog Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F6] text-[#051D67] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/20 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#1EA083]" />
          Insights & Strategic Perspectives
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#051D67] leading-[1.14] max-w-4xl tracking-tight">
          Financial Intelligence for Modern Business Leaders.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mt-5 max-w-2xl leading-relaxed">
          In-depth analyses, strategic frameworks, and practical perspectives on profit optimization, working capital governance, and enterprise scaling.
        </p>

        <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 max-w-xl">
          <strong>Notice:</strong> Articles are provided as sample demo content illustrating our thought leadership format until client editorial review.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="rounded-3xl bg-[#051D67] text-white p-8 sm:p-12 lg:p-14 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1EA083]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl space-y-4 relative z-10 text-left">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#1EA083] text-white font-semibold">
                  Featured Strategic Analysis
                </span>
                <span className="text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#051D67] hover:bg-[#1EA083] hover:text-white transition-all text-xs font-bold shadow-md group"
                >
                  <span>Read Full Perspective</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search & Categories Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#051D67] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1EA083] bg-slate-50/60"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl p-7 bg-[#EEF7F6]/40 border border-slate-200 hover:border-[#1EA083] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#1EA083] border border-[#1EA083]/20 font-semibold text-[11px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#051D67] mb-3 leading-snug group-hover:text-[#1EA083] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#051D67] group-hover:text-[#1EA083] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
