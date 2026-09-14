import React from 'react';
import { BRAND_PARTNERS, type BrandPartner } from '../content/materialsData';
import { ScrollReveal } from './ScrollReveal';

export const BrandPartnersSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-studio-100/50 border-b border-studio-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div>
            <p className="text-center font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-studio-400 mb-8 sm:mb-10 font-medium">
              Mitra Brand Material Finishing & Hardware Resmi
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
              {BRAND_PARTNERS.map((brand: BrandPartner) => (
                <div
                  key={brand.id}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  title={`${brand.name} - ${brand.description}`}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    decoding="async"
                    className="h-7 sm:h-8 w-auto max-w-[130px] sm:max-w-[145px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
