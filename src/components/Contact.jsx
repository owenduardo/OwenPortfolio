import React, { useState } from 'react';
import { portfolioData } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Get in touch</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Info</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>{portfolioData.location}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>{portfolioData.email}</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;