import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wunderwerks | Neighborhood Brewery on Wells Street",
  description:
    "Fort Wayne neighborhood brewery at 1515 Wells Street — traditional lagers, hop-forward ales, and small-batch experimental beers in a restored historic brick building.",
  metadataBase: new URL("https://wunderwerks.space"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Wunderwerks | Neighborhood Brewery on Wells Street",
    description:
      "Fort Wayne neighborhood brewery at 1515 Wells Street — traditional lagers, hop-forward ales, and small-batch experimental beers in a restored historic brick building.",
    url: "https://wunderwerks.space",
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
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand text-gunmetal">{children}</body>
    </html>
  );
}
