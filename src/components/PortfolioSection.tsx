import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, type PortfolioProject } from '../content/portfolioData';
import { PortfolioModal } from './PortfolioModal';
import { ScrollReveal } from './ScrollReveal';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  // Filter projects by active category
  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const activeProject = activeProjectIndex !== null ? filteredProjects[activeProjectIndex] : null;

  // Determine Bento Grid spans based on total count to ensure 0 empty cells
  const getBentoSpan = (index: number, total: number) => {
    // 1. All 26 Items: Architectural dynamic rhythm with tailored flush closure
    if (total === 26) {
      if (index === 25) {
        return 'col-span-1 row-span-1 md:col-span-3 md:row-span-1 lg:col-span-1 lg:row-span-1';
      }
      if (index >= 23) {
        return 'col-span-1 row-span-1';
      }
      const pattern = index % 8;
      switch (pattern) {
        case 0:
          return 'sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2';
        case 3:
          return 'sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1';
        case 5:
          return 'sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2';
        case 6:
          return 'sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1';
        default:
          return 'col-span-1 row-span-1';
      }
    }

    // 2. Filtered 5 Items (Kitchen Set, Backdrop TV):
    // 2x2 featured card + four 1x1 cards = perfectly fills 4x2 desktop grid
    if (total === 5) {
      if (index === 0) return 'sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2';
      return 'col-span-1 row-span-1';
    }

    // 3. Filtered 4 Items (Kamar Tidur, Walk-in Closet, Laundry):
    // 2x2 featured + two 1x1 + one 2x1 card = perfectly fills 4x2 desktop grid
    if (total === 4) {
      if (index === 0) return 'sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2';
      if (index === 3) return 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1';
      return 'col-span-1 row-span-1';
    }

    return 'col-span-1 row-span-1';
  };

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return PORTFOLIO_PROJECTS.length;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === catId).length;
  };

  const handleOpenProject = (index: number) => {
    setActiveProjectIndex(index);
  };

  const handleCloseProject = () => {
    setActiveProjectIndex(null);
  };

  const handlePrevProject = () => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) => (prev! > 0 ? prev! - 1 : filteredProjects.length - 1));
  };

  const handleNextProject = () => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) => (prev! < filteredProjects.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="portofolio" className="py-8 sm:py-12 lg:py-16 bg-studio-50 w-full overflow-hidden border-b border-studio-200">
      
      {/* Architectural Section Header & Category Filter Bar */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="flex flex-col items-center text-center gap-6 pb-6 border-b border-studio-200">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-studio-950 leading-[1.15]">
              Portofolio Karya Nyata
            </h2>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {PORTFOLIO_CATEGORIES.map((cat) => {
                const count = getCategoryCount(cat.id);
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setActiveProjectIndex(null);
                    }}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-studio-950 text-white shadow-sm font-medium scale-[1.02]'
                        : 'bg-white text-studio-600 hover:text-studio-950 hover:bg-studio-100 border border-studio-200/80'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                        isActive ? 'bg-studio-800 text-studio-200' : 'bg-studio-100 text-studio-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Full-Width Seamless Bento Grid with Smooth Cross-Fade Animation */}
      <div className="w-full px-1.5 sm:px-2 lg:px-4 xl:px-6">
        <div
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-1 sm:gap-1.5 lg:gap-[2px] auto-rows-[280px] sm:auto-rows-[300px] lg:auto-rows-[340px] xl:auto-rows-[380px] animate-portfolio-reveal"
        >
          {filteredProjects.map((project: PortfolioProject, index: number) => {
            const bentoSpan = getBentoSpan(index, filteredProjects.length);

            return (
              <div
                key={project.id}
                onClick={() => handleOpenProject(index)}
                className={`${bentoSpan} relative rounded-sm overflow-hidden bg-studio-900 cursor-pointer group transition-all duration-500`}
              >
                {/* Full-Bleed Image (Native Lazy Load & Async Decode) */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Navy Gradient Overlay (Only visible on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D32]/95 via-[#0C1D32]/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

                {/* Typography (Pure white title on dark navy gradient) */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white flex items-end justify-between gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                  <div className="space-y-1 max-w-[85%]">
                    <span className="text-[10px] sm:text-[11px] font-mono text-studio-200 uppercase tracking-wider block font-medium">
                      {project.categoryLabel} • {project.location.split(',')[0]}
                    </span>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Subtle Arrow Indicator on Hover with Tactile Glide */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110 shrink-0 shadow-md">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Lightbox Modal with Next/Prev navigation */}
      <PortfolioModal
        project={activeProject}
        currentIndex={activeProjectIndex !== null ? activeProjectIndex : undefined}
        totalProjects={filteredProjects.length}
        onClose={handleCloseProject}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
      />
    </section>
  );
};
