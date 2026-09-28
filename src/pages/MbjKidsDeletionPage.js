import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShieldCheck, Smartphone, Trash2 } from 'lucide-react';
import { ButtonLink, PageHero } from '../components/DesignSystem';

const email = 'tonyenwalal@gmail.com';
const requestHref = 'mailto:tonyenwalal@gmail.com?subject=Demande%20de%20suppression%20de%20compte%20Mbj%20Kids';
const privacyPath = '/mbj-kids/politique-de-confidentialite';

export default function MbjKidsDeletionPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Mbj Kids" icon={Trash2} title="Supprimer mon compte et mes données">
        La demande peut être faite avec ou sans accès à l'application. Cette page permet de contacter notre équipe ;
        elle ne supprime pas automatiquement un compte.
      </PageHero>

      <div className="section-pad bg-white">
        <div className="site-container max-w-5xl space-y-8">
          <section className="section-card border-t-4 border-t-blue-700 p-6 sm:p-8" aria-labelledby="demande-suppression">
            <Mail className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <h2 id="demande-suppression" className="mt-4 text-2xl font-extrabold text-blue-950">
              Demander la suppression par e-mail
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              Si vous n'avez plus l'application, ne pouvez plus vous connecter ou avez perdu l'accès à l'adresse e-mail
              du compte, écrivez-nous depuis une adresse à laquelle nous pouvons vous répondre. Indiquez l'adresse du
              compte si vous la connaissez et précisez si la demande concerne tout le compte parent ou seulement un
              profil enfant. Nous vérifierons que vous êtes autorisé à demander cette suppression avant de la traiter.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ButtonLink href={requestHref} icon={Mail}>Envoyer une demande de suppression</ButtonLink>
              <a className="break-all font-semibold text-blue-800 underline" href={`mailto:${email}`}>{email}</a>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              N'envoyez jamais votre mot de passe, votre code parent ou un code reçu par e-mail. Si votre logiciel de
              messagerie ne s'ouvre pas, copiez l'adresse affichée ci-dessus et envoyez votre demande depuis votre messagerie habituelle.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="soft-card p-6" aria-labelledby="dans-lapplication">
              <Smartphone className="h-7 w-7 text-blue-700" aria-hidden="true" />
              <h2 id="dans-lapplication" className="mt-4 text-xl font-extrabold text-blue-950">Depuis l'application</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700">
                <li>Ouvrez votre espace parent dans Mbj Kids.</li>
                <li>Dans les paramètres, choisissez « Supprimer mon compte ».</li>
                <li>Confirmez avec le code à six chiffres envoyé à l'adresse e-mail du compte.</li>
              </ol>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Le code de confirmation est valable 15 minutes. Si vous n'avez plus accès à cette adresse, utilisez la demande par e-mail ci-dessus.
              </p>
            </section>

            <section className="soft-card p-6" aria-labelledby="autres-cas">
              <ShieldCheck className="h-7 w-7 text-blue-700" aria-hidden="true" />
              <h2 id="autres-cas" className="mt-4 text-xl font-extrabold text-blue-950">Profil enfant ou usage sans compte</h2>
              <p className="mt-4 leading-7 text-slate-700">
                Pour supprimer seulement un profil enfant, utilisez l'espace parent ou écrivez-nous en précisant que vous
                souhaitez conserver votre compte. Nous vérifierons votre autorité parentale avant de traiter une demande reçue par e-mail.
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Si vous avez utilisé Mbj Kids sans créer de compte, les activités non rattachées restent sur votre appareil.
                Vous pouvez les effacer en supprimant les données de l'application dans les réglages de l'appareil ou en
                désinstallant l'application. Les copies de dessins exportées dans la galerie se suppriment séparément.
              </p>
            </section>
          </div>

          <section className="section-card p-6 sm:p-8" aria-labelledby="donnees-supprimees">
            <h2 id="donnees-supprimees" className="text-xl font-extrabold text-blue-950 sm:text-2xl">
              Quelles données sont supprimées ?
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Après confirmation ou vérification de votre demande, la suppression du compte retire de la base active les
              informations du parent, les profils enfant associés et leur historique. Les fichiers privés associés sur
              notre serveur sont également traités pour effacement. La suppression d'un seul profil concerne ce profil
              et ses données associées, sans supprimer automatiquement le compte parent.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Cette démarche n'efface pas les fichiers que vous avez exportés dans la galerie ou partagés ailleurs. Des
              sauvegardes et journaux techniques peuvent subsister temporairement selon leurs cycles de conservation ou
              les obligations applicables ; contactez-nous pour les précisions concernant votre demande. Nous ne
              confirmons pas l'existence d'un compte à une personne dont l'identité n'a pas été vérifiée.
            </p>
            <p className="mt-5">
              Consultez également la <Link className="font-semibold text-blue-800 underline" to={privacyPath}>politique de confidentialité de Mbj Kids</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
