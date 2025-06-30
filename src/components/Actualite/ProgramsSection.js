import React, { useState } from "react";
import { Calendar, Star, Clock, ArrowRight, Sparkles, Award, Filter, X, Tag } from 'lucide-react';

// programme nouveau
import actu from "../../assets/images/firt.jpg";
import actu2 from "../../assets/images/11.jpg";
import actu1 from "../../assets/images/22.jpg";

// programme ancien
import prog1 from "../../assets/images/actu1.jpg";
import prog2 from "../../assets/images/actu2.jpg";
import prog3 from "../../assets/images/actu3.jpg";
import prog4 from "../../assets/images/actu4.jpg";
import prog5 from "../../assets/images/actu5.jpg";
import prog6 from "../../assets/images/actu7.jpg";

const upcomingPrograms = [
  // Aucun programme à venir pour le moment
];

const pastPrograms = [
  // 2024 - Plus récents
  {
    id: 1,
    image: prog1,
    title: "Sensibilisation à l'autisme",
    description: "Une initiative visant à informer et sensibiliser le public sur l'autisme, en favorisant une meilleure compréhension et inclusion des personnes autistes.",
    category: "Sensibilisation",
    year: "2024",
    month: "Décembre"
  },
  {
    id: 7,
    image: actu,
    title: "Programme de sensibilisation communautaire",
    description: "Initiative communautaire visant à sensibiliser le grand public sur l'autisme et promouvoir l'inclusion sociale.",
    category: "Sensibilisation",
    year: "2024",
    month: "Novembre"
  },
  {
    id: 8,
    image: actu1,
    title: "Ateliers de formation pour familles",
    description: "Sessions de formation dédiées aux familles pour mieux comprendre et accompagner leurs proches autistes.",
    category: "Formation",
    year: "2024",
    month: "Octobre"
  },
  {
    id: 9,
    image: actu2,
    title: "Programme d'activités spécialisées",
    description: "Activités adaptées et spécialisées pour favoriser le développement et l'épanouissement des personnes autistes.",
    category: "Activités",
    year: "2024",
    month: "Septembre"
  },
  {
    id: 6,
    image: prog6,
    title: "Salon International de la Santé au Cameroun",
    description: "Du 22 au 26 juillet 2024, la Maison Bleue de Julien a participé au Salon International de la Santé au Cameroun.",
    category: "Événement",
    year: "2024",
    month: "Juillet"
  },
  {
    id: 2,
    image: prog2,
    title: "Autisme et fratrie",
    description: "Un programme dédié aux frères et sœurs d'enfants autistes, les aidant à mieux comprendre l'autisme et à renforcer les liens familiaux.",
    category: "Famille",
    year: "2024",
    month: "Juin"
  },
  
  // 2023 - Plus anciens
  {
    id: 4,
    image: prog4,
    title: "Camp de vacances",
    description: "Un séjour ludique et éducatif offrant aux enfants autistes des activités adaptées, favorisant l'épanouissement personnel et les interactions sociales.",
    category: "Vacances",
    year: "2023",
    month: "Août"
  },
  {
    id: 3,
    image: prog3,
    title: "Atelier créatif pour enfants autistes",
    description: "Un espace d'expression artistique conçu pour stimuler la créativité et le développement sensoriel des enfants autistes à travers diverses activités manuelles.",
    category: "Créativité",
    year: "2023",
    month: "Mai"
  },
  {
    id: 5,
    image: prog5,
    title: "Atelier de poterie",
    description: "Un atelier pratique permettant aux enfants autistes d'explorer la poterie comme moyen d'expression et de développement sensoriel.",
    category: "Artisanat",
    year: "2023",
    month: "Mars"
  },
];

