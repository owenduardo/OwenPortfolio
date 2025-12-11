import React from 'react';
import { portfolioData } from '../data';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
          <p>My professional journey and career achievements</p>
        </div>
        
        <div className="experience-timeline">
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="company-logo">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} />
                    ) : (
                      <div className="logo-placeholder">
                        <FaBriefcase />
                      </div>
                    )}
                  </div>
                  
                  <div className="experience-info">
                    <h3>{exp.position}</h3>
                    <div className="company-name">{exp.company}</div>
                    
                    <div className="experience-meta">
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{exp.date}</span>
                        <span className="duration">({exp.duration})</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="experience-description">
                  <p>{exp.description}</p>
                </div>
                
                <div className="experience-skills">
                  <h4>
                    <FaCode /> Skills & Technologies Used
                  </h4>
                  <div className="skills-list">
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
        
        {/* EDUCATION SECTION */}
        <div className="experience-education">
          <h3>
            <FaGraduationCap /> Education
          </h3>
          
          {/* First Education */}
          <div className="education-item">
            <div className="education-header">
              <h4>National Taiwan Ocean University</h4>
              <div className="education-details">
                <span className="degree">Bachelor's Degree in Computer Science</span>
                <span className="duration">2022 - 2026</span>
              </div>
            </div>
          </div>
          
          {/* Second Education */}
          <div className="education-item">
            <div className="education-header">
              <h4>Saint Aloysius High School</h4>
              <div className="education-details">
                <span className="degree">Science Track</span>
                <span className="duration">2019 - 2022</span>
              </div>
            </div>
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Experience;