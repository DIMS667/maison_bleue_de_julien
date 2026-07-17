import React from 'react';
import { ArrowRight, CalendarDays, CircleHelp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/maison_bleu.jpg';

const quickLinks = [
  {
    title: "Comprendre l’autisme",
    text: 'Des repères fiables pour mieux comprendre les besoins et les réalités de l’autisme.',
    href: '/autisme',
    icon: CircleHelp,
  },
  {
    title: 'Obtenir de l’aide',
    text: 'Échanger avec notre équipe, être écouté et trouver une orientation adaptée.',
    href: '/contact',
    icon: MessageCircle,
  },
  {
    title: 'Découvrir nos activités',
    text: 'Ateliers, apprentissages et actions de sensibilisation menés sur le terrain.',
    href: '/mbj',
    icon: CalendarDays,
  },
];

export default function CompanyIntro() {
  return (
    <section className="section-pad bg-white" aria-labelledby="association-title">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="Logo de La Maison Bleue de Julien"
              className="h-auto w-full max-w-[260px] object-contain"
              loading="lazy"
            />
          </div>

          <div>
            <p className="home-kicker">Notre association</p>
            <h2 id="association-title" className="home-section-title">
              Un accompagnement humain, concret et durable
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                La Maison Bleue de Julien est une association qui offre un espace
                inclusif et chaleureux aux personnes autistes et à leurs familles.
                Elle agit pour favoriser leur autonomie, leur épanouissement et leur
                insertion socioprofessionnelle.
              </p>
              <p>
                Notre action repose sur l’écoute, le respect des besoins de chacun,
                des activités adaptées et un soutien régulier aux familles.
              </p>
            </div>
            <blockquote className="association-quote">
              Créer un environnement où chaque personne autiste peut progresser,
              apprendre et trouver sa place.
            </blockquote>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-10 lg:mt-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="home-kicker">Accès rapides</p>
              <h2 className="text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl">
                Trouver rapidement la bonne information
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Des points d’entrée simples pour les familles, les personnes accompagnées
              et celles qui souhaitent mieux connaître nos actions.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {quickLinks.map(({ title, text, href, icon: Icon }) => (
              <Link key={title} to={href} className="quick-link-card group">
                <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-blue-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-800">
                  En savoir plus
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
