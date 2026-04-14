"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { SITE } from "@/data/site";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkTitle?: string;
}

export function ContactModal({ isOpen, onClose, artworkTitle }: ContactModalProps) {
  const emailSubject = artworkTitle
    ? `Ενδιαφέρον για το έργο: ${artworkTitle}`
    : "Ενδιαφέρον για χειροποίητη αγιογραφία";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(20,14,11,0.62)", backdropFilter: "blur(10px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] text-left"
            style={{
              background: "#fffaf2",
              boxShadow: "0 36px 90px rgba(0,0,0,0.28), 0 0 0 1px rgba(182,137,49,0.18)",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
              style={{ color: "#7b7368" }}
              aria-label="Κλείσιμο"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-10">
              <span className="section-eyebrow mb-5">Άμεση επικοινωνία</span>
              <h3 className="section-title text-4xl text-[#171310] sm:text-5xl">
                Συζητήστε το έργο σας
              </h3>
              <p className="mt-5 text-base leading-8 text-[#665f56]">
                {artworkTitle
                  ? `Εάν σας ενδιαφέρει το έργο «${artworkTitle}», μπορούμε να μιλήσουμε άμεσα για διαστάσεις, υλικά και χρόνο παράδοσης.`
                  : "Για ειδικές παραγγελίες, συντήρηση ή εκτίμηση έργων, μπορείτε να επικοινωνήσετε απευθείας με το εργαστήριο."}
              </p>

              <div className="mt-8 grid gap-3">
                <a href={SITE.phoneHref} className="primary-button w-full">
                  <Phone size={16} />
                  Κλήση στο εργαστήριο
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(emailSubject)}`}
                  className="secondary-button w-full"
                >
                  <Mail size={16} />
                  Στείλτε email
                </a>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button w-full"
                >
                  <MapPin size={16} />
                  Δείτε τον χάρτη
                </a>
              </div>

              <div
                className="mt-8 rounded-[1.5rem] border p-5"
                style={{
                  borderColor: "rgba(120,88,37,0.14)",
                  background: "rgba(255,255,255,0.55)",
                }}
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#b68931]">
                  Ώρες επικοινωνίας
                </p>
                <p className="mt-2 text-sm leading-7 text-[#524b43]">{SITE.hours}</p>
                <p className="mt-1 text-sm leading-7 text-[#524b43]">{SITE.addressShort}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
