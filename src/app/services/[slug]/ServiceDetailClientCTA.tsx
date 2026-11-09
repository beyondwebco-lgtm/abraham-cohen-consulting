"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export default function ServiceDetailClientCTA({ serviceTitle }: { serviceTitle: string }) {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button
        onClick={() => openBookingModal(serviceTitle)}
        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1EA083] hover:bg-[#167a64] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>Schedule Strategy Session</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <a
        href={`https://wa.me/918617745583?text=${encodeURIComponent(
          `Hello Abraham Cohen Consulting, I am interested in inquiring about ${serviceTitle}.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-white/20"
      >
        <MessageSquare className="w-4 h-4 text-[#1EA083]" />
        <span>Ask via WhatsApp</span>
      </a>
    </div>
  );
}
