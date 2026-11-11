import React from 'react';
import { CalendarDays, Heart, Palette, Sparkles, Users } from 'lucide-react';
import mamanEventImage from '../assets/images/maman-mais-pas-seulement-19-septembre-2026.jpeg';
import { BackLink, PageHero, SectionHeading } from '../components/DesignSystem';

export default function MamanEventPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="19 septembre 2026"
        icon={CalendarDays}
        title="Maman, mais pas seulement…"
        image={mamanEventImage}
        imageAlt="Montage photo de la journée Maman, mais pas seulement"
      >
        Une journée magnifique, relaxante et profondément humaine, placée sous le
        signe du partage, de la créativité et de la solidarité.
      </PageHero>

      <article className="section-pad bg-white">
        <div className="site-container max-w-5xl">
          <BackLink to="/actualite">Retour aux actualités</BackLink>

          <figure className="section-card mt-8 overflow-hidden">
            <img
              src={mamanEventImage}
              alt="Les participantes et les activités de la journée du 19 septembre 2026"
              className="w-full object-cover"
            />
            <figcaption className="p-4 text-center text-sm text-slate-600">
              Quelques moments de la rencontre « Maman, mais pas seulement… ».
            </figcaption>
          </figure>

          <div className="mt-10 space-y-10">
            <section>
              <SectionHeading eyebrow="Une rencontre chaleureuse" icon={Sparkles} title="Rire, partager et se retrouver" />
              <div className="section-card space-y-5 p-6 text-lg leading-8 text-slate-700 sm:p-8">
                <p>
                  Dès le début, le brise-glace autour des trois catégories « Si
                  j’étais une fleur… », « Si j’étais un produit de beauté… » et « Si
                  j’étais une chanson… » a installé une ambiance joyeuse et détendue.
                  Les mamans ont ri, partagé et dansé ensemble au rythme des chansons
                  choisies par chacune.
                </p>
                <p>
                  Les interventions sur la spiritualité ainsi que sur les soins et
                  astuces beauté ont été très appréciées. Les animatrices ont su
                  captiver l’attention des participantes et favoriser des échanges
                  riches, participatifs et respectueux. Des points de vue différents
                  se sont exprimés, parfois avec passion, mais toujours dans un esprit
                  de bienveillance.
                </p>
              </div>
            </section>

            <section>
              <SectionHeading eyebrow="Créer ensemble" icon={Palette} title="Une œuvre porteuse de sens" />
              <div className="section-card space-y-5 p-6 text-lg leading-8 text-slate-700 sm:p-8">
                <p>
                  La création collective sur toile, symbolisant le chemin qui mène à
                  la Maison Bleue, a constitué un moment particulièrement fort. Les
                  mamans ont construit ensemble une œuvre révélant que chacune apporte
                  sa contribution à une histoire commune.
                </p>
                <p>
                  Les échanges autour du repas ont donné lieu à des moments d’écoute
                  profonde, de partage d’expériences et d’émotions, parfois de larmes,
                  mais aussi de réconfort et de solidarité. Les jeux organisés après
                  le repas ont apporté de nombreux fous rires et renforcé davantage
                  les liens entre les mamans.
                </p>
              </div>
            </section>

            <section>
              <SectionHeading eyebrow="Repartir grandie" icon={Users} title="Un engagement pour l’année à venir" />
              <div className="section-card space-y-5 p-6 text-lg leading-8 text-slate-700 sm:p-8">
                <p>
                  Le moment du challenge personnel, suivi de la remise des kits, a
                  permis à chacune de repartir avec un engagement pour elle-même, pour
                  La Maison Bleue de Julien et pour l’année à venir.
                </p>
                <p>
                  La journée s’est achevée par des photos souvenirs et une promenade
                  sur le site d’accueil, dans une atmosphère de sérénité et de
                  gratitude. Au-delà des activités, cette rencontre a renforcé la
                  cohésion entre les mamans.
                </p>
              </div>
            </section>

            <blockquote className="section-card border-l-4 border-l-[#d65f4a] p-7 text-center sm:p-10">
              <Heart className="mx-auto h-8 w-8 text-[#d65f4a]" aria-hidden="true" />
              <p className="mt-5 text-2xl font-extrabold leading-relaxed text-blue-950 sm:text-3xl">
                Je compte.<br />J’appartiens.<br />Je peux apporter quelque chose.
              </p>
            </blockquote>
          </div>
        </div>
      </article>
    </div>
  );
}
