import React from 'react';
import './LoanRequestsList.css'; // i have included css file in this folder only

const LoanRequestsList = ({ loanRequests, approveLoan }) => {
  return (
    <section id="loan-requests" className="loan-requests-container">
      <h2 className="loan-heading">Loan Requests</h2>
      {loanRequests.length === 0 ? (
        <p className="no-loans-text">No loan requests available at the moment.</p>
      ) : (
        <div className="loan-cards-wrapper">
          {loanRequests.map((loan, index) => (
            <div key={index} className="loan-card">
              <div className="loan-info">
                <p className="loan-amount">₹{loan.amount}</p>
                <p className="loan-interest">Interest Rate: {loan.interest}%</p>
                <p className={`loan-status ${loan.status === 'Approved' ? 'approved' : 'pending'}`}>
                  Status: {loan.status}
                </p>
              </div>
              {loan.status === 'Pending' && (
                <button className="approve-button" onClick={() => approveLoan(index)}>
                  Approve
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LoanRequestsList;
