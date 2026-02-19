// src/pages/Publication.js
// Page des publications (blog / presse / communiqués officiels)

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaCalendarAlt, FaHeart, FaNewspaper } from 'react-icons/fa';
import { fetchPublications, articleImageUrl, articleDateLabel } from '../services/api';
import defaultImg from '../assets/images/actu1.jpg';

// ── Carte publication ────────────────────────────────────────────────────────
function PublicationCard({ publication, onClick }) {
  const imgSrc = articleImageUrl(publication) || defaultImg;
  const dateLabel = articleDateLabel(publication);
  const categoryName = publication?.category?.name || 'Publication';

  const getExcerpt = () => {
    if (publication?.excerpt) return publication.excerpt;
    if (!publication?.content) return '';
    const div = document.createElement('div');
    div.innerHTML = publication.content;
    const text = div.textContent || div.innerText || '';
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => onClick?.(publication)}
    >
      {/* Halo */}
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-700 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />

      {/* Carte */}
      <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-indigo-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">

        {/* Badge catégorie + icône */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-indigo-100 text-indigo-800 border-indigo-200">
            {categoryName}
          </span>
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 group-hover:from-indigo-400 group-hover:to-purple-400 rounded-full flex items-center justify-center transition-all duration-300">
            <FaNewspaper className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Image */}
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <img
            src={imgSrc}
            alt={publication?.title || ''}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Contenu */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {publication?.title}
          </h3>

          <p className="text-gray-600 leading-relaxed flex-1 text-sm mb-4 line-clamp-3">
            {getExcerpt()}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <FaHeart className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-600 font-medium">Maison Bleue de Julien</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <FaCalendarAlt className="w-3 h-3" />
              <span>{dateLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page principale ──────────────────────────────────────────────────────────
const PublicationPage = () => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PER_PAGE = 9;

  useEffect(() => {
    loadPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const loadPublications = async () => {
    try {
      setLoading(true);
      const { items, totalPages: tp } = await fetchPublications({
        page,
        perPage: PER_PAGE,
        search: search || undefined,
      });
      setPublications(items);
      setTotalPages(tp);
      setError(null);
    } catch (err) {
      console.error('Erreur chargement publications:', err);
      setError("Impossible de charger les publications");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const handleClick = (publication) => {
    navigate(`/publications/${publication.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-500 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-300 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <BookOpen className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Nos publications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Publications & Communiqués</h1>
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-3xl mx-auto">
            Articles de blog, communiqués de presse et publications officielles de la Maison Bleue de Julien
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-16 px-4 md:px-8">

        {/* Barre de recherche */}
        <div className="mb-12 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Rechercher une publication…"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Rechercher
            </button>
          </form>
        </div>

        {/* Contenu */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
          </div>
        ) : error ? (
          <div className="text-center py-24">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={loadPublications}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Réessayer
            </button>
          </div>
        ) : publications.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-40" />
            <p className="text-lg">
              {search ? `Aucun résultat pour "${search}"` : 'Aucune publication pour le moment'}
            </p>
            {search && (
              <button
                onClick={() => { setSearch(''); setSearchInput(''); setPage(1); }}
                className="mt-4 text-indigo-600 hover:underline text-sm"
              >
                Effacer la recherche
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Grille */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} onClick={handleClick} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Précédent
                </button>

                <span className="text-sm text-gray-600 font-medium">
                  Page {page} / {totalPages}
                </span>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default PublicationPage;