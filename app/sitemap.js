import { siteConfig } from '@/config/site.config'

/**
 * sitemap.js — Génère /sitemap.xml automatiquement (Next.js App Router)
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  return [
    {
      url:             siteConfig.url,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        1.0,
    },
    {
      url:             `${siteConfig.url}/mentions-legales`,
      lastModified:    new Date(),
      changeFrequency: 'yearly',
      priority:        0.3,
    },
    {
      url:             `${siteConfig.url}/politique-confidentialite`,
      lastModified:    new Date(),
      changeFrequency: 'yearly',
      priority:        0.3,
    },
  ]
}
