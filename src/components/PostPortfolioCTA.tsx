import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { ScrollReveal } from './ScrollReveal';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

export const PostPortfolioCTA: React.FC = () => {
  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya telah melihat material dan portofolio Anda, dan ingin berdiskusi mengenai rencana custom interior hunian saya di Bandung."
  );

  return (
    <section className="py-20 sm:py-28 bg-studio-950 text-studio-50 border-y border-studio-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="border border-studio-800/80 p-8 sm:p-14 bg-studio-900/30 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white leading-tight">
                Melihat konsep yang relevan dengan hunian Anda?
              </h2>
              <p className="text-xs sm:text-sm text-studio-400 font-light leading-relaxed">
                Diskusikan denah dan kebutuhan furniture custom hunian Anda langsung bersama arsitek {STUDIO_INFO.name}.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLeadConversion('CTA Banner - Post Material')}
                className="w-full md:w-auto flex md:inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-mono uppercase tracking-wider text-studio-950 bg-studio-50 hover:bg-accent hover:text-white transition-all rounded-sm shadow-md group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-studio-950 group-hover:text-white transition-colors" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-studio-950 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
