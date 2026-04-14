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
] as const;

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pb-24">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="page-shell page-hero">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-eyebrow">Επικοινωνία</span>
            <h1 className="section-title mt-6 text-6xl text-[#171310] sm:text-7xl">
              Επικοινωνήστε
              <span className="block text-[#8c1d18]">με το εργαστήριο</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#665f56]">
              Για ειδικές παραγγελίες, συντηρήσεις ή εκτιμήσεις έργων, μπορείτε να
              μιλήσετε απευθείας με το εργαστήριο ή να επισκεφθείτε τον χώρο στον Πειραιά.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="primary-button">
                <Phone size={16} />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="secondary-button">
                <Mail size={16} />
                {SITE.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="surface-card rounded-[2rem] p-6 sm:p-7"
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#b68931]">
              Άμεση ενημέρωση
            </p>
            <div className="mt-5 grid gap-4">
              <div
                className="rounded-[1.5rem] border p-5"
                style={{ borderColor: "rgba(120,88,37,0.12)", background: "rgba(255,255,255,0.55)" }}
              >
                <p className="text-sm font-semibold text-[#171310]">Ώρες επικοινωνίας</p>
                <p className="mt-2 text-sm leading-7 text-[#665f56]">{SITE.hours}</p>
              </div>
              <div
                className="rounded-[1.5rem] border p-5"
                style={{ borderColor: "rgba(120,88,37,0.12)", background: "rgba(255,255,255,0.55)" }}
              >
                <p className="text-sm font-semibold text-[#171310]">Τι μπορούμε να συζητήσουμε</p>
                <p className="mt-2 text-sm leading-7 text-[#665f56]">
                  Νέα έργα, ειδικές διαστάσεις, τοποθέτηση σε χώρο, συντήρηση ή
                  εκτίμηση υπάρχουσας εικόνας.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <motion.div {...fadeUp} className="space-y-4">
              {CONTACT_INFO.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="surface-card flex items-start gap-4 rounded-[1.75rem] p-5 hover:-translate-y-0.5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/65 text-[#b68931]">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#b68931]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#3c352e]">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="surface-card flex items-start gap-4 rounded-[1.75rem] p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/65 text-[#b68931]">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#b68931]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#3c352e]">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <button type="button" onClick={() => setIsModalOpen(true)} className="primary-button mt-8">
              Συζητήστε μια παραγγελία
              <ArrowRight size={16} />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="surface-card overflow-hidden rounded-[2rem] p-3"
          >
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <iframe
                src={SITE.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "480px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Τοποθεσία εργαστηρίου αγιογραφίας"
              />
            </div>
            <div className="flex flex-col gap-3 px-4 pb-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#b68931]">
                  Εργαστήριο
                </p>
                <p className="mt-2 text-sm leading-7 text-[#3c352e]">{SITE.addressShort}</p>
              </div>
              <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="secondary-button">
                <MapPin size={16} />
                Άνοιγμα χάρτη
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
