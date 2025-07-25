import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kathakal</div>
      <ul className={styles.navLinks}>
        <li><a href="#">About</a></li>
        <li><a href="#">Lender</a></li>
        <li><a href="#">Borrower</a></li>
        <li><a href="#">Loans</a></li>
        <li><a href="#">Signup/Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
