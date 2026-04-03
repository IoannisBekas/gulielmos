"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Palette, Church, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

import workshopImg from "../../../public/workshop.png";
import pantocratorImg from "../../../public/pantocrator.png";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const MILESTONES = [
  { year: "1961", text: "Γεννήθηκε στον Πειραιά, σε οικογένεια με βαθιές καλλιτεχνικές ρίζες." },
  { year: "1966", text: "Από μόλις 5 ετών εμφανίζει έντονη κλίση στη ζωγραφική και το σχέδιο." },
  { year: "1972", text: "Ξεκινά να εργάζεται με λαδομπογιές, εμβαθύνοντας στις τεχνικές της ζωγραφικής." },
  { year: "1980", text: "Πωλεί τις πρώτες του εικόνες και αρχίζει να χτίζει τη φήμη του ως αγιογράφος." },
  { year: "1987", text: "Ξεκινά την επαγγελματική του πορεία ως αγιογράφος, αφιερώνοντας πλήρως τη ζωή του στην ιερή τέχνη." },
  { year: "Σήμερα", text: "Με πάνω από 35 χρόνια εμπειρίας, συνεχίζει να δημιουργεί στο εργαστήριό του στον Πειραιά." },
];

const SERVICES = [
  {
    icon: Church,
    title: "Εικονογράφηση Ναών",
    desc: "Ολοκληρωμένη αγιογράφηση εσωτερικών χώρων ιερών ναών, ακολουθώντας αυστηρά την παραδοσιακή βυζαντινή τεχνοτροπία.",
  },
  {
    icon: Palette,
    title: "Εικόνες κατά Παραγγελία",
    desc: "Χειροποίητες εικόνες σε κάθε μέγεθος, φιλοτεχνημένες με αυγοτέμπερα και φύλλα χρυσού 22 καρατίων.",
  },
  {
    icon: Sparkles,
    title: "Συντήρηση & Αναπαλαίωση",
    desc: "Εξειδικευμένη συντήρηση και αποκατάσταση παλαιών και σύγχρονων εικόνων, με σεβασμό στο πρωτότυπο έργο.",
  },
  {
    icon: BookOpen,
    title: "Εκτίμηση Έργων",
    desc: "Επαγγελματική εκτίμηση αξίας έργων βυζαντινής αγιογραφίας, για ιδιώτες και ιδρύματα.",
  },
];

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#fdfbf5", color: "#1a1a1a" }}>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background orbs */}
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
              ✦ Ο Αγιογράφος ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold leading-[1.08] mb-6"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl" style={{ color: "#111" }}>
              Ζώρζος
            </span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1"
              style={{
                background: "linear-gradient(135deg, #8b0000 0%, #c0392b 40%, #8b0000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Γουλιέλμος
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#666" }}
          >
            Αγιογράφος · Συντηρητής · Εκτιμητής Βυζαντινής Τέχνης
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

      {/* ═══════════════ BIO SECTION ═══════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Image */}
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, #d4af37 0%, transparent 70%)" }} />
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 0 0 1px rgba(212,175,55,0.3), 0 25px 60px rgba(0,0,0,0.15), 0 0 40px rgba(212,175,55,0.06)",
                }}>
                <Image
                  src={workshopImg}
                  alt="Εργαστήριο αγιογραφίας Ζώρζου Γουλιέλμου στον Πειραιά"
                  width={700}
                  height={500}
                  className="w-full object-cover aspect-[4/3]"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 40%)" }} />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 px-5 py-3 rounded-2xl"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(212,175,55,0.4)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.12)" }}>
                    <Clock size={18} style={{ color: "#aa8c2c" }} />
                  </div>
                  <div>
                    <div className="text-lg font-serif font-bold" style={{ color: "#8b0000" }}>35+</div>
                    <div className="text-[10px] tracking-wider uppercase" style={{ color: "#999" }}>Χρόνια Εμπειρίας</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#aa8c2c" }}>
                Η Ιστορία μας
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 leading-snug" style={{ color: "#1a1a1a" }}>
                Μια ζωή αφιερωμένη στην{" "}
                <span style={{ color: "#8b0000" }}>ιερή τέχνη</span>
              </h2>

              <div className="space-y-5 text-base leading-relaxed" style={{ color: "#555" }}>
                <p>
                  Ο <strong style={{ color: "#333" }}>Ζώρζος Γουλιέλμος</strong> γεννήθηκε στον Πειραιά
                  το 1961, σε μια οικογένεια με βαθιές καλλιτεχνικές ρίζες. Ο ένας παππούς του ήταν ποιητής,
                  πεζογράφος και αρθρογράφος, ενώ ο άλλος ήταν ζωγράφος και αγιογράφος — κληρονομώντας έτσι
                  μια μοναδική καλλιτεχνική παράδοση που θα καθόριζε τη ζωή του.
                </p>
                <p>
                  Από την ηλικία μόλις 5 ετών εμφάνισε εξαιρετική κλίση στη ζωγραφική. Το 1972, σε ηλικία
                  μόλις 11 ετών, άρχισε να εργάζεται με λαδομπογιές, βαθαίνοντας τη γνώση του στις κλασικές
                  τεχνικές. Η πρώτη του εμπορική επιτυχία ήρθε το 1980, όταν πώλησε τις πρώτες του εικόνες,
                  και από το 1987 δραστηριοποιείται αποκλειστικά ως επαγγελματίας αγιογράφος.
                </p>
                <p>
                  Σήμερα, με περισσότερα από <strong style={{ color: "#333" }}>35 χρόνια εμπειρίας</strong>,
                  διατηρεί το εργαστήριό του στην οδό Πραξιτέλους 161 στον Πειραιά, όπου συνεχίζει να
                  δημιουργεί ακολουθώντας πιστά τον <strong style={{ color: "#333" }}>παραδοσιακό τρόπο
                  αγιογράφησης</strong> — χρησιμοποιώντας αυγοτέμπερα, φυσικές χρωστικές και φύλλα χρυσού
                  22 καρατίων, όπως ακριβώς οι Βυζαντινοί δάσκαλοι πριν από αιώνες.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-widest uppercase rounded-full text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #8b0000, #6b0000)",
                    boxShadow: "0 4px 20px rgba(139,0,0,0.3)",
                  }}>
                  Επικοινωνία <ArrowRight size={15} />
                </button>
                <Link href="/shop"
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#d4af37]/10"
                  style={{ border: "1px solid rgba(212,175,55,0.5)", color: "#aa8c2c" }}>
                  Δείτε τα Έργα
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DIVIDER ═══════════════ */}
      <div className="relative py-2">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" style={{ color: "rgba(212,175,55,0.5)" }}>✦</div>
      </div>

      {/* ═══════════════ TIMELINE ═══════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8" style={{ background: "rgba(0,0,0,0.02)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#aa8c2c" }}>Χρονολόγιο</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1a1a1a" }}>
              Σταθμοί πορείας
            </h2>
            <div className="mt-5 w-16 h-px mx-auto" style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), transparent)" }} />

            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 sm:gap-0 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5 z-10"
                  style={{
                    background: "#d4af37",
                    boxShadow: "0 0 0 4px rgba(212,175,55,0.15), 0 0 12px rgba(212,175,55,0.2)",
                  }} />

                {/* Content */}
                <div className={`pl-14 sm:pl-0 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                }`}>
                  <span className="inline-block text-sm font-serif font-bold px-3 py-1 rounded-full mb-2"
                    style={{
                      background: "rgba(139,0,0,0.08)",
                      color: "#8b0000",
                    }}>
                    {m.year}
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#555" }}>
                    {m.text}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DIVIDER ═══════════════ */}
      <div className="relative py-2">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" style={{ color: "rgba(212,175,55,0.5)" }}>✦</div>
      </div>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#aa8c2c" }}>Υπηρεσίες</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1a1a1a" }}>
              Τι προσφέρουμε
            </h2>
            <div className="mt-5 w-16 h-px mx-auto" style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl p-7 text-center transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(212,175,55,0.15)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(212,175,55,0.08)" }}>
                  <s.icon size={24} style={{ color: "#aa8c2c" }} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-3" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{s.desc}</p>

                {/* Hover gold border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.4)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PHILOSOPHY ═══════════════ */}
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #0b1d3a 0%, #1a0505 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Quote text */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: "#d4af37" }}>
                ✦ Φιλοσοφία ✦
              </p>
              <blockquote className="text-2xl sm:text-3xl font-serif leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
                &ldquo;Η αγιογραφία δεν είναι απλά ζωγραφική. Είναι προσευχή που παίρνει μορφή, πίστη
                που γίνεται χρώμα, παράδοση αιώνων που ζωντανεύει σε κάθε πινελιά.&rdquo;
              </blockquote>
              <p className="text-sm font-semibold tracking-widest" style={{ color: "rgba(212,175,55,0.7)" }}>
                — Ζώρζος Γουλιέλμος
              </p>
            </motion.div>

            {/* Featured small image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 0 0 1px rgba(212,175,55,0.3), 0 20px 50px rgba(0,0,0,0.4)",
                }}>
                <Image
                  src={pantocratorImg}
                  alt="Παντοκράτωρ — Έργο του Ζώρζου Γουλιέλμου"
                  width={320}
                  height={400}
                  className="w-48 sm:w-64 object-cover"
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRADITION ═══════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#aa8c2c" }}>
              Η Τεχνική
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1a1a1a" }}>
              Αυθεντικά υλικά, αιώνια τέχνη
            </h2>
            <div className="mt-5 w-16 h-px mx-auto" style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🥚",
                title: "Αυγοτέμπερα",
                text: "Η αρχαία τεχνική χρήσης κρόκου αυγού ως συνδετικού μέσου, που προσδίδει στα χρώματα εξαιρετική ανθεκτικότητα και βάθος — όπως ακριβώς στις εικόνες που επιβιώνουν εδώ και 1.000 χρόνια.",
              },
              {
                icon: "✨",
                title: "Φύλλο Χρυσού 22Κ",
                text: "Γνήσιο φύλλο χρυσού 22 καρατίων εφαρμόζεται με παραδοσιακή τεχνική στα φωτοστέφανα και τα φόντα, δημιουργώντας τη χαρακτηριστική λάμψη της βυζαντινής εικόνας.",
              },
              {
                icon: "🪵",
                title: "Ξύλινα Πάνελ",
                text: "Κάθε εικόνα ζωγραφίζεται σε ειδικά προετοιμασμένα ξύλινα πάνελ με επίστρωση γύψου (levkas), εξασφαλίζοντας σταθερότητα και μακροζωία για γενιές.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl"
                style={{
                  background: "rgba(212,175,55,0.03)",
                  border: "1px solid rgba(212,175,55,0.12)",
                }}
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-serif font-bold text-lg mb-3" style={{ color: "#1a1a1a" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #1a0505 0%, #0b1d3a 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: "#d4af37" }}>
            ✦ Επισκεφθείτε μας ✦
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Ελάτε στο{" "}
            <span style={{
              background: "linear-gradient(135deg, #d4af37, #f5e17a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>εργαστήριό μας</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            Πραξιτέλους 161, Πειραιάς 18535. Επισκεφθείτε το εργαστήριο αγιογραφίας ή επικοινωνήστε
            μαζί μας για ειδικές παραγγελίες, συντηρήσεις ή εκτιμήσεις.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #8b0000, #6b0000)",
                boxShadow: "0 0 40px rgba(139,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}>
              Επικοινωνήστε μαζί μας <ArrowRight size={16} />
            </button>
            <a href="tel:2104297090"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(212,175,55,0.5)",
                color: "#d4af37",
              }}>
              210 429 7090
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
