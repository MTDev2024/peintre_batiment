'use client'

// 1. React
import { useState } from 'react'
// 2. Next.js
import Image from 'next/image'
// 3. Libs tierces
// ⚠️ VÉRIFIER : API yet-another-react-lightbox v3 — syntaxe validée pour ^3.x
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
// 5. Config et data
import { siteConfig } from '@/config/site.config'
import { galleryItems } from '@/data/gallery'

/**
 * GallerySection — Galerie filtrée par catégorie avec lightbox
 * Client Component : gère le filtre actif et l'état ouvert/fermé de la lightbox.
 */
export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen,   setLightboxOpen]   = useState(false)
  const [lightboxIndex,  setLightboxIndex]  = useState(0)

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const slides = filtered.map((item) => ({ src: item.src, alt: item.title }))

  function openLightbox(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section
      id="galerie"
      aria-label="Galerie des réalisations"
      className="py-20 bg-(--color-bg-subtle)"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Nos réalisations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Galerie de travaux
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Découvrez une sélection de chantiers réalisés à Lille et dans la métropole.
          </p>
        </div>

        {/* Filtres catégories */}
        <div
          role="group"
          aria-label="Filtrer par catégorie"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {siteConfig.galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeCategory === cat.id
                  ? 'bg-accent text-white'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-accent hover:text-accent',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                aria-label={`Agrandir la photo : ${item.title}`}
                onClick={() => openLightbox(index)}
                className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm block"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
        />
      </div>
    </section>
  )
}
