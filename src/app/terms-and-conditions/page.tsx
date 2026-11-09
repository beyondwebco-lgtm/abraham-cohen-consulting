import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Abraham Cohen Consulting",
  description: "Terms and conditions governing consulting advisory and website use.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-left space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF7F6] text-[#051D67] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/20">
          <FileText className="w-3.5 h-3.5 text-[#1EA083]" />
          Engagement Framework
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#051D67]">
          Terms & Conditions
        </h1>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-800">
          <strong>Draft Document for Client Review:</strong> The terms outlined below represent standard consulting parameters and will be supplemented by formal engagement letters (Statement of Work) signed prior to active consulting engagements.
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200 pt-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              1. Nature of Advisory Services
            </h2>
            <p>
              Abraham Cohen Consulting provides business consulting, financial analysis, Fractional CFO advisory, and operational strategy. All guidance is based on management-supplied figures and assumptions. Consulting advice does not constitute statutory audit, legal opinion, or guaranteed investment return.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              2. Independent Evaluation
            </h2>
            <p>
              Clients are advised to consult their certified public accountants and legal counsel for statutory compliance, tax filings, and legal agreements. We provide strategic managerial insight to support executive decision-making.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              3. Intellectual Property
            </h2>
            <p>
              All proprietary consulting frameworks, models, assessment tools, and website materials remain the intellectual property of Abraham Cohen Consulting unless expressly transferred under a bilateral contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              4. Inquiries & Advisory Agreements
            </h2>
            <p>
              Submitting an enquiry via this website initiates a preliminary discussion but does not create an official client-advisor retainer until a formal Statement of Work (SOW) is executed by both parties.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#051D67] hover:text-[#1EA083] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
