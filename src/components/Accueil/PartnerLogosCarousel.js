import React from 'react';

import part1 from '../../assets/images/part1.png';
import part from '../../assets/images/part.jpg';
import part3 from '../../assets/images/part3.jpg';
import part4 from '../../assets/images/part4.jpg';
import part5 from '../../assets/images/part5.jpg';
import part6 from '../../assets/images/part6.jpg';
import part7 from '../../assets/images/part7.jpg';
import part8 from '../../assets/images/part8.jpg';
import part9 from '../../assets/images/part9.jpg';
import part10 from '../../assets/images/part10.jpg';
import part11 from '../../assets/images/part11.jpg';
import part12 from '../../assets/images/part12.jpg';
import part13 from '../../assets/images/part13.jpg';
import part14 from '../../assets/images/part14.jpg';
import part15 from '../../assets/images/part15.jpg';
import part16 from '../../assets/images/part16.jpg';
import part17 from '../../assets/images/part17.jpg';
import part18 from '../../assets/images/part18.jpg';
import part19 from '../../assets/images/part19.jpg';
import part20 from '../../assets/images/part20.jpg';

const logos = [
  part1,
  part,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  part11,
  part12,
  part13,
  part14,
  part15,
  part16,
  part17,
  part18,
  part19,
  part20,
];

export default function PartnerLogosCarousel() {
  return (
    <section className="section-pad-sm bg-white" aria-labelledby="partners-title">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="home-kicker">Partenaires et soutiens</p>
          <h2 id="partners-title" className="home-section-title">
            Ils accompagnent notre engagement
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Leur confiance nous aide à construire des réponses concrètes et durables.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="partner-logo">
              <img
                src={logo}
                alt={`Logo du partenaire ${index + 1} de La Maison Bleue de Julien`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
