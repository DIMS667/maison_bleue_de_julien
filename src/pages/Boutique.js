// src/pages/Boutique.js
// Connecté à l'API FastAPI — remplace les données statiques

import React, { useState, useEffect, useCallback } from 'react';
import {
  ShoppingBag, Heart, Star, Eye, Grid, List, Search, ShoppingCart,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { fetchBoutiqueItems, fetchCategories, articleImageUrl } from '../services/api';

// ── Constantes ───────────────────────────────────────────────────────────────
const CATEGORIES_ICONES = {
  'art':         Star,
  'bijoux':      Heart,
  'decoration':  Eye,
  'papeterie':   Grid,
  'accessoires': ShoppingBag,
};
const PER_PAGE = 9;

// ── Carte produit ────────────────────────────────────────────────────────────
const ProductCard = ({ product }) => {
  const imgSrc = articleImageUrl(product); // plus de fallback

  return (
    <div className="group relative bg-white rounded-3xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

      {/* Badge "En vedette" */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
            <Star className="w-3 h-3 mr-1" />
            Vedette
          </div>
        </div>
      )}

      {/* Badge "Épuisé" */}
      {!product.in_stock && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
            Épuisé
          </div>
        </div>
      )}

      {/* Image — affichée seulement si elle existe */}
      {imgSrc && (
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <img
            src={imgSrc}
            alt={product.name}
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white/90 text-blue-600 p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Eye className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Infos */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {Number(product.price).toLocaleString('fr-FR')} FCFA
          </div>

          <button
            disabled={!product.in_stock}
            className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
              product.in_stock
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.in_stock ? 'Commander' : 'Épuisé'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Page Boutique ────────────────────────────────────────────────────────────
const Boutique = () => {
  const [products, setProducts]                 = useState([]);
  const [categories, setCategories]             = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [viewMode, setViewMode]                 = useState('grid');
  const [searchInput, setSearchInput]           = useState('');
  const [search, setSearch]                     = useState('');
  const [page, setPage]                         = useState(1);
  const [totalPages, setTotalPages]             = useState(1);
  const [total, setTotal]                       = useState(0);
  const [loading, setLoading]                   = useState(true);
  const [error, setError]                       = useState(null);

  useEffect(() => {
    fetchCategories('boutique')
      .then((cats) => setCategories(cats))
      .catch(() => {});
  }, []);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const { items, total: t, totalPages: tp } = await fetchBoutiqueItems({
        page,
        perPage: PER_PAGE,
        categorySlug: selectedCategory !== 'tous' ? selectedCategory : undefined,
        search: search || undefined,
      });
      setProducts(items);
      setTotal(t);
      setTotalPages(tp);
      setError(null);
    } catch (err) {
      console.error('Erreur chargement boutique:', err);
      setError("Impossible de charger les produits");
    } finally {
      setLoading(false);
    }
  }, [page, selectedCategory, search]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setPage(1);
  };

  const allCategories = [
    { id: 'tous', name: 'Tous les produits', icon: ShoppingBag },
    ...categories.map((cat) => ({
      id: cat.slug,
      name: cat.name,
      icon: CATEGORIES_ICONES[cat.slug] || ShoppingBag,
    })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <ShoppingBag className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Notre boutique</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Boutique Solidaire</h1>
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Découvrez les créations uniques réalisées par les artistes de la Maison Bleue.
            Chaque achat soutient notre mission et nos activités.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">

        {/* Filtres */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
            </form>

            <div className="flex flex-wrap gap-3 mb-6">
              {allCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                <span className="font-semibold text-blue-600">{total}</span> produit(s) trouvé(s)
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 mr-2">Affichage :</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={loadProducts}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Réessayer
            </button>
          </div>
        ) : products.length > 0 ? (
          <>
            <div className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
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
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100 max-w-md mx-auto">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-500">
                {search ? `Aucun résultat pour "${search}"` : 'Aucun produit disponible pour le moment'}
              </p>
              {search && (
                <button
                  onClick={() => { setSearch(''); setSearchInput(''); setPage(1); }}
                  className="mt-4 text-blue-600 hover:underline text-sm"
                >
                  Effacer la recherche
                </button>
              )}
            </div>
          </div>
        )}

        {/* Section informative */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Votre achat fait la différence</h3>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Chaque produit acheté contribue directement au financement de nos activités
              et permet d'offrir un accompagnement de qualité aux personnes autistes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">des bénéfices reversés</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">Fait main</div>
                <div className="text-blue-100">avec amour et passion</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">Unique</div>
                <div className="text-blue-100">chaque pièce est originale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boutique;