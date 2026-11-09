import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#051D67",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abrahamcohenconsulting.com"),
  title: {
    default: "Abraham Cohen Consulting | Strategic Financial Advisory & Growth",
    template: "%s | Abraham Cohen Consulting",
  },
  description:
    "Fractional CFO services, profit optimization, and strategic business consulting to help organizations understand their numbers, improve profitability, and achieve sustainable growth.",
  keywords: [
    "Financial Advisory",
    "Fractional CFO",
    "Profit Optimization",
    "Business Consulting",
    "Strategic Growth",
    "Abraham Cohen",
  ],
  authors: [{ name: "Abraham Cohen Consulting" }],
  creator: "Abraham Cohen Consulting",
  icons: {
    icon: "/logo-navy-badge.png",
    apple: "/logo-navy-badge.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abrahamcohenconsulting.com",
    siteName: "Abraham Cohen Consulting",
    title: "Abraham Cohen Consulting | Smarter Financial Strategy. Stronger Business Growth.",
    description:
      "Fractional CFO services, profit optimization, and strategic business consulting to help organizations understand their numbers, improve profitability, and achieve sustainable growth.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Abraham Cohen Consulting",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#1EA083] selection:text-white bg-white text-[#1A1A1A]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
