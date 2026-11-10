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
      <section className="relative pt-[124px] sm:pt-[132px] lg:pt-[138px] pb-6 sm:pb-8 lg:pb-10 overflow-hidden bg-[#FAF7F2]">
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

        <div className="max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10 w-full">
          {/* Main Two-Column Hero Composition - Top-aligned per Image 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
            {/* Left Side (Approx 58% / 7 cols) - relative z-10 ensures text is always above background */}
            <div className="lg:col-span-7 xl:col-span-7 text-left relative z-10">
              {/* Mint Pill Badge with Two-Tone Graph Icon - Exact match to Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-[#E5F6EE] border border-[#BBEBD8]/60 shadow-xs"
              >
                <StrategicBadgeIcon className="w-4 h-4 shrink-0" />
                <span className="text-xs sm:text-[13px] lg:text-[14px] font-semibold text-[#051D67] tracking-tight">
                  Strategic Financial Advisory for Business Growth
                </span>
              </motion.div>

              {/* Main Headline - Bold, dominant typography strictly in 2 lines */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                className="mt-3 sm:mt-4 lg:mt-4.5"
              >
                <h1 className="text-[24px] min-[390px]:text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] font-black font-heading text-[#051D67] leading-[1.12] tracking-[-0.03em]">
                  <span className="block whitespace-nowrap">Smarter Financial Strategy.</span>
                  <span className="block mt-0.5 sm:mt-1 whitespace-nowrap">
                    <span className="text-[#00D084]">Stronger</span>{" "}
                    <span className="text-[#051D67]">Business Growth.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Paragraph - High-contrast navy text */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
                className="mt-3 sm:mt-3.5 lg:mt-4 text-xs sm:text-sm lg:text-[16px] xl:text-[17px] text-[#1F2A44] leading-[1.5] max-w-[580px] font-normal"
              >
                Fractional CFO services, profit optimization, and business consulting to help you understand your numbers, improve profitability, and achieve sustainable growth.
              </motion.p>

              {/* CTA Row with Book a Consultation and Watch My Work */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                className="mt-4 sm:mt-5 lg:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              >
                {/* Primary Solid Navy Button */}
                <button
                  onClick={() => openBookingModal()}
                  className="h-11 sm:h-12 lg:h-[48px] px-6 sm:px-7 rounded-full text-xs sm:text-sm font-bold bg-[#051D67] hover:bg-[#07247a] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Outlined Button with Play Icon: Watch My Work */}
                <button
                  onClick={() => setWatchModalOpen(true)}
                  className="h-11 sm:h-12 lg:h-[48px] px-6 sm:px-7 rounded-full text-xs sm:text-sm font-bold border-2 border-[#051D67] text-[#051D67] bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
                >
                  <div className="w-4.5 sm:w-5 h-4.5 sm:h-5 rounded-full border-2 border-[#051D67] flex items-center justify-center">
                    <Play className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#051D67] fill-current ml-0.5" />
                  </div>
                  <span>Watch My Work</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side (Approx 42% / 5 cols) - Landscape Portrait with Mint Backdrop & Halftone Grid */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full relative z-0">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px] xl:max-w-[490px]">
                {/* Decorative Pale Mint Background Shape behind image */}
                <div className="absolute -inset-3 sm:-inset-4 bg-[#EBF7F2] rounded-[30px] sm:rounded-[36px] -z-10 hidden sm:block" />

                {/* Halftone Emerald Dot Grid Matrix on the Right (14 rows x 4 cols, exact match to Image 1) */}
                <div className="absolute top-1/2 -right-5 sm:-right-7 lg:-right-8 -translate-y-1/2 flex flex-col gap-[6.5px] -z-10 hidden sm:flex">
                  {DOT_GRID_ROWS.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-[7px] items-center">
                      {row.map((dot, cIdx) => (
                        <div
                          key={cIdx}
                          className="w-2.5 h-2.5 flex items-center justify-center shrink-0"
                        >
                          {dot && (
                            <span
                              className="rounded-full bg-[#00D084]"
                              style={{
                                width: `${dot.size * 0.9}px`,
                                height: `${dot.size * 0.9}px`,
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Abraham Cohen Portrait Container - Landscape aspect ratio ~1.32:1 matching Image 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  className="relative w-full aspect-[1.32/1] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl bg-slate-200 group"
                >
                  <Image
                    src="/hero.webp"
                    alt="Abraham Cohen - Strategic Financial Advisor"
                    fill
                    priority
                    sizes="(max-width: 640px) 420px, (max-width: 1024px) 450px, 490px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Dark Navy Service Strip - Perfectly proportioned to fit above the fold on all displays */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="mt-6 sm:mt-7 lg:mt-8 w-full bg-[#051D67] text-white rounded-[20px] sm:rounded-[24px] shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {stripItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="py-3.5 sm:py-4 lg:py-4.5 px-3 sm:px-4 lg:px-5 flex items-center gap-3 sm:gap-4 justify-center md:justify-start hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl bg-transparent text-[#00D084] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 sm:w-8 lg:w-9 h-7 sm:h-8 lg:h-9" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs sm:text-[13px] lg:text-[14px] font-bold text-white group-hover:text-slate-100 leading-tight">
                        {item.line1}
                      </span>
                      <span className="block text-xs sm:text-[13px] lg:text-[14px] font-bold text-white group-hover:text-slate-100 leading-tight">
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
