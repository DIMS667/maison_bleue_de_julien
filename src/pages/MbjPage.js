import React, { useState, useEffect } from 'react';
import {
  FaBookOpen,
  FaHandHoldingHeart,
  FaBullhorn,
  FaBriefcase,
  FaDownload,
} from 'react-icons/fa';
import groupe1 from '../assets/images/groupe1.jpg'
import groupe2 from '../assets/images/group2.jpg'
const MbjPage = () => {
  // État pour gérer la diapositive active
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images de l'équipe (à adapter à vos propres ressources)
  const teamImages = [
    groupe1, // Remplacez par vos chemins d’images
    groupe2,
    // '/images/equipe3.jpg',
  ];

  // Durée d’affichage de chaque slide (en ms)
  const slideInterval = 4000; 

  // Effet pour faire défiler automatiquement les slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % teamImages.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [teamImages.length]);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-5xl mx-auto py-20 px-4 md:px-8">
        
        {/* ================================
            EN-TÊTE / INTRO
        ================================ */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
            Bienvenue à la Maison Bleue de Julien (MBJ)
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Fondée en 2020 par <strong>Kiboum Jeanne</strong>, la Maison Bleue de Julien 
            est une organisation dévouée à l'accompagnement des autistes et au soutien 
            de leurs familles.
          </p>
        </header>

        {/* ================================
            SECTION : HISTOIRE ET CONTEXTE
        ================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Notre histoire</h2>
          <p className="leading-relaxed mb-4">
            La MBJ est née d’un besoin crucial d’accompagnement des personnes autistes dans un 
            environnement bienveillant et adapté à leurs besoins spécifiques. Inspirée par Julien, 
            un jeune homme autiste non verbal, et portée par la détermination de sa mère Kiboum Jeanne, 
            l'organisation s'est développée pour offrir :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Un espace sécurisé et inclusif pour les jeunes autistes.</li>
            <li>Des activités éducatives, créatives et sociales.</li>
            <li>Un soutien constant pour les familles des jeunes accompagnés.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            Depuis sa création, la MBJ a accompagné plus d'une <strong>quinzaine d'Autistes. </strong> 
            et collaboré avec de nombreux bénévoles, experts et partenaires pour 
            promouvoir l’inclusion des personnes autistes.
          </p>
        </section>

        {/* ================================
            SECTION : MISSIONS ET IMPACT
        ================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Nos missions et notre impact
          </h2>
          <div className="space-y-6">
            <p className="leading-relaxed">
              La Maison Bleue de Julien travaille activement à créer un monde où les
              autistes sont pleinement intégrés dans la société. Nous concentrons nos efforts sur :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Accompagner :</strong> offrir des programmes éducatifs, thérapeutiques et 
                sociaux adaptés.
              </li>
              <li>
                <strong>Sensibiliser :</strong> informer et former les familles, les professionnels 
                et le grand public sur l’autisme.
              </li>
              <li>
                <strong>Défendre :</strong> plaider pour les droits et l’inclusion des personnes 
                autistes dans la société.
              </li>
            </ul>
            <p className="leading-relaxed">
              À travers nos programmes, nous avons un impact direct sur les vies des personnes 
              autistes en renforçant leur autonomie, leur confiance en eux et leur intégration 
              dans des activités sociales et éducatives.
            </p>
          </div>
        </section>

        {/* ================================
            SECTION : PROJETS ET ACTIONS
        ================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Nos projets phares
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                <FaBookOpen />
                Ateliers éducatifs
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Des sessions hebdomadaires pour développer les compétences cognitives, 
                sociales et pratiques des personnes autistes.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                <FaHandHoldingHeart />
                Soutien parental
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Des groupes de parole et des formations pour outiller les familles 
                dans leur quotidien.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                <FaBullhorn />
                Journées de sensibilisation
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Des campagnes locales pour briser les stéréotypes et promouvoir l’inclusion 
                des personnes autistes.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                <FaBriefcase />
                Projets d’inclusion professionnelle
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Des collaborations avec des entreprises pour intégrer des personnes autistes 
                dans des milieux professionnels.
              </p>
            </div>
          </div>
        </section>

        {/* ================================
            SECTION : RAPPORTS ANNUELS
        ================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Nos rapports annuels
          </h2>
          <p className="leading-relaxed mb-4">
            Consultez nos rapports annuels pour découvrir l'évolution, les réussites 
            et les chiffres clés de la MBJ.
          </p>
          <div className="mt-4">
            <table className="min-w-full table-auto bg-white rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Année
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Titre
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Téléchargement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-700">2020-2022</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    Rapport annuel MBJ 2020-2022
                  </td>
                  <td className="px-4 py-2">
                  <a
                      href="/pdf/RAPPORT-ANNUEL-FINAL-MBJ-202O-2021-2022.pdf" // Assure-toi que le fichier est bien placé dans public/pdf/
                      className="text-blue-600 hover:text-blue-900 flex items-center gap-2"
                      download // Permet le téléchargement direct
                  >
                      <FaDownload />
                      Télécharger
                </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-700">2023</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    Rapport annuel MBJ 2023
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href="/pdf/La-Maiso- Bleue-de-Julien-Rapport-annuel-2023-v2.pdf"
                      className="text-blue-600 hover:text-blue-900 flex items-center gap-2"
                      download
                    >
                      <FaDownload />
                      Télécharger
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-700">2024</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    Rapport annuel MBJ 2024
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href="/pdf/Rapport annuel MBJ 2024.pdf"
                      className="text-blue-600 hover:text-blue-900 flex items-center gap-2"
                      download
                    >
                      <FaDownload />
                      Télécharger
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================================
            SECTION : EQUIPE (CAROUSEL)
        ================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Notre équipe</h2>
          <p className="leading-relaxed mb-6">
            Découvrez l'équipe dévouée derrière la Maison Bleue de Julien, qui œuvre chaque jour pour 
            soutenir et accompagner les personnes autistes. 
          </p>

          {/* 
            Carousel basique avec transition 
            - "currentSlide" détermine l'index de l'image actuelle
            - On utilise un translateX dynamique pour faire défiler les slides
          */}
          <div className="relative w-full overflow-hidden rounded shadow">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamImages.map((imgSrc, index) => (
                <div key={index} className="min-w-full flex-shrink-0">
                  <img
                    src={imgSrc}
                    alt={`Equipe ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 
            Petites puces de navigation (optionnel) 
            - Permet d'accéder à un slide spécifique
          */}
          <div className="flex justify-center mt-4 space-x-2">
            {teamImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </section>

        {/* ================================
            SECTION : APPEL À L'ACTION
        ================================ */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Contactez-nous</h2>
          <p className="leading-relaxed mb-6">
            Vous souhaitez en savoir plus ou nous soutenir ? N’hésitez pas à nous contacter.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nous contacter
          </a>
        </section>

      </main>
    </div>
  );
};

export default MbjPage;
