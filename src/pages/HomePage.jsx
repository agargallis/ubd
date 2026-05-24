import React from 'react';
import Hero from '@/components/Hero';
import BarberBookingSpotlight from '@/components/BarberBookingSpotlight';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const HomePage = ({ language }) => {
  return (
    <>
      <Hero language={language} />
      <BarberBookingSpotlight language={language} />
      <Services language={language} />
      <About language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
    </>
  );
};

export default HomePage;
