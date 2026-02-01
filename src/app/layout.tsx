import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shopify ROI Calculator - Find Apps That Actually Pay For Themselves",
  description: "Stop wasting money on Shopify apps. Answer 5 questions and get a personalized ROI analysis to make smarter app investment decisions.",
  keywords: ["Shopify", "ROI Calculator", "Shopify Apps", "E-commerce", "App ROI"],
  authors: [{ name: "Shopify ROI Calculator" }],
  openGraph: {
    title: "Shopify ROI Calculator",
    description: "Find out if your next Shopify app will actually pay for itself",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
