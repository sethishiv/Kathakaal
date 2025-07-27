import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Borrower from './pages/Borrower';
import Lender from './pages/Lender';
import About from './pages/About';
import Loans from './pages/Loans';


const Signup = () => <div>Signup/Login Page</div>;

const App = () => {
  return (
    <Router className="scroll-smooth">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lender" element={<Lender />} />
        <Route path="/borrower" element={<Borrower />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;