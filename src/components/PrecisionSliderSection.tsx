import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PrecisionSliderSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  // Global window listeners when dragging so mouse can move outside bounds
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const onTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  // Keyboard accessibility (Left / Right keys adjust by 4%)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 4));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 4));
    }
  };

  return (
    <section id="transformasi-presisi" className="py-20 sm:py-28 bg-studio-100/50 border-b border-studio-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-studio-950 leading-tight md:whitespace-nowrap">
              Dari Lokasi Mentah ke Mahakarya Nyata
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-studio-600 font-light leading-relaxed">
              Bukti transformasi fisik arsitektural: Bagaimana sudut dinding semen kasar, instalasi pipa terbuka, dan kabel beton kami rancang ulang menjadi dapur modern Dark Charcoal & Calacatta Gold Marble berpresisi milimeter.
            </p>
          </div>
        </ScrollReveal>

        {/* The Interactive Split-Slider Card */}
        <ScrollReveal delay={100}>
          <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[680px] rounded-lg overflow-hidden select-none shadow-xl border border-studio-300/80 cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-accent group"
          >
            {/* 1. Base Image (AFTER: Finished Luxury Kitchen) */}
            <img
              src="/images/before-after/finished-kitchen.jpg"
              alt="Dapur Mewah Dark Charcoal & Calacatta Marble Terpasang Selesai"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* 2. Top Image (BEFORE: Raw Unfinished Construction Site) with Clip-Path */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img
                src="/images/before-after/raw-site.jpg"
                alt="Kondisi Lapangan Mentah Sebelum Fabrikasi"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>

            {/* 3. Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Circular Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-studio-950 text-white border-2 border-white shadow-2xl flex items-center justify-center pointer-events-auto transition-transform duration-200 group-hover:scale-110 active:scale-95">
                <MoveHorizontal className="w-5 h-5 text-accent-muted" />
              </div>
            </div>

            {/* 4. Overlay Information Badges */}
            {/* Left Badge (Before) */}
            <div
              className={`absolute top-3 left-3 sm:top-6 sm:left-6 z-10 transition-opacity duration-300 ${
                sliderPosition < 15 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-studio-950/85 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 shadow-lg whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span>
                  <span className="sm:hidden">SEBELUM</span>
                  <span className="hidden sm:inline">SEBELUM: DINDING SEMEN MENTAH</span>
                </span>
              </div>
            </div>

            {/* Right Badge (After) */}
            <div
              className={`absolute top-3 right-3 sm:top-6 sm:right-6 z-10 transition-opacity duration-300 ${
                sliderPosition > 85 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-studio-950/85 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 shadow-lg whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>
                  <span className="sm:hidden">SESUDAH</span>
                  <span className="hidden sm:inline">SESUDAH: INSTALASI CHARCOAL & MARMER</span>
                </span>
              </div>
            </div>

            {/* 5. Bottom Interactive Hint */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-max max-w-[90%]">
              <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-studio-950/75 backdrop-blur-md border border-white/10 text-studio-200 font-mono text-[10px] sm:text-xs tracking-wider shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <MoveHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent shrink-0" />
                <span>
                  <span className="sm:hidden">Geser untuk membandingkan</span>
                  <span className="hidden sm:inline">Geser ke kiri / kanan untuk membandingkan</span>
                </span>
              </span>
            </div>

          </div>
        </ScrollReveal>

        {/* 3 Key Architectural Highlights from this Transformation */}
        <ScrollReveal delay={180}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 sm:mt-12">
            
            <div className="p-6 rounded-md bg-white border border-studio-200/90 shadow-sm space-y-2">
              <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block">
                01. Penutupan Jalur Pipa
              </span>
              <h4 className="font-heading text-base font-bold text-studio-950">
                Akurasi Letak Sink & Paralon
              </h4>
              <p className="text-xs text-studio-600 font-light leading-relaxed">
                Lubang pipa air bersih dan drainase yang awalnya terbuka ditutup presisi dengan kabinet bawah berbahan 100% PVC Board kedap air.
              </p>
            </div>

            <div className="p-6 rounded-md bg-white border border-studio-200/90 shadow-sm space-y-2">
              <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block">
                02. Integrasi Kabinet Rapat Plafon
              </span>
              <h4 className="font-heading text-base font-bold text-studio-950">
                Kabinet Full-Height Rata Plafon
              </h4>
              <p className="text-xs text-studio-600 font-light leading-relaxed">
                Modul Charcoal Matte difabrikasi sesuai tinggi elevasi dinding eksisting sehingga tidak menyisakan celah sarang debu di atas lemari.
              </p>
            </div>

            <div className="p-6 rounded-md bg-white border border-studio-200/90 shadow-sm space-y-2">
              <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block">
                03. Kemewahan Calacatta Gold
              </span>
              <h4 className="font-heading text-base font-bold text-studio-950">
                Waterfall Island & Backsplash Utuh
              </h4>
              <p className="text-xs text-studio-600 font-light leading-relaxed">
                Slab marmer Calacatta dengan urat emas jatuh mengalir (*waterfall edge*) mulus pada pulau dapur dipadukan dengan pencahayaan hangat 3000K.
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
