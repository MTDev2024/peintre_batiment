// 2. Next.js
import Image from 'next/image'
// 5. Config
import { siteConfig } from '@/config/site.config'

const stats = [
  { value: `${new Date().getFullYear() - siteConfig.since} ans`, label: "d'expérience" },
  { value: '500+',  label: 'chantiers réalisés' },
  { value: '100%',  label: 'devis gratuits' },
  { value: '4.9/5', label: 'satisfaction client' },
]

/**
 * AboutSection — Présentation de Julien Moreau, chiffres clés et certifications
 */
export default function AboutSection() {
  return (
    <section
      id="a-propos"
      aria-label="À propos de Moreau Peinture"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/artisan-portrait/800/1000"
                alt={`${siteConfig.founder}, artisan peintre fondateur de ${siteConfig.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Badge expérience */}
            <div
              className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl px-5 py-4 shadow-lg text-center"
              aria-hidden="true"
            >
              <p className="text-3xl font-bold">{new Date().getFullYear() - siteConfig.since}+</p>
              <p className="text-xs mt-1 leading-tight">ans<br />d'expérience</p>
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              {siteConfig.founder},<br />artisan peintre indépendant
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Passionné par mon métier depuis plus de {new Date().getFullYear() - siteConfig.since} ans,
              j'interviens chez les particuliers et les professionnels de la métropole lilloise
              pour tous vos travaux de peinture intérieure et extérieure.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Mon approche : un devis clair, un chantier propre, un travail soigné.
              Je prends le temps de vous conseiller sur les matériaux et les couleurs
              pour un résultat qui vous ressemble.
            </p>

            {/* Certifications */}
            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.certifications.map((cert) => (
                <span
                  key={cert}
                  className="flex items-center gap-2 text-sm font-medium bg-neutral-50 border border-neutral-200 text-neutral-700 px-4 py-2 rounded-full"
                >
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>

            {/* Chiffres clés */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-neutral-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                  <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
