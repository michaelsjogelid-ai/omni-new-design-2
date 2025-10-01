import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Mobile Layout */}
          <div className="mobile-header">
            <Link to="/" className="logo mobile-logo-container">
              <img 
                src="/Untitled design (1).png" 
                alt="Omni Solutions Logo" 
                className="logo-image mobile-logo-image"
              />
              <span className="logo-text mobile-logo-text">OMNI SOLUTIONS</span>
            </Link>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Layout */}
          <div className="desktop-header">
            <Link to="/" className="logo desktop-logo-container">
              <img 
                src="/Untitled design (1).png" 
                alt="Omni Solutions Logo" 
                className="logo-image desktop-logo-image"
              />
              <span className="logo-text desktop-logo-text">OMNI SOLUTIONS</span>
            </Link>
            <nav className="nav-menu desktop-nav">
              <Link 
                to="/services" 
                className={`nav-item ${isActive('/services') ? 'active' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className={`nav-item ${isActive('/pricing') ? 'active' : ''}`}
              >
                Pricing
              </Link>
              <Link 
                to="/works" 
                className={`nav-item ${isActive('/works') ? 'active' : ''}`}
              >
                Works
              </Link>
              <Link 
                to="/contact" 
                className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className="mobile-nav">
              <Link
                to="/"
                className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`mobile-nav-item ${isActive('/services') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className={`mobile-nav-item ${isActive('/pricing') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/works"
                className={`mobile-nav-item ${isActive('/works') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Works
              </Link>
              <Link
                to="/contact"
                className={`mobile-nav-item ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;