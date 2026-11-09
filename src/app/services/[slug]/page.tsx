import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Landmark,
  PieChart,
  Compass,
  Users,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "@/data/content";
import ServiceDetailClientCTA from "./ServiceDetailClientCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.isConfirmed).map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug && s.isConfirmed);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Abraham Cohen Consulting`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug && s.isConfirmed);

  if (!service) {
    notFound();
  }

  const serviceIcons: { [key: string]: React.ElementType } = {
    TrendingUp,
    Landmark,
    PieChart,
    Compass,
    Users,
  };

  const IconComp = serviceIcons[service.iconName] || TrendingUp;

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#051D67] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-[#051D67] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#051D67]">{service.title}</span>
        </nav>
      </div>

      {/* 1. Service Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-24">
        <div className="bg-[#EEF7F6]/60 rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#1EA083]/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#051D67] text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-xs">
              <IconComp className="w-4 h-4 text-[#1EA083]" />
              Practice Area {service.number}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#051D67] leading-[1.14] tracking-tight">
              {service.heroHeadline || service.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-700 leading-relaxed">
              {service.heroSubtitle || service.description}
            </p>

            <div className="pt-2">
              <ServiceDetailClientCTA serviceTitle={service.title} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20 lg:space-y-28">
        {/* 2. Service Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
              Strategic Context
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#051D67]">
              Understanding the Commercial Impact
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.introduction}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#051D67] text-white p-8 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold font-heading text-[#1EA083]">
              Advisory Mandate
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every engagement is directed personally by Abraham Cohen, combining deep quantitative financial analytics with pragmatic operational execution.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#1EA083]" />
              <span>Independent & Fiduciary Strategic Focus</span>
            </div>
          </div>
        </section>

        {/* 3. Business Challenges Addressed */}
        {service.challenges && service.challenges.length > 0 && (
          <section className="space-y-8">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
                Challenges We Address
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#051D67] mt-2">
                Common Symptoms of Inefficiency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4 hover:border-red-200 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Key Service Capabilities */}
        {service.capabilities && service.capabilities.length > 0 && (
          <section className="space-y-8">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#051D67] mt-2">
                What We Deliver
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#EEF7F6]/50 border border-slate-200 hover:border-[#1EA083] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1EA083] text-white flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#051D67] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. How Our Approach Works (Process Steps) */}
        {service.processSteps && service.processSteps.length > 0 && (
          <section className="bg-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 space-y-8">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#051D67] mt-2">
                Our Structured Consulting Cadence
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#1EA083] block mb-3">
                      STEP {step.step}
                    </span>
                    <h4 className="text-base font-bold font-heading text-[#051D67] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Potential Business Benefits */}
        {service.benefits && service.benefits.length > 0 && (
          <section className="space-y-8">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
                Measurable Impact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#051D67] mt-2">
                Anticipated Business Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1EA083] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. FAQs for this Service */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="space-y-6">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1EA083] font-heading">
                Advisory Questions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#051D67] mt-2">
                Frequently Asked Regarding This Practice
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#EEF7F6]/40 border border-slate-200"
                >
                  <h4 className="text-base font-bold font-heading text-[#051D67] mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Dedicated Service Consultation CTA */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#051D67] text-white text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-10 w-72 h-72 bg-[#1EA083]/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
            Ready to Explore {service.title} for Your Organization?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Schedule an introductory consultation with Abraham Cohen to discuss your numbers, challenges, and timeline.
          </p>
          <div className="pt-2">
            <ServiceDetailClientCTA serviceTitle={service.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
