import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya ingin berkonsultasi mengenai rencana interior hunian saya di Bandung."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleLeadConversion('Floating WhatsApp Button')}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-studio-900 text-studio-50 hover:bg-accent hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 border border-studio-700 group cursor-pointer"
        aria-label="Chat WhatsApp Arsi Studio"
        title="Konsultasi WhatsApp: 0822-1122-6123"
      >
        <MessageCircle className="w-6 h-6 text-accent-muted group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};
