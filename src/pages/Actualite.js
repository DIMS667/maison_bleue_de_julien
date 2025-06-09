"use client";

import React from "react";
import ProgramsSection from '../components/Actualite/ProgramsSection';
import GallerySection from '../components/Actualite/GallerySection';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      {/* En-tête */}
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Programmes et Activités
        </h1>
        <p className="text-lg text-gray-700">
          Découvrez nos programmes et jetez un œil aux activités que nous avons
          organisées.
        </p>
      </header>

      {/* Sections */}
      <ProgramsSection />
      <GallerySection />
    </div>
  );
};

export default NewsPage;
