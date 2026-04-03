// ╔══════════════════════════════════════════════════════════════╗
// ║  SITE SETTINGS — Επεξεργαστείτε εδώ τα στοιχεία σας        ║
// ║  Edit this file to change your business info site-wide     ║
// ╚══════════════════════════════════════════════════════════════╝

export const SITE = {
  /** Επωνυμία / Brand name */
  name: "Gulielmos",
  nameGreek: "Ζώρζος Γουλιέλμος",

  /** Υποτίτλος */
  tagline: "Βυζαντινή Αγιογραφία",

  /** Τηλέφωνο (εμφανίζεται) */
  phone: "210 429 7090",
  /** Τηλέφωνο (για link tel:) */
  phoneHref: "tel:2104297090",

  /** Email */
  email: "info@gulielmos.gr",

  /** Διεύθυνση */
  address: "Πραξιτέλους 161, Πειραιάς 18535",
  addressShort: "Πραξιτέλους 161, Πειραιάς",
  addressFull: "Πραξιτέλους 161, Πειραιάς, 18535, ΑΤΤΙΚΗΣ",

  /** Google Maps */
  googleMapsUrl: "https://maps.google.com/maps?q=Πραξιτέλους+161,+Πειραιάς,+18535",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Πραξιτέλους%20161,%20Πειραιάς,%2018535&t=&z=15&ie=UTF8&iwloc=&output=embed",

  /** Ωράριο */
  hours: "Δευτ – Παρ: 09:00 – 18:00",

  /** Copyright */
  copyright: "Gulielmos Hagiography",

  /** Κατασκευή ιστοσελίδας */
  madeBy: {
    name: "BISOLUTIONS.GROUP",
    url: "https://bisolutions.group",
  },

  /** Στατιστικά Hero */
  stats: [
    { value: "50+", label: "Έργα" },
    { value: "15+", label: "Χρόνια" },
    { value: "200+", label: "Πελάτες" },
  ],
} as const;
