import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onLoadingComplete }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Complete loading after animation
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        {/* Animated S Logo */}
        <motion.div
          className="logo-s-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
        >
          <motion.svg
            width="150"
            height="150"
            viewBox="0 0 200 200"
            className="logo-s"
          >
            <motion.path
              d="M 140 50
                 C 140 35, 125 25, 100 25
                 C 75 25, 60 35, 60 50
                 C 60 65, 75 75, 100 75
                 L 110 75
                 C 125 75, 140 85, 140 100
                 C 140 120, 120 135, 100 135
                 L 100 135
                 C 80 135, 60 145, 60 165
                 C 60 180, 75 190, 100 190
                 C 125 190, 140 180, 140 165"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="50%" stopColor="#764ba2" />
                <stop offset="100%" stopColor="#f093fb" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Glowing effect */}
          <motion.div
            className="glow-circle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="loader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            Sourav Halder
          </motion.h2>

          {/* Loading dots */}
          <div className="loading-dots">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >
              .
            </motion.span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div className="progress-bar-container">
          <motion.div
            className="progress-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
