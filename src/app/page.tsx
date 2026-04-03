"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Award, Palette, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { ContactModal } from "@/components/ContactModal";

// Static Image imports for perfect Github Pages path resolution
import pantocratorImg from "../../public/pantocrator.png";
import theotokosImg from "../../public/theotokos.png";
import saintGeorgeImg from "../../public/saint_george.png";

const ARTWORKS = [
  {
    title: "Ιησούς Χριστός Παντοκράτωρ",
    subtitle: "Αυγοτέμπερα & Χρυσός 22K",
    price: "από €380",
    tag: "Bestseller",
    src: pantocratorImg,
  },
  {
    title: "Παναγία Γλυκοφιλούσα",
    subtitle: "Βυζαντινή Τεχνοτροπία",
    price: "από €420",
    tag: "Θεομητορική",
    src: theotokosImg,
  },
  {
    title: "Άγιος Γεώργιος",
    subtitle: "Αυγοτέμπερα & Χρυσός 22K",
    price: "από €350",
    tag: "Δεσποτική",
    src: saintGeorgeImg,
  },
];


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<string | undefined>();

  const openContact = (item?: string) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: "#fdfbf5", color: "#1a1a1a" }}>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} artworkTitle={modalItem} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100svh" }}>

        {/* Subtle warm background orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,0,0,0.06) 0%, transparent 70%)" }} />
        </div>

        {/* Top decorative rule */}
        <div className="absolute top-20 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center py-32">

            {/* Left: Text */}
            <div className="text-center lg:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mb-7"
              >
                <span className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-[0.28em] uppercase"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.4)",
                    color: "#aa8c2c",
                  }}>
                  ✦ Χειροποίητα Έργα Τέχνης ✦
                </span>
              </motion.div>

              {/* Title — fixed: smaller sizes + word-break to prevent clipping */}
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold leading-[1.05] mb-6"
                style={{ wordBreak: "break-word", hyphens: "auto" }}
              >
                <span className="block text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem]" style={{ color: "#111" }}>
                  Βυζαντινή
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] mt-1"
                  style={{
                    background: "linear-gradient(135deg, #8b0000 0%, #c0392b 40%, #8b0000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Αγιογραφία
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
                style={{ color: "#555" }}
              >
                Ανακαλύψτε μοναδικά ιερά έργα τέχνης, φτιαγμένα με αυγοτέμπερα και φύλλα χρυσού 22 καρατίων, διατηρώντας αναλλοίωτη την ιερή βυζαντινή παράδοση.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/shop"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold tracking-widest uppercase rounded-full text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #8b0000, #6b0000)",
                    boxShadow: "0 4px 20px rgba(139,0,0,0.3)",
                  }}>
                  Περιήγηση Συλλογής
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#d4af37]/10"
                  style={{ border: "1px solid rgba(212,175,55,0.5)", color: "#aa8c2c" }}>
                  Η Τέχνη Μας
                </Link>

              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.65 }}
                className="mt-12 flex items-center gap-10 justify-center lg:justify-start"
              >
                {[["50+", "Έργα"], ["15+", "Χρόνια"], ["200+", "Πελάτες"]].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-serif font-bold" style={{ color: "#8b0000" }}>{num}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "#999" }}>{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Featured icon image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center items-center flex-1 w-full"
            >
              {/* Warm glow behind */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-25"
                style={{ background: "radial-gradient(circle at center, #d4af37 0%, transparent 65%)" }} />

              <div className="relative group cursor-pointer" style={{ perspective: "1000px" }}>
                <motion.div
                  whileHover={{ rotateY: -4, rotateX: 3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: "0 0 0 1px rgba(212,175,55,0.35), 0 25px 70px rgba(0,0,0,0.18), 0 0 50px rgba(212,175,55,0.08)",
                  }}
                >
                  <Image
                    src={pantocratorImg}
                    alt="Ιησούς Χριστός Παντοκράτωρ"
                    width={500}
                    height={620}
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-cover"
                    priority
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 60%)" }} />
                </motion.div>

                {/* Price badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl text-sm font-bold"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(212,175,55,0.4)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-[10px] tracking-wider block mb-0.5" style={{ color: "#999" }}>από</span>
                  <span style={{ color: "#8b0000" }}>€ 380</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#bbb" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.5), transparent)" }}
          />
        </motion.div>
      </section>

      {/* ═══════════════ DIVIDER ═══════════════ */}
      <div className="relative py-2">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl" style={{ color: "rgba(212,175,55,0.5)" }}>✦</div>
      </div>

      {/* ═══════════════ FEATURED GALLERY ═══════════════ */}
      <section className="relative py-28 px-4 sm:px-8" style={{ background: "#fdfbf5" }}>
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#aa8c2c" }}>Επιλεγμένα Έργα</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1a1a1a" }}>Η Συλλογή μας</h2>
            <div className="mt-5 w-16 h-px mx-auto" style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ARTWORKS.map((art, i) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div onClick={() => openContact(art.title)} className="group block relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 w-full text-left">
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.5)" }} />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{
                      background: "rgba(212,175,55,0.15)",
                      border: "1px solid rgba(212,175,55,0.5)",
                      color: "#d4af37",
                      backdropFilter: "blur(8px)",
                    }}>
                    {art.tag}
                  </div>

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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-14 text-center"
          >
            <Link href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(139,0,0,0.35)",
                color: "#8b0000",
                background: "rgba(139,0,0,0.04)",
              }}>
              Δείτε Όλα τα Έργα <ArrowRight size={16} />
            </Link>
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
            Θέλετε μια μοναδική{" "}
            <span style={{
              background: "linear-gradient(135deg, #d4af37, #f5e17a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>παραγγελία;</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            Δημιουργούμε αγιογραφίες κατά παραγγελία για οικογένειες, ναούς και ιδρύματα σε οποιοδήποτε μέγεθος επιθυμείτε.
          </p>
          <button onClick={() => openContact()}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8b0000, #6b0000)",
              boxShadow: "0 0 40px rgba(139,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
            Επικοινωνήστε μαζί μας <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>

    </div>
  );
}
