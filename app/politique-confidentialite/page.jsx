// 2. Next.js
import Link from 'next/link'
// 5. Config
import { siteConfig } from '@/config/site.config'

export const metadata = {
  title:       'Politique de confidentialité',
  description: `Politique de confidentialité et de protection des données personnelles de ${siteConfig.name}.`,
  robots:      { index: false },
}

/**
 * PolitiqueConfidentialite — Page RGPD obligatoire
 */
export default function PolitiqueConfidentialite() {
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

      <h1 className="text-3xl font-bold text-neutral-900 mb-2">
        Politique de confidentialité
      </h1>
      <p className="text-sm text-neutral-500 mb-10">Dernière mise à jour : janvier 2025</p>

      <div className="space-y-8 text-neutral-700 text-sm leading-relaxed">

        <section aria-labelledby="intro">
          <h2 id="intro" className="text-lg font-semibold text-neutral-900 mb-3">
            1. Introduction
          </h2>
          <p>
            {siteConfig.name} ({siteConfig.founder}, SIRET {siteConfig.siret}) s'engage à protéger
            vos données personnelles conformément au Règlement Général sur la Protection des Données
            (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés.
          </p>
        </section>

        <section aria-labelledby="collecte">
          <h2 id="collecte" className="text-lg font-semibold text-neutral-900 mb-3">
            2. Données collectées
          </h2>
          <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :</p>
          <ul className="mt-3 space-y-1 list-disc list-inside text-neutral-600">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Type de prestation souhaité (optionnel)</li>
            <li>Contenu de votre message</li>
          </ul>
        </section>

        <section aria-labelledby="finalites">
          <h2 id="finalites" className="text-lg font-semibold text-neutral-900 mb-3">
            3. Finalités du traitement
          </h2>
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul className="mt-3 space-y-1 list-disc list-inside text-neutral-600">
            <li>Répondre à votre demande de devis ou de renseignement</li>
            <li>Vous recontacter dans le cadre de notre relation commerciale</li>
          </ul>
          <p className="mt-3">
            Base légale : exécution de mesures précontractuelles à votre demande (article 6.1.b du RGPD).
          </p>
        </section>

        <section aria-labelledby="conservation">
          <h2 id="conservation" className="text-lg font-semibold text-neutral-900 mb-3">
            4. Durée de conservation
          </h2>
          <p>
            Vos données sont conservées pour la durée nécessaire au traitement de votre demande,
            puis archivées pendant 3 ans maximum à des fins de prospection commerciale,
            conformément aux recommandations de la CNIL.
          </p>
        </section>

        <section aria-labelledby="partage">
          <h2 id="partage" className="text-lg font-semibold text-neutral-900 mb-3">
            5. Partage des données
          </h2>
          <p>
            Vos données ne sont <strong>jamais vendues ni transmises à des tiers</strong> à des fins
            commerciales. Elles peuvent être transmises au prestataire d'envoi d'emails (Resend Inc.)
            dans le seul but d'acheminer votre message, dans le cadre d'un accord de traitement
            conforme au RGPD.
          </p>
        </section>

        <section aria-labelledby="droits">
          <h2 id="droits" className="text-lg font-semibold text-neutral-900 mb-3">
            6. Vos droits
          </h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="mt-3 space-y-1 list-disc list-inside text-neutral-600">
            <li><strong>Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
            <li><strong>Droit d'opposition</strong> — vous opposer au traitement</li>
            <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous par email :{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>.
            Nous répondrons dans un délai de 30 jours.
          </p>
          <p className="mt-3">
            Vous pouvez également introduire une réclamation auprès de la{' '}
            <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) —
            cnil.fr.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" className="text-lg font-semibold text-neutral-900 mb-3">
            7. Cookies
          </h2>
          <p>
            Ce site utilise uniquement des cookies techniques strictement nécessaires à son
            fonctionnement (pas de cookies publicitaires, pas de tracking tiers).
            Ces cookies ne nécessitent pas votre consentement (article 82 de la loi Informatique
            et Libertés).
          </p>
        </section>

        <section aria-labelledby="contact-dpo">
          <h2 id="contact-dpo" className="text-lg font-semibold text-neutral-900 mb-3">
            8. Contact
          </h2>
          <p>
            Pour toute question relative à cette politique ou à vos données personnelles :<br />
            <strong>{siteConfig.name}</strong> — {siteConfig.founder}<br />
            Email :{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
