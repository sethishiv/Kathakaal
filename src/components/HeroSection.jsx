import React from 'react';
import './HeroSection.css'; // in the same folder 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Unlock Profitable Lending Opportunities</h1>
        <p className="hero-subtext">
          Earn attractive interest rates by funding verified borrowers. It's secure, simple, and smart.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
