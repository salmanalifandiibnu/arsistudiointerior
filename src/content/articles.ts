// ============================================================================
// PUSAT KONTEN ARTIKEL WAWASAN & KURASI PRODUK SHOPEE AFFILIATE
// ============================================================================
// Tips Penulisan:
// - Gunakan tanda **teks penting** di dalam paragraf untuk menebalkan/menyorot
//   poin kunci, angka krusial, dan istilah penting agar mudah di-skim pembaca.
// - Gunakan [1], [2] untuk penanda kutipan sumber referensi industri.
// - Gunakan inlineHighlights untuk kata yang menjadi link stabilo Shopee.
// ============================================================================

export interface InlineHighlight {
  phrase: string;       // Kata persis di dalam paragraf yang akan diberi stabilo link Shopee
  shopeeUrl: string;    // Link Shopee Affiliate Anda
  tooltipLabel?: string; // Keterangan singkat saat di-hover
}

export interface AffiliateProduct {
  id: string;
  badge?: string;       // Label kecil di atas produk
  name: string;         // Nama produk rekomendasi
  price: string;        // Label harga / promo
  reason: string;       // Alasan kenapa pengrajin/desainer merekomendasikan alat ini
  image: string;        // Lokasi foto di /images/wawasan/produk-shopee/...
  shopeeUrl: string;    // Link Shopee Affiliate Anda
}

export interface CheatSheetItem {
  label: string;        // Nama komponen
  value: string;        // Ukuran / Harga patokan
  note: string;         // Penjelasan singkat
}

export interface ArticleReference {
  id: number;
  institution: string;  // Nama lembaga / media (misal: "HIMKI / Kompas.com")
  title: string;        // Judul laporan / topik rujukan
  url?: string;         // Tautan referensi eksternal jika ada
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  inlineHighlights?: InlineHighlight[]; // KONSEP 2: Teks Stabilo Interaktif di dalam paragraf
  callout?: {
    type: 'warning' | 'info' | 'quote';
    text: string;
    caption?: string;
  };
  cheatSheet?: {
    title: string;
    subtitle?:String | string;
    items: CheatSheetItem[];
  };
  midProduct?: AffiliateProduct;        // KONSEP 1: Kartu Sisipan Produk di sela bab
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  readTime: string;
  dateBadge: string;
  coverImage: string;
  coverCaption?: string;                // Keterangan spesifik di bawah foto sampul utama
  tags: string[];
  sections: ArticleSection[];
  toolkitTitle: string;
  toolkitSubtitle: string;
  toolkitDesignerNote?: string;         // Kalimat jembatan jujur dari desainer di kotak produk bawah
  toolkitProducts: AffiliateProduct[];  // KONSEP 3: Kartu Pelengkap di bawah artikel
  references?: ArticleReference[];      // Daftar Pustaka & Sumber Data Resmi Industri
  conclusion: {
    heading: string;
    text: string;
  };
}

