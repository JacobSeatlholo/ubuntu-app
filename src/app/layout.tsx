import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ubuntu Wellness — 21-Day Diabetes Reversal Companion",
  description:
    "Your guided companion for the Ubuntu 21-Day Diabetes & Lifestyle Diseases Self-Management Program: whole food plant-based meal plans, glucose tracking, 21-day journey tracker, shopping list and the full WFPB education library.",
  keywords: [
    "Ubuntu Wellness",
    "diabetes reversal",
    "WFPB",
    "whole food plant-based",
    "21-day program",
    "plant-based diet",
    "type 2 diabetes",
  ],
  authors: [{ name: "Ubuntu Wellness" }],
  openGraph: {
    title: "Ubuntu Wellness — 21-Day Diabetes Reversal Companion",
    description:
      "Track your 21-day whole food plant-based journey: meal plans, glucose log, education and shopping list — based on the official Ubuntu Wellness manual.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e7c8c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
