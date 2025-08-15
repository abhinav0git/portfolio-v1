import React from 'react';
import './Sidebar.css';
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-info">
          <h1 className="name">John Doe</h1>
          <p className="tagline">Bringing Ideas to Reality ✨</p>
          <p className="bio">
            Hey there 👋 I'm a placeholder text a.k.a a <strong>generalist</strong>. I work on web, mobile, desktop, server, and embedded systems. I've worked with clients like <strong>Major Corp Inc.</strong>. I love Modern UI/UX, Computer Science, and creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="action-buttons">
          <button className="btn-primary">Schedule a call</button>
          <button className="btn-secondary">Resume</button>
        </div>

        <div className="social-links">
          <a href="#" aria-label="GitHub"><FiGithub /></a>
          <a href="#" aria-label="Twitter"><FiTwitter /></a>
          <a href="#" aria-label="Email"><FiMail /></a>
          <a href="#" aria-label="Discord"><FaDiscord /></a>
          <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>

        <div className="skills-section">
          <p><strong>Frontend:</strong> React, Next.js, TailwindCSS, SCSS, Framer Motion, GSAP, Redux</p>
          <p><strong>Backend:</strong> Express.js, Fastapi, Flask, Go</p>
          <p><strong>Database:</strong> MySQL, MongoDB, PostgreSQL, Redis</p>
          <p><strong>Cloud:</strong> AWS Certified, Vercel, Cloudflare</p>
          <p><strong>Web3:</strong> Solana/web3.js, Ethers.js</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;