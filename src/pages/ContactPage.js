import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const EnhancedContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData before sending:", formData);

    const { name, email, phone, company, message } = formData;

    // Construire le message pour WhatsApp
    const whatsappMessage = `Bonjour, voici les détails du contact :
Nom : ${name}
Email : ${email}
Téléphone : ${phone}
Société : ${company}
Message : ${message}`;

    // Numéro sans le "+"
    const phoneNumber = "237677098794";

    // API WhatsApp recommandée
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Ouvrir dans un nouvel onglet
    window.open(whatsappURL, "_blank");
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
            <MessageCircle className="w-6 h-6 mr-3" />
            <span className="text-lg font-semibold">Nous contacter</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            N'hésitez pas à nous joindre à tout moment. Nous sommes là pour vous aider 
            avec toutes vos questions ou demandes.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">
        
        {/* Cartes de contact */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Téléphone */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 text-center mb-4">Téléphone</h3>
            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-gray-900">+237 699 893 838</p>
              <p className="text-lg font-medium text-gray-900">+237 675 953 123</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-cyan-700 text-center mb-4">Email</h3>
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-gray-900 break-words">contact@lamaisonbleuedejulien.org</p>
              <p className="text-sm font-medium text-gray-900 break-words">jeannekiboum@lamaisonbleuedejulien.org</p>
            </div>
          </div>

          {/* Adresse */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Adresse</h3>
            <p className="text-lg font-medium text-gray-900 text-center leading-relaxed">
              Nkoabang, Yaoundé, Cameroun
            </p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
              <Send className="w-5 h-5 mr-3 text-blue-600" />
              <span className="text-blue-700 font-semibold">Envoyez-nous un message</span>
            </div>
            
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Formulaire de contact
            </h2>

            {/* Note WhatsApp */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm text-gray-700">
                    <strong className="text-green-800">Note :</strong> Si vous utilisez un ordinateur, pensez à être déjà connecté
                    à <em>WhatsApp Web</em> dans votre navigateur. Le premier clic sur
                    «&nbsp;Continue to Chat&nbsp;» peut ouvrir la conversation sans texte ; cliquez
                    une seconde fois si nécessaire. Sur mobile (WhatsApp installé), vous ne verrez ce
                    message qu'en un seul clic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Nom */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom complet"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrez votre adresse e-mail"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Entrez votre numéro de téléphone"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>

              {/* Société */}
              <div>
                <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                  Nom de votre société <span className="text-gray-400 font-normal">(facultatif)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Entrez le nom de votre société"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Comment pouvons-nous vous aider ?"
                rows="6"
                className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <span>Envoyer le message</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>

        {/* Section finale avec encouragement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nous sommes là pour vous accompagner
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Notre équipe est dédiée à vous offrir le meilleur accompagnement. 
              N'hésitez pas à nous contacter pour toute question ou demande d'information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactPage;