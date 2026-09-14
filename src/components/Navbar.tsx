import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

interface NavbarProps {
  visible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ visible }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya ingin berkonsultasi mengenai kebutuhan custom interior hunian saya di Bandung."
  );

  const navLinks = [
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Edukasi Material', href: '#material' },
    { name: 'Alur Kerja', href: '#alur-kerja' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out transform ${
        visible
          ? 'translate-y-0 opacity-100 shadow-sm glass-panel'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/images/branding/logo-original.png"
              alt="Arsi Studio Interior"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links (Visible on lg+) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-studio-700 hover:text-studio-950 transition-colors relative group py-1 whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp Action Button (Visible on lg+) */}
          <div className="hidden lg:flex items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadConversion('Navbar Desktop WhatsApp')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-studio-50 bg-studio-900 hover:bg-accent rounded-sm transition-all shadow-sm group whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent-muted group-hover:text-white transition-colors" />
              <span>WhatsApp Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-studio-400 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile & Tablet Controls (Visible below lg) */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadConversion('Navbar Mobile Icon WhatsApp')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-studio-900 bg-studio-100 hover:bg-accent hover:text-white rounded-sm transition-colors text-xs font-medium"
              title="Chat WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline font-mono text-[11px] font-semibold">WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-sm text-studio-900 hover:bg-studio-100"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-studio-50 border-t border-studio-200 px-6 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-studio-800 hover:text-accent py-1.5 border-b border-studio-200/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleLeadConversion('Navbar Mobile Drawer WhatsApp');
                setMobileOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-studio-50 bg-studio-900 hover:bg-accent rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-accent-muted" />
              <span>Konsultasi via WhatsApp (0822-1122-6123)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
