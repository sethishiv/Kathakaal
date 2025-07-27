import React from 'react';
import { FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';

const stats = [
  {
    icon: <FaHandshake className="text-blue-600 text-3xl" />,
    title: 'Total Loans Disbursed',
    value: '₹25 Cr+',
  },
  {
    icon: <FaUsers className="text-green-600 text-3xl" />,
    title: 'Active Lenders',
    value: '4,800+',
  },
  {
    icon: <FaChartLine className="text-purple-600 text-3xl" />,
    title: 'Borrower Success Stories',
    value: '15,000+',
  },
];

const OffersDataSection = () => {
  return (
    <section id="offers" className="py-12 bg-white ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Services & Offers</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We’ve built a trusted ecosystem helping thousands of borrowers and lenders connect securely and successfully.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
              <p className="text-2xl font-bold text-blue-700 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersDataSection;
