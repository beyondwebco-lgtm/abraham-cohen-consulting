"use client";

import React, { useState, useEffect } from "react";
import { useBookingModal } from "@/context/BookingModalContext";
import { X, CheckCircle2, Send, MessageSquare, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG, SERVICES } from "@/data/content";

export default function BookingModal() {
  const { isOpen, preselectedService, closeBookingModal } = useBookingModal();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [customService, setCustomService] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const activeService = customService ?? (preselectedService || "Profit Optimization");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please provide a valid business email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#1EA083", "#051D67", "#25c4a1", "#EEF7F6"],
        });
      } catch {
        // graceful fallback
      }
    }, 700);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setCustomService(null);
    setMessage("");
    setErrorMessage("");
    closeBookingModal();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051D67]/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="bg-[#051D67] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1EA083]/20 text-[#25c4a1] border border-[#1EA083]/30 mb-1">
              <Calendar className="w-3.5 h-3.5" /> Strategy Consultation
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold font-heading text-white">
              Book Your Free Strategy Session
            </h2>
          </div>
          <button
            onClick={resetForm}
            aria-label="Close dialog"
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#EEF7F6] text-[#1EA083] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#051D67]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. We will review your business requirements and contact you via email at{" "}
                  <span className="font-semibold text-slate-900">{email}</span> or WhatsApp within 24 business hours.
                </p>
              </div>

              {/* Direct WhatsApp Quick Connect */}
              <div className="p-4 bg-[#EEF7F6] rounded-2xl border border-[#1EA083]/20 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1EA083] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1EA083]">Instant Connect</p>
                    <p className="text-sm font-medium text-slate-900">Need immediate assistance?</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/918617745583?text=${encodeURIComponent(
                    `Hello Abraham Cohen Consulting, I just submitted a consultation request for ${fullName} (${company || "Company"}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1EA083] text-white text-xs font-semibold rounded-xl hover:bg-[#167a64] transition-colors"
                >
                  Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#051D67] text-white rounded-xl text-sm font-semibold hover:bg-[#09267e] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600">
                Share a few details below and our advisory team will arrange a 30-minute confidential discovery session.
              </p>

              {errorMessage && (
                <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-xl">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 8617745583"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Global Corp"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={activeService}
                  onChange={(e) => setCustomService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] focus:border-transparent text-sm bg-slate-50/50"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} {!s.isConfirmed ? "(Provisional)" : ""}
                    </option>
                  ))}
                  <option value="General Strategic Advisory">General Strategic Financial Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Note or Specific Challenge (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your current business growth or financial goals..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] focus:border-transparent text-sm bg-slate-50/50 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-5 bg-[#051D67] hover:bg-[#07247a] text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Scheduling Consultation...
                    </>
                  ) : (
                    <>
                      Confirm Consultation Booking <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto py-3 px-4 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-xl text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1EA083]" />
                <span>Confidentiality guaranteed. Direct contact: {SITE_CONFIG.contact.email}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
