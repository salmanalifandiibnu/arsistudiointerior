import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroScrollytellingProps {
  onScrollProgress?: (progress: number) => void;
  onScrollyComplete?: (isComplete: boolean) => void;
}

const TOTAL_FRAMES = 300;

// Format frame index to 3-digit filename: 1 -> "001"
const getFrameUrl = (index: number) => {
  const pad = String(index).padStart(3, '0');
  return `/sequence/ezgif-frame-${pad}.jpg`;
};

export const HeroScrollytelling: React.FC<HeroScrollytellingProps> = ({
  onScrollProgress,
  onScrollyComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Loaded frames cache (index 1 to 300)
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const animFrameIdRef = useRef<number | null>(null);

  const [activePhase, setActivePhase] = useState<1 | 2 | 3>(1);

  // Draw a frame onto canvas with cover fit & high-DPI scaling
  const drawFrame = useCallback((frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested frame or nearest loaded fallback
    let img = imagesRef.current.get(frameNumber);
    if (!img || !img.complete) {
      // Find nearest loaded frame
      let nearestDist = Infinity;
      let nearestKey = 1;
      imagesRef.current.forEach((image, key) => {
        if (image.complete) {
          const dist = Math.abs(key - frameNumber);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestKey = key;
          }
        }
      });
      img = imagesRef.current.get(nearestKey);
    }

    if (!img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Cover fit logic
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawW = width;
    let drawH = height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawW = height * imgRatio;
      offsetX = (width - drawW) / 2;
    } else {
      drawH = width / imgRatio;
      offsetY = (height - drawH) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  }, []);

  // Smooth LERP render loop
  useEffect(() => {
    const renderLoop = () => {
      // Smooth interpolation
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.15;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameToDraw = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentFrameRef.current)));
      drawFrame(frameToDraw);

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawFrame]);

  // Progressive concurrent batch preloader
  useEffect(() => {
    let isCancelled = false;

    // 1. Instant load Frame 1
    const img1 = new Image();
    img1.src = getFrameUrl(1);
    img1.onload = () => {
      if (isCancelled) return;
      imagesRef.current.set(1, img1);
      drawFrame(1);
    };

    // 2. Load remaining frames in batches of 15
    const loadRemainingFrames = async () => {
      const BATCH_SIZE = 15;
      for (let i = 2; i <= TOTAL_FRAMES; i += BATCH_SIZE) {
        if (isCancelled) break;
        const batchPromises: Promise<void>[] = [];

        for (let j = i; j < i + BATCH_SIZE && j <= TOTAL_FRAMES; j++) {
          const promise = new Promise<void>((resolve) => {
            const img = new Image();
            img.src = getFrameUrl(j);
            img.onload = () => {
              if (!isCancelled) {
                imagesRef.current.set(j, img);
              }
              resolve();
            };
            img.onerror = () => resolve();
          });
          batchPromises.push(promise);
        }

        await Promise.all(batchPromises);
        // Small breathing gap between batches to keep mobile network thread responsive
        await new Promise((res) => setTimeout(res, 20));
      }
    };

    // Start background loading after frame 1 is initialized
    loadRemainingFrames();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Scroll distance inside this container
      const scrolled = -rect.top;
      const maxScroll = containerHeight - windowHeight;

      if (maxScroll <= 0) return;

      let progress = scrolled / maxScroll;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (onScrollProgress) onScrollProgress(progress);

      // Target frame 1 to 300
      const frameIndex = Math.min(TOTAL_FRAMES, Math.max(1, Math.floor(progress * (TOTAL_FRAMES - 1)) + 1));
      targetFrameRef.current = frameIndex;

      // Active phase based on progress
      if (progress < 0.28) {
        setActivePhase(1);
      } else if (progress < 0.68) {
        setActivePhase(2);
      } else {
        setActivePhase(3);
      }

      // Check if user has scrolled past the scrollytelling container
      const isPast = rect.bottom <= windowHeight + 50;
      if (onScrollyComplete) {
        onScrollyComplete(isPast);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onScrollProgress, onScrollyComplete]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-studio-950"
      style={{ height: '420vh' }} // Generous virtual scroll height for smooth thumb control
    >
      {/* Sticky Canvas Viewport (Mobile & In-App Browser Safe) */}
      <div className="sticky top-0 left-0 w-full h-screen supports-[height:100dvh]:h-[100dvh] overflow-hidden flex items-center justify-center">
        
        {/* The HTML5 Rendering Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />

        {/* Ambient Vignette & Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-950/80 via-transparent to-studio-950/40 pointer-events-none" />

        {/* Subtitle / Narrative Captions: Dynamic 3-Position Eye Journey with Smooth Animation */}
        {/* Phase 1: Meja Desain (Bottom-Left) */}
        <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-12 right-6 sm:right-12 z-20 pointer-events-none flex justify-start">
          <div
            className={`max-w-xl text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activePhase === 1
                ? 'opacity-100 translate-y-0 scale-100'
                : activePhase > 1
                ? 'opacity-0 -translate-y-5 scale-[0.98]'
                : 'opacity-0 translate-y-6 scale-[0.98]'
            }`}
          >
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold text-studio-50 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              Gagasan ruang bermula dari kalkir dan goresan presisi.
            </h1>
          </div>
        </div>

        {/* Phase 2: Transisi Detail & Fabrikasi (Bottom-Right) */}
        <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-12 right-6 sm:right-12 z-20 pointer-events-none flex justify-end">
          <div
            className={`max-w-xl text-right transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activePhase === 2
                ? 'opacity-100 translate-y-0 scale-100'
                : activePhase > 2
                ? 'opacity-0 -translate-y-5 scale-[0.98]'
                : 'opacity-0 translate-y-6 scale-[0.98]'
            }`}
          >
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold text-studio-50 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              Diterjemahkan menjadi potongan multipleks dan rakitan modul.
            </h2>
          </div>
        </div>

        {/* Phase 3: Realita Dapur Jadi (Bottom-Center / Grand Finale) */}
        <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-12 right-6 sm:right-12 z-20 pointer-events-none flex justify-center">
          <div
            className={`max-w-2xl text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activePhase === 3
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-[0.98]'
            }`}
          >
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold text-studio-50 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              Hadir nyata menjadi kehangatan hunian Anda.
            </h2>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-12 sm:right-12 z-20 flex items-center justify-between pointer-events-none border-t border-studio-800/60 pt-3">
          
          <div className="flex items-center gap-2 text-[11px] text-studio-400 font-mono tracking-wider">
            <ChevronDown className="w-3.5 h-3.5 text-accent animate-bounce" />
            <span>Gulir untuk eksplorasi</span>
          </div>

        </div>

      </div>
    </div>
  );
};
