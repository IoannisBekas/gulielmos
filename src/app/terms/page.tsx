import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Όροι χρήσης",
};

const SECTIONS = [
  {
    title: "Χρήση της ιστοσελίδας",
    text:
      "Η ιστοσελίδα παρέχει ενημερωτικό περιεχόμενο για το εργαστήριο, τα έργα και τις υπηρεσίες του. Η περιήγηση και η επικοινωνία μέσω των διαθέσιμων στοιχείων θεωρείται αποδοχή των βασικών όρων χρήσης της παρούσας σελίδας.",
  },
  {
    title: "Περιεχόμενο και εικόνες",
    text:
      "Οι φωτογραφίες, τα κείμενα και η παρουσίαση των έργων χρησιμοποιούνται για την προβολή του εργαστηρίου και δεν πρέπει να αναπαράγονται ή να επαναχρησιμοποιούνται χωρίς προηγούμενη άδεια.",
  },
  {
    title: "Παραγγελίες και τιμές",
    text:
      "Τα έργα προσφέρονται κατόπιν συνεννόησης. Οι τιμές που εμφανίζονται στην ιστοσελίδα είναι ενδεικτικές και μπορεί να διαφοροποιούνται ανάλογα με τις διαστάσεις, τα υλικά, το επίπεδο χρύσωσης και τις ιδιαιτερότητες κάθε παραγγελίας.",
  },
  {
    title: "Εξωτερικοί σύνδεσμοι",
    text:
      "Η ιστοσελίδα μπορεί να περιλαμβάνει συνδέσμους προς εξωτερικές υπηρεσίες, όπως χάρτες ή κοινωνικά ή επαγγελματικά προφίλ. Το περιεχόμενο αυτών των υπηρεσιών διέπεται από τους δικούς τους όρους.",
  },
] as const;

export default function TermsPage() {
  return (
    <div className="pb-24">
      <section className="page-shell page-hero max-w-4xl">
        <span className="section-eyebrow">Τελευταία ενημέρωση · 14 Απριλίου 2026</span>
        <h1 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
          Όροι χρήσης
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#665f56]">
          Οι παρακάτω όροι περιγράφουν συνοπτικά τον τρόπο χρήσης της ιστοσελίδας
          του εργαστηρίου {SITE.nameGreek} και το πλαίσιο προβολής των έργων και
          υπηρεσιών του.
        </p>
      </section>

      <section className="page-shell max-w-4xl space-y-5">
        {SECTIONS.map((section) => (
          <article key={section.title} className="surface-card rounded-[1.9rem] p-7 sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-[#171310]">{section.title}</h2>
            <p className="mt-4 text-sm leading-8 text-[#665f56]">{section.text}</p>
          </article>
        ))}

        <div className="surface-card rounded-[1.9rem] p-7 sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[#171310]">Επικοινωνία</h2>
          <p className="mt-4 text-sm leading-8 text-[#665f56]">
            Για οποιαδήποτε απορία σχετικά με τους όρους χρήσης ή για ειδικές
            παραγγελίες, μπορείτε να επικοινωνήσετε με το εργαστήριο μέσω της
            σελίδας επικοινωνίας.
          </p>

          <div className="mt-6">
            <Link href="/contact" className="secondary-button">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
