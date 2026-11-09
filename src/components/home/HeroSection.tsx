"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Calculator,
  Target,
  Handshake,
  Play,
  BarChart2,
} from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import WatchMyWorkModal from "@/components/WatchMyWorkModal";

export default function HeroSection() {
  const { openBookingModal } = useBookingModal();
  const [watchModalOpen, setWatchModalOpen] = useState(false);

  const stripItems = [
    {
      line1: "Profit",
      line2: "Optimization",
      icon: TrendingUp,
      href: "/services/profit-optimization",
    },
    {
      line1: "Fractional",
      line2: "CFO Services",
      icon: Users,
      href: "/services/fractional-cfo-services",
    },
    {
      line1: "Financial",
      line2: "Consulting",
      icon: Calculator,
      href: "/services/financial-consulting-advisory",
    },
    {
      line1: "Strategic",
      line2: "Planning",
      icon: Target,
      href: "/services/business-strategy-operational-consulting",
    },
    {
      line1: "Business Process",
      line2: "Optimization",
      icon: Handshake,
      href: "/services/business-strategy-operational-consulting",
    },
  ];

  return (
    <>
      <section className="relative pt-20 sm:pt-22 lg:pt-24 pb-6 sm:pb-8 bg-white overflow-hidden">
        {/* Warm Cream Organic Wave Background Shape (Matches Reference Design) */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 90% 65% at 55% 38%, #FAF5EC 0%, #FAF5EC 50%, #FFFFFF 100%)",
          }}
        />

        {/* Subtle Organic Curve Overlay */}
        <svg
          className="absolute top-12 left-0 w-full h-[600px] pointer-events-none -z-10 opacity-70"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,200 C320,100 680,350 1100,190 C1300,120 1400,250 1500,180 L1500,600 L-50,600 Z"
            fill="#FAF6EE"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Main Two-Column Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Side (Approx 58% / 7 cols) */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left max-w-2xl">
              {/* Mint Pill Badge with Graph Icon */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8F5EB] border border-[#B2EBD7] shadow-xs"
              >
                <div className="w-4 h-4 rounded bg-[#00D084]/20 flex items-center justify-center text-[#00A86B]">
                  <BarChart2 className="w-3 h-3" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#051D67] tracking-tight">
                  Strategic Financial Advisory for Business Growth
                </span>
              </motion.div>

              {/* Main Headline - Exactly matching reference styling */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-extrabold font-heading text-[#051D67] leading-[1.12] tracking-tight">
                  Smarter Financial Strategy.
                  <span className="block mt-1 sm:mt-1.5">
                    <span className="text-[#00C875]">Stronger</span>{" "}
                    <span className="text-[#051D67]">Business Growth.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
                className="text-sm sm:text-[15px] text-slate-700 leading-relaxed max-w-xl font-normal"
              >
                Fractional CFO services, profit optimization, and business consulting to help you understand your numbers, improve profitability, and achieve sustainable growth.
              </motion.p>

              {/* CTA Row with Book a Consultation and Watch My Work */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-0.5"
              >
                {/* Primary Solid Navy Button */}
                <button
                  onClick={() => openBookingModal()}
                  className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-bold bg-[#051D67] hover:bg-[#07247a] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Outlined Button with Play Icon: Watch My Work */}
                <button
                  onClick={() => setWatchModalOpen(true)}
                  className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-bold border-2 border-[#051D67] text-[#051D67] bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-xs group"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-[#051D67] flex items-center justify-center">
                    <Play className="w-2 h-2 text-[#051D67] fill-current ml-0.5" />
                  </div>
                  <span>Watch My Work</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side (Approx 42% / 5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Soft Pale Mint Background Box (clean, not rotated, aligned with reference) */}
              <div className="absolute -inset-2.5 sm:-inset-3 bg-[#EEF7F6] rounded-[34px] -z-10 hidden sm:block border border-[#00D084]/25 shadow-sm" />

              {/* Green Dot Grid Matrix on the Right (11 rows x 4 cols, exact match to reference) */}
              <div className="absolute top-1/2 -right-7 sm:-right-9 -translate-y-1/2 flex flex-col gap-2 -z-10">
                {[...Array(11)].map((_, rIdx) => (
                  <div key={rIdx} className="flex gap-2">
                    {[...Array(4)].map((_, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-1.5 h-1.5 rounded-full bg-[#00D084]"
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Abraham Cohen Portrait Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/4.5] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group"
              >
                <Image
                  src="/hero.webp"
                  alt="Abraham Cohen - Strategic Financial Advisor"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle Gradient Vignette at base */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#051D67]/60 via-[#051D67]/15 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Floating Dark Navy Service Strip (Exact Match to Reference Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-6 sm:mt-8 w-full bg-[#051D67] text-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {stripItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="p-3.5 sm:p-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-transparent text-[#00D084] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs sm:text-[13px] font-bold text-slate-100 group-hover:text-white leading-snug">
                        {item.line1}
                      </span>
                      <span className="block text-xs sm:text-[13px] font-bold text-slate-100 group-hover:text-white leading-snug">
                        {item.line2}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Watch My Work Executive Video / Presentation Modal */}
      <WatchMyWorkModal
        isOpen={watchModalOpen}
        onClose={() => setWatchModalOpen(false)}
      />
    </>
  );
}
