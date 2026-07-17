import React from 'react';
import { ArrowRight, CheckCircle, Globe2, HandHeart, Handshake, Heart, Star, Users } from 'lucide-react';
import { ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';

const volunteerBenefits = [
  'Impact direct sur la communauté',
  'Développement personnel et professionnel',
  'Flexibilité horaire adaptée',
  'Formation et accompagnement',
];

const memberBenefits = [
  'Mises à jour régulières sur nos initiatives',
  'Invitations à des événements spéciaux',
  'Reconnaissance dans nos publications',
  'Accès privilégié aux ressources',
];

function EngagementCard({ icon: Icon, eyebrow, title, children, benefits, note, benefitIcon: BenefitIcon }) {
  return (
    <article className="section-card flex h-full flex-col p-6 sm:p-8">
      <span className="icon-box">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="section-kicker mt-5">{eyebrow}</p>
      <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">{title}</h2>
      <p className="mt-4 leading-7 text-slate-700">{children}</p>

      <ul className="mt-6 grid gap-3">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-slate-700">
            <BenefitIcon className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5 font-semibold leading-7 text-blue-950">
        {note}
      </p>

      <div className="mt-auto pt-7">
        <ButtonLink to="/contact" icon={ArrowRight} iconPosition="end" className="w-full">
          Nous faire part de votre intérêt
        </ButtonLink>
      </div>
    </article>
  );
}

export default function JoinPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Engagement solidaire" icon={Globe2} title="Rejoignez notre cause">
        Ensemble, construisons un avenir plus inclusif pour les personnes autistes et
        leurs familles.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Votre impact" icon={HandHeart} title="Plusieurs façons de contribuer">
              En nous rejoignant, vous participez activement à l'amélioration de la
              qualité de vie des personnes autistes et de leurs familles, par votre temps,
              vos compétences ou votre soutien.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-2">
              <EngagementCard
                icon={Handshake}
                eyebrow="Bénévolat"
                title="Devenir bénévole"
                benefits={volunteerBenefits}
                benefitIcon={CheckCircle}
                note="Que vous souhaitiez contribuer quelques heures par semaine ou vous engager sur des projets à long terme, votre aide sera précieuse."
              >
                En tant que bénévole à La Maison Bleue de Julien, vous pourrez travailler
                directement sur nos projets, apporter un impact positif dans la communauté
                et vous développer personnellement et professionnellement.
              </EngagementCard>

              <EngagementCard
                icon={Users}
                eyebrow="Adhésion"
                title="Devenir membre"
                benefits={memberBenefits}
                benefitIcon={Star}
                note="Votre contribution annuelle ou mensuelle nous aide à garantir la pérennité de nos actions."
              >
                En devenant membre de La Maison Bleue de Julien, vous apportez un soutien
                régulier essentiel à nos opérations et à nos programmes.
              </EngagementCard>
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-sky-50/70">
          <div className="site-container">
            <div className="section-card grid gap-6 border-t-4 border-t-[#d65f4a] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">Créons un impact durable</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
                  Chaque geste compte. Participez à la construction d'un monde plus
                  inclusif pour tous.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/contact" variant="secondary">Nous contacter</ButtonLink>
                <ButtonLink to="/don" variant="warm" icon={Heart}>Faire un don</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
