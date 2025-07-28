// src/borrowerComponents/LoanRequestFormSection.jsx
import React, { useState } from 'react';
import './LoanRequestFormSection.css'; // Link to external CSS file

const LoanRequestFormSection = ({ loanRequests, addLoanRequest }) => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLoanRequest({ amount, interest });
    setAmount('');
    setInterest('');
  };

  return (
    <section className="loan-request-section">
      <h2 className="section-title">Apply for a Loan</h2>
      <form className="loan-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
        />
        <button type="submit">Submit Request</button>
      </form>

      <h3 className="subheading">Your Loan Requests</h3>
      <ul className="loan-request-list">
        {loanRequests.map((loan, index) => (
          <li key={index} className="loan-request-item">
            ₹{loan.amount} at {loan.interest}% — <strong className={loan.status === 'Approved' ? 'approved' : 'pending'}>{loan.status}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LoanRequestFormSection;
