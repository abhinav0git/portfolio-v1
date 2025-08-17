import React from 'react';
import './Sidebar.css';
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: custom * 0.1
      }
    })
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-info">
          <div className="profile-header">
            <div className="profile-image">
              <img src="/pfp.jpeg" alt="Abhinav Singh" />
            </div>
            <div className="profile-text">
              <motion.h1 
                className="name font-bold"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Abhinav Singh
              </motion.h1>
              <motion.p 
                className="tagline font-medium"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Bringing Ideas to Reality ✨
              </motion.p>
            </div>
          </div>
          <motion.p 
            className="bio font-regular"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            I'm a <strong>Software Developer</strong> who loves building intuitive and modern
            web experiences. I enjoy bringing thoughtful design and clean code together, making sure
            that what I build not only works well but also feels great to use. <br /><br />
            With a strong foundation in <strong>Full-stack development</strong> and a passion for <strong>UI/UX</strong>, I aim to
            create digital products that are both elegant and impactful.
          </motion.p>
        </div>

        <motion.div 
          className="skills-section"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <p><strong className="font-semibold">Frontend:</strong> React.js, Next.js, TailwindCSS, Framer Motion, GSAP</p>
          <p><strong className="font-semibold">Backend:</strong> Node.js, FastAPI, Flask, Firebase</p>
          <p><strong className="font-semibold">Database:</strong> MySQL, MongoDB</p>
          <p><strong className="font-semibold">Cloud:</strong> GCP, Vercel, Netlify</p>
          <p><strong className="font-semibold">Miscellaneous:</strong> C/C++, REST API, PostHog, Pinecone</p>
          <p><strong className="font-semibold">Tools:</strong> Git/GitHub, Figma, JIRA, VS Code, SQL Management Studio</p>
        </motion.div>

        <motion.div 
          className="social-links"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a href="https://github.com/abhinav0git" aria-label="GitHub"><FiGithub /></a>
          <a href="https://x.com/abhinav0dev" aria-label="Twitter"><FiTwitter /></a>
          <a href="mailto:abhin07c@gmail.com" aria-label="Email"><FiMail /></a>
          <a href="https://www.linkedin.com/in/abhinav07c/" aria-label="LinkedIn"><FiLinkedin /></a>
        </motion.div>

        <motion.div 
          className="action-buttons"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <button className="btn-secondary font-medium shiny-button">Resume</button>
        </motion.div>
      </div>
    </aside>
  );
};

export default Sidebar;