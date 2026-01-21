import React from 'react';
import './AboutUsSection.css';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our corner of the internet! We are passionate about sharing knowledge and insights 
          on various topics, from web development and technology to lifestyle and creative writing. 
          Our goal is to provide engaging and informative content that inspires and educates our readers.
        </p>
        <p>
          Our team consists of experienced writers and industry professionals dedicated to bringing you 
          high-quality articles. We believe in continuous learning and fostering a community where 
          ideas can be exchanged freely. Join us on this journey of discovery and growth!
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </section>
  );
};

export default AboutUsSection;
