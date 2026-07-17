import React, { useEffect, useState } from 'react';
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  Gift,
  Heart,
  MapPin,
  Pause,
  Play,
  Quote,
  Tag,
  Users,
  X,
  ZoomIn,
} from 'lucide-react';
import { cx } from '../DesignSystem';

import donMANDEL from '../../assets/images/donMANDEL.jpg';
import AA from '../../assets/images/AA.jpg';
import BB from '../../assets/images/BB.jpg';
import CC from '../../assets/images/CC.jpg';
import image67 from '../../assets/images/67.jpg';

import actu from '../../assets/images/firt.jpg';
import actu2 from '../../assets/images/11.jpg';
import actu1 from '../../assets/images/22.jpg';

import prog1 from '../../assets/images/actu1.jpg';
import prog2 from '../../assets/images/actu2.jpg';
import prog3 from '../../assets/images/actu3.jpg';
import prog4 from '../../assets/images/actu4.jpg';
import prog5 from '../../assets/images/actu5.jpg';
import prog6 from '../../assets/images/actu7.jpg';

const mandelaDayImages = [
  { src: donMANDEL, title: 'Cérémonie de remise du don', category: 'Mandela Day' },
  { src: AA, title: 'Partenaires MTN et Chococam', category: 'Partenaires' },
  { src: BB, title: "Haut Commissariat d'Afrique du Sud", category: 'Officiel' },
  { src: CC, title: "Équipe de la Maison Bleue", category: 'Équipe MBJ' },
  { src: image67, title: 'Moment de partage', category: 'Célébration' },
];

const pastPrograms = [
  {
    id: 1,
    image: prog1,
    title: "Sensibilisation à l'autisme",
    description: "Une initiative visant à informer et sensibiliser le public sur l'autisme, en favorisant une meilleure compréhension et inclusion des personnes autistes.",
    category: 'Sensibilisation',
    year: '2024',
    month: 'Décembre',
  },
  {
    id: 7,
    image: actu,
    title: 'Programme de sensibilisation communautaire',
    description: "Initiative communautaire visant à sensibiliser le grand public sur l'autisme et promouvoir l'inclusion sociale.",
    category: 'Sensibilisation',
    year: '2024',
    month: 'Novembre',
  },
  {
    id: 8,
    image: actu1,
    title: 'Ateliers de formation pour familles',
    description: "Sessions de formation dédiées aux familles pour mieux comprendre et accompagner leurs proches autistes.",
    category: 'Formation',
    year: '2024',
    month: 'Octobre',
  },
  {
    id: 9,
    image: actu2,
    title: "Programme d'activités spécialisées",
    description: "Activités adaptées et spécialisées pour favoriser le développement et l'épanouissement des personnes autistes.",
    category: 'Activités',
    year: '2024',
    month: 'Septembre',
  },
  {
    id: 6,
    image: prog6,
    title: 'Salon International de la Santé au Cameroun',
    description: 'Du 22 au 26 juillet 2024, la Maison Bleue de Julien a participé au Salon International de la Santé au Cameroun.',
    category: 'Événement',
    year: '2024',
    month: 'Juillet',
  },
  {
    id: 2,
    image: prog2,
    title: 'Autisme et fratrie',
    description: "Un programme dédié aux frères et sœurs d'enfants autistes, les aidant à mieux comprendre l'autisme et à renforcer les liens familiaux.",
    category: 'Famille',
    year: '2024',
    month: 'Juin',
  },
  {
    id: 4,
    image: prog4,
    title: 'Camp de vacances',
    description: "Un séjour ludique et éducatif offrant aux enfants autistes des activités adaptées, favorisant l'épanouissement personnel et les interactions sociales.",
    category: 'Vacances',
    year: '2023',
    month: 'Août',
  },
  {
    id: 3,
    image: prog3,
    title: 'Atelier créatif pour enfants autistes',
    description: "Un espace d'expression artistique conçu pour stimuler la créativité et le développement sensoriel des enfants autistes à travers diverses activités manuelles.",
    category: 'Créativité',
    year: '2023',
    month: 'Mai',
  },
  {
    id: 5,
    image: prog5,
    title: 'Atelier de poterie',
    description: "Un atelier pratique permettant aux enfants autistes d'explorer la poterie comme moyen d'expression et de développement sensoriel.",
    category: 'Artisanat',
    year: '2023',
    month: 'Mars',
  },
];

