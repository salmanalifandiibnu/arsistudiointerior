import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ARTICLES, Article } from '../content/articles';

interface InsightsSectionProps {
  onNavigate: (path: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigate }) => {
  return (
    <section id="wawasan" className="py-16 sm:py-24 bg-studio-100/60 border-t border-studio-200/80 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Newsroom Style */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-studio-950 leading-tight">
            Artikel & Referensi Interior
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-studio-600 font-light leading-relaxed">
            Investigasi material, panduan teknis konstruksi, dan strategi perencanaan furnitur hunian langsung dari workshop Arsi Studio.
          </p>
        </div>

        {/* Cards Grid or Empty State */}
        {ARTICLES.length === 0 ? (
          <div className="max-w-xl mx-auto p-8 rounded-xl bg-white/80 border border-dashed border-studio-300 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-studio-500 mb-2">
              STATUS KONTEN WAWASAN
            </p>
            <p className="font-sans text-xs sm:text-sm text-studio-600">
              Belum ada artikel yang diterbitkan.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5">
            {ARTICLES.map((article: Article) => (
              <article
                key={article.id}
                onClick={() => onNavigate(`/wawasan/${article.slug}`)}
                className="group cursor-pointer bg-white rounded-xl border border-studio-200/90 p-3.5 sm:p-5 flex flex-row gap-3.5 sm:gap-5 items-stretch justify-between transition-all duration-300 hover:border-studio-400 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Text Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    {/* Meta: Category & Read Time */}
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-studio-500 uppercase tracking-wider mb-1 sm:mb-1.5">
                      <span className="text-accent font-semibold truncate max-w-[130px] sm:max-w-none">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span className="shrink-0">{article.readTime}</span>
                    </div>

                    {/* Article Title */}
                    <h3 className="font-heading text-xs sm:text-base font-bold text-studio-950 leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-1 sm:mb-2">
                      {article.title}
                    </h3>

                    {/* Excerpt (Hidden on mobile for maximum compactness) */}
                    <p className="hidden sm:block font-sans text-xs text-studio-600 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read Link */}
                  <div className="pt-2 flex items-center gap-1 text-[10.5px] sm:text-xs font-mono font-semibold text-studio-800 group-hover:text-accent transition-colors">
                    <span>Baca Lengkap</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Compact Thumbnail (Right Side) */}
                <div className="w-20 h-20 sm:w-28 sm:h-24 md:w-36 md:h-28 shrink-0 rounded-lg overflow-hidden bg-studio-100 border border-studio-200/80">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
