import { useState } from 'react';
import Loader from './components/Loader';
import SplashCursor from './components/SplashCursor';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <SplashCursor />
      {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
      {!loading && (
        <div className="app">
          <ThreeBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
