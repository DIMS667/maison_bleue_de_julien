import React from 'react';

const DonSuccess = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">
          Paiement réussi 👍
        </h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Merci pour votre générosité ! Votre don a été reçu avec succès. 
          Votre soutien aide à faire une différence significative.
        </p>
        <div className="text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonSuccess;
