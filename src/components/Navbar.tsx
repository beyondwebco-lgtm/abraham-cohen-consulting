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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#051D67] font-bold rounded-full hover:bg-slate-50 transition-all shadow-xs text-xs border-2 border-[#051D67]"
          >
            {/* WhatsApp Authentic Icon matching reference */}
            <svg
              className="w-3.5 h-3.5 fill-[#051D67] shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
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
