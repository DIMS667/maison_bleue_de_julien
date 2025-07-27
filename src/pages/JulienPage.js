import React from 'react';
import juju from '../assets/images/juju.jpg'
import juju_et_pere from '../assets/images/moi et mon pere.jpg'
import { FaFacebook, FaInstagram, FaYoutube, FaHeart, FaUsers, FaSmile, FaPalette, FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const JulienPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* En-tête héroïque */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <FaHeart className="w-6 h-6 mr-3 text-red-300" />
            <span className="text-lg font-semibold">Notre Julien</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Salut, c'est Julien 👋
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Découvrez mon histoire, mes passions et mon quotidien à la Maison Bleue
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* ======================================
            SECTION : MON HISTOIRE
        ====================================== */}
        <section className="mb-16">
          {/* Badge de section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
              <FaSmile className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-blue-700 font-semibold">Mon parcours</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Mon histoire
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Je m'appelle Julien, <strong className="text-blue-700">né le 8 novembre 2005</strong> et je suis autiste. 
                Bien que je ne parle pas, j'arrive à partager mes émotions et mon affection 
                grâce à mon grand sourire. On dit souvent que je suis un garçon très 
                chaleureux, toujours prêt à faire un câlin (ou à faire une sieste !).
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500 relative">
                <FaQuoteLeft className="absolute top-4 right-6 text-blue-300 w-6 h-6 opacity-60" />
                <p className="text-lg text-blue-800 leading-relaxed pr-12">
                  Ma maman est partie de notre expérience et vécu pour créer l'association la Maison Bleue de Julien.
                  Ainsi, elle peut apporter sa modeste contribution et surtout ses conseils tirés de mon parcours (positif et négatif) pour accompagner ou conseiller d'autres parents.
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Parfois, je suis un peu paresseux, mais je mets tout mon cœur dans 
                ce qui me passionne ! Et croyez-moi, ça vaut la peine d'être patient 
                avec moi, car j'ai beaucoup d'amour à donner.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : QUELQUES PHOTOS DE MOI
        ====================================== */}
        <section className="mb-16">
          {/* Badge de section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full border border-cyan-200 mb-6">
              <FaPalette className="w-5 h-5 text-cyan-600 mr-3" />
              <span className="text-cyan-700 font-semibold">Galerie photos</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Quelques photos de moi 📷
            </h2>
          </div>
         
          <div className="grid gap-8 md:grid-cols-2">
            {/* Photo 1 */}
            <div className="group relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img
                  src={juju}
                  alt="Julien souriant"
                  className="w-full h-80 object-cover rounded-2xl mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                  Mon sourire est mon meilleur moyen de 
                  montrer combien je vous apprécie.
                </p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-cyan-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img
                  src={juju_et_pere}
                  alt="Julien pendant une activité"
                  className="w-full h-80 object-cover rounded-2xl mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                  Ici, je fais une petite activité de peinture avec mon
                  père. 😄
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : MON QUOTIDIEN À LA MAISON BLEUE
        ====================================== */}
        <section className="mb-16">
          {/* Badge de section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 rounded-full border border-red-200 mb-6">
              <FaUsers className="w-5 h-5 text-red-600 mr-3" />
              <span className="text-red-700 font-semibold">Vie associative</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Mes amis et moi au sein de la MBJ 🏠
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A l'association la Maison Bleue de Julien, 
                j'ai la chance d'être avec mes pairs autistes. 
                Nous avons plusieurs activités qui sont préparées pour nous. 
                Aucune activité n'est faite au hasard. 
                Elle a toujours un objectif derrière soit la motricité fine/globale, les interactions sociales, l'autonomie...
              </p>
              
              {/* Liste des amis avec style améliorer */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <FaHeart className="w-5 h-5 mr-3 text-red-500" />
                  Mes amis de la MBJ
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Je connais tous mes amis qui fréquentent l'association. 
                  Il y a <strong className="text-red-700">Armand, Samuel, Maëva, Erica, Fred, Ken, Florian, Thomas.</strong>
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                On s'amuse tout en apprenant dans les ateliers créatifs, culinaire, Classe d'Apprentissage au Travail.
                Vous pouvez visualiser nos travaux à travers les photos et vidéos dans les différents médias sociaux de l'association la Maison Bleue de Julien.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : MON MESSAGE
        ====================================== */}
        <section className="mb-16">
          {/* Badge de section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
              <FaHeart className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-blue-700 font-semibold">Message personnel</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Mon petit mot pour vous 💙
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-cyan-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 space-y-6">
              <p className="text-xl text-blue-100 leading-relaxed">
                Merci d'avoir pris le temps de me découvrir, ainsi 
                que ma famille. Nous sommes tous unis pour faire vivre 
                la Maison Bleue et apporter du soutien à ceux qui en ont besoin. 
                Même si je suis non verbal, je ne manque pas de façons pour 
                communiquer mes sentiments. 
              </p>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                J'espère que vous pourrez, vous aussi, trouver un espace 
                où vous sentir libre d'être vous-même. Et si jamais 
                vous passez par la Maison Bleue, je serai heureux de vous 
                offrir mon plus beau sourire !
              </p>
              
              {/* Bouton d'action */}
              <div className="pt-6">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <span>Nous contacter</span>
                  <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : RÉSEAUX SOCIAUX
        ====================================== */}
        <section className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
                <FaHeart className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-blue-700 font-semibold">Restez connectés</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Rejoignez-nous sur nos réseaux sociaux !
              </h2>
              <p className="text-lg text-gray-600">
                Suivez nos aventures et découvrez notre quotidien
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JulienPage;