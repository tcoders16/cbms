import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CBMS — Commercial Building Mechanical Systems | GTA",
  description:
    "Professional commercial kitchen exhaust, HVAC, and fire suppression solutions designed for safety, performance, and code compliance across the GTA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="bg-[#FBFAF7] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-[#FBFAF7]">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
