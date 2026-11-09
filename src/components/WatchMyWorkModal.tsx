"use client";

import React, { useEffect } from "react";
import { X, Play, CheckCircle2, TrendingUp, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function WatchMyWorkModal({ isOpen, onClose }: Props) {
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051D67]/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#051D67] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#00D084] text-[#051D67] flex items-center justify-center font-bold">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D084]">
                Advisory Methodology
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                How We Deliver Financial Clarity
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Executive Strategy Overview Card */}
          <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#00D084]/20 space-y-3">
            <h4 className="text-base font-bold font-heading text-[#051D67] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#00D084]" /> Strategic Financial Leadership in Action
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Abraham Cohen Consulting partners with mid-market businesses to transition from retrospective bookkeeping to forward-looking commercial financial architecture.
            </p>
          </div>

          {/* Three Key Execution Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#D6F5EB] text-[#00A86B] flex items-center justify-center mb-3 font-bold text-xs">
                01
              </div>
              <h5 className="text-sm font-bold text-[#051D67] mb-1">Diagnostic Audit</h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                Deconstructing gross and net margins by customer, service tier, and operational unit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#D6F5EB] text-[#00A86B] flex items-center justify-center mb-3 font-bold text-xs">
                02
              </div>
              <h5 className="text-sm font-bold text-[#051D67] mb-1">13-Week Cash Model</h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                Deploying predictable rolling liquidity governance that eliminates working capital shocks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#D6F5EB] text-[#00A86B] flex items-center justify-center mb-3 font-bold text-xs">
                03
              </div>
              <h5 className="text-sm font-bold text-[#051D67] mb-1">Executive Alignment</h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                Embedding operational discipline, pricing integrity, and quarterly executive reviews.
              </p>
            </div>
          </div>

          {/* Testimonial / Credibility summary */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00D084] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong>Fiduciary Confidentiality:</strong> All client data, financial ledgers, and operational structures are reviewed under comprehensive bilateral non-disclosure agreements.
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <button
              onClick={() => {
                onClose();
                openBookingModal();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#051D67] hover:bg-[#07247a] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
