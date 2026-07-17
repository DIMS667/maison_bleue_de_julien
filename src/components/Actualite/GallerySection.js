import React, { useEffect, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { cx } from '../DesignSystem';

import activity1 from '../../assets/images/activite1.jpg';
import activity2 from '../../assets/images/activite2.jpg';
import activity3 from '../../assets/images/activite3.jpg';
import activity4 from '../../assets/images/gal.jpg';
import activity5 from '../../assets/images/gal1.jpg';
import activity6 from '../../assets/images/gal2.jpg';
import activity7 from '../../assets/images/gal3.jpg';

const activities = [
  { src: activity1, title: 'Atelier créatif', category: 'Créativité' },
  { src: activity2, title: 'Activité sociale', category: 'Social' },
  { src: activity3, title: 'Jeux éducatifs', category: 'Éducation' },
  { src: activity4, title: 'Expression artistique', category: 'Art' },
  { src: activity5, title: 'Moment de partage', category: 'Partage' },
  { src: activity6, title: 'Apprentissage ludique', category: 'Apprentissage' },
  { src: activity7, title: 'Activité de groupe', category: 'Groupe' },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const current = activities[currentIndex];

  useEffect(() => {
    if (!isAutoPlay) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="section-card overflow-hidden">
        <div className="relative aspect-[16/10] bg-sky-50">
          <img
            src={current.src}
            alt={current.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-white/90 text-blue-800 shadow-sm transition-colors hover:bg-white"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-white/90 text-blue-800 shadow-sm transition-colors hover:bg-white"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="border-t border-slate-200 p-5">
          <span className="status-pill">{current.category}</span>
          <h3 className="mt-3 text-xl font-extrabold text-blue-950">{current.title}</h3>
        </div>
      </div>

      <aside className="space-y-5">
        <div className="section-card p-5">
          <button
            type="button"
            onClick={() => setIsAutoPlay((value) => !value)}
            className="btn btn-secondary w-full"
          >
            {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isAutoPlay ? 'Mettre en pause' : 'Lancer le diaporama'}</span>
          </button>

          <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-4">
            {activities.map((activity, index) => (
              <button
                key={activity.title}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Afficher ${activity.title}`}
                className={cx(
                  'aspect-square overflow-hidden rounded-lg border-2 transition-colors',
                  currentIndex === index ? 'border-blue-700' : 'border-transparent hover:border-sky-300'
                )}
              >
                <img
                  src={activity.src}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="stat-tile">
            <div className="stat-tile__value">{activities.length}+</div>
            <div className="stat-tile__label">moments capturés</div>
          </div>
          <div className="stat-tile">
            <div className="stat-tile__value">20+</div>
            <div className="stat-tile__label">participants</div>
          </div>
          <div className="stat-tile">
            <Camera className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <div className="stat-tile__label">partage et apprentissage</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
