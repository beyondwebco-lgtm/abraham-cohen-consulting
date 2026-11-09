"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageSquare, ArrowUp, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/data/content";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Footer() {
  const { openBookingModal } = useBookingModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#051D67] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1EA083]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-56">
                <Image
                  src="/logo-light.png"
                  alt="Abraham Cohen Consulting"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Strategic financial guidance, Fractional CFO services, and practical business advisory helping organizations turn numbers into confident decisions and sustainable growth.
            </p>
            <div className="pt-1 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1EA083] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1EA083] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.displayPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1EA083] mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#1EA083] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#1EA083] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1EA083] mb-5 font-heading">
              Key Advisory Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {SERVICES.filter((s) => s.isConfirmed).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#1EA083] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EA083]/60 group-hover:bg-[#1EA083] transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Action */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1EA083] mb-2 font-heading">
              Schedule Consultation
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ready to gain full visibility into your margins and cash flow? Connect directly with our strategic team.
            </p>
            <div className="space-y-3 pt-1">
              <button
                onClick={() => openBookingModal()}
                className="w-full py-3 px-4 bg-[#1EA083] hover:bg-[#167a64] text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-2 border border-white/15"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#1EA083]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1EA083]" />
              <span>Verified Direct Advisory Contact</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#1EA083] text-white transition-all text-xs group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
