import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaFilePowerpoint } from 'react-icons/fa';

const Portfolio = ({ projects, onProjectClick }) => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const categories = ['all', 'react', 'nextjs', 'fullstack', 'mobile', 'design'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(filter.toLowerCase())
        )
      );

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Click "See More" for detailed information</p>
        </div>
        
        
        <div className="portfolio-grid">
          {filteredProjects.slice(0, visibleProjects).map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img">
              <img 
                src={project.mainImage || (Array.isArray(project.image) ? project.image[0] : project.image)} 
                alt={project.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/default-project.jpg';
                }}
              />
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
                  <button 
                    className="btn btn-primary"
                    onClick={() => onProjectClick(project)}
                  >
                    <FaArrowRight /> See More
                  </button>
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
                  {/* ADD THIS LINE FOR POWERPOINT BUTTON */}
                  {project.pptUrl && project.pptUrl !== '#' && (
                    <a href={project.pptUrl} className="btn btn-ppt" target="_blank" rel="noopener noreferrer" download>
                      <FaFilePowerpoint /> PPT
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="load-more-container">
            <button onClick={loadMore} className="btn btn-primary load-more-btn">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;