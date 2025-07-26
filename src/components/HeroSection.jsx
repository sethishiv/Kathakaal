import React from 'react';

const HeroSection = () => {
  return (

    <section className="hero-section">

    <section id="hero" className="hero-section">

      {/* SVG Decorative Top Shapes */}
      <svg className="hero-decor-top" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
        <path fill="#cce5ff" d="M0,0 C400,150 1040,0 1440,120 L1440,0 L0,0 Z" />
      </svg>

      <div className="hero-content">
        <h1 className="hero-title">Empowering Small Businesses with Smart Lending</h1>
        <p className="hero-subtext">
          Our mission is to provide seamless loan access to underserved individuals and micro-entrepreneurs. Fuel your dreams with fast, secure, and low-barrier funding.
        </p>
        <p className="hero-tagline">
          Lend confidently. Borrow easily. Grow collectively.
        </p>
        <button className="hero-button">Get Started</button>
      </div>

      {/* SVG Decorative Bottom Wave */}
      <svg className="hero-decor-bottom" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
        <path fill="#b3d7ff" d="M0,60 C360,160 1080,20 1440,100 L1440,150 L0,150 Z" />
      </svg>
    </section>
    </section>
  );
};

export default HeroSection;
