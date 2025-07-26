import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Borrower from './pages/Borrower';
import Lender from './pages/Lender';

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
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
