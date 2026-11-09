import React from "react";
import Link from "next/link";
import { Metadata } from "next";
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
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/data/content";

export const metadata: Metadata = {
  title: "Strategic Consulting Services",
  description:
    "Explore our core financial advisory capabilities: Profit Optimization, Fractional CFO Services, Financial Consulting, Business Strategy, and Leadership Training.",
};

export default function ServicesPage() {
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
    <div className="pt-32 pb-24 bg-white">
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F6] text-[#051D67] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/20 mb-4">
          <Briefcase className="w-3.5 h-3.5 text-[#1EA083]" />
          Our Capabilities
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#051D67] leading-[1.15] max-w-4xl tracking-tight">
          Specialized Financial & Operational Advisory for Scalable Growth.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mt-5 max-w-2xl leading-relaxed">
          From diagnosing margin leaks to embedding C-suite financial leadership, our services deliver the clarity and executive rigor needed to unlock sustainable business value.
        </p>
      </div>

      {/* Confirmed Services Detailed Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold font-heading text-[#051D67]">
            Core Confirmed Advisory Practices
          </h2>
          <p className="text-sm text-slate-500">
            Dedicated consulting engagements led directly by Abraham Cohen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.filter((s) => s.isConfirmed).map((service) => {
            const Icon = serviceIcons[service.iconName] || TrendingUp;

            return (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-[#EEF7F6]/50 border border-slate-200/80 hover:border-[#1EA083] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#1EA083]">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#1EA083] shadow-xs flex items-center justify-center group-hover:bg-[#1EA083] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-[#051D67] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  {service.benefits && (
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1EA083] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-200/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#051D67] group-hover:text-[#1EA083] transition-colors"
                  >
                    <span>View Practice Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Provisional Services Notice */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold font-heading text-[#051D67] mb-2">
              Provisional Capabilities (Under Client Confirmation)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-2xl">
              The following complementary capabilities are configured provisionally. Inquiries can be discussed directly during an initial strategy session.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SERVICES.filter((s) => !s.isConfirmed).map((prov) => (
                <div key={prov.id} className="p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-mono font-bold text-amber-600 block mb-1">
                    {prov.number} • Provisional
                  </span>
                  <h4 className="text-sm font-bold text-[#051D67] mb-1">{prov.title}</h4>
                  <p className="text-xs text-slate-500">{prov.description.replace(" (Provisional — confirm with client)", "")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
