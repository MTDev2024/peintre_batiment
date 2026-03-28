'use client'

// 1. React
import { useState } from 'react'
// 2. Next.js
import dynamic from 'next/dynamic'
// 3. Libs tierces
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
// 5. Config
import { siteConfig } from '@/config/site.config'

// ⚠️ Zod v4 — syntaxe identique à v3 pour les cas d'usage de base
const contactSchema = z.object({
  name:    z.string().min(2,  'Le nom doit contenir au moins 2 caractères'),
  email:   z.string().email('Adresse email invalide'),
  phone:   z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

// Chargé sans SSR — Leaflet utilise window
const MapEmbed = dynamic(() => import('@/components/ui/MapEmbed'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-neutral-100 animate-pulse rounded-xl" aria-hidden="true" />
  ),
})

/**
 * ContactSection — Formulaire de contact avec validation react-hook-form + zod
 * @param {Object} props
 */
export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data) {
    setSubmitStatus('loading')
    setServerMessage('')

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })

      const json = await res.json()

      if (json.success) {
        setSubmitStatus('success')
        setServerMessage(json.message)
        reset()
      } else {
        setSubmitStatus('error')
        setServerMessage(json.message)
      }
    } catch {
      setSubmitStatus('error')
      setServerMessage('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    }
  }

  return (
    <section
      id="contact"
      aria-label="Formulaire de contact et devis"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Demandez votre devis gratuit
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Réponse sous 48 h. Déplacement gratuit sur Lille et la métropole.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div>
            {submitStatus === 'success' ? (
              /* Message de confirmation */
              <div
                role="alert"
                className="flex flex-col items-center justify-center text-center gap-4 bg-green-50 border border-green-200 rounded-xl p-10 h-full"
              >
                <svg className="w-14 h-14 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-lg font-semibold text-green-800">Message envoyé !</p>
                  <p className="mt-1 text-green-700 text-sm">{serverMessage}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-2 text-sm text-green-700 underline hover:text-green-900 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                aria-label="Formulaire de demande de devis"
                className="space-y-5"
              >
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Nom complet <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none transition-colors text-sm ${
                      errors.name ? 'border-red-400 focus:border-red-400' : 'border-neutral-200 focus:border-accent'
                    }`}
                    placeholder="Jean Dupont"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Email <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none transition-colors text-sm ${
                      errors.email ? 'border-red-400 focus:border-red-400' : 'border-neutral-200 focus:border-accent'
                    }`}
                    placeholder="jean.dupont@email.fr"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:border-accent focus:outline-none transition-colors text-sm"
                    placeholder="06 XX XX XX XX"
                    {...register('phone')}
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Type de prestation
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 bg-neutral-50 focus:bg-white focus:border-accent focus:outline-none transition-colors text-sm"
                    {...register('service')}
                  >
                    <option value="">Sélectionnez un service</option>
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Décrivez votre projet <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none transition-colors text-sm resize-none ${
                      errors.message ? 'border-red-400 focus:border-red-400' : 'border-neutral-200 focus:border-accent'
                    }`}
                    placeholder="Surface approximative, type de pièces, délai souhaité..."
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Message d'erreur serveur */}
                {submitStatus === 'error' && serverMessage && (
                  <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {serverMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-accent text-white font-medium py-3.5 px-6 rounded-lg hover:bg-(--color-accent-hover) transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>

                <p className="text-xs text-neutral-400 text-center">
                  * Champs obligatoires. Vos données ne sont pas partagées avec des tiers.
                </p>
              </form>
            )}
          </div>

          {/* Infos + carte */}
          <div className="flex flex-col gap-6">

            {/* Coordonnées directes */}
            <div className="bg-neutral-50 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-neutral-900">Coordonnées</h3>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-neutral-700 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                <span className="font-medium">{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteConfig.email}</span>
              </a>
              <p className="flex items-start gap-3 text-neutral-500 text-sm">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Zone : {siteConfig.zone.join(', ')}
              </p>
            </div>

            {/* Carte Leaflet */}
            <div className="flex-1 min-h-64 rounded-xl overflow-hidden shadow-sm border border-neutral-100">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
