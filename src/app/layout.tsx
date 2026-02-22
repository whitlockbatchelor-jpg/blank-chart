import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const instrumentSerif = {
  variable: "--font-display",
};

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blank Chart — Where Great Trips Start",
    template: "%s | Blank Chart",
  },
  description:
    "Submit your wildest adventure idea. We'll curate it, refine it, and turn the best ones into real Keel Ridge destinations.",
  metadataBase: new URL("https://blankchart.co"),
  openGraph: {
    title: "Blank Chart — Where Great Trips Start",
    description:
      "The best trips start as someone's wild idea. Submit yours.",
    url: "https://blankchart.co",
    siteName: "Blank Chart",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blank Chart — Where Great Trips Start",
    description:
      "The best trips start as someone's wild idea. Submit yours.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable} font-body antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
