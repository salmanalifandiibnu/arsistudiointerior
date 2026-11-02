import { useState, useEffect } from 'react';
import { useRouter } from './utils/router';
import { ARTICLES } from './content/articles';
import { InsightsSection } from './components/InsightsSection';
import { ArticlePage } from './components/ArticlePage';
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
import { CookieConsent } from './components/CookieConsent';

export function App() {
  const { path, navigate } = useRouter();
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

  // Check if current path matches an article: /wawasan/:slug
  const activeArticleSlug = path.startsWith('/wawasan/')
    ? path.replace('/wawasan/', '').replace(/\/$/, '')
    : null;

  const currentArticle = activeArticleSlug
    ? ARTICLES.find((a) => a.slug === activeArticleSlug)
    : null;

  // Sync document title dynamically
  useEffect(() => {
    if (currentArticle) {
      document.title = `${currentArticle.title} — Arsi Studio Interior`;
    } else {
      document.title = 'Arsi Studio Interior — Design & Build Custom Interior Specialist Bandung';
    }
  }, [currentArticle]);

  // Handle direct anchor navigation (e.g. /#wawasan from ArticlePage or direct link)
  useEffect(() => {
    if (!currentArticle) {
      const hash = window.location.hash;
      if (hash) {
        const scrollToTarget = () => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'auto' });
            setIsPastHero(true);
            window.dispatchEvent(new Event('scroll'));
            return true;
          }
          return false;
        };

        if (!scrollToTarget()) {
          const t1 = setTimeout(scrollToTarget, 40);
          const t2 = setTimeout(scrollToTarget, 150);
          const t3 = setTimeout(scrollToTarget, 350);
          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      }
    }
  }, [currentArticle, path]);

  // If visiting an article page, render the dedicated ArticlePage
  if (currentArticle) {
    return (
      <>
        <ArticlePage
          article={currentArticle}
          onNavigate={navigate}
        />
        <CookieConsent />
      </>
    );
  }

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

        {/* 3. Services & Scope Capabilities */}
        <ServicesSection />
        
        {/* 4. Indonesian Interior Materials Education (Substrates) */}
        <MaterialsEducationSection />

        {/* 5. High-Impact CTA Banner (Swapped with Brand Section) */}
        <PostPortfolioCTA />

        {/* 6. Transparent 4-Step Working Flow */}
        <WorkflowSection />

        {/* 7. Frequently Asked Questions (Objection Handling & Transparency) */}
        <FAQSection />

        {/* 8. Wawasan Lapangan & Integritas Material (6 Artikel dengan halaman mandiri) */}
        <InsightsSection onNavigate={navigate} />

        {/* 9. Official Brand Partners Showcase (Swapped to Pre-Footer) */}
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

      {/* Discreet Studio Cookie & Privacy Consent */}
      <CookieConsent />

    </div>
  );
}

export default App;
