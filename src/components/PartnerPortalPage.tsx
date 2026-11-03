import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Copy, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';

interface PartnerPortalPageProps {
  onNavigate: (path: string) => void;
}

interface VendorFormData {
  brandName: string;
  companyName: string;
  entityType: string;
  website: string;
  materialCategories: string[];
  customCategory: string;
  warehouseLocation: string;
  deliveryLeadTime: string;
  catalogUrl: string;
  commercialTerms: string[];
  sampleCommitment: 'yes' | 'spk_only' | 'digital_only' | '';
  picName: string;
  picRole: string;
  picWhatsApp: string;
  picEmail: string;
  notes: string;
}

const INITIAL_FORM: VendorFormData = {
  brandName: '',
  companyName: '',
  entityType: 'distributor',
  website: '',
  materialCategories: [],
  customCategory: '',
  warehouseLocation: 'bandung',
  deliveryLeadTime: 'ready_1_2',
  catalogUrl: '',
  commercialTerms: ['diskon_workshop', 'sample_gratis'],
  sampleCommitment: 'yes',
  picName: '',
  picRole: '',
  picWhatsApp: '',
  picEmail: '',
  notes: '',
};

const MATERIAL_CATEGORY_OPTIONS = [
  { id: 'plywood_substrates', label: 'Plywood & Papan Kayu' },
  { id: 'hpl_surface', label: 'HPL & Finishing' },
  { id: 'hardware_fittings', label: 'Hardware & Fitting' },
  { id: 'countertops', label: 'Countertop & Slab Batu' },
  { id: 'sanitary_sink', label: 'Sanitasi & Kitchen Sink' },
  { id: 'architectural_lighting', label: 'Architectural Lighting' },
  { id: 'wall_panels', label: 'Wall Panel & Fluted' },
  { id: 'paints_adhesives', label: 'Cat Duco & Perekat' },
  { id: 'others', label: 'Lainnya' },
];

const COMMERCIAL_TERM_OPTIONS = [
  { id: 'diskon_workshop', label: 'Harga Khusus Fabrikasi' },
  { id: 'sample_gratis', label: 'Sample Box / Swatch Gratis' },
  { id: 'free_ongkir_bandung', label: 'Gratis Ongkir ke Workshop' },
  { id: 'tempo_pembayaran', label: 'Tempo Pembayaran' },
  { id: 'garansi_resmi', label: 'Garansi Cacat Pabrik' },
];

const SAMPLE_OPTIONS = [
  {
    value: 'yes' as const,
    label: 'Bersedia Mengirimkan Sampel Fisik Lengkap',
    desc: 'Sample box / swatch book dikirim ke Workshop Arsi untuk uji potong dan rekat oleh tukang kami.',
    tag: 'Rekomendasi',
  },
  {
    value: 'spk_only' as const,
    label: 'Sampel Khusus Proyek Aktif / SPK',
    desc: 'Sampel dikirimkan jika ada kecocokan spesifikasi dengan volume proyek klien yang berjalan.',
  },
  {
    value: 'digital_only' as const,
    label: 'Hanya Katalog Digital & Price List',
    desc: 'Data dicatat dalam database harga tanpa rekomendasi fisik langsung pada klien.',
  },
];

