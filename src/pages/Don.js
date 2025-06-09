

import React, { useState } from "react";
import orangeLogo from "../assets/images/orange.png";
import mtnLogo from "../assets/images/mtn.jpeg";

const Don = () => {
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
          alert("Erreur : URL de paiement non reçue.");
        }
      } else {
        const errorData = await response.json();
        alert(
          "Erreur lors de l'initiation du paiement : " +
            (errorData.detail || "Inconnue")
        );
      }
    } catch (error) {
      console.error("Erreur requête:", error);
      alert("Une erreur est survenue. Vérifiez la console.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      {/* En-tête */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-3">
          Faites un Don
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Soutenez nos initiatives en effectuant un don via Orange Money, MTN
          Mobile Money ou via notre plateforme de paiement en ligne.
        </p>
      </header>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Colonne de gauche: Description & dons classiques */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pourquoi faire un don ?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Soutenir nos projets éducatifs et communautaires.</li>
              <li>Offrir des opportunités à ceux qui en ont besoin.</li>
              <li>Contribuer à un impact social durable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Don classique (envoi direct)
            </h2>
            <div className="space-y-6">
              {/* Orange Money */}
              <div className="flex items-center p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-orange-600">
                    Via Orange Money
                  </h3>
                  <p className="text-gray-700">
                    Envoyez votre don au numéro suivant :
                    <span className="block font-bold text-gray-900 mt-1">
                      +237 699893838
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Nom associé :{" "}
                    <span className="font-semibold">Jeanne Kiboum Tonye</span>
                  </p>
                </div>
                <img
                  src={orangeLogo}
                  alt="Orange Money Logo"
                  className="w-16 h-16 ml-4 object-contain"
                />
              </div>

              {/* MTN Money */}
              <div className="flex items-center p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-yellow-600">
                    Via MTN Mobile Money
                  </h3>
                  <p className="text-gray-700">
                    Envoyez votre don au numéro suivant :
                    <span className="block font-bold text-gray-900 mt-1">
                      +237 675953123
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Nom associé :{" "}
                    <span className="font-semibold">Jules Dimitri Tonye</span>
                  </p>
                </div>
                <img
                  src={mtnLogo}
                  alt="MTN Money Logo"
                  className="w-16 h-16 ml-4 object-contain"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Colonne de droite: Formulaire CinetPay */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Don en ligne via CinetPay
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Nom
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Téléphone
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="+237 6xx..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email (facultatif)
              </label>
              <input
                type="email"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="ex: [email protected]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Montant (XAF)
              </label>
              <input
                type="number"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="1000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition"
            >
              Payer via CinetPay
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-3">
            Vous serez redirigé vers une page sécurisée de CinetPay pour choisir
            le moyen de paiement (Orange, MTN, carte, etc.).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Don;
