import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-img">
        <img src={project.image} alt={project.title} />
        <div className="portfolio-overlay">
          <Link to={`/project/${project.id}`} className="btn btn-primary">
            <FaArrowRight /> See Details
          </Link>
        </div>
      </div>
      
      <div className="portfolio-info">
        <h3>{project.title}</h3>
        <p>{project.description.substring(0, 100)}...</p>
        
        <div className="portfolio-tags">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="portfolio-tag">{tag}</span>
          ))}
        </div>
        
        <div className="portfolio-links">
          <Link to={`/project/${project.id}`} className="btn btn-primary">
            <FaArrowRight /> See More
          </Link>
          {project.liveUrl !== '#' && (
            <a href={project.liveUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {project.codeUrl !== '#' && (
            <a href={project.codeUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;