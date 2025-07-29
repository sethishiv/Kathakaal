// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Block 1: Branding */}
        <div className="footer-block branding">
          <img
            src="/logo.png" // Replace with actual logo path
            alt="Kathakaal Logo"
            className="footer-logo"
          />
          <p className="tagline">
            To empower underserved communities by enabling fair and inclusive credit access through real-life behavior, personal stories, and explainable AI.
          </p>
        </div>

        {/* Block 2: Quick Navigation */}
        <div className="footer-block">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            
           <li> <Link to="/Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
            <li><Link to="/loan-types">Loan Types</Link></li>
            <li><Link to="/OffersDataSection">Offers</Link></li>
            <li><Link to="/TestimonialsSection">Testimonials</Link></li>
            <li><Link to="/FAQsSection">FAQs</Link></li>
            <li><Link to="/LoanRequestFormSection">Apply Now</Link></li>
          </ul>
        </div>

        {/* Block 3: Contact Info */}
        <div className="contact-section">
  <h4>Contact</h4>
  <div className="contact-item">
    <i className="fas fa-phone-alt"></i>
    <span>+91 98765 43210</span>
  </div>
  <div className="contact-item">
    <i className="fas fa-envelope"></i>
    <span>support@kathakaal.com</span>
  </div>
  <div className="contact-item">
    <i className="fas fa-map-marker-alt"></i>
    <span>123 Storyline Ave, Mumbai, India</span>
  </div>
</div>

        {/* Block 4: Social Media Icons with Font Awesome */}
        <div className="footer-block">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

        {/* Block 5: Legal Links */}
        <div className="footer-legal">
          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
            <p className="company-name">© 2025 Kathakaal. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;

