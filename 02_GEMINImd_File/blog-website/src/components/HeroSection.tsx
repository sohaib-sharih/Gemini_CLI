import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Our Blog</h1>
        <p className="animated-text">Discover insightful articles and stories.</p>
        <button className="cta-button">Read Our Blogs</button>
      </div>
    </section>
  );
};

export default HeroSection;
