import React from 'react';

const JoinPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-4xl mx-auto py-20 px-4 md:px-8">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Rejoignez notre cause 🌍
        </h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          En vous joignant à nous, vous participez activement à l'amélioration de la qualité de vie des personnes autistes et de leurs familles. Nous offrons différentes manières de contribuer à nos efforts, que ce soit en temps, en compétences ou en soutien financier.
        </p>

        {/* Section Bénévole */}
        <div className="text-center mb-10">
          <h2 className="text-3xl text-blue-700 font-bold mb-3">
            Devenir Bénévole 👋
          </h2>
          <p className="text-gray-700 mb-4">
            En tant que bénévole à la Maison Bleue de Julien, vous aurez l'opportunité de travailler directement sur nos projets, d'apporter un impact positif dans la communauté et de vous développer personnellement et professionnellement. Que vous souhaitiez contribuer quelques heures par semaine ou vous engager sur des projets à long terme, votre aide sera inestimable.
          </p>
          <a 
            href="https://example.com/form_volunteer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Formulaire pour Bénévoles
          </a>
        </div>

        {/* Section Membre */}
        <div className="text-center mb-10">
          <h2 className="text-3xl text-blue-700 font-bold mb-3">
            Devenir Membre 📈
          </h2>
          <p className="text-gray-700 mb-4">
            En devenant membre de la Maison Bleue de Julien, vous nous fournissez un soutien régulier qui est vital pour nos opérations et nos programmes. Les membres bénéficient de mises à jour régulières sur nos initiatives, d'invitations à des événements spéciaux, et d'une reconnaissance dans nos publications. Votre contribution annuelle ou mensuelle permettra de garantir la pérennité de nos actions.
          </p>
          <a 
            href="https://example.com/form_member" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Formulaire pour Membres
          </a>
        </div>

      </main>
    </div>
  );
};

export default JoinPage;
