"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { ProductCard } from "@/components/ProductCard";
import { SITE } from "@/data/site";
import { FEATURED_PRODUCTS, HERO_PRODUCT } from "@/data/products";

const STUDIO_HIGHLIGHTS = [
  {
    title: "Παραδοσιακή τεχνική",
    text: "Αυγοτέμπερα, φυσικές χρωστικές και φύλλο χρυσού 22Κ, με σεβασμό στη βυζαντινή παράδοση.",
  },
  {
    title: "Έργα κατόπιν παραγγελίας",
    text: "Κάθε αγιογραφία μπορεί να προσαρμοστεί σε θέμα, διάσταση και χώρο τοποθέτησης.",
  },
  {
    title: "Συντήρηση και εκτίμηση",
    text: "Το εργαστήριο αναλαμβάνει επιλεγμένες συντηρήσεις και εκτιμήσεις εικόνων και έργων τέχνης.",
  },
] as const;

const COMMISSION_STEPS = [
  {
    value: "01",
    title: "Συζήτηση και κατεύθυνση",
    text: "Ορίζουμε το θέμα, τις διαστάσεις και την αισθητική παρουσία του έργου.",
  },
  {
    value: "02",
    title: "Υλικά και τεχνική",
    text: "Επιλογή ξύλινου πάνελ, αυγοτέμπερας και φύλλου χρυσού σύμφωνα με το ζητούμενο αποτέλεσμα.",
  },
  {
    value: "03",
    title: "Παράδοση στο εργαστήριο",
    text: "Παραλαβή από τον Πειραιά ή συνεννόηση για αποστολή, με καθοδήγηση για την τοποθέτηση.",
  },
] as const;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<string | undefined>();

  const openContact = (item?: string) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden pb-24">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} artworkTitle={modalItem} />

      <section className="page-shell page-hero">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-eyebrow">Ατελιέ βυζαντινής αγιογραφίας</span>
            <h1 className="section-title mt-7 text-6xl text-[#171310] sm:text-7xl xl:text-[5.5rem]">
              Χειροποίητες
              <span className="block text-[#8c1d18]">βυζαντινές αγιογραφίες</span>
            </h1>
            <p className="section-description mt-8">
              {SITE.description} Κάθε έργο δημιουργείται στο εργαστήριο του Πειραιά,
              με ήρεμη προσέγγιση, αυθεντικά υλικά και ακριβή φροντίδα στην εικόνα,
              το χρυσό και τη συνολική παρουσία του έργου.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="primary-button">
                Δείτε τη συλλογή
                <ArrowRight size={16} />
              </Link>
              <button type="button" onClick={() => openContact()} className="secondary-button">
                Συζητήστε μια παραγγελία
              </button>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {SITE.stats.map((item) => (
                <div key={item.label} className="surface-card rounded-[1.6rem] px-5 py-5">
                  <p className="font-serif text-3xl font-semibold text-[#8c1d18]">{item.value}</p>
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#7d705f]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border"
              style={{ borderColor: "rgba(182,137,49,0.18)" }}
            />
            <div className="surface-card-strong relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src={HERO_PRODUCT.image}
                  alt={HERO_PRODUCT.title}
                  width={900}
                  height={1100}
                  preload
                  className="h-auto w-full"
                />
              </div>
              <div className="flex flex-col gap-4 px-3 pb-3 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#b68931]">
                    {HERO_PRODUCT.tag}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#171310]">
                    {HERO_PRODUCT.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#665f56]">
                    {HERO_PRODUCT.subtitle} · {HERO_PRODUCT.dimensions}
                  </p>
                </div>
                <span className="detail-pill">{HERO_PRODUCT.price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-4 lg:grid-cols-3">
          {STUDIO_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface-card rounded-[1.75rem] p-6"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#b68931]">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#171310]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#665f56]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24 py-24" style={{ background: "rgba(237,227,210,0.58)" }}>
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12 max-w-3xl"
          >
            <span className="section-eyebrow">Επιλεγμένα έργα</span>
            <h2 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
              Η συλλογή
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#665f56]">
              Επιλεγμένες αγιογραφίες από το εργαστήριο, παρουσιασμένες με καθαρότερη
              δομή και περισσότερη έμφαση στο ίδιο το έργο.
            </p>
          </motion.div>

          <div className="grid gap-6 xl:grid-cols-3">
            {FEATURED_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ProductCard
                  product={product}
                  onInquiry={openContact}
                  preload={index === 0}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/shop" className="secondary-button">
              Όλη η συλλογή
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell mt-24 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="surface-card rounded-[2rem] p-8 sm:p-10">
          <span className="section-eyebrow">Ειδικές παραγγελίες</span>
          <h2 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
            Μια ήσυχη και
            <span className="block text-[#8c1d18]">προσεκτική διαδικασία</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#665f56]">
            Για οικογένειες, ναούς και ιδρύματα, το εργαστήριο αναλαμβάνει έργα
            κατόπιν παραγγελίας με σαφή συζήτηση για το θέμα, το μέγεθος και τα
            υλικά που ταιριάζουν σε κάθε χώρο.
          </p>

          <div className="mt-8 space-y-5">
            {COMMISSION_STEPS.map((step) => (
              <div
                key={step.value}
                className="flex gap-4 rounded-[1.5rem] border p-5"
                style={{ borderColor: "rgba(120,88,37,0.12)", background: "rgba(255,255,255,0.55)" }}
              >
                <div className="font-serif text-3xl text-[#b68931]">{step.value}</div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#171310]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#665f56]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#171310] px-8 py-10 text-[#f7efe2] shadow-[0_22px_60px_rgba(20,14,11,0.16)] sm:px-10">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[#d8b05b]">
            Εργαστήριο Πειραιά
          </p>
          <h2 className="section-title mt-5 text-5xl text-white sm:text-6xl">
            Θέλετε ένα έργο
            <span className="block text-[#d8b05b]">για τον δικό σας χώρο;</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-white/68">
            Επικοινωνήστε για να συζητήσουμε μια ειδική παραγγελία, συντήρηση ή
            εκτίμηση έργου. Η πρώτη επικοινωνία γίνεται απλά και χωρίς περιττό
            θόρυβο.
          </p>

          <div className="mt-8 grid gap-3">
            <button type="button" onClick={() => openContact()} className="primary-button w-full">
              Επικοινωνήστε μαζί μας
            </button>
            <a href={SITE.phoneHref} className="secondary-button w-full !border-white/20 !bg-white/8 !text-white">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
