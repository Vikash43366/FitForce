import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'bg-dark' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavClick}>
          FitForce<span className="text-danger">Gym</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { to: '/#home', text: 'Home' },
              { to: '/#about', text: 'About' },
              { to: '/#classes', text: 'Classes' },
              { to: '/#trainers', text: 'Trainers' },
              { to: '/#pricing', text: 'Pricing' },
              { to: '/#contact', text: 'Contact' }
            ].map((item) => (
              <li key={item.text} className="nav-item">
                <Link
                  className="nav-link"
                  to={item.to}
                  onClick={handleNavClick}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 