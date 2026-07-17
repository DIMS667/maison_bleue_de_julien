import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/maison_bleu.jpg';

const associationLinks = [
  { name: 'Qui sommes-nous ?', href: '/mbj' },
  { name: 'Qui est Julien ?', href: '/julien' },
  { name: 'Comprendre l’autisme', href: '/autisme' },
  { name: 'Nous contacter', href: '/contact' },
];

const resourceLinks = [
  { name: 'Actualités', href: '/actualite' },
  { name: 'Publications', href: '/publications' },
  { name: 'Boutique solidaire', href: '/boutique' },
  { name: 'Adhérer', href: '/adherer' },
  { name: 'Faire un don', href: '/don' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==',
    icon: FaInstagram,
  },
  { name: 'YouTube', href: 'https://youtube.com', icon: FaYoutube },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@lambj_julien?_t=ZM-8tIvC8b8qVZ&_r=1',
    icon: FaTiktok,
  },
];

function FooterNav({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="footer-heading">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="footer-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr] lg:py-14">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-white p-1">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span>
              <span className="block text-lg font-extrabold leading-tight text-white">
                La Maison Bleue
              </span>
              <span className="block text-sm font-semibold text-sky-200">de Julien</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            Une association engagée dans l’accompagnement des personnes autistes,
            le soutien aux familles et la sensibilisation du public.
          </p>
          <div className="mt-5 flex gap-2" aria-label="Réseaux sociaux">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Suivre La Maison Bleue de Julien sur ${name}`}
                className="footer-social-link"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <FooterNav title="L’association" links={associationLinks} />
        <FooterNav title="Liens utiles" links={resourceLinks} />

        <div>
          <h2 className="footer-heading">Coordonnées</h2>
          <address className="mt-4 space-y-3.5 not-italic text-sm text-slate-300">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span>Nkoabang, Yaoundé, Cameroun</span>
            </p>
            <a href="tel:+237699893838" className="footer-contact-link">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span>+237 699 893 838</span>
            </a>
            <a href="tel:+237675953123" className="footer-contact-link">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span>+237 675 953 123</span>
            </a>
            <a
              href="mailto:contact@lamaisonbleuedejulien.org"
              className="footer-contact-link min-w-0"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span className="break-words">contact@lamaisonbleuedejulien.org</span>
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex min-h-16 items-center justify-between gap-4 py-3 text-xs text-slate-400 sm:text-sm">
          <p>© {new Date().getFullYear()} La Maison Bleue de Julien. Tous droits réservés.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-button"
            title="Retour en haut"
          >
            <span className="sr-only">Retour en haut</span>
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
