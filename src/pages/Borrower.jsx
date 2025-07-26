import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BorrowerHeroSection from '../borrowerComponents/BorrowerHeroSection';
import LoanCategoriesSection from '../borrowerComponents/LoanCategoriesSection';
import CashLoanEnrollmentSection from '../borrowerComponents/CashLoanEnrollmentSection';
import AISafetySection from '../borrowerComponents/AISafetySection';
import BenefitsSection from '../borrowerComponents/BenefitsSection';
import FAQsSection from '../borrowerComponents/FAQsSection.jsx';


const Borrower = () => {
  return (
    <>
      <Navbar />
      <BorrowerHeroSection />
      <LoanCategoriesSection />
      <CashLoanEnrollmentSection />
      <AISafetySection />
      <BenefitsSection />
      <FAQsSection />
      <Footer />
    </>
  );
};

export default Borrower;
