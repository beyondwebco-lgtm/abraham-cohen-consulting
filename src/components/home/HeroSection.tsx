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
      <section className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-white overflow-hidden">
        {/* Warm Cream Organic Wave Background Shape (Matches Reference Design) */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 95% 70% at 55% 35%, #FAF5EC 0%, #FAF5EC 55%, #FFFFFF 100%)",
          }}
        />

        {/* Subtle Organic Curve Overlay */}
        <svg
          className="absolute top-12 left-0 w-full h-[700px] lg:h-[850px] pointer-events-none -z-10 opacity-70"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,220 C320,110 680,380 1100,210 C1300,130 1400,270 1500,200 L1500,700 L-50,700 Z"
            fill="#FAF6EE"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Two-Column Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left Side (Approx 58% / 7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left max-w-2xl xl:max-w-3xl">
              {/* Mint Pill Badge with Graph Icon */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#D8F5EB] border border-[#B2EBD7] shadow-xs max-w-full"
              >
                <div className="w-4 sm:w-5 h-4 sm:h-5 rounded bg-[#00D084]/20 flex items-center justify-center text-[#00A86B] shrink-0">
                  <BarChart2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#051D67] tracking-tight leading-tight">
                  Strategic Financial Advisory for Business Growth
                </span>
              </motion.div>

              {/* Main Headline - Bold, impactful, responsive across all screen sizes */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              >
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-[62px] font-extrabold font-heading text-[#051D67] leading-[1.12] tracking-tight">
                  Smarter Financial Strategy.
                  <span className="block mt-1 sm:mt-2">
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
                className="text-base sm:text-lg lg:text-[18px] xl:text-[19px] text-slate-700 leading-relaxed max-w-xl lg:max-w-2xl font-normal"
              >
                Fractional CFO services, profit optimization, and business consulting to help you understand your numbers, improve profitability, and achieve sustainable growth.
              </motion.p>

              {/* CTA Row with Book a Consultation and Watch My Work */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1 sm:pt-2"
              >
                {/* Primary Solid Navy Button */}
                <button
                  onClick={() => openBookingModal()}
                  className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold bg-[#051D67] hover:bg-[#07247a] text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Outlined Button with Play Icon: Watch My Work */}
                <button
                  onClick={() => setWatchModalOpen(true)}
                  className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold border-2 border-[#051D67] text-[#051D67] bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-xs hover:shadow-md group"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-[#051D67] flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 text-[#051D67] fill-current ml-0.5" />
                  </div>
                  <span>Watch My Work</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side (Approx 42% / 5 cols) - Prominent Executive Portrait */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[460px] xl:max-w-[490px]">
                {/* Soft Pale Mint Background Box (hugs portrait with exact margin across all screens) */}
                <div className="absolute -inset-3 sm:-inset-4 lg:-inset-5 bg-[#EEF7F6] rounded-[34px] sm:rounded-[42px] -z-10 hidden sm:block border border-[#00D084]/25 shadow-sm" />

                {/* Green Dot Grid Matrix on the Right (11 rows x 4 cols) */}
                <div className="absolute top-1/2 -right-6 sm:-right-8 lg:-right-10 -translate-y-1/2 flex flex-col gap-2 sm:gap-2.5 -z-10 hidden sm:flex">
                  {[...Array(11)].map((_, rIdx) => (
                    <div key={rIdx} className="flex gap-2 sm:gap-2.5">
                      {[...Array(4)].map((_, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00D084]"
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
                  className="relative w-full aspect-[4/4.7] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white bg-slate-100 group"
                >
                  <Image
                    src="/hero.webp"
                    alt="Abraham Cohen - Strategic Financial Advisor"
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 440px, 490px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Subtle Gradient Vignette at base */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#051D67]/60 via-[#051D67]/15 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Dark Navy Service Strip (All Screen Sizes Friendly) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 sm:mt-12 lg:mt-16 w-full bg-[#051D67] text-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {stripItems.map((item, index) => {
                const IconComponent = item.icon;
                const isLastOnTablet = index === stripItems.length - 1;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`p-4 sm:p-5 lg:p-5 xl:p-6 flex items-center gap-3.5 hover:bg-white/5 transition-all duration-300 group cursor-pointer ${
                      isLastOnTablet ? "sm:col-span-2 lg:col-span-1 border-t sm:border-t lg:border-t-0 border-white/15" : ""
                    }`}
                  >
                    <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-white/5 text-[#00D084] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 stroke-[2.2]" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs sm:text-sm lg:text-[14px] xl:text-[15px] font-bold text-slate-100 group-hover:text-white leading-snug">
                        {item.line1}
                      </span>
                      <span className="block text-xs sm:text-sm lg:text-[14px] xl:text-[15px] font-bold text-slate-100 group-hover:text-white leading-snug">
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
