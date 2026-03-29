// 1. Next.js
import { DM_Sans } from 'next/font/google'
// 4. Composants locaux
import Header             from '@/components/layout/Header'
import Footer             from '@/components/layout/Footer'
import FloatingCallButton from '@/components/layout/FloatingCallButton'
// 5. Config + styles
import { siteConfig }    from '@/config/site.config'
import '@/styles/globals.css'

// DM Sans — police principale titres + corps (Style B "Moderne Épuré")
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:  'Moreau Peinture — Artisan peintre à Lille',
    template: '%s | Moreau Peinture',
  },
  description:
    'Julien Moreau, artisan peintre certifié RGE à Lille. Peinture intérieure, extérieure, ravalement de façade dans toute la métropole lilloise. Devis gratuit.',
  keywords: [
    'peintre Lille', 'artisan peintre Lille', 'peinture intérieure Lille',
    'peinture extérieure Lille', 'ravalement façade Lille', 'peintre RGE Lille',
    'devis peinture Lille', 'peintre Roubaix', 'peintre Tourcoing',
  ],
  authors:  [{ name: siteConfig.founder }],
  creator:  siteConfig.founder,
  openGraph: {
    type:        'website',
    locale:      'fr_FR',
    url:         siteConfig.url,
    siteName:    siteConfig.name,
    title:       'Moreau Peinture — Artisan peintre à Lille',
    description: 'Artisan peintre certifié RGE à Lille depuis 15 ans. Devis gratuit.',
    images: [{
      url:    '/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'Moreau Peinture — Artisan peintre à Lille',
    }],
  },
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
}

// Schema.org LocalBusiness — aide les moteurs à comprendre le contexte local
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type':    'LocalBusiness',
  name:        siteConfig.name,
  description: 'Artisan peintre certifié RGE à Lille. Peinture intérieure, extérieure, ravalement de façade.',
  url:         siteConfig.url,
  telephone:   siteConfig.phone,
  email:       siteConfig.email,
  founder: {
    '@type': 'Person',
    name:     siteConfig.founder,
  },
  address: {
    '@type':           'PostalAddress',
    addressLocality:    siteConfig.city,
    postalCode:         siteConfig.zip,
    addressCountry:    'FR',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:    50.6292,
    longitude:   3.0573,
  },
  areaServed: siteConfig.zone.map((city) => ({
    '@type': 'City',
    name:     city,
  })),
  hasCredential: siteConfig.certifications,
  priceRange:   '€€',
  image:         `${siteConfig.url}/og-image.jpg`,
}

/**
 * RootLayout — Layout racine : Header sticky + contenu + Footer + bouton appel flottant
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
