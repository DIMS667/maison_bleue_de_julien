import React from 'react';
import {
  Activity,
  Award,
  BookOpen,
  Brain,
  Calendar,
  Check,
  Eye,
  Globe,
  Heart,
  MessageCircle,
  Puzzle,
  Stethoscope,
  TrendingUp,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';

const signs = [
  {
    title: "Communication et interaction",
    icon: MessageCircle,
    items: [
      'Retard ou absence de langage verbal',
      'Utilisation atypique du langage, comme l’écholalie ou les scripts',
      'Contacts visuels moins fréquents ou inconfortables',
      'Difficulté à interpréter les gestes et expressions faciales',
    ],
  },
  {
    title: 'Comportements et particularités sensorielles',
    icon: Brain,
    items: [
      'Intérêt très marqué pour un sujet précis',
      'Routines et rituels stricts, avec résistance au changement',
      'Comportements répétitifs, comme les battements de mains ou balancements',
      'Sensibilité sensorielle au bruit, à la lumière ou au toucher',
    ],
  },
];

const interventions = [
  { title: 'Interventions comportementales et éducatives', desc: 'ABA, TEACCH, ESDM ou approches adaptées au profil', icon: BookOpen },
  { title: 'Orthophonie', desc: 'Pour soutenir la communication verbale et non verbale', icon: MessageCircle },
  { title: 'Ergothérapie', desc: "Pour l'intégration sensorielle et l'autonomie", icon: Wrench },
  { title: 'Psychomotricité', desc: 'Pour la motricité globale, fine et la régulation corporelle', icon: Activity },
  { title: 'Groupes de socialisation', desc: "Pour favoriser l'interaction sociale", icon: Users },
  { title: 'Soutien familial', desc: 'Routines structurantes, écoute et collaboration', icon: Heart },
];

const myths = [
  {
    myth: "Les personnes autistes n'éprouvent pas d'émotions.",
    reality: 'Elles ressentent des émotions tout aussi intensément que les autres, mais peuvent les exprimer différemment.',
  },
  {
    myth: "L'autisme est causé par une mauvaise éducation.",
    reality: "L'autisme est un trouble neurodéveloppemental et n'est pas lié à un manque d'affection.",
  },
  {
    myth: 'Toutes les personnes autistes ont un syndrome du savant.',
    reality: 'Seule une minorité présente des capacités extraordinaires dans un domaine précis. Les profils sont très variés.',
  },
];

export default function Autisme() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Guide complet" icon={BookOpen} title="Comprendre l'autisme">
        Informez-vous sur le trouble du spectre de l'autisme, ses signes, son
        diagnostic, la sensibilisation et les ressources utiles pour accompagner
        les personnes concernées.
      </PageHero>

      <div>
        <section className="section-pad bg-white" id="definition">
          <div className="site-container">
            <SectionHeading align="left" eyebrow="Définition" icon={Puzzle} title="Qu'est-ce que l'autisme ?">
              Le trouble du spectre de l'autisme se manifeste de manière différente
              selon chaque personne.
            </SectionHeading>

            <div className="section-card p-6 sm:p-8">
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  L'autisme, également appelé trouble du spectre de l'autisme (TSA),
                  est un ensemble de troubles neurodéveloppementaux caractérisés par
                  des difficultés dans la communication et l'interaction sociale,
                  ainsi que par des comportements, intérêts ou activités restreints
                  et répétitifs.
                </p>
                <p>
                  Les personnes autistes peuvent aussi présenter des particularités
                  sensorielles et des façons différentes d'apprendre ou de percevoir
                  leur environnement.
                </p>
              </div>
              <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5 text-blue-950">
                <Brain className="mb-3 h-6 w-6 text-blue-700" aria-hidden="true" />
                <p className="font-semibold leading-7">
                  Le terme "spectre" reflète la grande variabilité des manifestations :
                  chaque personne autiste est unique, avec ses forces, ses défis et ses
                  besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70" id="statistiques">
          <div className="site-container">
            <SectionHeading eyebrow="Repères" icon={TrendingUp} title="Quelques statistiques clés">
              Selon l'Organisation Mondiale de la Santé, environ 1 enfant sur 100
              présente un trouble du spectre de l'autisme dans le monde.
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="stat-tile">
                <div className="stat-tile__value">1/100</div>
                <div className="stat-tile__label">enfants concernés dans le monde</div>
              </div>
              <div className="stat-tile">
                <TrendingUp className="h-9 w-9 text-blue-700" aria-hidden="true" />
                <div className="stat-tile__label">meilleurs outils de détection</div>
              </div>
              <div className="stat-tile">
                <Globe className="h-9 w-9 text-blue-700" aria-hidden="true" />
                <div className="stat-tile__label">toutes régions et tous milieux</div>
              </div>
            </div>

            <ul className="section-card mt-6 grid gap-3 p-6 text-slate-700">
              <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>La prévalence est en hausse, notamment grâce à de meilleurs outils de détection.</span></li>
              <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>La proportion de garçons diagnostiqués est plus élevée, mais les filles peuvent être sous-diagnostiquées.</span></li>
              <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>L'autisme se manifeste dans toutes les régions du monde et à tous les niveaux socio-économiques.</span></li>
            </ul>
          </div>
        </section>

        <section className="section-pad bg-white" id="signes-symptomes">
          <div className="site-container">
            <SectionHeading eyebrow="Signes" icon={Eye} title="Signes et symptômes">
              Les manifestations varient selon les individus. On retrouve souvent
              des différences dans la communication, les routines et les perceptions
              sensorielles.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
              {signs.map(({ title, icon: Icon, items }) => (
                <article key={title} className="section-card p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="icon-box">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                  </div>
                  <ul className="grid gap-3 text-slate-700">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70" id="diagnostic">
          <div className="site-container grid gap-6 lg:grid-cols-2">
            <div className="section-card p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="icon-box">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">Diagnostic de l'autisme</h2>
              </div>
              <p className="text-lg leading-8 text-slate-700">
                Le diagnostic est un processus multidisciplinaire impliquant souvent
                pédiatres, neuropsychologues, psychiatres, psychologues spécialisés
                ou autres professionnels. Il repose sur l'observation, des évaluations
                cliniques et parfois des tests standardisés.
              </p>
            </div>
            <div className="section-card border-l-4 border-l-[#d65f4a] p-6 sm:p-8">
              <Calendar className="mb-5 h-8 w-8 text-[#d65f4a]" aria-hidden="true" />
              <h2 className="text-2xl font-extrabold text-slate-900">Dépistage précoce</h2>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                Un diagnostic posé dès les premières années de vie peut permettre une
                prise en charge plus adaptée au développement de l'enfant.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white" id="accompagnement">
          <div className="site-container">
            <SectionHeading eyebrow="Soutien" icon={Heart} title="Accompagnement et soutien">
              Il n'existe pas de traitement unique pour l'autisme. Différentes
              interventions peuvent aider la personne autiste à développer ses
              compétences et son autonomie.
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {interventions.map(({ title, desc, icon: Icon }) => (
                <article key={title} className="soft-card p-5">
                  <span className="icon-box icon-box--soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70" id="journee-autisme">
          <div className="site-container">
            <div className="section-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="rounded-lg bg-blue-700 p-8 text-center text-white">
                <Globe className="mx-auto h-10 w-10" aria-hidden="true" />
                <p className="mt-5 text-5xl font-extrabold">2 avril</p>
                <p className="mt-2 text-sky-100">Journée mondiale de sensibilisation</p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Journée mondiale de sensibilisation à l'autisme
                </h2>
                <p className="mt-4 leading-8 text-slate-700">
                  Proclamée par l'Assemblée générale des Nations Unies en 2007, elle
                  encourage les gouvernements et la société civile à sensibiliser le
                  public à l'autisme.
                </p>
                <p className="mt-4 leading-8 text-slate-700">
                  Conférences, campagnes d'information et actions locales permettent
                  de promouvoir une meilleure compréhension et de lutter contre les
                  préjugés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white" id="mythes-realite">
          <div className="site-container">
            <SectionHeading eyebrow="Comprendre" icon={Brain} title="Mythes et réalités">
              Clarifier les idées reçues aide les familles, les professionnels et le
              public à adopter un regard plus juste.
            </SectionHeading>

            <div className="grid gap-4">
              {myths.map((item) => (
                <article key={item.myth} className="section-card grid gap-4 p-5 md:grid-cols-2 md:p-6">
                  <div className="flex gap-3 border-b border-slate-200 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
                    <X className="mt-1 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
                    <p className="leading-7 text-slate-700"><strong className="text-slate-900">Idée reçue :</strong> {item.myth}</p>
                  </div>
                  <p className="flex gap-3 leading-7 text-slate-700 md:pl-1">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    <span><strong className="text-blue-950">En réalité :</strong> {item.reality}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70" id="ressources">
          <div className="site-container">
            <SectionHeading eyebrow="Ressources" icon={BookOpen} title="Ressources et liens utiles">
              Pour en savoir plus sur l'autisme ou trouver du soutien, consultez ces
              sites et associations.
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-2">
              <a href="https://www.autisme-france.fr/" target="_blank" rel="noopener noreferrer" className="soft-card p-6">
                <Globe className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Autisme France</h3>
                <p className="mt-2 text-slate-600">Association nationale et ressources d'information.</p>
              </a>
              <a
                href="https://www.sante.gouv.fr/prevention-en-sante/autisme-et-troubles-du-neuro-developpement/"
                target="_blank"
                rel="noopener noreferrer"
                className="soft-card p-6"
              >
                <Award className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Ministère de la Santé</h3>
                <p className="mt-2 text-slate-600">Informations sur l'autisme et les troubles du neurodéveloppement.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-white" id="contact">
          <div className="site-container">
            <div className="section-card grid gap-6 border-t-4 border-t-[#d65f4a] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">Besoin d'informations ou d'aide ?</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
                  Si vous cherchez des conseils, un accompagnement ou simplement un
                  échange, notre équipe peut vous orienter.
                </p>
              </div>
              <ButtonLink to="/contact">Contacter l'association</ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
