import React from "react";
import { MagicCard } from "../MagicCard"; 
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

const upcomingPrograms = [
  {
    id: 1,
    title: "",
    image: actu,
   
  },
  {
    id: 2,
    title: "",
    image: actu1,
   
  },
  {
    id: 3,
    title: "",
    image: actu2,
   
  },
];

const pastPrograms = [
  {
    id: 1,
    image: prog1,
    title: "Sensibilisation à l'autisme",
    description:
      "Une initiative visant à informer et sensibiliser le public sur l'autisme, en favorisant une meilleure compréhension et inclusion des personnes autistes.",
  },
  {
    id: 2,
    image: prog2,
    title: "Autisme et fratrie",
    description:
      "Un programme dédié aux frères et sœurs d'enfants autistes, les aidant à mieux comprendre l'autisme et à renforcer les liens familiaux.",
  },
  {
    id: 3,
    image: prog3,
    title: "Atelier créatif pour enfants autistes",
    description:
      "Un espace d'expression artistique conçu pour stimuler la créativité et le développement sensoriel des enfants autistes à travers diverses activités manuelles.",
  },
  {
    id: 4,
    image: prog4,
    title: "Camp de vacances",
    description:
      "Un séjour ludique et éducatif offrant aux enfants autistes des activités adaptées, favorisant l'épanouissement personnel et les interactions sociales.",
  },
  {
    id: 5,
    image: prog5,
    title: "Atelier de poterie",
    description:
      "Un atelier pratique permettant aux enfants autistes d'explorer la poterie comme moyen d'expression et de développement sensoriel.",
  },
  {
    id: 6,
    image: prog6,
    title: "Salon International de la Santé au Cameroun – Stand de la Maison Bleue de Julien",
    description:
      "Du 22 au 26 juillet 2024, la Maison Bleue de Julien participera au Salon International de la Santé au Cameroun.",
  },
];


const ProgramsSection = () => {
  return (
    <>
      {/* Programmes à venir */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Programmes à venir
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upcomingPrograms.map((program) => (
            <MagicCard
              key={program.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              gradientSize={200}
              gradientColor="rgba(0, 122, 255, 0.6)"
              gradientOpacity={0.9}
              gradientFrom="#6EC1E4"
              gradientTo="#B3E6F7"
            >
              <div className="flex flex-col items-center">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-65 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {program.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>
      </section>

      {/* Anciens Programmes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Anciens Programmes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pastPrograms.map((program) => (
            <MagicCard
              key={program.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              gradientSize={200}
              gradientColor="rgba(0, 122, 255, 0.6)"
              gradientOpacity={0.9}
              gradientFrom="#FFD700"
              gradientTo="#FFECB3"
            >
              <div className="flex flex-col items-center">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-65 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {program.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProgramsSection;
