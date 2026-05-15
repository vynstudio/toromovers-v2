import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/site/Header";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toromovers.net"),
  title: {
    default: "Toro Movers | Moving Company in Orlando, Lake Mary & Winter Park FL",
    template: "%s | Toro Movers",
  },
  description:
    "Trusted Central Florida moving company serving Orlando, Lake Mary, and Winter Park. Family-owned, fully insured, bilingual crews. Hourly rates from $85. Free quote: 689-600-2720.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Toro Movers",
    title: "Moving Company in Orlando, Lake Mary & Winter Park FL",
    description:
      "Family-owned movers in Central Florida. Bilingual, fully insured, $85/hr starting. Apartment, home, and commercial moves.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-charcoal">
        <Header />
        <div className="pb-20 lg:pb-0">{children}</div>
        <MobileBottomBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
