import React from 'react';
import { ArrowRight, BookOpenCheck, Megaphone, Users } from 'lucide-react';
import activityOne from '../../assets/images/activite1.jpg';
import activityTwo from '../../assets/images/activite2.jpg';
import activityThree from '../../assets/images/activite3.jpg';
import { ButtonLink } from '../DesignSystem';

const missions = [
  {
    title: 'Accompagner les personnes autistes',
    text: 'Proposer un cadre structuré, attentif aux besoins de chacun et tourné vers l’autonomie.',
    icon: BookOpenCheck,
  },
  {
    title: 'Soutenir les familles',
    text: 'Offrir une écoute, des informations et un appui concret dans les étapes du quotidien.',
    icon: Users,
  },
  {
    title: 'Informer et sensibiliser',
    text: 'Mieux faire connaître l’autisme et encourager des pratiques plus inclusives dans la société.',
    icon: Megaphone,
  },
];

const projects = [
  {
    title: 'Apprentissage et autonomie',
    text: 'Des activités pratiques pour développer des compétences utiles au quotidien et au travail.',
    image: activityOne,
    alt: 'Présentation des activités de La Maison Bleue de Julien lors d’un événement',
  },
  {
    title: 'Ateliers créatifs',
    text: 'Des temps d’expression et d’apprentissage qui valorisent les capacités de chaque participant.',
    image: activityTwo,
    alt: 'Participants réalisant une activité de peinture accompagnée',
  },
  {
    title: 'Rencontres et sensibilisation',
    text: 'Des actions collectives qui favorisent le lien social, le bien-être et une meilleure compréhension de l’autisme.',
    image: activityThree,
    alt: 'Séance collective de bien-être organisée par La Maison Bleue de Julien',
  },
];

export default function MissionProjects() {
  return (
    <section className="section-pad bg-white" aria-labelledby="missions-title">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="home-kicker">Ce que nous faisons</p>
          <h2 id="missions-title" className="home-section-title">
            Nos missions au service des personnes et des familles
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Nos actions associent accompagnement, apprentissage, soutien aux proches
            et sensibilisation du public.
          </p>
        </div>

        <div className="mt-9 grid gap-7 border-y border-slate-200 py-9 md:grid-cols-3">
          {missions.map(({ title, text, icon: Icon }) => (
            <article key={title} className="mission-item">
              <span className="mission-icon">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="home-kicker">Projets et activités</p>
            <h2 className="text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl">
              Des actions visibles sur le terrain
            </h2>
          </div>
          <ButtonLink to="/mbj" variant="secondary" icon={ArrowRight}>
            Voir tous nos projets
          </ButtonLink>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {projects.map(({ title, text, image, alt }) => (
            <article key={title} className="project-card">
              <img
                src={image}
                alt={alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
