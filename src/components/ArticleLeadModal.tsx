import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

interface ArticleLeadModalProps {
  articleTitle: string;
  articleSlug: string;
}

const STORAGE_KEY = 'arsi_article_lead_v5';

// URL material rekomendasi workshop (Plywood Meranti 18mm)
const RECOMMENDED_MATERIAL_URL = 'https://s.shopee.co.id/9zz0YY7835';

const RUANG_OPTIONS = [
  'Kitchen Set',
  'Kamar & Wardrobe',
  'Full Interior',
  'Audit RAB / Lainnya',
];

type ViewState = 'form' | 'exit_offer' | 'submitted';

export const ArticleLeadModal: React.FC<ArticleLeadModalProps> = ({
  articleTitle,
  articleSlug,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewState, setViewState] = useState<ViewState>('form');
  const [nama, setNama] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [ruang, setRuang] = useState('Kitchen Set');
  const [lokasi, setLokasi] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Muncul setelah 10 detik membaca dan hanya sekali per pengunjung
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const alreadySeen = localStorage.getItem(STORAGE_KEY);
      if (alreadySeen) return;
    } catch {
      // Private browsing fallback
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 detik

    return () => clearTimeout(timer);
  }, [articleSlug]);

  // Listener tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
  };

  const handleTriggerExitOffer = () => {
    setViewState('exit_offer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      handleDismiss();
      return;
    }

    if (!nama.trim()) {
      setErrorMsg('Mohon isi nama atau panggilan Anda.');
      return;
    }

    const cleanWa = whatsapp.replace(/\D/g, '');
    if (cleanWa.length < 8) {
      setErrorMsg('Mohon masukkan nomor WhatsApp yang valid.');
      return;
    }

    setErrorMsg('');

    const formattedMessage = [
      `Halo Arsi Studio Interior, saya membaca artikel "${articleTitle}".`,
      ``,
      `Saya ingin konsultasi estimasi biaya pengerjaan interior:`,
      `• Nama: ${nama.trim()}`,
      `• WhatsApp: ${whatsapp.trim()}`,
      `• Kebutuhan Ruang: ${ruang}`,
      lokasi.trim() ? `• Lokasi/Cluster: ${lokasi.trim()}` : null,
      ``,
      `Mohon dibantu gambaran estimasi dan tahapan konsultasi awalnya. Terima kasih!`,
    ]
      .filter((line) => line !== null)
      .join('\n');

    const waUrl = buildWhatsAppUrl(STUDIO_INFO.whatsappNumber, formattedMessage);

    handleLeadConversion('Article Floating Lead Form Submitted');

    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }

    setViewState('submitted');

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Konsultasi Estimasi Biaya Interior"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] animate-in slide-in-from-bottom-6 fade-in duration-300 ease-out"
    >
      {/* Clear Glass Container Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_-10px_rgba(12,29,50,0.18),inset_0_1px_2px_0_rgba(255,255,255,0.9),inset_0_-1px_1px_0_rgba(255,255,255,0.2)] p-5 sm:p-6 text-studio-950">
        
        {/* Prismatic Clear Glass Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/20 blur-xl" />

        {/* STATE 1: Formulir Utama Simulasi Biaya */}
        {viewState === 'form' && (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            
            {/* Invisible Honeypot */}
            <input
              type="text"
              name="entry_check"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Direct Header: Title & Close Button */}
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-studio-950 leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                Simulasi Estimasi Biaya Hunian
              </h4>
              <button
                type="button"
                onClick={handleTriggerExitOffer}
                className="p-1 -mr-1 -mt-0.5 text-studio-700 hover:text-studio-950 hover:bg-white/50 rounded-full transition-colors shrink-0"
                title="Tutup (Esc)"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="-mt-2 text-xs text-studio-800 font-medium leading-relaxed font-sans drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              Kirimkan gambaran ruangan Anda. Tim workshop Arsi bantu hitungkan estimasi transparan berbasis material anti-lapuk.
            </p>

            {/* Clear Glass Segmented Control for Ruang */}
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-wider text-studio-800 font-semibold mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                Kebutuhan Ruang
              </span>
              <div className="grid grid-cols-2 gap-1.5 bg-black/[0.04] backdrop-blur-xs p-1 rounded-xl border border-white/40 shadow-inner">
                {RUANG_OPTIONS.map((item) => {
                  const isSelected = ruang === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRuang(item)}
                      className={`py-1.5 px-2 text-[11px] font-sans rounded-lg transition-all text-center leading-tight truncate ${
                        isSelected
                          ? 'bg-studio-950 text-white shadow-md font-semibold'
                          : 'text-studio-800 hover:text-studio-950 hover:bg-white/60 font-medium'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clear Glass Form Inputs */}
            <div className="space-y-2.5">
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-studio-800 font-semibold mb-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  Nama / Panggilan <span className="text-studio-500 font-sans">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full px-3 py-2 text-xs bg-white/40 backdrop-blur-xs border border-white/60 rounded-xl text-studio-950 placeholder:text-studio-500 focus:bg-white/85 focus:outline-none focus:border-studio-950 focus:ring-1 focus:ring-studio-950/20 transition-all shadow-xs"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-studio-800 font-semibold mb-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  Nomor WhatsApp <span className="text-studio-500 font-sans">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-3 py-2 text-xs bg-white/40 backdrop-blur-xs border border-white/60 rounded-xl text-studio-950 placeholder:text-studio-500 focus:bg-white/85 focus:outline-none focus:border-studio-950 focus:ring-1 focus:ring-studio-950/20 transition-all font-mono shadow-xs"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-studio-800 font-semibold mb-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  Lokasi / Cluster di Bandung <span className="font-sans normal-case text-studio-500">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Contoh: Podomoro Park / KBP / Arcamanik"
                  className="w-full px-3 py-2 text-xs bg-white/40 backdrop-blur-xs border border-white/60 rounded-xl text-studio-950 placeholder:text-studio-500 focus:bg-white/85 focus:outline-none focus:border-studio-950 focus:ring-1 focus:ring-studio-950/20 transition-all shadow-xs"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="text-[11px] text-rose-600 font-medium drop-shadow-xs">{errorMsg}</p>
            )}

            {/* Action Button & Trigger Exit Offer */}
            <div className="pt-1 space-y-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-studio-950 hover:bg-studio-900 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-all group shadow-lg border border-studio-800/80"
              >
                <span>Minta Simulasi Estimasi (WhatsApp)</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <div className="text-center pt-0.5">
                <button
                  type="button"
                  onClick={handleTriggerExitOffer}
                  className="text-[11px] text-studio-700 hover:text-studio-950 font-medium underline transition-colors"
                >
                  Nanti saja
                </button>
              </div>
            </div>

          </form>
        )}

        {/* STATE 2: Exit Offer Elegan (Tanpa Kata Shopee) */}
        {viewState === 'exit_offer' && (
          <div className="relative z-10 space-y-3.5 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-studio-950 text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold tracking-tight text-studio-950 leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  Rekomendasi Material Mandiri
                </h4>
              </div>

              <button
                type="button"
                onClick={handleDismiss}
                className="p-1 -mr-1 -mt-0.5 text-studio-700 hover:text-studio-950 hover:bg-white/50 rounded-full transition-colors shrink-0"
                title="Tutup (Esc)"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-studio-800 leading-relaxed font-sans font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              Belum butuh jasa kontraktor? Anda bisa belanja dan memeriksa langsung spesifikasi papan kayu anti-lapuk standar Workshop Arsi untuk proyek mandiri Anda:
            </p>

            <div className="pt-1 space-y-2.5">
              <a
                href={RECOMMENDED_MATERIAL_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => {
                  handleLeadConversion('Article Exit Offer Clicked');
                  handleDismiss();
                }}
                className="w-full py-3 px-4 bg-studio-950 hover:bg-studio-900 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg border border-studio-800/80 group"
              >
                <span>Akses Rekomendasi Papan Inti & Material</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="text-center pt-0.5">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-[11px] text-studio-600 hover:text-studio-950 underline transition-colors"
                >
                  Tutup & Lanjutkan Membaca
                </button>
              </div>
            </div>

          </div>
        )}

        {/* STATE 3: WhatsApp Sent Success State */}
        {viewState === 'submitted' && (
          <div className="relative z-10 py-4 text-center space-y-2.5">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-800 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            </div>
            <h5 className="font-heading text-sm font-semibold text-studio-950">
              Membuka WhatsApp...
            </h5>
            <p className="text-xs text-studio-800 leading-relaxed font-sans max-w-xs mx-auto">
              Format konsultasi Anda sudah disiapkan. Tim workshop Arsi segera merespons rincian estimasi ruang.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleDismiss}
                className="text-xs font-mono text-studio-600 hover:text-studio-950 underline"
              >
                Tutup jendela
              </button>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
};
