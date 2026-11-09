"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Landmark,
  PieChart,
  Compass,
  Users,
  ArrowDownUp,
  Target,
  BarChart3,
  ArrowRight,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { SERVICES } from "@/data/content";
import { useBookingModal } from "@/context/BookingModalContext";

export default function ServicesSection() {
  const { openBookingModal } = useBookingModal();

  const serviceIcons: { [key: string]: React.ElementType } = {
    TrendingUp,
    Landmark,
    PieChart,
    Compass,
    Users,
    ArrowDownUp,
    Target,
    BarChart3,
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading mb-3">
            <Briefcase className="w-4 h-4" />
            OUR EXPERTISE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#051D67] leading-[1.18] tracking-tight">
            Strategic Solutions Built Around Your Business.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From financial clarity to operational excellence, our consulting services are designed to support smarter decisions and sustainable business performance.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComp = serviceIcons[service.iconName] || TrendingUp;
            const isPaleMint = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`group rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isPaleMint
                    ? "bg-[#EEF7F6]/60 border-[#1EA083]/20 hover:border-[#1EA083]"
                    : "bg-white border-slate-200 hover:border-[#1EA083] shadow-xs"
                } hover:-translate-y-1.5 hover:shadow-xl`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#1EA083] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#1EA083] shadow-xs border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#1EA083] group-hover:text-white">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#051D67] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Provisional Badge if applicable */}
                  {!service.isConfirmed && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-2">
                      <HelpCircle className="w-3 h-3" /> Provisional Offering
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description.replace(" (Provisional — confirm with client)", "")}
                  </p>
                </div>

                {/* Bottom Link or Consultation trigger */}
                <div className="pt-4 border-t border-slate-200/50">
                  {service.isConfirmed ? (
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#051D67] group-hover:text-[#1EA083] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => openBookingModal(service.title)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#1EA083] transition-colors cursor-pointer"
                    >
                      <span>Inquire With Advisor</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
