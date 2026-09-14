import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS, type FAQItem } from '../content/faqData';
import { STUDIO_INFO } from '../content/studioInfo';
import { ScrollReveal } from './ScrollReveal';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya membaca FAQ di website dan ingin menanyakan estimasi biaya serta survei untuk hunian saya di Bandung."
  );

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-studio-50 border-b border-studio-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-14 sm:mb-16 space-y-3">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-studio-950 leading-[1.15]">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm text-studio-600 font-light leading-relaxed">
              Jawaban terbuka seputar estimasi anggaran, jadwal pengerjaan, jangkauan survei, hingga jaminan mutu material.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with Soft-Closing Slide */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item: FAQItem, index: number) => {
            const isOpen = openId === item.id;

            return (
              <ScrollReveal key={item.id} delay={index * 50}>
                <div
                  className={`border rounded-md transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-studio-900/30 bg-white shadow-sm'
                      : 'border-studio-200 bg-studio-50/70 hover:border-studio-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 select-none focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-semibold text-studio-950 pr-2 group-hover:text-accent transition-colors">
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? 'bg-studio-900 text-white rotate-180'
                          : 'bg-studio-200/70 text-studio-600 group-hover:bg-studio-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Butter-Smooth CSS Grid Animation Container */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-studio-600 font-light leading-relaxed border-t border-studio-100">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick Consultation Footnote with Tactile Arrow Glide */}
        <ScrollReveal delay={150}>
          <div className="mt-12 p-6 sm:p-8 rounded-md bg-studio-100/50 border border-studio-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-heading text-base font-bold text-studio-950">
                Punya pertanyaan spesifik mengenai denah atau anggaran ruangan Anda?
              </h3>
              <p className="text-xs text-studio-500 font-light">
                Diskusikan langsung bersama tim arsitek kami tanpa biaya konsultasi awal.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadConversion('FAQ WhatsApp CTA')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-studio-950 hover:bg-accent text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shrink-0 shadow-sm w-full sm:w-auto group"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tanya via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-studio-400 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
