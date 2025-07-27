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
      <div id="hero"><HeroSection /></div>
      <div id="lender"><LenderBorrowerSection /></div>
      <div id="aiSafety"><AISafetySection /></div>
      <div id="offers"><OffersDataSection /></div>
      <div id="loanTypes"><LoanTypesSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="faq"><FAQsSection /></div>
      <div id="steps"><EasyStepsSection /></div>
      <Footer />
    </>
  );
};

export default Home;
