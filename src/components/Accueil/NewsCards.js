"use client";
import act1 from "../../assets/images/actu1.jpg";
import act2 from "../../assets/images/actu2.jpg";
import act3 from "../../assets/images/actu3.jpg";
import act4 from "../../assets/images/actu4.jpg";
import act5 from "../../assets/images/actu5.jpg";
import act7 from "../../assets/images/actu7.jpg";
import React, { useState, useEffect } from "react";
import { FaHeart, FaCalendarAlt, FaArrowRight, FaPalette, FaUsers, FaCampground } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    image: act1,
    title: "Sensibilisation à l'autisme",
    description: "Une initiative visant à informer et sensibiliser le public sur l'autisme, en favorisant une meilleure compréhension et inclusion des personnes autistes.",
    category: "Sensibilisation",
    icon: FaUsers,
    color: "blue"
  },
  {
    id: 2,
    image: act2,
    title: "Autisme et fratrie",
    description: "Un programme dédié aux frères et sœurs d'enfants autistes, les aidant à mieux comprendre l'autisme et à renforcer les liens familiaux.",
    category: "Famille",
    icon: FaHeart,
    color: "red"
  },
  {
    id: 3,
    image: act3,
    title: "Atelier créatif pour enfants autistes",
    description: "Un espace d'expression artistique conçu pour stimuler la créativité et le développement sensoriel des enfants autistes à travers diverses activités manuelles.",
    category: "Créativité",
    icon: FaPalette,
    color: "cyan"
  },
  {
    id: 4,
    image: act4,
    title: "Camp de vacances",
    description: "Un séjour ludique et éducatif offrant aux enfants autistes des activités adaptées, favorisant l'épanouissement personnel et les interactions sociales.",
    category: "Vacances",
    icon: FaCampground,
    color: "blue"
  },
  {
    id: 5,
    image: act5,
    title: "Atelier de poterie",
    description: "Un atelier pratique permettant aux enfants autistes d'explorer la poterie comme moyen d'expression et de développement sensoriel.",
    category: "Atelier",
    icon: FaPalette,
    color: "cyan"
  },
  {
    id: 6,
    image: act7,
    title: "Salon International de la Santé au Cameroun",
    description: "Du 22 au 26 juillet 2024, la Maison Bleue de Julien participera au Salon International de la Santé au Cameroun.",
    category: "Événement",
    icon: FaCalendarAlt,
    color: "blue"
  },
];

const EnhancedNewsCards = () => {
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(6);
      } else if (window.innerWidth >= 640) {
        setDisplayCount(6);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColorClasses = (color) => {
    switch (color) {
      case 'red':
        return {
          badge: 'bg-red-100 text-red-800 border-red-200',
          icon: 'from-red-500 to-pink-500',
          hover: 'group-hover:from-red-400 group-hover:to-pink-400'
        };
      case 'cyan':
        return {
          badge: 'bg-cyan-100 text-cyan-800 border-cyan-200',
          icon: 'from-cyan-500 to-blue-500',
          hover: 'group-hover:from-cyan-400 group-hover:to-blue-400'
        };
      default:
        return {
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: 'from-blue-500 to-cyan-500',
          hover: 'group-hover:from-blue-400 group-hover:to-cyan-400'
        };
    }
  };

  return (
    <div className="relative w-full px-4 sm:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
            <FaCalendarAlt className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800">Nos dernières nouvelles</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-4">
            Dernières Actualités
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les dernières initiatives et événements de la Maison Bleue de Julien pour l'inclusion et l'épanouissement des personnes autistes.
          </p>
        </div>

        {/* Grille des actualités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsData.slice(0, displayCount).map((news) => {
            const colorClasses = getColorClasses(news.color);
            const IconComponent = news.icon;
            
            return (
              <div key={news.id} className="group relative">
                {/* Effet de fond animé */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                {/* Card principale */}
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
                  
                  {/* Badge catégorie */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colorClasses.badge}`}>
                      {news.category}
                    </span>
                    <div className={`w-10 h-10 bg-gradient-to-br ${colorClasses.icon} ${colorClasses.hover} rounded-full flex items-center justify-center transition-all duration-300`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Image avec vos vraies images */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed flex-1 text-sm mb-4">
                      {news.description}
                    </p>

                    {/* Footer simplifié */}
                    <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <FaHeart className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-gray-600 font-medium">Maison Bleue de Julien</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton "Plus d'actualités" amélioré */}
        <div className="text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <button
              onClick={() => window.location.href = "/actualite"}
              className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <span>Plus d'actualités</span>
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsCards;