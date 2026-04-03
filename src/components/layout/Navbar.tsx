"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Αρχική" },
  { href: "/shop", label: "Συλλογή" },
  { href: "/about", label: "Ο Αγιογράφος" },
  { href: "/contact", label: "Επικοινωνία" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(253,251,245,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="text-xl font-serif font-bold tracking-[0.18em] transition-colors duration-300"
                style={{ color: "#1a1a1a" }}>
                GULIELMOS
              </span>
              <span className="text-[9px] tracking-[0.32em] uppercase mt-0.5"
                style={{ color: "rgba(170,140,44,0.8)" }}>
                Βυζαντινή Αγιογραφία
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 group"
                  style={{ color: "#444" }}
                >
                  <span className="group-hover:text-[#8b0000] transition-colors duration-300">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: "#d4af37" }} />
                </Link>
              ))}

              <a href="tel:2104297090"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-widest transition-all duration-300 hover:scale-105"
                style={{ background: "#8b0000", color: "#fff", boxShadow: "0 4px 15px rgba(139,0,0,0.3)" }}
              >
                <Phone size={16} />
                210 429 7090
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-4">
              <a href="tel:2104297090"
                className="p-2 rounded-full transition-colors"
                style={{ background: "rgba(139,0,0,0.1)", color: "#8b0000" }}
                aria-label="Τηλέφωνο"
              >
                <Phone size={20} />
              </a>

            {/* Mobile Toggle */}
            <button
              className="p-2 transition-colors"
              style={{ color: "#444" }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Μενού"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(253,251,245,0.98)", backdropFilter: "blur(20px)" }}
          >
            {/* Decorative gold line */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)" }} />

              <div className="flex flex-col items-center gap-10">
                <a href="tel:2104297090"
                  className="flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold tracking-widest transition-all duration-300 shadow-xl"
                  style={{ background: "#8b0000", color: "#fff" }}
                >
                  <Phone size={24} />
                  210 429 7090
                </a>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif font-bold transition-colors duration-300 hover:text-[#8b0000]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
