import React from 'react';
import { SUBSTRATE_MATERIALS, type MaterialSpecimen } from '../content/materialsData';
import { ScrollReveal } from './ScrollReveal';

export const MaterialsEducationSection: React.FC = () => {
  return (
    <section id="material" className="py-20 sm:py-32 bg-studio-50 border-b border-studio-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-studio-950 leading-[1.15]">
              Edukasi Papan Inti & Material
            </h2>
            <p className="mt-3 text-sm sm:text-base text-studio-600 font-light leading-relaxed">
              Transparansi konstruksi fisik: Kami hanya menggunakan 3 papan inti struktural standar industri anti-lapuk dan bermitra langsung dengan produsen material orisinal bergaransi.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Substrate Core Boards Grid with Macro Sample Inspection Easing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SUBSTRATE_MATERIALS.map((mat: MaterialSpecimen, index: number) => (
            <ScrollReveal key={mat.id} delay={index * 120}>
              <div
                className="h-full rounded-lg border border-studio-200/90 bg-white shadow-sm flex flex-col justify-between overflow-hidden hover:border-accent/80 hover:shadow-lg transition-all duration-500 ease-out group"
              >
                <div>
                  {/* Visual Specimen Macro Photo with Smooth Easing */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-studio-100 border-b border-studio-200/80">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>

                {/* Specimen Description */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <span className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider block">
                    {mat.categoryLabel}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-studio-950 leading-snug">
                    {mat.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-studio-600 font-light leading-relaxed">
                    {mat.composition}
                  </p>

                  <div className="p-3 bg-studio-50/80 rounded border border-studio-200/60 font-mono text-xs text-studio-700 leading-relaxed">
                    <span className="text-studio-400 block text-[10px] uppercase tracking-wider mb-1">
                      Karakter Fisik Workshop:
                    </span>
                    {mat.workshopReality}
                  </div>
                </div>
              </div>

              {/* Card Application Footer */}
              <div className="px-6 sm:px-7 py-4 border-t border-studio-100 text-xs text-studio-500 font-mono bg-studio-50/60">
                <span className="text-studio-400 block text-[10px] uppercase tracking-wider">
                  Rekomendasi Area:
                </span>
                <span className="text-studio-800 font-medium line-clamp-2 mt-0.5">
                  {mat.recommendedUse}
                </span>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
