import React from 'react';

const lenderReasons = [
  'Earn attractive interest rates',
  'Diverse loan portfolios',
  'Secured lending process',
  'Automated repayments',
];

const borrowerReasons = [
  'Low-interest personal loans',
  'Quick approval process',
  'Flexible repayment options',
  'No hidden charges',
];

const LenderBorrowerSection = () => {
  return (
    <section id='lender' className="py-10 bg-gray-50 ">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-8 justify-center">
        {/* Lender Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex-1 min-w-[280px] max-w-md p-8">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">💰</span>
            <h2 className="text-2xl font-bold text-teal-700">For Lenders</h2>
          </div>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {lenderReasons.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
        {/* Borrower Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex-1 min-w-[280px] max-w-md p-8">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🙋‍♂️</span>
            <h2 className="text-2xl font-bold text-purple-700">For Borrowers</h2>
          </div>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {borrowerReasons.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LenderBorrowerSection;
