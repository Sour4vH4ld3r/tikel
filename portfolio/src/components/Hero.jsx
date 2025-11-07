import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import LaserFlow from './LaserFlow';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="hero" className="hero section">
      <LaserFlow />
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={itemVariants}>
            👋 Welcome to my portfolio
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Sourav Halder</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            Full Stack Developer
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            I craft beautiful, functional, and user-centered digital experiences.
            Passionate about building innovative solutions that make a difference.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-outline"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="scroll-indicator">
              <span></span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
