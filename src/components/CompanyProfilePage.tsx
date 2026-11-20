import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, MapPin, Clock, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

interface CompanyProfilePageProps {
  onNavigate: (path: string) => void;
}

const SCOPE_ITEMS = [
  {
    area: 'Kitchen Set & Pantry',
    detail: 'Fabrikasi bodi struktural Plywood Meranti 18mm dan kabinet area basah/bawah sink berbahan PVC Board 100% kedap air.',
  },
  {
    area: 'Master Bedroom & Wardrobe',
    detail: 'Lemari pakaian setinggi plafon anti-melengkung dengan konstruksi Blockboard Falcata kering oven dan pintu sliding presisi.',
  },
  {
    area: 'Living Room & Backdrop TV',
    detail: 'Panel dinding, kabinet gantung tersembunyi, integrasi kelistrikan, serta pencahayaan arsitektural warm-ambient.',
  },
  {
    area: 'Kamar Anak & Area Kerja',
    detail: 'Desain furnitur adaptif berjangka panjang dengan sudut aman, kapasitas simpan optimal, dan ergonomi meja belajar.',
  },
  {
    area: 'Laundry & Area Servis Lembap',
    detail: 'Kombinasi material polimer anti-rayap dan anti-jamur untuk area mesin cuci, utilitas pipa, dan penyimpanan bersih.',
  },
  {
    area: 'Full Interior Design & Build',
    detail: 'Penanganan menyeluruh satu pintu mulai dari survei ukur laser, visualisasi 3D, RAB transparan, hingga instalasi akhir.',
  },
];

const WORKFLOW_PILLARS = [
  {
    step: '01',
    title: 'Survei Ukur & Konsultasi Denah',
    desc: 'Pengukuran fisik langsung di lokasi hunian (Bandung & Jabodetabek) untuk memetakan titik air, kelistrikan, dan struktur dinding.',
  },
  {
    step: '02',
    title: 'Desain 3D & RAB Terbuka',
    desc: 'Pengajuan visual ruang disertai Rencana Anggaran Biaya terperinci yang mencantumkan merek papan inti, HPL, dan tipe hardware secara jelas.',
  },
  {
    step: '03',
    title: 'Fabrikasi Workshop Arsi',
    desc: 'Pemotongan panel, edging presisi, dan perakitan modul dikerjakan di workshop internal sebelum dikirim ke lokasi proyek.',
  },
  {
    step: '04',
    title: 'Instalasi & Garansi 180 Hari',
    desc: 'Pemasangan rapi di lokasi, serah terima fungsi menyeluruh, serta perlindungan garansi hardware resmi selama 180 hari.',
  },
];

