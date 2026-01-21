import React, { useEffect, useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking on a link
    }
  };

  // Close menu if clicked outside or resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo" onClick={() => scrollToSection('home')}>Our Blog</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about-us')}>About Us</a></li>
            <li><a onClick={() => scrollToSection('blog')}>Blog</a></li>
            <li><a onClick={() => scrollToSection('contact-us')}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
