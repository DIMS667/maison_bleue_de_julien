import React from 'react';
import { FaHeart, FaUsers, FaHandsHelping, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import maisonBleu from '../../assets/images/maison_bleu.jpg';

const EnhancedCompanyIntro = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Section Logo et Citation */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo Container avec votre vraie image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-full max-w-sm mx-auto">
                  <img 
                    src={maisonBleu} 
                    alt="Logo Maison Bleue de Julien" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Citation inspirante - responsive amélioré */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500 relative">
              <FaQuoteLeft className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-300 w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
              <p className="text-base sm:text-lg text-blue-800 font-medium italic leading-relaxed pr-8 sm:pr-12">
                "Notre mission est de créer un monde où chaque personne autiste peut s'épanouir dans un environnement bienveillant et inclusif."
              </p>
            </div>
          </div>

          {/* Section Contenu Principal */}
          <div className="space-y-8">
            {/* En-tête avec badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200">
                <FaHeart className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-sm font-semibold text-blue-800">Association d'accompagnement</span>
              </div>
              
              {/* TITRE ENTIÈREMENT EN BLEU */}
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Qu'est-ce que la Maison Bleue de Julien ?
              </h1>
            </div>

            {/* Description avec icônes */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Un espace inclusif et chaleureux</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La Maison Bleue de Julien est une association dédiée à offrir un espace inclusif et chaleureux 
                    pour les personnes autistes et leurs familles. Nous travaillons pour une meilleure insertion socio-professionnelle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <FaHandsHelping className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Un soutien concret et bienveillant</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Notre mission est d'offrir un véritable lieu de vie ouvert à tous, basé sur des valeurs de respect, 
                    d'entraide et d'épanouissement personnel. Nous accompagnons chaque famille dans son parcours unique.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Familles accompagnées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-600">5</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Engagement</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/mbj" className="flex-1 sm:flex-none">
                <button className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span>Découvrez nos projets</span>
                  <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
              
              <a href="/autisme" className="flex-1 sm:flex-none">
                <button className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white border-2 border-blue-200 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300">
                  <FaHeart className="mr-3 w-5 h-5 text-red-500" />
                  <span>Comprendre l'autisme</span>
                </button>
              </a>
            </div>

            {/* Appel à l'action secondaire */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">Rejoignez notre communauté</h4>
                  <p className="text-blue-700">Ensemble, construisons un avenir plus inclusif</p>
                </div>
                <a href="/adherer">
                  <button className="px-6 py-2 bg-white text-blue-700 rounded-lg shadow-md hover:shadow-lg font-semibold border border-blue-200 hover:bg-blue-50 transition-all duration-300 whitespace-nowrap">
                    Adhérer
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCompanyIntro;