import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { Article, ARTICLES, InlineHighlight } from '../content/articles';
import { buildWhatsAppUrl } from '../utils/tracking';
import { STUDIO_INFO } from '../content/studioInfo';

interface ArticlePageProps {
  article: Article;
  onNavigate: (path: string) => void;
}

// Pemformatan tipografi editorial bersih:
// - **teks tebal** menjadi font-semibold murni tanpa blok kotak abu-abu.
// - *teks miring* menjadi italic.
// - [1] menjadi superskrip referensi minimalis.
const formatEditorialText = (text: string, keyPrefix: string): React.ReactNode[] => {
  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[\d+\])/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return (
        <strong key={`${keyPrefix}-b-${idx}`} className="font-semibold text-studio-950">
          {content}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      const content = part.slice(1, -1);
      return (
        <em key={`${keyPrefix}-i-${idx}`} className="italic text-studio-800">
          {content}
        </em>
      );
    }
    if (/^\[\d+\]$/.test(part)) {
      return (
        <sup
          key={`${keyPrefix}-ref-${idx}`}
          className="font-mono text-[10px] font-semibold text-studio-500 ml-0.5"
          title="Lihat catatan referensi di akhir tulisan"
        >
          {part}
        </sup>
      );
    }
    return part;
  });
};

