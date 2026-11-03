import fs from 'fs';
import path from 'path';
import { ARTICLES } from '../src/content/articles';

const DIST_DIR = path.resolve('dist');
const BASE_URL = 'https://arsistudiointerior.id';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generateStaticPages() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  // 1. Generate Static HTML for Each Article
  ARTICLES.forEach((article) => {
    const articleDir = path.join(DIST_DIR, 'wawasan', article.slug);
    fs.mkdirSync(articleDir, { recursive: true });

    const articleUrl = `${BASE_URL}/wawasan/${article.slug}`;
    const cleanTitle = article.title.replace(/"/g, '&quot;');
    const cleanSubtitle = article.subtitle.replace(/"/g, '&quot;');
    const coverJpg = article.coverImage.replace(/\.webp$/, '.jpg');
    const imageUrl = `${BASE_URL}${coverJpg}`;

    let pageHtml = templateHtml;

    // Replace Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${escapeHtml(article.title)} — Arsi Studio Interior</title>`
    );

    // Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${cleanSubtitle}" />`
    );

    // Replace Open Graph Tags
    pageHtml = pageHtml.replace(
      /<meta property="og:type" content=".*?" \/>/,
      `<meta property="og:type" content="article" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${articleUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${cleanTitle} — Arsi Studio Interior" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${cleanSubtitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:image" content=".*?" \/>/,
      `<meta property="og:image" content="${imageUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:image:secure_url" content=".*?" \/>/,
      `<meta property="og:image:secure_url" content="${imageUrl}" />`
    );

    // Replace Twitter Card Tags
    pageHtml = pageHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${cleanTitle} — Arsi Studio Interior" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${cleanSubtitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:image" content=".*?" \/>/,
      `<meta name="twitter:image" content="${imageUrl}" />`
    );

    const outPath = path.join(articleDir, 'index.html');
    fs.writeFileSync(outPath, pageHtml, 'utf-8');
    console.log(`[OG Generator] Generated: dist/wawasan/${article.slug}/index.html`);
  });

  // 2. Generate Static HTML for Partner Portal (/mitra)
  const mitraDir = path.join(DIST_DIR, 'mitra');
  fs.mkdirSync(mitraDir, { recursive: true });

  const mitraTitle = 'Standar Kurasi & Akreditasi Mitra Material — Workshop Arsi';
  const mitraDesc = 'Portal resmi kemitraan dan kurasi material arsitektur Workshop Arsi di Bandung. Pendaftaran prinsipal, pabrikan, dan distributor resmi.';
  const mitraUrl = `${BASE_URL}/mitra`;

  let mitraHtml = templateHtml;
  mitraHtml = mitraHtml.replace(/<title>.*?<\/title>/, `<title>${mitraTitle}</title>`);
  mitraHtml = mitraHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${mitraDesc}" />`);
  mitraHtml = mitraHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${mitraUrl}" />`);
  mitraHtml = mitraHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${mitraTitle}" />`);
  mitraHtml = mitraHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${mitraDesc}" />`);
  mitraHtml = mitraHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${mitraTitle}" />`);
  mitraHtml = mitraHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${mitraDesc}" />`);

  fs.writeFileSync(path.join(mitraDir, 'index.html'), mitraHtml, 'utf-8');
  console.log('[OG Generator] Generated: dist/mitra/index.html');

  console.log('\n[OG Generator] Successfully generated static Open Graph pages for all routes!');
}

generateStaticPages();
