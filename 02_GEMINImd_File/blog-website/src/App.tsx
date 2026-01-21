import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import BlogSection from './components/BlogSection';
import ContactUsSection from './components/ContactUsSection';
import './App.css'; // Import App.css for global styles and dark background

function App() {
  return (
    <div className="app-container">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about-us">
        <AboutUsSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="contact-us">
        <ContactUsSection />
      </div>
    </div>
  );
}

export default App;