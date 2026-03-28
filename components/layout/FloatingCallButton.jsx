// 5. Config
import { siteConfig } from '@/config/site.config'

/**
 * FloatingCallButton — Bouton d'appel fixe, visible sur mobile uniquement.
 * Positionné en bas à droite pour faciliter la prise de contact immédiate.
 */
export default function FloatingCallButton() {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label={`Appeler ${siteConfig.name} au ${siteConfig.phone}`}
      className={[
        'md:hidden fixed bottom-6 right-6 z-40',
        'flex items-center gap-2',
        'bg-[var(--color-accent)] text-white',
        'px-4 py-3 rounded-full shadow-lg',
        'hover:bg-[var(--color-accent-hover)] transition-colors',
      ].join(' ')}
    >
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
        />
      </svg>
      <span className="text-sm font-medium">Appeler</span>
    </a>
  )
}
