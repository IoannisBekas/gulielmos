"use client";

import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Όλα");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<string | undefined>();

  const filtered =
    activeCategory === "Όλα"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  const openContact = (item?: string) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="pb-24">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} artworkTitle={modalItem} />

      <section className="page-shell page-hero">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">Η συλλογή</span>
          <h1 className="section-title mt-6 text-6xl text-[#171310] sm:text-7xl">
            Χειροποίητες
            <span className="block text-[#8c1d18]">αγιογραφίες</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#665f56]">
            Κάθε έργο δημιουργείται με παραδοσιακή τεχνική και παρουσιάζεται εδώ
            με πιο καθαρή, ήσυχη δομή. Οι τιμές είναι ενδεικτικές και όλες οι
            παραγγελίες συζητούνται ξεχωριστά.
          </p>
        </motion.div>
      </section>

      <section className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          <span className="detail-pill">
            <Filter size={14} />
            Φίλτρα
          </span>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
              style={{
                background: activeCategory === category ? "#8c1d18" : "rgba(255,250,242,0.65)",
                color: activeCategory === category ? "#fffaf4" : "#3c352e",
                border:
                  activeCategory === category
                    ? "1px solid rgba(140,29,24,0.18)"
                    : "1px solid rgba(120,88,37,0.14)",
                boxShadow:
                  activeCategory === category ? "0 16px 28px rgba(140,29,24,0.16)" : "none",
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              layout
            >
              <ProductCard product={product} onInquiry={openContact} preload={index === 0} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="surface-card rounded-[2rem] p-7">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#b68931]">
              Σημείωση
            </p>
            <p className="mt-4 text-sm leading-8 text-[#665f56]">
              Όλες οι εικόνες δημιουργούνται κατόπιν παραγγελίας. Οι διαστάσεις,
              η χρήση φύλλου χρυσού και οι ιδιαίτερες απαιτήσεις κάθε έργου
              επηρεάζουν το τελικό κόστος και τον χρόνο παράδοσης.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#171310] px-7 py-8 text-[#f7efe2] shadow-[0_22px_60px_rgba(20,14,11,0.16)]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#d8b05b]">
              Ειδικές παραγγελίες
            </p>
            <h2 className="section-title mt-5 text-4xl text-white sm:text-5xl">
              Δεν βρήκατε
              <span className="block text-[#d8b05b]">αυτό που ζητάτε;</span>
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/68">
              Το εργαστήριο αναλαμβάνει έργα σε διαφορετικά θέματα και διαστάσεις,
              πάντα ύστερα από σύντομη συζήτηση για τον χώρο και τον σκοπό του έργου.
            </p>
            <button
              type="button"
              onClick={() => openContact()}
              className="primary-button mt-6"
            >
              Ζητήστε πληροφορίες
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
