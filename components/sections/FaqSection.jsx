'use client'

// 1. React
import { useState } from 'react'
// 5. Data
import { faqItems } from '@/data/faq'

/**
 * FaqSection — Accordion de questions fréquentes
 * Client Component : gère l'item ouvert.
 * Accessibilité : aria-expanded, aria-controls sur chaque bouton.
 */
export default function FaqSection() {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faq"
      aria-label="Questions fréquentes"
      className="py-20 bg-(--color-bg-subtle)"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Vous avez des questions ? Voici les réponses aux plus courantes.
          </p>
        </div>

        {/* Accordion */}
        <dl className="space-y-3">
          {faqItems.map((item) => {
            const isOpen    = openId === item.id
            const panelId   = `faq-panel-${item.id}`
            const triggerId = `faq-trigger-${item.id}`

            return (
              <div
                key={item.id}
                className="bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm"
              >
                <dt>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-neutral-900 font-medium hover:bg-neutral-50 transition-colors"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 shrink-0 text-accent transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100"
                >
                  <p className="pt-4">{item.answer}</p>
                </dd>
              </div>
            )
          })}
        </dl>

        {/* CTA bas de section */}
        <p className="mt-10 text-center text-neutral-500 text-sm">
          Vous ne trouvez pas la réponse ?{' '}
          <a
            href="#contact"
            className="text-accent font-medium hover:underline"
          >
            Contactez-nous directement
          </a>
        </p>
      </div>
    </section>
  )
}
