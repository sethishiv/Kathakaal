import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Borrower from './pages/Borrower';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrower" element={<Borrower />} />
        {/* Add more routes as needed */}
      </Routes>
   
  );
};

export default App;
