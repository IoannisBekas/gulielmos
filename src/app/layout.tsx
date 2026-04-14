import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "greek"],
  display: "swap",
});

const displayFont = EB_Garamond({
  variable: "--font-display",
  subsets: ["latin", "greek"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: "%s | Gulielmos",
  },
  description: SITE.description,
  applicationName: SITE.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
