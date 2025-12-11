import React from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaUserFriends, FaCode, FaCheckCircle, FaLightbulb, FaFilePowerpoint } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.description}</p>
          
          <div className="project-meta">
            <div className="meta-item">
              <FaCalendarAlt />
              <div>
                <strong>Timeline:</strong>
                <span>{project.date || 'Not specified'}</span>
                <span className="duration">({project.duration || 'Duration not specified'})</span>
              </div>
            </div>
            <div className="meta-item">
              <FaUserFriends />
              <div>
                <strong>Role:</strong>
                <span>{project.role || 'Not specified'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-body">
          {/* Project Image - FULL SIZE but smaller */}
          {/* Project Images Gallery */}
          {/* Project Images */}
<div className="detail-section">
  <h3>Project Screenshots</h3>
  
  {project.images && project.images.length > 0 ? (
    <div className="image-gallery">
      {project.images.map((img, index) => (
        <div key={index} className="gallery-item">
          <img 
            src={img} 
            alt={`${project.title} screenshot ${index + 1}`}
            className="gallery-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/default-project.jpg';
            }}
          />
          <div className="image-caption">
            Screenshot {index + 1}
          </div>
        </div>
      ))}
    </div>
  ) : project.mainImage || project.image ? (
    <div className="single-image-container">
      <img 
        src={project.mainImage || project.image} 
        alt={project.title}
        className="modal-full-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/default-project.jpg';
        }}
      />
      <div className="image-caption">
        Main project screenshot
      </div>
    </div>
  ) : (
    <p className="no-images">No screenshots available</p>
  )}
</div>

          {/* Project Overview */}
          <div className="detail-section">
            <h3>
              <FaLightbulb /> Project Overview
            </h3>
            {project.overview ? (
              <p style={{ whiteSpace: 'pre-line' }}>{project.overview}</p>
            ) : (
              <p>No overview available.</p>
            )}
          </div>

          {/* Technologies Used */}
          <div className="detail-section">
            <h3>
              <FaCode /> Technologies Used
            </h3>
            {project.tags && project.tags.length > 0 ? (
              <div className="tech-stack">
                {project.tags.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <FaCode />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No technologies listed.</p>
            )}
          </div>

          {/* Key Features */}
          <div className="detail-section">
            <h3>Key Features</h3>
            {project.features && project.features.length > 0 ? (
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No features listed.</p>
            )}
          </div>

                    {/* Project Links */}
          <div className="modal-links">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Visit Live Site
              </a>
            )}
            {project.codeUrl && project.codeUrl !== '#' && (
              <a href={project.codeUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Source Code
              </a>
            )}
            {project.pptUrl && project.pptUrl !== '#' && (
              <a href={project.pptUrl} className="btn btn-ppt" target="_blank" rel="noopener noreferrer" download>
                <FaFilePowerpoint /> Download PPT
              </a>
            )}
            <button onClick={onClose} className="btn btn-outline">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;