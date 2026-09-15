import React, { useEffect, useRef } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

interface HeroMobileVideoProps {
  onScrollyComplete?: (isComplete: boolean) => void;
}

export const HeroMobileVideo: React.FC<HeroMobileVideoProps> = ({
  onScrollyComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya ingin berkonsultasi mengenai kebutuhan custom interior hunian saya di Bandung."
  );

  const handleConsultationClick = () => {
    handleLeadConversion('hero_mobile_cta');
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#portofolio') || document.querySelector('main');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // When scrolled past half of the mobile hero, activate navbar
      const isPast = rect.bottom <= window.innerHeight * 0.7;
      if (onScrollyComplete) {
        onScrollyComplete(isPast);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Ensure video plays on mobile low-power mode or background tab resume
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be deferred until first user touch
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollyComplete]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[580px] bg-studio-950 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Looping Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/before-after/raw-site.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Vignette Overlays */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-studio-950/80 via-studio-950/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-studio-950 via-studio-950/75 to-transparent pointer-events-none z-10" />

      {/* Top Header Bar (Centered) */}
      <div className="relative z-20 pt-6 px-6 flex items-center justify-center">
        <img
          src="/images/branding/logo-white-color.png"
          alt="Arsi Studio Interior"
          className="h-8 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Bottom Content Area (Centered) */}
      <div className="relative z-20 px-6 pb-8 flex flex-col gap-5 items-center">
        {/* Architectural Narrative */}
        <div className="space-y-1.5 text-center max-w-md mx-auto px-2">
          <h1 className="font-heading text-[19px] sm:text-[22px] font-semibold text-studio-50 leading-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] whitespace-nowrap">
            Harmoni Rasa di Setiap Sudut.
          </h1>
          <p className="text-[11px] sm:text-xs text-studio-300 leading-normal drop-shadow whitespace-nowrap">
            Sentuhan karya nyata untuk ruang hidup Anda.
          </p>
        </div>

        {/* Dual CTA Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1 w-full max-w-xs mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConsultationClick}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent text-studio-950 font-medium text-xs shadow-lg shadow-accent/20 hover:brightness-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi</span>
          </a>

          <a
            href="#portofolio"
            onClick={handleExploreClick}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-studio-900/70 text-studio-100 border border-studio-700/60 backdrop-blur-md font-medium text-xs active:scale-95 transition-all"
          >
            <span>Portofolio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>
      </div>
    </div>
  );
};
