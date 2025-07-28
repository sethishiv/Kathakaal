import React from 'react';
import './LenderBorrowerSection.css';

const LenderBorrowerSection = () => {
  return (
    <section className="lender-borrower-section">
      <div className="section-header">
        <h2>Empowering Lenders & Borrowers</h2>
        <p>Your one-stop platform for smarter financial collaboration.</p>
      </div>

      <div className="roles-container">
        <div className="role-card lender-card">
          <h3>For Lenders</h3>
          <ul>
            <li>Attractive interest returns on your funds</li>
            <li>Verified borrowers to reduce lending risk</li>
            <li>Transparent process with full control</li>
            <li>Flexible loan terms based on your preference</li>
          </ul>
        </div>

        <div className="role-card borrower-card">
          <h3>For Borrowers</h3>
          <ol>
            <li>Quick access to funds without traditional hassle</li>
            <li>Competitive interest rates</li>
            <li>Simple application and fast approvals</li>
            <li>Build credibility and financial trust</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default LenderBorrowerSection;
