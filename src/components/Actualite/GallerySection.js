//GallerySection.js
import React, { useState } from "react";
import { Camera, Play, Pause, ChevronLeft, ChevronRight, Share2, Heart } from 'lucide-react';


import activity1 from "../../assets/images/activite1.jpg";
import activity2 from "../../assets/images/activite2.jpg";
import activity3 from "../../assets/images/activite3.jpg";
import activity4 from "../../assets/images/gal.jpg";
import activity5 from "../../assets/images/gal1.jpg";
import activity6 from "../../assets/images/gal2.jpg";
import activity7 from "../../assets/images/gal3.jpg";

const activities = [
  { src: activity1, title: "Atelier créatif", category: "Créativité" },
  { src: activity2, title: "Activité sociale", category: "Social" },
  { src: activity3, title: "Jeux éducatifs", category: "Éducation" },
  { src: activity4, title: "Expression artistique", category: "Art" },
  { src: activity5, title: "Moment de partage", category: "Partage" },
  { src: activity6, title: "Apprentissage ludique", category: "Apprentissage" },
  { src: activity7, title: "Activité de groupe", category: "Groupe" }
];

const EnhancedGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  React.useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const getVisibleActivities = () => {
    const visibleCount = 3;
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % activities.length;
      visible.push({ ...activities[index], index });
    }
    
    return visible;
  };

  return (
    <section className="space-y-12">
      
      {/* En-tête de la galerie */}
      <div className="text-center">
        <div className="inline-flex items-center px-6 py-3 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
          <Camera className="w-5 h-5 mr-3 text-cyan-600" />
          <span className="text-cyan-700 font-semibold">Nos moments</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Galerie d'Activités
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plongez dans l'univers de nos activités et découvrez les moments 
          de joie, d'apprentissage et de partage que nous créons ensemble.
        </p>
      </div>

      {/* Galerie carousel améliorée */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Contrôles de lecture */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 p-2">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <span className="px-4 text-sm font-medium text-gray-700">
              {isAutoPlay ? 'Lecture automatique' : 'Lecture manuelle'}
            </span>
          </div>
        </div>

        {/* Carousel principal */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 justify-center">
            {getVisibleActivities().map((activity, idx) => (
              <div
                key={activity.index}
                className={`relative group transition-all duration-500 ${
                  idx === 1 
                    ? 'transform scale-110 z-10' 
                    : 'transform scale-95 opacity-75'
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={activity.src}
                    alt={activity.title}
                    className="w-80 h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay avec informations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg mb-1">
                            {activity.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                            {activity.category}
                          </span>
                        </div>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                          <Share2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge pour l'image centrale */}
                  {idx === 1 && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Camera className="w-4 h-4 inline mr-1" />
                      En vedette
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center mt-8 space-x-2">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      

      {/* Statistiques d'engagement */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">{activities.length}+</div>
            <div className="text-sm text-gray-600">Moments capturés</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-600">20+</div>
            <div className="text-sm text-gray-600">Participants</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <div className="text-sm text-gray-600">Moments de bonheur</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default EnhancedGallerySection;