"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutAbrahamSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#EEF7F6]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            {/* Color block accents */}
            <div className="absolute -inset-4 bg-white rounded-3xl -z-10 shadow-lg border border-slate-100 hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#1EA083]/15 rounded-full blur-xl -z-10 pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-slate-100 group">
              <Image
                src="/hero.webp"
                alt="Abraham Cohen - Principal Strategic Advisor"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#051D67]/90 via-[#051D67]/40 to-transparent text-white">
                <p className="font-bold text-lg font-heading">Abraham Cohen</p>
                <p className="text-xs text-slate-200">Principal Strategic Advisor</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
              <span className="w-8 h-[2px] bg-[#1EA083]" />
              MEET YOUR STRATEGIC ADVISOR
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D67] leading-[1.18] tracking-tight">
              Meet Abraham — Your Partner in Smarter Business Growth.
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                At Abraham Cohen Consulting, we believe that better business decisions begin with financial clarity. Our approach combines strategic thinking, practical financial insights, and a commitment to helping organizations improve performance and pursue sustainable growth.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Rather than offering detached theory or generic templates, we partner closely with business leaders to dissect complex financial data, align operational capabilities, and execute actionable strategies that build long-term enterprise value.
              </p>
            </div>

            {/* Core Values / Approach Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#1EA083] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Data-Driven Objectivity
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#1EA083] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Direct Executive Partnership
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#1EA083] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Operational Feasibility
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#1EA083] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Disciplined Value Creation
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#051D67] text-white text-sm font-bold hover:bg-[#07247a] transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Read Full Profile & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
