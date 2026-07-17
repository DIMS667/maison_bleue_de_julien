import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import heroImage from '../../assets/images/moi et ma mere.jpg';
import { ButtonLink } from '../DesignSystem';

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="site-container grid gap-10 py-12 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="home-kicker">Association engagée pour l’autisme</p>
          <h1 id="home-hero-title" className="home-hero-title">
            La Maison Bleue de Julien
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Nous accompagnons les personnes autistes et leurs familles avec écoute,
            respect et bienveillance, tout en agissant pour une société plus inclusive.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/mbj" icon={ArrowRight}>
              Découvrir l’association
            </ButtonLink>
            <ButtonLink to="/don" variant="donation" icon={Heart}>
              Faire un don
            </ButtonLink>
          </div>
          <p className="mt-6 border-l-2 border-blue-200 pl-4 text-sm leading-6 text-slate-500">
            Accompagnement, soutien aux familles, apprentissage et sensibilisation.
          </p>
        </div>

        <figure className="home-hero-figure">
          <img
            src={heroImage}
            alt="Julien souriant aux côtés d’une proche"
            className="h-full w-full object-cover"
          />
          <figcaption className="px-1 pt-3 text-sm text-slate-500">
            Chaque personne mérite d’avancer à son rythme, entourée et respectée.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
