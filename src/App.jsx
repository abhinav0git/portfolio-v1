import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import './Layout.css';

function App() {
  return (
    <div className="portfolio-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;