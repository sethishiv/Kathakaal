import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LenderBorrowerSection from '../components/LenderBorrowerSection';
import AISafetySection from '../components/AISafetySection';
import OffersDataSection from '../components/OffersDataSection';
import LoanTypesSection from '../components/LoanTypesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQsSection from '../components/FAQsSection';
import EasyStepsSection from '../components/EasyStepsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LenderBorrowerSection />
      <AISafetySection />
      <OffersDataSection />
      <LoanTypesSection />
      <TestimonialsSection />
      <FAQsSection />
      <EasyStepsSection />
      <Footer />
    </>
  );
};

export default Home;
