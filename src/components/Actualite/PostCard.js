import React from 'react';
import { ArrowRight, CalendarDays, Heart, Newspaper, Palette, Tent, Users } from 'lucide-react';
import { articleDateLabel, articleImageUrl, extractExcerpt } from '../../services/api';
import { cx } from '../DesignSystem';

function getCategoryStyle(categoryName = '') {
  const name = categoryName.toLowerCase();

  if (name.includes('sensibilisation') || name.includes('social')) {
    return { icon: Users, tone: 'text-blue-700 bg-blue-50 border-blue-100' };
  }
  if (name.includes('famille') || name.includes('parent')) {
    return { icon: Heart, tone: 'text-blue-800 bg-blue-50 border-blue-100' };
  }
  if (name.includes('créat') || name.includes('art') || name.includes('atelier')) {
    return { icon: Palette, tone: 'text-blue-800 bg-blue-50 border-blue-100' };
  }
  if (name.includes('camp') || name.includes('vacances')) {
    return { icon: Tent, tone: 'text-blue-800 bg-blue-50 border-blue-100' };
  }

  return { icon: Newspaper, tone: 'text-blue-700 bg-blue-50 border-blue-100' };
}

export default function PostCard({ article, onClick }) {
  const style = getCategoryStyle(article?.category?.name);
  const IconComponent = style.icon;
  const imgSrc = articleImageUrl(article);
  const dateLabel = articleDateLabel(article);
  const categoryName = article?.category?.name || 'Actualité';
  const excerpt = article?.excerpt || extractExcerpt(article?.content, 150);

  return (
    <article className="h-full">
      <button
        type="button"
        onClick={() => onClick?.(article)}
        className="article-card group"
        aria-label={`Lire l'actualité : ${article?.title || ''}`}
      >
        {imgSrc ? (
          <div className="aspect-[16/10] w-full overflow-hidden bg-sky-50">
            <img
              src={imgSrc}
              alt={article?.title || "Illustration de l'actualité"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-sky-50 text-blue-700">
            <Newspaper className="h-10 w-10" aria-hidden="true" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className={cx('inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-bold', style.tone)}>
              <IconComponent className="h-3.5 w-3.5" aria-hidden="true" />
              {categoryName}
            </span>
            {dateLabel && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {dateLabel}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold leading-snug text-blue-950">
            {article?.title}
          </h3>

          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
            {excerpt}
          </p>

          <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-800">
            <span>Lire la suite</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </button>
    </article>
  );
}
