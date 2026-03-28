// 4. Sections
import HeroSection          from '@/components/sections/HeroSection'
import ServicesSection      from '@/components/sections/ServicesSection'
import AboutSection         from '@/components/sections/AboutSection'
import GallerySection       from '@/components/sections/GallerySection'
import TestimonialsSection  from '@/components/sections/TestimonialsSection'
import FaqSection           from '@/components/sections/FaqSection'
import ContactSection       from '@/components/sections/ContactSection'

/**
 * Page principale — Site one-page Moreau Peinture
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
