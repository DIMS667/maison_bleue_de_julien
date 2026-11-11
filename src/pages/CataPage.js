import React from 'react';
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle,
  ChefHat,
  Computer,
  Dumbbell,
  HandHeart,
  Leaf,
  Palette,
  Scissors,
  Sparkles,
  Users,
} from 'lucide-react';
import { BackLink, ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';

const learningAreas = [
  { icon: BookOpenCheck, title: 'Alphabétisation', text: 'Développer les compétences en lecture, écriture et communication.' },
  { icon: Scissors, title: 'Couture', text: 'Acquérir des techniques de confection et de réalisation d’articles.' },
  { icon: Palette, title: 'Perlage et activités artistiques', text: 'Développer la créativité, la précision et la motricité fine.' },
  { icon: ChefHat, title: 'Cuisine', text: 'Préparer des repas, des jus et des produits de transformation alimentaire.' },
  { icon: Leaf, title: 'Agriculture hors-sol', text: 'S’initier aux techniques de production végétale.' },
  { icon: Computer, title: 'Informatique', text: 'Développer les compétences numériques de base.' },
  { icon: HandHeart, title: 'Autonomie au quotidien', text: 'Renforcer les capacités à réaliser les gestes et activités de la vie courante.' },
  { icon: Dumbbell, title: 'Sport et activités physiques', text: 'Favoriser le bien-être, la coordination et les interactions sociales.' },
];

const goals = [
  'Développer ses capacités et révéler son potentiel',
  'Acquérir des compétences pratiques et transférables',
  'Gagner en autonomie dans la vie quotidienne',
  'Développer sa confiance en soi et sa capacité à faire des choix',
  'Participer à des activités de production',
  'Explorer des possibilités d’insertion socioprofessionnelle',
];

export default function CataPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="Programme d’apprentissage"
        icon={BriefcaseBusiness}
        title="CATA – Classe d’Apprentissage au Travail et Alphabétisation"
      >
        Apprendre, développer ses compétences et construire son autonomie.
      </PageHero>

      <section className="section-pad bg-white">
        <div className="site-container">
          <BackLink to="/actualite">Retour aux actualités</BackLink>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="section-card p-6 sm:p-8">
              <SectionHeading eyebrow="Le programme" icon={Users} title="Un accompagnement adapté à chaque jeune" />
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  La Classe d’Apprentissage au Travail et Alphabétisation (CATA) est
                  un programme de La Maison Bleue de Julien destiné principalement
                  aux adolescents et aux jeunes adultes, notamment ceux présentant
                  des troubles du neurodéveloppement, dont l’autisme.
                </p>
                <p>
                  Face aux difficultés d’accès à une éducation adaptée, à la
                  formation professionnelle et aux possibilités d’insertion sociale
                  et économique, la CATA propose un cadre d’apprentissage pratique,
                  inclusif et individualisé.
                </p>
              </div>
            </div>

            <aside className="section-card border-l-4 border-l-emerald-500 p-6 sm:p-8">
              <Sparkles className="h-9 w-9 text-emerald-600" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold text-blue-950">Inscriptions ouvertes</h2>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                La CATA accueille désormais tous les jeunes autistes âgés de 15 ans
                et plus, du lundi au vendredi.
              </p>
              <ButtonLink to="/contact" className="mt-6">Nous contacter</ButtonLink>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad bg-sky-50/70">
        <div className="site-container">
          <SectionHeading eyebrow="Notre approche" icon={HandHeart} title="Respecter le rythme et le potentiel de chacun">
            Chaque apprenant est considéré dans son individualité, avec ses capacités,
            son rythme d’apprentissage, ses besoins et son potentiel.
          </SectionHeading>
          <div className="section-card p-6 text-lg leading-8 text-slate-700 sm:p-8">
            <p>
              L’accompagnement repose sur une pédagogie adaptée privilégiant la
              pratique, la répétition, les supports visuels et la mise en situation
              réelle. Les apprentissages sont progressivement orientés vers une plus
              grande autonomie dans les activités quotidiennes et professionnelles.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <SectionHeading eyebrow="Apprentissages" icon={BookOpenCheck} title="Des domaines complémentaires" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {learningAreas.map(({ icon: Icon, title, text }) => (
              <article key={title} className="soft-card p-6">
                <span className="icon-box"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <h2 className="mt-5 text-lg font-bold text-blue-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sky-50/70">
        <div className="site-container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Notre objectif" icon={CheckCircle} title="Des compétences pour une vie plus autonome" />
            <ul className="section-card grid gap-4 p-6 sm:p-8">
              {goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-slate-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Apprendre en faisant" icon={BriefcaseBusiness} title="Des réalisations concrètes" />
            <div className="section-card space-y-5 p-6 text-lg leading-8 text-slate-700 sm:p-8">
              <p>
                Les apprenants réalisent notamment des articles de couture, des
                créations en perles, des préparations culinaires et des produits
                issus de leurs ateliers.
              </p>
              <p>
                Ces réalisations valorisent leurs compétences, reconnaissent leurs
                efforts et les familiarisent progressivement avec les exigences d’une
                activité productive. Les progrès sont suivis individuellement selon
                le degré d’autonomie et le niveau d’assistance nécessaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-white">
        <div className="site-container">
          <div className="section-card border-t-4 border-t-[#d65f4a] p-6 text-center sm:p-8">
            <h2 className="text-2xl font-extrabold text-blue-950">Notre conviction</h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Chaque jeune possède des capacités qui méritent d’être reconnues,
              développées et valorisées. Les différences ne constituent pas une
              limite à l’apprentissage et chaque progrès compte. L’avenir d’un jeune
              ne doit pas être défini par ses difficultés, mais aussi par les
              possibilités que nous lui donnons de développer ses compétences, de
              gagner en autonomie et de trouver sa place dans la société.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
