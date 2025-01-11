// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the main logo
import accountLogo from '../assets/account_logo.png'; // Import the account logo
import pricingLogo from '../assets/pricing_logo.png'; // Import the pricing logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Summarizer.ai Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Change this link to point to the root */}
          <li><Link to="/paraphrasing">AI Paraphrasing Tool</Link></li>
          <li><Link to="/sentence-generator">AI Sentence Generator</Link></li>
          <li><Link to="/conclusion-generator">AI Conclusion Generator</Link></li>
          <li><Link to="/other-tools">Other Tools</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="#pricing"><img src={pricingLogo} alt="Pricing" className="pricing-logo" /></Link></li> {/* Replace "Pricing" text with image */}
          <li><Link to="#account"><img src={accountLogo} alt="Account" className="account-logo" /></Link></li> {/* Replace "Account" text with image */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