export const ARTICLES: Article[] = [
  // ==========================================================================
  // ARTIKEL 01: DESAIN KAMAR ANAK KONSEP "TUMBUH BERSAMA" (TK SAMPAI SMA)
  // ==========================================================================
  {
    id: 'kamar-anak-tumbuh-bersama',
    slug: 'rumus-desain-kamar-anak-tumbuh-tk-sampai-sma',
    title: "Jangan Bikin Kamar Anak yang Cuma Kepakai 3 Tahun: Gunakan Rumus 'Kamar Tumbuh' Ini agar Awet dari Usia TK Sampai SMA",
    subtitle: 'Panduan merancang interior kamar anak sekali saja untuk 12 tahun ke depan—tanpa harus bongkar ulang lemari, dipan, dan meja belajar saat anak beranjak remaja.',
    excerpt: 'Kesalahan nomor 1 orang tua saat bikin kamar anak adalah mengunci ukuran furnitur sesuai tubuh balita hari ini. Gunakan rumus 70% Permanen + 30% Modular ini.',
    category: 'DESAIN KAMAR ANAK',
    readTime: '4 Menit Baca',
    dateBadge: 'Panduan Interior #01',
    coverImage: '/images/wawasan/thumbnails/artikel-01-kamar-anak.webp',
    coverCaption: 'Ilustrasi Perbandingan: Jebakan meja ukuran balita yang cepat sempit saat anak bertumbuh (kiri) vs Konsep Kamar Tumbuh dengan meja standar dewasa, kursi adjustable, & rak mainan modular (kanan).',
    tags: ['Kamar Anak', 'Desain Tumbuh', 'Ergonomi Belajar'],
    sections: [
      {
        heading: 'Rumus 70% Furnitur Permanen Dewasa + 30% Perlengkapan Modular',
        paragraphs: [
          'Kunci utama merancang kamar anak agar **awet dipakai dari usia TK hingga lulus SMA** tanpa bongkar ulang adalah menerapkan rumus **"70% Permanen + 30% Modular"**: buatlah **70% furnitur tanam** (dipan kasur, lemari pakaian, dan meja belajar) langsung menggunakan **ukuran standar dewasa berwarna netral**, lalu lengkapi **30% sisanya menggunakan perlengkapan lepasan** yang menyesuaikan fase usia anak—yaitu kursi belajar anak ergonomis yang bisa diatur tingginya, rak mainan anak model terbuka yang mudah dijangkau, serta lampu meja belajar khusus pelindung mata.',
          'Dengan strategi ini, Anda **tidak akan membuang uang puluhan juta rupiah** hanya untuk membongkar meja belajar yang kekecilan atau lemari bergambar kartun saat anak Anda naik ke bangku SMP. **Furnitur kayu utamanya tetap kokoh di tempatnya selama belasan tahun**, sementara yang beradaptasi mengikuti pertambahan tinggi badan dan hobi anak adalah komponen pendampingnya.'
        ],
        inlineHighlights: [
          {
            phrase: 'kursi belajar anak ergonomis yang bisa diatur tingginya',
            shopeeUrl: 'https://s.shopee.co.id/8KqjggZTfq',
            tooltipLabel: 'Cek Ketersediaan Kursi Belajar Ergonomis'
          },
          {
            phrase: 'rak mainan anak model terbuka',
            shopeeUrl: 'https://s.shopee.co.id/6q1vu3kPbs',
            tooltipLabel: 'Cek Ketersediaan Rak Mainan Anak'
          },
          {
            phrase: 'lampu meja belajar khusus pelindung mata',
            shopeeUrl: 'https://s.shopee.co.id/3qOKKeF8JN',
            tooltipLabel: 'Cek Ketersediaan Lampu Meja Belajar'
          }
        ],
        midProduct: {
          id: 'prod-1a',
          badge: 'Investasi Postur Anak • Kepakai Sampai Remaja',
          name: 'Kursi Belajar Anak Ergonomis Adjustable (Tinggi Dudukan & Sandaran Bisa Diatur)',
          price: '⭐ Pilihan Favorit Orang Tua',
          reason: 'Kunci utama agar anak usia TK/SD bisa duduk nyaman dengan postur punggung tegak di meja belajar ukuran standar dewasa (75 cm) tanpa kaki menggantung.',
          image: '/images/wawasan/produk-shopee/produk-kursi-belajar.webp',
          shopeeUrl: 'https://s.shopee.co.id/8KqjggZTfq'
        }
      },
      {
        heading: 'Kenapa Meja Belajar Tanam Tidak Boleh Dibuat Pendek?',
        paragraphs: [
          'Di workshop kami di Bandung, kami sering menemui orang tua yang meminta dibuatkan **meja belajar custom setinggi 55 cm** agar pas dengan tubuh anaknya yang masih berusia 5 tahun. Secara niat memang baik, namun secara perhitungan jangka panjang itu adalah **jebakan biaya**: pertumbuhan tulang anak usia 5 hingga 12 tahun sangat pesat (**rata-rata bertambah 5–7 cm per tahun**) [1]. Dalam waktu **3 tahun saja**, lutut anak sudah mentok ke laci bawah meja dan **punggungnya terpaksa membungkuk** setiap kali mengerjakan PR.',
          'Solusi arsitektural yang paling logis adalah tetap membangun meja belajar tanam pada **tinggi standar dewasa (73–75 cm dari lantai)** sejak hari pertama [2]. Lalu bagaimana agar anak yang masih kecil tidak mendongak dan kakinya tidak menggantung? Di sinilah peran kursi belajar anak ergonomis yang bisa diatur tingginya bekerja.',
          'Kursi belajar ergonomis dirancang memiliki **pengatur ketinggian dudukan**, **sandaran punggung penyangga tulang belakang (lumbar support)**, serta **pijakan kaki (footrest)**. Saat anak masih kelas 1 SD, dudukannya dinaikkan agar siku tangannya sejajar permukaan meja; saat anak beranjak SMP dan SMA, dudukannya tinggal diturunkan mengikuti panjang kakinya.'
        ],
        cheatSheet: {
          title: 'Contekan Ukuran Ideal Kamar Anak (Standar "Kamar Tumbuh")',
          subtitle: 'Simpan atau screenshot panduan ukuran ini sebelum Anda memesan furnitur atau membeli perlengkapan kamar anak:',
          items: [
            {
              label: 'Tinggi Meja Belajar',
              value: '73 – 75 cm',
              note: 'Buat langsung ukuran dewasa; sesuaikan tinggi duduk anak memakai Kursi Belajar Adjustable.'
            },
            {
              label: 'Ukuran Dipan Kasur',
              value: 'Min. 120 × 200 cm',
              note: 'Ukuran Single Lebar—nyaman saat orang tua menemani anak tidur & muat dipakai hingga kuliah.'
            },
            {
              label: 'Tinggi Rak Mainan',
              value: '70 – 85 cm',
              note: 'Sejajar dada anak usia TK/SD agar si kecil mandiri mengambil & membereskan mainan sendiri.'
            },
            {
              label: 'Cahaya Lampu Belajar',
              value: '4000K Natural White',
              note: 'Pasang lampu baca fokus di meja agar buku tidak tertutup bayangan badan anak dari lampu plafon.'
            }
          ]
        },
        callout: {
          type: 'quote',
          text: '"Jangan pernah memangkas ukuran furnitur permanen mengikuti tinggi anak hari ini. Biarkan meja dan lemarinya berukuran dewasa, dan gunakan kursi ergonomis adjustable sebagai jembatan pertumbuhannya."',
          caption: '— Prinsip Desain Kamar Tumbuh Arsi Studio Interior'
        }
      },
      {
        heading: 'Strategi Penyimpanan Mainan & Pencahayaan Meja Belajar',
        paragraphs: [
          'Pertanyaan berikutnya dari para orang tua adalah: jika lemari pakaian utamanya sudah dibuat minimalis dengan ukuran dewasa, di mana harus menyimpan ratusan mainan balok, boneka, mobil-mobilan, dan buku cerita saat anak masih kecil? Jawabannya: **jangan pernah membuat lemari mainan permanen** yang menempel mati pada bodi lemari pakaian.',
          'Pada **usia 3 hingga 9 tahun**, anak sedang berada di **fase belajar mandiri (fase Montessori)** [3]. Mereka membutuhkan rak mainan anak model terbuka yang **tingginya sejajar dada mereka (sekitar 70–85 cm)** dengan kotak-kotak sortir miring yang memudahkan tangan kecil mereka mengambil dan mengembalikan mainan sendiri. Keuntungan utamanya: **ketika anak menginjak usia 12 tahun** dan sudah tidak lagi bermain boneka, **rak mainan lepasan ini tinggal dihibahkan atau digeser keluar kamar**, sehingga ruang kamarnya langsung berubah menjadi kamar remaja yang lega.',
          'Selain urusan mainan, perhatikan juga **titik jatuh cahaya di atas meja belajar**. Mengandalkan satu lampu plafon di tengah kamar akan membuat badan anak menghalangi cahaya saat duduk menghadap dinding—sehingga **buku tulisnya tertutup bayangan kepalanya sendiri** dan memicu **mata cepat lelah (minus)**. Wajib tambahkan lampu meja belajar khusus pelindung mata di sudut meja yang mengarah langsung ke permukaan buku dengan spektrum cahaya lembut yang **bebas kedipan (flicker-free)**.'
        ],
        inlineHighlights: [
          {
            phrase: 'rak mainan anak model terbuka',
            shopeeUrl: 'https://s.shopee.co.id/6q1vu3kPbs',
            tooltipLabel: 'Cek Ketersediaan Rak Mainan Anak'
          },
          {
            phrase: 'lampu meja belajar khusus pelindung mata',
            shopeeUrl: 'https://s.shopee.co.id/3qOKKeF8JN',
            tooltipLabel: 'Cek Ketersediaan Lampu Meja Belajar'
          }
        ]
      },
      {
        heading: 'Standar Keamanan Konstruksi Kamar Anak di Iklim Lembap',
        paragraphs: [
          'Sebelum Anda memanggil tim interior untuk mengeksekusi 70% furnitur permanen di kamar buah hati Anda, pastikan **4 standar keamanan konstruksi** ini terpenuhi:',
          '**1. Ukuran Dipan Kasur Minimal Single Lebar (120 × 200 cm)**\nHindari ukuran 90 × 200 cm yang sempit agar orang tua tetap nyaman menemani anak membaca cerita sebelum tidur, dan kasurnya tetap leluasa dipakai hingga anak beranjak dewasa.',
          '**2. Seluruh Sudut Meja dan Dipan Wajib Tumpul Melengkung (Rounded Corner)**\nTepian meja belajar dan sudut dipan wajib dibuat tumpul melengkung (rounded corner radius) untuk mencegah cedera benturan saat anak aktif bergerak.',
          '**3. Engsel Hidrolik Soft-Close & Rel Double-Track**\nSeluruh pintu lemari dan laci wajib menggunakan engsel hidrolik soft-close dan rel double-track agar pintu menutup perlahan dan **tidak menjepit jari anak**.',
          '**4. Material Bodi Wajib Plywood Lapis Keras 18mm**\nKhusus untuk rumah di area Bandung yang sejuk serta lembap, pastikan bodi lemari dan dipan menggunakan material **Plywood Lapis Keras 18mm** (bukan serbuk kayu MDF atau Particle Board murah). Selain jauh lebih kuat menahan beban apabila anak sesekali melompat di atas dipan, Plywood berkualitas tinggi **bebas dari risiko jamur lembap dan bau residu lem menyengat** yang dapat mengganggu pernapasan si kecil [4].'
        ]
      }
    ],
    toolkitTitle: 'Perlengkapan Modular Pendamping Kamar Anak Tumbuh',
    toolkitSubtitle: 'Rekomendasi perlengkapan lepasan untuk melengkapi area bermain dan meja belajar anak:',
    toolkitDesignerNote: 'Catatan Desainer: Saat kami mengerjakan proyek kamar anak klien di Bandung, perlengkapan modular di bawah inilah yang selalu kami sarankan untuk dibeli terpisah oleh orang tua secara mandiri/online—jauh lebih hemat budget dibandingkan membuat rak mainan custom permanen, dan mudah diganti mengikuti usia anak.',
    toolkitProducts: [
      {
        id: 'prod-1b',
        badge: 'Melatih Anak Bereskan Mainan Sendiri',
        name: 'Rak Penyimpanan Mainan & Buku Anak Modular (Kids Toy Storage Organizer)',
        price: '⭐ Best Seller Perlengkapan Anak',
        reason: 'Dirancang sesuai tinggi jangkauan anak (70–85 cm) agar si kecil terbiasa menyortir dan mengembalikan mainannya sendiri. Mudah dipindah saat anak beranjak remaja.',
        image: '/images/wawasan/produk-shopee/produk-rak-mainan.webp',
        shopeeUrl: 'https://s.shopee.co.id/6q1vu3kPbs'
      },
      {
        id: 'prod-1c',
        badge: 'Anti-Silau & Cegah Mata Minus',
        name: 'Lampu Meja Belajar Anak Eye-Care (Cahaya Lembut Tanpa Bayangan)',
        price: '⭐ Wajib untuk Meja Menghadap Dinding',
        reason: 'Menerangi area buku tulis secara merata tanpa silau ketika meja belajar anak menghadap ke dinding atau berada di bawah kabinet gantung.',
        image: '/images/wawasan/produk-shopee/produk-lampu-belajar.webp',
        shopeeUrl: 'https://s.shopee.co.id/3qOKKeF8JN'
      }
    ],
    references: [
      {
        id: 1,
        institution: 'IDAI (Ikatan Dokter Anak Indonesia)',
        title: 'Panduan Kesehatan Postur & Tulang Belakang Anak Usia Sekolah: Evaluasi Risiko Gangguan Skoliosis & Rata-Rata Pertumbuhan Fisik Anak (5–7 cm/Tahun).',
        url: 'https://www.idai.or.id/'
      },
      {
        id: 2,
        institution: 'BSN (Badan Standardisasi Nasional) — SNI 7555.21:2008',
        title: 'Standar Meja dan Kursi Belajar Peserta Didik: Parameter Ergonomi & Tinggi Kerja Standar (73–75 cm) Berdasarkan Data Antropometri.',
        url: 'https://bsn.go.id/'
      },
      {
        id: 3,
        institution: 'Association Montessori Internationale (AMI)',
        title: 'Prinsip Penataan Lingkungan Mandiri Anak (Prepared Environment): Standar Ketinggian Rak Terbuka Rendah (Low-Shelf 70–85 cm) untuk Motorik Mandiri.',
        url: 'https://montessori-ami.org/'
      },
      {
        id: 4,
        institution: 'European Standards (EN 717-1) & WHO Indoor Air Quality Guidelines',
        title: 'Ambang Batas Emisi Rendah Formaldehida (Kategori E1/E0) pada Material Papan Komposit & Kayu Lapis Interior Kamar Tidur Anak.',
        url: 'https://www.who.int/'
      }
    ],
    conclusion: {
      heading: 'Sedang Merencanakan Interior Kamar Anak di Bandung?',
      text: 'Arsi Studio Interior membantu para orang tua di Bandung merancang dan memproduksi kamar anak berkonsep "Tumbuh Bersama" menggunakan 100% material Plywood 18mm yang aman, sudut ramah anak, dan tata ruang presisi langsung dari workshop kami di Arcamanik.'
    }
  },

  // ==========================================================================
  // ARTIKEL 02: KRISIS BAHAN BAKU & JEBAKAN KONTRAKTOR "TURUN SPEK"
  // ==========================================================================
  {
    id: 'krisis-material-jebakan-turun-spek',
    slug: 'jebakan-turun-spek-kenaikan-harga-material-interior',
    title: "Tergiur Kitchen Set 'Promo Rp 1,2 Juta/Meter'? Bongkar Dulu 4 Akal-Akalan Material di Balik Harga Miring Saat Bahan Baku Naik",
    subtitle: 'Investigasi lonjakan harga bahan baku mebel di Indonesia berdasarkan data asosiasi industri (HIMKI & APKINDO), 4 modus kecurangan kontraktor nakal, dan cara menyelamatkan kabinet Anda.',
    excerpt: 'Di tengah lonjakan harga Plywood 18mm, lem resin, dan HPL impor akibat pelemahan Rupiah, tawaran interior harga miring menyimpan risiko "turun spek" yang merugikan.',
    category: 'INVESTIGASI MATERIAL',
    readTime: '6 Menit Baca',
    dateBadge: 'Catatan Bengkel #02',
    coverImage: '/images/wawasan/thumbnails/artikel-02-kenaikan-material.webp',
    coverCaption: 'Ilustrasi Anatomi Kabinet: Perbandingan spesifikasi jujur Plywood 18mm + Hardware Stainless 304 vs praktik "Turun Spek" yang memangkas ketebalan kayu dan komponen mekanis.',
    tags: ['Harga Material', 'Audit RAB', 'Hardware Kabinet'],
    sections: [
      {
        heading: 'Matematika Biaya Bengkel & Komponen yang Paling Sering Dipangkas',
        paragraphs: [
          'Jawaban jujurnya: di tengah **lonjakan harga bahan baku kayu lapis dan komponen impor sebesar 25–35%** saat ini, secara matematis **sudah mustahil membuat kabinet berstandar Multipleks/Plywood 18mm asli + HPL Taco** dengan harga jual **Rp 1,1 hingga Rp 1,3 juta per meter lari**. Oknum vendor yang masih mematok harga "promo miring" tersebut hampir pasti menutupi kerugiannya dengan **menurunkan spesifikasi secara diam-diam (Down-Spec)**—terutama mengganti kayu bagian dalam dengan **serbuk MDF/Albasia tipis** serta memangkas kualitas 3 komponen vital: engsel sendok hidrolik soft-close, rel laci double track full extension, dan siku penyangga ambalan.',
          'Jika Anda sedang berencana membuat furnitur dengan tukang borongan dan khawatir dicurangi, langkah paling cerdas adalah **membeli sendiri ketiga komponen hardware mekanis tersebut secara terpisah** agar spesifikasinya terjamin. Dan apabila Anda **sudah terlanjur menjadi korban lemari "harga miring"** yang pintunya mulai terbanting keras, lacinya macet, atau raknya melengkung, Anda **tidak perlu membongkar seluruh kayunya**—cukup ganti dan perkuat ketiga titik vital tersebut.'
        ],
        inlineHighlights: [
          {
            phrase: 'engsel sendok hidrolik soft-close',
            shopeeUrl: 'https://s.shopee.co.id/20wgTA3xRn',
            tooltipLabel: 'Cek Ketersediaan Engsel Sendok Soft-Close'
          },
          {
            phrase: 'rel laci double track full extension',
            shopeeUrl: 'https://s.shopee.co.id/2LZWt8H9cW',
            tooltipLabel: 'Cek Ketersediaan Rel Laci Double Track'
          },
          {
            phrase: 'siku penyangga ambalan',
            shopeeUrl: 'https://s.shopee.co.id/5LD8SqVXxX',
            tooltipLabel: 'Cek Ketersediaan Siku Penyangga Ambalan'
          }
        ],
        midProduct: {
          id: 'prod-2a',
          badge: 'Komponen #1 yang Paling Sering Disunat Vendor Nakal',
          name: 'Engsel Sendok Hidrolik Soft-Close / Slow Motion (Anti-Karat & Menutup Senyap)',
          price: '⭐ Standar Wajib Kabinet Premium',
          reason: 'Vendor harga miring hampir selalu memasang engsel pegas kaleng murah yang membuat pintu berbunyi "Jedug!" dan berkarat dalam 6 bulan. Ganti ke engsel hidrolik ini agar pintu menutup perlahan dan awet bertahun-tahun.',
          image: '/images/wawasan/produk-shopee/produk-engsel-sendok.webp',
          shopeeUrl: 'https://s.shopee.co.id/20wgTA3xRn'
        }
      },
      {
        heading: 'Kenapa Bahan Baku Custom Furniture Melonjak 25–35%?',
        paragraphs: [
          'Mengapa harga pembuatan interior custom yang jujur mengalami kenaikan signifikan dalam dua tahun terakhir? Berdasarkan laporan resmi **Asosiasi Panel Kayu Indonesia (APKINDO)** [1], industri kayu lapis (plywood) nasional sedang menghadapi tekanan berat dari sisi hulu: **pasokan kayu bulat (log) Meranti dari Kalimantan dan Sumatera mengalami koreksi tajam** akibat menyempitnya konsesi hutan aktif dan **tingginya harga bahan bakar solar industri**. Lebih krusial lagi, APKINDO mencatat **lonjakan harga bahan kimia perekat utama kayu lapis—yaitu Resin Urea-Formaldehida (UF)**—akibat tersedotnya pasokan urea industri domestik untuk kuota ekspor luar negeri [1].',
          'Tekanan kedua datang dari **fluktuasi nilai tukar Rupiah terhadap Dolar AS (USD)** dan ketegangan rantai pasok global. Ketua Umum **Himpunan Industri Mebel dan Kerajinan Indonesia (HIMKI), Abdul Sobur**, sebagaimana dikutip dari *Kompas.com* [2] dan *Kontan.co.id* [3], menegaskan bahwa **lebih dari 80% bahan penolong dan komponen mekanis furnitur modern di Indonesia masih bergantung pada impor**. Ketika kurs Rupiah melemah dan tarif kargo laut internasional naik, **harga lembaran HPL (High Pressure Laminate), bahan kimia lem kontak (polychloroprene), hingga komponen hardware impor (engsel, rel, gas spring) langsung melonjak tajam** di tingkat distributor lokal [2] [3].',
          'Tekanan ketiga adalah **efek berantai perpajakan (bullwhip effect) di jalur distribusi B2B** [4]. Penyesuaian tarif **Pajak Pertambahan Nilai (PPN)** dan biaya operasional di tingkat pabrik besar (PKP) diteruskan secara berjenjang ke agen material hingga ke workshop interior. Di sisi lain, **daya beli masyarakat kelas menengah sedang mengalami pengetatan** sehingga konsumen cenderung mencari penawaran termurah—menciptakan celah berbahaya bagi oknum kontraktor nakal untuk bermain **"perang harga semu"** dengan memangkas kualitas material di belakang klien.'
        ],
        cheatSheet: {
          title: 'Contekan Harga Material Asli di Pasaran (Acuan Audit RAB 2025/2026)',
          subtitle: 'Simpan data harga bahan baku ritel ini untuk menghitung apakah penawaran vendor Anda masih masuk akal atau tidak:',
          items: [
            {
              label: 'Plywood 18mm Meranti / Semi',
              value: 'Rp 260rb – 320rb',
              note: 'Harga per lembar (122x244 cm). Jika di bawah Rp 200rb, biasanya kayu Sengon lunak atau tebal cuma 12–15mm.'
            },
            {
              label: 'Lembaran HPL (Standar Taco)',
              value: 'Rp 120rb – 250rb+',
              note: 'Harga per lembar tergantung seri motif. Hati-hati jika diganti stiker PVC Sheet tipis yang mudah mengelupas.'
            },
            {
              label: 'Lem Kuning Kontak (10 Kg)',
              value: 'Rp 450rb – 650rb',
              note: 'Harga per blek. Oknum nakal sering mengoplos lem curah dengan bensin berlebih hingga HPL menggelembung.'
            },
            {
              label: 'Harga Wajar Kabinet Jujur',
              value: 'Rp 1,8 Jt – 2,8 Jt / m’',
              note: 'Batas rasional per meter lari untuk spesifikasi murni Plywood 18mm + HPL Taco + Hardware Soft-Close.'
            }
          ]
        },
        callout: {
          type: 'warning',
          text: 'Rumus Logika Sederhana: Dalam 1 meter lari kabinet dapur atas-bawah, biaya belanja bahan mentah aslinya saja (Plywood 18mm, HPL luar-dalam, lem kontak, edging, engsel hidrolik, rel, dan upah tukang) sudah melampaui Rp 1,3 juta. Jika ada yang menjual di bawah angka modal tersebut, tanyakan: bagian mana yang dikorbankan?',
          caption: '— Audit Transparansi Biaya Workshop Arsi Studio Interior'
        }
      },
      {
        heading: 'Empat Praktik "Turun Spek" yang Paling Sering Mengorbankan Konsumen',
        paragraphs: [
          'Di lapangan, ada **4 titik penyelundupan spesifikasi** yang tidak akan terlihat oleh mata awam saat lemari baru selesai dipasang, namun akan **langsung rusak dalam 3 hingga 6 bulan pemakaian**:',
          '**Modus 1 ("Operasi Plastik Kayu"):**\nDi kontrak tertulis Multipleks 18mm, namun yang digunakan adalah **papan serbuk MDF/Particle Board**, atau **Multipleks kayu Albasia (Sengon) lunak ketebalan 12mm** yang bagian bibir depannya saja ditempel lis ganda agar terlihat tebal 18mm dari depan. Akibatnya, baru ditaruh beban piring atau buku, **ambalan tengahnya langsung melengkung** dan membutuhkan bantuan siku penyangga ambalan tambahan agar tidak patah.',
          '**Modus 2 (Penggantian HPL ke Stiker PVC Tipis):**\nMengganti **HPL asli (tebal 0,7–1,0 mm yang kaku dan tahan panas)** menjadi **PVC Sheet / Taco Sheet (stiker plastik tipis 0,15 mm)** pada bagian samping atau dalam kabinet. Bila ditekan dengan kuku, lapisan sheet terasa empuk dan **sangat mudah mengelupas saat terkena uap panas**.',
          '**Modus 3 (Oplosan Lem Kuning Curah):**\nMencampur lem kuning murah dengan bensin secara berlebihan demi menghemat pemakaian lem—menyebabkan **permukaan HPL menggelembung masuk angin (bubbling)** setelah beberapa bulan.',
          '**Modus 4 (Sunat Spek Hardware Mekanis):**\nIni terjadi di **hampir 90% proyek harga miring**. Di penawaran dijanjikan engsel slow-motion dan rel laci kuat, tetapi yang dipasang adalah **engsel sendok kaleng biasa seharga Rp 4.000-an** yang membuat pintu terbanting keras, serta **rel laci roda tunggal warna putih** yang langsung macet dan anjlok saat laci diisi penuh. Padahal, keawetan fungsi harian lemari sangat bergantung pada penggunaan engsel sendok hidrolik soft-close dan rel laci double track full extension.'
        ],
        inlineHighlights: [
          {
            phrase: 'siku penyangga ambalan',
            shopeeUrl: 'https://s.shopee.co.id/5LD8SqVXxX',
            tooltipLabel: 'Cek Ketersediaan Siku Penyangga Ambalan'
          },
          {
            phrase: 'engsel sendok hidrolik soft-close',
            shopeeUrl: 'https://s.shopee.co.id/20wgTA3xRn',
            tooltipLabel: 'Cek Ketersediaan Engsel Sendok Soft-Close'
          },
          {
            phrase: 'rel laci double track full extension',
            shopeeUrl: 'https://s.shopee.co.id/2LZWt8H9cW',
            tooltipLabel: 'Cek Ketersediaan Rel Laci Double Track'
          }
        ]
      },
      {
        heading: 'Cara Menguji Kejujuran Material di Proyek & Menyelamatkan Kabinet Lama',
        paragraphs: [
          'Bagaimana cara melindungi diri Anda sebelum memesan maupun menyelamatkan kabinet yang terlanjur rusak? Terapkan 4 langkah praktis ini:',
          '**1. Lakukan "Inspeksi Material Mentah"**\nMinta foto dokumentasi saat lembaran Plywood dan HPL tiba di lokasi sebelum dipotong. **HPL asli selalu memiliki cap merek di balik lembaran belakangnya** dan teksturnya kaku seperti mika tebal, bukan lentur seperti stiker.',
          '**2. Periksa Potongan Bulat Lubang Engsel (Offcuts)**\nSaat tukang mengebor lubang engsel berdiameter 35mm, mintalah sisa koin potongan kayu tersebut. Dari situ Anda bisa melihat jelas apakah bagian tengah kayunya **benar-benar lapisan kayu padat 18mm atau justru serbuk MDF**.',
          '**3. Terapkan Strategi "Supply Hardware Mandiri"**\nJika Anda menggunakan jasa tukang harian atau ragu dengan spesifikasi yang diberikan vendor, **belilah sendiri engsel hidrolik dan rel laci double-track Anda secara mandiri/online**, lalu minta tukang memasangkannya. Selisih harganya hanya puluhan ribu rupiah, namun Anda **mengunci kualitas pemakaian hingga 10 tahun ke depan**.',
          '**4. Penyelamatan Mandiri untuk Lemari Lama**\nBagi Anda yang sudah terlanjur memiliki lemari atau kitchen set yang mulai menunjukkan gejala "korban turun spek" (pintu berbunyi jedug, laci seret, atau rak melengkung), **lepaskan engsel lama dan ganti dengan engsel hidrolik soft-close**, ganti rel roda putih dengan **rel double track ball-bearing**, dan **pasang siku penyangga besi** di bawah ambalan rak yang mulai melengkung.'
        ]
      }
    ],
    toolkitTitle: 'Paket Penyelamat & Upgrade Mandiri Komponen Kabinet',
    toolkitSubtitle: 'Dua komponen mekanis kelas berat untuk mengamankan spesifikasi proyek baru Anda atau menyelamatkan lemari yang terlanjur dicurangi:',
    toolkitDesignerNote: 'Tips Bengkel Arsi Studio: Jika Anda memanggil tukang kayu lepasan di rumah, jangan serahkan pembelian engsel, rel laci, dan penyangga rak kepada tukang jika tidak ingin dipasangi spek paling murah. Beli sendiri 3 komponen di halaman ini secara online agar kualitas mekanis lemari Anda setara standar studio profesional.',
    toolkitProducts: [
      {
        id: 'prod-2b',
        badge: 'Anti-Macet & Tahan Beban 35 Kg',
        name: 'Rel Laci Double Track Full Extension Ball Bearing (Baja Tebal Tarik Penuh)',
        price: '⭐ Pengganti Rel Roda Putih Murahan',
        reason: 'Menggunakan sistem bantalan bola baja (ball bearing) 3 susun sehingga laci bisa ditarik keluar 100% dengan sangat mulus dan tidak akan anjlok walau diisi tumpukan piring.',
        image: '/images/wawasan/produk-shopee/produk-rel-laci.webp',
        shopeeUrl: 'https://s.shopee.co.id/2LZWt8H9cW'
      },
      {
        id: 'prod-2c',
        badge: 'Penyelamat Ambalan Papan Tipis',
        name: 'Siku Penyangga Ambalan Rak Lemari (Penopang Beban Anti-Melengkung)',
        price: '⭐ Solusi Rak Lemari Meleyot',
        reason: 'Menopang papan ambalan lemari atau meja yang terlanjur memakai tripleks tipis (12mm) agar kembali lurus dan kuat menahan beban berat.',
        image: '/images/wawasan/produk-shopee/produk-siku-ambalan.webp',
        shopeeUrl: 'https://s.shopee.co.id/5LD8SqVXxX'
      }
    ],
    references: [
      {
        id: 1,
        institution: 'APKINDO (Asosiasi Panel Kayu Indonesia)',
        title: 'Tinjauan Industri Kayu Lapis Nasional: Koreksi Pasokan Kayu Bulat (Log) Meranti, Kenaikan Biaya Energi, dan Lonjakan Harga Lem Resin Urea-Formaldehida (UF).',
        url: 'https://www.apkindo.org/'
      },
      {
        id: 2,
        institution: 'HIMKI (Himpunan Industri Mebel dan Kerajinan Indonesia) — Kompas.com',
        title: 'Pernyataan Ketua Umum HIMKI Abdul Sobur: Dampak Pelemahan Nilai Tukar Rupiah terhadap Lonjakan Biaya Komponen dan Bahan Baku Penolong Impor Industri Furnitur.',
        url: 'https://www.kompas.com/'
      },
      {
        id: 3,
        institution: 'Kontan.co.id & Laporan Industri Hilir Perkayuan',
        title: 'Tekanan Berlapis Industri Mebel Domestik: Disrupsi Logistik Global, Ketergantungan Hardware Impor, dan Kenaikan Biaya Produksi.',
        url: 'https://industri.kontan.co.id/'
      },
      {
        id: 4,
        institution: 'Direktorat Jenderal Pajak (DJP Kemenkeu) & Riset Rantai Pasok Material Interior (2025–2026)',
        title: 'Analisis Efek Berantai (Bullwhip Effect) Penyesuaian PPN pada Distribusi Material B2B serta Survei Harga Ritel Multipleks 18mm, HPL, dan Perekat Kontak di Indonesia.',
        url: 'https://www.pajak.go.id/'
      }
    ],
    conclusion: {
      heading: 'Ingin Bikin Custom Furniture Tanpa Rasa Was-Was Soal Spesifikasi?',
      text: 'Di Arsi Studio Interior, kami menolak ikut dalam perang harga semu yang mengorbankan kualitas. Setiap proyek kami di Bandung dikerjakan secara transparan di workshop mandiri kami di Arcamanik—menggunakan 100% Plywood 18mm, HPL asli, dan hardware soft-close yang terbuka untuk Anda inspeksi kapan saja.'
    }
  },

  // ==========================================================================
  // ARTIKEL 03: PERBANDINGAN BAHAN PINTU KAMAR (KAYU SOLID vs ENGINEERING vs WPC)
  // ==========================================================================
  {
    id: 'perbandingan-bahan-pintu-kamar',
    slug: 'plus-minus-pintu-kamar-kayu-solid-engineering-wpc',
    title: 'Bingung Pilih Pintu Kamar Bahan Kayu Solid, Engineering HPL, atau WPC? Ini Plus-Minus Jujurnya Setelah Dipakai Bertahun-Tahun',
    subtitle: 'Bedah tuntas karakter 4 bahan pintu kamar di iklim tropis Indonesia—mana yang paling kedap suara, mana yang 100% tahan rayap, serta 3 komponen wajib agar pintu kamar senyap dan modern.',
    excerpt: 'Jangan asal beli daun pintu hanya karena motif luarnya bagus. Kenali plus-minus Pintu Kayu Solid, Engineering HPL, dan WPC setelah dipakai bertahun-tahun.',
    category: 'PANDUAN MATERIAL PINTU',
    readTime: '5 Menit Baca',
    dateBadge: 'Panduan Interior #03',
    coverImage: '/images/wawasan/thumbnails/artikel-03-pintu-kamar.webp',
    coverCaption: 'Ilustrasi Komparasi Pintu Kamar: Perbedaan struktur inti Pintu Kayu Solid, Pintu Engineering Lapis HPL, dan Pintu Komposit WPC Tahan Air beserta kelengkapan hardware modern.',
    tags: ['Pintu Kamar', 'Smart Door Lock', 'Kedap Suara'],
    sections: [
      {
        heading: 'Memilih Bahan Pintu Sesuai Ruangan & Tiga Komponen Penentu Kenyamanannya',
        paragraphs: [
          'Jawaban paling praktis sebelum Anda membeli pintu rumah adalah membedakannya berdasarkan kondisi ruangan: untuk **pintu kamar tidur ber-AC yang membutuhkan ketenangan suara**, pilihlah **Pintu Engineering Wood (dengan isian Solid/Blockboard lapis HPL)** atau **Pintu Kayu Solid Oven**; sedangkan untuk **area kamar mandi, ruang cuci, atau rumah yang rawan serangan rayap**, pilihlah **Pintu WPC (Wood Plastic Composite)** yang 100% kebal air.',
          'Namun ada satu rahasia lapangan yang jarang diberi tahu penjual pintu: **sebagus apa pun bahan daun pintunya, kenyamanan dan kemewahan pintu kamar 70% ditentukan oleh 3 komponen pelengkapnya**—yaitu meng-upgrade gagang kunci biasa ke smart door lock fingerprint agar praktis tanpa anak kunci, memasang penutup celah bawah pintu kedap suara agar dingin AC dan suara bising luar tidak bocor, serta memasang penahan pintu magnetik anti-banting agar gagang pintu tidak menghantam tembok.'
        ],
        inlineHighlights: [
          {
            phrase: 'smart door lock fingerprint',
            shopeeUrl: 'https://s.shopee.co.id/114AMFGSxO',
            tooltipLabel: 'Cek Ketersediaan Smart Door Lock'
          },
          {
            phrase: 'penutup celah bawah pintu kedap suara',
            shopeeUrl: 'https://s.shopee.co.id/AUvFfnrHYk',
            tooltipLabel: 'Cek Ketersediaan Penutup Celah Pintu'
          },
          {
            phrase: 'penahan pintu magnetik anti-banting',
            shopeeUrl: 'https://s.shopee.co.id/LoTZD1e3E',
            tooltipLabel: 'Cek Ketersediaan Penahan Pintu Magnetik'
          }
        ],
        midProduct: {
          id: 'prod-3a',
          badge: 'Upgrade Pintu Kamar Modern • Praktis Tanpa Anak Kunci',
          name: 'Smart Door Lock Fingerprint / Kunci Pintu Kamar Digital Minimalis (Sidik Jari, PIN, & Kunci Darurat)',
          price: '⭐ Cocok untuk Pintu Kayu, HPL & WPC',
          reason: 'Mengubah tampilan pintu kamar biasa menjadi sekelas kamar hotel modern. Tidak perlu lagi repot mencari anak kunci atau takut terkunci dari dalam.',
          image: '/images/wawasan/produk-shopee/produk-smart-lock.webp',
          shopeeUrl: 'https://s.shopee.co.id/114AMFGSxO'
        }
      },
      {
        heading: 'Plus-Minus Empat Bahan Pintu Kamar Setelah Dipakai Bertahun-Tahun',
        paragraphs: [
          'Saat masih baru di toko bangunan, semua pintu terlihat mulus. Perbedaan aslinya baru terasa setelah **melewati 2 musim hujan dan suhu dingin AC kamar**:',
          '**1. Pintu Kayu Solid (Kamper, Merbau, Jati)**\n• **Kelebihan:** Bobot paling mantap, paling kedap suara, dan sangat kuat menahan sekrup engsel puluhan tahun.\n• **Kekurangan:** Jika kayu tidak melewati proses pengeringan oven sempurna (**Kadar Air / MC di bawah 12–14%**) [1], kayu akan **memuai saat musim hujan sehingga daun pintu seret menggesek lantai**, atau menyusut hingga sambungan panelnya renggang.',
          '**2. Pintu Engineering Wood / Lapis Plywood & HPL**\n• **Kelebihan:** Favorit desainer interior modern karena **sangat stabil (tidak memuai atau melintir kena suhu AC)** dan motif HPL-nya bisa disamakan persis dengan lemari kamar atau dibuat menjadi **"Pintu Kamuflase" (Hidden Door)**.\n• **Catatan Kritis:** Pastikan Anda memilih isian dalam **Solid Engineering / Semi-Solid Blockboard**, dan **hindari isian kertas Honeycomb (sarang tawon karton)** murah yang membuat pintu terasa kopong seperti kardus dan tembus suara.',
          '**3. Pintu WPC (Wood Plastic Composite)**\n• **Kelebihan:** Terbuat dari campuran serat kayu dan biji plastik polimer. Kelebihan mutlaknya adalah **100% tahan air, tidak bisa lapuk, dan mustahil dimakan rayap** [2].\n• **Kekurangan:** Permukaan WPC terasa sedikit seperti plastik jika disentuh dekat, peredaman suaranya di bawah kayu solid, dan saat memasang sekrup engsel/kunci wajib tepat di bagian **tulangan tebal tepi pintu**.',
          '**4. Pintu Baja Ringan / Aluminium Motif Kayu**\n• **Kelebihan:** Sangat awet terhadap cuaca ekstrem dan kebal dari rayap.\n• **Kekurangan:** Memiliki **suara pantulan logam ("klontang")** saat ditutup keras serta isolasi suhu yang kurang hangat untuk kamar tidur utama.'
        ],
        cheatSheet: {
          title: 'Contekan Perbandingan 4 Bahan Pintu Kamar (Simpan / Screenshot)',
          subtitle: 'Panduan cepat memilih bahan daun pintu berdasarkan prioritas kebutuhan rumah Anda:',
          items: [
            {
              label: 'Pintu Kayu Solid Oven',
              value: 'Juara Kedap & Mantap',
              note: 'Plus: Paling kedap suara & mewah. Minus: Wajib kayu oven kering agar tidak seret saat musim hujan.'
            },
            {
              label: 'Pintu Engineering HPL',
              value: 'Juara Stabil & Estetik',
              note: 'Plus: Tidak memuai di kamar AC & bisa model Hidden Door. Minus: Jangan pilih isian kertas Honeycomb kopong.'
            },
            {
              label: 'Pintu WPC (Komposit)',
              value: 'Juara Anti-Rayap & Air',
              note: 'Plus: 100% kebal air & rayap. Minus: Kurang kedap suara jika tidak ditambah seal karet bawah pintu.'
            },
            {
              label: 'Tebal Ideal Daun Pintu',
              value: '3,8 – 4,0 cm',
              note: 'Standar ketebalan wajib agar bodi kunci Mortise dan Smart Door Lock bisa tertanam dengan kokoh.'
            }
          ]
        },
        callout: {
          type: 'info',
          text: 'Tips Bengkel saat Membeli Pintu WPC atau Engineering: Selalu tanyakan kepada penjual berapa lebar "Tulangan Rangka Tepi" di dalam pintu tersebut. Pastikan minimal ada rangka padat selebar 8–10 cm di sisi kunci agar bodi Smart Lock dapat tertanam dengan kuat.',
          caption: '— Standar Instalasi Pintu Arsi Studio Interior'
        }
      },
      {
        heading: 'Mengatasi Dua Kelemahan Utama Pintu Kamar: Kebocoran Suara & Benturan Gagang',
        paragraphs: [
          'Banyak pemilik rumah mengeluh: *"Kenapa sudah beli pintu mahal tapi suara TV dari ruang keluarga tetap terdengar jelas ke dalam kamar tidur, dan AC kamar rasanya lama dingin?"* Jawabannya bukan karena ketebalan pintu Anda yang kurang, melainkan karena **80% kebocoran gelombang suara dan udara dingin AC terjadi lewat celah kosong 1 sentimeter di bawah daun pintu!** [3]',
          'Tukang pintu memang sengaja menyisakan celah 0,8 hingga 1,2 cm di antara bagian bawah pintu dengan lantai keramik agar pintu tidak menggores lantai saat dibuka. Untuk menutup kebocoran suara, debu, kecoa, sekaligus menahan hawa dingin AC tanpa membuat pintu seret, pasanglah penutup celah bawah pintu kedap suara pada bibir bawah pintu kamar Anda. Karet akustik fleksibel ini langsung membuat pintu WPC maupun pintu Engineering terasa jauh lebih kedap dan tenang.',
          'Masalah klasik kedua setelah pintu terpasang adalah **benturan gagang pintu ke dinding belakang**. Apalagi jika Anda sudah meng-upgrade pintu kamar menggunakan smart door lock fingerprint yang elegan—jangan biarkan bodi kunci digital Anda lecet atau menjebol cat tembok saat pintu dibuka terlalu lebar oleh anak-anak atau tertiup angin. Wajib pasang penahan pintu magnetik anti-banting di lantai atau dinding belakang pintu agar daun pintu langsung tertangkap magnet dengan lembut.'
        ],
        inlineHighlights: [
          {
            phrase: 'penutup celah bawah pintu kedap suara',
            shopeeUrl: 'https://s.shopee.co.id/AUvFfnrHYk',
            tooltipLabel: 'Cek Ketersediaan Penutup Celah Pintu'
          },
          {
            phrase: 'smart door lock fingerprint',
            shopeeUrl: 'https://s.shopee.co.id/114AMFGSxO',
            tooltipLabel: 'Cek Ketersediaan Smart Door Lock'
          },
          {
            phrase: 'penahan pintu magnetik anti-banting',
            shopeeUrl: 'https://s.shopee.co.id/LoTZD1e3E',
            tooltipLabel: 'Cek Ketersediaan Penahan Pintu Magnetik'
          }
        ]
      },
      {
        heading: 'Standar Teknis Instalasi Pintu Kamar & Konsep Pintu Kamuflase',
        paragraphs: [
          'Saat tukang memasang pintu kamar Anda, pastikan **3 standar teknis** ini diterapkan secara disiplin:',
          '**1. Gunakan 3 Buah Engsel Kupu-Kupu Ball Bearing (Ukuran 4 Inch)**\nUntuk setiap daun pintu kamar, jangan pernah hanya memakai 2 engsel. Posisi idealnya adalah 1 di atas, 1 di tengah agak ke atas (untuk menahan tarikan gravitasi beban pintu), dan 1 di bawah agar daun pintu tidak pernah turun atau miring.',
          '**2. Pastikan Ketebalan Daun Pintu Minimal 3,8 – 4,0 cm** [4]\nStandar ketebalan ini sangat krusial terutama jika Anda berencana memasang **Smart Door Lock**, agar bodi mekanis kunci (*mortise lock*) tertanam sempurna di tengah ketebalan pintu tanpa menipiskan kekuatan kayu.',
          '**3. Konsep "Pintu Kamuflase" (Hidden Flush Door)**\nJika pintu kamar Anda menghadap langsung ke ruang tamu atau ruang keluarga, pertimbangkan konsep pintu rata dinding berbahan dasar Engineering Plywood yang dilapisi kisi-kisi WPC atau HPL senada dengan dinding *backdrop* TV, sehingga pintu kamar terlihat menyatu tanpa kusen yang menonjol.'
        ]
      }
    ],
    toolkitTitle: 'Perlengkapan Wajib Penyempurna Pintu Kamar',
    toolkitSubtitle: 'Dua komponen pelengkap murah meriah untuk membuat pintu kamar Anda kedap suara, hemat AC, dan bebas benturan tembok:',
    toolkitDesignerNote: 'Catatan Lapangan Arsi Studio: Apa pun bahan pintu yang Anda pilih (Kayu, Engineering HPL, maupun WPC), selalu tambahkan 2 komponen kecil di bawah ini saat pintu selesai dipasang. Efek peredaman suara dan perlindungannya langsung terasa sejak hari pertama.',
    toolkitProducts: [
      {
        id: 'prod-3b',
        badge: 'Kedap Suara, Hemat AC & Blokir Kecoa',
        name: 'Penutup Celah Bawah Pintu Kedap Suara & Penahan Dingin AC (Door Bottom Seal)',
        price: '⭐ Solusi Kamar Tenang & Cepat Dingin',
        reason: 'Menutup celah 1 cm di bawah daun pintu agar suara bising luar tidak masuk, udara dingin AC tidak bocor keluar, dan serangga tidak bisa menyelinap.',
        image: '/images/wawasan/produk-shopee/produk-penutup-celah-pintu.webp',
        shopeeUrl: 'https://s.shopee.co.id/AUvFfnrHYk'
      },
      {
        id: 'prod-3c',
        badge: 'Pelindung Gagang Smart Lock & Tembok',
        name: 'Penahan Pintu Magnetik Anti-Banting Stainless (Magnetic Door Stopper)',
        price: '⭐ Mencegah Gagang Pintu Jebol Tembok',
        reason: 'Menahan daun pintu secara magnetis saat dibuka penuh sekaligus mencegah pintu terbanting keras saat terkena hembusan angin jendela.',
        image: '/images/wawasan/produk-shopee/produk-penahan-pintu-magnet.webp',
        shopeeUrl: 'https://s.shopee.co.id/LoTZD1e3E'
      }
    ],
    references: [
      {
        id: 1,
        institution: 'Puslitbang Hasil Hutan (Kemenhut) & Balai Riset Standardisasi Industri',
        title: 'Pedoman Teknis Pengeringan Kayu Konstruksi dan Komponen Interior: Standar Batas Kadar Air / Moisture Content (Maks. 12–14%) untuk Kusen dan Daun Pintu.',
        url: 'https://forda-mof.org/'
      },
      {
        id: 2,
        institution: 'BSN (Badan Standardisasi Nasional) — SNI ISO 178 & ASTM D7031',
        title: 'Pengujian Sifat Fisis dan Mekanis Papan Komposit Kayu Plastik (WPC): Ketahanan Mutlak terhadap Penyerapan Air dan Evaluasi Rayap Kayu Kering Tropis.',
        url: 'https://bsn.go.id/'
      },
      {
        id: 3,
        institution: 'ASTM International (ASTM E90 & ASTM E413 Acoustic Standards)',
        title: 'Standard Test Method for Laboratory Measurement of Airborne Sound Transmission Loss: Pengaruh Kebocoran Akustik pada Celah Undercut Pintu.',
        url: 'https://www.astm.org/'
      },
      {
        id: 4,
        institution: 'ANSI/BHMA A156.13 (American National Standards Institute)',
        title: 'Standar Ketebalan Minimum Pintu Komersial & Residensial (38–40 mm) untuk Rumah Kunci Mortise Lockcase dan Bodi Smart Digital Lock.',
        url: 'https://buildershardware.com/'
      }
    ],
    conclusion: {
      heading: 'Ingin Membuat Pintu Kamuflase (Hidden Door) atau Custom Interior Kamar di Bandung?',
      text: 'Arsi Studio Interior merancang dan memproduksi Pintu Kamuflase (Hidden Door) yang menyatu presisi dengan Wallpanel Backdrop TV maupun renovasi interior kamar tidur lengkap di Bandung. Hubungi tim workshop kami di Arcamanik untuk berkonsultasi.'
    }
  },

  // ==========================================================================
  // ARTIKEL 04: LOGIKA BISNIS DESAIN INTERIOR (GRATIS VS BERBAYAR)
  // ==========================================================================
  {
    id: 'desain-interior-gratis-vs-berbayar',
    slug: 'desain-interior-gratis-vs-berbayar-dua-model-bisnis',
    title: 'Desain Gratis vs Berbayar: Bedah Logika di Balik Dua Model Bisnis Interior Agar Anda Tepat Memilih Layanan',
    subtitle: 'Bukan tentang siapa yang benar atau salah, melainkan tentang dua sistem kerja dengan peruntukan berbeda. Pahami hak cipta gambar kerja, alokasi anggaran, dan cara memilih model yang paling menguntungkan proyek rumah Anda.',
    excerpt: 'Memilih antara vendor "Free Design" atau konsultan desain berbayar? Pelajari cara kerja di balik layar, status kepemilikan blueprint CAD, dan kalkulasi mana yang paling menguntungkan kebutuhan rumah Anda.',
    category: 'STRATEGI & ANGGARAN',
    readTime: '5 Menit Baca',
    dateBadge: 'Catatan Studio #04',
    coverImage: '/images/wawasan/thumbnails/artikel-04-desain-gratis-vs-berbayar.webp',
    coverCaption: 'Ilustrasi Meja Kerja Studio Arsitektur: Perencanaan tata ruang 2D dan 3D presisi, pemetaan jalur mekanikal-elektrikal, serta penentuan spesifikasi material sebelum eksekusi konstruksi fisik dimulai.',
    tags: ['Biaya Desain', 'Survey Lokasi', 'Model Bisnis', 'Perencanaan Interior'],
    sections: [
      {
        heading: 'Kenapa Ada Studio yang Menggratiskan dan Ada yang Menarif?',
        paragraphs: [
          'Saat mulai mencari jasa interior untuk rumah atau apartemen baru, calon klien sering dihadapkan pada dua kutub penawaran yang tampak bertolak belakang: di satu sisi, ada vendor yang berani memasang promo **"Gratis Survey Lokasi & Desain 3D"**; di sisi lain, ada studio arsitektur yang menagih tarif desain per meter persegi atau biaya komitmen (*commitment fee*) sebelum menginjakkan kaki ke lokasi Anda.',
          'Perbedaan ini kerap memicu tanda tanya di benak pemilik rumah: *"Apakah studio yang menarif itu mematok harga kemahalan? Atau justru vendor gratisan yang menyembunyikan jebakan?"*',
          'Jawabannya: **keduanya sama-sama memiliki dasar logika bisnis yang sah**. Kuncinya bukan mencari siapa yang benar atau salah, melainkan memahami **dua model operasional yang berbeda tujuan sejak hari pertama**—sehingga Anda dapat memilih sistem mana yang paling menguntungkan sesuai anggaran dan waktu yang Anda miliki.'
        ]
      },
      {
        heading: 'Model A: "Design & Build" (Paket All-in Gratis Desain)',
        paragraphs: [
          'Model pertama adalah sistem yang paling banyak ditemukan pada workshop atau bengkel produksi furnitur custom. Pada model ini, layanan pembuatan konsep denah dan visualisasi 3D diberikan secara cuma-cuma kepada calon klien:',
          '**1. Logika Bisnis di Balik "Desain Gratis"**\nStudio jenis ini memiliki fasilitas workshop, tukang kayu, dan mesin produksi sendiri. Sumber pendapatan utama mereka adalah **volume fabrikasi fisik (pembuatan kitchen set, lemari baju, backdrop TV, dan partisi)**. Oleh karena itu, waktu kerja desainer 3D dan survey lokasi menggunakan meteran laser digital presisi dialokasikan sebagai biaya akuisisi konsumen (*Customer Acquisition Cost*) [1]—investasi layanan agar calon klien mantap melanjutkan proyek ke tahap produksi di bengkel mereka.',
          '**2. Keuntungan bagi Pemilik Rumah**\nSistem ini sangat praktis (*one-stop solution*). Anda tidak perlu mengeluarkan uang ekstra jutaan rupiah di awal hanya untuk melihat visualisasi ruang. Komunikasi juga berlangsung satu pintu: orang yang merancang desain berada di bawah manajemen yang sama dengan tukang yang merakit furnitur di lapangan.',
          '**3. Batasan yang Perlu Anda Pahami**\nKarena desain diberikan cuma-cuma sebagai bagian dari paket produksi, **hak kepemilikan file gambar kerja teknis (softcopy CAD / ukuran detail milimeter) biasanya ditahan oleh vendor** sampai Anda menandatangani SPK produksi fisik [2]. Anda tidak bisa meminta gambar 3D tersebut secara gratis lalu membawanya pergi untuk ditenderkan ke tukang borongan lain di luar.'
        ],
        inlineHighlights: [
          {
            phrase: 'meteran laser digital presisi',
            shopeeUrl: 'https://s.shopee.co.id/1W0RQYLutV',
            tooltipLabel: 'Cek Ketersediaan Meteran Laser Digital'
          }
        ],
        midProduct: {
          id: 'prod-4a',
          badge: 'Alat Wajib Survey Mandiri • Akurasi Milimeter',
          name: 'Meteran Laser Digital Presisi 40M / 50M (Laser Distance Meter Auto-Calculate Area & Volume)',
          price: '⭐ Standar Wajib Arsitek & Desainer',
          reason: 'Memverifikasi ukuran dinding, bentang plafon, dan memastikan denah dari studio benar-benar presisi dengan ukuran fisik di lapangan tanpa repot menarik meteran pita manual.',
          image: '/images/wawasan/produk-shopee/produk-meteran-laser.webp',
          shopeeUrl: 'https://s.shopee.co.id/1W0RQYLutV'
        }
      },
      {
        heading: 'Model B: "Design Consultancy" (Konsultan Perencana Murni)',
        paragraphs: [
          'Model kedua adalah sistem konsultan perencana yang umum diterapkan oleh biro arsitek profesional dan studio interior independen. Pada model ini, jasa desain ditagih secara terpisah (biasanya berkisar antara Rp 150.000 hingga Rp 350.000 per meter persegi luas ruangan, atau dengan tarif paket lumpsum):',
          '**1. Logika Bisnis di Balik Desain Berbayar**\nStudio konsultan tidak hidup dari margin penjualan kayu atau keuntungan upah tukang, melainkan dari **keahlian intelektual (intellectual property)**. Output yang mereka jual adalah dokumen perencanaan komprehensif: kajian ergonomi gerak, simulasi pencahayaan alami, pemilihan material independen, pemetaan jalur mekanikal-elektrikal (pipa air, stopkontak, saklar), hingga dokumen tender Rencana Anggaran Biaya (RAB) terbuka [3].',
          '**2. Keuntungan bagi Pemilik Rumah**\nKlien memiliki **hak milik mutlak (100% ownership)** atas seluruh dokumen *Blueprint* dan gambar kerja teknis yang dihasilkan. Dengan dokumen gambar presisi di tangan, Anda memiliki kebebasan penuh untuk melelang (*bidding*) pekerjaan fisik ke beberapa kontraktor atau workshop berbeda guna mencari penawaran harga yang paling kompetitif.',
          '**3. Batasan yang Perlu Dipertimbangkan**\nAnda harus menyiapkan anggaran terpisah di awal untuk biaya jasa perancangan, terlepas dari apakah pembangunan fisik nantinya langsung dikerjakan atau ditunda beberapa bulan ke depan.'
        ]
      },
      {
        heading: 'Model C: Sistem Hybrid (Commitment Fee & Cashback Produksi)',
        paragraphs: [
          'Melihat kelebihan dan keterbatasan dari kedua model di atas, banyak studio interior profesional modern—termasuk yang kerap kami terapkan di Arsi Studio—memilih jalan tengah yang paling adil: **Sistem Hybrid Commitment Fee** [4].',
          'Cara kerjanya sangat transparan: di awal tahap konsultasi dan survey lokasi, klien membayarkan sejumlah biaya komitmen desain yang terjangkau. Biaya ini berfungsi menghargai waktu dan riset teknis tim arsitek saat mengukur lokasi menggunakan meteran laser digital presisi dan merancang konsep 3D secara personal.',
          'Namun begitu desain disepakati dan klien memutuskan melanjutkan proses produksi mebel pada workshop yang sama, **seluruh nilai commitment fee di awal tersebut langsung dipotongkan 100% dari tagihan total produksi fisik**. Hasilnya adalah situasi *win-win*: desainer terlindungi dari risiko kerja sia-sia (*ghosting*), sementara klien mendapatkan layanan perencanaan matang secara efektif bebas biaya tambahan.'
        ],
        inlineHighlights: [
          {
            phrase: 'meteran laser digital presisi',
            shopeeUrl: 'https://s.shopee.co.id/1W0RQYLutV',
            tooltipLabel: 'Cek Ketersediaan Meteran Laser Digital'
          }
        ],
        cheatSheet: {
          title: 'Contekan Perbandingan 3 Model Layanan Interior (Simpan / Screenshot)',
          subtitle: 'Panduan cepat menentukan model layanan interior yang paling sesuai dengan profil proyek Anda:',
          items: [
            {
              label: 'Free Design (All-in)',
              value: 'Hemat Biaya Awal',
              note: 'Cocok jika Anda ingin solusi praktis satu pintu dan sudah yakin memilih bengkel tersebut untuk produksi fisik.'
            },
            {
              label: 'Konsultan Murni',
              value: 'Kebebasan Tender Luas',
              note: 'Cocok untuk proyek skala besar yang membutuhkan pengawasan independen dan kebebasan melelang gambar ke banyak pemborong.'
            },
            {
              label: 'Hybrid (Cashback)',
              value: 'Titik Tengah Win-Win',
              note: 'Biaya komitmen di awal dipotongkan 100% dari total tagihan produksi saat proyek berlanjut ke tahap bengkel.'
            },
            {
              label: 'Status Gambar Kerja',
              value: 'Pahami Hak Cipta',
              note: 'Pastikan Anda menanyakan sejak awal apakah softcopy gambar teknis berdimensi (PDF/CAD) menjadi hak milik Anda.'
            }
          ]
        },
        callout: {
          type: 'quote',
          text: '"Desain interior yang baik bukan ditentukan dari gratis atau mahalnya biaya di awal, melainkan dari keterbukaan spesifikasi fisik, presisi ukuran di lapangan, dan transparansi ke mana setiap rupiah anggaran Anda dialokasikan."',
          caption: '— Prinsip Transparansi Layanan Arsi Studio Interior'
        }
      },
      {
        heading: 'Empat Pertanyaan Kritis Sebelum Anda Menandatangani SPK Desain',
        paragraphs: [
          'Agar Anda tidak terjebak dalam ekspektasi yang keliru di kemudian hari, ajukan 4 pertanyaan sederhana ini kepada studio atau vendor mana pun sebelum memulai tahap perancangan:',
          '**1. Status Kepemilikan Dokumen Gambar**\nTanyakan secara lugas: *"Setelah visualisasi 3D dan denah selesai, apakah saya akan mendapatkan dokumen gambar kerja teknis berdimensi (PDF/CAD) yang bisa saya simpan sebagai arsip pribadi?"*',
          '**2. Batasan Revisi Konsep & Visual 3D**\nKetahui sejak awal berapa kali kuota revisi mayor yang diakomodasi sebelum memasuki tahap produksi, agar proses penyesuaian tata ruang tidak berlarut-larut atau menimbulkan biaya tak terduga.',
          '**3. Rincian Spesifikasi Material pada RAB**\nPastikan penawaran harga yang diserahkan sudah mencantumkan ketebalan bahan dasar (misal Plywood 18mm), seri motif HPL, dan merek aksesoris mekanis (engsel hidrolik, rel laci ball-bearing) secara eksplisit tanpa istilah samar seperti "bahan setara".',
          '**4. Skema Pengurangan Biaya Komitmen**\nJika studio menerapkan commitment fee di awal, pastikan ada klausul tertulis bahwa nominal tersebut akan memotong tagihan belanja furnitur saat Anda menyetujui surat perintah kerja (SPK) produksi.'
        ]
      }
    ],
    toolkitTitle: 'Peralatan Verifikasi Lapangan untuk Pemilik Rumah',
    toolkitSubtitle: 'Alat bantu mandiri untuk memverifikasi kesikuan dinding dan memastikan denah gambar kerja sesuai fisik lokasi:',
    toolkitDesignerNote: 'Tips Studio Arsi: Saat mendiskusikan denah furnitur dengan tim interior, memiliki meteran laser digital akan sangat membantu Anda memverifikasi apakah sisa ruang gerak di kamar tidur atau dapur Anda benar-benar lega sesuai angka yang tertera di atas kertas gambar.',
    toolkitProducts: [
      {
        id: 'prod-4b',
        badge: 'Verifikasi Denah Presisi',
        name: 'Meteran Laser Digital Presisi Jarak 40M / 50M (Laser Distance Measure)',
        price: '⭐ Wajib untuk Survey Mandiri',
        reason: 'Mengukur bentang ruangan, tinggi plafon, dan luas lantai secara instan dalam 1 detik dengan akurasi tinggi tanpa perlu bantuan orang lain.',
        image: '/images/wawasan/produk-shopee/produk-meteran-laser.webp',
        shopeeUrl: 'https://s.shopee.co.id/1W0RQYLutV'
      },
      {
        id: 'prod-4c',
        badge: 'Uji Kesikuan Dinding Ruangan',
        name: 'Siku Penyangga & Pengukur Sudut Presisi (Precision Corner Support & Angle Tool)',
        price: '⭐ Cek Dinding Miring',
        reason: 'Memastikan apakah sudut dinding ruangan Anda benar-benar tegak lurus 90 derajat sebelum memasang lemari tanam atau kitchen set custom.',
        image: '/images/wawasan/produk-shopee/produk-siku-ambalan.webp',
        shopeeUrl: 'https://s.shopee.co.id/5LD8SqVXxX'
      }
    ],
    references: [
      {
        id: 1,
        institution: 'Harvard Business Review & Studi Manajemen Konstruksi',
        title: 'Analisis Komparasi Model Bisnis Design-Build Terintegrasi vs Konsultan Terpisah: Pengalihan Biaya Akuisisi Konsumen (CAC) pada Margin Fabrikasi Fisik.',
        url: 'https://hbr.org/'
      },
      {
        id: 2,
        institution: 'Undang-Undang Republik Indonesia Nomor 28 Tahun 2014 tentang Hak Cipta',
        title: 'Pasal 40 Ayat 1 Huruf (f): Perlindungan Hukum Karya Cipta Gambar Arsitektur, Gambar Teknis, Blueprint Denah, dan Dokumen Perancangan Interior.',
        url: 'https://peraturan.go.id/'
      },
      {
        id: 3,
        institution: 'HDII (Himpunan Desainer Interior Indonesia) & IAI (Ikatan Arsitek Indonesia)',
        title: 'Buku Pedoman Standar Hubungan Kerja Profesional Desainer Interior: Struktur Imbalan Jasa Keahlian, Hak Moral, dan Batasan Tanggung Jawab Gambar Tender.',
        url: 'https://hdii.or.id/'
      },
      {
        id: 4,
        institution: 'LPJK (Lembaga Pengembangan Jasa Konstruksi) KemenPUPR',
        title: 'Panduan Pengadaan Jasa Konstruksi & Transparansi Dokumen Rencana Anggaran Biaya (RAB) / Bill of Quantities (BoQ) Berdasarkan Tahapan Kontrak.',
        url: 'https://lpjk.pu.go.id/'
      }
    ],
    conclusion: {
      heading: 'Sedang Merencanakan Interior Rumah Baru di Bandung?',
      text: 'Arsi Studio Interior siap mendampingi Anda merancang dan memproduksi custom interior hunian secara terbuka dan presisi—mulai dari survey lokasi komprehensif, perencanaan 3D, hingga eksekusi langsung dari workshop kami di Arcamanik, Bandung.'
    }
  },

  // ==========================================================================
  // ARTIKEL 05: AUDIT KASUS KONTRAKTOR MANGKRAK & SISTEM TERMIN AMAN
  // ==========================================================================
  {
    id: 'kasus-artis-tertipu-kontraktor-mangkrak',
    slug: 'belajar-dari-kasus-artis-tertipu-kontraktor-rumah-mangkrak',
    title: 'Uang Miliaran Melayang: Belajar dari Kasus 4 Artis Indonesia yang Pernah Tertipu Kontraktor Rumah & Interior Mangkrak',
    subtitle: 'Dari jebakan bayar lunas di awal, janji manis visual 3D, hingga struktur bangunan yang disunat. Pahami 4 pola klasik kontraktor nakal dan cara melindungi proyek rumah Anda dengan sistem kontrak yang benar.',
    excerpt: 'Selebriti dengan dana berlimpah dan tim hukum saja bisa terjebak proyek mangkrak hingga miliaran rupiah. Bedah 4 modus nyata di lapangan dan pelajari sistem pembayaran berbasis opname fisik agar rumah Anda aman.',
    category: 'INVESTIGASI & HUKUM',
    readTime: '6 Menit Baca',
    dateBadge: 'Catatan Studio #05',
    coverImage: '/images/wawasan/thumbnails/artikel-05-kasus-kontraktor-mangkrak.webp',
    coverCaption: 'Ilustrasi Audit Lapangan Proyek Konstruksi: Pemeriksaan fisik kesesuaian gambar teknis dengan progres struktur di lokasi sebelum pencairan termin pembayaran berikutnya disetujui.',
    tags: ['Kontrak Kerja', 'Audit Proyek', 'Modus Kontraktor', 'Sistem Termin'],
    sections: [
      {
        heading: 'Uang Berlimpah Bukan Jaminan Rumah Anda Aman',
        paragraphs: [
          'Membangun atau merenovasi rumah sering kali disebut sebagai salah satu ujian emosional dan finansial terberat bagi pemilik rumah di Indonesia. Yang mengejutkan, risiko menjadi korban proyek mangkrak tidak hanya menimpa masyarakat awam beranggaran terbatas—bahkan deretan selebriti dan figur publik papan atas yang memiliki dana berlimpah dan didampingi tim penasihat hukum pun kerap berujung menjadi korban oknum kontraktor nakal.',
          'Pertanyaannya: *mengapa orang-orang yang berpendidikan tinggi dan memiliki akses hukum kuat sekalipun masih bisa tertipu hingga kehilangan uang miliaran rupiah?*',
          'Jawabannya berakar pada **asimetri informasi dan manipulasi psikologis di lapangan**. Banyak kontraktor nakal justru mengincar klien yang sibuk, berkantong tebal, dan sungkan membicarakan klausul hukum secara rinci di awal. Dengan membedah rekam jejak kasus yang menimpa para pesohor tanah air, kita bisa menarik benang merah tentang bagaimana modus operandi ini bekerja—dan yang terpenting, bagaimana cara Anda mengamankan proyek hunian pribadi Anda.'
        ]
      },
      {
        heading: 'Rekam Jejak 4 Kasus Nyata & Modus Operandi di Baliknya',
        paragraphs: [
          'Berikut adalah 4 kasus nyata yang sempat menyita perhatian publik Indonesia beserta analisis teknis di balik kegagalan proyeknya:',
          '**1. Kasus Clara Shinta: Jebakan Pelunasan Terlalu Cepat (Overpayment Trap)** [1]\nSelebgram Clara Shinta mengalami kerugian fantastis mencapai kisaran Rp 5 miliar saat membangun rumah barunya. Kesalahan paling fatal yang dimanfaatkan oknum kontraktor adalah **kebijakan pembayaran yang dilunasi hingga 100% saat fisik bangunan belum selesai sempurna**. Begitu dana segar cair sepenuhnya, kontraktor kehilangan motif finansial untuk bekerja, mulai mangkir dari lokasi, dan akhirnya kabur meninggalkan rumah dalam kondisi setengah jadi yang rusak parah.',
          '**2. Kasus Mbak Lala: Janji Manis Visual 3D Tanpa Jadwal Serah Terima** [2]\nPengasuh Rafathar, Mbak Lala, tertipu oleh oknum jasa interior saat membangun rumah impiannya. Modus yang dialaminya bermula dari presentasi visual 3D yang sangat memikat dan penawaran harga bersahabat. Uang muka ditransfer, namun berbulan-bulan ruangan rumahnya tetap kosong melompong tanpa ada pengiriman material fisik—kondisi yang sebenarnya bisa dicegah jika proses lapangan dipantau menggunakan kamera cctv portable pengawas proyek. Setelah somasi hukum dilayangkan, terungkap bahwa pihak vendor tidak memiliki kapasitas workshop mandiri dan hanya berperan sebagai makelar lepas.',
          '**3. Kasus Baim Wong: Struktur Pondasi Bodong & Mandor Kabur** [3]\nProyek pembangunan gedung dan rumah milik Baim Wong sempat mangkrak total lebih dari 6 bulan. Modusnya adalah "gali lubang tutup lubang": mandor proyek menggunakan dana termin Baim Wong untuk menutup kerugian di proyek klien lain. Ketika konsultan audit independen diterjunkan ke lokasi, ditemukan fakta mengerikan bahwa **struktur besi dan pondasi beton dibuat asal-asalan dan salah hitung**, sehingga nyaris membahayakan keselamatan gedung.',
          '**4. Kasus Dewi Perssik & Jessica Iskandar: Praktik "Sunat Spesifikasi" & Sengketa Lapangan** [4]\nPedangdut Dewi Perssik dan Jessica Iskandar sempat berseteru dengan pihak jasa interior terkait proyek hunian mereka. Di atas kertas kontrak tertulis spesifikasi mewah, namun material yang dikirim ke lapangan diturunkan mutunya secara sepihak (*down-spec*), pengerjaan molor berlarut-larut dari tenggat waktu, dan kontraktor menolak bertanggung jawab atas kerusakan finishing yang retak dalam hitungan bulan.'
        ],
        inlineHighlights: [
          {
            phrase: 'kamera cctv portable pengawas proyek',
            shopeeUrl: 'https://s.shopee.co.id/7fb4zoRWQN',
            tooltipLabel: 'Cek Ketersediaan Kamera CCTV Pengawas Proyek'
          }
        ],
        midProduct: {
          id: 'prod-5a',
          badge: 'Alat Wajib Pengawasan Mandiri • Live 24 Jam',
          name: 'Kamera CCTV Wireless Portable 360° WiFi (Smart Project Monitor with Two-Way Audio)',
          price: '⭐ Solusi Pantau Proyek Tanpa Bolak-Balik',
          reason: 'Memantau kehadiran tukang, kedatangan material Plywood asli, dan memastikan progres fisik harian langsung dari layar smartphone Anda tanpa harus membuang waktu terjebak macet ke lokasi proyek.',
          image: '/images/wawasan/produk-shopee/produk-cctv-proyek.webp',
          shopeeUrl: 'https://s.shopee.co.id/7fb4zoRWQN'
        }
      },
      {
        heading: 'Tiga Modus Operandi Klasik yang Wajib Anda Waspadai',
        paragraphs: [
          'Jika diteliti lebih dalam, hampir 90% kasus kontraktor kabur atau mangkrak selalu berpola pada **3 taktik manipulasi** yang sama:',
          '**Modus 1: Termin Kalender yang Mendahului Progres Fisik**\nKontraktor nakal selalu meminta jadwal transfer uang berdasarkan tanggal kalender (misal: "Setiap tanggal 1 wajib transfer Rp 50 juta"), bukan berdasarkan persentase fisik yang selesai di lokasi. Klien yang awam akan terus mentransfer dana sesuai jadwal, hingga tiba-tiba di bulan ke-3 baru menyadari bahwa **uang yang masuk sudah 80% sementara fisik bangunan baru 30%**.',
          '**Modus 2: Kontrak Kerja (SPK) Bodong Tanpa Klausul Denda**\nSurat Perjanjian Kerja dibuat sangat sederhana (hanya 1-2 lembar) dan sengaja tidak mencantumkan pasal **denda keterlambatan (penalty clause per mil per hari)** serta tanpa jaminan masa pemeliharaan (retensi). Ketika pengerjaan molor berbulan-bulan, Anda tidak memiliki kekuatan hukum untuk memotong biaya jasa kontraktor.',
          '**Modus 3: Rincian Anggaran (RAB) dengan Istilah "Bahan Setara"**\nPada dokumen penawaran harga, jenis material sengaja ditulis mengambang—misalnya "Kayu setara Meranti" atau "Engsel kualitas terbaik". Di lapangan, oknum kontraktor akan membeli material paling murah di toko bangunan terdekat demi mengantongi selisih keuntungan berlipat ganda.'
        ]
      },
      {
        heading: 'Rumus Pembayaran Aman: Berita Acara Opname Fisik',
        paragraphs: [
          'Lalu bagaimana cara melindungi diri Anda agar tidak menjadi korban berikutnya? Kuncinya adalah menerapkan **Sistem Termin Berbasis Berita Acara Opname Fisik**.',
          'Prinsip bakunya sangat tegas: **"Uang hanya boleh dicairkan setelah material dan pekerjaan fisik terpasang nyata di lokasi."** Jangan pernah mentransfer dana termin berikutnya hanya karena kontraktor beralasan *"uangnya mau buat belanja bahan besok"*. Belanja bahan adalah tanggung jawab modal kerja kontraktor, bukan beban klien.',
          'Berikut adalah simulasi pembagian termin pembayaran yang paling aman dan proporsional untuk proyek interior hunian:',
          '**1. Uang Muka / DP Komitmen (Maksimal 20–25%)**\nDicairkan hanya setelah SPK ditandatangani dan gambar kerja teknis (CAD) sudah disetujui bersama. Dana ini murni untuk pemesanan bahan baku kayu awal.',
          '**2. Termin Kedua (30%)**\nDicairkan hanya setelah seluruh bodi dasar kabinet selesai dirakit di workshop (klien berhak meminta foto/video atau memeriksa langsung ke bengkel melalui kamera cctv portable pengawas proyek).',
          '**3. Termin Ketiga (30%)**\nDicairkan setelah seluruh modul furnitur tiba di rumah dan terpasang rapi di dinding ruangan.',
          '**4. Termin Keempat / Finishing (10–15%)**\nDicairkan setelah seluruh engsel, lampu LED, handle pintu, dan pembersihan lokasi selesai 100%.',
          '**5. Uang Jaminan Pemeliharaan / Retensi (5%)**\nDitahan selama 1 hingga 3 bulan masa garansi. Jika ada pintu melengkung, HPL menggelembung, atau laci seret, kontraktor wajib memperbaiki sebelum uang retensi 5% ini dicairkan.'
        ],
        inlineHighlights: [
          {
            phrase: 'kamera cctv portable pengawas proyek',
            shopeeUrl: 'https://s.shopee.co.id/7fb4zoRWQN',
            tooltipLabel: 'Cek Ketersediaan Kamera CCTV Pengawas Proyek'
          }
        ],
        cheatSheet: {
          title: 'Contekan Perbandingan: Kontraktor Berisiko vs Studio Profesional',
          subtitle: 'Gunakan tabel ini untuk mendeteksi tanda bahaya (red flags) sebelum Anda mentransfer uang:',
          items: [
            {
              label: 'Skema Pembayaran',
              value: 'Wajib Berbasis Opname',
              note: 'Bahaya jika minta DP di atas 40% di muka. Aman jika termin dicairkan bertahap mengikuti persentase fisik.'
            },
            {
              label: 'Pasal Denda SPK',
              value: '1/1000 per Hari',
              note: 'Wajib mencantumkan denda keterlambatan 1 permil per hari keterlambatan agar kontraktor disiplin mengejar jadwal.'
            },
            {
              label: 'Spesifikasi RAB',
              value: 'Eksplisit & Bermerek',
              note: 'Wajib menyebutkan merek (misal HPL Taco, engsel soft-close Huben/Hafele, tebal Plywood 18mm), tolak istilah "setara".'
            },
            {
              label: 'Garansi Pemeliharaan',
              value: 'Retensi 5% (1-3 Bulan)',
              note: 'Wajib ada dana retensi yang ditahan sebagai garansi bahwa vendor akan kembali memperbaiki cacat minor.'
            }
          ]
        },
        callout: {
          type: 'warning',
          text: 'Aturan Emas Lapangan: Kontraktor yang profesional dan memiliki arus kas sehat tidak akan pernah memohon-mohon uang termin sebelum pekerjaan fisiknya terpasang. Jika vendor Anda mulai meminta uang di muka dengan alasan buruh mau mogok atau beli semen, itu adalah sinyal darurat bahwa proyek Anda sedang dijadikan alat gali lubang tutup lubang.',
          caption: '— Catatan Advokasi Proyek Arsi Studio Interior'
        }
      },
      {
        heading: 'Tiga Dokumen Wajib Sebelum Anda Mentransfer Uang Proyek',
        paragraphs: [
          'Sebelum Anda mentransfer satu rupiah pun ke rekening vendor, pastikan 3 dokumen hukum ini sudah ada di atas meja dan ditandatangani bermeterai resmi sesuai standar hukum kontrak konstruksi Indonesia [5]:',
          '**1. Surat Perjanjian Kerja (SPK) Bermeterai Resmi**\nMemuat identitas kedua pihak secara legal, alamat domisili kantor workshop yang valid, ruang lingkup pekerjaan, jadwal mulai dan selesai, mekanisme termin, serta pasal penyelesaian sengketa.',
          '**2. Lampiran Gambar Kerja Teknis (As-Planned Drawing)**\nDenah tata ruang lengkap dengan dimensi ukuran milimeter, tampak potongan, serta denah instalasi kabel listrik dan pipa air agar tidak ada debat *"katanya begini, katanya begitu"* di kemudian hari.',
          '**3. Dokumen Rincian Biaya (Bill of Quantity / RAB) Terbuka**\nMencantumkan volume per meter, harga satuan, dan merek material yang digunakan secara rinci tanpa ada komponen tersembunyi.'
        ]
      }
    ],
    toolkitTitle: 'Peralatan Pengawasan Mandiri untuk Pemilik Rumah',
    toolkitSubtitle: 'Dua perangkat praktis untuk mengawasi kehadiran tukang dan memverifikasi ketepatan ukuran fisik di lokasi proyek:',
    toolkitDesignerNote: 'Tips Studio Arsi: Bagi pemilik rumah yang sibuk bekerja kantoran dan tidak bisa menunggui proyek setiap hari, menempatkan satu kamera CCTV portable dan memiliki meteran laser digital adalah investasi paling cerdas untuk mengamankan proyek bernilai puluhan hingga ratusan juta rupiah.',
    toolkitProducts: [
      {
        id: 'prod-5b',
        badge: 'Pantau Proyek 24 Jam Dari HP',
        name: 'Kamera CCTV Wireless Portable Smart WiFi 360° (Two-Way Audio & Night Vision)',
        price: '⭐ Alat Wajib Pengawasan Proyek',
        reason: 'Tinggal colok ke stopkontak atau powerbank untuk memantau aktivitas tukang, mengawasi pembongkaran material kayu asli, dan mencegah kehilangan alat kerja.',
        image: '/images/wawasan/produk-shopee/produk-cctv-proyek.webp',
        shopeeUrl: 'https://s.shopee.co.id/7fb4zoRWQN'
      },
      {
        id: 'prod-5c',
        badge: 'Verifikasi Akurasi Ukuran Fisik',
        name: 'Meteran Laser Digital Presisi Jarak 40M / 50M (Laser Distance Measure)',
        price: '⭐ Standar Wajib Audit Ruangan',
        reason: 'Memverifikasi apakah ukuran kabinet yang dikirim tukang sudah sesuai dengan gambar kerja sebelum Anda menandatangani berita acara serah terima.',
        image: '/images/wawasan/produk-shopee/produk-meteran-laser.webp',
        shopeeUrl: 'https://s.shopee.co.id/1W0RQYLutV'
      }
    ],
    references: [
      {
        id: 1,
        institution: 'Detik.com & Tribunnews (Liputan Kasus Properti Selebriti)',
        title: 'Kronologi Mangkraknya Pembangunan Rumah Selebgram Clara Shinta: Kerugian Ditaksir Mencapai Rp 3,7 Miliar hingga Rp 5 Miliar Akibat Pembayaran Dilunasi di Awal Namun Bangunan Ditinggal Terbengkalai dan Rusak.',
        url: 'https://news.detik.com/'
      },
      {
        id: 2,
        institution: 'IDN Times & KapanLagi (Kasus Sengketa Desain Interior)',
        title: 'Pengalaman Mbak Lala Ditipu Vendor Jasa Desain Interior: Pembayaran Masuk Namun Pengerjaan Gagal Fungsi, AC Dipasang di Dalam Lemari, dan Somasi Hukum Terbuka.',
        url: 'https://www.idntimes.com/'
      },
      {
        id: 3,
        institution: 'DetikHot & Dokumentasi Investigasi Proyek Hunian Baim Wong',
        title: 'Mangkraknya Proyek Gedung dan Rumah Lebih dari 6 Bulan: Mandor Kabur dan Hasil Audit Konstruksi Menemukan Kesalahan Fatal Struktur Pondasi serta Penulangan Beton.',
        url: 'https://hot.detik.com/'
      },
      {
        id: 4,
        institution: 'Kompas.com & Liputan Sengketa Jasa Konstruksi Hunian Selebriti',
        title: 'Fenomena Wanprestasi Kontraktor: Praktik Penurunan Spesifikasi Material (Down-Spec) Tanpa Konfirmasi Klien dan Keterlambatan Serah Terima Fisik.',
        url: 'https://entertainment.kompas.com/'
      },
      {
        id: 5,
        institution: 'Kementerian Pekerjaan Umum dan Perumahan Rakyat (KemenPUPR)',
        title: 'Undang-Undang Republik Indonesia Nomor 2 Tahun 2017 tentang Jasa Konstruksi: Standar Kontrak Kerja Konstruksi, Hak & Kewajiban Penyedia Jasa, serta Klausul Akuntabilitas Kegagalan Bangunan.',
        url: 'https://pu.go.id/'
      }
    ],
    conclusion: {
      heading: 'Butuh Mitra Perencanaan & Produksi Interior yang Transparan di Bandung?',
      text: 'Arsi Studio Interior berkomitmen pada transparansi total: kontrak SPK resmi bermeterai, spesifikasi material 100% Plywood 18mm terbuka tanpa manipulasi, dan sistem pembayaran termin berbasis opname progres fisik. Hubungi tim workshop kami di Arcamanik, Bandung untuk berdiskusi.'
    }
  },

  // ==========================================================================
  // ARTIKEL 06: KOMPARASI FURNITUR FABRIKASI TOKO VS CUSTOM WORKSHOP
  // ==========================================================================
  {
    id: 'furnitur-fabrikasi-vs-custom',
    slug: 'lebih-worth-it-beli-furnitur-fabrikasi-atau-custom',
    title: 'Lebih Worth It Mana: Beli Furnitur Fabrikasi Jadi atau Bikin Custom? Bedah Plus-Minus, Perhitungan Biaya 5 Tahun, dan Rumus Kombinasi Cerdas 60:40',
    subtitle: 'Bukan tentang mana yang lebih mewah, melainkan tentang fungsi ruang yang tepat. Pahami kapan Anda harus membeli furnitur ritel toko untuk menghemat anggaran, dan kapan wajib memesan custom ke workshop agar tidak membuang ruang mati.',
    excerpt: 'Dilema terbesar pemilik rumah baru: beli furnitur flat-pack ritel yang langsung siap kirim atau pesan custom ke bengkel interior? Pelajari perbandingan ketahanan fisik, celah debu, dan rumus cerdas 60:40.',
    category: 'STRATEGI & ANGGARAN',
    readTime: '5 Menit Baca',
    dateBadge: 'Panduan Investasi #06',
    coverImage: '/images/wawasan/thumbnails/artikel-06-furnitur-fabrikasi-vs-custom.webp',
    coverCaption: 'Ilustrasi Komparasi Interior: Furnitur flat-pack ritel lepasan untuk area duduk santai (kiri) vs Furnitur built-in custom presisi setinggi plafon tanpa celah debu untuk lemari dan kitchen set (kanan).',
    tags: ['Furnitur Custom', 'Furnitur Ritel', 'Efisiensi Ruang', 'Tips Anggaran'],
    sections: [
      {
        heading: 'Dilema Klasik Pemilik Rumah Baru: Siap Kirim vs Presisi Sesuai Sudut Dinding',
        paragraphs: [
          'Saat baru saja menerima kunci rumah baru atau unit apartemen, antusiasme menata interior sering kali langsung berbenturan dengan pertanyaan klasik: **"Apakah lebih baik membeli furnitur jadi di toko ritel besar (IKEA, Informa, Dekoruma), atau memesan custom ke bengkel interior?"**',
          'Di satu sisi, furnitur toko fabrikasi massal (*knockdown/flat-pack*) sangat menggoda: desainnya trendi bergaya Skandinavia atau Japandi, barangnya langsung siap dikirim hari itu juga, dan label harganya tampak jauh lebih bersahabat di dompet. Di sisi lain, jasa pembuatan interior custom menawarkan janji manis berupa ukuran yang menempel pas (*built-in*) hingga ke sudut dinding, namun menuntut biaya awal lebih tinggi dan waktu pengerjaan 3 hingga 5 minggu.',
          'Banyak orang mengira keputusan ini adalah soal gengsi atau tebal-tipisnya anggaran. Padahal kenyataannya di lapangan, **keduanya memiliki peruntukan ruang yang sama sekali berbeda**. Memaksakan semua perabotan rumah dibuat custom akan membuat anggaran Anda membengkak (*over-budget*), sementara memaksakan seluruh ruangan diisi furnitur toko akan menciptakan tumpukan "sudut mati" yang membuat rumah terasa sempit dan berantakan.'
        ]
      },
      {
        heading: 'Kapan Membeli Furnitur Fabrikasi Jadi Jauh Lebih Menguntungkan?',
        paragraphs: [
          'Prinsip pertama yang perlu Anda pegang adalah: **tidak semua benda di rumah Anda harus dibuat custom oleh tukang kayu**. Untuk kategori furnitur lepas (*loose furniture*), membeli produk fabrikasi toko ritel adalah keputusan yang jauh lebih cerdas dan hemat secara kalkulasi:',
          '**1. Sofa Santai, Kursi Makan, & Kasur Tidur**\nPabrik furnitur besar memproduksi rangka sofa dan busa dudukan menggunakan mesin presisi berskala massal. Menemukan tingkat keempukan busa ergonomis (*high-density foam*), jahitan kain pelapis yang rapi, dan pegas kasur yang awet jauh lebih terjamin saat Anda membelinya dari merek furnitur ritel tepercaya dibandingkan memesan sofa custom ke bengkel kayu rumahan.',
          '**2. Meja Kopi (Coffee Table) & Meja Samping (Side Table)**\nFurnitur kecil ini berfungsi sebagai aksen dekoratif yang sering digeser atau diganti saat Anda bosan dengan suasana ruangan. Membeli produk jadi memberi Anda kebebasan rotasi visual tanpa penyesalan biaya besar.',
          '**3. Catatan Kritis Perakitan Furnitur Toko**\nMayoritas furnitur toko dikirim dalam kardus lembaran (*flat-pack*) untuk dirakit sendiri (*DIY*). Agar engsel pintu dan laci tidak cepat miring, gunakan obeng elektrik mini cordless saat merakit baut-baut sambungan *cam-lock* agar pengunciannya benar-benar padat tanpa membuat lubang baut dol.'
        ],
        inlineHighlights: [
          {
            phrase: 'obeng elektrik mini cordless',
            shopeeUrl: 'https://s.shopee.co.id/7fb52jv2pQ',
            tooltipLabel: 'Cek Ketersediaan Obeng Elektrik Cordless'
          }
        ],
        midProduct: {
          id: 'prod-6a',
          badge: 'Alat Wajib Perakitan Mandiri • Ringkas & Praktis',
          name: 'Obeng Elektrik Mini Cordless USB 3.6V / 4V (Electric Screwdriver Set dengan Mata Obeng Lengkap)',
          price: '⭐ Wajib untuk Furnitur Knockdown',
          reason: 'Sangat praktis merakit sendiri furnitur flat-pack toko atau mengencangkan kembali baut engsel dan handle pintu lemari yang mulai kendor setelah berbulan-bulan pemakaian tanpa lelah memutar obeng manual.',
          image: '/images/wawasan/produk-shopee/produk-obeng-elektrik.webp',
          shopeeUrl: 'https://s.shopee.co.id/7fb52jv2pQ'
        }
      },
      {
        heading: 'Kapan Anda Wajib Memesan Custom ke Bengkel Interior?',
        paragraphs: [
          'Sebaliknya, ada zona-zona tertentu di mana membeli furnitur toko adalah **kesalahan mahal yang akan Anda sesali dalam waktu 2 tahun**. Untuk area furnitur tanam (*built-in*), pembuatan custom adalah keharusan mutlak:',
          '**1. Lemari Pakaian Kamar Tidur Utama (Floor-to-Ceiling Wardrobe)**\nLemari toko diproduksi dengan tinggi standar 200 hingga 220 cm. Padahal, tinggi plafon rumah di Indonesia umumnya berkisar antara 280 hingga 320 cm. Akibatnya, akan tercipta **celah kosong 60–100 cm di atas lemari** [1]. Area ini tidak bisa dimanfaatkan untuk menyimpan koper, sangat sulit dijangkau untuk disapu, dan dalam hitungan bulan akan menjadi **sarang tumpukan debu tebal, sarang cicak, serta kecoa**.',
          '**2. Kitchen Set Dapur & Meja Wastafel**\nBentuk dinding dapur di setiap rumah tidak pernah ada yang benar-benar siku 90 derajat sempurna. Kitchen set toko tidak akan bisa menutupi pipa saluran air, pipa gas, dan kontur keramik dapur secara presisi, sehingga menyisakan rongga celah air yang memicu jamur lembap.',
          '**3. Ketahanan Material Terhadap Kelembapan Tropis** [2]\nHampir 90% furnitur toko berharga murah menggunakan bahan dasar serbuk kayu pres (*Particle Board* / serbuk gergaji laminasi kertas). Dalam siklus pemakaian 3 hingga 5 tahun di iklim Indonesia yang berkelembapan tinggi [3], papan serbuk ini akan **melengkung di bagian ambalan rak dan hancur berbubuk saat terkena tampias air**, sedangkan furnitur custom menggunakan **Multipleks/Plywood Meranti 18mm lapis HPL** yang kokoh bertahan belasan tahun.'
        ],
        cheatSheet: {
          title: 'Contekan Panduan: Kapan Beli Toko vs Kapan Wajib Custom',
          subtitle: 'Simpan atau screenshot panduan alokasi ini sebelum Anda belanja perabotan untuk rumah baru:',
          items: [
            {
              label: 'Sofa & Kursi Santai',
              value: 'Beli Fabrikasi Toko',
              note: 'Skala pabrik membuat sofa toko jauh lebih empuk, rapi, dan murah dibanding custom.'
            },
            {
              label: 'Kasur & Ranjang Lepas',
              value: 'Beli Fabrikasi Toko',
              note: 'Beli merek kasur terpercaya; rangka dipan toko mudah diganti saat pindah rumah.'
            },
            {
              label: 'Kitchen Set Dapur',
              value: 'Wajib Custom Bengkel',
              note: 'Jalur pipa sink, kompor tanam, dan bentang dinding wajib presisi milimeter.'
            },
            {
              label: 'Lemari Pakaian Utama',
              value: 'Wajib Custom Bengkel',
              note: 'Wajib dibuat full plafon agar tidak menyisakan ruang kosong sarang debu dan kecoa.'
            },
            {
              label: 'Meja Kerja & Belajar',
              value: 'Fleksibel / Custom Sudut',
              note: 'Beli meja lepasan jika fleksibel; pesan custom jika memanfaatkan ceruk dinding sempit.'
            }
          ]
        },
        callout: {
          type: 'quote',
          text: '"Membeli lemari pakaian ukuran toko untuk ditaruh di kamar tidur utama sering kali menyisakan celah 15 cm di atas plafon dan 10 cm di sisi dinding. Celah itu tidak bisa diisi apa pun, sulit disapu, dan perlahan menjadi sarang debu serta kecoa."',
          caption: '— Catatan Lapangan Arsi Studio Interior'
        }
      },
      {
        heading: 'Rumus Kombinasi Cerdas "60% Built-in Custom + 40% Loose Fabrikasi"',
        paragraphs: [
          'Agar Anda mendapatkan hunian yang terlihat mewah, fungsional, namun tetap hemat anggaran secara cerdas, asosiasi desainer interior merekomendasikan formula komposisi anggaran **60% Custom Tanam + 40% Toko Lepasan** [4]:',
          '**Alokasikan 60% anggaran interior Anda** untuk 3 elemen permanen yang melekat mati ke dinding: Kitchen set dapur, lemari pakaian utama setinggi plafon, dan partisi/backdrop TV. Elemen inilah yang menentukan nilai estetika rumah dan menelan 80% beban penyimpanan barang keluarga Anda.',
          'Lalu, **alokasikan 40% sisa anggaran** untuk membeli sofa, meja makan, kursi kerja, lampu lantai, dan perlengkapan lepasan di toko ritel. Agar perabotan toko berbahan kaki besi atau kayu tidak merusak lantai rumah baru Anda saat sering digeser, lengkapi selalu kaki kursi Anda dengan pelindung kaki furnitur silikon anti-gores, dan gunakan organizer sekat laci modular transparan agar penyimpanan laci tertata rapi sekelas lemari bintang lima.'
        ],
        inlineHighlights: [
          {
            phrase: 'pelindung kaki furnitur silikon anti-gores',
            shopeeUrl: 'https://s.shopee.co.id/1Lh1VByNOb',
            tooltipLabel: 'Cek Ketersediaan Pelindung Kaki Kursi'
          },
          {
            phrase: 'organizer sekat laci modular transparan',
            shopeeUrl: 'https://s.shopee.co.id/9APspdO3BB',
            tooltipLabel: 'Cek Ketersediaan Organizer Laci Modular'
          }
        ]
      }
    ],
    toolkitTitle: 'Perlengkapan Perawatan & Penataan Furnitur Hunian',
    toolkitSubtitle: 'Rekomendasi perlengkapan pelindung lantai dan penata laci untuk melengkapi furnitur rumah Anda:',
    toolkitDesignerNote: 'Catatan Studio: Menggabungkan furnitur custom dan furnitur toko adalah strategi terbaik. Agar furnitur toko Anda tetap awet dan tidak merusak lantai rumah, kami selalu menyarankan pemilik rumah memasang dua perlengkapan proteksi sederhana di bawah ini.',
    toolkitProducts: [
      {
        id: 'prod-6b',
        badge: 'Pelindung Lantai Granit & Vinyl',
        name: 'Pelindung Kaki Kursi & Meja Silikon Tebal Anti-Gores (Silicone Furniture Leg Floor Protectors)',
        price: '⭐ Mencegah Lantai Baret & Hening',
        reason: 'Mencegah kaki kursi dan meja makan berbahan besi/kayu menggores lapisan granit atau SPC/vinyl saat digeser, sekaligus meredam bunyi bising gesekan lantai.',
        image: '/images/wawasan/produk-shopee/produk-pelindung-kaki-kursi.webp',
        shopeeUrl: 'https://s.shopee.co.id/1Lh1VByNOb'
      },
      {
        id: 'prod-6c',
        badge: 'Laci Rapi Kelas Hotel Bintang 5',
        name: 'Organizer Sekat Laci Modular Transparan / Tray Sendok & Aksesoris Lemari (Adjustable Drawer Organizer)',
        price: '⭐ Solusi Laci Berantakan',
        reason: 'Menata perhiasan, sendok garpu dapur, alat kantor, atau kosmetik di dalam laci meja rias agar rapi terkotak-kotak dan mudah dicari seketika.',
        image: '/images/wawasan/produk-shopee/produk-organizer-laci.webp',
        shopeeUrl: 'https://s.shopee.co.id/9APspdO3BB'
      }
    ],
    references: [
      {
        id: 1,
        institution: 'BPS (Badan Pusat Statistik) & HIMKI',
        title: 'Statistik Industri Mebel dan Kerajinan Nasional: Komparasi Pasar Furnitur Flat-Pack Massal Berbahan Particle Board vs Industri Fabrikasi Kayu Lapis Custom.',
        url: 'https://www.bps.go.id/'
      },
      {
        id: 2,
        institution: 'BSN (Badan Standardisasi Nasional) — SNI ISO 7170:2018',
        title: 'Furnitur — Unit Penyimpanan — Metode Uji untuk Penentuan Kekuatan dan Daya Tahan Struktural Rangka & Uji Lendutan Ambalan Papan Kayu.',
        url: 'https://bsn.go.id/'
      },
      {
        id: 3,
        institution: 'IKEA Sustainability & Material Quality Evaluation Report',
        title: 'Analisis Siklus Hidup dan Daya Tahan Material Papan Partikel Berpelapis Foil pada Kondisi Kelembapan Relatif (RH) Tinggi di Iklim Tropis.',
        url: 'https://www.ikea.com/'
      },
      {
        id: 4,
        institution: 'HDII (Himpunan Desainer Interior Indonesia)',
        title: 'Pedoman Perencanaan Interior Residensial: Prinsip Optimalisasi Ruang Berbasis Komposisi Ideal 60% Built-in Furniture dan 40% Loose Furniture Ritel.',
        url: 'https://hdii.or.id/'
      }
    ],
    conclusion: {
      heading: 'Ingin Konsultasi Desain Built-in Custom yang Pas Ukuran di Bandung?',
      text: 'Arsi Studio Interior siap mendampingi Anda memproduksi kitchen set, lemari pakaian full plafon, hingga backdrop TV presisi tanpa celah debu langsung dari workshop mandiri kami di Arcamanik, Bandung.'
    }
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
