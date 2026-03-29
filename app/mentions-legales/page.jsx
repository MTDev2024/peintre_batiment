// 2. Next.js
import Link from 'next/link'
// 5. Config
import { siteConfig } from '@/config/site.config'

export const metadata = {
  title:       'Mentions légales',
  description: `Mentions légales du site ${siteConfig.name}, artisan peintre à ${siteConfig.city}.`,
  robots:      { index: false },
}

/**
 * MentionsLegales — Page des mentions légales (obligatoire loi française)
 */
export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-bold text-neutral-900 mb-10">Mentions légales</h1>

      <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 text-sm leading-relaxed">

        <section aria-labelledby="editeur">
          <h2 id="editeur" className="text-lg font-semibold text-neutral-900 mb-3">
            1. Éditeur du site
          </h2>
          <p>
            <strong>{siteConfig.name}</strong><br />
            Entrepreneur individuel<br />
            {siteConfig.founder}<br />
            {siteConfig.address}<br />
            Téléphone : {siteConfig.phone}<br />
            Email : {siteConfig.email}<br />
            SIRET : {siteConfig.siret}
          </p>
        </section>

        <section aria-labelledby="hebergeur">
          <h2 id="hebergeur" className="text-lg font-semibold text-neutral-900 mb-3">
            2. Hébergeur
          </h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site web : vercel.com
          </p>
        </section>

        <section aria-labelledby="propriete">
          <h2 id="propriete" className="text-lg font-semibold text-neutral-900 mb-3">
            3. Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes) est la propriété
            exclusive de {siteConfig.name}, sauf mention contraire. Toute reproduction,
            représentation ou diffusion, en tout ou en partie, est interdite sans autorisation
            préalable écrite.
          </p>
        </section>

        <section aria-labelledby="responsabilite">
          <h2 id="responsabilite" className="text-lg font-semibold text-neutral-900 mb-3">
            4. Limitation de responsabilité
          </h2>
          <p>
            {siteConfig.name} s'efforce d'assurer l'exactitude et la mise à jour des informations
            diffusées sur ce site. Cependant, {siteConfig.name} ne peut garantir l'exactitude,
            la précision ou l'exhaustivité des informations mises à disposition.
          </p>
        </section>

        <section aria-labelledby="donnees">
          <h2 id="donnees" className="text-lg font-semibold text-neutral-900 mb-3">
            5. Données personnelles
          </h2>
          <p>
            Les informations recueillies via le formulaire de contact sont utilisées uniquement
            pour répondre à vos demandes. Elles ne sont pas transmises à des tiers.
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et
            de suppression de vos données en contactant :{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>.
          </p>
          <p className="mt-2">
            Pour en savoir plus, consultez notre{' '}
            <Link href="/politique-confidentialite" className="text-accent hover:underline">
              politique de confidentialité
            </Link>.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" className="text-lg font-semibold text-neutral-900 mb-3">
            6. Cookies
          </h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement.
            Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement.
          </p>
        </section>

        <section aria-labelledby="droit">
          <h2 id="droit" className="text-lg font-semibold text-neutral-900 mb-3">
            7. Droit applicable
          </h2>
          <p>
            Les présentes mentions légales sont soumises au droit français.
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

      </div>
    </div>
  )
}
