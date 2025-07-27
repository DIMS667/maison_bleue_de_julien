import React from 'react';
import { FaHandsHelping, FaUsers, FaHeart, FaArrowRight, FaCheckCircle, FaStar, FaGlobeAmericas, FaHandHoldingHeart } from 'react-icons/fa';

const JoinPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

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
            <FaGlobeAmericas className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Engagement solidaire</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rejoignez notre cause 🌍
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Ensemble, nous construisons un avenir plus inclusif pour les personnes autistes et leurs familles
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Introduction générale */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
                <FaHandHoldingHeart className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-blue-700 font-semibold">Votre impact</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              En vous joignant à nous, vous participez activement à l'amélioration de la qualité de vie des personnes autistes et de leurs familles. Nous offrons différentes manières de contribuer à nos efforts, que ce soit en temps, en compétences ou en soutien financier.
            </p>
          </div>
        </section>

        {/* Grid des options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* Section Bénévole */}
          <div className="group relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
              
              {/* En-tête de la section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
                  <FaHandsHelping className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-semibold">Bénévolat</span>
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Devenir Bénévole 👋
                </h2>
              </div>

              {/* Contenu */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  En tant que bénévole à la Maison Bleue de Julien, vous aurez l'opportunité de travailler directement sur nos projets, d'apporter un impact positif dans la communauté et de vous développer personnellement et professionnellement.
                </p>

                {/* Avantages */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Impact direct sur la communauté</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Développement personnel et professionnel</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexibilité horaire adaptée</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Formation et accompagnement</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <p className="text-blue-800 font-medium">
                    Que vous souhaitiez contribuer quelques heures par semaine ou vous engager sur des projets à long terme, votre aide sera inestimable.
                  </p>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="mt-auto">
                <a 
                  href="https://example.com/form_volunteer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Formulaire pour Bénévoles</span>
                  <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Section Membre */}
          <div className="group relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-cyan-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
              
              {/* En-tête de la section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full border border-cyan-200 mb-6">
                  <FaUsers className="w-5 h-5 text-cyan-600 mr-3" />
                  <span className="text-cyan-700 font-semibold">Adhésion</span>
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Devenir Membre 📈
                </h2>
              </div>

              {/* Contenu */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  En devenant membre de la Maison Bleue de Julien, vous nous fournissez un soutien régulier qui est vital pour nos opérations et nos programmes.
                </p>

                {/* Avantages */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FaStar className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mises à jour régulières sur nos initiatives</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaStar className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Invitations à des événements spéciaux</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaStar className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reconnaissance dans nos publications</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaStar className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Accès privilégié aux ressources</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                  <p className="text-cyan-800 font-medium">
                    Votre contribution annuelle ou mensuelle permettra de garantir la pérennité de nos actions.
                  </p>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="mt-auto">
                <a 
                  href="https://example.com/form_member" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Formulaire pour Membres</span>
                  <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section finale d'encouragement */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-cyan-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <FaHeart className="w-16 h-16 mx-auto mb-6 text-red-300" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ensemble, créons un impact durable
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Chaque geste compte, chaque contribution fait la différence. Rejoignez notre famille et participez à la construction d'un monde plus inclusif pour tous.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <span>Nous contacter</span>
                  <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a href="/don" className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 group">
                  <FaHeart className="mr-3 w-5 h-5 text-red-300" />
                  <span>Faire un don</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JoinPage;