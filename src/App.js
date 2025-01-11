// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Navbar from './components/Navbar';
import ComingSoon from '../src/pages/comingSoon'; // Import ComingSoon component
// src/App.js
import HomePage from '../src/pages/homepage';  // Correct the import path to match the filename
; // Import HomePage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Default route */}
        <Route path="/paraphrasing" element={<ComingSoon />} />
        <Route path="/sentence-generator" element={<ComingSoon />} />
        <Route path="/conclusion-generator" element={<ComingSoon />} />
        <Route path="/other-tools" element={<ComingSoon />} />
        {/* You can add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
