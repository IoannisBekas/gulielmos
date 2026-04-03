"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Όλα");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<string | undefined>();

  const filtered = activeCategory === "Όλα"
    ? PRODUCTS
    : PRODUCTS.filter((ic) => ic.category === activeCategory);

  const openContact = (item: string) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#fdfbf5", color: "#1a1a1a" }}>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} artworkTitle={modalItem} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-x-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-5%] left-[-10%] w-[45vw] h-[45vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,0,0,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-[0.28em] uppercase mb-8"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.4)",
                color: "#aa8c2c",
              }}>
              ✦ Η Συλλογή ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold leading-[1.2] mb-6 pt-2"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl" style={{ color: "#111" }}>
              Χειροποίητες
            </span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl mt-1"
              style={{
                background: "linear-gradient(135deg, #8b0000 0%, #c0392b 40%, #8b0000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Αγιογραφίες
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#666" }}
          >
            Κάθε εικόνα είναι μοναδικό χειροποίητο έργο τέχνης, φιλοτεχνημένο με αυγοτέμπερα
            και φύλλα χρυσού 22 καρατίων. Εκφράστε το ενδιαφέρον σας για οποιοδήποτε έργο.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 w-24 h-px mx-auto"
            style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }}
          />
        </div>
      </section>

      {/* ═══════════════ DIVIDER ═══════════════ */}
      <div className="relative py-2">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" style={{ color: "rgba(212,175,55,0.5)" }}>✦</div>
      </div>

      {/* ═══════════════ FILTERS + GALLERY ═══════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <Filter size={16} style={{ color: "#aa8c2c" }} className="mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  background: activeCategory === cat ? "#8b0000" : "transparent",
                  color: activeCategory === cat ? "#fff" : "#888",
                  border: activeCategory === cat
                    ? "1px solid #8b0000"
                    : "1px solid rgba(0,0,0,0.1)",
                  boxShadow: activeCategory === cat ? "0 4px 15px rgba(139,0,0,0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((art, i) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                layout
              >
                <div
                  onClick={() => openContact(art.title)}
                  className="group block relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 w-full text-left"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.5)" }} />

                  {/* Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{
                      background: "rgba(212,175,55,0.15)",
                      border: "1px solid rgba(212,175,55,0.5)",
                      color: "#d4af37",
                      backdropFilter: "blur(8px)",
                    }}>
                    {art.tag}
                  </div>

                  {/* Dimensions badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider"
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      color: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(8px)",
                    }}>
                    {art.dimensions}
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-lg font-bold text-white mb-1">{art.title}</h3>
                    <p className="text-xs text-white/60 mb-3">{art.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm" style={{ color: "#d4af37" }}>{art.price}</span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                        Ενδιαφέρον <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom order note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center p-8 rounded-2xl"
            style={{
              background: "rgba(212,175,55,0.04)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
              <strong style={{ color: "#aa8c2c" }}>Σημείωση:</strong> Όλες οι εικόνες δημιουργούνται
              κατά παραγγελία. Οι τιμές είναι ενδεικτικές και εξαρτώνται από τις διαστάσεις και
              τις ιδιαιτερότητες κάθε έργου. Παρέχεται δυνατότητα κατασκευής σε κάθε μέγεθος.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #0b1d3a 0%, #1a0505 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: "#d4af37" }}>✦ Ειδικές Παραγγελίες ✦</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Δεν βρήκατε αυτό που{" "}
            <span style={{
              background: "linear-gradient(135deg, #d4af37, #f5e17a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>ψάχνατε;</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            Δημιουργούμε αγιογραφίες κατά παραγγελία σε οποιοδήποτε μέγεθος και θέμα επιθυμείτε.
            Επικοινωνήστε μαζί μας για μια δωρεάν εκτίμηση.
          </p>
          <button onClick={() => { setModalItem(undefined); setIsModalOpen(true); }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8b0000, #6b0000)",
              boxShadow: "0 0 40px rgba(139,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
            Ζητήστε Προσφορά <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
