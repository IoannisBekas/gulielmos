// ╔══════════════════════════════════════════════════════════════╗
// ║  PRODUCTS — Επεξεργαστείτε εδώ τα προϊόντα σας             ║
// ║  Edit this file to add/remove/change your artworks         ║
// ╚══════════════════════════════════════════════════════════════╝

import { StaticImageData } from "next/image";

// Image imports — add new images to /public and import them here
import pantocratorImg from "../../public/pantocrator.png";
import theotokosImg from "../../public/theotokos.png";
import saintGeorgeImg from "../../public/saint_george.png";

// ─── Types ───────────────────────────────────────────────────
export type Product = {
  /** Τίτλος εικόνας */
  title: string;
  /** Υποτίτλος / τεχνική */
  subtitle: string;
  /** Τιμή (ενδεικτική) */
  price: string;
  /** Tag / ετικέτα badge */
  tag: string;
  /** Κατηγορία για φίλτρα */
  category: string;
  /** Διαστάσεις */
  dimensions: string;
  /** Εικόνα */
  image: StaticImageData;
  /** Εμφανίζεται στην αρχική; */
  featured?: boolean;
};

// ─── Available Categories ────────────────────────────────────
export const CATEGORIES = ["Όλα", "Δεσποτικές", "Θεομητορικές", "Αγίων"] as const;

// ─── Products List ───────────────────────────────────────────
// Προσθέστε, αφαιρέστε ή αλλάξτε προϊόντα εδώ.
// Τα "featured: true" εμφανίζονται στην αρχική σελίδα.
export const PRODUCTS: Product[] = [
  {
    title: "Ιησούς Χριστός Παντοκράτωρ",
    subtitle: "Αυγοτέμπερα & Χρυσός 22K",
    price: "από €380",
    tag: "Bestseller",
    category: "Δεσποτικές",
    dimensions: "40 × 30 εκ.",
    image: pantocratorImg,
    featured: true,
  },
  {
    title: "Παναγία Γλυκοφιλούσα",
    subtitle: "Βυζαντινή Τεχνοτροπία",
    price: "από €420",
    tag: "Θεομητορική",
    category: "Θεομητορικές",
    dimensions: "50 × 35 εκ.",
    image: theotokosImg,
    featured: true,
  },
  {
    title: "Άγιος Γεώργιος",
    subtitle: "Αυγοτέμπερα & Χρυσός 22K",
    price: "από €350",
    tag: "Δεσποτική",
    category: "Αγίων",
    dimensions: "45 × 32 εκ.",
    image: saintGeorgeImg,
    featured: true,
  },
  {
    title: "Χριστός Ευλογών",
    subtitle: "Κλασική Βυζαντινή Τεχνοτροπία",
    price: "από €400",
    tag: "Δεσποτική",
    category: "Δεσποτικές",
    dimensions: "55 × 40 εκ.",
    image: pantocratorImg,
  },
  {
    title: "Παναγία Βρεφοκρατούσα",
    subtitle: "Αυγοτέμπερα & Χρυσός 22K",
    price: "από €450",
    tag: "Θεομητορική",
    category: "Θεομητορικές",
    dimensions: "60 × 45 εκ.",
    image: theotokosImg,
  },
  {
    title: "Άγιος Νικόλαος",
    subtitle: "Παραδοσιακή Αγιογραφία",
    price: "από €320",
    tag: "Αγίων",
    category: "Αγίων",
    dimensions: "40 × 30 εκ.",
    image: saintGeorgeImg,
  },
];

// ─── Helper: Featured products (for homepage) ───────────────
export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

// ─── Hero featured image (first product) ────────────────────
export const HERO_PRODUCT = PRODUCTS[0];
