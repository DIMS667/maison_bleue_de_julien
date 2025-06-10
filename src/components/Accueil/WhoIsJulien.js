import React from "react";
import J1 from "../../assets/images/WhatsApp Image 2024-10-07 at 14.08.52_331a06cd.jpg";
import J3 from "../../assets/images/WhatsApp Image 2024-10-15 at 00.37.46_858a1b4d.jpg";
import { FaInfoCircle, FaHeart } from "react-icons/fa";
import { TypingAnimation } from "../TypingAnimation";
import { ShimmerButton } from "../ShimmerButton";
import { Link } from "react-router-dom";

function WhoIsJulien() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 relative overflow-hidden">
      
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-red-300 rounded-full blur-2xl"></div>
      </div>

      {/* Badge d'introduction */}
      <div className="relative z-10 mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 shadow-lg">
          <FaHeart className="w-4 h-4 text-red-500 mr-2" />
          <span className="text-sm font-semibold text-blue-800">Notre mascotte</span>
        </div>
      </div>

      {/* Section Images - Style amélioré */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
        {/* Image 1 - Julien */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="flex-shrink-0 transform rotate-[-3deg] hover:rotate-0 transition duration-500 group-hover:scale-105">
            <img
              src={J1}
              alt="Julien - Notre mascotte"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-xl border-4 border-white group-hover:shadow-2xl transition-all duration-500"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <FaHeart className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Image 2 - Julien */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="flex-shrink-0 transform scale-105 hover:scale-110 transition duration-500">
            <img
              src={J3}
              alt="Julien - En action"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-xl border-4 border-white group-hover:shadow-2xl transition-all duration-500"
            />
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">J</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Texte - Style amélioré */}
      <div className="relative z-10 lg:w-3/4 max-w-4xl text-center mt-4">
        {/* Titre avec TypingAnimation conservé */}
        <div className="mb-8">
          <TypingAnimation
            duration={100}
            delay={500}
            className="text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent"
          >
            Qui est Julien ?
          </TypingAnimation>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Texte descriptif avec mise en forme améliorée */}
        <div className="mt-8 mb-8">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            C'est le <span className="font-semibold text-blue-800">prototype identitaire</span> de la cible de la MBJ.
            <span className="font-semibold text-cyan-600"> Julien</span> c'est une personne autiste qui a besoin de tout le soutien nécessaire pour son développement et son insertion socioprofessionnelle.
            <span className="font-semibold text-blue-800"> Julien</span> c'est aussi ce frère ou sœur, ce parent ou ami d'une personne autiste et qui a besoin de soutien moral, informatif etc.
            afin de lui apporter un appui de qualité. <span className="font-semibold text-cyan-600">Julien</span> c'est <span className="text-blue-600 font-medium">toi</span>, c'est <span className="text-cyan-600 font-medium">moi</span>, c'est toute personne physique ou morale qui accompagne cette association.
          </p>
        </div>

        {/* Citation inspirante ajoutée */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500 relative mb-10 mx-auto max-w-2xl">
          <p className="text-base sm:text-lg text-blue-800 font-medium italic leading-relaxed pr-8 sm:pr-12">
            "Julien incarne l'espoir et la détermination de notre communauté à créer un monde plus inclusif."
          </p>
        </div>

        {/* Bouton Shimmer avec texte blanc forcé */}
        <div className="mt-8 flex justify-center">
          <Link to="/julien">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <ShimmerButton
                shimmerColor="#ffffff"
                shimmerSize="0.05em"
                shimmerDuration="3s"
                borderRadius="12px"
                background="linear-gradient(135deg, rgba(37, 99, 235, 1) 0%, rgba(6, 182, 212, 1) 100%)"
                className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold flex items-center justify-center gap-3 hover:scale-105 transition duration-300 shadow-xl !text-white [&>*]:!text-white"
              >
                <FaInfoCircle className="!text-white text-base sm:text-lg" />
                <span className="!text-white">Voulez-vous en savoir plus sur moi ? 🔍</span>
              </ShimmerButton>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhoIsJulien;