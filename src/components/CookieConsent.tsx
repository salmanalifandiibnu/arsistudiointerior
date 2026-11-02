import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const STORAGE_KEY = 'arsi_cookie_consent';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cek apakah pengunjung sudah pernah menyetujui cookies sebelumnya
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        // Tampilkan dengan jeda halus 1 detik setelah halaman dimuat
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      // Simpan dismissed agar tidak mengganggu sesi kunjungan ini
      localStorage.setItem(STORAGE_KEY, 'dismissed');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Pemberitahuan Kebijakan Cookies dan Privasi"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="bg-studio-950/95 backdrop-blur-md text-studio-100 border border-studio-800 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col gap-3.5">
        
        {/* Header bar kecil */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-studio-300">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span>Privasi & Kenyamanan Menjelajah</span>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Tutup pemberitahuan cookies"
            className="text-studio-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Deskripsi tenang & lugas */}
        <p className="text-xs sm:text-[13px] text-studio-300 leading-relaxed font-sans font-light">
          Website ini menggunakan cookies esensial dan analitik lokal untuk mengoptimalkan performa tampilan serta kenyamanan membaca portofolio dan referensi interior Anda.
        </p>

        {/* Tombol aksi */}
        <div className="flex items-center justify-end gap-2.5 pt-1">
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-lg bg-white hover:bg-studio-100 text-studio-950 font-mono text-xs font-semibold tracking-wide transition-all duration-200 hover:shadow"
          >
            Mengerti & Lanjutkan
          </button>
        </div>

      </div>
    </aside>
  );
};
