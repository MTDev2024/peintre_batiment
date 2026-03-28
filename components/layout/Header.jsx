'use client'

// 1. React
import { useState, useEffect } from 'react'
// 2. Next.js
import Link from 'next/link'
// 4. Composants locaux
import Button from '@/components/ui/Button'
// 5. Config
import { siteConfig } from '@/config/site.config'

const navLinks = [
  { label: 'Accueil',      href: '#hero' },
  { label: 'Services',     href: '#services' },
  { label: 'Réalisations', href: '#galerie' },
  { label: 'Témoignages',  href: '#temoignages' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
]

/**
 * Header — Navigation principale sticky avec menu mobile
 * Client Component : gère l'état ouvert/fermé du menu burger.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Fermeture du menu sur touche Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  // Blocage du scroll arrière-plan quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-bold text-lg text-neutral-900">{siteConfig.name}</span>
          <span className="text-xs text-accent">{siteConfig.baseline}</span>
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-700 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop + bouton burger */}
        <div className="flex items-center gap-4">
          <Button href="#contact" variant="primary" size="sm" className="hidden md:inline-flex">
            Devis gratuit
          </Button>

          <button
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile — transition CSS native */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={[
          'md:hidden border-t border-neutral-200 bg-white overflow-hidden',
          'transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 text-neutral-700 hover:text-accent hover:bg-neutral-50 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Devis gratuit
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
