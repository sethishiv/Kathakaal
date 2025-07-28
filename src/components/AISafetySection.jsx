import React from 'react';
import { FaRobot, FaUser, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot />,
    title: 'AI Risk Analysis',
    desc: 'AI models meticulously analyze risk and borrowing capabilities, ensuring responsible lending.',
    iconBg: 'bg-gradient-to-tr from-blue-200 to-blue-500 text-blue-800',
    border: 'border-blue-200',
  },
  {
    icon: <FaUser />,
    title: 'Smart Profile Evaluation',
    desc: 'Advanced systems calculate a fairness-driven score for every applicant in seconds.',
    iconBg: 'bg-gradient-to-tr from-purple-200 to-purple-400 text-purple-800',
    border: 'border-purple-200',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Private',
    desc: 'All data is end-to-end encrypted and managed with strict AI-powered privacy standards.',
    iconBg: 'bg-gradient-to-tr from-green-200 to-green-400 text-green-800',
    border: 'border-green-200',
  },
];

const AISafetySection = () => (
  <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-blue-800 drop-shadow">
        AI Makes Lending Smarter and Safer
      </h2>
      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`
              relative flex flex-col items-center text-center
              bg-white/80
              backdrop-blur-md
              shadow-2xl
              border-t-4 ${feature.border}
              rounded-3xl
              px-7 py-10
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-blue-200
              hover:bg-white/95
              overflow-hidden
            `}
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center rounded-full shadow-md ${feature.iconBg} w-16 h-16 text-3xl mb-6`}
            >
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="font-bold text-lg text-blue-900 mb-2 tracking-tight drop-shadow-sm">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <button className="px-10 py-3 rounded-full text-lg font-semibold bg-gradient-to-l from-blue-700 to-blue-500 hover:from-blue-900 hover:to-blue-600 text-white shadow-md transition-colors duration-300 border-0">
          Know More
        </button>
      </div>
    </div>
  </section>
);

export default AISafetySection;
