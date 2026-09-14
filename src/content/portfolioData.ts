export interface PortfolioProject {
  id: string;
  title: string;
  category: 'kitchen-set' | 'backdrop-tv' | 'kamar-utama' | 'kamar-anak' | 'walk-in-closet' | 'laundry-area';
  categoryLabel: string;
  location: string;
  style: string;
  primaryMaterial: string;
  finish: string;
  description: string;
  image: string;
  highlights: string[];
}

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'Semua Karya' },
  { id: 'kitchen-set', label: 'Kitchen Set' },
  { id: 'backdrop-tv', label: 'Backdrop TV' },
  { id: 'kamar-utama', label: 'Kamar Tidur Utama' },
  { id: 'kamar-anak', label: 'Kamar Tidur Anak' },
  { id: 'walk-in-closet', label: 'Walk in Closet' },
  { id: 'laundry-area', label: 'Laundry Area' },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // 1. KITCHEN SET (4 Projects)
  {
    id: "kitchen-01",
    title: "The Japandi Minimalist Kitchen",
    category: "kitchen-set",
    categoryLabel: "Kitchen Set",
    location: "Arcamanik, Kota Bandung",
    style: "Japandi Modern",
    primaryMaterial: "Multiplek 18mm & PVC Board (Area Sink)",
    finish: "HPL CARTA Warm Oak & Solid Sand White",
    description: "Tata letak dapur bersih berkonsep terbuka dengan perpaduan kayu oak natural dan permukaan matte anti-sidik jari. Dilengkapi rak piring tarik dan kabinet bumbu tersembunyi.",
    image: "/images/portfolio/kitchen-set/kitchen-01.jpg",
    highlights: ["Kabinet bawah sink menggunakan 100% PVC Board anti-lembab", "Engsel soft-closing Blum Clip-Top", "Lampu LED strip tersembunyi 3000K"]
  },
  {
    id: "kitchen-02",
    title: "Emerald & Brass Island Kitchen",
    category: "kitchen-set",
    categoryLabel: "Kitchen Set",
    location: "Dago Asri, Bandung",
    style: "Modern Luxury",
    primaryMaterial: "Multiplek Meranti 18mm",
    finish: "Cat Duco Polyurethane Hijau Zamrud Matte",
    description: "Pusat kuliner keluarga dengan pulau dapur megah berpadu top table marmer Calacatta sintetis dan handle kuningan ramping bersuhu hangat.",
    image: "/images/portfolio/kitchen-set/kitchen-02.jpg",
    highlights: ["Finishing cat Duco PU 5 lapis tanpa sambungan edging", "Rel laci tandem undermount hidrolik", "Island table berkapasitas 6 kursi"]
  },
  {
    id: "kitchen-03",
    title: "Compact Scandinavian Kitchen",
    category: "kitchen-set",
    categoryLabel: "Kitchen Set",
    location: "Ciumbuleuit, Bandung",
    style: "Scandinavian Minimalist",
    primaryMaterial: "Multiplek Meranti 18mm",
    finish: "HPL TACO Natural Ash Woodgrain",
    description: "Optimalisasi ruang dapur apartemen dengan penyimpanan bertingkat setinggi plafon, cooker hood terintegrasi rapi di dalam kabinet, dan rak piring atas berbahan stainless 304.",
    image: "/images/portfolio/kitchen-set/kitchen-03.jpg",
    highlights: ["Sistem bukaan push-to-open tanpa handle", "Penyimpanan bumbu vertikal tarik", "Top table granit hitam Nero Assoluto"]
  },
  {
    id: "kitchen-04",
    title: "Monochrome Matte Chef's Kitchen",
    category: "kitchen-set",
    categoryLabel: "Kitchen Set",
    location: "Setiabudi, Bandung",
    style: "Contemporary Monochrome",
    primaryMaterial: "Multiplek 18mm & PVC Board",
    finish: "HPL AICA Virutect Anti-Bakteri & Charcoal",
    description: "Dapur koki profesional dengan dominasi warna arang berkarakter tegas. Permukaan laminasi teknologi Jepang yang tahan noda asam bumbu masakan dan mudah dilap.",
    image: "/images/portfolio/kitchen-set/kitchen-04.jpg",
    highlights: ["Laminasi AICA standar higienis Jepang", "Rak sendok garpu kayu custom", "Colokan listrik pop-up tersembunyi"]
  },

  // 2. BACKDROP TV & LIVING ROOM (4 Projects)
  {
    id: "tv-01",
    title: "Fluted Wood & Travertine TV Wall",
    category: "backdrop-tv",
    categoryLabel: "Backdrop TV",
    location: "Mekarwangi, Bandung",
    style: "Warm Contemporary",
    primaryMaterial: "Multiplek 18mm & HDF Board (Kisi-kisi)",
    finish: "HPL CARTA Smoked Walnut & Panel Travertine",
    description: "Dinding aksen ruang keluarga dengan panel berbilah vertikal presisi yang meredam gema suara TV, dipadukan marmer travertine asli bertekstur alami.",
    image: "/images/portfolio/backdrop-tv/tv-01.jpg",
    highlights: ["Jalur kabel TV dan konsol 100% tersembunyi di balik panel", "Credenza melayang berkekuatan beban 70kg", "Pencahayaan indirect cove warm white"]
  },
  {
    id: "tv-02",
    title: "Floating Minimalist Media Credenza",
    category: "backdrop-tv",
    categoryLabel: "Backdrop TV",
    location: "Batununggal, Bandung",
    style: "Modern Minimalist",
    primaryMaterial: "Multiplek Meranti 18mm",
    finish: "HPL TACO Matte White & Aksen Kayu Jati",
    description: "Desain konsol TV melayang yang ringan dan bersih, menjaga lantai ruang tamu tetap lapang dan memudahkan robot vacuum cleaner melintas di bawahnya.",
    image: "/images/portfolio/backdrop-tv/tv-02.jpg",
    highlights: ["Pintu credenza dengan engsel soft-closing", "Ventilasi sirkulasi udara untuk receiver & konsol game", "Pengeleman edging mesin tanpa sudut tajam"]
  },
  {
    id: "tv-03",
    title: "Acoustic Slat Panel Living Room",
    category: "backdrop-tv",
    categoryLabel: "Backdrop TV",
    location: "Antapani, Bandung",
    style: "Japandi Acoustic",
    primaryMaterial: "HDF Board & Multiplek 18mm",
    finish: "HPL CARTA Light Oak dengan Backing Felt Akustik",
    description: "Kombinasi panel peredam suara berbahan serat kayu berbilah dengan felt peredam gema, menciptakan pengalaman home theater yang jernih dan hangat.",
    image: "/images/portfolio/backdrop-tv/tv-03.jpg",
    highlights: ["Menurunkan resonansi suara ruang hingga 35%", "Tempat tersembunyi untuk soundbar", "Rak display ambalan kaca tempered"]
  },
  {
    id: "tv-04",
    title: "Dark Oak Media Center & Hidden Bar",
    category: "backdrop-tv",
    categoryLabel: "Backdrop TV",
    location: "Buah Batu, Bandung",
    style: "Industrial Luxury",
    primaryMaterial: "Multiplek 18mm",
    finish: "HPL AICA Dark Woodgrain & Aksen Aluminium Bronze",
    description: "Panel backdrop TV berukuran 4 meter yang mengintegrasikan mini bar tersembunyi dengan pintu dorong lipat di samping area menonton.",
    image: "/images/portfolio/backdrop-tv/tv-04.jpg",
    highlights: ["Pintu lipat geser pivot Hafele", "Lampu sensor gerak otomatis saat pintu dibuka", "Panel marmer sintetis tahan benturan"]
  },

  // 3. KAMAR TIDUR UTAMA (3 Projects)
  {
    id: "kamar-utama-01",
    title: "Zen Master Sanctuary Suite",
    category: "kamar-utama",
    categoryLabel: "Kamar Tidur Utama",
    location: "Arcamanik Endah, Bandung",
    style: "Japandi Sanctuary",
    primaryMaterial: "Blockboard 18mm & Multiplek",
    finish: "HPL CARTA Sand Beige & Natural Birch",
    description: "Tempat tidur panggung melayang rendah (*low platform bed*) dengan headboard empuk berlapis kain linen impor dan meja nakas terintegrasi rapi.",
    image: "/images/portfolio/kamar-utama/kamar-01.jpg",
    highlights: ["Rangka tempat tidur kokoh tahan beban 400kg", "Colokan USB & switch lampu di meja nakas samping kasur", "Pencahayaan lantai bawah ranjang temaram"]
  },
  {
    id: "kamar-utama-02",
    title: "Warm Contemporary Padded Headboard",
    category: "kamar-utama",
    categoryLabel: "Kamar Tidur Utama",
    location: "Cisaranten, Bandung",
    style: "Warm Contemporary",
    primaryMaterial: "Multiplek 18mm & Busa Density 30",
    finish: "Kain Velvet Abu Hangat & HPL TACO Walnut",
    description: "Panel dinding kepala ranjang setinggi plafon dengan aksen jahitan vertikal bertekstur beludru yang menyerap kebisingan dari luar kamar.",
    image: "/images/portfolio/kamar-utama/kamar-02.jpg",
    highlights: ["Peredam kebisingan kamar tidur", "Meja rias melayang marmer di sudut ruangan", "Cermin rias LED sentuh dengan dimmer"]
  },
  {
    id: "kamar-utama-03",
    title: "Nordic Light Floating Bedframe",
    category: "kamar-utama",
    categoryLabel: "Kamar Tidur Utama",
    location: "Summarecon Bandung",
    style: "Scandinavian Minimalist",
    primaryMaterial: "Multiplek 18mm",
    finish: "Cat Duco Putih Hangat & Aksen Kayu Ash",
    description: "Kamar tidur utama dengan konsep bersih tanpa beban visual. Dilengkapi lemari pakaian pintu geser rata dinding dengan ruang penyimpanan koper tersembunyi.",
    image: "/images/portfolio/kamar-utama/kamar-03.jpg",
    highlights: ["Tempat tidur dengan laci penyimpanan selimut di kolong", "Cat Duco PU bebas bau zat kimia beracun", "Sirkulasi ergonomis luas di sekeliling ranjang"]
  },

  // 4. KAMAR TIDUR ANAK (3 Projects)
  {
    id: "kamar-anak-01",
    title: "Montessori Bunk & Study Corner",
    category: "kamar-anak",
    categoryLabel: "Kamar Tidur Anak",
    location: "Arcamanik, Bandung",
    style: "Playful Minimalist",
    primaryMaterial: "Multiplek 18mm Meranti",
    finish: "HPL TACO Pastel Mint & Kayu Pinus Halus",
    description: "Kamar anak multifungsi dengan tempat tidur bertingkat aman, tangga berpagar laci penyimpanan mainan, dan meja belajar ergonomis yang dapat disesuaikan tinggi anak.",
    image: "/images/portfolio/kamar-anak/anak-01.jpg",
    highlights: ["Sudut furniture dibulatkan (rounded edges) demi keselamatan anak", "Tangga berlaci sistem soft-closing anti-jepit jari", "Papan tulis magnetik terintegrasi"]
  },
  {
    id: "kamar-anak-02",
    title: "Pastel Nordic Children's Haven",
    category: "kamar-anak",
    categoryLabel: "Kamar Tidur Anak",
    location: "Sariwangi, Bandung",
    style: "Nordic Pastel",
    primaryMaterial: "Multiplek Meranti 18mm",
    finish: "Cat Duco Water-based Non-Toxic & HPL CARTA",
    description: "Ruang istirahat dan kreasi anak dengan lemari pakaian ukuran jangkauan mandiri, rak buku hadap depan (*front-facing book rack*), dan ambalan display koleksi lego.",
    image: "/images/portfolio/kamar-anak/anak-02.jpg",
    highlights: ["Cat ramah anak bebas timbal & VOC rendah", "Lemari wardrobe anak dengan rel geser anti-anjlok", "Meja belajar dengan laci buku luas"]
  },
  {
    id: "kamar-anak-03",
    title: "Space-Saving Twin Bed & Storage",
    category: "kamar-anak",
    categoryLabel: "Kamar Tidur Anak",
    location: "Margahayu Raya, Bandung",
    style: "Compact Functional",
    primaryMaterial: "Multiplek 18mm",
    finish: "HPL TACO Putih Bersih & Aksen Kuning Mustard",
    description: "Solusi kamar untuk dua anak dengan sistem tempat tidur tarik (*trundle bed*) yang dapat disembunyikan di siang hari agar area bermain lantai tetap luas.",
    image: "/images/portfolio/kamar-anak/anak-03.jpg",
    highlights: ["Trundle bed beroda silikon anti-gores lantai vinyl", "Meja belajar ganda berdampingan", "Rak dinding kubus gantung"]
  },

  // 5. WALK IN CLOSET (3 Projects)
  {
    id: "closet-01",
    title: "Smoke Glass & Bronze Frame Wardrobe",
    category: "walk-in-closet",
    categoryLabel: "Walk in Closet",
    location: "Dago Pakar, Bandung",
    style: "Luxury Modern",
    primaryMaterial: "Blockboard 18mm & Profil Aluminium",
    finish: "Kaca Tempered Grey 5mm & HPL AICA Dark Wood",
    description: "Wardrobe mewah setinggi 3 meter dengan pintu kaca abu-abu tembus pandang yang elegan. Lampu LED batang vertikal otomatis menyala saat pintu dibuka.",
    image: "/images/portfolio/walk-in-closet/closet-01.jpg",
    highlights: ["Sensor pintu otomatis menyalakan lampu dalam kabinet", "Pintu kaca aluminium ramping anti-debu", "Kompartemen khusus koleksi tas mewah & jam tangan"]
  },
  {
    id: "closet-02",
    title: "Minimalist Open Vanity & Velvet Island",
    category: "walk-in-closet",
    categoryLabel: "Walk in Closet",
    location: "Arcamanik Endah, Bandung",
    style: "Warm Contemporary",
    primaryMaterial: "Multiplek 18mm",
    finish: "HPL CARTA Alabaster White & Beludru Halus",
    description: "Ruang pakaian berjalan dengan konsep lemari terbuka (*open system*), dipadukan pulau tengah (*accessory island*) dengan laci atas kaca berlapis velvet.",
    image: "/images/portfolio/walk-in-closet/closet-02.jpg",
    highlights: ["Laci perhiasan partisi velvet anti-kusut", "Meja rias terintegrasi dengan cermin full body", "Gantungan baju double rail stainless steel"]
  },
  {
    id: "closet-03",
    title: "Floor-to-Ceiling White Ash Closet",
    category: "walk-in-closet",
    categoryLabel: "Walk in Closet",
    location: "Gegerkalong, Bandung",
    style: "Scandinavian Clean",
    primaryMaterial: "Blockboard 18mm (Pintu) & Multiplek 18mm",
    finish: "HPL TACO White Ash Woodgrain",
    description: "Lemari pakaian penuh hingga plafon dengan pembagian zona fungsional: area gantung kemeja, gantungan celana tarik (*pull-out trouser rack*), dan rak penyimpanan koper atas.",
    image: "/images/portfolio/walk-in-closet/closet-03.jpg",
    highlights: ["Gantungan celana hidrolik tarik 9 baris", "Engsel bukaan 110 derajat Blum dengan peredam suara", "Cermin panjang tersembunyi di balik pintu"]
  },

  // 6. LAUNDRY AREA (3 Projects)
  {
    id: "laundry-01",
    title: "Concealed Cabinetry Laundry Station",
    category: "laundry-area",
    categoryLabel: "Laundry Area",
    location: "Arcamanik, Bandung",
    style: "Clean Minimalist",
    primaryMaterial: "100% PVC Board 18mm",
    finish: "HPL TACO Solid White Anti-Air",
    description: "Ruang cuci dan jemur dalam rumah yang disamarkan rapi di balik lemari berpintu kisi-kisi. Mesin cuci dan pengering ditumpuk rapi dengan meja lipat setrika tarik.",
    image: "/images/portfolio/laundry-area/laundry-01.jpg",
    highlights: ["Kabinet 100% tahan air dan kelembapan mesin cuci", "Meja setrika tarik tersembunyi (*pull-out ironing board*)", "Tempat penyimpanan sabun cuci & keranjang pakaian kotor"]
  },
  {
    id: "laundry-02",
    title: "Warm Terracotta Stacked Washer Nook",
    category: "laundry-area",
    categoryLabel: "Laundry Area",
    location: "Padasuka, Bandung",
    style: "Warm Earthy",
    primaryMaterial: "PVC Board 18mm & Multiplek (Bagian Kering)",
    finish: "HPL CARTA Terracotta & Keramik Subway Tile",
    description: "Sudut cucian hemat tempat di koridor servis dengan wastafel rendam kecil (*soaking sink*), gantungan baju gantung atas, dan rak handuk tertata rapi.",
    image: "/images/portfolio/laundry-area/laundry-02.jpg",
    highlights: ["Wastafel cuci tangan batu terrazzo", "Saluran buangan air & selang tersembunyi di dalam dinding kabinet", "Laci bawah mesin cuci untuk detergen berat"]
  },
  {
    id: "laundry-03",
    title: "Balcony Integrated Wet & Dry Laundry",
    category: "laundry-area",
    categoryLabel: "Laundry Area",
    location: "Ciumbuleuit, Bandung",
    style: "Outdoor Sheltered Minimalist",
    primaryMaterial: "PVC Board 18mm & Rangka Besi Galvanis",
    finish: "Cat Duco Eksterior Weatherproof & HPL AICA",
    description: "Area laundry semi-outdoor di balkon apartemen yang terlindung dari tampias hujan. Dilengkapi tirai gulung dan kabinet tahan cuaca panas dan lembap.",
    image: "/images/portfolio/laundry-area/laundry-03.jpg",
    highlights: ["Tahan sinar matahari langsung dan cipratan air hujan", "Rak jemuran lipat dinding stainless steel 304", "Ruang penyimpanan vacuum cleaner dan sapu"]
  },
  {
    id: "kitchen-05",
    title: "Monolith Quartz & Fluted Oak Kitchen",
    category: "kitchen-set",
    categoryLabel: "Kitchen Set",
    location: "Setiabudi, Bandung",
    style: "Modern Architectural",
    primaryMaterial: "Multiplek 18mm & PVC Board (Area Sink)",
    finish: "HPL Fluted Oak & Calacatta Quartz Countertop",
    description: "Dapur beraksen kisi-kisi kayu fluted vertikal dipadukan dengan countertop kuarsa monolitik. Sistem pencahayaan arsitektural 2700K menciptakan suasana intim dan mewah.",
    image: "/images/portfolio/kitchen-set/kitchen-05.jpg",
    highlights: ["Panel pintu bertekstur fluted woodgrain mulus", "Top table kuarsa anti gores dan noda minyak", "Kabinet bawah sink berbahan 100% PVC board"]
  },
  {
    id: "tv-05",
    title: "Acoustic Slat Wood & Bronze Mirror Media Wall",
    category: "backdrop-tv",
    categoryLabel: "Backdrop TV",
    location: "Mekarwangi, Bandung",
    style: "Contemporary Luxury",
    primaryMaterial: "Multiplek Meranti 18mm",
    finish: "HPL TACO American Walnut & Bronze Mirror Tempered",
    description: "Backdrop media ruang keluarga yang memadukan kisi-kisi akustik peredam gema suara dengan aksen cermin perunggu elegan untuk memberikan ilusi ruang yang lebih luas.",
    image: "/images/portfolio/backdrop-tv/tv-05.jpg",
    highlights: ["Bilah kisi-kisi kayu peredam pantulan akustik home theater", "Cermin bronze tempered anti-pecah bersuhu hangat", "Manajemen kabel tersembunyi berakses pipa dinding"]
  },
  {
    id: "kamar-04",
    title: "Minimalist Walnut Platform Bed Suite",
    category: "kamar-utama",
    categoryLabel: "Kamar Tidur Utama",
    location: "Batununggal, Bandung",
    style: "Minimalist Warm Sanctuary",
    primaryMaterial: "Blockboard 18mm & Multiplek Meranti",
    finish: "HPL AICA Teak Natural & Panel Dinding Linen",
    description: "Dipan platform melayang dengan nakas terintegrasi dan dinding aksen linen abu-abu lembut. Dirancang untuk kenyamanan istirahat maksimal tanpa distraksi visual.",
    image: "/images/portfolio/kamar-utama/kamar-04.jpg",
    highlights: ["Konstruksi dipan melayang diperkuat rangka besi hollow internal", "Nakas gantung tanpa kaki untuk kemudahan pembersihan robot vacuum", "Lampu baca LED fleksibel tersembunyi"]
  },
  {
    id: "anak-04",
    title: "Bespoke Dual Study & Bed Nook",
    category: "kamar-anak",
    categoryLabel: "Kamar Tidur Anak",
    location: "Parahyangan, Bandung",
    style: "Modern Nordic",
    primaryMaterial: "Multiplek Meranti 18mm",
    finish: "Cat Duco Polyurethane Putih & Sage Green Anti-Toxic",
    description: "Kamar tidur multifungsi yang mengintegrasikan ranjang tidur ergonomis, meja belajar luas berpapan pin, dan rak buku modular untuk menumbuhkan fokus belajar anak.",
    image: "/images/portfolio/kamar-anak/anak-04.jpg",
    highlights: ["Finishing ramah anak tanpa timbal berstandar EN71-3", "Meja belajar dengan cable management terintegrasi", "Laci penyimpanan mainan bersistem soft-closing"]
  },
  {
    id: "closet-04",
    title: "Illuminated Bronze Frame Dressing Suite",
    category: "walk-in-closet",
    categoryLabel: "Walk in Closet",
    location: "Cigadung, Bandung",
    style: "Boutique Atelier",
    primaryMaterial: "Multiplek Meranti 18mm & Profil Aluminium",
    finish: "HPL CARTA Smoked Charcoal & Kaca Fluted Tempered",
    description: "Walk-in closet berpintu kaca fluted berbingkai aluminium bronze tipis. Seluruh rak pakaian dan laci aksesori dilapisi sensor pencahayaan LED tersembunyi.",
    image: "/images/portfolio/walk-in-closet/closet-04.jpg",
    highlights: ["Pintu profil aluminium bronze ultra-slim 20mm", "Laci perhiasan berbahan beludru abu-abu dengan partisi custom", "Sensor pintu otomatis untuk pencahayaan lemari"]
  },
  {
    id: "laundry-04",
    title: "Integrated Cabinetry & Folding Counter",
    category: "laundry-area",
    categoryLabel: "Laundry Area",
    location: "Buah Batu, Bandung",
    style: "Clean Utility Modern",
    primaryMaterial: "100% PVC Board 18mm",
    finish: "HPL Carta Matte Mist White Anti-Air",
    description: "Kabinet ruang cuci lengkap dengan counter pelipat pakaian dari bahan solid surface dan gantungan baju jemur tersembunyi di bawah kabinet gantung.",
    image: "/images/portfolio/laundry-area/laundry-04.jpg",
    highlights: ["Bodi 100% PVC Board tahan air rendaman dan kelembapan detergen", "Counter lipat pakaian berbahan solid surface anti-noda", "Keranjang cucian kotor dorong tarik internal"]
  }
];
