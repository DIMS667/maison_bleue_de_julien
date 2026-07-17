import React from 'react';
import Hero from '../components/Accueil/Hero';
import CompanyIntro from '../components/Accueil/CompanyIntro';
import WhoIsJulien from '../components/Accueil/WhoIsJulien';
import MissionProjects from '../components/Accueil/MissionProjects';
import DonationCallout from '../components/Accueil/DonationCallout';
import NewsCards from '../components/Accueil/NewsCards';
import Testimonials from '../components/Accueil/Testimonials';
import PartnerLogosCarousel from '../components/Accueil/PartnerLogosCarousel';

function Accueil() {
  return (
    <div className="page-surface">
      <Hero />
      <CompanyIntro />
      <WhoIsJulien />
      <MissionProjects />
      <Testimonials />
      <DonationCallout />
      <NewsCards />
      <PartnerLogosCarousel />
    </div>
  );
}

export default Accueil;
