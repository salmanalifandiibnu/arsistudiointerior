import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, ArrowUp, ArrowUpRight, RotateCcw, Compass } from 'lucide-react';
import { STUDIO_INFO } from '../content/studioInfo';
import { buildWhatsAppUrl, handleLeadConversion } from '../utils/tracking';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionUrl?: string;
  actionLabel?: string;
  chips?: string[];
}

const INITIAL_CHIPS = [
  'Estimasi Biaya & RAB',
  'Berapa Lama Pengerjaan?',
  'Kenapa Menolak MDF/Serbuk Kayu?',
  'Skema Pembayaran & Termin',
  'Bisa Bawa Desain Sendiri?',
  'Lokasi Workshop Arsi',
];

export const StudioAssistantBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Halo! Selamat datang di Arsi Studio Interior. Saya siap membantu menjawab pertanyaan Anda seputar estimasi biaya, pemilihan material, durasi pengerjaan, atau asistensi denah hunian Anda di Bandung.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      chips: INITIAL_CHIPS,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const defaultWaUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    "Halo Arsi Studio Interior, saya ingin berkonsultasi mengenai rencana custom interior hunian saya di Bandung."
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleOpenChat = () => {
    setIsOpen(true);
    handleLeadConversion('Open Studio Concierge Bot');
  };

  const generateAnswer = (query: string): { text: string; actionUrl?: string; actionLabel?: string; chips?: string[] } => {
    const q = query.toLowerCase();

    // 1. Biaya & RAB
    if (q.includes('biaya') || q.includes('harga') || q.includes('rab') || q.includes('tarif') || q.includes('meter') || q.includes('hitung') || q.includes('budget')) {
      return {
        text: 'Perhitungan kami transparan berbasis modul meter lari (m¹) atau meter persegi (m²), bergantung pada dimensi ruang, pilihan substrat (Multipleks Meranti 18mm atau PVC Board anti-air), serta finishing (HPL CARTA/TACO/AICA atau Duco). Anda akan menerima Rencana Anggaran Biaya (RAB) resmi terperinci tanpa biaya siluman sebelum produksi workshop dimulai.',
        actionUrl: buildWhatsAppUrl(STUDIO_INFO.whatsappNumber, "Halo Arsi Studio, saya ingin berkonsultasi simulasi perhitungan biaya/RAB untuk hunian saya di Bandung."),
        actionLabel: 'Konsultasi RAB via WhatsApp ↗',
        chips: ['Berapa Lama Pengerjaan?', 'Kenapa Menolak MDF/Serbuk Kayu?', 'Skema Pembayaran & Termin'],
      };
    }

    // 2. Waktu & Durasi
    if (q.includes('lama') || q.includes('waktu') || q.includes('durasi') || q.includes('hari') || q.includes('minggu') || q.includes('cepat') || q.includes('selesai') || q.includes('jadwal')) {
      return {
        text: 'Rata-rata proyek hunian memakan waktu 3 hingga 5 minggu: tahap survei lokasi & asistensi desain 3D (5–7 hari), fabrikasi presisi di Workshop Arsi (2–3 minggu), dan instalasi bersih di hunian Anda (2–5 hari kerja agar tidak mengganggu rutinitas keluarga).',
        actionUrl: defaultWaUrl,
        actionLabel: 'Jadwalkan Survei Lokasi ↗',
        chips: ['Estimasi Biaya & RAB', 'Skema Pembayaran & Termin', 'Kenapa Menolak MDF/Serbuk Kayu?'],
      };
    }

    // 3. Material & Tolak MDF/Serbuk Kayu
    if (q.includes('mdf') || q.includes('serbuk') || q.includes('partikel') || q.includes('kayu') || q.includes('multipleks') || q.includes('plywood') || q.includes('hpl') || q.includes('bahan') || q.includes('material') || q.includes('rayap') || q.includes('lembap') || q.includes('air')) {
      return {
        text: 'Kami berkomitmen menolak penggunaan serbuk kayu (MDF / Partikel Board) karena rentan melar, melengkung, dan mudah rusak oleh rayap atau kelembapan tropis. Arsi Studio hanya menggunakan 100% Multipleks Kayu Meranti 18mm untuk rangka kering dan PVC Foam Board kedap air untuk area basah (seperti kabinet bawah sink dapur).',
        actionUrl: defaultWaUrl,
        actionLabel: 'Diskusi Spesifikasi Material ↗',
        chips: ['Garansi Konstruksi & Hardware', 'Berapa Lama Pengerjaan?', 'Lokasi Workshop Arsi'],
      };
    }

    // 4. Skema Termin Pembayaran
    if (q.includes('termin') || q.includes('pembayaran') || q.includes('bayar') || q.includes('dp') || q.includes('cicil') || q.includes('tahap')) {
      return {
        text: 'Pembayaran dibagi ke dalam 3 termin aman sesuai progres fisik riil: DP 50% saat persetujuan desain & persiapan material workshop, 40% saat pesanan lolos QC workshop dan siap dikirim, serta pelunasan 10% setelah seluruh unit terpasang rapi dan serah terima kunci.',
        actionUrl: defaultWaUrl,
        actionLabel: 'Konsultasi SPK & Kontrak ↗',
        chips: ['Estimasi Biaya & RAB', 'Berapa Lama Pengerjaan?'],
      };
    }

    // 5. Bawa Desain Sendiri
    if (q.includes('desain') || q.includes('gambar') || q.includes('sendiri') || q.includes('render') || q.includes('sketchup') || q.includes('dwg') || q.includes('arsitek')) {
      return {
        text: 'Tentu saja bisa! Sebagai studio yang memiliki bengkel fabrikasi mandiri (Workshop Arsi), kami sangat terbiasa mengonversi render arsitektur atau gambar teknis (.DWG / SketchUp) eksternal menjadi shop drawing presisi siap potong sesuai ukuran eksisting lapangan.',
        actionUrl: buildWhatsAppUrl(STUDIO_INFO.whatsappNumber, "Halo Arsi Studio, saya sudah memiliki gambar denah/render 3D dan ingin berkonsultasi untuk fabrikasi di Workshop Arsi."),
        actionLabel: 'Kirim File Desain via WhatsApp ↗',
        chips: ['Estimasi Biaya & RAB', 'Berapa Lama Pengerjaan?'],
      };
    }

    // 6. Lokasi & Kunjungan Workshop
    if (q.includes('lokasi') || q.includes('workshop') || q.includes('alamat') || q.includes('arcamanik') || q.includes('bandung') || q.includes('kunjung') || q.includes('mana')) {
      return {
        text: 'Workshop Arsi berlokasi di Sukamiskin, Arcamanik, Kota Bandung. Anda sangat kami persilakan berkunjung langsung untuk melihat proses perakitan, mengecek sampel material, dan berdiskusi teknis dengan tim perakit kami.',
        actionUrl: STUDIO_INFO.googleMapsUrl,
        actionLabel: 'Petunjuk Arah Google Maps ↗',
        chips: ['Estimasi Biaya & RAB', 'Kenapa Menolak MDF/Serbuk Kayu?'],
      };
    }

    // 7. Garansi & Hardware
    if (q.includes('garansi') || q.includes('rusak') || q.includes('awet') || q.includes('hardware') || q.includes('engsel') || q.includes('blum') || q.includes('hafele')) {
      return {
        text: 'Setiap proyek kami sertai garansi pemeliharaan konstruksi fisik, serta garansi hardware resmi merek premium dunia seperti Blum, Häfele, dan Huben untuk sistem engsel soft-close dan rel laci.',
        actionUrl: defaultWaUrl,
        actionLabel: 'Tanya Garansi Hardware ↗',
        chips: ['Kenapa Menolak MDF/Serbuk Kayu?', 'Skema Pembayaran & Termin'],
      };
    }

    // 8. Vendor / Mitra
    if (q.includes('vendor') || q.includes('mitra') || q.includes('supplier') || q.includes('sales')) {
      return {
        text: 'Untuk para prinsipal brand, produsen, dan distributor material yang ingin mengajukan penawaran produk atau e-katalog ke Workshop Arsi, silakan daftarkan spesifikasi Anda melalui Portal Kemitraan resmi kami.',
        actionUrl: '/mitra',
        actionLabel: 'Buka Portal Vendor Material ↗',
        chips: ['Kenapa Menolak MDF/Serbuk Kayu?', 'Lokasi Workshop Arsi'],
      };
    }

    // General fallback
    return {
      text: 'Terima kasih atas pertanyaannya! Setiap hunian memiliki denah dan tantangan ruang yang unik. Agar kami bisa memberikan gambaran yang lebih presisi, arsitek kami siap berdiskusi langsung dengan Anda.',
      actionUrl: defaultWaUrl,
      actionLabel: 'Lanjut Diskusi di WhatsApp ↗',
      chips: ['Estimasi Biaya & RAB', 'Berapa Lama Pengerjaan?', 'Kenapa Menolak MDF/Serbuk Kayu?'],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(text);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionUrl: response.actionUrl,
        actionLabel: response.actionLabel,
        chips: response.chips,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 400);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Percakapan telah disegarkan. Ada hal lain yang ingin Anda ketahui seputar custom interior di Workshop Arsi?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: INITIAL_CHIPS,
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Launcher */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fadeIn">
          <button
            onClick={handleOpenChat}
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-studio-950 text-white hover:bg-accent border border-studio-800 shadow-xl transition-all duration-300 hover:scale-102 rounded-full cursor-pointer"
            aria-label="Tanya Studio Arsi"
          >
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-studio-950" />
            </div>
            <span className="font-sans text-xs font-medium tracking-wide">
              Tanya Studio Arsi
            </span>
          </button>
        </div>
      )}

      {/* Floating Bespoke Concierge Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] h-[540px] max-h-[85vh] bg-[#FAF8F5] border border-studio-300/80 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden rounded-2xl animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-studio-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-studio-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-studio-900 border border-studio-800 flex items-center justify-center text-accent">
                <Compass className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-heading text-xs font-semibold tracking-wide text-white">
                  Konsultasi Studio Arsi
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-studio-400 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Workshop Mandiri • Bandung</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 text-studio-400 hover:text-white hover:bg-studio-800/80 rounded-full transition-colors"
                title="Segarkan Obrolan"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-studio-400 hover:text-white hover:bg-studio-800/80 rounded-full transition-colors"
                title="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation Stream */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
              >
                <div
                  className={`max-w-[88%] p-3.5 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-studio-950 text-white rounded-2xl rounded-tr-xs font-light shadow-2xs'
                      : 'bg-white text-studio-900 border border-studio-200/60 shadow-[0_1px_4px_rgba(0,0,0,0.03)] rounded-2xl rounded-tl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line text-xs sm:text-[13px]">{msg.text}</p>

                  {/* Direct Action Link */}
                  {msg.actionUrl && (
                    <div className="mt-2.5 pt-2 border-t border-studio-100">
                      <a
                        href={msg.actionUrl}
                        target={msg.actionUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        onClick={() => handleLeadConversion('Concierge Action CTA')}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-accent hover:text-studio-950 transition-colors"
                      >
                        <span>{msg.actionLabel || 'Konsultasi via WhatsApp'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Interactive Topic Pills */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1 max-w-[95%]">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={`${msg.id}-chip-${idx}`}
                        type="button"
                        onClick={() => handleSendMessage(chip)}
                        className="px-3 py-1.5 bg-white hover:bg-studio-950 hover:text-white text-studio-800 border border-studio-200 text-xs rounded-full shadow-2xs transition-all duration-200 text-left font-sans cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-white border border-studio-200/60 rounded-2xl w-fit shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-studio-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-studio-400 animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-studio-400 animate-bounce [animation-delay:0.3s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Capsule */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-studio-200/70"
          >
            <div className="flex items-center gap-2 bg-[#F3F0EA] rounded-full px-4 py-1.5 border border-transparent focus-within:border-studio-400 focus-within:bg-white transition-all shadow-inner">
              <input
                type="text"
                placeholder="Tanyakan biaya, material, durasi..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow bg-transparent text-xs sm:text-sm text-studio-950 placeholder:text-studio-400 outline-none py-1 font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-7 h-7 rounded-full bg-studio-950 text-white hover:bg-accent disabled:opacity-25 flex items-center justify-center transition-all shrink-0 cursor-pointer"
                title="Kirim Pertanyaan"
              >
                <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </form>

        </div>
      )}
    </>
  );
};
