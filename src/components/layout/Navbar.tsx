"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { href: "/", label: "Αρχική" },
  { href: "/shop", label: "Συλλογή" },
  { href: "/about", label: "Ο αγιογράφος" },
  { href: "/contact", label: "Επικοινωνία" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (!pathname) {
      return false;
    }

    if (href === "/") {
      return pathname === "/" || pathname.endsWith("/gulielmos");
    }

    return pathname === href || pathname.endsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 sm:px-5"
          style={{
            background: scrolled ? "rgba(255,250,242,0.92)" : "rgba(255,250,242,0.78)",
            borderColor: scrolled ? "rgba(120,88,37,0.18)" : "rgba(120,88,37,0.12)",
            boxShadow: scrolled
              ? "0 18px 45px rgba(48,33,13,0.09)"
              : "0 12px 28px rgba(48,33,13,0.05)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Link href="/" className="min-w-0" onClick={() => setIsOpen(false)}>
            <span className="block truncate font-serif text-2xl font-semibold tracking-[0.14em] text-[#1b1714] sm:text-[1.8rem]">
              {SITE.name}
            </span>
            <span className="block truncate text-[0.62rem] uppercase tracking-[0.34em] text-[#b68931] sm:text-[0.68rem]">
              {SITE.tagline}
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: active ? "#8c1d18" : "#3c352e",
                    background: active ? "rgba(182,137,49,0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href={SITE.phoneHref} className="primary-button !px-5 !py-3 !text-[0.72rem]">
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={SITE.phoneHref}
              className="flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                borderColor: "rgba(120,88,37,0.16)",
                background: "rgba(255,250,242,0.72)",
                color: "#8c1d18",
              }}
              aria-label="Τηλέφωνο"
            >
              <Phone size={18} />
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                borderColor: "rgba(120,88,37,0.16)",
                background: "rgba(255,250,242,0.72)",
                color: "#3c352e",
              }}
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -60 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 60 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(20,14,11,0.42)] px-6 pt-28 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-md rounded-[2rem] border bg-[#fff9f1] p-6 shadow-[0_24px_60px_rgba(20,14,11,0.18)]"
              style={{ borderColor: "rgba(120,88,37,0.16)" }}
            >
              <div className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 font-serif text-2xl text-[#1b1714]"
                    style={{
                      background: isActive(link.href) ? "rgba(182,137,49,0.09)" : "transparent",
                    }}
                  >
                    <span>{link.label}</span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#b68931]">go</span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <a href={SITE.phoneHref} className="primary-button w-full">
                  <Phone size={16} />
                  Κλήση στο εργαστήριο
                </a>
                <a href={`mailto:${SITE.email}`} className="secondary-button w-full">
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
