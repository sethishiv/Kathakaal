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
            src="/logo-placeholder.svg" // Replace with actual logo path
            alt="Kathakaal Logo"
            className="footer-logo"
          />
          
          <p className="tagline">
            (self-added) To empower underserved communities by enabling fair and inclusive credit access through real-life behavior, personal stories, and explainable AI.
          </p>
        </div>

        {/* Block 2: Quick Navigation */}
        <div className="footer-block">
        <h4>Company</h4>
        <ul className="footer-links">
    {/* <li><Link to="/Navbar">Home</Link></li> */}
    <li><Link to="/Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>

    <li><Link to="/loan-types">Loan types</Link></li>
    <li><Link to="/OffersDataSection">Offers</Link></li>
    <li><Link to="/TestimonialsSection">Testimonials</Link></li>
    <li><Link to="/FAQsSection">FAQs</Link></li>
    <li><Link to="/LoanRequestFormSection">Apply Now</Link></li>
    </ul>
    </div>


        {/* Block 3: Contact Info */}
        <div className="footer-block">
          <h4>Contact</h4>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@kathakaal.com</p>
          <p>🏢 123 Storyline Ave, Mumbai, India</p>
        </div>

        {/* Block 4: Social Media */}
        <div className="footer-block">
          <h4>Follow Us</h4>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>

        {/* Block 5: Legal Links */}
        <div className="footer-block">
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <a href="/apply" className="apply-now">Apply Now →</a>
          <p className="company-name">© 2025 Kathakaal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

