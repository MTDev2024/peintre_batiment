// 5. Data
import { testimonials } from '@/data/testimonials'

/** Rendu des étoiles de notation */
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-accent' : 'text-neutral-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

/**
 * TestimonialsSection — Grille des avis clients
 */
export default function TestimonialsSection() {
  return (
    <section
      id="temoignages"
      aria-label="Avis et témoignages clients"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Des particuliers et professionnels de la métropole lilloise nous font confiance.
          </p>
        </div>

        {/* Grille des avis */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="bg-neutral-50 border border-neutral-100 rounded-xl p-6 flex flex-col gap-4"
            >
              <StarRating rating={t.rating} />

              <blockquote className="text-neutral-700 text-sm leading-relaxed flex-1">
                "{t.text}"
              </blockquote>

              <footer className="flex items-center justify-between text-xs text-neutral-500">
                <div>
                  <p className="font-semibold text-neutral-800">{t.name}</p>
                  <p>{t.city}</p>
                </div>
                <time dateTime={t.date}>
                  {new Date(t.date + '-01').toLocaleDateString('fr-FR', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </footer>
            </li>
          ))}
        </ul>

        {/* Score global */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500">
            Note moyenne&nbsp;
            <strong className="text-neutral-900">
              {(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)}/5
            </strong>
            &nbsp;basée sur {testimonials.length} avis vérifiés
          </p>
        </div>
      </div>
    </section>
  )
}
