"use client";

import React from "react";
import {
  TrendingDown,
  Clock,
  EyeOff,
  ZapOff,
  Navigation,
  Users,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { BUSINESS_CHALLENGES } from "@/data/content";

export default function ChallengesSection() {
  const challengeIcons: { [key: string]: React.ElementType } = {
    TrendingDown,
    Clock,
    EyeOff,
    ZapOff,
    Navigation,
    Users,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#051D67] text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#1EA083]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#1EA083] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/30">
            <ShieldAlert className="w-3.5 h-3.5" />
            THE CHALLENGES WE SOLVE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
            Every Growing Business Faces Challenges.{" "}
            <span className="text-[#1EA083]">The Right Strategy Changes Everything.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Unaddressed financial blindspots quietly erode enterprise value. We identify systemic friction points and replace uncertainty with operational precision.
          </p>
        </div>

        {/* 6 Cards Grid (3 Columns Desktop, 1 Column Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CHALLENGES.map((item) => {
            const IconComponent = challengeIcons[item.iconName] || TrendingDown;
            return (
              <div
                key={item.number}
                className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1EA083]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#1EA083]/80 group-hover:text-[#1EA083] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#1EA083] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1EA083] group-hover:text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Strategic Outcome Tag */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#1EA083] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1EA083]" />
                  <span>{item.strategicOutcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition into Next Section */}
        <div className="mt-16 text-center pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-300">
            <span>From Financial Challenges to Strategic Opportunities</span>
            <ArrowRight className="w-4 h-4 text-[#1EA083] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
