import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link 
              to="/privacy-policy" 
              className="footer-link"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-conditions" 
              className="footer-link"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="footer-text">
            Omni Solutions © 2025. All rights reserved.<br />
            Built with intelligence, for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;