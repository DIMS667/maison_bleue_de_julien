import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  BookOpen,
  Download,
  Gamepad2,
  Mail,
  MessageCircle,
  Palette,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';

const activities = [
  {
    title: 'Histoires',
    description: 'Lire et écouter des histoires, puis reprendre son parcours à son rythme.',
    icon: BookOpen,
  },
  {
    title: 'Jeux',
    description: 'Explorer des activités ludiques pour apprendre et s’exercer.',
    icon: Gamepad2,
  },
  {
    title: 'Je dis',
    description: 'S’exprimer avec des pictogrammes et composer des phrases.',
    icon: MessageCircle,
  },
  {
    title: 'Dessin',
    description: 'Créer des dessins dans un espace adapté aux enfants.',
    icon: Palette,
  },
];

export default function MbjKidsPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="Application mobile"
        icon={BookOpen}
        title="Mbj Kids"
        actions={
          <ButtonLink
            href="/downloads/mbj-kids-1.0.0.apk"
            icon={Download}
            download="mbj-kids-1.0.0.apk"
          >
            Télécharger l’APK Android
          </ButtonLink>
        }
      >
        Des histoires, des jeux, des pictogrammes et du dessin pour découvrir,
        créer et communiquer à son rythme.
        <span className="mt-3 block text-sm">Android · version 1.0.0 · téléchargement direct</span>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="site-container">
          <SectionHeading eyebrow="À découvrir" icon={Gamepad2} title="Quatre espaces pour l’enfant">
            Les activités sont accessibles sans créer de compte parent.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map(({ title, description, icon: Icon }) => (
              <article key={title} className="soft-card p-6">
                <span className="icon-box">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-blue-950">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sky-50/70">
        <div className="site-container">
          <SectionHeading eyebrow="Pour les familles" icon={UserRound} title="Un espace parent quand vous en avez besoin">
            L’enfant peut commencer sans compte. Le parent choisit ensuite s’il souhaite créer un compte pour personnaliser et suivre son parcours.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="section-card p-6 sm:p-8">
              <BookOpen className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-extrabold text-blue-950">Sans compte parent</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Les histoires, jeux, pictogrammes et dessins sont ouverts. Les activités non rattachées
                restent sur l’appareil. Aucune inscription n’est nécessaire pour les découvrir.
              </p>
            </article>
            <article className="section-card p-6 sm:p-8">
              <BarChart3 className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-extrabold text-blue-950">Avec un compte parent</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Le parent peut créer des profils enfant, ajuster les réglages sensoriels et consulter
                la progression. Il choisit s’il souhaite rattacher les activités effectuées sans compte.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="donnees-mbj-kids">
        <div className="site-container">
          <div className="section-card grid gap-8 border-t-4 border-t-blue-700 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <ShieldCheck className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <h2 id="donnees-mbj-kids" className="mt-4 text-2xl font-extrabold text-blue-950">
                Vos données, vos choix
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                Consultez la politique de confidentialité de Mbj Kids et les démarches pour demander
                la suppression d’un compte parent ou d’un profil enfant, même sans accès à l’application.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink to="/mbj-kids/politique-de-confidentialite" icon={ShieldCheck}>
                Politique de confidentialité
              </ButtonLink>
              <ButtonLink to="/mbj-kids/suppression-du-compte" variant="secondary">
                Supprimer un compte
              </ButtonLink>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-600">
            Une question sur Mbj Kids ? <Link className="font-semibold text-blue-800 underline" to="/contact">Contactez l’association</Link>
            {' '}ou écrivez à <a className="font-semibold text-blue-800 underline" href="mailto:tonyenwalal@gmail.com"><Mail className="mr-1 inline h-4 w-4" aria-hidden="true" />tonyenwalal@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
