import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Borrower from './pages/Borrower';
import Lender from './pages/Lender';
import LoanTypesSection from './components/LoanTypesSection';
import OffersDataSection from './components/OffersDataSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQsSection from './components/FAQsSection';
import LoanRequestFormSection from './borrowerComponents/LoanRequestFormSection';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [loanRequests, setLoanRequests] = useState([]);

  //here i have added this part for loan submission
  const addLoanRequest = (loan) => {
    setLoanRequests([...loanRequests, { ...loan, status: 'Pending' }]);
  };

  // here Lender approves loan ,,,, for later purpose more development
  const approveLoan = (index) => {
    const updatedLoans = [...loanRequests];
    updatedLoans[index].status = 'Approved';
    setLoanRequests(updatedLoans);
  };

  return (
    
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
        <Route 
        path="/loan-types" 
        element={
        <LoanTypesSection />} />
        
        <Route
        path="/Home"
        element={<Home />}/>
        
        <Route 
        path="/OffersDataSection"
        element={<OffersDataSection />} />

        <Route
        path="/TestimonialsSection"
        element={<TestimonialsSection />} />

        <Route
        path="/FAQsSection"
        element={<FAQsSection />} />

        <Route
        path="/LoanRequestFormSection"
        element={
          <LoanRequestFormSection
            loanRequests={loanRequests}
            addLoanRequest={addLoanRequest}
          />
        }
        />
        
        


      </Routes>
   
  );
}

export default App;
