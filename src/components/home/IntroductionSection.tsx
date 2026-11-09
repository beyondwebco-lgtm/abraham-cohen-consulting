"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, TrendingUp, Layers, CheckCircle } from "lucide-react";

export default function IntroductionSection() {
  const pillars = [
    {
      title: "Margin Forensics",
      desc: "Deconstruct unit economics to capture true product and customer profitability.",
      icon: TrendingUp,
    },
    {
      title: "Cash Flow Governance",
      desc: "Rolling 13-week liquidity models that eliminate working capital surprises.",
      icon: Layers,
    },
    {
      title: "Strategic Modeling",
      desc: "Dynamic scenario planning that pressure-tests decisions before capital is committed.",
      icon: Compass,
    },
    {
      title: "Executive Alignment",
      desc: "Translating board-level financial targets into accountable departmental scorecards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
              <span className="w-8 h-[2px] bg-[#1EA083]" />
              WHO WE ARE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D67] leading-[1.18] tracking-tight">
              Helping Businesses Turn Financial Clarity Into Confident Decisions.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Abraham Cohen Consulting helps businesses navigate financial complexity, improve operational performance, and make smarter strategic decisions. Through financial advisory, profit optimization, and practical business consulting, we help organizations build a stronger foundation for long-term success.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#EEF7F6] text-[#051D67] font-bold text-sm hover:bg-[#051D67] hover:text-white transition-all duration-300 group border border-[#1EA083]/20"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#1EA083] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column (Sophisticated Strategy Architecture Graphic) */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#EEF7F6]/60 border border-[#1EA083]/20 shadow-xl">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200/60 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1EA083]">
                    Methodology Framework
                  </span>
                  <h3 className="text-lg font-bold font-heading text-[#051D67]">
                    The Strategic Financial Foundation
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#051D67] shadow-xs border border-slate-100">
                  <CheckCircle className="w-3.5 h-3.5 text-[#1EA083]" /> Rigorous Advisory
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:border-[#1EA083]/40 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#EEF7F6] text-[#1EA083] flex items-center justify-center mb-3 group-hover:bg-[#1EA083] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold font-heading text-[#051D67] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-6 pt-5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span className="italic">
                  “Clarity precedes growth. Precision sustains it.”
                </span>
                <span className="font-semibold text-[#051D67]">
                  Abraham Cohen Consulting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
