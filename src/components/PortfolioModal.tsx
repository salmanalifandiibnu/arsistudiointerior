import React, { useEffect } from 'react';
import { X, ArrowUpRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { type PortfolioProject } from '../content/portfolioData';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  currentIndex?: number;
  totalProjects?: number;
  allProjects?: PortfolioProject[];
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  currentIndex,
  totalProjects,
  allProjects,
  onClose,
  onPrev,
  onNext,
}) => {
  // Smart Adjacent Project Preloader (Next / Prev instant 0ms transition)
  useEffect(() => {
    if (currentIndex === undefined || !allProjects || allProjects.length <= 1) return;
    const nextIdx = (currentIndex + 1) % allProjects.length;
    const prevIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;

    const nextImg = new Image();
    nextImg.src = allProjects[nextIdx].image;

    const prevImg = new Image();
    prevImg.src = allProjects[prevIdx].image;
  }, [currentIndex, allProjects]);
  // Keyboard Escape, Left, Right listener
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onPrev, onNext]);

  // Body scroll lock
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  if (!project) return null;

  const waMessage = `Halo Arsi Studio Interior, saya sedang melihat arsip proyek "${project.title}" (${project.categoryLabel}, lokasi ${project.location}). Apakah saya bisa mendiskusikan denah serupa untuk hunian saya di Bandung?`;
  const waUrl = buildWhatsAppUrl(STUDIO_INFO.whatsappNumber, waMessage);

  return (
    <div
      className="fixed inset-0 z-50 bg-studio-950/85 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden"
      onClick={onClose}
    >
      <div
        className="bg-studio-50 w-full max-w-4xl border border-studio-300 shadow-2xl rounded-sm sm:rounded-md overflow-hidden relative flex flex-col max-h-[92dvh] sm:max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Bar - Fixed / Sticky Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b border-studio-200 bg-studio-50 shrink-0 select-none z-10">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="font-mono text-[11px] sm:text-xs font-bold text-studio-950 uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
              <span className="sm:hidden">SPEC. SHEET</span>
              <span className="hidden sm:inline">SPECIFICATION SHEET</span>
            </span>
            {currentIndex !== undefined && totalProjects !== undefined && (
              <span className="px-1.5 sm:px-2 py-0.5 rounded bg-studio-200/80 text-studio-800 font-mono text-[10px] font-bold whitespace-nowrap">
                {String(currentIndex + 1).padStart(2, '0')}/{String(totalProjects).padStart(2, '0')}
              </span>
            )}
            <span className="text-[11px] font-mono text-studio-400 hidden md:inline truncate">
              • {project.categoryLabel} ({project.location})
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {onPrev && onNext && (
              <div className="flex items-center gap-0.5 sm:gap-1 mr-1 pr-1.5 sm:pr-2 border-r border-studio-200">
                <button
                  onClick={onPrev}
                  className="p-1 sm:p-1.5 rounded-sm hover:bg-studio-200 text-studio-600 hover:text-studio-950 transition-colors"
                  aria-label="Proyek Sebelumnya (←)"
                  title="Sebelumnya (←)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={onNext}
                  className="p-1 sm:p-1.5 rounded-sm hover:bg-studio-200 text-studio-600 hover:text-studio-950 transition-colors"
                  aria-label="Proyek Berikutnya (→)"
                  title="Berikutnya (→)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <button
              onClick={onClose}
              className="text-studio-500 hover:text-studio-950 hover:bg-studio-200/60 p-1 sm:p-1.5 rounded-sm transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Container */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
            
            {/* Photo Column with floating arrows */}
            <div className="lg:col-span-7 bg-studio-900 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[460px] group/photo flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {onPrev && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-studio-950/75 hover:bg-accent text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 sm:opacity-0 sm:group-hover/photo:opacity-100 shadow-lg"
                  aria-label="Sebelumnya"
                  title="Sebelumnya (←)"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
              {onNext && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-studio-950/75 hover:bg-accent text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 sm:opacity-0 sm:group-hover/photo:opacity-100 shadow-lg"
                  aria-label="Berikutnya"
                  title="Berikutnya (→)"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-6 bg-studio-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold block">
                    Gaya Desain: {project.style}
                  </span>
                  <span className="text-[10px] font-mono text-studio-400 md:hidden">
                    {project.categoryLabel}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-studio-950 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-studio-600 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Specifications */}
                <div className="pt-4 border-t border-studio-200/80 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-studio-400 block">
                    Catatan Material:
                  </span>
                  
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[11px] text-studio-400 font-mono block">Papan Inti (Substrate):</span>
                      <span className="text-studio-900 font-medium">{project.primaryMaterial}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-studio-400 font-mono block">Permukaan (Finishing):</span>
                      <span className="text-studio-900 font-medium">{project.finish}</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-3 border-t border-studio-200/80 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-studio-400 block mb-1">
                      Detail Teknis Khusus:
                    </span>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-baseline gap-2 text-xs text-studio-700 font-light">
                        <span className="text-accent font-mono text-[10px] font-bold">—</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action (In-App Browser & Webview Safe Native Link) */}
              <div className="pt-4 pb-2 sm:pb-0 border-t border-studio-200/80">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLeadConversion(`Portfolio Modal - ${project.title}`)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-studio-900 hover:bg-accent text-studio-50 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors group cursor-pointer rounded-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-accent-muted group-hover:text-white transition-colors" />
                  <span>Konsultasi Proyek Serupa via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-studio-400 group-hover:text-white transition-colors" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
