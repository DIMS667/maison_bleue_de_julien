import React, { useEffect, useState } from 'react';
import { CalendarDays, Camera, Heart, Newspaper, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fetchArticles } from '../services/api';
import PostCard from '../components/Actualite/PostCard';
import EnhancedProgramsSection from '../components/Actualite/ProgramsSection';
import EnhancedGallerySection from '../components/Actualite/GallerySection';
import { ButtonLink, PageHero, PageState, SectionHeading } from '../components/DesignSystem';

export default function Actualite() {
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
      const { items } = await fetchArticles({ perPage: 6, page: 1 });
      setArticles(items);
      setError(null);
    } catch (err) {
      console.error('Erreur chargement articles:', err);
      setError("Impossible de charger les actualités");
    } finally {
      setLoading(false);
    }
  };

  const handleArticleClick = (article) => {
    navigate(`/actualites/${article.slug}`);
  };

  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="Nos actualités"
        icon={CalendarDays}
        title="Actualités et activités"
      >
        Découvrez les nouvelles de l'association, les programmes réalisés et les
        moments de terrain qui font vivre notre mission.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading
              align="left"
              eyebrow="Articles récents"
              icon={Newspaper}
              title="Dernières actualités"
            >
              Les initiatives, rencontres, ateliers et temps forts de La Maison
              Bleue de Julien.
            </SectionHeading>

            {loading ? (
              <PageState title="Chargement des actualités" loading>
                Nous récupérons les dernières nouvelles de l'association.
              </PageState>
            ) : error ? (
              <PageState
                icon={Newspaper}
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
            ) : articles.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <PostCard key={article.id} article={article} onClick={handleArticleClick} />
                ))}
              </div>
            ) : (
              <PageState icon={Newspaper} title="Aucune actualité pour le moment">
                Les prochaines nouvelles de l'association apparaîtront ici.
              </PageState>
            )}
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <SectionHeading eyebrow="Programmes" icon={CalendarDays} title="Nos actions sur le terrain">
              Retrouvez les programmes récents, les partenariats et les actions
              passées de l'association.
            </SectionHeading>
            <EnhancedProgramsSection />
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Galerie" icon={Camera} title="Moments de vie à la MBJ">
              Quelques images de nos ateliers, activités et moments de partage.
            </SectionHeading>
            <EnhancedGallerySection />
          </div>
        </section>

        <section className="section-pad-sm bg-sky-50/70">
          <div className="site-container">
            <div className="section-card grid gap-6 border-t-4 border-t-[#d65f4a] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">Rejoignez notre mission</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
                  Chaque programme contribue à créer un environnement plus inclusif
                  pour les personnes autistes et leurs familles.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/don" variant="warm" icon={Heart}>Faire un don</ButtonLink>
                <ButtonLink to="/contact" variant="secondary">Nous contacter</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
