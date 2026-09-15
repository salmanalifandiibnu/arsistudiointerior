import { useState, useEffect } from 'react';
import { HeroScrollytelling } from './components/HeroScrollytelling';
import { HeroMobileVideo } from './components/HeroMobileVideo';
import { Navbar } from './components/Navbar';
import { PrecisionSliderSection } from './components/PrecisionSliderSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PostPortfolioCTA } from './components/PostPortfolioCTA';
import { WorkflowSection } from './components/WorkflowSection';
import { MaterialsEducationSection } from './components/MaterialsEducationSection';
import { FAQSection } from './components/FAQSection';
import { BrandPartnersSection } from './components/BrandPartnersSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [isPastHero, setIsPastHero] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-studio-50 text-studio-900 flex flex-col font-sans selection:bg-studio-900 selection:text-studio-50">
      
      {/* Dynamic Slide-Down Navbar */}
      <Navbar visible={isPastHero} />

      {/* Adaptive Hero Experience:
          - Mobile (< 768px): Lightweight 100dvh Video Background (Zero sequence frames downloaded)
          - Desktop / Tablet (>= 768px): Cinematic 300-frame Canvas Scrollytelling */}
      {isMobile ? (
        <HeroMobileVideo onScrollyComplete={(completed) => setIsPastHero(completed)} />
      ) : (
        <HeroScrollytelling onScrollyComplete={(completed) => setIsPastHero(completed)} />
      )}

      {/* Content Stream (Post-Hero) */}
      <main className="flex-grow">
        {/* 1. Interactive Precision Bridge: Raw Site to Finished Luxury Kitchen */}
        <PrecisionSliderSection />

        {/* 2. Visual Hook: 26 Real Projects Bento Grid with Category Filters */}
        <PortfolioSection />

        {/* 2. Services & Scope Capabilities */}
        <ServicesSection />
        
        {/* 3. Indonesian Interior Materials Education (Substrates) */}
        <MaterialsEducationSection />

        {/* 4. High-Impact CTA Banner (Swapped with Brand Section) */}
        <PostPortfolioCTA />

        {/* 5. Transparent 4-Step Working Flow */}
        <WorkflowSection />

        {/* 6. Frequently Asked Questions (Objection Handling & Transparency) */}
        <FAQSection />

        {/* 7. Official Brand Partners Showcase (Swapped to Pre-Footer) */}
        <BrandPartnersSection />
      </main>

      {/* Studio Location & Footer */}
      <ContactFooter />

      {/* Floating Action Controls */}
      {isPastHero && (
        <>
          <BackToTop />
          <FloatingWhatsApp />
        </>
      )}

    </div>
  );
}

export default App;
