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

// Financial Consulting - Calculator with Screen & 6 Filled Keys + Enter Key (Exact Match to calc_zoom.png)
function FinancialConsultingIcon({ className }: { className?: string }) {
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
      {/* Rounded Calculator Body */}
      <rect x="4.5" y="2.5" width="15" height="19.5" rx="3.5" />
      {/* Top Display Screen Line */}
      <path d="M7 6.8 H17" />
      {/* Row 1 Keys (3 filled rounded squares) */}
      <rect x="7.2" y="9.8" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      <rect x="10.9" y="9.8" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      <rect x="14.6" y="9.8" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      {/* Row 2 Keys */}
      <rect x="7.2" y="13" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      <rect x="10.9" y="13" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      {/* Row 3 Keys */}
      <rect x="7.2" y="16.2" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      <rect x="10.9" y="16.2" width="2.2" height="2" rx="0.4" fill="#00D084" stroke="none" />
      {/* Enter Key on Right spanning Row 2-3 */}
      <path
        d="M14.6 13.2 H16.8 V18.2 H14.6 V16.4"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}

// Strategic Planning - Concentric Bullseye Target with Arrow (Exact Match to strat_zoom.png)
function StrategicPlanningIcon({ className }: { className?: string }) {
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
      {/* Outer target ring with entrance gap */}
      <path d="M18.8 8.5 A8.5 8.5 0 1 0 15.5 19.8 A8.5 8.5 0 0 0 19.5 13" />
      {/* Middle target ring with entrance gap */}
      <path d="M15.8 9.5 A5.2 5.2 0 1 0 14 16.5 A5.2 5.2 0 0 0 16.2 13" />
      {/* Bullseye center ring */}
      <circle cx="11" cy="13" r="2.2" />
      {/* Arrow shaft hitting center from top-right */}
      <path d="M12.5 11.5 L20.5 3.5" />
      {/* Arrow tail fletching feathers */}
      <path d="M17 3.5 L20.5 3.5 L20.5 7" />
      <path d="M18.5 2.5 L21.5 2.5 L21.5 5.5" />
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
                <StrategicBadgeIcon className="w-4 h-4 shrink-0" />
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
                {/* Halftone Emerald Dot Grid Matrix on the Right (14 rows x 4 cols, exact match to media_1794312742109.png) */}
                <div className="absolute top-1/2 -right-5 sm:-right-7 lg:-right-8 -translate-y-1/2 flex flex-col gap-[7px] -z-10 hidden sm:flex">
                  {DOT_GRID_ROWS.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-[8px] items-center">
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
                    className="p-3.5 sm:p-4 lg:p-4.5 flex items-center gap-3 sm:gap-3.5 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-transparent text-[#00D084] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 sm:w-7.5 h-7 sm:h-7.5 stroke-[2.2]" />
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
