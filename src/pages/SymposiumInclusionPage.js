import React from 'react';
import {
  BriefcaseBusiness,
  CalendarDays,
  Handshake,
  MapPin,
  Mic2,
  Sparkles,
  Users,
} from 'lucide-react';
import symposiumImage from '../assets/images/symposium-africain-inclusion-sociale-2026.jpeg';
import { BackLink, ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';

export default function SymposiumInclusionPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="Partenariat"
        icon={Handshake}
        title="Symposium Africain de l’Inclusion Sociale"
      >
        La Maison Bleue de Julien, fière partenaire de la deuxième édition de cet
        important rendez-vous africain.
      </PageHero>

      <article>
        <section className="section-pad bg-white">
          <div className="site-container">
            <BackLink to="/actualite">Retour aux actualités</BackLink>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <figure className="section-card overflow-hidden">
                <img
                  src={symposiumImage}
                  alt="Affiche officielle du Symposium Africain de l’Inclusion Sociale, du 27 au 30 octobre 2026 à Yaoundé"
                  className="w-full bg-slate-50 object-contain"
                />
                <figcaption className="p-4 text-center text-sm text-slate-600">
                  Deuxième édition du Symposium Africain de l’Inclusion Sociale.
                </figcaption>
              </figure>

              <aside className="space-y-5">
                <div className="section-card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="icon-box"><CalendarDays className="h-6 w-6" aria-hidden="true" /></span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Dates</p>
                      <p className="mt-1 text-xl font-extrabold text-blue-950">Du 27 au 30 octobre 2026</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-4 border-t border-sky-100 pt-5">
                    <span className="icon-box"><MapPin className="h-6 w-6" aria-hidden="true" /></span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Lieu</p>
                      <p className="mt-1 text-xl font-extrabold text-blue-950">Yaoundé, Cameroun</p>
                    </div>
                  </div>
                </div>

                <div className="section-card border-l-4 border-l-[#d65f4a] p-6 sm:p-8">
                  <Sparkles className="h-8 w-8 text-[#d65f4a]" aria-hidden="true" />
                  <p className="mt-4 text-lg font-bold leading-8 text-blue-950">
                    « 20 ans de la Convention des Nations Unies relative aux droits
                    des personnes handicapées en Afrique : progrès, défis et
                    perspectives. »
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <SectionHeading eyebrow="Notre engagement" icon={Handshake} title="Construire une société véritablement inclusive">
              Un rendez-vous pour réfléchir aux avancées réalisées, aux défis
              persistants et aux actions à renforcer.
            </SectionHeading>
            <div className="section-card space-y-5 p-6 text-lg leading-8 text-slate-700 sm:p-8">
              <p>
                La Maison Bleue de Julien est fière d’être partenaire de cet important
                rendez-vous, qui invite à réfléchir aux avancées réalisées, aux défis
                persistants et aux actions à renforcer pour une société véritablement
                inclusive.
              </p>
              <p>
                Personnes en situation de handicap, familles, associations,
                professionnels, entrepreneurs, décideurs et citoyens engagés : votre
                présence et votre voix comptent. Venez partager vos expériences,
                enrichir les réflexions et contribuer à faire émerger des solutions
                concrètes pour une Afrique où chacun peut développer son potentiel et
                participer pleinement à la vie sociale et économique.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="section-card border-t-4 border-t-blue-700 p-6 sm:p-8">
              <Mic2 className="h-10 w-10 text-blue-700" aria-hidden="true" />
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-blue-700">Panel 8</p>
              <h2 className="mt-2 text-2xl font-extrabold text-blue-950">Jeudi 29 octobre 2026</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Mme Jeanne Kiboum Tonye, Présidente de La Maison Bleue de Julien,
                assurera la modération du panel consacré à l’entrepreneuriat et à
                l’autonomisation économique des personnes handicapées.
              </p>
            </div>

            <div>
              <SectionHeading eyebrow="Panel 8" icon={BriefcaseBusiness} title="Entrepreneuriat et autonomisation économique" />
              <div className="section-card space-y-5 p-6 text-lg leading-8 text-slate-700 sm:p-8">
                <p>
                  Ce sujet nous tient particulièrement à cœur. À La Maison Bleue de
                  Julien, nous sommes convaincus que l’inclusion passe aussi par
                  l’apprentissage, le développement des compétences, l’autonomie et
                  l’accès à des opportunités économiques, y compris pour les jeunes
                  autistes.
                </p>
                <p>
                  À travers notre Classe d’Apprentissage au Travail et Alphabétisation
                  (CATA), nous faisons chaque jour l’expérience de cette conviction :
                  donner à chacun la possibilité d’apprendre, de créer, de produire et
                  de trouver sa place dans la société.
                </p>
                <ButtonLink to="/actualites/cata">Découvrir la CATA</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-sky-50/70">
          <div className="site-container">
            <blockquote className="section-card border-l-4 border-l-[#d65f4a] p-7 text-center sm:p-10">
              <Users className="mx-auto h-9 w-9 text-[#d65f4a]" aria-hidden="true" />
              <p className="mx-auto mt-5 max-w-3xl text-2xl font-extrabold leading-relaxed text-blue-950 sm:text-3xl">
                Parce que l’inclusion ne se décrète pas, elle se construit, ensemble
                et dans l’action !
              </p>
            </blockquote>
          </div>
        </section>
      </article>
    </div>
  );
}
