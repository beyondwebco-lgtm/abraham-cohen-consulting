"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { SITE_CONFIG } from "@/data/content";

export default function FinalCTASection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-20 lg:py-28 bg-[#051D67] text-white relative overflow-hidden">
      {/* Background radial emerald accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1EA083]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#1EA083]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#1EA083] text-xs font-bold uppercase tracking-widest border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          YOUR NEXT CHAPTER STARTS HERE
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.14] tracking-tight max-w-4xl mx-auto">
          Ready to Build a More Profitable, Resilient Business?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let’s explore how clearer financial insights, stronger strategies, and practical consulting can help your business move forward with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1EA083] hover:bg-[#167a64] text-white text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Book Your Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/30 hover:border-white text-white hover:bg-white/10 text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1EA083]" />
            <span>Strict Client Confidentiality</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#1EA083]" />
            <span>Direct Advisory Contact: {SITE_CONFIG.contact.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
