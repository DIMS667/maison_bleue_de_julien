import React from 'react';
import Hero from '../components/Accueil/Hero';
import CompanyIntro from '../components/Accueil/CompanyIntro';
import WhoIsJulien from '../components/Accueil/WhoIsJulien';
import NewsCards from '../components/Accueil/NewsCards';
import Testimonials from '../components/Accueil/Testimonials';
import PartnerLogosCarousel from '../components/Accueil/PartnerLogosCarousel';

function Accueil() {
    return(

        <div>
        <Hero />
        <CompanyIntro />
        <WhoIsJulien />
        <br></br>
        <NewsCards />
        <Testimonials />
        <PartnerLogosCarousel />
        {/* Ajoutez d'autres sections de contenu ici */}
        </div>



    ) 
  }
export default Accueil;
  