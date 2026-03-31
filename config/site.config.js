/**
 * site.config.js — Données métier centralisées Moreau Peinture
 * Point d'entrée unique pour toutes les infos de l'entreprise.
 * Pour adapter ce template à un nouveau client : modifier uniquement ce fichier.
 */

export const siteConfig = {
  /* ─── Identité ─────────────────────────────────────────────────────────── */
  name: "MedPeinture",
  founder: "Mohamed Helaoui",
  baseline: "Artisan de confiance depuis 10 ans",
  since: 2015,

  /* ─── Contact ──────────────────────────────────────────────────────────── */
  phone: "06 60 07 86 85",
  phoneHref: "tel:+33660078685",
  email: "contact@med-peinture.fr",
  siret: "XXX XXX XXX XXXXX",

  /* ─── Localisation ─────────────────────────────────────────────────────── */
  city: "Dunkerque",
  zip: "59140",
  address: "Dunkerque (59140)",
  zone: [
    "Dunkerque",
    "Grande-Synthe",
    "Coudekerque-Branche",
    "Capelle-La-Grande",
    "",
  ],

  /* ─── Certifications ───────────────────────────────────────────────────── */
  certifications: ["Artisan certifié RGE", "Peintre Qualibat"],

  /* ─── Services ─────────────────────────────────────────────────────────── */
  services: [
    {
      id: "interieur",
      title: "Peinture intérieure",
      description:
        "Rénovation et embellissement de vos pièces avec des finitions soignées.",
      icon: "paintbrush",
    },
    {
      id: "exterieur",
      title: "Peinture extérieure",
      description:
        "Protection et mise en valeur de vos façades et menuiseries extérieures.",
      icon: "home",
    },
    {
      id: "ravalement",
      title: "Ravalement de façade",
      description:
        "Nettoyage, traitement et peinture de façade pour redonner vie à votre bâtiment.",
      icon: "building",
    },
    {
      id: "decoration",
      title: "Décoration & enduits décoratifs",
      description:
        "Béton ciré, stuc, enduits à la chaux — des finitions uniques pour vos intérieurs.",
      icon: "sparkles",
    },
    {
      id: "nettoyage",
      title: "Nettoyage et traitement de façade",
      description:
        "Démoussage, hydrofugation et traitement anti-graffiti pour préserver vos façades.",
      icon: "droplets",
    },
  ],

  /* ─── Galerie — catégories ─────────────────────────────────────────────── */
  galleryCategories: [
    { id: "all", label: "Tous" },
    { id: "interieur", label: "Intérieur" },
    { id: "exterieur", label: "Extérieur" },
    { id: "ravalement", label: "Ravalement" },
    { id: "decoration", label: "Décoration" },
    { id: "avant-apres", label: "Avant / Après" },
  ],

  /* ─── SEO / URLs ───────────────────────────────────────────────────────── */
  url: "https://med-peinture.fr",
  ogImage: "/og-image.jpg",
};
