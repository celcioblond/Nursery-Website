import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesOverview from '@/components/ServicesOverview'
import AboutSection from '@/components/AboutSection'
import QuoteSection from '@/components/QuoteSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <QuoteSection />
      <Footer />
    </main>
  )
}

