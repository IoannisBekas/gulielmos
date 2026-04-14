"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Church, Clock, MapPin, Palette, Sparkles } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { BIO_PARAGRAPHS, MATERIALS, MILESTONES, PHILOSOPHY, SERVICES } from "@/data/about";
import { SITE } from "@/data/site";

import pantocratorImg from "../../../public/pantocrator.png";
import workshopImg from "../../../public/workshop.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const ICON_MAP = { Church, Palette, Sparkles, BookOpen } as const;

const STUDIO_FACTS = [
  {
    icon: Clock,
    label: "Επαγγελματική πορεία",
    value: `Από το ${SITE.workshopSince}`,
  },
  {
    icon: MapPin,
    label: "Εργαστήριο",
    value: SITE.addressShort,
  },
] as const;

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pb-24">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="page-shell page-hero">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-eyebrow">Ο αγιογράφος</span>
            <h1 className="section-title mt-6 text-6xl text-[#171310] sm:text-7xl">
              Η πορεία και η
              <span className="block text-[#8c1d18]">φιλοσοφία του εργαστηρίου</span>
            </h1>
            <p className="section-description mt-7 max-w-2xl">
              Ο Ζώρζος Γουλιέλμος εργάζεται στον Πειραιά από το 1987, με σταθερή προσήλωση στην
              παραδοσιακή βυζαντινή αγιογραφία, στα αυθεντικά υλικά και στη φροντίδα κάθε έργου ως
              προσωπική παραγγελία.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setIsModalOpen(true)} className="primary-button">
                Συζητήστε με το εργαστήριο
                <ArrowRight size={16} />
              </button>
              <Link href="/shop" className="secondary-button">
                Δείτε επιλεγμένα έργα
              </Link>
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
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="space-y-5"
          >
            <div className="surface-card-strong overflow-hidden rounded-[2rem] p-3">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src={workshopImg}
                  alt="Εργαστήριο βυζαντινής αγιογραφίας στον Πειραιά"
                  width={1200}
                  height={900}
                  preload
                  className="h-auto w-full"
                />
              </div>
              <div className="grid gap-3 px-3 pb-3 pt-5 sm:grid-cols-2">
                {STUDIO_FACTS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border px-4 py-4"
                    style={{
                      borderColor: "rgba(120,88,37,0.12)",
                      background: "rgba(255,255,255,0.62)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#b68931]">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[0.66rem] font-bold uppercase tracking-[0.26em] text-[#b68931]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#3c352e]">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-[#171310] px-8 py-8 text-[#f7efe2] shadow-[0_22px_60px_rgba(20,14,11,0.16)]">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#d8b05b]">
                Φιλοσοφία
              </p>
              <blockquote className="mt-5 font-serif text-3xl leading-tight text-white sm:text-[2.5rem]">
                “{PHILOSOPHY.quote}”
              </blockquote>
              <p className="mt-5 text-sm uppercase tracking-[0.28em] text-white/62">
                {PHILOSOPHY.author}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div {...fadeUp} className="surface-card rounded-[2rem] p-8 sm:p-10">
            <span className="section-eyebrow">Βιογραφία</span>
            <h2 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
              Μια ζωή αφιερωμένη
              <span className="block text-[#8c1d18]">στην ιερή τέχνη</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#665f56]">
              {BIO_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="space-y-6">
            <div className="surface-card overflow-hidden rounded-[2rem] p-3">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src={pantocratorImg}
                  alt="Λεπτομέρεια βυζαντινής αγιογραφίας"
                  width={900}
                  height={1200}
                  className="h-auto w-full"
                />
              </div>
              <div className="px-4 pb-4 pt-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#b68931]">
                  Προσέγγιση
                </p>
                <p className="mt-3 text-sm leading-7 text-[#665f56]">
                  Κάθε έργο σχεδιάζεται με έμφαση στη σωστή κλίμακα, στη χρωματική ισορροπία και
                  στην ήρεμη παρουσία που πρέπει να έχει μέσα στον χώρο όπου θα τοποθετηθεί.
                </p>
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-7">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#b68931]">
                Το εργαστήριο σήμερα
              </p>
              <p className="mt-4 text-sm leading-8 text-[#665f56]">
                Το ατελιέ παραμένει χώρος προσωπικής εργασίας και άμεσης επικοινωνίας με όσους
                αναζητούν ένα έργο για οικία, ναό ή ίδρυμα, καθώς και για συντήρηση ή εκτίμηση
                εικόνων.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.phoneHref} className="secondary-button">
                  {SITE.phone}
                </a>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <MapPin size={16} />
                  Δείτε τη διεύθυνση
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-24 py-24" style={{ background: "rgba(237,227,210,0.58)" }}>
        <div className="page-shell grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div {...fadeUp} className="surface-card rounded-[2rem] p-8 sm:p-10">
            <span className="section-eyebrow">Χρονολόγιο</span>
            <h2 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
              Σταθμοί
              <span className="block text-[#8c1d18]">της πορείας</span>
            </h2>

            <div className="mt-8 space-y-4">
              {MILESTONES.map((milestone) => (
                <div
                  key={milestone.year}
                  className="rounded-[1.5rem] border px-5 py-5"
                  style={{
                    borderColor: "rgba(120,88,37,0.12)",
                    background: "rgba(255,255,255,0.68)",
                  }}
                >
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#b68931]">
                    {milestone.year}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#665f56]">{milestone.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="space-y-6">
            <div className="surface-card rounded-[2rem] p-8">
              <span className="section-eyebrow">Υλικά και τεχνική</span>
              <h2 className="section-title mt-6 text-4xl text-[#171310] sm:text-5xl">
                Η ουσία βρίσκεται
                <span className="block text-[#8c1d18]">στα υλικά</span>
              </h2>

              <div className="mt-7 space-y-4">
                {MATERIALS.map((material, index) => (
                  <div
                    key={material.title}
                    className="rounded-[1.5rem] border px-5 py-5"
                    style={{
                      borderColor: "rgba(120,88,37,0.12)",
                      background: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="font-serif text-3xl text-[#b68931]">0{index + 1}</div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#171310]">
                          {material.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#665f56]">{material.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-shell mt-24">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="section-eyebrow">Υπηρεσίες</span>
          <h2 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
            Τι αναλαμβάνει
            <span className="block text-[#8c1d18]">το εργαστήριο</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#665f56]">
            Από νέα έργα κατά παραγγελία έως συντήρηση και εκτίμηση εικόνων, η προσέγγιση
            παραμένει άμεση, προσεκτική και βασισμένη στη σωστή αντιστοίχιση του έργου με τον χώρο
            και τη χρήση του.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="surface-card rounded-[1.75rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/65 text-[#b68931]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-serif text-3xl font-semibold text-[#171310]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#665f56]">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#171310] px-8 py-10 text-[#f7efe2] shadow-[0_22px_60px_rgba(20,14,11,0.16)] sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[#d8b05b]">
                Επικοινωνία
              </p>
              <h2 className="section-title mt-5 text-5xl text-white sm:text-6xl">
                Θέλετε να
                <span className="block text-[#d8b05b]">συζητήσουμε ένα έργο;</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                Η πρώτη επικοινωνία γίνεται απλά: μία σύντομη συζήτηση για το θέμα, το μέγεθος, τον
                χώρο και τον χρόνο παράδοσης. Από εκεί οργανώνεται η σωστή κατεύθυνση για το έργο.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button type="button" onClick={() => setIsModalOpen(true)} className="primary-button">
                Επικοινωνήστε μαζί μας
                <ArrowRight size={16} />
              </button>
              <Link href="/contact" className="secondary-button !border-white/20 !bg-white/8 !text-white">
                Σελίδα επικοινωνίας
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
