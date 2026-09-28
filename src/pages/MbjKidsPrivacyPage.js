import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShieldCheck, Trash2 } from 'lucide-react';
import { ButtonLink, PageHero } from '../components/DesignSystem';

const deletionPath = '/mbj-kids/suppression-du-compte';

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-b border-sky-100 py-7 first:pt-0 last:border-0 last:pb-0">
      <h2 className="text-xl font-extrabold text-blue-950 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-slate-700">{children}</div>
    </section>
  );
}

export default function MbjKidsPrivacyPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Mbj Kids" icon={ShieldCheck} title="Politique de confidentialité">
        Découvrez quelles données l'application utilise, comment elles sont protégées et comment demander leur suppression.
      </PageHero>

      <div className="section-pad bg-white">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <article className="section-card max-w-4xl p-5 sm:p-8">
            <p className="text-sm text-slate-500">
              Application : <strong>Mbj Kids</strong> · Dernière mise à jour : <time dateTime="2026-09-27">27 septembre 2026</time>
            </p>

            <Section id="responsable" title="Qui est responsable de l'application ?">
              <p>
                Mbj Kids est éditée par l'Association La Maison Bleue de Julien. Pour une question sur vos données,
                écrivez à <a className="font-semibold text-blue-800 underline" href="mailto:tonyenwalal@gmail.com">tonyenwalal@gmail.com</a>.
                Cette politique concerne l'application Mbj Kids ; les pratiques du présent site web peuvent être différentes.
              </p>
            </Section>

            <Section id="sans-compte" title="Utilisation sans compte et avec compte">
              <p>
                Un enfant peut utiliser les histoires, jeux, pictogrammes et dessins sans compte parent. Dans ce cas,
                sa progression, ses favoris et ses créations restent sur l'appareil et ne sont pas associés à un compte
                sur notre serveur. Le chargement de certains contenus peut toutefois nécessiter une connexion.
              </p>
              <p>
                Un parent peut créer un compte pour ajouter des profils enfant, personnaliser les réglages et consulter
                le suivi. Il choisit explicitement s'il souhaite rattacher les activités effectuées sans compte à un profil enfant.
              </p>
            </Section>

            <Section id="donnees" title="Quelles données sont utilisées ?">
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Compte parent :</strong> prénom, nom, adresse e-mail, informations d'authentification et demandes d'assistance.</li>
                <li><strong>Profil enfant :</strong> prénom, avatar et réglages sensoriels choisis par le parent, notamment pour le son, la lumière, les couleurs et les transitions.</li>
                <li><strong>Activités :</strong> progression dans les histoires, résultats des jeux, pictogrammes, favoris et dessins. Les activités rattachées à un profil sont enregistrées sur le serveur pour permettre le suivi.</li>
                <li><strong>Données techniques :</strong> les échanges nécessaires au chargement du contenu et à la sécurité du service peuvent produire des journaux techniques. Nous ne demandons pas la localisation précise de l'appareil.</li>
              </ul>
              <p>
                Les réglages sensoriels et l'utilisation d'une application adaptée à des enfants avec un trouble du spectre
                de l'autisme peuvent révéler des informations sensibles. L'application ne pose aucun diagnostic médical.
              </p>
            </Section>

            <Section id="finalites" title="Pourquoi ces données sont-elles utilisées ?">
              <p>
                Elles servent à faire fonctionner les activités, enregistrer la progression, adapter l'expérience aux
                réglages choisis par le parent, afficher le tableau de bord parent, sécuriser le compte et répondre aux demandes d'assistance.
                Elles ne sont ni vendues ni utilisées pour de la publicité ciblée. L'application ne comporte pas de publicité
                ni de SDK de suivi publicitaire.
              </p>
            </Section>

            <Section id="prestataires" title="Hébergement et services techniques">
              <p>
                Le serveur de l'application est hébergé chez LWS. Un service d'envoi d'e-mails est utilisé pour les messages
                liés au compte, notamment les codes de confirmation. Certaines phrases prononcées par la fonction de
                synthèse vocale sont traitées par un service externe de synthèse vocale (Google via gTTS) : leur texte est
                transmis pour générer l'audio demandé. Ces prestataires interviennent pour fournir le service, pas pour
                diffuser de la publicité dans l'application.
              </p>
            </Section>

            <Section id="protection" title="Comment les données sont-elles protégées ?">
              <p>
                Les échanges avec le serveur de l'application utilisent une connexion chiffrée. Les mots de passe sont
                conservés sous forme hachée. Les données structurées sur l'appareil sont enregistrées dans une base
                chiffrée ; les dessins locaux sont conservés dans l'espace privé de l'application. Un code parent à
                quatre chiffres, défini sur l'appareil, protège l'accès à l'espace parent depuis le mode enfant.
              </p>
            </Section>

            <Section id="conservation" title="Conservation et suppression">
              <p>
                Le compte parent et les données associées sont conservés tant qu'il est actif. Lorsqu'une suppression est
                confirmée, les données du compte et des profils associés sont retirées de la base active et les fichiers
                privés correspondants sur le serveur sont traités pour effacement. Les activités sans compte restent sur
                l'appareil jusqu'à leur rattachement, leur effacement ou la suppression des données de l'application.
              </p>
              <p>
                Une copie d'un dessin exportée dans la galerie de l'appareil doit être supprimée séparément par son
                propriétaire. Des sauvegardes et journaux techniques peuvent être conservés temporairement selon leurs
                cycles de conservation ou les obligations applicables. Pour connaître les durées relatives à votre
                demande, contactez-nous.
              </p>
              <p>
                <Link className="font-semibold text-blue-800 underline" to={deletionPath}>
                  Demander la suppression d'un compte Mbj Kids ou d'un profil enfant
                </Link>.
              </p>
            </Section>

            <Section id="droits" title="Vos demandes et le contrôle parental">
              <p>
                Le parent peut demander l'accès, la rectification ou la suppression des données associées à son compte,
                et nous contacter pour toute autre demande relative à ses droits. Les profils et réglages des enfants sont
                gérés depuis l'espace parent. Nous vérifions l'identité du demandeur avant de communiquer ou supprimer
                les données d'un compte.
              </p>
              <p>
                Contact : <a className="font-semibold text-blue-800 underline" href="mailto:tonyenwalal@gmail.com">tonyenwalal@gmail.com</a>.
              </p>
            </Section>
          </article>

          <aside className="section-card p-6 lg:sticky lg:top-6">
            <ShieldCheck className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-extrabold text-blue-950">Vos démarches</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Vous pouvez demander la suppression sans réinstaller l'application.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink to={deletionPath} icon={Trash2}>Supprimer un compte</ButtonLink>
              <ButtonLink href="mailto:tonyenwalal@gmail.com" icon={Mail} variant="secondary">Nous écrire</ButtonLink>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
