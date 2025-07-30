<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
>>>>>>> 3fe6821 (mobile menu)
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu when resizing to desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kathakaal</div>
<<<<<<< HEAD
      <ul className={styles.navLinks}>
        <li><a href="#">About</a></li>
        <li><a href="#">Lender</a></li>
        <li><a href="#">Borrower</a></li>
        <li><a href="#">Loans</a></li>
        <li><a href="#">Signup/Login</a></li>
=======

      <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle Menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`${styles.navLinks} ${menuOpen && isMobile ? styles.mobileActive : ''}`}>
        {/* For mobile: only top-level links */}
        {isMobile ? (
          <>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/borrower" onClick={closeMenu}>Borrower</Link></li>
            <li><Link to="/lender" onClick={closeMenu}>Lender</Link></li>
            <li><Link to="/business" onClick={closeMenu}>Business</Link></li>
            <li><a href="#" onClick={closeMenu}>Loans</a></li>
            <li><a href="#" onClick={closeMenu}>About</a></li>
            <li><a href="#" onClick={closeMenu}>Signup/Login</a></li>
          </>
        ) : (
          <>
            {/* Home Dropdown */}
            <li className={styles.dropdown}>
              <Link to="/">Home</Link>
              <ul className={styles.dropdownContent}>
                <li><a href="/#hero">Hero</a></li>
                <li><a href="/#lender-borrower">Lender & Borrower</a></li>
                <li><a href="/#loan-types">Loan Types</a></li>
                <li><a href="/#easy-steps">Easy Steps</a></li>
                <li><a href="/#offers-data">Offers</a></li>
                <li><a href="/#ai-safety">AI Safety</a></li>
                <li><a href="/#testimonials">Testimonials</a></li>
                <li><a href="/#faqs">FAQs</a></li>
              </ul>
            </li>
                
             {/* Borrower Dropdown */}
            <li className={styles.dropdown}>
              <Link to="/borrower">Borrower</Link>
              <ul className={styles.dropdownContent}>
                <li><a href="/borrower#borrower-hero">Hero</a></li>
                <li><a href="/borrower#loan-request-form">Loan Request Form</a></li>
                <li><a href="/borrower#loan-categories">Loan Categories</a></li>
                <li><a href="/borrower#cash-loan">Cash Loan</a></li>
                <li><a href="/borrower#ai-safety">AI Safety</a></li>
                <li><a href="/borrower#benefits">Benefits</a></li>
                <li><a href="/borrower#faqs">FAQs</a></li>
              </ul>
            </li>

            {/* Lender Dropdown */}
            <li className={styles.dropdown}>
              <Link to="/lender">Lender</Link>
              <ul className={styles.dropdownContent}>
                <li><a href="/lender#loan-requests">Loan Requests</a></li>
                <li><a href="/lender#lender-hero">Hero</a></li>
                <li><a href="/lender#interest-explanation">Interest Explanation</a></li>
                <li><a href="/lender#profit-benefits">Profit Benefits</a></li>
              </ul>
            </li>

            {/* Other Direct Links */}
            <li><Link to="/business">Business</Link></li>
            <li><a href="#">Loans</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Signup/Login</a></li>
          </>
        )}
>>>>>>> 3fe6821 (mobile menu)
      </ul>
    </nav>
  );
};

export default Navbar;
