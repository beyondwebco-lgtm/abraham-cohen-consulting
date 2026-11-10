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
      <section className="relative pt-28 sm:pt-32 lg:pt-[132px] pb-8 sm:pb-10 lg:pb-12 overflow-hidden min-h-screen flex flex-col justify-between bg-[#FAF7F2]">
        {/* Organic Flowing Wave Background (Exact Pin-to-Pin Match to Reference Image 2) */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 75% 45%, #EEF7F4 0%, #F5F9F6 45%, #FAF7F2 85%)",
          }}
        />

        {/* Smooth Sweeping Organic Wave across the lower hero */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none -z-10"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,520 C250,420 540,680 920,530 C1200,420 1350,480 1550,410 L1550,900 L-100,900 Z"
            fill="#F2F8F5"
            opacity="0.85"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          {/* Main Two-Column Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Side (Approx 55% / 7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left max-w-2xl">
              {/* Mint Pill Badge with Graph Icon */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8F5EB] border border-[#B2EBD7] shadow-xs"
              >
                <div className="w-4 h-4 rounded bg-[#00D084]/20 flex items-center justify-center text-[#00A86B] shrink-0">
                  <BarChart2 className="w-3.5 h-3.5 stroke-[2.4]" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#051D67] tracking-tight">
                  Strategic Financial Advisory for Business Growth
                </span>
              </motion.div>

              {/* Main Headline - Exactly matching reference styling, strictly single-line per segment */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[43px] xl:text-[47px] font-extrabold font-heading text-[#051D67] leading-[1.13] tracking-tight">
                  <span className="block sm:whitespace-nowrap">Smarter Financial Strategy.</span>
                  <span className="block mt-1 sm:whitespace-nowrap">
                    <span className="text-[#00D084]">Stronger</span>{" "}
                    <span className="text-[#051D67]">Business Growth.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
                className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal"
              >
                Fractional CFO services, profit optimization, and business consulting to help you understand your numbers, improve profitability, and achieve sustainable growth.
              </motion.p>

              {/* CTA Row with Book a Consultation and Watch My Work */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
              >
                {/* Primary Solid Navy Button */}
                <button
                  onClick={() => openBookingModal()}
                  className="px-6 sm:px-7 py-3 rounded-full text-sm font-bold bg-[#051D67] hover:bg-[#07247a] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Outlined Button with Play Icon: Watch My Work */}
                <button
                  onClick={() => setWatchModalOpen(true)}
                  className="px-6 sm:px-7 py-3 rounded-full text-sm font-bold border border-slate-300 text-[#051D67] bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-xs group"
                >
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 text-[#051D67] fill-current ml-0.5" />
                  </div>
                  <span>Watch My Work</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side (Approx 45% / 5 cols) - Clean Rounded Landscape Portrait matching Reference Image 2 */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px]">
                {/* Green Dot Grid Matrix on the Right (11 rows x 4 cols, exact match to reference) */}
                <div className="absolute top-1/2 -right-5 sm:-right-7 -translate-y-1/2 flex flex-col gap-2.5 -z-10 hidden sm:flex">
                  {[...Array(11)].map((_, rIdx) => (
                    <div key={rIdx} className="flex gap-2.5">
                      {[...Array(4)].map((_, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-1.5 h-1.5 rounded-full bg-[#00D084]"
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Abraham Cohen Portrait Container - Clean rounded landscape rectangle matching Image 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                  className="relative w-full aspect-[1.32/1] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl bg-slate-200 group"
                >
                  <Image
                    src="/hero.webp"
                    alt="Abraham Cohen - Strategic Financial Advisor"
                    fill
                    priority
                    sizes="(max-width: 640px) 440px, (max-width: 1024px) 480px, 520px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Dark Navy Service Strip (Exact Match to Reference Image 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 sm:mt-10 lg:mt-12 w-full bg-[#051D67] text-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {stripItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="p-3.5 sm:p-4 lg:p-4.5 flex items-center gap-3.5 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-transparent text-[#00D084] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 stroke-[2.2]" />
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
