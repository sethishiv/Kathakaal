import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kathakal</div>
      <ul className={styles.navLinks}>
        <li><a href="#">About</a></li>
        <li><a href="#">Lender</a></li>
        <li>
            <Link to="/borrower">Borrower</Link>
        </li>
        <li><a href="#">Loans</a></li>
        <li><a href="#">Signup/Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
