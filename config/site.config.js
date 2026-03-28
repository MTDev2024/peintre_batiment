/**
 * site.config.js — Données métier centralisées Moreau Peinture
 * Point d'entrée unique pour toutes les infos de l'entreprise.
 * Pour adapter ce template à un nouveau client : modifier uniquement ce fichier.
 */

export const siteConfig = {
  /* ─── Identité ─────────────────────────────────────────────────────────── */
  name:       'Moreau Peinture',
  founder:    'Julien Moreau',
  baseline:   'Artisan de confiance depuis 15 ans',
  since:      2010,

  /* ─── Contact ──────────────────────────────────────────────────────────── */
  phone:      '03 20 XX XX XX',
  phoneHref:  'tel:+33320XXXXXX',
  email:      'contact@moreau-peinture.fr',
  siret:      'XXX XXX XXX XXXXX',

  /* ─── Localisation ─────────────────────────────────────────────────────── */
  city:       'Lille',
  zip:        '59000',
  address:    'Lille (59000)',
  zone:       ['Lille', 'Roubaix', 'Tourcoing', "Villeneuve-d'Ascq", 'Armentières'],

  /* ─── Certifications ───────────────────────────────────────────────────── */
  certifications: [
    'Artisan certifié RGE',
    'Peintre Qualibat',
  ],

  /* ─── Services ─────────────────────────────────────────────────────────── */
  services: [
    {
      id:          'interieur',
      title:       'Peinture intérieure',
      description: 'Rénovation et embellissement de vos pièces avec des finitions soignées.',
      icon:        'paintbrush',
    },
    {
      id:          'exterieur',
      title:       'Peinture extérieure',
      description: 'Protection et mise en valeur de vos façades et menuiseries extérieures.',
      icon:        'home',
    },
    {
      id:          'ravalement',
      title:       'Ravalement de façade',
      description: 'Nettoyage, traitement et peinture de façade pour redonner vie à votre bâtiment.',
      icon:        'building',
    },
    {
      id:          'decoration',
      title:       'Décoration & enduits décoratifs',
      description: 'Béton ciré, stuc, enduits à la chaux — des finitions uniques pour vos intérieurs.',
      icon:        'sparkles',
    },
    {
      id:          'nettoyage',
      title:       'Nettoyage et traitement de façade',
      description: 'Démoussage, hydrofugation et traitement anti-graffiti pour préserver vos façades.',
      icon:        'droplets',
    },
  ],

  /* ─── Galerie — catégories ─────────────────────────────────────────────── */
  galleryCategories: [
    { id: 'all',        label: 'Tous' },
    { id: 'interieur',  label: 'Intérieur' },
    { id: 'exterieur',  label: 'Extérieur' },
    { id: 'ravalement', label: 'Ravalement' },
    { id: 'decoration', label: 'Décoration' },
    { id: 'avant-apres', label: 'Avant / Après' },
  ],

  /* ─── SEO / URLs ───────────────────────────────────────────────────────── */
  url:         'https://moreau-peinture.fr',
  ogImage:     '/og-image.jpg',
}
