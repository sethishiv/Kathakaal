import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kathakal</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
           <li>
            <Link to="/borrower">Borrower</Link>
        </li>
        <li><Link to="/lender">Lender</Link></li>
     
        <li><a href="#">Loans</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Signup/Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
