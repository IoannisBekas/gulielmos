"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkTitle?: string;
}

export function ContactModal({ isOpen, onClose, artworkTitle }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

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
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
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

            <div className="p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-serif font-bold mb-1" style={{ color: "#111" }}>
                    Εκδήλωση Ενδιαφέροντος
                  </h3>
                  {artworkTitle && (
                    <p className="text-sm mb-5" style={{ color: "#888" }}>
                      Για το έργο: <span className="font-medium" style={{ color: "#8b0000" }}>{artworkTitle}</span>
                    </p>
                  )}
                  {!artworkTitle && (
                    <p className="text-sm mb-5" style={{ color: "#888" }}>
                      Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας.
                    </p>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#555" }}>
                        Ονοματεπώνυμο *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2"
                        style={{
                          background: "#f8f6f1",
                          border: "1px solid #e5e0d5",
                          color: "#111",
                        }}
                        placeholder="π.χ. Μαρία Παπαδοπούλου"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#555" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2"
                        style={{
                          background: "#f8f6f1",
                          border: "1px solid #e5e0d5",
                          color: "#111",
                        }}
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#555" }}>
                        Τηλέφωνο
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2"
                        style={{
                          background: "#f8f6f1",
                          border: "1px solid #e5e0d5",
                          color: "#111",
                        }}
                        placeholder="210 4297090"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#555" }}>
                        Μήνυμα
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2 resize-none"
                        style={{
                          background: "#f8f6f1",
                          border: "1px solid #e5e0d5",
                          color: "#111",
                        }}
                        placeholder="Θα ήθελα περισσότερες πληροφορίες..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: "linear-gradient(135deg, #8b0000, #6b0000)",
                        boxShadow: "0 4px 15px rgba(139,0,0,0.3)",
                      }}
                    >
                      <Send size={14} />
                      Αποστολή
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-lg font-serif font-bold mb-2" style={{ color: "#111" }}>
                    Ευχαριστούμε!
                  </h3>
                  <p className="text-sm" style={{ color: "#888" }}>
                    Θα επικοινωνήσουμε μαζί σας σύντομα.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
