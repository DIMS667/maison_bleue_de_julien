import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

import GalleryCard from "./GalleryCard";

import activity1 from "../../assets/images/activite1.jpg";
import activity2 from "../../assets/images/activite2.jpg";
import activity3 from "../../assets/images/activite3.jpg";
import activity4 from "../../assets/images/gal.jpg";
import activity5 from "../../assets/images/gal1.jpg";
import activity6 from "../../assets/images/gal2.jpg";
import activity7 from "../../assets/images/gal3.jpg";


import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const activities = [activity1, activity2, activity3, activity4, activity5, activity6, activity7];

const GallerySection = () => {
  return (
    <section className="mb-12">
      {/* Titre de la galerie */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Galerie d'Activités
      </h2>

      {/* Galerie d'images en carrousel avec défilement infini */}
      <Swiper
        slidesPerView={3} // Nombre d'images visibles en même temps
        spaceBetween={10} // Espacement entre les images
        freeMode={true}
        speed={500}
        autoplay={{
          delay: 2000, // Défilement automatique toutes les 2 secondes
          disableOnInteraction: false,
        }}
        loop={true} // Ajout de la boucle pour un défilement infini
        modules={[FreeMode, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {activities.map((activity, index) => (
          <SwiperSlide key={index}>
            <GalleryCard activity={activity} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Réseaux sociaux */}
      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-700 mb-4">
          Rejoignez-nous sur nos réseaux sociaux !
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://web.facebook.com/search/top/?q=la%20maison%20bleue%20de%20julien"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaFacebook size={32} style={{ color: "#1877F2" }} />
          </a>
          <a
            href="https://www.instagram.com/maisonbleue2023?igsh=MTV1Mm1hdHN0MzV3bw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaInstagram size={32} style={{ color: "#E4405F" }} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaYoutube size={32} style={{ color: "#FF0000" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
