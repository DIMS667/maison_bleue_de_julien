
// import maison_bleu from '../../assets/images/maison_bleu.jpg';


// import React from "react";

// const CompanyIntro = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center bg-white px-8 py-16 lg:py-24">
//       {/* Logo Section */}
//       <div className="flex-shrink-0 lg:mr-16 mb-8 lg:mb-0">
//         <img
//           src={maison_bleu} // Remplace par le bon chemin vers ton logo
//           alt="La Maison Bleue Logo"
//           className="w-60 h-auto lg:w-80 xl:w-96 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="max-w-3xl text-center lg:text-left">
//         {/* Main Title */}
//         <h1
//           className="text-4xl lg:text-5xl font-extrabold text-blue-500 mb-4 tracking-wide"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           La Maison Bleue
//         </h1>
//         {/* Subtitle */}
//         <h2
//           className="text-xl lg:text-2xl font-medium text-gray-900 mb-6"
//           style={{ fontFamily: "'Roboto Slab', serif" }}
//         >
//           Qu'est-ce que la Maison Bleue de Julien ?
//         </h2>
//         {/* Description */}
//         <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
//           La Maison Bleue de Julien est une association dédiée à offrir un espace
//           inclusif et chaleureux pour les familles et les individus touchés par
//           l'autisme. Nous travaillons à sensibiliser, accompagner et créer des
//           opportunités pour une meilleure intégration sociale.
//         </p>
//         <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
//           Notre mission est d'offrir un soutien concret et une communauté
//           bienveillante pour tous ceux qui en ont besoin.
//         </p>

//         {/* Horizontal Line */}
//         <div className="border-t border-gray-300 w-full mb-6"></div>

//         {/* Button */}
//         <div>
//           <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md text-lg hover:bg-blue-600 transition">
//             En savoir plus
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyIntro;




import maison_bleu from "../../assets/images/maison_bleu.jpg";
import React from "react";
import { motion } from "framer-motion";

const CompanyIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-100 px-8 py-16 lg:py-24"
    >
      {/* Logo Section */}
      <div className="flex-shrink-0 lg:mr-16 mb-8 lg:mb-0">
        <motion.img
          src={maison_bleu}
          alt="La Maison Bleue Logo"
          className="w-60 h-auto lg:w-80 xl:w-96 rounded-lg shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-2xl"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl text-center lg:text-left">
        {/* Main Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          La Maison Bleue de Julien
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl lg:text-2xl font-medium text-gray-800 mb-6"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          Qu'est-ce que la Maison Bleue de Julien ?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4"
        >
          La Maison Bleue de Julien est une association dédiée à offrir un
          espace inclusif et chaleureux pour les personnes autistes et leurs familles. Nous travaillons pour une meilleure insertion socio-professionnelle.
          Notre mission est d'offrir un véritable lieu de vie ouvert à tous, basée sur des valeurs.
        </motion.p>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6"
        >
          Notre mission est d'offrir un soutien concret et une communauté
          bienveillante pour tous ceux qui en ont besoin.
        </motion.p>

        {/* Horizontal Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="border-t border-gray-300 w-3/4 lg:w-full mx-auto lg:mx-0 mb-6"
        ></motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="/mbj">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md text-lg hover:bg-gradient-to-l hover:shadow-lg transition transform hover:scale-105">
            Découvrez nos projets
          </button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyIntro;






