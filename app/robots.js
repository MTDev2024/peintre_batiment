import { siteConfig } from '@/config/site.config'

/**
 * robots.js — Génère /robots.txt automatiquement (Next.js App Router)
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow:     '/',
        disallow:  '/api/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
