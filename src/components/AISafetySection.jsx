import React from 'react';

const features = [
  {
    icon: '.',
    title: 'Powerful AI/ML Models',
    description:
      'Advanced algorithms analyze borrower profiles, financial history, and behavioral data to predict risk more accurately than traditional models.',
  },
  {
    icon: '.',
    title: 'Real-Time Safety Monitoring',
    description:
      'Continuous AI-powered monitoring detects unusual patterns and potential fraud in real time, ensuring platform safety for all users.',
  },
  {
    icon: '.',
    title: 'Transparent Risk Scores',
    description:
      'Each loan and borrower gets an easy-to-understand risk score, helping lenders make informed decisions with full transparency.',
  },
];

const AISafetySection = () => {
  return (
    <section id="ai-safety" className="py-10 bg-blue-50 ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 flex items-center mb-2">
          <span className="mr-2">AI Powered Safety &amp; Risk Analysis</span>
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl">
          Our AI/ML systems are designed to deliver robust safety and risk evaluation. Benefit from advanced fraud detection, real-time risk assessments, and transparent analytics—enabling secure, data-driven decisions for both lenders and borrowers.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow transition hover:shadow-lg p-6 flex flex-col items-start"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <div className="font-semibold text-blue-700 mb-1">{feature.title}</div>
              <div className="text-gray-600 text-sm">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISafetySection;
