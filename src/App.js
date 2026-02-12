
// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PAGES existantes
import Accueil from './pages/Accueil';
import Actualite from './pages/Actualite';
import Adherer from './pages/Adherer';
import Autisme from './pages/Autisme';
import ContactPage from './pages/ContactPage';
import Don from './pages/Don';
import DonSuccess from './pages/DonSuccess';
import JulienPage from './pages/JulienPage';
import MbjPage from './pages/MbjPage';
import Boutique from './pages/Boutique';

// NOUVELLE page détail WP
// import PostDetail from './pages/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/actualite" element={<Actualite />} />
            {/* <Route path="/actualite/" element={<PostDetail />} /> */}
            <Route path="/adherer" element={<Adherer />} />
            <Route path="/autisme" element={<Autisme />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/don" element={<Don />} />
            <Route path="/don-success" element={<DonSuccess />} />
            <Route path="/mbj" element={<MbjPage />} />
            <Route path="/julien" element={<JulienPage />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="*" element={<div className="container mx-auto px-4 py-12">Page non trouvée.</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
