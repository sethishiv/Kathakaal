import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kathakal</div>
      <ul className={styles.navLinks}>

        <li className={styles.dropdown}>
          <Link to="/">Home</Link>
          <ul className={styles.dropdownContent}>
              <li><a href="/#hero">Hero</a></li>
              <li><a href="/#lender-borrower">Lender & Borrower</a></li>
              <li><a href="/#ai-safety">AI Safety</a></li>
              <li><a href="/#offers-data">Offers</a></li>
              <li><a href="/#loan-types">Loan Types</a></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/#faqs">FAQs</a></li>
              <li><a href="/#easy-steps">Easy Steps</a></li>
          </ul>
        </li>

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

        <li className={styles.dropdown}>
          <Link to="/lender">Lender</Link>
          <ul className={styles.dropdownContent}>
            <li><a href="/lender#loan-requests">Loan Requests</a></li>
            <li><a href="/lender#lender-hero">Hero</a></li>
            <li><a href="/lender#interest-explanation">Interest Explanation</a></li>
            <li><a href="/lender#profit-benefits">Profit Benefits</a></li>
          </ul>
        </li>
     
        <li><a href="#">Loans</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Signup/Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
