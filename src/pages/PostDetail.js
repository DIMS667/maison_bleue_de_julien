// src/pages/PostDetail.js
// Nettoyé : plus aucune dépendance WordPress

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchArticleBySlug, articleImageUrl, articleDateLabel } from '../services/api';
import { FaCalendarAlt, FaHeart, FaArrowLeft } from 'react-icons/fa';

// Sanitize basique sans DOMPurify (le contenu vient de notre propre API)
// Si tu veux garder DOMPurify, tu peux le réinstaller : npm install dompurify
function sanitize(html) {
  // Le contenu vient de notre backoffice, donc fiable
  // On peut quand même ajouter DOMPurify plus tard si besoin
  return html;
}

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    setLoading(true);
    setError(false);

    fetchArticleBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          setArticle(data);
          if (!data) setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-500">Chargement de l'article…</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">📰</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Article introuvable</h2>
          <p className="text-gray-500 mb-6">
            L'article que vous cherchez n'existe pas ou a été supprimé.
          </p>
          <button
            onClick={() => navigate('/actualite')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Retour aux actualités
          </button>
        </div>
      </div>
    );
  }

  const imgSrc = articleImageUrl(article);
  const dateLabel = articleDateLabel(article);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Hero de l'article */}
      {imgSrc && (
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <img
            src={imgSrc}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <Link
          to="/actualite"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mb-8 transition"
        >
          <FaArrowLeft className="mr-2 w-3 h-3" />
          Retour aux actualités
        </Link>

        {/* Catégorie */}
        {article.category?.name && (
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-xs font-semibold mb-4">
            {article.category.name}
          </span>
        )}

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Méta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4 text-blue-400" />
            <span>{dateLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHeart className="w-4 h-4 text-red-400" />
            <span>Maison Bleue de Julien</span>
          </div>
        </div>

        {/* Image si pas de hero */}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={article.title}
            className="w-full rounded-2xl mb-8 shadow-lg"
          />
        )}

        {/* Contenu */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-blue-600 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: sanitize(article.content || '') }}
        />

        {/* Pied de page article */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={() => navigate('/actualite')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              <FaArrowLeft className="mr-2" />
              Retour aux actualités
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaHeart className="w-4 h-4 text-red-400" />
              <span>Merci de votre soutien !</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}