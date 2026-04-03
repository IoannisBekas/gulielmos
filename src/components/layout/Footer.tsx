import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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
              <h3 className="text-2xl font-serif font-bold tracking-[0.1em] text-white">Ζώρζος Γουλιέλμος</h3>
              <p className="text-[10px] tracking-[0.35em] uppercase mt-1" style={{ color: "rgba(212,175,55,0.5)" }}>
                Βυζαντινή Αγιογραφία
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              Διαφυλάσσοντας την ιερή τέχνη της Βυζαντινής Αγιογραφίας για περισσότερο από 15 χρόνια. Κάθε έργο είναι χειροποίητο με αυγοτέμπερα και φύλλα χρυσού 22 καρατίων.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {["IG", "FB", "YT"].map((s) => (
                <a key={s} href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: "1px solid rgba(212,175,55,0.3)", color: "rgba(212,175,55,0.7)" }}>
                  {s}
                </a>
              ))}
            </div>
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
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(212,175,55,0.5)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Πραξιτέλους 161, Πειραιάς, 18535, ΑΤΤΙΚΗΣ</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="flex-shrink-0" style={{ color: "rgba(212,175,55,0.5)" }} />
                <a href="mailto:info@gulielmos.gr" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  info@gulielmos.gr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="flex-shrink-0" style={{ color: "rgba(212,175,55,0.5)" }} />
                <a href="tel:2104297090" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                  210 429 7090
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} Gulielmos Hagiography. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(212,175,55,0.3)" }}>
            Χειροποίητα με ❤ & Πίστη
          </p>
        </div>
      </div>
    </footer>
  );
}
