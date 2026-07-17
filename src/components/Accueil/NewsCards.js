import React, { useEffect, useState } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchArticles } from '../../services/api';
import PostCard from '../Actualite/PostCard';
import { PageState } from '../DesignSystem';

export default function NewsCards() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { items } = await fetchArticles({ perPage: 3, page: 1 });
      setArticles(items);
      setError(null);
    } catch (err) {
      console.error('Erreur chargement articles:', err);
      setError('Impossible de charger les actualités');
    } finally {
      setLoading(false);
    }
  };

  const handleArticleClick = (article) => {
    navigate(`/actualites/${article.slug}`);
  };

  return (
    <section className="section-pad bg-slate-50" aria-labelledby="news-title">
      <div className="site-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="home-kicker">Nos dernières nouvelles</p>
            <h2 id="news-title" className="home-section-title">
              Actualités de l’association
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Retrouvez nos initiatives, nos événements et les temps forts de la
              Maison Bleue de Julien.
            </p>
          </div>
          <Link to="/actualite" className="btn btn-secondary shrink-0">
            <span>Toutes les actualités</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {loading ? (
          <div className="mt-8">
            <PageState compact title="Chargement des actualités" loading>
              Nous récupérons les dernières nouvelles.
            </PageState>
          </div>
        ) : error ? (
          <div className="mt-8">
            <PageState
              compact
              title="Actualités indisponibles"
              action={(
                <button type="button" onClick={loadArticles} className="btn btn-primary">
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  <span>Réessayer</span>
                </button>
              )}
            >
              {error}
            </PageState>
          </div>
        ) : articles.length === 0 ? (
          <div className="mt-8">
            <PageState compact title="Aucune actualité pour le moment">
              Les prochaines nouvelles de l'association apparaîtront ici.
            </PageState>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <PostCard key={article.id} article={article} onClick={handleArticleClick} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
