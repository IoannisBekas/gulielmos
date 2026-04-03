"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkTitle?: string;
}

export function ContactModal({ isOpen, onClose, artworkTitle }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl overflow-hidden text-center"
            style={{
              background: "#fff",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(212,175,55,0.2)",
            }}
          >
            {/* Gold top bar */}
            <div className="h-1" style={{ background: "linear-gradient(to right, #8b0000, #d4af37, #8b0000)" }} />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full transition-colors hover:bg-black/5"
              style={{ color: "#999" }}
              aria-label="Κλείσιμο"
            >
              <X size={18} />
            </button>

            <div className="p-8 flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ background: "linear-gradient(135deg, #fdfbf7, #f4ecd8)", border: "1px solid #e5e0d5" }}
              >
                <Phone size={28} style={{ color: "#8b0000" }} />
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: "#111" }}>
                Επικοινωνήστε Μαζί μας
              </h3>
              
              {artworkTitle && (
                <p className="text-sm mb-6" style={{ color: "#888" }}>
                  Για το έργο: <span className="font-medium" style={{ color: "#8b0000" }}>{artworkTitle}</span>
                </p>
              )}
              {!artworkTitle && (
                <p className="text-sm mb-6" style={{ color: "#888" }}>
                  Για περισσότερες πληροφορίες ή παραγγελίες, καλέστε μας.
                </p>
              )}

              <a
                href="tel:+302104297090"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-lg font-bold text-base tracking-wider text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #8b0000, #6b0000)",
                  boxShadow: "0 4px 15px rgba(139,0,0,0.3)",
                }}
              >
                <Phone size={18} />
                210 429 7090
              </a>
              
              <p className="mt-6 text-xs" style={{ color: "#aaa" }}>
                Δευτέρα - Παρασκευή: 09:00 - 17:00
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