function Lightbox({ isOpen, currentIndex, images, onClose, onPrev, onNext }) {
  if (!isOpen) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/95 p-4"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Fermer la galerie"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <figure className="max-h-[86vh] max-w-6xl text-center">
        <img
          src={current.src}
          alt={current.title}
          className="max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-white">
          <strong>{current.title}</strong>
          <span className="ml-3 text-slate-300">{currentIndex + 1} / {images.length}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function ProgramsSection() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!isAutoPlay || lightboxOpen) return undefined;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mandelaDayImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlay, lightboxOpen]);

  const years = [...new Set(pastPrograms.map((program) => program.year))].sort((a, b) => Number(b) - Number(a));
  const categories = [...new Set(pastPrograms.map((program) => program.category))].sort();

  const filteredPrograms = pastPrograms.filter((program) => {
    const yearMatch = selectedYear === 'all' || program.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const resetFilters = () => {
    setSelectedYear('all');
    setSelectedCategory('all');
  };

  const currentImage = mandelaDayImages[currentImageIndex];

  return (
    <div className="space-y-16">
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        images={mandelaDayImages}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + mandelaDayImages.length) % mandelaDayImages.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % mandelaDayImages.length)}
      />

      <section aria-labelledby="mandela-day-title" className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="section-card overflow-hidden">
            <div className="relative aspect-[16/11] bg-sky-50">
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <button
                type="button"
                onClick={() => {
                  setLightboxIndex(currentImageIndex);
                  setLightboxOpen(true);
                }}
                className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 text-blue-800 shadow-sm transition-colors hover:bg-white"
                aria-label="Agrandir l'image"
              >
                <ZoomIn className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + mandelaDayImages.length) % mandelaDayImages.length)}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-white/90 text-blue-800 shadow-sm transition-colors hover:bg-white"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % mandelaDayImages.length)}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-white/90 text-blue-800 shadow-sm transition-colors hover:bg-white"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="border-t border-slate-200 p-5">
              <span className="status-pill">{currentImage.category}</span>
              <h3 className="mt-3 text-xl font-extrabold text-blue-950">{currentImage.title}</h3>
            </div>
          </div>

          <div className="section-card p-6">
            <div className="section-kicker">
              <Gift className="h-4 w-4" aria-hidden="true" />
              <span>Mandela Day 2025</span>
            </div>
            <h2 id="mandela-day-title" className="text-3xl font-extrabold leading-tight text-slate-900">
              Don du Haut Commissariat d'Afrique du Sud
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              À l'occasion de la Mandela Day, le Haut Commissariat d'Afrique du Sud
              au Cameroun, en partenariat avec MTN et Chococam, nous a fait l'honneur
              d'un don généreux pour soutenir nos programmes d'accompagnement.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { icon: MapPin, title: "Haut Commissariat d'Afrique du Sud", text: 'Partenaire officiel' },
                { icon: Users, title: 'MTN', text: 'Partenaire télécom' },
                { icon: Heart, title: 'Chococam', text: 'Partenaire local' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3 rounded-lg border border-sky-100 bg-sky-50/75 p-4">
                  <span className="icon-box icon-box--soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsAutoPlay((value) => !value)}
              className="btn btn-secondary mt-6 w-full"
            >
              {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isAutoPlay ? 'Mettre le carrousel en pause' : 'Relancer le carrousel'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {mandelaDayImages.map((image, index) => (
            <button
              key={image.title}
              type="button"
              onClick={() => {
                setCurrentImageIndex(index);
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              aria-label={`Afficher ${image.title}`}
              className={cx(
                'aspect-[4/3] overflow-hidden rounded-lg border-2 transition-colors',
                currentImageIndex === index ? 'border-blue-700' : 'border-transparent hover:border-sky-300'
              )}
            >
              <img src={image.src} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        <div className="section-card border-l-4 border-l-[#d65f4a] p-6">
          <Quote className="h-8 w-8 text-[#d65f4a]" aria-hidden="true" />
          <blockquote className="mt-4 text-xl font-medium leading-8 text-blue-950">
            "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde."
          </blockquote>
          <p className="mt-3 text-sm font-semibold text-slate-600">Nelson Mandela</p>
        </div>

        <a
          href="https://www.facebook.com/share/p/1BAUWeDDUD/?mibextid=oFDknk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warm mx-auto w-fit"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span>Voir la publication Facebook</span>
        </a>
      </section>

      <section aria-labelledby="programmes-realises-title" className="space-y-8">
        <div className="text-center">
          <div className="section-kicker justify-center">
            <Award className="h-4 w-4" aria-hidden="true" />
            <span>Réalisés</span>
          </div>
          <h2 id="programmes-realises-title" className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Nos programmes réalisés
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Explorez nos programmes passés par année ou par catégorie.
          </p>
        </div>

        <div className="section-card mx-auto max-w-4xl p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="icon-box">
              <Filter className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-bold text-slate-900">Filtrer les programmes</h3>
              <p className="text-sm text-slate-600">{filteredPrograms.length} programme{filteredPrograms.length > 1 ? 's' : ''} trouvé{filteredPrograms.length > 1 ? 's' : ''}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label>
              <span className="form-label inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-700" aria-hidden="true" />
                Année
              </span>
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
                className="form-field"
              >
                <option value="all">Toutes les années</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="form-label inline-flex items-center gap-2">
                <Tag className="h-4 w-4 text-blue-700" aria-hidden="true" />
                Catégorie
              </span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="form-field"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>
          </div>

          {(selectedYear !== 'all' || selectedCategory !== 'all') && (
            <button type="button" onClick={resetFilters} className="btn btn-secondary mt-5">
              <X className="h-4 w-4" aria-hidden="true" />
              <span>Réinitialiser les filtres</span>
            </button>
          )}
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <article key={program.id} className="soft-card overflow-hidden">
                <div className="aspect-[16/10] bg-sky-50">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="status-pill">{program.category}</span>
                    <span className="status-pill">{program.month} {program.year}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-slate-900">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-sky-100 pt-4 text-sm font-semibold text-blue-800">
                    <Award className="h-4 w-4" aria-hidden="true" />
                    <span>Programme terminé</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="section-card mx-auto max-w-md p-8 text-center">
            <Filter className="mx-auto h-10 w-10 text-slate-300" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Aucun programme trouvé</h3>
            <p className="mt-2 text-slate-600">Aucun programme ne correspond aux filtres sélectionnés.</p>
            <button type="button" onClick={resetFilters} className="btn btn-primary mt-5">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
