// src/pages/PublicationDetail.js
// Page détail d'une publication (blog / communiqué officiel)

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { BookOpen } from 'lucide-react';
import { fetchPublicationBySlug, articleImageUrl, articleDateLabel } from '../services/api';

export default function PublicationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    setLoading(true);
    setError(false);

    fetchPublicationBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          setPublication(data);
          if (!data) setError(true);
        }
      })
      .catch(() => { if (!cancelled) setError(true); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4" />
          <p className="text-gray-500">Chargement de la publication…</p>
        </div>
      </div>
    );
  }

  if (error || !publication) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">📋</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Publication introuvable</h2>
          <p className="text-gray-500 mb-6">
            La publication que vous cherchez n'existe pas ou a été supprimée.
          </p>
          <button
            onClick={() => navigate('/publications')}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Retour aux publications
          </button>
        </div>
      </div>
    );
  }

  const imgSrc = articleImageUrl(publication);
  const dateLabel = articleDateLabel(publication);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">

      {/* Hero image */}
      {imgSrc && (
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <img src={imgSrc} alt={publication.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <Link
          to="/publications"
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 hover:underline mb-8 transition"
        >
          <FaArrowLeft className="mr-2 w-3 h-3" />
          Retour aux publications
        </Link>

        {/* Catégorie */}
        {publication.category?.name && (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-full text-xs font-semibold mb-4">
            <BookOpen className="w-3 h-3" />
            {publication.category.name}
          </span>
        )}

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {publication.title}
        </h1>

        {/* Méta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4 text-indigo-400" />
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
            alt={publication.title}
            className="w-full rounded-2xl mb-8 shadow-lg"
          />
        )}

        {/* Contenu */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-indigo-600 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: publication.content || '' }}
        />

        {/* Pied de page */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => navigate('/publications')}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Retour aux publications
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaHeart className="w-4 h-4 text-red-400" />
            <span>Merci de votre soutien !</span>
          </div>
        </div>
      </article>
    </div>
  );
}