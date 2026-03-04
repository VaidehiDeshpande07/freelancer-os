'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Pricing from '@/components/pricing'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
