// 1. Next.js
import { DM_Sans } from 'next/font/google'
// 4. Composants locaux
import Header              from '@/components/layout/Header'
import Footer              from '@/components/layout/Footer'
import FloatingCallButton  from '@/components/layout/FloatingCallButton'
// 5. Styles
import '@/styles/globals.css'

// DM Sans — police principale titres + corps (Style B "Moderne Épuré")
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Moreau Peinture — Artisan peintre à Lille',
  description:
    'Julien Moreau, artisan peintre certifié RGE à Lille. Peinture intérieure, extérieure, ravalement de façade. Devis gratuit.',
  openGraph: {
    title: 'Moreau Peinture — Artisan peintre à Lille',
    description:
      'Artisan peintre certifié RGE à Lille depuis 15 ans. Devis gratuit.',
    images: ['/og-image.jpg'],
  },
}

/**
 * RootLayout — Layout racine : Header sticky + contenu + Footer + bouton appel flottant
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
