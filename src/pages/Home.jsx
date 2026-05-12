import '../components/home/home.css'
import Navbar          from '../components/home/Navbar'
import HeroBanner      from '../components/home/HeroBanner'
import TrustSection    from '../components/home/TrustSection'
import WhyChoose       from '../components/home/WhyChoose'
import WhatWeOffer     from '../components/home/WhatWeOffer'
import AllInOnePlatform from '../components/home/AllInOnePlatform'
import ModulesSection  from '../components/home/ModulesSection'
import PowerfulFeatures from '../components/home/PowerfulFeatures'
import SmartFeatures   from '../components/home/SmartFeatures'
import Testimonials    from '../components/home/Testimonials'
import WhyStandOut     from '../components/home/WhyStandOut'
import AdvancedSection from '../components/home/AdvancedSection'
import FAQSection      from '../components/home/FAQSection'
import CTAFooter       from '../components/home/CTAFooter'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <TrustSection />
        <WhyChoose />
        <WhatWeOffer />
        <AllInOnePlatform />
        <ModulesSection />
        <PowerfulFeatures />
        <SmartFeatures />
        <Testimonials />
        <WhyStandOut />
        <AdvancedSection />
        <FAQSection />
      </main>
      <CTAFooter />
    </>
  )
}
