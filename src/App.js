// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentBox />
      <div className="content">
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default App;
