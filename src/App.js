// src/App.js

import React, { lazy, Suspense, useEffect } from 'react';
import { MapPinOff } from 'lucide-react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ButtonLink, PageState } from './components/DesignSystem';

import Accueil           from './pages/Accueil';
import Actualite         from './pages/Actualite';
import PostDetail        from './pages/PostDetail';
import Publication       from './pages/Publication';
import PublicationDetail from './pages/PublicationDetail';
import Boutique          from './pages/Boutique';
import Adherer           from './pages/Adherer';
import Autisme           from './pages/Autisme';
import ContactPage       from './pages/ContactPage';
import Don               from './pages/Don';
import DonSuccess        from './pages/DonSuccess';
import JulienPage        from './pages/JulienPage';
import MbjPage           from './pages/MbjPage';

const PdfReaderPage = lazy(() => import('./pages/PdfReaderPage'));

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <a href="#contenu-principal" className="skip-link">
          Aller au contenu principal
        </a>
        <RouteEffects />
        <Navbar />

        <main id="contenu-principal" className="flex-1">
          <Routes>
            <Route path="/"                         element={<Accueil />} />

            <Route path="/actualite"                element={<Actualite />} />
            <Route path="/actualites/:slug"         element={<PostDetail />} />

            <Route path="/publications"             element={<Publication />} />
            <Route path="/publications/:slug"       element={<PublicationDetail />} />

            <Route path="/boutique"                 element={<Boutique />} />

            <Route path="/adherer"                  element={<Adherer />} />
            <Route path="/autisme"                  element={<Autisme />} />
            <Route path="/contact"                  element={<ContactPage />} />
            <Route path="/don"                      element={<Don />} />
            <Route path="/don-success"              element={<DonSuccess />} />
            <Route path="/mbj"                      element={<MbjPage />} />
            <Route path="/julien"                   element={<JulienPage />} />
            <Route
              path="/rapports/:reportId"
              element={
                <Suspense
                  fallback={
                    <div className="page-surface bg-sky-50/70 py-16">
                      <div className="site-container">
                        <PageState title="Ouverture du lecteur" loading>
                          Le lecteur PDF est en cours de préparation.
                        </PageState>
                      </div>
                    </div>
                  }
                >
                  <PdfReaderPage />
                </Suspense>
              }
            />

            <Route
              path="*"
              element={
                <div className="page-surface bg-sky-50/70 py-16 sm:py-24">
                  <div className="site-container">
                    <PageState
                      icon={MapPinOff}
                      title="Page non trouvée"
                      action={<ButtonLink to="/">Retour à l'accueil</ButtonLink>}
                    >
                      L'adresse demandée n'existe pas ou la page a été déplacée.
                    </PageState>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
