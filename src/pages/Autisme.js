import React from 'react';
import {  FaHeart,  FaHandsHelping,  FaStethoscope, FaGlobe, FaBookOpen, FaPhone } from "react-icons/fa";
import { Puzzle, TrendingUp, Globe, Eye, Brain, Calendar, BookOpen,  X, Check, Award, MessageCircle, Wrench, Activity, UsersIcon, Heart } from "lucide-react";

const EnhancedAutismePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 min-h-screen">
      
      {/* En-tête avec design moderne */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <BookOpen className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Guide complet</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprendre l'autisme
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Informez-vous sur le trouble du spectre de l'autisme, ses signes, 
            son diagnostic, la journée mondiale de sensibilisation et les ressources 
            disponibles pour l'accompagnement et le soutien.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto py-16 px-4 md:px-8">

        {/* Section : Qu'est-ce que l'autisme ? */}
        <section className="mb-16" id="definition">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Puzzle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Qu'est-ce que l'autisme ?
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                L'autisme, également appelé trouble du spectre de l'autisme (TSA), est un 
                ensemble de troubles neurodéveloppementaux caractérisés par des difficultés 
                dans la communication et l'interaction sociale, ainsi que par des comportements, 
                des intérêts ou des activités à caractère restreint et répétitif.
              </p>
              <p>
                Les personnes autistes peuvent aussi présenter des particularités sensorielles 
                (hypersensibilité ou hyposensibilité) et des façons différentes d'apprendre ou 
                de percevoir leur environnement.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="font-medium text-blue-800">
                  <Brain className="inline w-5 h-5 mr-2" />
                  <strong>Important :</strong> Le terme « spectre » reflète la grande variabilité des manifestations de 
                  l'autisme : chaque personne autiste est unique, avec ses forces, ses défis 
                  et ses besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Statistiques */}
        <section className="mb-16" id="statistiques">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Quelques statistiques clés
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 mb-6">
              <p>
                Selon l'Organisation Mondiale de la Santé (OMS), environ <strong className="text-blue-600">1 enfant sur 100</strong> 
                présente un trouble du spectre de l'autisme dans le monde.
              </p>
            </div>

            {/* Stats en cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">1/100</div>
                <div className="text-sm text-gray-600">Enfants concernés</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center border border-cyan-100">
                <TrendingUp className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Diagnostic en hausse</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Toutes régions</div>
              </div>
            </div>

            <ul className="list-none space-y-3 mt-6">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>La prévalence est en hausse (notamment grâce à de meilleurs outils de détection).</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>La proportion de garçons diagnostiqués est plus élevée que celle des filles, mais les filles peuvent être sous-diagnostiquées.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>L'autisme se manifeste dans toutes les régions du monde et à tous les niveaux socio-économiques.</li>
            </ul>
          </div>
        </section>

        {/* Section : Signes et symptômes */}
        <section className="mb-16" id="signes-symptomes">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Signes et symptômes
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Les manifestations de l'autisme varient selon les individus. 
              Toutefois, on retrouve souvent :
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-bold text-blue-700 text-lg">
                      Difficultés de communication et d'interaction
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Retard ou absence de langage verbal</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Utilisation atypique du langage (écholalie, scripts…)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Contacts visuels moins fréquents ou inconfortables</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Difficulté à interpréter les gestes et expressions faciales</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
                  <div className="flex items-center mb-4">
                    <Brain className="w-6 h-6 text-cyan-600 mr-3" />
                    <h3 className="font-bold text-cyan-700 text-lg">
                      Centres d'intérêt restreints et comportements répétitifs
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Intérêt très marqué pour un sujet précis (ex. : trains, dinosaures…)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Routines et rituels stricts (résistance au changement)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Comportements répétitifs (battements de mains, balancements…)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Forte sensibilité sensorielle (bruit, lumière, toucher…)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Diagnostic */}
        <section className="mb-16" id="diagnostic">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <FaStethoscope className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Diagnostic de l'autisme
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Le diagnostic de l'autisme est un processus multidisciplinaire qui 
                implique souvent des professionnels (pédiatres, neuropsychologues, 
                psychiatres, psychologues spécialisés, etc.). Il repose sur 
                l'observation des comportements, des évaluations cliniques et parfois 
                des tests standardisés.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-500">
                <p className="text-lg text-green-800">
                  <Calendar className="inline w-5 h-5 mr-2" />
                  <strong>Dépistage précoce :</strong> Un diagnostic posé dès les premières années 
                  de vie peut permettre une meilleure prise en charge et un 
                  accompagnement plus adapté au développement de l'enfant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Accompagnement */}
        <section className="mb-16" id="accompagnement">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <FaHandsHelping className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Accompagnement et soutien
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Il n'existe pas de « traitement » unique pour l'autisme. 
              Cependant, différentes interventions et stratégies peuvent aider 
              la personne autiste à développer ses compétences. Parmi les approches 
              reconnues :
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: "Interventions comportementales et éducatives", desc: "(ex. ABA, TEACCH, ESDM)", icon: <BookOpen className="w-6 h-6" /> },
                { title: "Orthophonie", desc: "pour améliorer la communication verbale et non verbale", icon: <MessageCircle className="w-6 h-6" /> },
                { title: "Ergothérapie", desc: "pour travailler l'intégration sensorielle et l'autonomie", icon: <Wrench className="w-6 h-6" /> },
                { title: "Psychomotricité", desc: "pour aider à la motricité globale et fine", icon: <Activity className="w-6 h-6" /> },
                { title: "Groupes de socialisation", desc: "pour favoriser l'interaction sociale", icon: <UsersIcon className="w-6 h-6" /> },
                { title: "Soutien familial", desc: "routines structurantes et collaboration", icon: <Heart className="w-6 h-6" /> }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-100">
                  <div className="flex items-center mb-2">
                    <span className="text-cyan-600 mr-3">{item.icon}</span>
                    <h4 className="font-bold text-cyan-700">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section : Journée mondiale */}
        <section className="mb-16" id="journee-autisme">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <FaGlobe className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Journée mondiale de sensibilisation à l'autisme
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">2 AVRIL</div>
                <div className="text-lg text-blue-800">Journée mondiale de sensibilisation</div>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Proclamée par l'Assemblée générale des Nations Unies en 2007, elle encourage 
                les gouvernements et la société civile à sensibiliser le public à l'autisme.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                À travers le monde, de nombreux événements sont organisés : conférences, 
                campagnes d'information, illuminations de monuments en bleu, etc. L'objectif 
                est de promouvoir une meilleure compréhension de l'autisme et de lutter contre les préjugés.
              </p>
            </div>
          </div>
        </section>

        {/* Section : Mythes et réalités */}
        <section className="mb-16" id="mythes-realite">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Mythes et réalités
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  mythe: "Les personnes autistes n'éprouvent pas d'émotions.",
                  realite: "Elles ressentent des émotions tout aussi intensément que les autres, mais peuvent les exprimer différemment."
                },
                {
                  mythe: "L'autisme est causé par un mauvais parenting.",
                  realite: "L'autisme est un trouble neurodéveloppemental et n'est pas lié à l'éducation reçue ou à un manque d'affection."
                },
                {
                  mythe: "Toutes les personnes autistes ont un « syndrome du savant ».",
                  realite: "Seule une minorité de personnes autistes présentent des capacités extraordinaires dans un domaine précis. La plupart ont des profils variés, avec leurs forces et leurs besoins."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                  <p className="font-bold text-red-600 mb-3 flex items-center">
                    <X className="w-5 h-5 mr-2" />
                    Mythe : {item.mythe}
                  </p>
                  <p className="text-green-700 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Réalité : {item.realite}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section : Ressources */}
        <section className="mb-16" id="ressources">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <FaBookOpen className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Ressources et liens utiles
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Pour en savoir plus sur l'autisme ou trouver du soutien, 
              consultez ces sites et associations :
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://www.autisme-france.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold group-hover:text-blue-800">Autisme France</span>
                </div>
              </a>
              
              <a
                href="https://www.sante.gouv.fr/prevention-en-sante/autisme-et-troubles-du-neuro-developpement/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-cyan-600 font-semibold group-hover:text-cyan-800">Ministère de la Santé – Autisme et TND</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section : Contact */}
        <section className="mb-16" id="contact">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <FaPhone className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Besoin d'informations ou d'aide ?
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Si vous cherchez des conseils, un accompagnement ou simplement 
                échanger avec des personnes concernées, n'hésitez pas à nous 
                contacter via le formulaire de contact sur ce site.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="text-lg text-blue-800 font-medium">
                  <FaHeart className="inline w-5 h-5 text-red-400 mr-2" />
                  Ensemble, nous pouvons favoriser une meilleure compréhension de 
                  l'autisme et construire un environnement plus inclusif pour tous.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EnhancedAutismePage;