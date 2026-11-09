"use client";

import React from "react";
import { BookingModalProvider } from "@/context/BookingModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingModalProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BookingModal />
    </BookingModalProvider>
  );
}
