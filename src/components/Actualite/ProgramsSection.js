import React, { useState, useEffect } from "react";
import { Calendar, Star, ArrowRight, Award, Filter, X, Tag, Heart, Gift, MapPin, Users, ChevronLeft, ChevronRight, Play, Pause, ZoomIn, Quote } from 'lucide-react';

// Images du don Mandela Day
import donMANDEL from "../../assets/images/donMANDEL.jpg";
import AA from "../../assets/images/AA.jpg";
import BB from "../../assets/images/BB.jpg";
import CC from "../../assets/images/CC.jpg";
import image67 from "../../assets/images/67.jpg";

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

// Images du carrousel Mandela Day
const mandelaDayImages = [
  { src: donMANDEL, title: "Cérémonie de remise du don", category: "Mandela Day" },
  { src: AA, title: "Partenaires MTN et Chococam", category: "Partenaires" },
  { src: BB, title: "Haut Commissariat d'Afrique du Sud", category: "Officiel" },
  { src: CC, title: "Équipe de la Maison Bleue", category: "Équipe MBJ" },
  { src: image67, title: "Moment de partage", category: "Célébration" }
];

// Lightbox Component
const Lightbox = ({ isOpen, currentIndex, images, onClose, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image principale */}
      <div className="max-w-6xl max-h-[90vh] mx-auto px-4">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
        
        {/* Info image */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white text-center">
          <h3 className="font-semibold">{images[currentIndex].title}</h3>
          <p className="text-sm opacity-80">{currentIndex + 1} / {images.length}</p>
        </div>
      </div>
    </div>
  );
};

// NOUVELLE ACTUALITÉ - Don Mandela Day
const newDonationNews = {
  id: 'donation-mandela-day-2025',
  title: "Don du Haut Commissariat d'Afrique du Sud - Mandela Day",
  description: "À l'occasion de la Mandela Day, le Haut Commissariat d'Afrique du Sud au Cameroun, en partenariat avec MTN et Chococam, nous a fait l'honneur d'un don généreux pour soutenir nos programmes d'accompagnement des personnes autistes et de leurs familles.",
  category: "Partenariat International",
  status: "Mandela Day 2025",
  year: "2025",
  month: "Juillet",
  color: "from-orange-500 to-red-500",
  isHighlighted: true,
  details: {
    event: "Mandela Day",
    partners: "MTN & Chococam",
    purpose: "Développement des programmes d'inclusion",
    impact: "Expansion de nos activités d'accompagnement"
  }
};

const upcomingPrograms = [
  newDonationNews
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Carrousel automatique
  useEffect(() => {
    if (!isAutoPlay || lightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mandelaDayImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, lightboxOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mandelaDayImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mandelaDayImages.length) % mandelaDayImages.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % mandelaDayImages.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + mandelaDayImages.length) % mandelaDayImages.length);
  };

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
      
      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        images={mandelaDayImages}
        onClose={closeLightbox}
        onPrev={prevLightboxImage}
        onNext={nextLightboxImage}
      />
      
      {/* NOUVELLE SECTION - Actualité Mandela Day Simplifiée */}
      {upcomingPrograms.length > 0 && (
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-orange-50 rounded-full border border-orange-200 mb-6">
              <Gift className="w-5 h-5 mr-3 text-orange-600" />
              <span className="text-orange-700 font-semibold">Mandela Day 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Don du Haut Commissariat d'Afrique du Sud
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              À l'occasion de la Mandela Day, le <strong className="text-orange-600">Haut Commissariat d'Afrique du Sud</strong> au Cameroun, 
              en partenariat avec <strong className="text-yellow-600">MTN</strong> et <strong className="text-orange-600">Chococam</strong>, 
              nous a fait l'honneur d'un don généreux pour soutenir nos programmes d'accompagnement.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            
            {/* Carrousel principal simplifié */}
            <div className="relative mb-12">
              
              {/* Contrôles de lecture élégants */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-orange-100 px-6 py-3">
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`p-2 rounded-full transition-all duration-300 mr-4 ${
                      isAutoPlay 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <span className="text-sm font-medium text-gray-700">
                    {isAutoPlay ? 'Défilement automatique' : 'Défilement manuel'}
                  </span>
                </div>
              </div>

              {/* Image principale avec overlay minimaliste */}
              <div className="relative w-full max-w-5xl mx-auto group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={mandelaDayImages[currentImageIndex].src}
                    alt={mandelaDayImages[currentImageIndex].title}
                    className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Badge zoom */}
                  <button
                    onClick={() => openLightbox(currentImageIndex)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <ZoomIn className="w-6 h-6" />
                  </button>
                  
                  {/* Info image en bas */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {mandelaDayImages[currentImageIndex].title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                          {mandelaDayImages[currentImageIndex].category}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {currentImageIndex + 1} / {mandelaDayImages.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boutons de navigation élégants */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-orange-600 hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-orange-600 hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              {/* Indicateurs redesignés */}
              <div className="flex justify-center mt-8 space-x-3">
                {mandelaDayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-12 h-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg' 
                        : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Miniatures cliquables */}
            <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
              {mandelaDayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              ))}
            </div>

            {/* Informations partenaires simplifiées */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Nos partenaires pour cette Mandela Day
                </h3>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">🇿🇦 Haut Commissariat</p>
                    <p className="text-sm text-gray-600">d'Afrique du Sud</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">MTN</p>
                    <p className="text-sm text-gray-600">Partenaire télécom</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Chococam</p>
                    <p className="text-sm text-gray-600">Partenaire local</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citation de Nelson Mandela */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-8">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 bg-orange-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <Quote className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
                  "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-1 h-12 bg-orange-400"></div>
                  <div className="text-left">
                    <p className="font-bold text-xl">Nelson Mandela</p>
                    <p className="text-orange-200">Prix Nobel de la Paix</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bouton vers Facebook */}
            <div className="text-center">
              <a
                href="https://www.facebook.com/share/p/1BAUWeDDUD/?mibextid=oFDknk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
              >
                <span>Voir</span>
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Anciens Programmes - Section inchangée */}
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