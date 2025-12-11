import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { portfolioData } from '../data';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Hero />
        <About />
        <Portfolio projects={portfolioData.projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;