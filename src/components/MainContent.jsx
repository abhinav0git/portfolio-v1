import React, { useState } from 'react';
import './MainContent.css';
import { projects, experience } from '../projectsData'; 
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
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


// ExperienceItem Component
const ExperienceItem = ({ item }) => {
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
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <main className="main-content">
      {/* The tabs will become our sticky header */}
      <div className="tabs">
        <button className={activeTab === 'Projects' ? 'active font-medium' : 'font-regular'} onClick={() => setActiveTab('Projects')}>
          Projects
        </button>
        <button className={activeTab === 'Experience' ? 'active font-medium' : 'font-regular'} onClick={() => setActiveTab('Experience')}>
          Experience
        </button>
        <button className={activeTab === 'Gallery' ? 'active font-medium' : 'font-regular'} onClick={() => setActiveTab('Gallery')}>
          Gallery
        </button>
      </div>

      {/* scrollable part */}
      <div className="content-area">
        {activeTab === 'Projects' && (
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
        {activeTab === 'Experience' && (
          <div className="experience-list">
            {experience.map((item, index) => (
              <ExperienceItem key={index} item={item} />
            ))}
          </div>
        )}
        {activeTab === 'Gallery' && (
          <div className="design-list">
            {/* Map through your design data here */}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;