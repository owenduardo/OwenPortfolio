import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience'; // Add this
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { portfolioData } from './data';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Hero />
        <About />
        <Portfolio 
          projects={portfolioData.projects} 
          onProjectClick={openProject}
        />
        <Experience /> {/* Add this line */}
        <Contact />
      </main>
      <Footer />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProject} 
        />
      )}
    </div>
  );
}

export default App;