export const PartnerPortalPage: React.FC<PartnerPortalPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<VendorFormData>(INITIAL_FORM);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copiedTicket, setCopiedTicket] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const webhookUrl =
    (import.meta as any).env?.VITE_VENDOR_FORM_WEBHOOK_URL ||
    'https://script.google.com/macros/s/AKfycbwE8xtc9L7E1dXuniLc6nGYq8fThehdg0J_h4JrplBbA4ZqF4POibVL35Mnh3eDwey-bA/exec';

  const handleCategoryToggle = (id: string) => {
    setFormData((prev) => {
      const exists = prev.materialCategories.includes(id);
      const updated = exists
        ? prev.materialCategories.filter((c) => c !== id)
        : [...prev.materialCategories, id];
      return { ...prev, materialCategories: updated };
    });
    if (formErrors.materialCategories) {
      setFormErrors((prev) => ({ ...prev, materialCategories: '' }));
    }
  };

  const handleCommercialToggle = (id: string) => {
    setFormData((prev) => {
      const exists = prev.commercialTerms.includes(id);
      const updated = exists
        ? prev.commercialTerms.filter((t) => t !== id)
        : [...prev.commercialTerms, id];
      return { ...prev, commercialTerms: updated };
    });
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.brandName.trim()) {
      errors.brandName = 'Nama brand wajib diisi';
    }
    if (!formData.companyName.trim()) {
      errors.companyName = 'Nama perusahaan wajib diisi';
    }
    if (formData.materialCategories.length === 0) {
      errors.materialCategories = 'Pilih minimal satu kategori material';
    }
    if (!formData.catalogUrl.trim()) {
      errors.catalogUrl = 'Tautan e-katalog wajib dicantumkan';
    } else if (!formData.catalogUrl.startsWith('http')) {
      errors.catalogUrl = 'Gunakan tautan lengkap (diawali https:// atau http://)';
    }
    if (!formData.sampleCommitment) {
      errors.sampleCommitment = 'Pilih komitmen pengiriman sampel';
    }
    if (!formData.picName.trim()) {
      errors.picName = 'Nama PIC wajib diisi';
    }
    if (!formData.picWhatsApp.trim()) {
      errors.picWhatsApp = 'Nomor WhatsApp wajib diisi';
    } else if (formData.picWhatsApp.replace(/\D/g, '').length < 9) {
      errors.picWhatsApp = 'Nomor WhatsApp minimal 9 digit';
    }
    if (!formData.picEmail.trim()) {
      errors.picEmail = 'Email perusahaan wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.picEmail)) {
      errors.picEmail = 'Format email tidak valid';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sanitizeInput = (val: string) => {
    if (typeof val === 'string' && /^[=+\-@]/.test(val.trim())) {
      return "'" + val;
    }
    return val;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot honeypot check
    if (honeypot) {
      return;
    }

    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    const ticketNumber = `ARSI-VDR-${Date.now().toString().slice(-6)}`;
    const sanitizedPayload = {
      ticketNumber,
      timestamp: new Date().toISOString(),
      brandName: sanitizeInput(formData.brandName),
      companyName: sanitizeInput(formData.companyName),
      entityType: formData.entityType,
      website: sanitizeInput(formData.website),
      materialCategories: formData.materialCategories,
      customCategory: sanitizeInput(formData.customCategory),
      warehouseLocation: formData.warehouseLocation,
      deliveryLeadTime: formData.deliveryLeadTime,
      catalogUrl: sanitizeInput(formData.catalogUrl),
      commercialTerms: formData.commercialTerms,
      sampleCommitment: formData.sampleCommitment,
      picName: sanitizeInput(formData.picName),
      picRole: sanitizeInput(formData.picRole),
      picWhatsApp: sanitizeInput(formData.picWhatsApp),
      picEmail: sanitizeInput(formData.picEmail),
      notes: sanitizeInput(formData.notes),
    };

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(sanitizedPayload),
        });
      }

      try {
        const stored = JSON.parse(localStorage.getItem('arsi_vendor_submissions') || '[]');
        stored.unshift(sanitizedPayload);
        localStorage.setItem('arsi_vendor_submissions', JSON.stringify(stored.slice(0, 50)));
      } catch {
        // Fallback
      }

      setSubmittedTicket(ticketNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      setSubmittedTicket(ticketNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2500);
    }
  };

  const handleResetForm = () => {
    setFormData(INITIAL_FORM);
    setSubmittedTicket(null);
    setFormErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-studio-900 flex flex-col font-sans selection:bg-studio-900 selection:text-studio-50">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-studio-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider text-studio-600 hover:text-studio-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Kembali ke Beranda</span>
          </button>

          <img
            src="/images/branding/logo-original.png"
            alt="Arsi Studio Interior"
            className="h-7 sm:h-8 w-auto object-contain cursor-pointer"
            onClick={() => onNavigate('/')}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
        
        {/* Success Screen */}
        {submittedTicket ? (
          <div className="max-w-xl mx-auto bg-white border border-studio-200 p-8 sm:p-14 text-center space-y-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-700 block">
                Pengajuan Diterima
              </span>
              <h1 className="text-2xl sm:text-3xl font-heading font-medium text-studio-950">
                Terima Kasih, {formData.brandName}
              </h1>
              <p className="text-xs sm:text-sm text-studio-600 font-light leading-relaxed max-w-md mx-auto">
                Spesifikasi dari <strong className="text-studio-900 font-medium">{formData.companyName}</strong> telah masuk ke antrean kurasi pengadaan material Workshop Arsi.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-studio-50 border border-studio-200 py-3.5 px-5 inline-flex items-center gap-3">
              <span className="text-xs font-mono text-studio-500 uppercase tracking-wider">Tiket:</span>
              <span className="text-sm font-mono font-semibold text-studio-950 tracking-wider">
                {submittedTicket}
              </span>
              <button
                onClick={handleCopyTicket}
                className="p-1 hover:text-studio-950 text-studio-400 transition-colors"
                title="Salin Tiket"
              >
                {copiedTicket ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <p className="text-xs text-studio-500 font-light leading-relaxed max-w-md mx-auto pt-2 border-t border-studio-100">
              Tim pengadaan kami akan mereview e-katalog Anda. Jika spesifikasi sesuai kebutuhan proyek yang sedang berjalan, kami akan menghubungi WhatsApp PIC Anda (<span className="font-mono text-studio-900">{formData.picWhatsApp}</span>) untuk koordinasi pengiriman sampel fisik.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('/')}
                className="w-full sm:w-auto px-6 py-3 bg-studio-950 text-white font-mono text-xs uppercase tracking-wider hover:bg-accent transition-colors"
              >
                Kembali ke Beranda
              </button>
              <button
                onClick={handleResetForm}
                className="w-full sm:w-auto px-6 py-3 border border-studio-200 text-studio-700 font-mono text-xs uppercase tracking-wider hover:border-studio-950 hover:text-studio-950 transition-colors"
              >
                Kirim Brand Lain
              </button>
            </div>
          </div>
        ) : (
          /* Simple & Elegant Focused Layout */
          <div className="max-w-2xl mx-auto space-y-10">
            
            {/* Header / Intro */}
            <div className="text-center space-y-3 pt-2 sm:pt-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent font-medium block">
                Portal Pengadaan B2B
              </span>
              <h1 className="text-2xl sm:text-4xl font-heading font-normal tracking-tight text-studio-950 leading-tight">
                Pendaftaran Mitra Material
              </h1>
              <p className="text-xs sm:text-sm text-studio-600 font-light leading-relaxed max-w-md mx-auto">
                Workshop Arsi mengkurasi material secara berkala untuk proyek interior hunian dan komersial kami di Bandung. Silakan lengkapi profil produk Anda di bawah ini.
              </p>
            </div>

            {/* Clean Form Card */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-studio-200/90 p-6 sm:p-12 shadow-[0_2px_20px_rgba(0,0,0,0.02)] space-y-9"
            >
              {/* Invisible Honeypot field for bot defense */}
              <input
                type="text"
                name="studio_secure_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* 1. Profil Brand */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-wider text-studio-400 font-medium">
                  Identitas Brand & Entitas
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5" data-error={!!formErrors.brandName}>
                    <label className="text-xs text-studio-700 font-medium block">
                      Nama Brand / Merek <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Taco, Blum, dsb."
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className={`w-full bg-[#FAF9F5] border ${
                        formErrors.brandName ? 'border-rose-400 bg-rose-50/20' : 'border-studio-200 focus:border-studio-950 focus:bg-white'
                      } px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors`}
                    />
                    {formErrors.brandName && (
                      <p className="text-[11px] font-mono text-rose-600">{formErrors.brandName}</p>
                    )}
                  </div>

                  <div className="space-y-1.5" data-error={!!formErrors.companyName}>
                    <label className="text-xs text-studio-700 font-medium block">
                      Nama Badan Usaha (PT / CV) <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama distributor / perusahaan"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full bg-[#FAF9F5] border ${
                        formErrors.companyName ? 'border-rose-400 bg-rose-50/20' : 'border-studio-200 focus:border-studio-950 focus:bg-white'
                      } px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors`}
                    />
                    {formErrors.companyName && (
                      <p className="text-[11px] font-mono text-rose-600">{formErrors.companyName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-studio-700 font-medium block">
                      Tipe Entitas <span className="text-accent">*</span>
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 outline-none transition-colors"
                    >
                      <option value="prinsipal">Prinsipal / Pabrikan Langsung</option>
                      <option value="distributor">Distributor Resmi / Sole Agent</option>
                      <option value="toko_retail">Toko Grosir / Retail Spesialis</option>
                      <option value="aplikator">Aplikator & Spesialis Fabrikasi</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-studio-700 font-medium block">
                      Website / Media Sosial (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="https://... atau @brand"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Kategori Material */}
              <div className="space-y-4 pt-4 border-t border-studio-100">
                <div className="space-y-1">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-studio-400 font-medium">
                    Kategori Material & Ketersediaan
                  </h2>
                </div>

                <div className="space-y-2" data-error={!!formErrors.materialCategories}>
                  <label className="text-xs text-studio-700 font-medium block">
                    Pilihan Kategori <span className="text-accent">*</span>
                  </label>
                  
                  <div className="flex flex-wrap gap-2">
                    {MATERIAL_CATEGORY_OPTIONS.map((cat) => {
                      const isSelected = formData.materialCategories.includes(cat.id);
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleCategoryToggle(cat.id)}
                          className={`px-3 py-1.5 text-xs transition-all border ${
                            isSelected
                              ? 'bg-studio-950 text-white border-studio-950 font-medium'
                              : 'bg-[#FAF9F5] text-studio-700 border-studio-200 hover:border-studio-400'
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                  {formErrors.materialCategories && (
                    <p className="text-[11px] font-mono text-rose-600">{formErrors.materialCategories}</p>
                  )}

                  {formData.materialCategories.includes('others') && (
                    <input
                      type="text"
                      placeholder="Sebutkan kategori spesifik..."
                      value={formData.customCategory}
                      onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                      className="w-full mt-2 bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors"
                    />
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-xs text-studio-700 font-medium block">
                      Gudang Terdekat ke Bandung <span className="text-accent">*</span>
                    </label>
                    <select
                      value={formData.warehouseLocation}
                      onChange={(e) => setFormData({ ...formData, warehouseLocation: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 outline-none transition-colors"
                    >
                      <option value="bandung">Kota Bandung & Sekitarnya (Stok Lokal)</option>
                      <option value="jabodetabek">Jabodetabek (Kirim Rutin ke Bandung)</option>
                      <option value="surabaya_jawa">Jawa Tengah / Jawa Timur</option>
                      <option value="luar_jawa">Luar Pulau Jawa</option>
                      <option value="indent">Sistem Indent / Impor</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-studio-700 font-medium block">
                      Estimasi Lead Time Pengiriman <span className="text-accent">*</span>
                    </label>
                    <select
                      value={formData.deliveryLeadTime}
                      onChange={(e) => setFormData({ ...formData, deliveryLeadTime: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 outline-none transition-colors"
                    >
                      <option value="ready_1_2">Ready Stock (1–2 Hari Kerja)</option>
                      <option value="regular_3_5">Reguler (3–5 Hari Kerja)</option>
                      <option value="indent_1_3_weeks">Indent (1–3 Minggu)</option>
                      <option value="custom">Made to Order / Sesuai Volume</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. E-Katalog & Komersial */}
              <div className="space-y-4 pt-4 border-t border-studio-100">
                <h2 className="text-xs font-mono uppercase tracking-wider text-studio-400 font-medium">
                  Katalog Digital & Ketentuan B2B
                </h2>

                <div className="space-y-1.5" data-error={!!formErrors.catalogUrl}>
                  <label className="text-xs text-studio-700 font-medium block">
                    Tautan E-Katalog & Price List B2B <span className="text-accent">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/... atau link katalog online"
                    value={formData.catalogUrl}
                    onChange={(e) => setFormData({ ...formData, catalogUrl: e.target.value })}
                    className={`w-full bg-[#FAF9F5] border ${
                      formErrors.catalogUrl ? 'border-rose-400 bg-rose-50/20' : 'border-studio-200 focus:border-studio-950 focus:bg-white'
                    } px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors`}
                  />
                  {formErrors.catalogUrl && (
                    <p className="text-[11px] font-mono text-rose-600">{formErrors.catalogUrl}</p>
                  )}
                </div>

                <div className="space-y-2 pt-1">
                  <label className="text-xs text-studio-700 font-medium block">
                    Fasilitas Kerjasama yang Ditawarkan
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {COMMERCIAL_TERM_OPTIONS.map((term) => {
                      const isSelected = formData.commercialTerms.includes(term.id);
                      return (
                        <button
                          key={term.id}
                          type="button"
                          onClick={() => handleCommercialToggle(term.id)}
                          className={`px-3 py-1.5 text-xs transition-all border ${
                            isSelected
                              ? 'bg-studio-800 text-white border-studio-800 font-medium'
                              : 'bg-[#FAF9F5] text-studio-600 border-studio-200 hover:border-studio-300'
                          }`}
                        >
                          {term.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 4. Komitmen Uji Sampel Fisik */}
              <div className="space-y-4 pt-4 border-t border-studio-100">
                <div className="space-y-1">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-studio-400 font-medium">
                    Standar Uji Fisik Workshop Arsi
                  </h2>
                  <p className="text-xs text-studio-500 font-light">
                    Workshop Arsi menguji sampel fisik (uji potong gergaji panel, rekat edging, dan sekrup) sebelum material masuk ke buku rekomendasi klien.
                  </p>
                </div>

                <div className="space-y-2.5" data-error={!!formErrors.sampleCommitment}>
                  {SAMPLE_OPTIONS.map((opt) => {
                    const isSelected = formData.sampleCommitment === opt.value;
                    return (
                      <div
                        key={opt.value}
                        onClick={() => setFormData({ ...formData, sampleCommitment: opt.value })}
                        className={`p-3.5 border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-studio-950 bg-studio-50/70 ring-1 ring-studio-950'
                            : 'border-studio-200 bg-[#FAF9F5]/50 hover:border-studio-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  isSelected ? 'bg-accent' : 'bg-studio-300'
                                }`}
                              />
                              <span className="text-xs sm:text-sm font-medium text-studio-950">
                                {opt.label}
                              </span>
                            </div>
                            <p className="text-xs text-studio-500 font-light pl-4 leading-relaxed">
                              {opt.desc}
                            </p>
                          </div>
                          {opt.tag && (
                            <span className="text-[10px] font-mono text-accent border border-accent/30 px-1.5 py-0.5 whitespace-nowrap bg-white">
                              {opt.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {formErrors.sampleCommitment && (
                    <p className="text-[11px] font-mono text-rose-600">{formErrors.sampleCommitment}</p>
                  )}
                </div>
              </div>

              {/* 5. Kontak Penanggung Jawab */}
              <div className="space-y-4 pt-4 border-t border-studio-100">
                <h2 className="text-xs font-mono uppercase tracking-wider text-studio-400 font-medium">
                  Kontak Penanggung Jawab (PIC)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5" data-error={!!formErrors.picName}>
                    <label className="text-xs text-studio-700 font-medium block">
                      Nama Lengkap PIC <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama PIC resmi"
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      className={`w-full bg-[#FAF9F5] border ${
                        formErrors.picName ? 'border-rose-400 bg-rose-50/20' : 'border-studio-200 focus:border-studio-950 focus:bg-white'
                      } px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors`}
                    />
                    {formErrors.picName && (
                      <p className="text-[11px] font-mono text-rose-600">{formErrors.picName}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-studio-700 font-medium block">
                      Jabatan / Divisi
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sales Manager / B2B Lead"
                      value={formData.picRole}
                      onChange={(e) => setFormData({ ...formData, picRole: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5" data-error={!!formErrors.picWhatsApp}>
                    <label className="text-xs text-studio-700 font-medium block">
                      Nomor WhatsApp Aktif <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxxx"
                      value={formData.picWhatsApp}
                      onChange={(e) => setFormData({ ...formData, picWhatsApp: e.target.value })}
                      className={`w-full bg-[#FAF9F5] border ${
                        formErrors.picWhatsApp ? 'border-rose-400 bg-rose-50/20' : 'border-studio-200 focus:border-studio-950 focus:bg-white'
                      } px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors`}
                    />
                    {formErrors.picWhatsApp && (
                      <p className="text-[11px] font-mono text-rose-600">{formErrors.picWhatsApp}</p>
                    )}
                  </div>

                  <div className="space-y-1.5" data-error={!!formErrors.picEmail}>
                    <label className="text-xs text-studio-700 font-medium block">
                      Email Perusahaan <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="pic@perusahaan.com"
                      value={formData.picEmail}
                      onChange={(e) => setFormData({ ...formData, picEmail: e.target.value })}
                      className={`w-full bg-[#FAF9F5] border ${
                        formErrors.picEmail ? 'border-rose-400 bg-rose-50/20' : 'border-studio-200 focus:border-studio-950 focus:bg-white'
                      } px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors`}
                    />
                    {formErrors.picEmail && (
                      <p className="text-[11px] font-mono text-rose-600">{formErrors.picEmail}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <label className="text-xs text-studio-700 font-medium block">
                    Catatan Keunggulan Material / Sertifikasi (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sertifikasi SNI, ISO, sertifikat ramah lingkungan (Green Label / FSC), ketahanan terhadap rayap/lembab, atau keunggulan spesifikasi material Anda..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-studio-200 focus:border-studio-950 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-studio-950 text-white font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Menyimpan Pengajuan...</span>
                  ) : (
                    <>
                      <span>Kirim Pengajuan Kemitraan</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-studio-200/80 bg-[#FDFBF7] py-8 px-4 text-center text-xs font-mono text-studio-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. Kurasi & Akreditasi Workshop Arsi.</p>
          <div className="flex items-center gap-4 text-studio-600">
            <button onClick={() => onNavigate('/')} className="hover:text-studio-950 transition-colors">
              Beranda Arsi
            </button>
            <span>•</span>
            <span>Bandung, Jawa Barat</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
