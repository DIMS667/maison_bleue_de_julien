import React from 'react';
import { ArrowRight } from 'lucide-react';
import JulienImage from '../../assets/images/WhatsApp Image 2024-10-07 at 14.08.52_331a06cd.jpg';
import { ButtonLink } from '../DesignSystem';

export default function WhoIsJulien() {
  return (
    <section className="section-pad-sm bg-slate-50" aria-labelledby="julien-title">
      <div className="site-container grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
        <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white">
          <img
            src={JulienImage}
            alt="Julien participant à un atelier de modelage"
            className="aspect-[4/3] h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="home-kicker">Julien, notre inspiration</p>
          <h2 id="julien-title" className="home-section-title">
            Une identité qui rassemble toute une communauté
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Julien représente une personne autiste qui a besoin de soutien pour son
              développement et son insertion socioprofessionnelle. Il représente aussi
              ce frère, cette sœur, ce parent ou cet ami qui cherche un appui humain et
              des informations utiles.
            </p>
            <p>
              Julien, c’est toi, c’est moi, c’est toute personne physique ou morale qui
              accompagne l’association et contribue à rendre notre société plus inclusive.
            </p>
          </div>
          <div className="mt-7">
            <ButtonLink to="/julien" variant="secondary" icon={ArrowRight}>
              En savoir plus sur Julien
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
