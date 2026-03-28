// 2. Next.js
import Image from 'next/image'
// 4. Composants locaux
import Button from '@/components/ui/Button'
// 5. Config
import { siteConfig } from '@/config/site.config'

/**
 * HeroSection — Section hero plein écran avec image de fond et double CTA
 */
export default function HeroSection() {
  const yearsExp = new Date().getFullYear() - siteConfig.since

  return (
    <section
      id="hero"
      aria-label="Présentation Moreau Peinture"
      className="relative min-h-[90vh] flex items-center"
    >
      {/* Image de fond */}
      <Image
        src="https://picsum.photos/seed/painting-hero-bg/1600/900"
        alt="Chantier de peinture réalisé par Moreau Peinture à Lille"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/65" aria-hidden="true" />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">

          {/* Badges certifications */}
          <div className="flex flex-wrap gap-2 mb-6">
            {siteConfig.certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs font-medium bg-accent text-white px-3 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Artisan peintre<br />
            <span className="text-accent">à {siteConfig.city}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-200 leading-relaxed">
            {siteConfig.founder} — {siteConfig.baseline}.<br />
            Peinture intérieure, extérieure et ravalement de façade
            dans toute la métropole lilloise.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Devis gratuit
            </Button>
            <a
              href="#galerie"
              className="inline-flex items-center font-medium rounded-md transition-colors px-8 py-4 text-lg border border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Voir les réalisations
            </a>
          </div>

          {/* Chiffres clés */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-white/20 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">{yearsExp}+</p>
              <p className="text-sm text-neutral-300 mt-1">ans d'expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{siteConfig.zone.length}</p>
              <p className="text-sm text-neutral-300 mt-1">villes couvertes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-neutral-300 mt-1">devis gratuits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
