import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications with modern technologies.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Apps',
      description: 'Creating cross-platform mobile applications with React Native and Flutter.',
    },
    {
      icon: <FaCode />,
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side solutions with Node.js and Python.',
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces with modern design principles.',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>Hello! I'm a passionate developer.</h3>
              <p>
                I'm a Full Stack Developer with a passion for creating innovative
                and user-friendly digital experiences. With expertise in modern web
                technologies, I transform ideas into reality.
              </p>
              <p>
                My journey in web development started 5 years ago, and since then,
                I've worked on numerous projects ranging from simple websites to
                complex web applications. I'm always eager to learn new technologies
                and improve my skills.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge with
                the developer community.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>5+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h4>50+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h4>30+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="services-grid" variants={itemVariants}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
