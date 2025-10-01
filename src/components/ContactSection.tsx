import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with your preferred form handling service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to automate your business? Let's discuss your project.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <div className="contact-item">
              <Mail className="contact-icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>hello@omnisolutions.ai</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" size={24} />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" size={24} />
              <div>
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleInputChange}
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Tell us about your automation needs..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="form-textarea"
            />
            <button type="submit" className="form-submit">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;