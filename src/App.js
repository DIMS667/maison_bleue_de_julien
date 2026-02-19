// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages existantes
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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            {/* ── Accueil ── */}
            <Route path="/"                         element={<Accueil />} />

            {/* ── Actualités ── */}
            <Route path="/actualite"                element={<Actualite />} />
            <Route path="/actualites/:slug"         element={<PostDetail />} />

            {/* ── Publications ── */}
            <Route path="/publications"             element={<Publication />} />
            <Route path="/publications/:slug"       element={<PublicationDetail />} />

            {/* ── Boutique ── */}
            <Route path="/boutique"                 element={<Boutique />} />

            {/* ── Autres pages ── */}
            <Route path="/adherer"                  element={<Adherer />} />
            <Route path="/autisme"                  element={<Autisme />} />
            <Route path="/contact"                  element={<ContactPage />} />
            <Route path="/don"                      element={<Don />} />
            <Route path="/don-success"              element={<DonSuccess />} />
            <Route path="/mbj"                      element={<MbjPage />} />
            <Route path="/julien"                   element={<JulienPage />} />

            {/* ── 404 ── */}
            <Route
              path="*"
              element={
                <div className="container mx-auto px-4 py-20 text-center">
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">Page non trouvée</h2>
                  <a href="/" className="text-blue-600 hover:underline">Retour à l'accueil</a>
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