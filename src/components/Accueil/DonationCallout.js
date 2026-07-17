import React from 'react';
import { Heart } from 'lucide-react';
import { ButtonLink } from '../DesignSystem';

export default function DonationCallout() {
  return (
    <section className="donation-band" aria-labelledby="donation-title">
      <div className="site-container flex flex-col gap-7 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#a33d30]">Nous soutenir</p>
          <h2 id="donation-title" className="mt-2 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
            Votre générosité rend nos actions possibles
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Chaque don contribue aux activités adaptées, au matériel pédagogique et
            à l’accompagnement des personnes autistes et de leurs familles.
          </p>
        </div>
        <ButtonLink to="/don" variant="donation" icon={Heart} className="shrink-0">
          Faire un don
        </ButtonLink>
      </div>
    </section>
  );
}
