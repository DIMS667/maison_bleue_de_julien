import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import maisonBleu from '../assets/images/maison_bleu.jpg';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Autisme', href: '/autisme' },
  { name: 'Actualité', href: '/actualite' },
  { name: 'Nos projets', href: '/mbj' },
  { name: 'Don', href: '/don' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img className="h-8 w-auto md:h-10" src={maisonBleu} alt="Maison Bleu" />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium ${
                      location.pathname === item.href ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {item.name === 'Don' ? '💖 Don' : item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Social Media & Donate Button */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:opacity-80">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:opacity-80">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:opacity-80">
                  <FaYoutube className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@lambj_julien?_t=ZM-8tIvC8b8qVZ&_r=1" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-80">
                  <FaTiktok className="h-5 w-5" />
                </a>
                <Link to="/don">
                  <button className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">
                    <span role="img" aria-label="Heart">❤️</span> Faire un Don
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <Disclosure.Button className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none">
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-4 pb-6 pt-4 bg-white shadow-lg flex flex-col items-center space-y-4">
              <div className="flex flex-col items-center space-y-3 w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-base font-medium w-full text-center ${
                      location.pathname === item.href ? 'bg-gray-300 font-semibold' : ''
                    }`}
                  >
                    {item.name === 'Don' ? '💖 Don' : item.name}
                  </Link>
                ))}
              </div>

              <div className="flex space-x-6 mt-2">
                <a href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:opacity-80">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:opacity-80">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:opacity-80">
                  <FaYoutube className="h-6 w-6" />
                </a>
                <a href="https://www.tiktok.com/@lambj_julien?_t=ZM-8tIvC8b8qVZ&_r=1" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-80">
                  <FaTiktok className="h-6 w-6" />
                </a>
              </div>

              <Link to="/don" className="w-full flex justify-center">
                <button className="px-6 py-2 text-sm rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">
                  <span role="img" aria-label="Heart">❤️</span> Faire un Don
                </button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
