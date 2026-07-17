import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/maison_bleu.jpg';
import { cx } from './DesignSystem';

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: "L'association",
    children: [
      { name: 'Qui sommes-nous ?', href: '/mbj' },
      { name: 'Qui est Julien ?', href: '/julien' },
      { name: "Adhérer à l'association", href: '/adherer' },
    ],
  },
  { name: "Comprendre l'autisme", href: '/autisme' },
  {
    name: 'Nos actions',
    children: [
      { name: 'Actualités', href: '/actualite' },
      { name: 'Publications', href: '/publications' },
      { name: 'Boutique solidaire', href: '/boutique' },
    ],
  },
  { name: 'Contact', href: '/contact' },
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

function isItemActive(item, pathname) {
  if (item.href) {
    return item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
  }

  return item.children?.some((child) => pathname.startsWith(child.href));
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-1" aria-label="Réseaux sociaux">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Suivre La Maison Bleue de Julien sur ${name}`}
          className="header-social-link"
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-utility">
        <div className="site-container flex min-h-9 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4 text-xs sm:text-sm">
            <a href="tel:+237699893838" className="header-utility-link">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>+237 699 893 838</span>
            </a>
            <a
              href="mailto:contact@lamaisonbleuedejulien.org"
              className="header-utility-link header-email"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>contact@lamaisonbleuedejulien.org</span>
            </a>
            <span className="header-utility-link header-location">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Nkoabang, Yaoundé</span>
            </span>
          </div>
          <SocialLinks />
        </div>
      </div>

      <nav className="bg-white" aria-label="Navigation principale">
        <div className="site-container flex min-h-[84px] items-center justify-between gap-5">
          <Link to="/" className="brand-link" aria-label="La Maison Bleue de Julien, accueil">
            <img
              src={logo}
              alt=""
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
            />
            <span className="min-w-0">
              <span className="block text-[15px] font-extrabold leading-tight text-blue-950 sm:text-lg">
                La Maison Bleue de Julien
              </span>
              <span className="mt-1 hidden text-xs font-medium text-slate-500 sm:block">
                Autisme : vivre la différence
              </span>
            </span>
          </Link>

          <div className="hidden h-[84px] items-stretch xl:flex">
            {navigation.map((item) => {
              const active = isItemActive(item, location.pathname);

              if (item.children) {
                const expanded = openMenu === item.name;
                return (
                  <div key={item.name} className="nav-dropdown relative flex items-stretch">
                    <button
                      type="button"
                      onClick={() => setOpenMenu(expanded ? null : item.name)}
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      className={cx('nav-main-link', active && 'nav-main-link--active')}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cx('h-4 w-4 transition-transform', expanded && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>

                    {expanded && (
                      <div className="nav-dropdown-panel">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            aria-current={
                              location.pathname.startsWith(child.href) ? 'page' : undefined
                            }
                            className={cx(
                              'nav-dropdown-link',
                              location.pathname.startsWith(child.href) &&
                                'nav-dropdown-link--active'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cx('nav-main-link', active && 'nav-main-link--active')}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/don" className="btn btn-donation header-desktop-donation">
              <Heart className="h-4 w-4" aria-hidden="true" />
              <span>Faire un don</span>
            </Link>
            <Link to="/don" className="btn btn-donation header-mobile-donation px-3">
              <Heart className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Faire un don</span>
              <span className="sm:hidden">Don</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-mobile"
              className="header-menu-button"
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              </span>
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="menu-mobile" className="mobile-nav xl:hidden">
            <div className="site-container py-4">
              {navigation.map((item) => {
                const active = isItemActive(item, location.pathname);

                if (item.children) {
                  const expanded = openMenu === item.name;
                  return (
                    <div key={item.name} className="border-b border-slate-100 last:border-0">
                      <button
                        type="button"
                        onClick={() => setOpenMenu(expanded ? null : item.name)}
                        aria-expanded={expanded}
                        className={cx('mobile-nav-link w-full', active && 'mobile-nav-link--active')}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cx('h-4 w-4 transition-transform', expanded && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                      {expanded && (
                        <div className="mb-2 border-l-2 border-blue-100 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              aria-current={location.pathname.startsWith(child.href) ? 'page' : undefined}
                              className={cx(
                                'block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-800',
                                location.pathname.startsWith(child.href) && 'font-bold text-blue-800'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cx('mobile-nav-link', active && 'mobile-nav-link--active')}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
