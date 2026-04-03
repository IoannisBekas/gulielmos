import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulielmos | Χειροποίητες Βυζαντινές Αγιογραφίες",
  description: "Υψηλής αισθητικής χειροποίητες βυζαντινές αγιογραφίες με αυγοτέμπερα και φύλλα χρυσού.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${inter.variable} ${playfair.variable} h-full antialiased transition-colors`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" style={{ background: "#fdfbf5" }}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
