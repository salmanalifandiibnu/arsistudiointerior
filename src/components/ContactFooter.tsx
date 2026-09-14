import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { ScrollReveal } from './ScrollReveal';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

export const ContactFooter: React.FC = () => {
  const footerWaUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya ingin berkonsultasi mengenai rencana interior hunian saya di Bandung."
  );

  const directPhoneWaUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya menghubungi langsung melalui kontak website untuk konsultasi interior."
  );

  return (
    <footer id="kontak" className="bg-studio-950 text-studio-50 relative overflow-hidden">
      
      {/* Main Info Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-studio-800/80 pb-16">
            
            {/* Brand Col (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <img
                  src="/images/branding/logo-white-color.png"
                  alt="Arsi Studio Interior"
                  className="h-9 w-auto object-contain"
                />
                <span className="text-[10px] font-mono tracking-[0.25em] text-accent-muted uppercase block">
                  {STUDIO_INFO.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-studio-400 font-light leading-relaxed max-w-md">
                {STUDIO_INFO.subtagline}
              </p>

              <div className="pt-2">
                <a
                  href={footerWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLeadConversion('Footer Main WhatsApp CTA')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-studio-950 bg-studio-50 hover:bg-accent hover:text-white rounded-sm transition-all shadow-sm w-full sm:w-auto group"
                >
                  <MessageCircle className="w-4 h-4 text-studio-950 group-hover:text-white transition-colors" />
                  <span>Diskusi Langsung via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-studio-950 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Location & Studio Hours (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-muted block">
                  WORKSHOP & STUDIO (AKTIF)
                </span>
              </div>

              <div className="space-y-4 text-xs text-studio-400 font-light leading-relaxed">
                <div>
                  <span className="text-white block font-medium mb-1 font-mono text-[11px]">Alamat Workshop:</span>
                  <p>{STUDIO_INFO.address}</p>
                  <div className="pt-1">
                    <a
                      href={STUDIO_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-muted hover:text-white hover:underline font-mono text-[11px] inline-flex items-center gap-1 transition-colors group"
                    >
                      <span>Petunjuk Arah Google Maps</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                  </div>
                </div>

              <div className="pt-2 border-t border-studio-800/60">
                <span className="text-white block font-medium mb-0.5 font-mono text-[11px]">Waktu Operasional:</span>
                <span>{STUDIO_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-muted block">
              HUBUNGI LANGSUNG
            </span>

            <div className="space-y-3 text-xs">
              <a
                href={directPhoneWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLeadConversion('Footer Direct Phone Card')}
                className="block p-3 border border-studio-800 hover:border-accent/60 transition-colors bg-studio-900/40"
              >
                <span className="text-[10px] text-studio-500 uppercase block font-mono">WhatsApp & Telepon</span>
                <span className="text-white font-mono text-sm font-semibold">{STUDIO_INFO.phone}</span>
              </a>
            </div>
          </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-studio-500 gap-4 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <span>Sukamiskin, Arcamanik</span>
            <span>•</span>
            <span className="text-accent-muted">Bandung, Jawa Barat</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
