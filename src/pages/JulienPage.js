import React from 'react';
import juju from '../assets/images/juju.jpg'
import juju_et_pere from '../assets/images/moi et mon pere.jpg'
// import mere from '../assets/images/moi et ma mere.jpg'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const JulienPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-5xl mx-auto py-20 px-4 md:px-8">
        
        {/* ======================================
            EN-TÊTE / INTRO
        ====================================== */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
            Salut, c’est Julien 👋
          </h1>
        </header>

        {/* ======================================
            SECTION : MON HISTOIRE
        ====================================== */}
        <section className="mb-12" id="presentation">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Mon histoire
          </h2>
          <p className="leading-relaxed mb-4">
            Je m’appelle Julien, <strong>né le 8 novembre 2005</strong> et je suis autiste. 
            Bien que je ne parle pas, j’arrive à partager mes émotions et mon affection 
            grâce à mon grand sourire. On dit souvent que je suis un garçon très 
            chaleureux, toujours prêt à faire un câlin (ou à faire une sieste !).
          </p>
          <p className="leading-relaxed mb-4">
          Ma maman est partie de notre  expérience et vécu pour créer l'association la Maison Bleue de Julien.
          Ainsi, elle peut apporter sa modeste contribution et surtout ses conseils tirés de mon parcours (positif et négatif) pour accompagner ou conseiller d'autres parents.
          </p>
          <p className="leading-relaxed">
            Parfois, je suis un peu paresseux, mais je mets tout mon cœur dans 
            ce qui me passionne ! Et croyez-moi, ça vaut la peine d’être patient 
            avec moi, car j’ai beaucoup d’amour à donner.
          </p>
        </section>

        {/* ======================================
            SECTION : MA FAMILLE
        ====================================== */}


        {/* ======================================
            SECTION : QUELQUES PHOTOS DE MOI
        ====================================== */}
        <section className="mb-12" id="photos-julien">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Quelques photos de moi 📷
          </h2>
         
          <div className="grid gap-6 md:grid-cols-2">
            {/* Photo 1 */}
            <div className="bg-white rounded shadow p-4">
             
              <img
                src={juju}
                alt="Julien souriant"
                className="w-full h-64 object-cover rounded mb-3"
              />
              <p className="text-sm text-gray-600">
                Mon sourire est mon meilleur moyen de 
                montrer combien je vous apprécie.
              </p>
            </div>

            {/* Photo 2 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src={juju_et_pere}
                alt="Julien pendant une activité"
                className="w-full h-64 object-cover rounded mb-3"
              />
              <p className="text-sm text-gray-600">
                Ici, je fais une petite activité de peinture avec mon
                père. 😄
              </p>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : MON QUOTIDIEN À LA MAISON BLEUE
        ====================================== */}
        <section className="mb-12" id="quotidien">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Mes amis et moi au sein de la MBJ 🏠
          </h2>
          <p className="leading-relaxed mb-4">
          A l'association la Maison Bleue de Julien, 
          j'ai la chance d'être avec mes pairs autistes. 
          Nous avons plusieurs activités qui sont préparés pour nous. 
          Aucune activité n'est faite au hasard. 
          Elle a toujours un objectif derrière soit la motricité fine/globale, les interactions sociales, l'autonomie...

          </p>
          <p className="leading-relaxed">
          Je connais tous mes amis qui fréquentent l'association. 
          Il y'a <strong>Armand, Samuel, Maëva, Erica, Fred, Ken, Florian, Thomas. </strong>
          On s'amuse tout en apprenant dans les ateliers créatifs, culinaire, Classe d'Apprentissage au Travail.
           Vous pouvez visualiser nos travaux à travers les photos et vidéos dans les différents médias sociaux de l'association la Maison Bleue de Julien.
          </p>
        </section>

        {/* ======================================
            SECTION : MON MESSAGE
        ====================================== */}
        <section className="mb-12" id="message-julien">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Mon petit mot pour vous 💙
          </h2>
          <p className="leading-relaxed mb-4">
            Merci d’avoir pris le temps de me découvrir, ainsi 
            que ma famille. Nous sommes tous unis pour faire vivre 
            la Maison Bleue et apporter du soutien à ceux qui en ont besoin. 
            Même si je suis non verbal, je ne manque pas de façons pour 
            communiquer mes sentiments. 
          </p>
          <p className="leading-relaxed">
            J’espère que vous pourrez, vous aussi, trouver un espace 
            où vous sentir libre d’être vous-même. Et si jamais 
            vous passez par la Maison Bleue, je serai heureux de vous 
            offrir mon plus beau sourire !
          </p>
        </section>

        {/* reseau */}
              <div className="mt-12 text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  Rejoignez-nous sur nos réseaux sociaux !
                </p>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <FaFacebook size={32} style={{ color: "#1877F2" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <FaInstagram size={32} style={{ color: "#E4405F" }} />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <FaYoutube size={32} style={{ color: "#FF0000" }} />
                  </a>
                </div>
              </div>
      </main>
    </div>
  );
};

export default JulienPage;
