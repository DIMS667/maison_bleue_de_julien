import React from 'react';
import { ArrowRight, BriefcaseBusiness, CalendarDays, Clock3, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import mamanEventImage from '../../assets/images/maman-mais-pas-seulement-19-septembre-2026.jpeg';
import symposiumImage from '../../assets/images/symposium-africain-inclusion-sociale-2026.jpeg';

export default function FeaturedNewsCards() {
  return (
    <>
      <article className="article-card overflow-hidden">
        <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600 text-white">
          <div className="max-w-xs px-6 text-center">
            <BriefcaseBusiness className="mx-auto h-14 w-14" aria-hidden="true" />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-100">
              Apprendre en faisant
            </p>
            <p className="mt-2 text-3xl font-extrabold">CATA</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="status-pill">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
              À partir de 15 ans
            </span>
            <span className="status-pill">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              Du lundi au vendredi
            </span>
          </div>
          <h3 className="text-xl font-bold leading-snug text-blue-950">
            La CATA est ouverte à tous les jeunes autistes
          </h3>
          <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-slate-600">
            La Classe d'Apprentissage au Travail et Alphabétisation propose un
            accompagnement pratique, inclusif et individualisé pour développer les
            compétences et construire l'autonomie.
          </p>
          <Link to="/actualites/cata" className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-800">
            <span>Découvrir la CATA</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>

      <article className="article-card overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-sky-50">
          <img
            src={mamanEventImage}
            alt="Moments de la journée Maman, mais pas seulement du 19 septembre 2026"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="status-pill">Rencontre</span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              19 septembre 2026
            </span>
          </div>
          <h3 className="text-xl font-bold leading-snug text-blue-950">
            Maman, mais pas seulement…
          </h3>
          <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-slate-600">
            Une journée magnifique, relaxante et profondément humaine, faite de
            partages, de créativité, de rires et de solidarité entre les mamans.
          </p>
          <Link to="/actualites/maman-mais-pas-seulement-2026" className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-800">
            <span>Revivez cette journée</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>

      <article className="article-card overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-sky-50">
          <img
            src={symposiumImage}
            alt="Affiche du Symposium Africain de l’Inclusion Sociale 2026"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="status-pill">Partenariat</span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              27–30 octobre 2026
            </span>
          </div>
          <h3 className="text-xl font-bold leading-snug text-blue-950">
            Symposium Africain de l’Inclusion Sociale
          </h3>
          <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-slate-600">
            La Maison Bleue de Julien est fière d’être partenaire de cette deuxième
            édition consacrée aux droits des personnes handicapées en Afrique.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>Yaoundé, Cameroun</span>
          </div>
          <Link to="/actualites/symposium-africain-inclusion-sociale-2026" className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-800">
            <span>Découvrir le symposium</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </>
  );
}
