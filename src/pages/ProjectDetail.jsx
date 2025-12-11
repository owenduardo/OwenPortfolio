import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaUserFriends, FaCode, FaServer } from 'react-icons/fa';
import { portfolioData } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    // Find the project by ID
    const foundProject = portfolioData.projects.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
      
      // Find related projects (same tags)
      const related = portfolioData.projects
        .filter(p => p.id !== parseInt(id))
        .filter(p => p.tags.some(tag => foundProject.tags.includes(tag)))
        .slice(0, 3);
      setRelatedProjects(related);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!project) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-detail-page">
      {/* Header */}
      <header className="project-header">
        <div className="container">
          <Link to="/" className="back-btn">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="project-hero-content">
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
            
            <div className="project-meta">
              <div className="meta-item">
                <FaCalendarAlt />
                <span>Completed: 2024</span>
              </div>
              <div className="meta-item">
                <FaUserFriends />
                <span>Role: Full Stack Developer</span>
              </div>
              <div className="meta-item">
                <FaCode />
                <span>{project.tags.length} Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="project-main">
        <div className="container">
          <div className="project-content">
            {/* Project Image */}
            <div className="project-featured-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div className="detail-section">
                <h2>Project Overview</h2>
                <p>
                  This project was developed to solve real-world problems using cutting-edge technologies. 
                  The application features a modern, responsive design with advanced functionality that 
                  provides an exceptional user experience.
                </p>
                <p>
                  The system architecture was designed for scalability and performance, incorporating 
                  best practices in software development and deployment.
                </p>
              </div>

              {/* Project Overview */}
              <div className="detail-section">
                <h3>
                  <FaLightbulb /> Project Overview
                </h3>
                
                {/* Add optional chaining OR default value */}
                {project.overview ? (
                  <p style={{ whiteSpace: 'pre-line' }}>{project.overview}</p>
                ) : (
                  <p>No overview available.</p>
                )}
              </div>

              <div className="detail-section">
                <h2>Key Features</h2>
                <ul className="features-list">
                  <li>Responsive design that works on all devices</li>
                  <li>Real-time data updates and notifications</li>
                  <li>Secure authentication and authorization system</li>
                  <li>Optimized performance and fast loading times</li>
                  <li>Comprehensive testing and documentation</li>
                  <li>Scalable architecture for future growth</li>
                </ul>
              </div>

              <div className="detail-section">
                <h2>Challenges & Solutions</h2>
                <div className="challenges">
                  <div className="challenge-item">
                    <h3>Challenge: Performance Optimization</h3>
                    <p>Solution: Implemented code splitting, lazy loading, and optimized images resulting in 60% faster load times.</p>
                  </div>
                  <div className="challenge-item">
                    <h3>Challenge: Cross-browser Compatibility</h3>
                    <p>Solution: Used feature detection and progressive enhancement to ensure compatibility across all major browsers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="project-links-section">
              <h2>Project Links</h2>
              <div className="project-links">
                {project.liveUrl !== '#' && (
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Visit Live Site
                  </a>
                )}
                {project.codeUrl !== '#' && (
                  <a href={project.codeUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Source Code
                  </a>
                )}
                <Link to="/" className="btn btn-outline">
                  <FaArrowLeft /> Back to All Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="related-projects">
              <h2>Related Projects</h2>
              <div className="related-projects-grid">
                {relatedProjects.map(relatedProject => (
                  <div key={relatedProject.id} className="related-project-card">
                    <img src={relatedProject.image} alt={relatedProject.title} />
                    <div className="related-project-info">
                      <h3>{relatedProject.title}</h3>
                      <p>{relatedProject.description.substring(0, 80)}...</p>
                      <Link to={`/project/${relatedProject.id}`} className="btn btn-primary">
                        View Project
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="project-footer">
        <div className="container">
          <Link to="/" className="logo">Portfolio</Link>
          <p>© 2024 Owen Duardo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;