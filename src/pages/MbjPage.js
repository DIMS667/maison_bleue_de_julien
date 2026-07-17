import React from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Download,
  Eye,
  FileText,
  Heart,
  Megaphone,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';
import groupe1 from '../assets/images/groupe1.jpg';
import groupe2 from '../assets/images/group2.jpg';
import { ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';
import { reports } from '../data/reports';

const teamImages = [
  { src: groupe1, alt: "Équipe de La Maison Bleue de Julien lors d'une action de sensibilisation" },
  { src: groupe2, alt: "Membres et bénévoles de La Maison Bleue de Julien" },
];

const missions = [
  {
    title: 'Accompagner',
    text: 'Offrir des programmes éducatifs, thérapeutiques et sociaux adaptés.',
    icon: Users,
  },
  {
    title: 'Sensibiliser',
    text: 'Informer et former les familles, les professionnels et le grand public.',
    icon: Megaphone,
  },
  {
    title: 'Défendre',
    text: "Plaider pour les droits et l'inclusion des personnes autistes.",
    icon: ShieldCheck,
  },
];

const projects = [
  {
    title: 'Ateliers éducatifs',
    text: 'Des sessions hebdomadaires pour développer les compétences cognitives, sociales et pratiques.',
    icon: BookOpen,
  },
  {
    title: 'Soutien parental',
    text: 'Des groupes de parole et des formations pour outiller les familles dans leur quotidien.',
    icon: Heart,
  },
  {
    title: 'Journées de sensibilisation',
    text: "Des campagnes locales pour briser les stéréotypes et promouvoir l'inclusion.",
    icon: Megaphone,
  },
  {
    title: 'Inclusion professionnelle',
    text: 'Des collaborations avec des entreprises pour intégrer des personnes autistes en milieu professionnel.',
    icon: Briefcase,
  },
];

export default function MbjPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="Notre histoire"
        icon={Heart}
        title="La Maison Bleue de Julien"
        image={groupe2}
        imageAlt="Membres et bénévoles de La Maison Bleue de Julien réunis"
      >
        Fondée en 2020 par Kiboum Jeanne, l'association accompagne les personnes
        autistes et soutient leurs familles avec une présence de terrain engagée.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading align="left" eyebrow="Origine" icon={BookOpen} title="Notre histoire">
              La MBJ est née d'un besoin crucial d'accompagnement dans un environnement
              bienveillant et adapté.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="section-card p-6 sm:p-8">
                <p className="text-lg leading-8 text-slate-700">
                  La MBJ est née d'un besoin crucial d'accompagnement des personnes
                  autistes dans un environnement bienveillant et adapté à leurs besoins
                  spécifiques. Inspirée par Julien, un jeune homme autiste non verbal,
                  elle est portée par la détermination de sa mère, Kiboum Jeanne.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    { title: 'Espace sécurisé', text: 'Un environnement inclusif pour les jeunes autistes', icon: Users },
                    { title: 'Activités adaptées', text: 'Éducatives, créatives et sociales', icon: Target },
                    { title: 'Soutien familial', text: 'Accompagnement constant des familles', icon: Heart },
                  ].map(({ title, text, icon: Icon }) => (
                    <div key={title} className="rounded-lg border border-sky-100 bg-sky-50/70 p-4">
                      <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                      <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="section-card border-l-4 border-l-emerald-500 p-6">
                <Award className="h-9 w-9 text-emerald-600" aria-hidden="true" />
                <p className="mt-4 text-2xl font-extrabold text-slate-900">Plus de 15 personnes accompagnées</p>
                <p className="mt-3 leading-7 text-slate-600">
                  Depuis notre création, avec l'appui de bénévoles et partenaires
                  engagés pour promouvoir l'inclusion.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70" id="rapports">
          <div className="site-container">
            <SectionHeading eyebrow="Mission" icon={Target} title="Nos missions et notre impact">
              Nous travaillons à créer un monde où les personnes autistes sont mieux
              comprises, accompagnées et pleinement intégrées.
            </SectionHeading>

            <div className="grid gap-5 md:grid-cols-3">
              {missions.map(({ title, text, icon: Icon }) => (
                <article key={title} className="soft-card p-6">
                  <span className="icon-box">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Projets" icon={Award} title="Nos projets phares">
              Des actions régulières et ciblées pour soutenir l'autonomie, la confiance
              et l'inclusion.
            </SectionHeading>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map(({ title, text, icon: Icon }) => (
                <article key={title} className="soft-card p-6">
                  <div className="flex gap-4">
                    <span className="icon-box icon-box--mint">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <SectionHeading align="left" eyebrow="Transparence" icon={FileText} title="Nos rapports annuels">
              Consultez nos rapports annuels pour découvrir l'évolution, les réussites
              et les chiffres clés de la MBJ.
            </SectionHeading>

            <div className="section-card overflow-hidden" role="region" aria-label="Rapports consultables et téléchargeables">
              <div className="hidden grid-cols-[0.55fr_1.45fr_1fr] gap-4 bg-blue-800 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white md:grid">
                <div>Année</div>
                <div>Titre</div>
                <div>Actions</div>
              </div>
              <div className="divide-y divide-sky-100">
                {reports.map((report) => (
                  <div key={report.file} className="grid gap-4 px-5 py-5 md:grid-cols-[0.55fr_1.45fr_1fr] md:items-center md:px-6">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-blue-800">
                      <span>{report.year}</span>
                      {report.featured && <span className="status-pill">Nouveau</span>}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{report.title}</div>
                      <div className="mt-1 text-xs font-semibold uppercase text-slate-500">{report.label}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <ButtonLink to={`/rapports/${report.id}`} icon={Eye} variant="secondary">
                        Lire
                      </ButtonLink>
                      <a href={report.file} className="btn btn-primary" download>
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Télécharger
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Équipe" icon={Users} title="Notre équipe">
              Une équipe dévouée qui œuvre chaque jour pour soutenir et accompagner
              les personnes autistes.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
              {teamImages.map((image) => (
                <figure key={image.src} className="section-card overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-5">
                    <h3 className="text-xl font-extrabold text-blue-950">Ensemble pour l'inclusion</h3>
                    <p className="mt-2 leading-7 text-slate-600">La Maison Bleue de Julien sur le terrain.</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-sky-50/70">
          <div className="site-container">
            <div className="section-card grid gap-6 border-t-4 border-t-[#d65f4a] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">Agissons ensemble</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
                Vous souhaitez en savoir plus, proposer un partenariat ou soutenir nos actions ?
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/contact">
                  Nous contacter
                </ButtonLink>
                <ButtonLink to="/don" icon={Heart} variant="warm">
                  Faire un don
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
