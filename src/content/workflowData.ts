export interface WorkflowStep {
  step: string;
  title: string;
  phase: string;
  description: string;
  keyPoints: string[];
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    phase: "Tahap Eksplorasi",
    title: "Konsultasi Kebutuhan & Survey Lokasi",
    description: "Pertemuan awal untuk mendiskusikan visi ruang, kebiasaan harian keluarga, dan referensi estetika Anda. Tim arsitek kami mengunjungi lokasi untuk pengukuran presisi menggunakan laser meter dan evaluasi instalasi mekanikal/elektrikal.",
    keyPoints: [
      "Pengukuran laser digital presisi milimeter",
      "Pemeriksaan jalur pipa air, pembuangan, dan titik stop kontak",
      "Penyusunan moodboard konsep material awal"
    ]
  },
  {
    step: "02",
    phase: "Tahap Konseptualisasi",
    title: "Pengembangan Desain 3D & Gambar Kerja",
    description: "Kami menerjemahkan gagasan ke dalam gambar kerja teknis detail dan visualisasi 3D photorealistic dari berbagai sudut ruang. Setiap dimensi furniture dipastikan pas dengan layout ruangan Anda sebelum masuk lini produksi.",
    keyPoints: [
      "Visual 3D realistis dengan tekstur material riil",
      "Sesi asistensi revisi penyesuaian detail fungsional",
      "Penyusunan spesifikasi teknis material terbuka"
    ]
  },
  {
    step: "03",
    phase: "Tahap Produksi",
    title: "Fabrikasi Presisi di Workshop Mandiri",
    description: "Seluruh kabinet dan furniture custom diproduksi langsung oleh tim tukang kayu ahli di workshop kami di Bandung. Kami tidak melempar pesanan ke pihak ketiga, sehingga kontrol mutu pemotongan dan pengeleman HPL terjaga sempurna.",
    keyPoints: [
      "100% In-house workshop production di Bandung",
      "Pemotongan panel siku presisi dengan mesin panel saw",
      "Pengeleman edging PVC mesin tahan panas dan kedap air"
    ]
  },
  {
    step: "04",
    phase: "Tahap Realisasi",
    title: "Instalasi Rapi & Serah Terima Kunci",
    description: "Modul furniture yang telah selesai dirakit dan diuji coba di workshop dibawa ke lokasi Anda untuk proses pemasangan rapi minim debu. Diakhiri dengan pembersihan menyeluruh (deep cleaning) dan pengecekan fungsi setiap engsel.",
    keyPoints: [
      "Pemasangan modul terproteksi tanpa merusak dinding/lantai",
      "Pengecekan fungsi kelancaran rel laci dan engsel soft-closing",
      "Serah terima hasil jadi siap huni"
    ]
  }
];
