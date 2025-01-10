// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Summarizer.ai</h2>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#paraphrasing">AI Paraphrasing Tool</a></li>
          <li><a href="#sentence-generator">AI Sentence Generator</a></li>
          <li><a href="#conclusion-generator">AI Conclusion Generator</a></li>
          <li><a href="#other-tools">Other Tools</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#account">Account</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