const EnhancedProgramsSection = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extraire les années et catégories uniques
  const years = [...new Set(pastPrograms.map(program => program.year))].sort((a, b) => b - a);
  const categories = [...new Set(pastPrograms.map(program => program.category))].sort();

  // Filtrer les programmes
  const filteredPrograms = pastPrograms.filter(program => {
    const yearMatch = selectedYear === "all" || program.year === selectedYear;
    const categoryMatch = selectedCategory === "all" || program.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  // Compter les programmes par filtre
  const getProgramCount = () => {
    if (selectedYear === "all" && selectedCategory === "all") {
      return pastPrograms.length;
    }
    return filteredPrograms.length;
  };

  const resetFilters = () => {
    setSelectedYear("all");
    setSelectedCategory("all");
  };
  return (
    <div className="space-y-16">
      
      {/* Programmes à venir */}
      {upcomingPrograms.length > 0 && (
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
              <Calendar className="w-5 h-5 mr-3 text-blue-600" />
              <span className="text-blue-700 font-semibold">À venir</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Programmes à venir
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos prochains programmes innovants conçus pour accompagner 
              et soutenir les personnes autistes et leurs familles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingPrograms.map((program, index) => (
              <div key={program.id} className="group relative">
                {/* Effet de brillance */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badge de statut */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${program.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      <Sparkles className="w-4 h-4 inline mr-1" />
                      {program.status}
                    </div>
                    
                    {/* Titre sur l'image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-blue-600 font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>En développement</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Message si aucun programme à venir */}
      {upcomingPrograms.length === 0 && (
        <section className="mb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
              <Calendar className="w-5 h-5 mr-3 text-blue-600" />
              <span className="text-blue-700 font-semibold">À venir</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Programmes à venir
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Nouveaux programmes en préparation
                </h3>
                <p className="text-gray-600">
                  Nous travaillons sur de nouveaux programmes passionnants. 
                  Restez connectés pour découvrir nos prochaines initiatives !
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Anciens Programmes */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-50 rounded-full border border-yellow-200 mb-6">
            <Award className="w-5 h-5 mr-3 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Réalisés</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Nos Programmes Réalisés
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez l'ensemble de nos programmes passés, organisés par ordre chronologique.
            Utilisez les filtres pour explorer par année ou catégorie.
          </p>

          {/* Système de filtres redesigné */}
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Fond avec effet glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-cyan-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl"></div>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl"></div>
            
            <div className="relative p-8">
              {/* En-tête élégant */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100/50 shadow-sm mb-4">
                  <Filter className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">Recherche personnalisée</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Filtrer les programmes
                </h3>
                <p className="text-sm text-gray-600 mt-2">Trouvez facilement les programmes qui vous intéressent</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Filtre par année */}
                <div className="space-y-3">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    Année
                  </label>
                  <div className="relative">
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md text-gray-700"
                    >
                      <option value="all">Toutes les années</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Filtre par catégorie */}
                <div className="space-y-3">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Tag className="w-4 h-4 mr-2 text-cyan-500" />
                    Catégorie
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md text-gray-700"
                    >
                      <option value="all">Toutes les catégories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Zone de contrôle et résultats */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Compteur de résultats */}
                <div className="flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-100/50 shadow-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    <strong className="text-blue-600">{getProgramCount()}</strong> programme{getProgramCount() !== 1 ? 's' : ''} trouvé{getProgramCount() !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Bouton reset stylisé */}
                {(selectedYear !== "all" || selectedCategory !== "all") && (
                  <button
                    onClick={resetFilters}
                    className="group flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200/50"
                  >
                    <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    <span className="text-sm font-medium">Tout effacer</span>
                  </button>
                )}
              </div>

              {/* Tags actifs redesignés */}
              {(selectedYear !== "all" || selectedCategory !== "all") && (
                <div className="mt-6 pt-6 border-t border-white/30">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Filtres actifs</span>
                    {selectedYear !== "all" && (
                      <div className="group inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        <span className="font-medium">{selectedYear}</span>
                        <button 
                          onClick={() => setSelectedYear("all")}
                          className="ml-2 p-0.5 hover:bg-blue-200 rounded-full transition-colors duration-200"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                    {selectedCategory !== "all" && (
                      <div className="group inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-700 rounded-full text-sm border border-cyan-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                        <Tag className="w-3 h-3 mr-1.5" />
                        <span className="font-medium">{selectedCategory}</span>
                        <button 
                          onClick={() => setSelectedCategory("all")}
                          className="ml-2 p-0.5 hover:bg-cyan-200 rounded-full transition-colors duration-200"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Programmes filtrés */}
        {filteredPrograms.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPrograms.map((program, index) => (
              <div key={program.id} className="group relative">
                {/* Effet de brillance */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badge catégorie et année */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {program.category}
                      </span>
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {program.month} {program.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300">
                      <Star className="w-4 h-4 mr-2" />
                      <span>Programme terminé</span>
                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Aucun programme trouvé
              </h3>
              <p className="text-gray-600 mb-4">
                Aucun programme ne correspond aux filtres sélectionnés.
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <X className="w-4 h-4 mr-2" />
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default EnhancedProgramsSection;