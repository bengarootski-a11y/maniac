import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maniac Productions",
  description:
    "Film and television from Maniac Productions, founded by Michael Seitzman.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {/* Subtle film-grain / noise overlay (decorative) */}
        <div className="grain-overlay" aria-hidden="true" />
        {/* Scroll-driven progress indicator */}
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
