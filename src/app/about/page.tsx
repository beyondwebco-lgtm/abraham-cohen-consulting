import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Shield,
  Compass,
  TrendingUp,
  ArrowRight,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Abraham Cohen Consulting",
  description:
    "Learn about Abraham Cohen Consulting's philosophy, mission, consulting approach, and commitment to sustainable business growth.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Financial Truth & Transparency",
      desc: "We look beyond vanity metrics to reveal the true unit economics and cash flow realities of your enterprise.",
      icon: Shield,
    },
    {
      title: "Pragmatic Execution",
      desc: "Strategy without operational viability is wasted effort. Every recommendation is built for realistic implementation.",
      icon: Compass,
    },
    {
      title: "Disciplined Value Creation",
      desc: "We measure success by durable margin expansion, healthy liquidity reserves, and compounding enterprise valuation.",
      icon: TrendingUp,
    },
    {
      title: "Direct Strategic Partnership",
      desc: "No inexperienced junior delegates. You work directly with experienced strategic leadership at every critical juncture.",
      icon: Users,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-24 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F6] text-[#051D67] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/20 mb-4">
          <Target className="w-3.5 h-3.5 text-[#1EA083]" />
          About Abraham Cohen Consulting
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#051D67] leading-[1.14] max-w-4xl tracking-tight">
          Strategic Financial Guidance Rooted in Clarity, Rigor, and Execution.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mt-5 max-w-2xl leading-relaxed">
          At Abraham Cohen Consulting, our mission is to empower ambitious business leaders with the quantitative insights and strategic frameworks needed to make confident commercial decisions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20 lg:space-y-28">
        {/* Founder Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/hero.webp"
                alt="Abraham Cohen"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#051D67]/90 via-[#051D67]/40 to-transparent text-white">
                <p className="font-bold text-xl font-heading">Abraham Cohen</p>
                <p className="text-xs text-slate-200">Founder & Principal Strategic Advisor</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
              Founder Profile & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#051D67]">
              Bridging Executive Financial Acumen and Practical Business Realities.
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                At Abraham Cohen Consulting, we believe that better business decisions begin with financial clarity. Our approach combines strategic thinking, practical financial insights, and a commitment to helping organizations improve performance and pursue sustainable growth.
              </p>
              <p>
                Growing companies often reach an inflection point where conventional accounting fails to answer critical strategic questions: <em>Which customer segments drive our real profit? Can we afford this expansion? How resilient is our cash flow under downturn scenarios?</em>
              </p>
              <p>
                We serve as your strategic partner to answer those questions with precision, providing boardroom-level financial direction, structured margin forensics, and hands-on operational leadership.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-800">
              <strong>Notice:</strong> Detailed biography, educational credentials, and formal licensing will be published following official client verification.
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF7F6]/60 border border-[#1EA083]/20 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#1EA083] text-white flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#051D67]">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To transform confusing financial data into clear, actionable intelligence, enabling founders and executives to optimize margins, protect cash reserves, and build high-value, resilient organizations.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#051D67] text-white space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-[#1EA083] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Our Vision
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To be the premier strategic advisory partner for growing mid-market enterprises, renowned for analytical rigor, fiduciary integrity, and lasting operational impact.
            </p>
          </div>
        </div>

        {/* Core Business Values */}
        <div className="space-y-8">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#051D67] mt-2">
              The Principles Behind Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1EA083] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF7F6] text-[#1EA083] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#051D67] mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#051D67] text-white text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            Partner With Abraham Cohen Consulting
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Discover how strategic financial leadership can transform your organization’s growth trajectory.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1EA083] hover:bg-[#167a64] text-white text-sm font-bold transition-all shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
