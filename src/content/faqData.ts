export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'biaya' | 'waktu' | 'material' | 'layanan';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana sistem perhitungan biaya custom interior di Arsi Studio?',
    answer: 'Perhitungan kami transparan berbasis modul meter lari (m¹) atau meter persegi (m²), bergantung pada dimensi ruang, pilihan substrat (Multipleks Meranti 18mm atau PVC Board tahan air), serta spesifikasi finishing (HPL CARTA/TACO/AICA atau Cat Duco). Anda akan menerima Rencana Anggaran Biaya (RAB) resmi terperinci tanpa biaya tersembunyi sebelum produksi workshop dimulai.',
    category: 'biaya',
  },
  {
    id: 'faq-2',
    question: 'Berapa lama estimasi pengerjaan dari survei hingga selesai terpasang?',
    answer: 'Rata-rata proyek hunian memakan waktu 3 hingga 5 minggu. Rinciannya: tahap survei lokasi & asistensi desain 3D (5–7 hari), fabrikasi presisi di workshop mandiri Arcamanik (2–3 minggu), dan instalasi bersih di hunian Anda (2–5 hari kerja agar tidak mengganggu rutinitas keluarga).',
    category: 'waktu',
  },
  {
    id: 'faq-3',
    question: 'Apakah Arsi Studio melayani survei dan pengerjaan di luar Kota Bandung?',
    answer: 'Area fokus utama kami adalah Bandung Raya (Kota Bandung, Cimahi, Kab. Bandung, Kab. Bandung Barat, dan Sumedang/Jatinangor). Kami juga melayani proyek di wilayah Jabodetabek dan kota-kota lain di Jawa Barat dengan penyesuaian jadwal survei dan akomodasi logistik workshop.',
    category: 'layanan',
  },
  {
    id: 'faq-4',
    question: 'Apakah saya bisa membawa gambar kerja atau render 3D dari arsitek pribadi?',
    answer: 'Tentu saja. Sebagai studio yang memiliki bengkel fabrikasi mandiri, kami sangat terbiasa mengonversi render arsitektur atau gambar teknis (.DWG / SketchUp) eksternal menjadi shop drawing presisi siap potong dengan akurasi dimensi modul sesuai kondisi eksisting lapangan.',
    category: 'layanan',
  },
  {
    id: 'faq-5',
    question: 'Mengapa Arsi Studio menolak penggunaan serbuk kayu (MDF / Partikel Board)?',
    answer: 'Serbuk kayu rentan melar, melengkung, atau hancur saat terpapar kelembapan udara tropis dan sangat disukai rayap. Kami berkomitmen pada standar ketahanan arsitektural jangka panjang: hanya menggunakan Multipleks Kayu Meranti 18mm untuk rangka kering dan 100% PVC Foam Board kedap air untuk area rawan lembap (seperti kabinet bawah sink dapur).',
    category: 'material',
  },
  {
    id: 'faq-6',
    question: 'Bagaimana skema termin pembayaran dan garansi pengerjaan?',
    answer: 'Pembayaran dibagi ke dalam 3 termin aman sesuai progres fisik: DP 50% saat persetujuan desain & mulai persiapan material workshop, 40% saat pesanan lolos QC workshop dan siap dikirim, serta pelunasan 10% setelah seluruh unit terpasang rapi dan serah terima kunci. Setiap proyek kami sertai garansi pemeliharaan konstruksi dan garansi hardware resmi Häfele / Huben / Blum.',
    category: 'biaya',
  },
];
