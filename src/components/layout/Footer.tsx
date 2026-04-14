import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="mt-24 border-t bg-[#171310] text-[#f7efe2]"
      style={{ borderColor: "rgba(182,137,49,0.16)" }}
    >
      <div className="page-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.9fr_.8fr]">
          <div className="space-y-5">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#b68931]">
                {SITE.tagline}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">{SITE.nameGreek}</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60">{SITE.atelierNote}</p>
            <p className="text-sm font-semibold text-white/80">{SITE.hours}</p>
          </div>

          <div>
            <p className="mb-5 text-[0.68rem] uppercase tracking-[0.32em] text-[#b68931]">
              Επικοινωνία
            </p>
            <div className="space-y-4 text-sm text-white/70">
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white"
              >
                <MapPin size={16} className="mt-0.5 text-[#d8b05b]" />
                <span>{SITE.addressFull}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={16} className="text-[#d8b05b]" />
                <span>{SITE.email}</span>
              </a>
              <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone size={16} className="text-[#d8b05b]" />
                <span>{SITE.phone}</span>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[0.68rem] uppercase tracking-[0.32em] text-[#b68931]">
              Σύνδεσμοι
            </p>
            <div className="grid gap-3 text-sm text-white/70">
              <Link href="/shop" className="hover:text-white">
                Συλλογή
              </Link>
              <Link href="/about" className="hover:text-white">
                Ο αγιογράφος
              </Link>
              <Link href="/contact" className="hover:text-white">
                Ειδικές παραγγελίες
              </Link>
              <Link href="/terms" className="hover:text-white">
                Όροι χρήσης
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Πολιτική απορρήτου
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} {SITE.copyright}. All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href={SITE.madeBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d8b05b] hover:text-white"
            >
              {SITE.madeBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
