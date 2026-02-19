// src/pages/Actualite.js
// Nettoyé : plus aucune dépendance WordPress

import React, { useState, useEffect } from 'react';
import { Calendar, Camera, Heart, Sparkles, Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fetchArticles } from '../services/api';
import PostCard from '../components/Actualite/PostCard';
import EnhancedProgramsSection from '../components/Actualite/ProgramsSection';
import EnhancedGallerySection from '../components/Actualite/GallerySection';

const EnhancedNewsPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Calendar className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Nos actualités</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Actualités & Activités</h1>
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Découvrez nos dernières actualités, programmes innovants et activités
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-16 px-4 md:px-8">

        {/* ── Section Articles ── */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <Newspaper className="w-8 h-8 mr-3 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Dernières Actualités</h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={loadArticles}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Réessayer
              </button>
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <PostCard
                  key={article.id}
                  article={article}
                  onClick={handleArticleClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Aucune actualité pour le moment</p>
            </div>
          )}
        </section>

        {/* Séparateur */}
        <Separator label="Programmes" icon={<Calendar className="w-5 h-5 mr-2 text-blue-600" />} />

        {/* Section Programmes */}
        <section className="mb-20">
          <EnhancedProgramsSection />
        </section>

        {/* Séparateur */}
        <Separator label="Galerie" icon={<Camera className="w-5 h-5 mr-2 text-blue-600" />} />

        {/* Section Galerie */}
        <section>
          <EnhancedGallerySection />
        </section>

        {/* Section finale */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 text-white text-center shadow-xl">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-300 mr-3" />
                <Sparkles className="w-8 h-8 text-yellow-300" />
                <Heart className="w-8 h-8 text-red-300 ml-3" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez notre mission</h3>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Chaque programme, chaque activité contribue à créer un monde plus inclusif.
                Ensemble, continuons à faire la différence dans la vie des personnes autistes
                et de leurs familles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/don"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Heart className="mr-2 w-5 h-5" />
                  <span>Faire un don</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Nous contacter</span>
                  <Calendar className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// Composant séparateur réutilisable
function Separator({ label, icon }) {
  return (
    <div className="flex items-center justify-center mb-20">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      <div className="mx-6 flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-blue-100">
        {icon}
        <span className="text-blue-700 font-semibold">{label}</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
    </div>
  );
}

export default EnhancedNewsPage;