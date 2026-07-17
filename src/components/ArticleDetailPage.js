import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { CalendarDays, Heart, Newspaper } from 'lucide-react';
import { articleDateLabel, articleImageUrl } from '../services/api';
import { BackLink, ButtonLink, PageHero, PageState } from './DesignSystem';

export default function ArticleDetailPage({
  slug,
  fetchItem,
  listPath,
  backLabel,
  loadingLabel,
  notFoundTitle,
  notFoundText,
  defaultCategory,
  icon: Icon = Newspaper,
}) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);
    setError(false);

    fetchItem(slug)
      .then((data) => {
        if (!cancelled) {
          setItem(data);
          setError(!data);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [fetchItem, slug]);

  if (loading) {
    return (
      <div className="page-surface min-h-[60vh] bg-sky-50/70 py-16">
        <div className="site-container">
          <PageState title={loadingLabel} loading>
            Le contenu est en cours de préparation.
          </PageState>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="page-surface min-h-[60vh] bg-sky-50/70 py-16">
        <div className="site-container">
          <PageState
            icon={Icon}
            title={notFoundTitle}
            action={<ButtonLink to={listPath}>Retour à la liste</ButtonLink>}
          >
            {notFoundText}
          </PageState>
        </div>
      </div>
    );
  }

  const image = articleImageUrl(item);
  const date = articleDateLabel(item);
  const category = item.category?.name || defaultCategory;
  const cleanContent = DOMPurify.sanitize(item.content || '');

  return (
    <article className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow={category}
        icon={Icon}
        title={item.title}
        image={image}
        imageAlt={image ? `Illustration de ${item.title}` : ''}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
          {date && (
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-blue-700" aria-hidden="true" />
              {date}
            </span>
          )}
          <span className="inline-flex items-center gap-2">
            <Heart className="h-4 w-4 text-[#d65f4a]" aria-hidden="true" />
            La Maison Bleue de Julien
          </span>
        </div>
      </PageHero>

      <div className="section-pad bg-white">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            <BackLink to={listPath}>{backLabel}</BackLink>

            {cleanContent ? (
              <div
                className="rich-content mt-8"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
            ) : (
              <PageState compact icon={Icon} title="Contenu à venir">
                Cette publication ne contient pas encore de texte.
              </PageState>
            )}

            <footer className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <BackLink to={listPath}>{backLabel}</BackLink>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Heart className="h-4 w-4 text-[#d65f4a]" aria-hidden="true" />
                Merci de votre soutien.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
}
