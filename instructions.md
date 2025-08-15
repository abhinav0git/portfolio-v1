Let's address issues.

The core idea is to make the right-hand `MainContent` component a self-contained unit with a sticky header (the tabs) and a scrollable body (the content).

Here’s how we'll fix it step-by-step:

### Step 1: Add Experience Data

First, to properly test the tab switching and layout consistency, let's add some data for the "Experience" tab.

Open **`src/projectsData.js`** and add the following array to it:

**`src/projectsData.js`**
```javascript
// ... keep the existing 'projects' array ...

export const experience = [
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    type: 'Freelance',
    location: 'Remote',
    dates: 'December 2024 - Present',
    description: [
      'Developed custom web applications and e-commerce solutions for multiple clients.',
      'Built responsive websites using React, Next.js and modern frontend technologies.',
      'Provided technical consulting and solutions architecture for small businesses.',
      'Tech: React, Next.js, TypeScript, Node.js, MongoDB, Tailwind, Framer Motion, AWS',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'RMSI (Client - Apple Inc.)',
    type: 'Full-time',
    location: 'Remote',
    dates: 'October 2023 - December 2024',
    description: [
      'Engineered a VPN for Apple Maps data translation & validation using Node.js/Express/MySQL.',
      'Built data visualization tool with React/AWS for digitalization analysis.',
      'Led Next.js POC initiatives demonstrating scalable solutions.',
      'Tech: Node.js, Express, MySQL, Next.js, TypeScript, React, Tailwind, AWS',
    ],
  },
];
```

---

### Step 2: Update `MainContent.jsx` to Render Experience

Now, let's modify the `MainContent` component to display this new data when the "Experience" tab is active.

In **`src/components/MainContent.jsx`**, import the new data and add the logic to render it.

```jsx
import React, { useState } from 'react';
import './MainContent.css';
// Import both data sets
import { projects, experience } from '../projectsData'; 
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// ProjectCard Component (no changes needed here)
const ProjectCard = ({ project }) => {
  // ... same as before
  return (
    <div className="project-card">
      {/* ... */}
    </div>
  );
};


// NEW: ExperienceItem Component
const ExperienceItem = ({ item }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-role">{item.role}</h3>
        <span className="experience-dates">{item.dates}</span>
      </div>
      <div className="experience-subheader">
        <span>{item.company}</span>
        <span>&middot;</span>
        <span>{item.type}</span>
        <span>&middot;</span>
        <span>{item.location}</span>
      </div>
      <ul className="experience-description">
        {item.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};


// MainContent Component (UPDATED)
const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <main className="main-content">
      {/* The tabs will become our sticky header */}
      <div className="tabs">
        <button className={activeTab === 'Projects' ? 'active' : ''} onClick={() => setActiveTab('Projects')}>Projects</button>
        <button className={activeTab === 'Experience' ? 'active' : ''} onClick={() => setActiveTab('Experience')}>Experience</button>
        <button className={activeTab === 'TIL' ? 'active' : ''} onClick={() => setActiveTab('TIL')}>TIL</button>
        <button className={activeTab === 'Designs' ? 'active' : ''} onClick={() => setActiveTab('Designs')}>Designs</button>
      </div>

      {/* This area will now be the scrollable part */}
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
        {(activeTab === 'TIL' || activeTab === 'Designs') && (
            <div className="placeholder-content">
                Content for {activeTab} will be here.
            </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;

```
*We've created a new `ExperienceItem` component and added the logic to render it when the `activeTab` is 'Experience'.*

---

### Step 3: The CSS Fix for Sticky Tabs and Scrolling

This is the most important part. We will modify **`src/components/MainContent.css`** to restructure the layout of the right-hand column.

Replace the entire content of **`src/components/MainContent.css`** with the following:

```css
/* -- MainContent Layout -- */
.main-content {
  width: 65%;
  height: 100vh; /* Make the container viewport height */
  display: flex; /* Use flexbox for vertical layout */
  flex-direction: column; /* Stack children (tabs and content) vertically */
}

/* -- Sticky Tabs / Header -- */
.tabs {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 40px 0; /* Add padding here */
  
  /* STICKY BEHAVIOR */
  position: sticky;
  top: 0;
  z-index: 10;
  
  /* Glassmorphism effect for the background */
  background-color: rgba(35, 38, 64, 0.8); /* Semi-transparent background */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* We add the border to a pseudo-element to keep it below the blurred background */
  position: relative; 
}

.tabs::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 40px;
    right: 40px;
    height: 1px;
    background-color: var(--border-color);
}

.tabs button {
  padding: 0.75rem 1rem 1.5rem; /* Adjust padding to make space for the active indicator */
  font-size: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
}

.tabs button:hover {
  color: var(--text-primary);
}

.tabs button.active {
  color: var(--text-primary);
  font-weight: 600;
}

/* Reposition active indicator to the actual bottom */
.tabs button.active::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
}


/* -- Scrollable Content Area -- */
.content-area {
  overflow-y: auto; /* THIS IS THE KEY: makes this div scrollable */
  flex-grow: 1; /* Allows this area to fill the remaining space */
  padding: 2rem 40px; /* Padding for the content itself */
}


/* -- Project & Experience Lists (mostly the same, just adding experience) -- */
.project-list, .experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Project Card styles (no changes) */
.project-card {
  background-color: var(--bg-card);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;
}
.project-card:hover { /* ... same as before ... */ }
.project-details { flex: 3; }
.project-title { /* ... same as before ... */ }
.project-date { /* ... same as before ... */ }
.project-description { /* ... same as before ... */ }
.project-tags { /* ... same as before ... */ }
.tag { /* ... same as before ... */ }
.project-links { /* ... same as before ... */ }
.project-image-container { flex: 2; /* ... same as before ... */ }
.project-image { /* ... same as before ... */ }

/* NEW: Experience Item styles */
.experience-item {
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid transparent; /* Keep layout consistent */
  transition: all 0.3s ease;
}

.experience-item:hover {
  background-color: var(--bg-card);
  border-color: var(--border-color);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.experience-role {
  font-size: 1.25rem;
  color: var(--text-primary);
  font-weight: 600;
  margin: 0;
}

.experience-dates {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.experience-subheader {
  display: flex;
  gap: 0.5rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.experience-description {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
.experience-description li::marker {
  color: var(--accent-color);
}


/* Placeholder and Responsive styles (no changes) */
.placeholder-content { /* ... same as before ... */ }
@media (max-width: 1024px) { /* ... same as before ... */ }
```

### Summary of Changes

1.  **Layout Consistency:** By setting `width: 35%` on the sidebar and `width: 65%` on the main content, their proportions are fixed and won't change based on the content inside. This solves your second issue.
2.  **Sticky Tabs:**
    *   We made the `.main-content` container a vertical `flex` box that is `100vh` (100% of the viewport height).
    *   We applied `position: sticky` and `top: 0` to the `.tabs` div, making it stick to the top of its container (`.main-content`). The `z-index` ensures it's on top of other content.
    *   We added a modern, semi-transparent background with a `backdrop-filter` to the tabs so you can see the content scrolling underneath.
3.  **Scrollable Content:**
    *   The real magic is giving the `.content-area` div `overflow-y: auto`. This tells the browser: "If the content inside me is taller than I am, add a scrollbar *to me*, not the whole page."
    *   `flex-grow: 1` ensures this content area expands to fill all available vertical space left by the sticky tabs.

Now, your portfolio should behave exactly as requested. The tabs will remain fixed at the top of the right-hand column as you scroll through the projects or experience, and the overall layout will stay perfectly consistent when you switch between tabs.