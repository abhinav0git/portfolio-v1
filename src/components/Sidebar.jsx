import React from 'react';
import './Sidebar.css';
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-info">
          <h1 className="name font-bold">Abhinav Singh</h1>
          <p className="tagline font-medium">Bringing Ideas to Reality ✨</p>
          <p className="bio font-regular">
            Hey there 👋 <br />I'm a <strong>Software Developer</strong> who loves building intuitive and modern
            web experiences. I enjoy bringing thoughtful design and clean code together, making sure
            that what I build not only works well but also feels great to use. <br /><br />
            With a strong foundation in <strong>full-stack development</strong> and a passion for <strong>UI/UX</strong>, I aim to
            create digital products that are both elegant and impactful.
          </p>
        </div>

        <div className="skills-section">
          <p><strong className="font-semibold">Frontend:</strong> React, Next.js, TailwindCSS, SCSS, Framer Motion, GSAP, Redux</p>
          <p><strong className="font-semibold">Backend:</strong> Express.js, Fastapi, Flask, Go</p>
          <p><strong className="font-semibold">Database:</strong> MySQL, MongoDB, PostgreSQL, Redis</p>
          <p><strong className="font-semibold">Cloud:</strong> AWS Certified, Vercel, Cloudflare</p>
          <p><strong className="font-semibold">Web3:</strong> Solana/web3.js, Ethers.js</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/abhinav0git" aria-label="GitHub"><FiGithub /></a>
          <a href="https://x.com/abhinav0dev" aria-label="Twitter"><FiTwitter /></a>
          <a href="mailto:abhin07c@gmail.com" aria-label="Email"><FiMail /></a>
          <a href="https://www.linkedin.com/in/abhinav07c/" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>

        <div className="action-buttons">
          <button className="btn-secondary font-medium">Resume</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;