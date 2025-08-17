import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        delay: 2.5 // Show greeting for 2.5 seconds before fading out
      }}
      onAnimationComplete={onLoadingComplete}
    >
      <motion.div 
        className="greeting-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hey there 👋
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Welcome to my Portfolio 😸
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