// Tautan produk di dalam kalimat bergaya majalah editorial (garis bawah tegas, bukan kotak stabilo kuning)
const renderParagraphWithHighlights = (text: string, highlights?: InlineHighlight[]) => {
  let nodes: React.ReactNode[] = [text];

  if (highlights && highlights.length > 0) {
    highlights.forEach((hl, hlIdx) => {
      const nextNodes: React.ReactNode[] = [];
      nodes.forEach((node, nodeIdx) => {
        if (typeof node === 'string' && node.includes(hl.phrase)) {
          const parts = node.split(hl.phrase);
          parts.forEach((part, partIdx) => {
            nextNodes.push(part);
            if (partIdx < parts.length - 1) {
              nextNodes.push(
                <a
                  key={`hl-${hlIdx}-${nodeIdx}-${partIdx}`}
                  href={hl.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  title={hl.tooltipLabel || `Cek Ketersediaan ${hl.phrase}`}
                  className="group/hl inline font-medium text-studio-950 underline decoration-studio-400 decoration-[1.5px] underline-offset-4 hover:decoration-accent hover:text-accent transition-colors"
                >
                  {hl.phrase}
                  <ArrowUpRight className="inline-block w-3.5 h-3.5 ml-0.5 -mt-0.5 text-studio-500 group-hover/hl:text-accent transition-transform duration-200 group-hover/hl:translate-x-0.5 group-hover/hl:-translate-y-0.5" />
                </a>
              );
            }
          });
        } else {
          nextNodes.push(node);
        }
      });
      nodes = nextNodes;
    });
  }

  return nodes.flatMap((node, idx) =>
    typeof node === 'string' ? formatEditorialText(node, `ed-${idx}`) : node
  );
};

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappConsultationUrl = buildWhatsAppUrl(
    STUDIO_INFO.whatsappNumber,
    `Halo Arsi Studio, saya baru membaca tulisan "${article.title}". Saya ingin berkonsultasi mengenai rencana interior hunian saya di Bandung.`
  );

  const otherArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-studio-50 text-studio-900 font-sans selection:bg-studio-900 selection:text-studio-50">
      
      {/* Minimalist Top Bar */}
      <header className="sticky top-0 z-50 bg-studio-50/95 backdrop-blur-sm border-b border-studio-200">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/#wawasan')}
            className="group inline-flex items-center gap-2 text-xs font-mono text-studio-600 hover:text-studio-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Semua Artikel</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-studio-500 hover:text-studio-950 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-studio-900" />
                <span className="text-studio-900">Tautan disalin</span>
              </>
            ) : (
              <span>Salin tautan</span>
            )}
          </button>
        </div>
      </header>

      {/* Editorial Reading Column */}
      <article className="max-w-[680px] mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-24">
        
        {/* Simple Meta Line */}
        <div className="text-xs font-mono uppercase tracking-widest text-studio-500 mb-4">
          {article.category} <span className="mx-1.5 text-studio-300">/</span> {article.readTime}
        </div>

        {/* Headline & Lead */}
        <h1 className="font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-studio-950 leading-[1.2] mb-5">
          {article.title}
        </h1>
        <p className="font-sans text-base sm:text-lg text-studio-600 font-light leading-relaxed mb-8">
          {article.subtitle}
        </p>

        {/* Hero Image */}
        <figure className="my-8 sm:my-10">
          <div className="overflow-hidden rounded-lg border border-studio-200 bg-studio-100">
            <img
              src={article.coverImage}
              alt={article.title}
              width={1200}
              height={675}
              fetchPriority="high"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          {article.coverCaption && (
            <figcaption className="mt-2.5 text-xs text-studio-500 leading-relaxed">
              {article.coverCaption}
            </figcaption>
          )}
        </figure>

        {/* Body Content */}
        <div className="space-y-10 text-studio-800 text-[15.5px] sm:text-[17px] leading-[1.85] font-sans">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-5">
              {section.heading && (
                <h2 className="font-heading text-lg sm:text-2xl font-semibold text-studio-950 tracking-tight pt-3 leading-snug">
                  {section.heading}
                </h2>
              )}
              
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-studio-700 whitespace-pre-line">
                  {renderParagraphWithHighlights(p, section.inlineHighlights)}
                </p>
              ))}

              {/* Minimalist Specification Table (Replaces AI Bento CheatSheet) */}
              {section.cheatSheet && (
                <div className="my-8 py-5 border-y border-studio-300">
                  <div className="text-xs font-mono uppercase tracking-wider text-studio-500 mb-1">
                    Ringkasan Parameter
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-studio-950 mb-4">
                    {section.cheatSheet.title}
                  </h3>
                  <div className="divide-y divide-studio-200 border-t border-studio-200">
                    {section.cheatSheet.items.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 text-sm"
                      >
                        <div className="sm:w-44 shrink-0 font-medium text-studio-900">
                          {item.label}
                        </div>
                        <div className="font-mono text-xs sm:text-sm font-semibold text-studio-950 sm:w-40 shrink-0">
                          {item.value}
                        </div>
                        <div className="text-xs text-studio-600 leading-relaxed flex-1">
                          {item.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Clean Architectural Pull-Quote (Replaces Pastel Alert Boxes) */}
              {section.callout && (
                <blockquote className="my-7 pl-5 border-l-2 border-studio-900 py-1">
                  <p className="font-sans text-sm sm:text-base italic text-studio-800 leading-relaxed">
                    {section.callout.text}
                  </p>
                  {section.callout.caption && (
                    <footer className="mt-1.5 font-mono text-xs text-studio-500 not-italic">
                      {section.callout.caption}
                    </footer>
                  )}
                </blockquote>
              )}

              {/* Editorial Product Reference Card (Clean, Quiet, Non-Spammy) */}
              {section.midProduct && (
                <div className="my-8 p-4 sm:p-5 rounded-lg bg-white border border-studio-200 flex flex-row gap-4 sm:gap-5 items-start sm:items-center">
                  <a
                    href={section.midProduct.shopeeUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded bg-studio-50 border border-studio-200/80 p-1.5 shrink-0 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={section.midProduct.image}
                      alt={section.midProduct.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </a>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-studio-500 mb-0.5">
                      Referensi Komponen
                    </div>
                    <a
                      href={section.midProduct.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="block group/title"
                    >
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-studio-950 group-hover/title:text-accent transition-colors leading-snug mb-1">
                        {section.midProduct.name}
                      </h4>
                    </a>
                    <p className="font-sans text-xs text-studio-600 leading-relaxed mb-2.5">
                      {section.midProduct.reason}
                    </p>
                    <a
                      href={section.midProduct.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-studio-950 hover:text-accent transition-colors"
                    >
                      <span>Cek Ketersediaan Barang</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Complementary Products List (Clean Editorial Catalog Style) */}
          {article.toolkitProducts && article.toolkitProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-studio-200">
              <div className="text-xs font-mono uppercase tracking-wider text-studio-500 mb-1">
                Referensi Pelengkap
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-studio-950 mb-2">
                {article.toolkitTitle}
              </h3>
              {article.toolkitDesignerNote && (
                <p className="font-sans text-xs sm:text-sm text-studio-600 leading-relaxed mb-5">
                  {article.toolkitDesignerNote}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.toolkitProducts.map((prod) => (
                  <a
                    key={prod.id}
                    href={prod.shopeeUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group bg-white rounded-lg border border-studio-200 p-4 flex flex-row gap-3.5 items-start hover:border-studio-400 transition-all"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded bg-studio-50 border border-studio-100 p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-sm font-semibold text-studio-950 group-hover:text-accent transition-colors leading-snug mb-1">
                        {prod.name}
                      </h4>
                      <p className="font-sans text-xs text-studio-600 leading-relaxed line-clamp-3 mb-2">
                        {prod.reason}
                      </p>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-studio-950 group-hover:text-accent">
                        <span>Cek Ketersediaan Barang</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* References / Footnotes */}
          {article.references && article.references.length > 0 && (
            <div className="mt-10 pt-6 border-t border-studio-200">
              <div className="text-xs font-mono uppercase tracking-wider text-studio-500 mb-3">
                Catatan & Referensi Data
              </div>
              <ol className="space-y-2 text-xs text-studio-500 font-sans">
                {article.references.map((ref) => (
                  <li key={ref.id} className="flex gap-2 items-baseline leading-relaxed">
                    <span className="font-mono text-studio-400 shrink-0">[{ref.id}]</span>
                    <div>
                      <span className="font-medium text-studio-700">{ref.institution}</span>
                      {' — '}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent hover:underline transition-colors"
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span>{ref.title}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Restrained Studio Consultation Footer */}
          <div className="mt-12 pt-8 border-t border-studio-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="font-heading text-base sm:text-lg font-semibold text-studio-950 mb-1">
                {article.conclusion.heading}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-studio-600 leading-relaxed">
                {article.conclusion.text}
              </p>
            </div>
            <a
              href={whatsappConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-studio-950 hover:bg-accent text-white font-mono text-xs font-medium transition-colors"
            >
              <span>Diskusi via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </article>

      {/* Compact News-Style Related Articles */}
      {otherArticles.length > 0 && (
        <section className="border-t border-studio-200 bg-studio-100/60 py-12 sm:py-16">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-studio-600 font-semibold">
                Tulisan Terkait Lainnya
              </h3>
              <button
                onClick={() => onNavigate('/#wawasan')}
                className="text-xs font-mono font-medium text-studio-600 hover:text-accent flex items-center gap-1 transition-colors"
              >
                <span>Lihat Semua</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {otherArticles.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNavigate(`/wawasan/${item.slug}`)}
                  className="group cursor-pointer bg-white p-3.5 sm:p-4 rounded-xl border border-studio-200/90 hover:border-studio-400 hover:shadow-md transition-all flex flex-row items-center justify-between gap-3.5 sm:gap-4"
                >
                  {/* Left: Text Metadata & Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-studio-500 uppercase tracking-wider mb-1">
                      <span className="text-accent font-semibold">{item.category}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h4 className="font-heading text-xs sm:text-sm md:text-base font-bold text-studio-950 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="hidden sm:block font-sans text-xs text-studio-600 line-clamp-1 mt-1">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Right: Compact Thumbnail */}
                  <div className="w-20 h-20 sm:w-24 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-studio-100 border border-studio-200/80">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      width={400}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
