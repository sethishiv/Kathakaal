// src/pages/Lender.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoanRequestsList from '../lenderComponents/LoanRequestsList';
import LenderHeroSection from '../lenderComponents/LenderHeroSection';
import InterestExplanationSection from '../lenderComponents/InterestExplanationSection';
import ProfitBenefitsSection from '../lenderComponents/ProfitBenefitsSection';

const Lender = ({ loanRequests, approveLoan }) => {
  return (
    <>
      <Navbar />
      <LoanRequestsList
        loanRequests={loanRequests}
        approveLoan={approveLoan}
      />
      <LenderHeroSection />
  
      <InterestExplanationSection />
      <ProfitBenefitsSection />
      <Footer />
    </>
  );
};

export default Lender;
