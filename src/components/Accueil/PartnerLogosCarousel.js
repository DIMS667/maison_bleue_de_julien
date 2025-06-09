import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import explicite des images
import part1 from "../../assets/images/part1.png";
import part from "../../assets/images/part.jpg";
import part3 from "../../assets/images/part3.jpg";
import part4 from "../../assets/images/part4.jpg";
import part5 from "../../assets/images/part5.jpg";
import part6 from "../../assets/images/part6.jpg";
import part7 from "../../assets/images/part7.jpg";
import part8 from "../../assets/images/part8.jpg";
import part9 from "../../assets/images/part9.jpg";
import part10 from "../../assets/images/part10.jpg";
import part11 from "../../assets/images/part11.jpg";
import part12 from "../../assets/images/part12.jpg";
import part13 from "../../assets/images/part13.jpg";
import part14 from "../../assets/images/part14.jpg";
import part15 from "../../assets/images/part15.jpg";
import part16 from "../../assets/images/part16.jpg";
import part17 from "../../assets/images/part17.jpg";
import part18 from "../../assets/images/part18.jpg";
import part19 from "../../assets/images/part19.jpg";
import part20 from "../../assets/images/part20.jpg";

const PartnerLogosCarousel = () => {
  // Tableau des images importées
  const logos = [
    part1,
    part,
    part3,
    part4,
    part5,
    part6,
    part7,
    part8,
    part9,
    part10,
    part11,
    part12,
    part13,
    part14,
    part15,
    part16,
    part17,
    part18,
    part19,
    part20,
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-500 sm:text-4xl">Nos Partenaires</h2>
          <p className="mt-2 text-lg text-gray-600">
            Ensemble, nous bâtissons un réseau fort pour un avenir meilleur.
          </p>
        </div>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  className="object-contain w-auto mx-auto h-24"
                  src={logo}
                  alt={`Partenaire ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosCarousel;
