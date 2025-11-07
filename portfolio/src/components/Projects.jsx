import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using WebSockets. Built with React and Firebase.',
      tags: ['React', 'Firebase', 'WebSocket', 'Material-UI'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Task+Manager',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data from multiple APIs. Features location-based forecasts and historical data.',
      tags: ['React', 'TypeScript', 'Chart.js', 'API'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Weather+App',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media insights. Visualizes engagement metrics and provides actionable recommendations.',
      tags: ['Next.js', 'D3.js', 'PostgreSQL', 'TailwindCSS'],
      image: 'https://via.placeholder.com/600x400/f093fb/ffffff?text=Analytics',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A stunning 3D portfolio website with Three.js animations and smooth scroll effects. Showcases projects and skills.',
      tags: ['React', 'Three.js', 'Framer Motion', 'Vite'],
      image: 'https://via.placeholder.com/600x400/22c55e/ffffff?text=Portfolio',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking app with workout plans, progress tracking, and nutrition logging.',
      tags: ['React Native', 'Redux', 'Express', 'SQLite'],
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Fitness+App',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>My Projects</h2>
            <p className="section-subtitle">Check out my recent work</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
