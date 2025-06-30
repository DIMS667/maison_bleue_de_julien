import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaHandHoldingHeart, FaBullhorn, FaBriefcase, FaDownload, FaChevronLeft, FaChevronRight, FaHeart, FaUsers, FaCalendar, FaFileAlt } from 'react-icons/fa';
import { BookOpen, Heart, Megaphone, Briefcase, Users, Target, Award, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import groupe1 from '../assets/images/groupe1.jpg';
import groupe2 from '../assets/images/group2.jpg';

const EnhancedMbjPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images de l'équipe
  const teamImages = [
    groupe1,
    groupe2,
  ];

  const slideInterval = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % teamImages.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [teamImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 min-h-screen">
      
      {/* En-tête héroïque */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Heart className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Notre histoire</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La Maison Bleue de Julien
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Fondée en 2020 par <span className="font-semibold text-yellow-300">Kiboum Jeanne</span>, 
            une organisation dévouée à l'accompagnement des autistes et au soutien de leurs familles.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto py-16 px-4 md:px-8">

        {/* Section : Notre histoire */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Notre histoire
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                La MBJ est née d'un besoin crucial d'accompagnement des personnes autistes dans un 
                environnement bienveillant et adapté à leurs besoins spécifiques. Inspirée par <strong className="text-blue-600">Julien</strong>, 
                un jeune homme autiste non verbal, et portée par la détermination de sa mère Kiboum Jeanne.
              </p>
              
              {/* Points clés en grid */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-blue-700">Espace sécurisé</h4>
                  </div>
                  <p className="text-sm text-gray-600">Un environnement inclusif pour les jeunes autistes</p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-100">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-cyan-600 mr-2" />
                    <h4 className="font-semibold text-cyan-700">Activités adaptées</h4>
                  </div>
                  <p className="text-sm text-gray-600">Éducatives, créatives et sociales</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    <h4 className="font-semibold text-blue-700">Soutien familial</h4>
                  </div>
                  <p className="text-sm text-gray-600">Accompagnement constant des familles</p>
                </div>
              </div>

              {/* Statistique importante */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-500">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  <p className="text-lg text-green-800">
                    <strong>Plus de 15 autistes accompagnés</strong> depuis notre création, avec de nombreux 
                    bénévoles et partenaires pour promouvoir l'inclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Missions et impact */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Nos missions et notre impact
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                La Maison Bleue de Julien travaille activement à créer un monde où les
                autistes sont pleinement intégrés dans la société. Nous concentrons nos efforts sur :
              </p>
              
              {/* Missions en cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-blue-700 text-lg mb-3">Accompagner</h3>
                    <p className="text-gray-600">Offrir des programmes éducatifs, thérapeutiques et sociaux adaptés</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-cyan-700 text-lg mb-3">Sensibiliser</h3>
                    <p className="text-gray-600">Informer et former les familles, professionnels et le grand public</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-red-700 text-lg mb-3">Défendre</h3>
                    <p className="text-gray-600">Plaider pour les droits et l'inclusion des personnes autistes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">
                  <Heart className="inline w-5 h-5 text-red-400 mr-2" />
                  À travers nos programmes, nous avons un impact direct en renforçant l'autonomie, 
                  la confiance et l'intégration sociale des personnes autistes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Projets phares */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Nos projets phares
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-700 text-lg">Ateliers éducatifs</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Des sessions hebdomadaires pour développer les compétences cognitives, 
                  sociales et pratiques des personnes autistes.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-cyan-700 text-lg">Soutien parental</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Des groupes de parole et des formations pour outiller les familles 
                  dans leur quotidien.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <Megaphone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-red-700 text-lg">Journées de sensibilisation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Des campagnes locales pour briser les stéréotypes et promouvoir l'inclusion 
                  des personnes autistes.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-green-700 text-lg">Inclusion professionnelle</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Des collaborations avec des entreprises pour intégrer des personnes autistes 
                  dans des milieux professionnels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Rapports annuels */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <FaFileAlt className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Nos rapports annuels
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Consultez nos rapports annuels pour découvrir l'évolution, les réussites 
              et les chiffres clés de la MBJ.
            </p>
            
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                <div className="grid grid-cols-3 gap-4 text-white font-semibold">
                  <div>Année</div>
                  <div>Titre</div>
                  <div>Téléchargement</div>
                </div>
              </div>
              
              <div className="bg-white">
                {[
                  { year: "2020-2022", title: "Rapport annuel MBJ 2020-2022", file: "/pdf/RAPPORT-ANNUEL-FINAL-MBJ-202O-2021-2022.pdf" },
                  { year: "2023", title: "Rapport annuel MBJ 2023", file: "/pdf/La-Maiso- Bleue-de-Julien-Rapport-annuel-2023-v2.pdf" },
                  { year: "2024", title: "Rapport annuel MBJ 2024", file: "/pdf/Rapport annuel MBJ 2024.pdf" }
                ].map((report, index) => (
                  <div key={index} className={`grid grid-cols-3 gap-4 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                    <div className="text-sm font-medium text-gray-900">{report.year}</div>
                    <div className="text-sm text-gray-700">{report.title}</div>
                    <div>
                      <a
                        href={report.file}
                        className="group inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                        download
                      >
                        <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform duration-200" />
                        Télécharger
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section : Notre équipe (Carousel amélioré) */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Notre équipe
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Découvrez l'équipe dévouée derrière la Maison Bleue de Julien, qui œuvre chaque jour pour 
              soutenir et accompagner les personnes autistes.
            </p>

            {/* Carousel moderne */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {teamImages.map((imgSrc, index) => (
                    <div key={index} className="min-w-full flex-shrink-0 relative">
                      <img
                        src={imgSrc}
                        alt={`Équipe ${index + 1}`}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Notre équipe dévouée</h3>
                        <p className="text-blue-100">Ensemble pour l'inclusion</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contrôles du carousel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-white hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicateurs */}
              <div className="flex justify-center mt-6 space-x-3">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section : Contact (CTA) */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 text-white text-center shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Vous souhaitez en savoir plus ou nous soutenir ? N'hésitez pas à nous contacter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Nous contacter</span>
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="/don"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Heart className="mr-2 w-5 h-5" />
                  <span>Faire un don</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EnhancedMbjPage;