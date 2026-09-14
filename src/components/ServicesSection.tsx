import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../content/servicesData';
import { STUDIO_INFO } from '../content/studioInfo';
import { ScrollReveal } from './ScrollReveal';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

export const ServicesSection: React.FC = () => {
  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya ingin mendiskusikan kebutuhan layanan interior hunian saya di Bandung."
  );

  return (
    <section id="layanan" className="py-24 sm:py-36 bg-studio-100/40 border-b border-studio-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-xl">
              <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-studio-950 leading-[1.15]">
                Layanan & Kapabilitas
              </h2>
              <p className="text-sm text-studio-600 font-light leading-relaxed">
                Perancangan dan pembuatan furniture custom terintegrasi sesuai kebutuhan ruang hunian Anda.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadConversion('Services Section CTA')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-studio-900 hover:text-accent transition-colors pb-1 border-b border-studio-900 hover:border-accent shrink-0 group"
            >
              <span>Konsultasi Layanan</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Clean Bento Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="h-full p-8 sm:p-10 rounded-md border border-studio-200 bg-studio-50 shadow-sm flex flex-col justify-between space-y-6 hover:border-accent/80 hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-studio-950">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-studio-600 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-studio-200/70 space-y-2">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-baseline gap-2.5 text-xs text-studio-700 font-light">
                        <span className="text-accent font-mono text-[9px] font-bold">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-studio-200/70 text-[11px] font-mono text-studio-400">
                  Multipleks 18mm & PVC Board • Hardware Soft-Closing (Häfele / Huben / Blum)
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
