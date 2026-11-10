"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  Play,
  BarChart2,
} from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import WatchMyWorkModal from "@/components/WatchMyWorkModal";

// Exact SVG Icons Matching Reference Navy Bar (crop_navy.png)
// Two-Tone Graph Icon Matching Reference Badge (media_1794313620315.png)
function StrategicBadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* 4 Navy Bars */}
      <rect x="2.5" y="14" width="2.8" height="6.5" rx="1.4" fill="#051D67" />
      <rect x="7.3" y="11" width="2.8" height="9.5" rx="1.4" fill="#051D67" />
      <rect x="12.1" y="11.5" width="2.8" height="9" rx="1.4" fill="#051D67" />
      <rect x="16.9" y="8" width="2.8" height="12.5" rx="1.4" fill="#051D67" />
      {/* Emerald Green Zig-Zag Trend Line */}
      <path
        d="M2.5 13 L8 7.5 L12 10.2 L18.5 3.5"
        stroke="#00D084"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Emerald Green Solid Arrowhead */}
      <path
        d="M14 3.2 H19.5 V8.7 Z"
        fill="#00D084"
      />
    </svg>
  );
}

// Exact SVG Icons Matching Reference Navy Bar (cfo_zoom.png, calc_zoom.png, strat_zoom.png)
function ProfitOptimizationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="#00D084"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 13 L8 8 L13 13 L21 4" />
      <path d="M16 4 H21 V9" />
      <path d="M4 21 V17" />
      <path d="M9 21 V13" />
      <path d="M14 21 V16" />
      <path d="M19 21 V10" />
      <path d="M2 21 H22" />
    </svg>
  );
}

// Fractional CFO - Dual Figures with Collar Arc (Exact Match to cfo_zoom.png)
function FractionalCFOIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="#00D084"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Front Person Head */}
      <circle cx="8.5" cy="6.5" r="3.5" />
      {/* Front Person Shoulders */}
      <path d="M2.5 19 C2.5 14.5 5.2 12.5 8.5 12.5 C11.8 12.5 14.5 14.5 14.5 19" />
      {/* Front Person Inner Collar/Chest arc */}
      <path d="M6.2 16.5 C7 15.8 7.8 15.5 8.5 15.5 C9.2 15.5 10 15.8 10.8 16.5" />
      {/* Back Person Head */}
      <circle cx="16.5" cy="7.5" r="2.8" />
      {/* Back Person Shoulders */}
      <path d="M14.5 14 C16.2 13.8 19.5 14.8 19.5 19" />
    </svg>
  );
}

// Financial Consulting - Exact match to financial-consulting.svg
function FinancialConsultingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#00D889"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ strokeWidth: 4 }}
    >
      <rect x="10" y="5" width="44" height="54" rx="5" />
      <path d="M18 15h28v11H18z" />
      <path d="M19 35h3m10 0h3m10 0h1M19 44h3m10 0h3M19 53h3m10 0h3M45 43v10" />
    </svg>
  );
}

// Strategic Planning - Exact match to strategic-planning.svg
function StrategicPlanningIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#00D889"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ strokeWidth: 4 }}
    >
      <path d="M49 13A25 25 0 1 0 57 32" />
      <path d="M42 21a15 15 0 1 0 5 11" />
      <circle cx="32" cy="32" r="5" />
      <path d="M32 32 52 12m-1-8 1 8 8 1-8 8" />
    </svg>
  );
}

// Exact 14-Row Halftone Dot Matrix Pattern Matching media_1794312742109.png
const DOT_GRID_ROWS = [
  [{ size: 3.5 }, { size: 3.5 }, { size: 3.5 }, null],
  [{ size: 4.5 }, { size: 4.5 }, { size: 4.5 }, null],
  [{ size: 5.5 }, { size: 5.5 }, { size: 5.5 }, { size: 3.5 }],
  [{ size: 6.5 }, { size: 6.5 }, { size: 6.5 }, { size: 4.2 }],
  [{ size: 7.5 }, { size: 7.5 }, { size: 7.5 }, { size: 5 }],
  [{ size: 8.5 }, { size: 8.5 }, { size: 8.5 }, { size: 5.8 }],
  [{ size: 9.5 }, { size: 9.5 }, { size: 9.5 }, { size: 6.5 }],
  [{ size: 8.8 }, { size: 8.8 }, { size: 8.8 }, { size: 6 }],
  [{ size: 7.8 }, { size: 7.8 }, { size: 7.8 }, { size: 5.2 }],
  [{ size: 6.5 }, { size: 6.5 }, { size: 6.5 }, { size: 4.2 }],
  [{ size: 5.2 }, { size: 5.2 }, { size: 5.2 }, { size: 3.5 }],
  [{ size: 4.2 }, { size: 4.2 }, { size: 4.2 }, { size: 2.8 }],
  [{ size: 3.2 }, { size: 3.2 }, { size: 3.2 }, null],
  [{ size: 2.5 }, { size: 2.5 }, { size: 2.5 }, null],
];

