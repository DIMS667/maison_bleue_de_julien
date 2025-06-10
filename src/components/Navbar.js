import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
// Importez votre logo ici
// import maisonBleu from '../assets/images/maison_bleu.jpg';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Autisme', href: '/autisme' },
  { name: 'Actualité', href: '/actualite' },
  { name: 'Nos projets', href: '/mbj' },
  { name: 'Don', href: '/don' },
  { name: 'Contact', href: '/contact' },
];

export default function EnhancedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-cyan-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo simplifié sans image */}
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaHeart className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="hidden sm:block">
                  <h2 className="text-blue-800 font-bold text-lg lg:text-xl">
                    Maison Bleue
                  </h2>
                  <p className="text-cyan-600 text-xs lg:text-sm -mt-1">
                    de Julien
                  </p>
                </div>
              </div>
            </Link>

            {/* Navigation Desktop - Centrée */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1 bg-blue-50/50 rounded-full px-2 py-1 backdrop-blur-sm border border-cyan-100/50">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                      location.pathname === item.href 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg' 
                        : 'text-blue-700 hover:text-cyan-600 hover:bg-cyan-50'
                    }`}
                  >
                    {item.name === 'Don' ? (
                      <span className="flex items-center">
                        <FaHeart className="w-3 h-3 mr-1 text-red-500" />
                        Don
                      </span>
                    ) : item.name}
                    
                    {/* Indicateur actif */}
                    {location.pathname === item.href && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media & CTA Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Réseaux sociaux */}
              <div className="flex items-center space-x-2">
                <a 
                  href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@lambj_julien?_t=ZM-8tIvC8b8qVZ&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaTiktok className="w-4 h-4" />
                </a>
              </div>

              {/* Bouton Don principal */}
              <Link to="/don">
                <button className="group relative px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 via-pink-500 to-red-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    <FaHeart className="w-4 h-4 mr-2 animate-pulse" />
                    Faire un Don
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile: Social + Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Social mobile (version compacte) */}
              <div className="flex items-center space-x-1">
                <a href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <FaFacebookF className="w-3 h-3" />
                </a>
                <a href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 shadow-sm">
                  <FaInstagram className="w-3 h-3" />
                </a>
              </div>

              {/* Menu hamburger */}
              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
              >
                <span className="sr-only">Ouvrir le menu</span>
                {mobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full">
            <div className="bg-white/95 backdrop-blur-lg border-t border-cyan-100 shadow-xl">
              <div className="px-4 py-6 space-y-4">
                
                {/* Navigation mobile avec style amélioré */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        location.pathname === item.href 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                          : 'text-blue-700 hover:bg-cyan-50 hover:text-cyan-600'
                      }`}
                    >
                      <span className="flex items-center">
                        {item.name === 'Don' && <FaHeart className="w-4 h-4 mr-2 text-red-500" />}
                        {item.name}
                      </span>
                      {location.pathname === item.href && (
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Réseaux sociaux mobiles */}
                <div className="flex justify-center space-x-4 py-4 border-t border-cyan-100">
                  <a href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm">
                    <FaYoutube className="w-5 h-5" />
                  </a>
                  <a href="https://www.tiktok.com/@lambj_julien?_t=ZM-8tIvC8b8qVZ&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-sm">
                    <FaTiktok className="w-5 h-5" />
                  </a>
                </div>

                {/* Bouton Don mobile */}
                <div className="pt-4">
                  <Link to="/don" className="block">
                    <button className="w-full py-3 px-6 text-base font-semibold text-white bg-gradient-to-r from-red-500 via-pink-500 to-red-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                      <span className="flex items-center justify-center">
                        <FaHeart className="w-4 h-4 mr-2 animate-pulse" />
                        Faire un Don
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer pour éviter que le contenu soit caché derrière la navbar fixed */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}