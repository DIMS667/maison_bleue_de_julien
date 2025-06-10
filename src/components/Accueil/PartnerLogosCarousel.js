import React from "react";
import { FaHandshake, FaHeart } from "react-icons/fa";

// Import des logos des partenaires
import part1 from "../../assets/images/part1.png";
import part from "../../assets/images/part.jpg";
import part3 from "../../assets/images/part3.jpg";
import part4 from "../../assets/images/part4.jpg";
import part5 from "../../assets/images/part5.jpg";
import part6 from "../../assets/images/part6.jpg";
import part7 from "../../assets/images/part7.jpg";
import part8 from "../../assets/images/part8.jpg";
import part9 from "../../assets/images/part9.jpg";
import part10 from "../../assets/images/part10.jpg";
import part11 from "../../assets/images/part11.jpg";
import part12 from "../../assets/images/part12.jpg";
import part13 from "../../assets/images/part13.jpg";
import part14 from "../../assets/images/part14.jpg";
import part15 from "../../assets/images/part15.jpg";
import part16 from "../../assets/images/part16.jpg";
import part17 from "../../assets/images/part17.jpg";
import part18 from "../../assets/images/part18.jpg";
import part19 from "../../assets/images/part19.jpg";
import part20 from "../../assets/images/part20.jpg";

const SimplePartnerCarousel = () => {
  // Tableau des logos
  const logos = [
    part1, part, part3, part4, part5, part6, part7, part8, part9, part10,
    part11, part12, part13, part14, part15, part16, part17, part18, part19, part20,
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* En-tête simple et élégant */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <FaHandshake className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800">Nos partenaires</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Ils nous accompagnent
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ensemble, nous bâtissons un réseau solide pour un avenir plus inclusif.
          </p>
        </div>

        {/* Grille simple des logos avec animation */}
        <div className="relative">
          {/* Animation de défilement infini */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* Premier set de logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-32 mx-4 group"
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Partenaire ${index + 1}`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplication pour l'effet infini */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-32 mx-4 group"
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Partenaire ${index + 1}`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message de remerciement simple */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-2xl mx-auto">
            <FaHeart className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Un grand merci !</h3>
            <p className="text-gray-600">
              Votre confiance et votre soutien rendent notre mission possible. 
              Ensemble, nous créons un monde plus inclusif.
            </p>
          </div>
        </div>
      </div>

      {/* Styles pour l'animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SimplePartnerCarousel;