import { useEffect, useState } from 'react';
import './SplashCursor.css';

export default function SplashCursor() {
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSplash = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setSplashes((prev) => [...prev, newSplash]);

      // Remove splash after animation completes
      setTimeout(() => {
        setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="splash-cursor-container">
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="splash"
          style={{
            left: splash.x,
            top: splash.y,
          }}
        >
          {/* Multiple ripple layers for depth */}
          <div className="splash-ring splash-ring-1" />
          <div className="splash-ring splash-ring-2" />
          <div className="splash-ring splash-ring-3" />

          {/* Particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="splash-particle"
              style={{
                '--angle': `${(i * 360) / 8}deg`,
                '--delay': `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
