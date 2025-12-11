import React from 'react';
import { portfolioData } from '../data';
import { FaArrowRight, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="floating">
          <h1>{portfolioData.name}</h1>
        </div>
        
        <div className="hero-title">
          <FaCode /> {portfolioData.title} <FaCode />
        </div>
        
        <p className="hero-description">
          I approach problem-solving with a blend of analytical rigor and creative thinking, believing that elegant code is born from clear logic. This website serves as my digital workshop—a space to document my projects, explore technical ideas, and share my progress as I evolve from student to developer.
        </p>
        
        <div className="hero-btns">
          <a href="#portfolio" className="btn btn-primary">
            Explore Projects <FaArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">
            Let's Connect
          </a>
        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;