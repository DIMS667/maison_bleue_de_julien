"use client";
import act1 from "../../assets/images/actu1.jpg";
import act2 from "../../assets/images/actu2.jpg";
import act3 from "../../assets/images/actu3.jpg";
import act4 from "../../assets/images/actu4.jpg";
import act5 from "../../assets/images/actu5.jpg";
import act7 from "../../assets/images/actu7.jpg";
import React, { useState, useEffect } from "react";
import { MagicCard } from "../MagicCard";
import { ShimmerButton } from "../ShimmerButton"; // Assurez-vous que ce chemin est correct

const newsData = [
  {
    id: 1,
    image: act1,
    title: "Sensibilisation à l'autisme",
    description:
      "Une initiative visant à informer et sensibiliser le public sur l'autisme, en favorisant une meilleure compréhension et inclusion des personnes autistes.",
  },
  {
    id: 2,
    image: act2,
    title: "Autisme et fratrie",
    description:
      "Un programme dédié aux frères et sœurs d'enfants autistes, les aidant à mieux comprendre l'autisme et à renforcer les liens familiaux.",
  },
  {
    id: 3,
    image: act3,
    title: "Atelier créatif pour enfants autistes",
    description:
      "Un espace d'expression artistique conçu pour stimuler la créativité et le développement sensoriel des enfants autistes à travers diverses activités manuelles.",
  },
  {
    id: 4,
    image: act4,
    title: "Camp de vacances",
    description:
      "Un séjour ludique et éducatif offrant aux enfants autistes des activités adaptées, favorisant l'épanouissement personnel et les interactions sociales.",
  },
  {
    id: 5,
    image: act5,
    title: "Atelier de poterie",
    description: "Un atelier pratique permettant aux enfants autistes d'explorer la poterie comme moyen d'expression et de développement sensoriel.",
  },
  {
    id: 6,
    image: act7,
    title: "Salon International de la Santé au Cameroun – Stand de la Maison Bleue de Julien",
    description:
      "Du 22 au 26 juillet 2024, la Maison Bleue de Julien participera au Salon International de la Santé au Cameroun.",
  },
];

const NewsCards = () => {
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(6);
      } else if (window.innerWidth >= 640) {
        setDisplayCount(6);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-6 py-8 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-8">
        Dernières Actualités
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1200px]">
        {newsData.slice(0, displayCount).map((news) => (
          <MagicCard
            key={news.id}
            className="max-w-sm p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 mx-auto"
            gradientSize={200}
            gradientColor="rgba(0, 122, 255, 0.6)"
            gradientOpacity={0.9}
            gradientFrom="#6EC1E4"
            gradientTo="#B3E6F7"
          >
            <div className="flex flex-col items-center">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-65 object-cover rounded-md mb-6"
              />
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {news.description}
              </p>
            </div>
          </MagicCard>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <ShimmerButton
          background="rgba(0, 122, 255, 1)"
          onClick={() => window.location.href = "/actualite"} // Remplacez par votre route
          className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Plus d'actualité
        </ShimmerButton>
      </div>
    </div>
  );
};

export default NewsCards;