export const CompanyProfilePage: React.FC<CompanyProfilePageProps> = ({ onNavigate }) => {
  const [founderImgError, setFounderImgError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    'Halo Arsi Studio Interior, saya telah melihat profil studio Anda dan ingin mendiskusikan rencana proyek interior.'
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-studio-900 font-sans selection:bg-studio-900 selection:text-studio-50">
      
      {/* Minimalist Top Bar */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-studio-200/90">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="group inline-flex items-center gap-2 text-xs font-mono text-studio-600 hover:text-studio-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Kembali ke Beranda</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLeadConversion('Profile Page Topbar WhatsApp')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-studio-900 hover:text-accent transition-colors"
          >
            <span>Konsultasi Proyek</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">

        {/* 1. Identitas Studio */}
        <section className="space-y-8 border-b border-studio-200 pb-12 sm:pb-16">
          <div className="space-y-4 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-studio-500">
              Profil Perusahaan • Sejak {STUDIO_INFO.foundedYear}
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-studio-950 leading-[1.12]">
              {STUDIO_INFO.name}
            </h1>
            <p className="text-base sm:text-lg text-studio-700 font-light leading-relaxed">
              Studio spesialis desain dan konstruksi interior custom (*design & build*) yang berpusat di Bandung. Sejak tahun {STUDIO_INFO.foundedYear}, kami berfokus menghadirkan furnitur built-in berpresisi tinggi dengan kejujuran spesifikasi material untuk hunian di Kota Bandung dan wilayah Jabodetabek.
            </p>
          </div>

          {/* Identity Specification Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-studio-200/80 text-sm">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-studio-500 mb-1">
                Tahun Berdiri
              </span>
              <span className="font-heading text-lg font-semibold text-studio-950">
                {STUDIO_INFO.foundedYear}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-studio-500 mb-1">
                Area Layanan Proyek
              </span>
              <span className="font-heading text-lg font-semibold text-studio-950">
                {STUDIO_INFO.serviceArea}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-studio-500 mb-1">
                Basis Studio & Workshop
              </span>
              <span className="font-heading text-lg font-semibold text-studio-950">
                Arcamanik, Kota Bandung
              </span>
            </div>
          </div>
        </section>

        {/* 2. Rekam Jejak & Jaminan Kualitas (Point 4) */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-studio-500 mb-2">
                Rekam Jejak & Komitmen
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-studio-950 tracking-tight">
                Standar Konstruksi & Purna Jual
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-studio-200 divide-y md:divide-y-0 md:divide-x divide-studio-200 bg-white">
            <div className="p-6 sm:p-8 space-y-2">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-studio-950">
                {STUDIO_INFO.completedProjects}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-studio-800 font-semibold">
                Proyek Terselesaikan
              </div>
              <p className="text-xs sm:text-sm text-studio-600 leading-relaxed pt-1">
                Menangani kebutuhan kitchen set, kamar tidur, lemari custom, hingga interior rumah utuh di Bandung dan Jabodetabek.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-2">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-studio-950">
                {STUDIO_INFO.hardwareWarranty}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-studio-800 font-semibold">
                Garansi Hardware Resmi
              </div>
              <p className="text-xs sm:text-sm text-studio-600 leading-relaxed pt-1">
                Perlindungan teknis purna jual selama 180 hari untuk engsel slow-motion, rel laci, dan sistem mekanis fitting.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-2">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-studio-950">
                0%
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-studio-800 font-semibold">
                Material Serbuk Kayu
              </div>
              <p className="text-xs sm:text-sm text-studio-600 leading-relaxed pt-1">
                Kami menolak penggunaan MDF dan particle board. Struktur hanya memakai Plywood Meranti 18mm, Blockboard Falcata, dan PVC Board.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Principal & Penanggung Jawab (Point 3) */}
        <section className="border-y border-studio-200 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Founder Portrait Frame (Replaceable at public/images/profil/founder.jpg) */}
            <div className="md:col-span-5">
              <div className="aspect-[4/5] w-full max-w-sm mx-auto bg-studio-100 border border-studio-200 overflow-hidden relative">
                {!founderImgError ? (
                  <img
                    src="/images/profil/founder.jpg"
                    alt="Principal & Founder Arsi Studio Interior"
                    className="w-full h-full object-cover object-center"
                    onError={() => setFounderImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-studio-100/80 text-studio-500">
                    <span className="font-heading text-3xl font-bold tracking-widest text-studio-300 mb-2">
                      ARSI
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-studio-600">
                      Principal / Founder
                    </span>
                    <span className="mt-3 font-mono text-[10px] text-studio-400 leading-relaxed max-w-[220px]">
                      Slot foto profil: letakkan file di <code className="text-studio-600">public/images/profil/founder.jpg</code>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Philosophy & Direct Accountability */}
            <div className="md:col-span-7 space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-studio-500">
                Pimpinan & Penanggung Jawab Studio
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-studio-950 tracking-tight leading-snug">
                Satu Pintu Tanggung Jawab dari Sketsa Denah hingga Serah Terima
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] text-studio-700 leading-relaxed">
                <p>
                  Di Arsi Studio Interior, setiap proyek tidak dilepas begitu saja kepada pihak ketiga tanpa pengawasan. Mulai dari survei pengukuran di lapangan, penentuan jenis papan inti, perhitungan RAB, hingga kontrol kerapian instalasi diawasi langsung secara terpusat.
                </p>
                <p>
                  Pendekatan ini kami terapkan agar pemilik rumah maupun mitra proyek mendapatkan kepastian spesifikasi material yang sepadan dengan anggaran yang disepakati, tanpa penurunan kualitas di tengah proses pengerjaan.
                </p>
              </div>

              <div className="pt-4 border-t border-studio-200 space-y-2 text-xs text-studio-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-studio-500 shrink-0 mt-0.5" />
                  <span>{STUDIO_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-studio-500 shrink-0" />
                  <span>{STUDIO_INFO.hours}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Ruang Lingkup Pekerjaan */}
        <section className="space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-studio-500 mb-2">
              Ruang Lingkup Pekerjaan
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-studio-950 tracking-tight">
              Spesialisasi Furnitur Custom & Interior Hunian
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-studio-200 pt-6">
            {SCOPE_ITEMS.map((item) => (
              <div key={item.area} className="space-y-1.5 pb-4 border-b border-studio-200/70">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-studio-950">
                  {item.area}
                </h3>
                <p className="text-xs sm:text-sm text-studio-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Ringkasan Alur Kerja */}
        <section className="space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-studio-500 mb-2">
              Sistem Kerja Transparan
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-studio-950 tracking-tight">
              4 Tahap Eksekusi Terukur
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_PILLARS.map((pillar) => (
              <div key={pillar.step} className="p-5 bg-white border border-studio-200 space-y-2.5">
                <span className="font-mono text-xs font-semibold text-accent block">
                  {pillar.step}
                </span>
                <h3 className="font-heading text-base font-bold text-studio-950 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-studio-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Penutup & Kontak Langsung */}
        <section className="bg-studio-950 text-studio-50 p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-muted block">
              Bandung & Jabodetabek
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Diskusikan Rencana Interior Anda
            </h2>
            <p className="text-xs sm:text-sm text-studio-300 font-light leading-relaxed">
              Kirimkan denah ruangan atau jadwal survei lokasi untuk mendapatkan gambaran spesifikasi dan estimasi biaya pengerjaan yang transparan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadConversion('Profile Page Bottom WhatsApp')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-studio-950 hover:bg-accent hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => onNavigate('/#portofolio')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-studio-700 text-studio-200 hover:border-white hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>Lihat Portofolio</span>
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};
