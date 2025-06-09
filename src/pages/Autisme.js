import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const AutismePage = () => {
  return (
    <
      div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* ======================================
          EN-TÊTE SIMPLIFIÉ
      ====================================== */}
   
      <main className="max-w-5xl mx-auto py-20 px-4 md:px-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
            🧩 Comprendre l’autisme
          </h1>
          <p className="text-gray-700 text-lg">
            Informez-vous sur le trouble du spectre de l’autisme, ses signes, 
            son diagnostic, la journée mondiale de sensibilisation et les ressources 
            disponibles pour l’accompagnement et le soutien.
          </p>
        </header>

        {/* ======================================
            SECTION : QU’EST-CE QUE L’AUTISME ?
        ====================================== */}
        <section className="mb-12" id="definition">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🧩 Qu’est-ce que l’autisme ?
          </h2>
          <p className="leading-relaxed mb-4">
            L’autisme, également appelé trouble du spectre de l’autisme (TSA), est un 
            ensemble de troubles neurodéveloppementaux caractérisés par des difficultés 
            dans la communication et l’interaction sociale, ainsi que par des comportements, 
            des intérêts ou des activités à caractère restreint et répétitif. Les personnes 
            autistes peuvent aussi présenter des particularités sensorielles (hypersensibilité 
            ou hyposensibilité) et des façons différentes d’apprendre ou de percevoir leur 
            environnement.
          </p>
          <p className="leading-relaxed">
            Le terme « spectre » reflète la grande variabilité des manifestations de 
            l’autisme : chaque personne autiste est unique, avec ses forces, ses défis 
            et ses besoins spécifiques.
          </p>
        </section>

        {/* ======================================
            SECTION : STATISTIQUES
        ====================================== */}
        <section className="mb-12" id="statistiques">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            📊 Quelques statistiques clés
          </h2>
          <p className="leading-relaxed mb-4">
            Selon l’Organisation Mondiale de la Santé (OMS), environ 1 enfant sur 100 
            présente un trouble du spectre de l’autisme dans le monde. Toutefois, les 
            chiffres peuvent varier selon les études et les critères diagnostiques.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>La prévalence est en hausse (notamment grâce à de meilleurs outils de détection).</li>
            <li>La proportion de garçons diagnostiqués est plus élevée que celle des filles, mais les filles peuvent être sous-diagnostiquées.</li>
            <li>L’autisme se manifeste dans toutes les régions du monde et à tous les niveaux socio-économiques.</li>
          </ul>
        </section>

        {/* ======================================
            SECTION : SIGNES ET SYMPTÔMES
        ====================================== */}
        <section className="mb-12" id="signes-symptomes">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🔎 Signes et symptômes
          </h2>
          <p className="leading-relaxed mb-4">
            Les manifestations de l’autisme varient selon les individus. 
            Toutefois, on retrouve souvent :
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold text-blue-600 mb-2">
                Difficultés de communication et d’interaction
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Retard ou absence de langage verbal</li>
                <li>Utilisation atypique du langage (écholalie, scripts…)</li>
                <li>Contacts visuels moins fréquents ou inconfortables</li>
                <li>Difficulté à interpréter les gestes et les expressions faciales</li>
              </ul>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold text-blue-600 mb-2">
                Centres d’intérêt restreints et comportements répétitifs
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Intérêt très marqué pour un sujet précis (ex. : trains, dinosaures…)</li>
                <li>Routines et rituels stricts (résistance au changement)</li>
                <li>Comportements répétitifs (battements de mains, balancements…)</li>
                <li>Forte sensibilité sensorielle (bruit, lumière, toucher…)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : DIAGNOSTIC
        ====================================== */}
        <section className="mb-12" id="diagnostic">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🩺 Diagnostic de l’autisme
          </h2>
          <p className="leading-relaxed mb-4">
            Le diagnostic de l’autisme est un processus multidisciplinaire qui 
            implique souvent des professionnels (pédiatres, neuropsychologues, 
            psychiatres, psychologues spécialisés, etc.). Il repose sur 
            l’observation des comportements, des évaluations cliniques et parfois 
            des tests standardisés.
          </p>
          <p className="leading-relaxed">
            Un dépistage précoce et un diagnostic posé dès les premières années 
            de vie peuvent permettre une meilleure prise en charge et un 
            accompagnement plus adapté au développement de l’enfant.
          </p>
        </section>

        {/* ======================================
            SECTION : ACCOMPAGNEMENT ET SOUTIEN
        ====================================== */}
        <section className="mb-12" id="accompagnement">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🙌 Accompagnement et soutien
          </h2>
          <p className="leading-relaxed mb-4">
            Il n’existe pas de « traitement » unique pour l’autisme. 
            Cependant, différentes interventions et stratégies peuvent aider 
            la personne autiste à développer ses compétences, à améliorer 
            sa communication et à favoriser son autonomie. Parmi les approches 
            reconnues :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Interventions comportementales et éducatives</strong> 
              (ex. ABA, TEACCH, ESDM)
            </li>
            <li>
              <strong>Orthophonie</strong> : pour améliorer la communication 
              verbale et non verbale
            </li>
            <li>
              <strong>Ergothérapie</strong> : pour travailler l’intégration 
              sensorielle et l’autonomie
            </li>
            <li>
              <strong>Psychomotricité</strong> : pour aider à la motricité 
              globale et fine
            </li>
            <li>
              <strong>Groupes de socialisation</strong> : pour favoriser 
              l’interaction sociale
            </li>
          </ul>
          <p className="leading-relaxed mt-4">
            Les familles jouent également un rôle clé : soutien affectif, 
            routines structurantes à la maison, collaboration avec les 
            professionnels, etc.
          </p>
        </section>

        {/* ======================================
            SECTION : JOURNÉE MONDIALE DE SENSIBILISATION À L’AUTISME
        ====================================== */}
        <section className="mb-12" id="journee-autisme">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            💙 Journée mondiale de sensibilisation à l’autisme
          </h2>
          <p className="leading-relaxed mb-4">
            La Journée mondiale de sensibilisation à l’autisme est célébrée 
            chaque année le <strong>2 avril</strong>. Proclamée par l’Assemblée 
            générale des Nations Unies en 2007, elle encourage les gouvernements 
            et la société civile à sensibiliser le public à l’autisme.
          </p>
          <p className="leading-relaxed mb-4">
            À travers le monde, de nombreux événements et actions de 
            sensibilisation sont organisés : conférences, campagnes d’information, 
            illuminations de monuments en bleu, etc. L’objectif est de promouvoir 
            une meilleure compréhension de l’autisme, de soutenir l’inclusion 
            sociale et de lutter contre les préjugés.
          </p>
          <p className="leading-relaxed">
            Chacun peut participer à cette journée en partageant des ressources 
            fiables, en se mobilisant sur les réseaux sociaux ou en prenant part 
            aux initiatives locales pour un environnement plus accueillant et 
            respectueux envers les personnes autistes.
          </p>
        </section>

        {/* ======================================
            SECTION : MYTHES ET RÉALITÉS
        ====================================== */}
        <section className="mb-12" id="mythes-realite">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            💡 Mythes et réalités
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded shadow">
              <p className="font-semibold text-blue-600">
                Mythe : Les personnes autistes n’éprouvent pas d’émotions.
              </p>
              <p className="mt-2">
                Réalité : Elles ressentent des émotions tout aussi intensément 
                que les autres, mais peuvent les exprimer différemment.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <p className="font-semibold text-blue-600">
                Mythe : L’autisme est causé par un mauvais parenting.
              </p>
              <p className="mt-2">
                Réalité : L’autisme est un trouble neurodéveloppemental et n’est 
                pas lié à l’éducation reçue ou à un manque d’affection.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <p className="font-semibold text-blue-600">
                Mythe : Toutes les personnes autistes ont un « syndrome du savant ».
              </p>
              <p className="mt-2">
                Réalité : Seule une minorité de personnes autistes présentent 
                des capacités extraordinaires dans un domaine précis. 
                La plupart ont des profils variés, avec leurs forces et leurs besoins.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================
            SECTION : RESSOURCES ET LIENS UTILES
        ====================================== */}
        <section className="mb-12" id="ressources">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            📚 Ressources et liens utiles
          </h2>
          <p className="leading-relaxed mb-4">
            Pour en savoir plus sur l’autisme ou trouver du soutien, 
            consultez ces sites et associations :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="https://www.autisme-france.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Autisme France
              </a>
            </li>
            
           
            <li>
              <a
                href="https://www.sante.gouv.fr/prevention-en-sante/autisme-et-troubles-du-neuro-developpement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Portail du Ministère de la Santé – Autisme et TND
              </a>
            </li>
          </ul>
        </section>

        {/* ======================================
            SECTION : CONCLUSION / CONTACT
        ====================================== */}
        <section className="mb-12" id="contact">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            📞 Besoin d’informations ou d’aide ?
          </h2>
          <p className="leading-relaxed mb-4">
            Si vous cherchez des conseils, un accompagnement ou simplement 
            échanger avec des personnes concernées, n’hésitez pas à nous 
            contacter via le formulaire de contact sur ce site.
          </p>
          <p className="leading-relaxed">
            Ensemble, nous pouvons favoriser une meilleure compréhension de 
            l’autisme et construire un environnement plus inclusif pour tous.
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
      {/* 
        AUCUN FOOTER POUR CETTE VERSION, 
        PUISQUE DEMANDÉ DE LE SUPPRIMER 
      */}
    </div>
  );
};

export default AutismePage;
