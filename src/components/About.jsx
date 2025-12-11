import React from 'react';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Learn more about who I am</p>
        </div>
        
        <div className="about-content">
          <div className="about-img">
            <img 
              src="/images/image2.jpg    " 
              alt={portfolioData.name}
            />
          </div>
          
          <div className="about-text">
            <h3>Hello, I'm {portfolioData.name}</h3>
            <p>{portfolioData.bio}</p>
            
            <div className="skills">
              {portfolioData.skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;