export default function HeroSection() {
  const { openBookingModal } = useBookingModal();
  const [watchModalOpen, setWatchModalOpen] = useState(false);

  const stripItems = [
    {
      line1: "Profit",
      line2: "Optimization",
      icon: ProfitOptimizationIcon,
      href: "/services/profit-optimization",
    },
    {
      line1: "Fractional",
      line2: "CFO Services",
      icon: FractionalCFOIcon,
      href: "/services/fractional-cfo-services",
    },
    {
      line1: "Financial",
      line2: "Consulting",
      icon: FinancialConsultingIcon,
      href: "/services/financial-consulting-advisory",
    },
    {
      line1: "Strategic",
      line2: "Planning",
      icon: StrategicPlanningIcon,
      href: "/services/business-strategy-operational-consulting",
    },
    {
      line1: "Business Process",
      line2: "Optimization",
      icon: (props: { className?: string }) => <Handshake {...props} strokeWidth={2.3} />,
      href: "/services/business-strategy-operational-consulting",
    },
  ];

  return (
    <>
      <section className="relative pt-[180px] sm:pt-[195px] lg:pt-[210px] pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-[#FAF7F2]">
        {/* Organic Flowing Wave Background (Exact Pin-to-Pin Match to Reference Image 1) */}
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

        <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Main Two-Column Hero Composition - Top-aligned per Image 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start">
            {/* Left Side (Approx 58% / 7 cols) - relative z-10 ensures text is always above background */}
            <div className="lg:col-span-7 xl:col-span-7 text-left relative z-10">
              {/* Mint Pill Badge with Two-Tone Graph Icon - Exact match to Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full bg-[#E5F6EE] border border-[#BBEBD8]/60 shadow-xs"
              >
                <StrategicBadgeIcon className="w-4.5 h-4.5 shrink-0" />
                <span className="text-xs sm:text-[14px] lg:text-[15px] font-semibold text-[#051D67] tracking-tight">
                  Strategic Financial Advisory for Business Growth
                </span>
              </motion.div>

              {/* Main Headline - Bold, dominant typography matching Image 1 without overflowing */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                className="mt-6 sm:mt-7 lg:mt-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[64px] font-black font-heading text-[#051D67] leading-[1.1] tracking-[-0.03em]">
                  <span className="block">Smarter Financial Strategy.</span>
                  <span className="block mt-1 sm:mt-1.5">
                    <span className="text-[#00D084]">Stronger</span>{" "}
                    <span className="text-[#051D67]">Business Growth.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Paragraph - High-contrast navy text */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
                className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[19px] text-[#1F2A44] leading-[1.55] max-w-[620px] font-normal"
              >
                Fractional CFO services, profit optimization, and business consulting to help you understand your numbers, improve profitability, and achieve sustainable growth.
              </motion.p>

              {/* CTA Row with Book a Consultation and Watch My Work - Enlarged dimensions */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                className="mt-7 sm:mt-8 lg:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
              >
                {/* Primary Solid Navy Button */}
                <button
                  onClick={() => openBookingModal()}
                  className="h-14 sm:h-[58px] px-8 sm:px-9 rounded-full text-[15px] sm:text-[16px] font-bold bg-[#051D67] hover:bg-[#07247a] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 sm:w-4.5 h-4 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Outlined Button with Play Icon: Watch My Work */}
                <button
                  onClick={() => setWatchModalOpen(true)}
                  className="h-14 sm:h-[58px] px-8 sm:px-9 rounded-full text-[15px] sm:text-[16px] font-bold border-2 border-[#051D67] text-[#051D67] bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-xs group"
                >
                  <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-[#051D67] flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 text-[#051D67] fill-current ml-0.5" />
                  </div>
                  <span>Watch My Work</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side (Approx 42% / 5 cols) - Landscape Portrait with Mint Backdrop & Halftone Grid */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-start w-full lg:pt-1 relative z-0">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[460px] xl:max-w-[500px]">
                {/* Decorative Pale Mint Background Shape behind image */}
                <div className="absolute -inset-4 sm:-inset-6 bg-[#EBF7F2] rounded-[36px] sm:rounded-[42px] -z-10 hidden sm:block" />

                {/* Halftone Emerald Dot Grid Matrix on the Right (14 rows x 4 cols, exact match to Image 1) */}
                <div className="absolute top-1/2 -right-6 sm:-right-8 lg:-right-10 -translate-y-1/2 flex flex-col gap-[7.5px] -z-10 hidden sm:flex">
                  {DOT_GRID_ROWS.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-[8.5px] items-center">
                      {row.map((dot, cIdx) => (
                        <div
                          key={cIdx}
                          className="w-3 h-3 flex items-center justify-center shrink-0"
                        >
                          {dot && (
                            <span
                              className="rounded-full bg-[#00D084]"
                              style={{
                                width: `${dot.size}px`,
                                height: `${dot.size}px`,
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Abraham Cohen Portrait Container - Landscape aspect ratio ~1.28:1 matching Image 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                  className="relative w-full aspect-[1.28/1] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl bg-slate-200 group"
                >
                  <Image
                    src="/hero.webp"
                    alt="Abraham Cohen - Strategic Financial Advisor"
                    fill
                    priority
                    sizes="(max-width: 640px) 480px, (max-width: 1024px) 540px, 580px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Dark Navy Service Strip - Full-width, taller container matching Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 sm:mt-14 lg:mt-16 w-full bg-[#051D67] text-white rounded-[26px] sm:rounded-[30px] shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {stripItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="py-5 sm:py-6 lg:py-7 px-3.5 sm:px-4 lg:px-5 flex items-center gap-3.5 sm:gap-4.5 justify-center md:justify-start hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-transparent text-[#00D084] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-9 sm:w-10 lg:w-11 h-9 sm:h-10 lg:h-11" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm sm:text-[15px] lg:text-[16px] font-bold text-white group-hover:text-slate-100 leading-snug">
                        {item.line1}
                      </span>
                      <span className="block text-sm sm:text-[15px] lg:text-[16px] font-bold text-white group-hover:text-slate-100 leading-snug">
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
