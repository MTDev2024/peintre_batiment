// 2. Next.js
import Link from 'next/link'
// 5. Config
import { siteConfig } from '@/config/site.config'

/**
 * Footer — Pied de page avec coordonnées, navigation et liens légaux
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Identité */}
          <div>
            <p className="font-bold text-white text-lg">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-accent">{siteConfig.baseline}</p>
            <p className="mt-4 text-sm leading-relaxed">
              Artisan peintre certifié RGE à {siteConfig.city}.<br />
              Interventions dans toute la métropole lilloise.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-neutral-500">{siteConfig.address}</li>
            </ul>
            <p className="mt-4 text-sm text-neutral-500">
              Zone&nbsp;: {siteConfig.zone.join(', ')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Services',     href: '#services' },
                { label: 'Réalisations', href: '#galerie' },
                { label: 'Témoignages',  href: '#temoignages' },
                { label: 'FAQ',          href: '#faq' },
                { label: 'Devis gratuit', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de footer — mentions légales */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} {siteConfig.name} — SIRET&nbsp;{siteConfig.siret}</p>
          <nav aria-label="Liens légaux" className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-neutral-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-neutral-300 transition-colors">
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
