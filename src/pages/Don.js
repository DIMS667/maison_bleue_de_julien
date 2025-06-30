import React, { useState } from "react";
import orangeLogo from "../assets/images/orange.png";
import mtnLogo from "../assets/images/mtn.jpeg";
import { FaHeart, FaShieldAlt, FaUsers, FaGraduationCap, FaHandHoldingHeart, FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import { Heart, Shield, Users, GraduationCap, CreditCard, Smartphone, ChevronRight } from 'lucide-react';

const EnhancedDon = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/donations/initiate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, amount })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.payment_url) {
          window.location.href = data.payment_url;
        } else {
          alert("Erreur : URL de paiement non reçue.");
        }
      } else {
        const errorData = await response.json();
        alert(
          "Erreur lors de l'initiation du paiement : " +
            (errorData.detail || "Inconnue")
        );
      }
    } catch (error) {
      console.error("Erreur requête:", error);
      alert("Une erreur est survenue. Vérifiez la console.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
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
            <Heart className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Soutenez notre mission</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Faites un Don
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Soutenez nos initiatives pour l'inclusion des personnes autistes via Orange Money, 
            MTN Mobile Money ou notre plateforme sécurisée en ligne.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        
        {/* Section impact */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
            Votre don change des vies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Éducation</h3>
              <p className="text-gray-600">Financez des programmes éducatifs spécialisés et des ateliers d'apprentissage</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-cyan-700 mb-3">Accompagnement</h3>
              <p className="text-gray-600">Soutenez l'accompagnement personnalisé des familles et des jeunes autistes</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Inclusion</h3>
              <p className="text-gray-600">Favorisez l'inclusion sociale et professionnelle des personnes autistes</p>
            </div>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Colonne gauche: Don classique */}
          <div className="space-y-8">
            
            {/* Section Orange Money */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-orange-600">Orange Money</h2>
                  <p className="text-orange-500 text-sm">Don direct et rapide</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2">Envoyez votre don au numéro :</p>
                    <div className="text-2xl font-bold text-orange-700 mb-2">+237 699 89 38 38</div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Nom :</span> Jeanne Kiboum Tonye
                    </p>
                  </div>
                  <img
                    src={orangeLogo}
                    alt="Orange Money"
                    className="w-20 h-20 object-contain ml-4"
                  />
                </div>
              </div>
            </div>

            {/* Section MTN Money */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-600">MTN Mobile Money</h2>
                  <p className="text-yellow-500 text-sm">Don direct et rapide</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2">Envoyez votre don au numéro :</p>
                    <div className="text-2xl font-bold text-yellow-700 mb-2">+237 675 95 31 23</div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Nom :</span> Jules Dimitri Tonye
                    </p>
                  </div>
                  <img
                    src={mtnLogo}
                    alt="MTN Money"
                    className="w-20 h-20 object-contain ml-4 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Section avantages du don */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Pourquoi faire un don ?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Soutenir nos projets éducatifs et communautaires
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Offrir des opportunités à ceux qui en ont besoin
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Contribuer à un impact social durable
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne droite: Formulaire CinetPay */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Don en ligne sécurisé
                </h2>
                <p className="text-blue-500 text-sm">Powered by CinetPay</p>
              </div>
            </div>
            
            <div onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Entrez votre nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="+237 6xx xxx xxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email <span className="text-gray-400 font-normal">(facultatif)</span>
                </label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Montant (XAF)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 pr-16 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Ex: 1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    XAF
                  </span>
                </div>
              </div>

              {/* Montants suggérés */}
              <div>
                <p className="text-sm text-gray-600 mb-3">Montants suggérés :</p>
                <div className="grid grid-cols-3 gap-3">
                  {[1000, 5000, 10000].map((suggestedAmount) => (
                    <button
                      key={suggestedAmount}
                      type="button"
                      onClick={() => setAmount(suggestedAmount.toString())}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium"
                    >
                      {suggestedAmount.toLocaleString()} XAF
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <span>Procéder au paiement</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Info sécurité */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-semibold text-green-800">Paiement 100% sécurisé</span>
              </div>
              <p className="text-sm text-gray-600">
                Vous serez redirigé vers CinetPay pour choisir votre moyen de paiement 
                (Orange Money, MTN Money, carte bancaire, etc.).
              </p>
            </div>
          </div>
        </div>

        {/* Section témoignage/impact */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Chaque don compte pour un avenir plus inclusif
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Grâce à votre générosité, nous continuons d'accompagner les familles et de créer 
              des opportunités pour les personnes autistes. Ensemble, construisons un monde plus bienveillant.
            </p>
            
            {/* Statistiques de dons */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDon;