import React from 'react';
import { FaDonate, FaUserPlus, FaHeart, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function EnhancedHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 overflow-hidden">
      {/* Animated background elements - couleurs du logo - responsive */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-red-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-green-400 rounded-full opacity-15 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-16 sm:w-20 h-16 sm:h-20 bg-pink-400 rounded-full opacity-10 animate-pulse"></div>
      </div>

      {/* Main hero background with better overlay */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%233B82F6;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%2306B6D4;stop-opacity:0.6" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad1)"/></svg>')`
          }}
        ></div>
        {/* Overlay avec les couleurs du logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/60 via-cyan-500/40 to-blue-800/70"></div>
      </div>

      {/* Content - responsive amélioré avec meilleur espacement */}
      <div className="relative z-10 min-h-screen flex items-center pt-28 sm:pt-32 lg:pt-20 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left column - Main content - responsive */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Badge avec couleurs du logo - responsive et visibilité améliorée */}
              <div className="inline-flex items-center px-4 sm:px-5 lg:px-6 py-2 sm:py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-lg mt-4 sm:mt-6 lg:mt-8">
                <FaHeart className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-white drop-shadow-lg">Association dédiée à l'autisme</span>
              </div>

              {/* Main heading avec couleurs du logo - responsive */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className="block">Bienvenue à la</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                    Maison Bleue
                  </span>
                  <span className="block">de Julien</span>
                </h1>
                
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Description avec couleurs harmonisées - responsive */}
              <p className="text-base sm:text-lg lg:text-xl text-cyan-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Notre association accompagne avec bienveillance les personnes autistes et leurs familles, 
                en créant un <span className="text-cyan-300 font-semibold">espace inclusif et chaleureux</span> 
                où chacun peut s'épanouir.
              </p>

              {/* Stats avec couleurs du logo - responsive */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 py-4 sm:py-6 max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-300">10+</div>
                  <div className="text-cyan-200 text-xs sm:text-sm">Familles accompagnées</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-300">5</div>
                  <div className="text-cyan-200 text-xs sm:text-sm">Années d'expérience</div>
                </div>
              </div>

              {/* CTA Buttons avec couleurs du logo - responsive et améliorés */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
                <Link to="/don" className="flex-1 sm:flex-none">
                  <button className="w-full group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-pink-500 to-red-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-red-400/20">
                    <FaDonate className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5" />
                    Faire un Don
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </Link>
                
                <Link to="/adherer" className="flex-1 sm:flex-none">
                  <button className="w-full group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white bg-cyan-600/90 backdrop-blur-sm border border-cyan-400/60 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-cyan-500/90 transform hover:-translate-y-1 transition-all duration-300">
                    <FaUserPlus className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5" />
                    Nous Rejoindre
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column - Visual element - masqué sur mobile/tablette */}
            <div className="hidden xl:block relative">
              <div className="relative">
                {/* Decorative elements avec couleurs du logo */}
                <div className="absolute -top-4 -right-4 w-64 xl:w-72 h-64 xl:h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-56 xl:w-64 h-56 xl:h-64 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                
                {/* Main visual card avec couleurs harmonisées */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 xl:p-8 border border-cyan-200/20 shadow-2xl">
                  <div className="space-y-4 xl:space-y-6">
                    <div className="flex items-center space-x-3 xl:space-x-4">
                      <div className="w-10 xl:w-12 h-10 xl:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <FaHandsHelping className="w-5 xl:w-6 h-5 xl:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg xl:text-xl font-semibold text-white">Accompagnement personnalisé</h3>
                        <p className="text-cyan-200 text-sm xl:text-base">Pour chaque famille</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 xl:space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 xl:p-4">
                        <div className="text-xs xl:text-sm text-cyan-200 mb-2">Activités adaptées</div>
                        <div className="w-full bg-blue-900/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-3 xl:p-4">
                        <div className="text-xs xl:text-sm text-cyan-200 mb-2">Soutien familial</div>
                        <div className="w-full bg-blue-900/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-5/6"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-3 xl:p-4">
                        <div className="text-xs xl:text-sm text-cyan-200 mb-2">Inclusion sociale</div>
                        <div className="w-full bg-blue-900/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-red-400 to-pink-400 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator avec couleurs du logo - responsive et repositionné */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-cyan-200">
              <span className="text-xs sm:text-sm opacity-80">Découvrir</span>
              <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-cyan-300/60 rounded-full flex justify-center hover:border-cyan-300 transition-colors duration-300">
                <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-cyan-300 rounded-full animate-bounce mt-1 sm:mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}