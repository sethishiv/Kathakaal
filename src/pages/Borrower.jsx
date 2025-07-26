// src/pages/Borrower.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BorrowerHeroSection from '../borrowerComponents/BorrowerHeroSection';
import LoanCategoriesSection from '../borrowerComponents/LoanCategoriesSection';
import CashLoanEnrollmentSection from '../borrowerComponents/CashLoanEnrollmentSection';
import AISafetySection from '../borrowerComponents/AISafetySection';
import BenefitsSection from '../borrowerComponents/BenefitsSection';

import TestimonialsSection from '../components/TestimonialsSection';

import FAQsSection from '../borrowerComponents/FAQsSection';
import LoanRequestFormSection from '../borrowerComponents/LoanRequestFormSection';


const Borrower = ({ loanRequests, addLoanRequest }) => {
  return (
    <>
      <Navbar />
      <BorrowerHeroSection />
      <LoanRequestFormSection
        loanRequests={loanRequests}
        addLoanRequest={addLoanRequest}
      />
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
