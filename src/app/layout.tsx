import type { Metadata } from "next";
import { Germania_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const germaniaOne = Germania_One({
  variable: "--font-germania",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wunderwerks | Bavarian Craft Brewery in Fort Wayne",
  description:
    "Bavarian-style lagers on Wells Street, Fort Wayne. Two brewers, low-maintenance taproom, always compliant.",
  metadataBase: new URL("https://wunderwerks.vercel.app"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Wunderwerks | Bavarian Craft Brewery in Fort Wayne",
    description:
      "Bavarian-style lagers on Wells Street, Fort Wayne. Two brewers, low-maintenance taproom, always compliant.",
    url: "https://wunderwerks.vercel.app",
    siteName: "Wunderwerks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${germaniaOne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand text-charcoal">{children}</body>
    </html>
  );
}
