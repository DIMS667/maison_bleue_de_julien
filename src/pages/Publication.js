import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, CalendarDays, RefreshCw, Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  articleDateLabel,
  articleImageUrl,
  extractExcerpt,
  fetchPublications,
} from '../services/api';
import { PageHero, PageState, Pagination, SectionHeading } from '../components/DesignSystem';

function PublicationCard({ publication, onClick }) {
  const image = articleImageUrl(publication);
  const date = articleDateLabel(publication);
  const category = publication?.category?.name || 'Publication';
  const excerpt = publication?.excerpt || extractExcerpt(publication?.content, 150);

  return (
    <article className="h-full">
      <button
        type="button"
        onClick={() => onClick(publication)}
        className="article-card group"
        aria-label={`Lire la publication : ${publication?.title || ''}`}
      >
        {image ? (
          <div className="aspect-[16/10] w-full overflow-hidden bg-sky-50">
            <img
              src={image}
              alt={`Illustration de ${publication?.title || 'la publication'}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-sky-50 text-blue-700">
            <BookOpen className="h-10 w-10" aria-hidden="true" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="status-pill">{category}</span>
            {date && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {date}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold leading-snug text-blue-950">{publication?.title}</h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">{excerpt}</p>

          <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-800">
            <span>Lire la publication</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </button>
    </article>
  );
}

export default function PublicationPage() {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 9;

  const loadPublications = async () => {
    try {
      setLoading(true);
      const { items, totalPages: pages } = await fetchPublications({
        page,
        perPage,
        search: search || undefined,
      });
      setPublications(items);
      setTotalPages(pages);
      setError(null);
    } catch (requestError) {
      console.error('Erreur chargement publications:', requestError);
      setError('Impossible de charger les publications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPublications();
    // loadPublications depends on the current search and page values.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  };

  const clearSearch = () => {
    setSearch('');
    setSearchInput('');
    setPage(1);
  };

  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Nos publications" icon={BookOpen} title="Publications et communiqués">
        Consultez les articles de fond, communiqués de presse et publications
        officielles de La Maison Bleue de Julien.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Bibliothèque" icon={BookOpen} title="Toutes nos publications">
              Recherchez une information ou parcourez les contenus les plus récents de
              l'association.
            </SectionHeading>

            <form onSubmit={handleSearch} className="filter-panel mb-8" role="search">
              <label htmlFor="publication-search" className="form-label">Rechercher une publication</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <input
                    id="publication-search"
                    type="search"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Titre, thème ou mot-clé"
                    className="form-field form-field--icon"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Search className="h-4 w-4" aria-hidden="true" />
                  <span>Rechercher</span>
                </button>
                {search && (
                  <button type="button" onClick={clearSearch} className="btn btn-secondary">
                    <X className="h-4 w-4" aria-hidden="true" />
                    <span>Effacer</span>
                  </button>
                )}
              </div>
            </form>

            {loading ? (
              <PageState title="Chargement des publications" loading>
                Nous récupérons les derniers contenus de l'association.
              </PageState>
            ) : error ? (
              <PageState
                icon={BookOpen}
                title="Publications indisponibles"
                action={(
                  <button type="button" onClick={loadPublications} className="btn btn-primary">
                    <RefreshCw className="h-4 w-4" aria-hidden="true" />
                    <span>Réessayer</span>
                  </button>
                )}
              >
                {error}
              </PageState>
            ) : publications.length === 0 ? (
              <PageState
                icon={BookOpen}
                title={search ? `Aucun résultat pour « ${search} »` : 'Aucune publication pour le moment'}
                action={search ? <button type="button" onClick={clearSearch} className="btn btn-secondary">Effacer la recherche</button> : null}
              >
                {search ? 'Essayez un autre mot-clé ou affichez de nouveau toutes les publications.' : 'Les prochaines publications apparaîtront ici.'}
              </PageState>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {publications.map((publication) => (
                    <PublicationCard
                      key={publication.id}
                      publication={publication}
                      onClick={(item) => navigate(`/publications/${item.slug}`)}
                    />
                  ))}
                </div>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPrevious={() => setPage((current) => Math.max(1, current - 1))}
                  onNext={() => setPage((current) => Math.min(totalPages, current + 1))}
                />
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
