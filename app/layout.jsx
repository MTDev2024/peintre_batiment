// 1. Next.js
import { Geist } from 'next/font/google'
// 5. Styles
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
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
 * RootLayout — Layout racine de l'application
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
