export interface MaterialSpecimen {
  id: string;
  code: string;
  name: string;
  category: 'substrate';
  categoryLabel: string;
  image: string;
  composition: string;
  workshopReality: string;
  recommendedUse: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
}

export const SUBSTRATE_MATERIALS: MaterialSpecimen[] = [
  {
    id: "plywood-meranti",
    code: "SUB-01",
    name: "Plywood / Multiplek Meranti 18mm",
    category: "substrate",
    categoryLabel: "Papan Struktural Utama",
    image: "/images/materials/papan-inti/plywood.jpg",
    composition: "Lapisan lembaran kayu keras meranti yang ditumpuk bersilangan serat 90° dan direkatkan dengan resin tekanan tinggi.",
    workshopReality: "Kerapatan serat padat dan cengkeraman sekrup kokoh. Tahan beban berat dan tidak mudah lentur untuk struktur utama.",
    recommendedUse: "Rangka bodi kitchen set, kabinet lemari pakaian, dan ambalan rak gantung."
  },
  {
    id: "blockboard-solid",
    code: "SUB-02",
    name: "Blockboard Kayu Solid 18mm",
    category: "substrate",
    categoryLabel: "Papan Anti-Lenting",
    image: "/images/materials/papan-inti/blockboard.jpg",
    composition: "Balok-balok kayu solid lurus (falcata kering oven) yang dikunci oleh lapisan veneer ganda di kedua sisinya.",
    workshopReality: "Lebih ringan dengan kestabilan dimensi bentang panjang vertikal yang superior. Efektif mencegah risiko pintu melengkung.",
    recommendedUse: "Pintu lemari pakaian setinggi plafon (> 2.4 meter) dan daun pintu geser (sliding door)."
  },
  {
    id: "pvc-foam-board",
    code: "SUB-03",
    name: "PVC Foam Board High Density 18mm",
    category: "substrate",
    categoryLabel: "100% Kedap Air & Anti-Rayap",
    image: "/images/materials/papan-inti/pvc-board.jpg",
    composition: "Material busa polimer polivinil klorida sintetis murni dengan struktur sel tertutup tanpa campuran serbuk kayu.",
    workshopReality: "100% kedap air dan anti-rayap. Tidak akan lapuk atau mengembang meski terendam air kebocoran pipa.",
    recommendedUse: "Kabinet bawah sink cuci piring (kitchen sink) dan area lembap mesin cuci laundry."
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: "taco",
    name: "TACO",
    category: "Laminates & Edging",
    logo: "/images/materials/brands/taco.png",
    description: "Market leader HPL & PVC edging di Indonesia dengan koleksi motif terlengkap dan kestabilan material tinggi."
  },
  {
    id: "aica",
    name: "AICA",
    category: "Japanese Architectural HPL",
    logo: "/images/materials/brands/aica.png",
    description: "Laminasi standar arsitektural Jepang dengan teknologi antimikroba Virutect dan ketahanan abrasi superior."
  },
  {
    id: "carta",
    name: "CARTA",
    category: "Signature Laminates by VIVERE",
    logo: "/images/materials/brands/carta.png",
    description: "Koleksi laminasi kontemporer soft-matte anti-sidik jari untuk sentuhan interior Japandi dan Modern Luxury."
  },
  {
    id: "hafele",
    name: "HÄFELE",
    category: "German Hardware & Fittings",
    logo: "/images/materials/brands/hafele.png",
    description: "Sistem hardware, rel laci tandem hidrolik, dan engsel berstandar rekayasa Jerman untuk durabilitas jangka panjang."
  },
  {
    id: "huben",
    name: "HUBEN",
    category: "Fittings & Interior Hardware",
    logo: "/images/materials/brands/huben.png",
    description: "Solusi engsel soft-closing, rel laci ganda, dan fitting aksesoris furniture interior yang presisi dan handal."
  },
  {
    id: "quadra",
    name: "QUADRA",
    category: "Ultimate Sintered Stone Slab",
    logo: "/images/materials/brands/quadra.png",
    description: "Slab batu sinter format besar premium untuk counter island, top table, dan panel dinding arsitektural tahan panas serta anti-gores."
  },
  {
    id: "wisma-sehati",
    name: "WISMA SEHATI",
    category: "Luxury Tiles & Surface Specialist",
    logo: "/images/materials/brands/wisma-sehati.png",
    description: "Distributor terkemuka ubin porselen mewah, marmer pilihan, dan solusi permukaan arsitektural berstandar internasional."
  }
];

export const MATERIALS_DATA = SUBSTRATE_MATERIALS;
