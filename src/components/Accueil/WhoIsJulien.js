import React from "react";
import J1 from "../../assets/images/WhatsApp Image 2024-10-07 at 14.08.52_331a06cd.jpg";
import J3 from "../../assets/images/WhatsApp Image 2024-10-15 at 00.37.46_858a1b4d.jpg";
import { FaInfoCircle } from "react-icons/fa";
import { TypingAnimation } from "../TypingAnimation";
import { ShimmerButton } from "../ShimmerButton";
import { Link } from "react-router-dom";

function WhoIsJulien() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-gradient-to-b from-blue-50 to-white py-8 relative">

      {/* Section Images */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {/* Image 1 */}
        <div className="flex-shrink-0 transform rotate-[-3deg] hover:rotate-0 transition duration-300">
          <img
            src={J1}
            alt="Julien Image 1"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-lg shadow-lg border-4 border-gray-300"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-shrink-0 transform scale-105 hover:scale-110 transition duration-300">
          <img
            src={J3}
            alt="Julien Image 3"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      </div>

      {/* Section Texte */}
      <div className="lg:w-3/4 text-center mt-4">
        <TypingAnimation
          duration={100}
          delay={500}
          className="text-blue-500 text-4xl lg:text-5xl font-bold text-center"
        >
          Qui est Julien ?
        </TypingAnimation>
        <p className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
          C’est le prototype identitaire de la cible de la MBJ.
          Julien c’est une personne autiste qui a besoin de tout le soutien nécessaire pour son développement et son insertion socioprofessionnelle.
          Julien c’est aussi ce frère ou sœur, ce parent ou ami d’une personne autiste et qui a besoin de soutien moral, informatif etc.
          afin de lui apporter un appui de qualité. Julien c’est toi, c’est moi, c’est toute personne physique ou morale qui accompagne cette association.
        </p>

        {/* Bouton Shimmer */}
        <br></br>
        <div className="mt-4 flex justify-center">
          <Link to="/julien">
            <ShimmerButton
              shimmerColor="#ffffff"
              shimmerSize="0.05em"
              shimmerDuration="3s"
              borderRadius="12px"
              background="rgba(0, 122, 255, 1)"
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition duration-300"
            >
              <FaInfoCircle className="text-white text-base sm:text-lg" />
              Voulez-vous en savoir plus sur moi ? 🔍
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhoIsJulien;
