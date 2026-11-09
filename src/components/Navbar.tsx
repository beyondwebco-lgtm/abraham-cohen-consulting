"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MessageSquare, ArrowRight, Menu, X } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/content";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Navbar() {
  const pathname = usePathname();
  const { openBookingModal } = useBookingModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Contact Bar - Vibrant Emerald Green with Dark Text */}
      <div
        className={`bg-[#00D084] text-[#051D67] transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-2 px-4 sm:px-8 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold tracking-normal">
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Mail className="w-3 h-3 text-[#051D67]" />
              </div>
              <span className="hidden sm:inline">{SITE_CONFIG.contact.email}</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Phone className="w-3 h-3 text-[#051D67]" />
              </div>
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
          </div>

          <a
            href={SITE_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white text-[#051D67] font-bold rounded-full hover:bg-slate-50 transition-all shadow-xs text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#051D67] fill-current" />
            <span>WhatsApp Me</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? "glass-nav-scrolled py-2.5 sm:py-3 border-slate-200/80 shadow-md"
            : "bg-white py-3.5 sm:py-4 border-slate-100 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 sm:h-12 w-48 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo-dark.png"
                alt="Abraham Cohen Consulting"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-[15px] font-medium">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#00D084] font-semibold"
                      : "text-slate-700 hover:text-[#051D67]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#00D084] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="px-5 py-2.5 rounded-full text-[13px] font-semibold bg-[#051D67] hover:bg-[#07247a] text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#051D67] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-medium">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#D6F5EB]/60 text-[#00A86B] font-semibold"
                        : "text-slate-800 hover:bg-slate-50 hover:text-[#051D67]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="w-full py-3 bg-[#051D67] text-white text-center font-bold text-sm rounded-full hover:bg-[#07247a] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#D6F5EB]/60 text-[#00A86B] border border-[#00D084]/30 text-center font-semibold text-xs rounded-full flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Direct WhatsApp: {SITE_CONFIG.contact.displayPhone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
