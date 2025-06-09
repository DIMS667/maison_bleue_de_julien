import React, { useState } from "react";

const ContactPage = () => {
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
    <section className="py-20 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-blue-600 sm:text-4xl lg:text-5xl">
            Contactez-nous
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            N'hésitez pas à nous joindre à tout moment. Nous sommes là pour vous aider avec toutes vos questions ou demandes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            {/* Coordonnées 1 */}
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +237 699893838
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +237 675953123
                </p>
              </div>
            </div>
            {/* Coordonnées 2 */}
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-3">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  contact@maisonbleudejulien.org
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                jeannetonye@maisonbleudejulien.org
                </p>
              </div>
            </div>
            {/* Coordonnées 3 */}
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  Nkoabang, Yaoundé, Cameroun
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="mt-6 overflow-hidden bg-white rounded-xl">
          <div className="px-6 py-12 sm:p-12">
            <h3 className="text-3xl font-semibold text-center text-gray-900">
              Envoyez-nous un message
            </h3>
            {/* ==== AVIS AUX UTILISATEURS SUR LE COMPORTEMENT WHATSAPP ==== */}
            <p className="mt-2 text-sm text-gray-700 text-center">
              <strong>Note :</strong> Si vous utilisez un ordinateur, pensez à être déjà connecté
              à <em>WhatsApp Web</em> dans votre navigateur. Le premier clic sur
              «&nbsp;Continue to Chat&nbsp;» peut ouvrir la conversation sans texte ; cliquez
              une seconde fois si nécessaire. Sur mobile (WhatsApp installé), vous ne verrez ce
              message qu’en un seul clic.
            </p>
            {/* ========================================================== */}

            <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    Votre nom
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Entrez votre nom complet"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Adresse e-mail
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Entrez votre adresse e-mail"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="text-base font-medium text-gray-900">
                    Numéro de téléphone
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Entrez votre numéro de téléphone"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-base font-medium text-gray-900">
                    Nom de votre société
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Entrez le nom de votre société"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-base font-medium text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider ?"
                      rows="4"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Envoyer
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
