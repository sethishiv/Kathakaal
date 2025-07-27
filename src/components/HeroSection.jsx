import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-indigo-900 to-indigo-600 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empower Your Financial Future
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 mb-8">
          Get fair credit access through trust-based insights—no formal credit history required.
        </p>
        <button className="bg-white text-indigo-800 hover:bg-indigo-100 font-semibold px-6 py-3 rounded-lg shadow transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
