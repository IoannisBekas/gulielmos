import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Πολιτική απορρήτου",
};

const SECTIONS = [
  {
    title: "Τι στοιχεία μπορεί να συλλεχθούν",
    text:
      "Το εργαστήριο λαμβάνει μόνο τα στοιχεία που επιλέγετε να δώσετε όταν επικοινωνείτε τηλεφωνικά, μέσω email ή με φυσική επίσκεψη στον χώρο. Συνήθως αυτά αφορούν όνομα, στοιχεία επικοινωνίας και πληροφορίες για το έργο ή το αίτημά σας.",
  },
  {
    title: "Πώς χρησιμοποιούνται",
    text:
      "Τα στοιχεία χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας, την προετοιμασία προσφοράς, τη διαχείριση παραγγελίας ή τη συζήτηση σχετικά με συντήρηση και εκτίμηση έργων.",
  },
  {
    title: "Χάρτες και εξωτερικές υπηρεσίες",
    text:
      "Η ιστοσελίδα μπορεί να εμφανίζει ενσωματωμένο χάρτη Google Maps για τη διευκόλυνση πρόσβασης στο εργαστήριο. Η χρήση του χάρτη διέπεται από τις πολιτικές της αντίστοιχης υπηρεσίας.",
  },
  {
    title: "Δικαιώματα και επικοινωνία",
    text:
      "Για διόρθωση, ενημέρωση ή διαγραφή στοιχείων επικοινωνίας, μπορείτε να απευθυνθείτε στο εργαστήριο μέσω email ή τηλεφωνικά. Για επίσημο ή πιο αναλυτικό κείμενο απορρήτου, μπορείτε επίσης να ζητήσετε ενημέρωση απευθείας.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      <section className="page-shell page-hero max-w-4xl">
        <span className="section-eyebrow">Τελευταία ενημέρωση · 14 Απριλίου 2026</span>
        <h1 className="section-title mt-6 text-5xl text-[#171310] sm:text-6xl">
          Πολιτική απορρήτου
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#665f56]">
          Η σελίδα αυτή περιγράφει με απλό τρόπο πώς γίνεται η διαχείριση στοιχείων
          επικοινωνίας όταν επικοινωνείτε με το εργαστήριο του {SITE.nameGreek}.
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
          <h2 className="font-serif text-3xl font-semibold text-[#171310]">Στοιχεία επικοινωνίας</h2>
          <p className="mt-4 text-sm leading-8 text-[#665f56]">
            Email:{" "}
            <a href={`mailto:${SITE.email}`} className="inline-link">
              {SITE.email}
            </a>
            <br />
            Τηλέφωνο:{" "}
            <a href={SITE.phoneHref} className="inline-link">
              {SITE.phone}
            </a>
            <br />
            Διεύθυνση: {SITE.addressFull}
          </p>

          <div className="mt-6">
            <Link href="/contact" className="secondary-button">
              Μετάβαση στην επικοινωνία
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
