import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MainContent.css';
import { projects, experience } from '../projectsData'; 
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <h3 className="project-title font-semibold">{project.title}</h3>
        <span className="project-date font-light">{project.date}</span>
        <p className="project-description font-regular">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag font-medium">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href="#" aria-label="GitHub Link"><FiGithub /></a>
          <a href="#" aria-label="External Link"><FiExternalLink /></a>
        </div>
      </div>
      <div className="project-image-container">
        <img src={project.imageUrl} alt={project.title} className="project-image" />
      </div>
    </div>
  );
};

const ExperienceItem = ({ item, index }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-role font-semibold">{item.role}</h3>
        <span className="experience-dates font-light">{item.dates}</span>
      </div>
      <div className="experience-subheader font-medium">
        <span>{item.company}</span>
        <span>&middot;</span>
        <span>{item.type}</span>
        <span>&middot;</span>
        <span>{item.location}</span>
      </div>
      <ul className="experience-description font-regular">
        {item.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const MainContent = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const tabs = ['Experience', 'Projects', 'Gallery'];

  const setPage = (newIndex) => {
    if (newIndex === activePageIndex) return;
    setDirection(newIndex > activePageIndex ? 1 : -1);
    setActivePageIndex(newIndex);
  };
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 22 },
        opacity: { duration: 0.2 },
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 22 },
        opacity: { duration: 0.2 },
      }
    }),
  };
  
  const renderContent = (index) => {
    switch(index) {
      case 0:
        return (
          <div className="project-list">
            {experience.map((item, i) => (
              <ExperienceItem key={i} item={item} index={i} />
            ))}
          </div>
        );
      case 1:
        return (
          <div className="experience-list">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        );
      case 2:
        return (
           <div className="design-list">
            <div className="placeholder-content">
              <h2>Gallery Coming Soon</h2>
              <p className=''>This section will showcase visual designs and creative work.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <main className="main-content">
      <motion.div 
        className="tabs"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={activePageIndex === index ? 'active font-medium' : 'font-regular'}
            onClick={() => setPage(index)}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      <div className="content-area">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activePageIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {renderContent(activePageIndex)}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default MainContent;