import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Loader from './components/Loader';
import './App.css';
import './Layout.css';
import './Wrappers.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          className="portfolio-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.6, 0.05, 0.01, 0.9],
            staggerChildren: 0.1
          }}
        >
          <motion.div
            className="sidebar-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sidebar />
          </motion.div>
          
          <motion.div
            className="main-content-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MainContent />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default App;