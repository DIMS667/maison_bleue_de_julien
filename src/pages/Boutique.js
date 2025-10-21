import React, { useState } from 'react';
import { ShoppingBag, Heart, Star, Eye, Filter, Grid, List, Search, ShoppingCart } from 'lucide-react';
import sacImage from '../assets/images/produits/sac.jpg';

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Données des produits
  const products = [
    {
      id: 1,
      name: "Sac en Perles Artisanal",
      price: "10 000",
      image: sacImage, 
      category: "accessoires",
      description: "Magnifique sac confectionné entièrement à la main avec des perles colorées par nos artistes de la Maison Bleue.",
      featured: true,
      inStock: true
    }
  ];

  const categories = [
    { id: 'tous', name: 'Tous les produits', icon: ShoppingBag },
    { id: 'art', name: 'Art & Créations', icon: Star },
    { id: 'bijoux', name: 'Bijoux', icon: Heart },
    { id: 'decoration', name: 'Décoration', icon: Eye },
    { id: 'papeterie', name: 'Papeterie', icon: Grid },
    { id: 'accessoires', name: 'Accessoires', icon: Filter }
  ];

  // Filtrage des produits
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'tous' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ProductCard = ({ product }) => (
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

      {/* Badge "Rupture de stock" */}
      {!product.inStock && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
            Épuisé
          </div>
        </div>
      )}

      {/* Image du produit */}
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        
        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white/90 text-blue-600 p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Eye className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Informations du produit */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {product.price} FCFA
          </div>
          
          <button 
            disabled={!product.inStock}
            className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
              product.inStock 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transform hover:-translate-y-0.5' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Commander' : 'Épuisé'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* En-tête héroïque */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <ShoppingBag className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Notre boutique</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Boutique Solidaire
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Découvrez les créations uniques réalisées par les artistes de la Maison Bleue. 
            Chaque achat soutient notre mission et nos activités.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        
        {/* Barre de recherche et filtres */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            
            {/* Barre de recherche */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
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

            {/* Mode d'affichage */}
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                <span className="font-semibold text-blue-600">{filteredProducts.length}</span> produit(s) trouvé(s)
              </p>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 mr-2">Affichage :</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des produits */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100 max-w-md mx-auto">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          </div>
        )}

        {/* Section informative */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Votre achat fait la différence
            </h3>
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