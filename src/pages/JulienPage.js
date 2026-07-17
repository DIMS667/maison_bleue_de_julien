import React from 'react';
import { ArrowRight, Heart, MessageCircle, Palette, Quote, Users } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import juju from '../assets/images/juju.jpg';
import jujuEtPere from '../assets/images/moi et mon pere.jpg';
import { ButtonLink, PageHero, SectionHeading } from '../components/DesignSystem';

const friends = ['Armand', 'Samuel', 'Maëva', 'Erica', 'Fred', 'Ken', 'Florian', 'Thomas'];

const socialLinks = [
  {
    label: 'Suivre La Maison Bleue de Julien sur Facebook',
    href: 'https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien',
    icon: FaFacebook,
  },
  {
    label: 'Suivre La Maison Bleue de Julien sur Instagram',
    href: 'https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==',
    icon: FaInstagram,
  },
  {
    label: 'Suivre La Maison Bleue de Julien sur YouTube',
    href: 'https://www.youtube.com',
    icon: FaYoutube,
  },
];

export default function JulienPage() {
  return (
    <div className="page-surface min-h-screen">
      <PageHero
        compact
        eyebrow="Notre Julien"
        icon={Heart}
        title="Bonjour, je suis Julien"
        image={juju}
        imageAlt="Julien souriant face à l'objectif"
      >
        Découvrez mon histoire, mes passions et mon quotidien au sein de La Maison
        Bleue de Julien.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Mon parcours" icon={MessageCircle} title="Mon histoire">
                Une histoire familiale devenue un engagement collectif pour mieux
                accompagner les personnes autistes et leurs proches.
              </SectionHeading>

              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Je m'appelle Julien, <strong>né le 8 novembre 2005</strong>, et je suis
                  autiste. Bien que je ne parle pas, j'arrive à partager mes émotions et
                  mon affection grâce à mon grand sourire. On dit souvent que je suis un
                  garçon très chaleureux, toujours prêt à faire un câlin ou à faire une
                  sieste.
                </p>
                <p>
                  Parfois, je suis un peu paresseux, mais je mets tout mon cœur dans ce qui
                  me passionne. Cela vaut la peine d'être patient avec moi, car j'ai beaucoup
                  d'amour à donner.
                </p>
              </div>
            </div>

            <aside className="section-card border-l-4 border-l-[#d65f4a] p-6 sm:p-8">
              <Quote className="h-8 w-8 text-[#d65f4a]" aria-hidden="true" />
              <blockquote className="mt-5 text-lg leading-8 text-slate-700">
                Ma maman est partie de notre expérience et de notre vécu pour créer
                l'association La Maison Bleue de Julien. Elle partage les enseignements de
                mon parcours, positifs comme négatifs, afin d'accompagner et de conseiller
                d'autres parents.
              </blockquote>
            </aside>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <SectionHeading eyebrow="En images" icon={Palette} title="Quelques moments de mon quotidien">
              Des instants simples qui racontent ma façon de communiquer, de créer et de
              partager avec ma famille.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
              <figure className="section-card overflow-hidden">
                <img
                  src={juju}
                  alt="Portrait de Julien souriant"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5 leading-7 text-slate-700">
                  Mon sourire est mon meilleur moyen de montrer combien je vous apprécie.
                </figcaption>
              </figure>

              <figure className="section-card overflow-hidden">
                <img
                  src={jujuEtPere}
                  alt="Julien réalisant une activité de peinture avec son père"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5 leading-7 text-slate-700">
                  Ici, je réalise une activité de peinture avec mon père.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Vie associative" icon={Users} title="Mes amis et moi à la MBJ">
                À l'association, chaque activité répond à un objectif précis et respecte
                le rythme de chacun.
              </SectionHeading>

              <div className="flex flex-wrap gap-2" aria-label="Les amis de Julien à la MBJ">
                {friends.map((friend) => (
                  <span key={friend} className="status-pill">
                    {friend}
                  </span>
                ))}
              </div>
            </div>

            <div className="section-card p-6 sm:p-8">
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  À La Maison Bleue de Julien, j'ai la chance d'être avec mes pairs
                  autistes. Nos activités sont préparées avec soin pour travailler la
                  motricité fine ou globale, les interactions sociales et l'autonomie.
                </p>
                <p>
                  Nous apprenons en nous amusant lors des ateliers créatifs et culinaires,
                  ainsi qu'en Classe d'Apprentissage au Travail. Vous pouvez découvrir nos
                  réalisations en photos et en vidéos sur les réseaux sociaux de
                  l'association.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <div className="section-card grid gap-7 border-t-4 border-t-[#d65f4a] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="section-kicker">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  <span>Mon petit mot</span>
                </p>
                <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">
                  Merci d'avoir pris le temps de me découvrir
                </h2>
                <div className="mt-4 max-w-4xl space-y-4 leading-8 text-slate-700">
                  <p>
                    Ma famille et moi sommes unis pour faire vivre La Maison Bleue et
                    apporter du soutien à ceux qui en ont besoin. Même si je suis non
                    verbal, je ne manque pas de façons de communiquer mes sentiments.
                  </p>
                  <p>
                    J'espère que vous pourrez, vous aussi, trouver un espace où vous sentir
                    libre d'être vous-même. Si vous passez par la Maison Bleue, je serai
                    heureux de vous offrir mon plus beau sourire.
                  </p>
                </div>
              </div>
              <ButtonLink to="/contact" icon={ArrowRight} iconPosition="end">
                Nous contacter
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-white">
          <div className="site-container flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-blue-950">Suivez notre quotidien</h2>
              <p className="mt-2 text-slate-600">Retrouvez les activités et les nouvelles de l'association.</p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
