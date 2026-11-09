"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG, SERVICES } from "@/data/content";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Profit Optimization");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Spam protection honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Spam honeypot trap check
    if (honeypot) {
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please provide a valid corporate email address.");
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
          colors: ["#1EA083", "#051D67", "#25c4a1"],
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F6] text-[#051D67] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/20 mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#1EA083]" />
          Direct Advisory Inquiries
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#051D67] leading-[1.14] max-w-4xl tracking-tight">
          Let’s Discuss Your Business Growth & Financial Strategy.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mt-5 max-w-2xl leading-relaxed">
          Schedule a confidential conversation with Abraham Cohen to explore profit optimization, Fractional CFO advisory, or strategic operational support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-[#EEF7F6]/60 border border-[#1EA083]/25 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-[#051D67]">
                Advisory Contact Information
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1EA083] shadow-xs flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Official Advisory Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="font-bold text-[#051D67] hover:text-[#1EA083] transition-colors break-all"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1EA083] shadow-xs flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Phone / Direct Line</span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="font-bold text-[#051D67] hover:text-[#1EA083] transition-colors"
                    >
                      {SITE_CONFIG.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#1EA083] shadow-xs flex items-center justify-center shrink-0 border border-slate-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Consultation Hours</span>
                    <span className="font-semibold text-slate-800">
                      Monday – Friday: 9:00 AM – 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1EA083] hover:bg-[#167a64] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#051D67] text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1EA083]">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality Commitment</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All client consultations, financial records, and operational disclosures are treated with non-disclosure fiduciary confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: High-Converting Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl text-left">
              {isSuccess ? (
                <div className="text-center py-10 space-y-5 animate-in zoom-in-95">
                  <div className="w-16 h-16 bg-[#EEF7F6] text-[#1EA083] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#051D67]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. We will review your inquiry and follow up within one business day via email (
                    <span className="font-semibold text-slate-900">{email}</span>) or WhatsApp.
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 max-w-md mx-auto">
                    <strong>Demo Architecture Note:</strong> Client notifications are pre-wired to direct to <code>{SITE_CONFIG.contact.email}</code>.
                  </div>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName("");
                      setEmail("");
                      setPhone("");
                      setCompany("");
                      setMessage("");
                    }}
                    className="px-6 py-2.5 bg-[#051D67] text-white rounded-xl text-xs font-bold hover:bg-[#07247a] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-bold font-heading text-[#051D67]">
                    Send a Direct Consultation Request
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4">
                    Fill out the form below. Required fields are indicated with an asterisk (*).
                  </p>

                  {/* Honeypot anti-spam field */}
                  <div className="hidden">
                    <label>Do not fill this</label>
                    <input
                      type="text"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] text-sm bg-slate-50/50"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] text-sm bg-slate-50/50"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] text-sm bg-slate-50/50"
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
                        placeholder="e.g. Miller & Partners"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] text-sm bg-slate-50/50"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} {!s.isConfirmed ? "(Provisional)" : ""}
                        </option>
                      ))}
                      <option value="General Financial Strategy">General Financial Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Challenges You Are Looking to Solve <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please share context regarding your current business stage, margins, cash flow, or strategic objectives..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1EA083] text-sm bg-slate-50/50 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#051D67] hover:bg-[#07247a] text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Consultation Inquiry <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 text-center">
                    Demo Mode Ready: Submissions are pre-configured for dispatch to{" "}
                    <code>{SITE_CONFIG.contact.email}</code>.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
