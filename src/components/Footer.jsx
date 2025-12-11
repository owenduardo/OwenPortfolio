import React from 'react';
import { portfolioData } from '../data';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // Map icon names to actual components
  const iconMap = {
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    github: FaGithub
  };

  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="logo">Connect With Me</a>
        
        <p>Let's build something amazing together</p>
        
        <div className="social-links">
          {portfolioData.socialLinks.map((social) => {
            const IconComponent = iconMap[social.icon];
            return (
              <a 
                key={social.name}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {IconComponent ? <IconComponent /> : social.name}
              </a>
            );
          })}
        </div>
        
        <div className="copyright">
          <p>&copy; 2024 {portfolioData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;