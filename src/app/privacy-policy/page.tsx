import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Abraham Cohen Consulting",
  description: "Privacy Policy and data protection commitments for Abraham Cohen Consulting.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-left space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF7F6] text-[#051D67] text-xs font-bold uppercase tracking-widest border border-[#1EA083]/20">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1EA083]" />
          Legal & Compliance
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#051D67]">
          Privacy Policy
        </h1>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-800">
          <strong>Draft Document for Client Review:</strong> This document represents a standard corporate privacy framework. Specific legal jurisdiction, registration numbers, and statutory statutory references will be finalized upon formal corporate review.
        </div>

        <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200 pt-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              1. Information We Collect
            </h2>
            <p>
              When you submit a consultation request or communicate with Abraham Cohen Consulting, we may collect personal information including your full name, business email address, phone/WhatsApp number, company name, and details regarding your business inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Respond to your direct strategy consultation inquiries.</li>
              <li>Evaluate engagement fit and prepare customized advisory proposals.</li>
              <li>Provide ongoing advisory communications and scheduled review sessions.</li>
              <li>Maintain internal business records and fiduciary compliance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              3. Strict Confidentiality
            </h2>
            <p>
              Abraham Cohen Consulting adheres to strict non-disclosure principles. We do not sell, rent, or trade your personal or corporate financial information with any third parties or marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              4. Data Security
            </h2>
            <p>
              We deploy commercially reasonable administrative, technical, and physical safeguards to protect all submitted data against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#051D67]">
              5. Contacting Us Regarding Privacy
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your data, you may reach out directly to:
            </p>
            <p className="font-semibold text-[#051D67]">
              Email: {SITE_CONFIG.contact.email} <br />
              WhatsApp / Phone: {SITE_CONFIG.contact.displayPhone}
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
