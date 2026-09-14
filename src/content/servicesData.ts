export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "kitchen-dining",
    number: "01",
    title: "Custom Kitchen Set & Dining Area",
    tag: "Pusat Kehangatan Rumah",
    description: "Perancangan dapur bersih dan basah dengan alur kerja ergonomis (segitiga kerja simetris). Menggunakan bahan dasar Multiplek 18mm atau PVC Board anti-lembab pada area basah serta engsel soft-closing.",
    deliverables: [
      "Layout denah kerja ergonomis (Prep - Cook - Clean)",
      "Top table Marmer Sintetis, Granit Alami, atau Solid Surface",
      "Sistem kabinet tersembunyi untuk cooker hood, kulkas, & bumbu",
      "Pencahayaan LED tersembunyi 3000K di bawah kabinet atas"
    ]
  },
  {
    id: "living-bedroom",
    number: "02",
    title: "Living Room & Private Sanctuary",
    tag: "Kenyamanan Ruang Utama",
    description: "Menciptakan ruang istirahat dan ruang keluarga yang tenang dengan perpaduan panel akustik peredam suara, credenza TV melayang berkekuatan tinggi, serta tempat tidur berheadboard empuk.",
    deliverables: [
      "Panel backdrop TV dengan sistem manajemen kabel 100% tersembunyi",
      "Tempat tidur platform melayang dengan rangka penahan beban kokoh",
      "Meja nakas terintegrasi colokan saklar dan lampu tidur",
      "Partisi pembatas ruang tanpa merusak kelapangan visual"
    ]
  },
  {
    id: "closet-laundry",
    number: "03",
    title: "Walk in Closet & Laundry Station",
    tag: "Penyimpanan Cerdas & Rapi",
    description: "Optimalisasi ruang penyimpanan pakaian dan area servis cuci. Memadukan pintu kaca aluminium tempered, laci perhiasan beludru, serta kabinet laundry berbahan 100% PVC Board kedap air.",
    deliverables: [
      "Wardrobe kaca framed aluminium dengan sensor lampu otomatis",
      "Gantungan celana hidrolik tarik & laci aksesoris bersekat",
      "Kabinet mesin cuci kedap air dengan meja setrika lipat",
      "Penyimpanan tersembunyi untuk deterjen dan peralatan kebersihan"
    ]
  },
  {
    id: "commercial-fitout",
    number: "04",
    title: "Commercial & Office Fit-Out",
    tag: "Identitas Ruang Komersial",
    description: "Desain interior tempat usaha yang memikat pelanggan dan meningkatkan kenyamanan kerja. Sangat cocok untuk kafe di Bandung, butik fashion, studio kreatif, hingga ruang kantor startup.",
    deliverables: [
      "Bar counter ergonomis dengan ketahanan beban dan gesekan tinggi",
      "Dinding aksen foto-estetik beridentitas brand yang kuat",
      "Perencanaan tata suara dan pencahayaan komersial memikat",
      "Material tahan banting untuk traffic pengunjung harian"
    ]
  }
];
