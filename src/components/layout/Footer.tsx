import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
      {/* Top gold line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold tracking-[0.1em] text-white">{SITE.nameGreek}</h3>
              <p className="text-[10px] tracking-[0.35em] uppercase mt-1" style={{ color: "rgba(212,175,55,0.5)" }}>
                {SITE.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              Διαφυλάσσοντας την ιερή τέχνη της Βυζαντινής Αγιογραφίας για περισσότερο από 15 χρόνια. Κάθε έργο είναι χειροποίητο με αυγοτέμπερα και φύλλα χρυσού 22 καρατίων.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(212,175,55,0.7)" }}>
              Σύνδεσμοι
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/shop", label: "Κατάστημα" },
                { href: "/about", label: "Ο Αγιογράφος" },
                { href: "/contact", label: "Ειδικές Παραγγελίες" },
                { href: "/terms", label: "Όροι Χρήσης" },
                { href: "/privacy", label: "Πολιτική Απορρήτου" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(212,175,55,0.7)" }}>
              Επικοινωνία
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(212,175,55,0.5)" }} />
                <a 
                  href={SITE.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white" 
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {SITE.addressFull}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="flex-shrink-0" style={{ color: "rgba(212,175,55,0.5)" }} />
                <a href={`mailto:${SITE.email}`} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="flex-shrink-0" style={{ color: "rgba(212,175,55,0.5)" }} />
                <a href={SITE.phoneHref} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {SITE.phone}
                </a>
              </li>
            </ul>
            
            {/* Google Maps Embed */}
            <div className="w-full h-32 rounded-lg overflow-hidden border opacity-70 hover:opacity-100 transition-opacity" style={{ borderColor: "rgba(212,175,55,0.2)" }}>
              <iframe
                src={SITE.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Τοποθεσία Εργαστηρίου"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} {SITE.copyright}. All rights reserved. <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span> Δημιουργήθηκε από την <a href={SITE.madeBy.url} target="_blank" rel="noopener noreferrer" className="hover:underline transition-all" style={{ color: "rgba(212,175,55,0.8)", fontWeight: 600 }}>{SITE.madeBy.name}</a>
          </p>
          <p className="text-xs" style={{ color: "rgba(212,175,55,0.3)" }}>
            Χειροποίητα με ❤ & Πίστη
          </p>
        </div>
      </div>
    </footer>
  );
}
