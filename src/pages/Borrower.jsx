import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BorrowerHeroSection from '../borrowerComponents/BorrowerHeroSection';
import LoanCategoriesSection from '../borrowerComponents/LoanCategoriesSection';
import CashLoanEnrollmentSection from '../borrowerComponents/CashLoanEnrollmentSection';
import AISafetySection from '../borrowerComponents/AISafetySection';
import BenefitsSection from '../borrowerComponents/BenefitsSection';
import FAQsSection from '../borrowerComponents/FAQsSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection'; 

const Borrower = () => {
  return (
    <>
      <Navbar />
      <div id="borrower-hero" className="pt-24"><BorrowerHeroSection /></div>
      <div id="categories" className="pt-24"><LoanCategoriesSection /></div>
      <div id="enroll" className="pt-24"><CashLoanEnrollmentSection /></div>
      <div id="ai-safety" className="pt-24"><AISafetySection /></div>
      <div id="benefits" className="pt-24"><BenefitsSection /></div>
      <div id="borrower-faqs" className="pt-24"><FAQsSection /></div>
      <div id="borrower-testimonials" className="pt-24"><TestimonialsSection /></div>
      <Footer />
    </>
  );
};

export default Borrower;
