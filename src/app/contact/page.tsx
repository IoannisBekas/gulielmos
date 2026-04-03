"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { SITE } from "@/data/site";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Διεύθυνση",
    value: SITE.address,
    href: SITE.googleMapsUrl,
  },
  {
    icon: Phone,
    label: "Τηλέφωνο",
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Clock,
    label: "Ωράριο",
    value: SITE.hours,
    href: undefined,
  },
];

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#fdfbf5", color: "#1a1a1a" }}>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-x-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-5%] right-[-10%] w-[45vw] h-[45vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,0,0,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
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
              ✦ Επικοινωνία ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.2] mb-6 pt-2"
            style={{ color: "#111" }}
          >
            Επικοινωνήστε{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b0000 0%, #c0392b 40%, #8b0000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>μαζί μας</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#666" }}
          >
            Για παραγγελίες, συντηρήσεις, εκτιμήσεις ή οποιαδήποτε ερώτηση, μη διστάσετε να μας
            βρείτε στο εργαστήριο ή να επικοινωνήσετε τηλεφωνικά.
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

      {/* ═══════════════ CONTACT CARDS + MAP ═══════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

            {/* Left: Contact cards */}
            <div>
              <motion.div {...fadeUp}>
                <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#aa8c2c" }}>
                  Στοιχεία Επικοινωνίας
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-10 leading-snug" style={{ color: "#1a1a1a" }}>
                  Βρείτε μας στο εργαστήριο
                </h2>
              </motion.div>

              <div className="space-y-4">
                {CONTACT_INFO.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: "#fff",
                          border: "1px solid rgba(212,175,55,0.15)",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                        }}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ background: "rgba(212,175,55,0.08)" }}>
                          <c.icon size={20} style={{ color: "#aa8c2c" }} />
                        </div>
                        <div>
                          <div className="text-[10px] tracking-[0.2em] uppercase font-bold mb-1" style={{ color: "#bbb" }}>{c.label}</div>
                          <div className="text-sm font-semibold group-hover:text-[#8b0000] transition-colors" style={{ color: "#333" }}>{c.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 p-5 rounded-2xl"
                        style={{
                          background: "#fff",
                          border: "1px solid rgba(212,175,55,0.15)",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                        }}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(212,175,55,0.08)" }}>
                          <c.icon size={20} style={{ color: "#aa8c2c" }} />
                        </div>
                        <div>
                          <div className="text-[10px] tracking-[0.2em] uppercase font-bold mb-1" style={{ color: "#bbb" }}>{c.label}</div>
                          <div className="text-sm font-semibold" style={{ color: "#333" }}>{c.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-widest uppercase rounded-full text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #8b0000, #6b0000)",
                    boxShadow: "0 4px 20px rgba(139,0,0,0.3)",
                  }}>
                  Στείλτε μήνυμα <ArrowRight size={15} />
                </button>
              </motion.div>
            </div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden h-full min-h-[400px]"
                style={{
                  border: "1px solid rgba(212,175,55,0.25)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                }}>
                <iframe
                  src={SITE.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Τοποθεσία Εργαστηρίου Αγιογραφίας"
                />
              </div>

              {/* Address badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto px-5 py-3 rounded-xl"
                style={{
                  background: "rgba(253,251,245,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                }}>
                <div className="flex items-center gap-3">
                  <MapPin size={16} style={{ color: "#8b0000" }} />
                  <span className="text-sm font-semibold" style={{ color: "#333" }}>
                    {SITE.addressShort}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 px-4 sm:px-8 overflow-hidden"
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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6 leading-tight">
            Κάθε εικόνα έχει τη δική της{" "}
            <span style={{
              background: "linear-gradient(135deg, #d4af37, #f5e17a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>ιστορία</span>
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Μοιραστείτε μαζί μας το όραμά σας και ας δημιουργήσουμε μαζί ένα μοναδικό έργο τέχνης.
          </p>
          <a href={SITE.phoneHref}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8b0000, #6b0000)",
              boxShadow: "0 0 40px rgba(139,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
            <Phone size={18} /> Καλέστε: {SITE.phone}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
