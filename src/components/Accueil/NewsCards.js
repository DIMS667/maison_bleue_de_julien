// src/components/Accueil/NewsCards.js
// Nettoyé : plus aucune dépendance WordPress

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { fetchArticles } from '../../services/api';
import PostCard from '../Actualite/PostCard';

const EnhancedNewsCards = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 640 ? 3 : 6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // ---- États de chargement / erreur / vide ----

  const SectionHeader = () => (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
        <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
        <span className="text-sm font-semibold text-blue-800">Nos dernières nouvelles</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-4">
        Dernières Actualités
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6" />
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Découvrez les dernières initiatives et événements de la Maison Bleue de Julien
        pour l'inclusion et l'épanouissement des personnes autistes.
      </p>
    </div>
  );

  if (loading) {
    return (
      <div className="relative w-full px-4 sm:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader />
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full px-4 sm:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader />
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadArticles}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="relative w-full px-4 sm:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader />
          <p className="text-gray-600">Aucune actualité pour le moment. Revenez bientôt !</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full px-4 sm:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader />

        {/* Grille des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.slice(0, displayCount).map((article) => (
            <PostCard
              key={article.id}
              article={article}
              onClick={handleArticleClick}
            />
          ))}
        </div>

        {/* Bouton "Plus d'actualités" */}
        <div className="text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <Link
              to="/actualite"
              className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <span>Plus d'actualités</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsCards;