// src/pages/HomePage.jsx
import React from 'react';
import ContentBox from '../components/ContentBox'; // Import ContentBox component
import './HomePage.css'; // Import HomePage specific styles

function HomePage() {
  return (
    <div className="homepage-container">
      <ContentBox /> {/* Render the ContentBox here */}
    </div>
  );
}

export default HomePage;
