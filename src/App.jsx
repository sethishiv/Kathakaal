<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LenderBorrowerSection from './components/LenderBorrowerSection';
import AISafetySection from './components/AISafetySection';
import OffersDataSection from './components/OffersDataSection';
import LoanTypesSection from './components/LoanTypesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQsSection from './components/FAQsSection';
import EasyStepsSection from './components/EasyStepsSection';
import Footer from './components/Footer';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Borrower from './pages/Borrower';
import Lender from './pages/Lender';
import Business from './pages/Business';
>>>>>>> 3fe6821 (mobile menu)

function App() {
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <HeroSection />
      <LenderBorrowerSection />
      <AISafetySection />
      <OffersDataSection />
      <LoanTypesSection />
      <EasyStepsSection />
      <TestimonialsSection />
      <FAQsSection />
      <Footer />
    </div>
=======
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/borrower"
          element={
            <Borrower
              loanRequests={loanRequests}
              addLoanRequest={addLoanRequest}
            />
          }
        />
        <Route
          path="/lender"
          element={
            <Lender
              loanRequests={loanRequests}
              approveLoan={approveLoan}
            />
          }
        />
        <Route path="/business" element={<Business />} />
      </Routes>
   
>>>>>>> 3fe6821 (mobile menu)
  );
}

export default App;
