import { useState } from 'react';
import { HeroScrollytelling } from './components/HeroScrollytelling';
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

  return (
    <div className="min-h-screen bg-studio-50 text-studio-900 flex flex-col font-sans selection:bg-studio-900 selection:text-studio-50">
      
      {/* Dynamic Slide-Down Navbar (Hidden during scrollytelling) */}
      <Navbar visible={isPastHero} />

      {/* 300-Frame Canvas Scrollytelling Hero */}
      <HeroScrollytelling
        onScrollyComplete={(completed) => setIsPastHero(completed)}
      />

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
