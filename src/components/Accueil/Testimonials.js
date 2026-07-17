import React from 'react';
import { Quote } from 'lucide-react';
import t1 from '../../assets/images/temoin.jpg';
import t2 from '../../assets/images/temoin1.jpg';
import edu from '../../assets/images/edu.jpg';

const testimonials = [
  {
    id: 1,
    text: "Nous avons remarqué que notre enfant s’épanouit depuis qu’il est à la MBJ. Il est plus à l’aise, plus confiant et apprécie vraiment son temps passé là-bas.",
    author: 'Parent',
    image: t2,
    role: 'Famille accompagnée',
  },
  {
    id: 2,
    text: "La MBJ offre des activités variées et enrichissantes qui stimulent la curiosité. Ma petite-fille les apprécie beaucoup et cela l’aide à apprendre et à s’amuser en même temps.",
    author: 'Grand-parent',
    image: t1,
    role: 'Famille accompagnée',
  },
  {
    id: 3,
    text: "Travailler à la MBJ, c’est voir chaque jour les enfants grandir, s’épanouir et prendre confiance en eux. Les activités proposées développent leurs compétences.",
    author: 'Éducateur spécialisé',
    image: edu,
    role: 'Équipe pédagogique',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad-sm bg-slate-50" aria-labelledby="testimonials-title">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="home-kicker">Témoignages</p>
          <h2 id="testimonials-title" className="home-section-title">
            La parole aux familles et aux professionnels
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="testimonial-card">
              <Quote className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-base leading-7 text-slate-700">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
                <img
                  src={testimonial.image}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <span>
                  <span className="block text-sm font-bold text-blue-950">
                    {testimonial.author}
                  </span>
                  <span className="block text-xs text-slate-500">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
