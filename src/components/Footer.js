import React from 'react';
import { FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaArrowUp } from 'react-icons/fa';

const EnhancedFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 text-white overflow-hidden">
      
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        
        {/* Section principale */}
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo et description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                {/* Logo stylisé */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                    <FaHeart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">La Maison Bleue</h3>
                    <p className="text-cyan-200 text-sm">de Julien</p>
                  </div>
                </div>
                <p className="text-cyan-100 leading-relaxed mb-6 max-w-md">
                  Notre association accompagne avec bienveillance les personnes autistes et leurs familles, 
                  en créant un espace inclusif et chaleureux où chacun peut s'épanouir.
                </p>
              </div>
              
              {/* Slogan */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="text-lg font-medium text-cyan-200 italic">
                  "Autisme : Vivre la différence"
                </p>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Liens rapides</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Accueil', href: '/' },
                  { name: 'Qui sommes-nous ?', href: '/mbj' },
                  { name: 'Comprendre l\'autisme', href: '/autisme' },
                  { name: 'Actualités', href: '/actualite' },
                  { name: 'Faire un don', href: '/don' },
                  { name: 'Nous rejoindre', href: '/adherer' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-cyan-200 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-red-400 transition-colors duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cyan-200 text-sm">
                      Yaoundé, Cameroun
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                  <a href="tel:+237123456789" className="text-cyan-200 hover:text-white transition-colors duration-300">
                    +237 123 456 789
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                  <a href="mailto:contact@maisonbleue.cm" className="text-cyan-200 hover:text-white transition-colors duration-300">
                    contact@maisonbleue.cm
                  </a>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-8">
                <h5 className="text-base font-medium mb-4 text-white">Suivez-nous</h5>
                <div className="flex space-x-3">
                  <a 
                    href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-200 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-200 hover:text-white hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-200 hover:text-white hover:bg-red-600 transition-all duration-300 hover:scale-110"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@lambj_julien?_t=ZM-8tIvC8b8qVZ&_r=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-200 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              
              {/* Copyright */}
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-cyan-200 text-sm">
                  © {new Date().getFullYear()} La Maison Bleue de Julien. Tous droits réservés.
                </p>
                <p className="text-cyan-300 text-xs mt-1">
                  Fait avec <FaHeart className="inline w-3 h-3 text-red-400 mx-1" /> pour l'inclusion et la bienveillance
                </p>
              </div>

              {/* Bouton retour en haut */}
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 text-cyan-200 hover:text-white transition-all duration-300"
              >
                <span className="text-sm">Retour en haut</span>
                <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Décoration finale */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;